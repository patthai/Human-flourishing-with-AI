#!/usr/bin/env python3
"""
Process raw Human Flourishing survey data for visualization.
Converts text values to numeric, computes derived metrics, and outputs clean JSON.

Usage: python3 process_data.py
"""

import csv
import json
import re
import os
from collections import Counter

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
INPUT_FILES = [
    os.path.join(SCRIPT_DIR, 'data', 'human-flourishing-synthetic-1000.csv'),
    os.path.join(SCRIPT_DIR, 'data', 'human-flourishing-survey-4-4.csv'),
]
OUTPUT_FILE = os.path.join(SCRIPT_DIR, 'data', 'processed.json')

# ── Parsing Functions ──

def parse_numeric(val):
    """Parse '7' or '10 - Completely satisfied' to int."""
    if not val or not val.strip():
        return None
    m = re.match(r'^(\d+)', val.strip())
    return int(m.group(1)) if m else None

def parse_ai(val):
    """Parse AI impact: '4 = Made this a little better' → 4. Filter out 7=N/A."""
    n = parse_numeric(val)
    if n is None or n == 7:
        return None
    return n

def parse_likert(val):
    if not val:
        return None
    mapping = {
        'strongly disagree': 1, 'disagree': 2,
        'neither agree nor disagree': 3,
        'agree': 4, 'strongly agree': 5,
    }
    return mapping.get(val.strip().lower())

def parse_frequency(val):
    if not val:
        return None
    mapping = {
        'never': 0, 'less than once a month': 1, 'about once a month': 2,
        'a few times per month': 3, 'a few times per week': 4,
        'about once a day': 5, '1-2 hours a day': 6, '5-10 times a day': 7,
    }
    return mapping.get(val.strip().lower())

def parse_bhv_frequency(val):
    if not val:
        return None
    mapping = {'never': 0, 'once': 1, 'a few times': 2, 'monthly': 3, 'weekly': 4, 'daily': 5}
    return mapping.get(val.strip().lower())

def parse_overall_quality(val):
    if not val:
        return None
    mapping = {
        'extremely negative': 1, 'moderately negative': 2, 'slightly negative': 3,
        'neither positive nor negative': 4,
        'slightly positive': 5, 'moderately positive': 6, 'extremely positive': 7,
    }
    return mapping.get(val.strip().lower())

# ── Column type definitions ──

NUMERIC_010_COLS = [
    'fl_satisfaction_1', 'fl_satisfaction_2',
    'fl_health_1', 'fl_health_2',
    'fl_purpose_1', 'fl_purpose_2',
    'fl_character_1', 'fl_character_2',
    'fl_social_1', 'fl_social_2',
    'fl_financial_1',
]

AI_IMPACT_COLS = [
    'fl_satisfaction_1_ai', 'fl_satisfaction_2_ai',
    'fl_health_1_ai', 'fl_health_2_ai',
    'fl_purpose_1_ai', 'fl_purpose_2_ai',
    'fl_character_1_ai', 'fl_character_2_ai',
    'fl_social_1_ai', 'fl_social_2_ai',
    'financial_1_ai',
    'engagement_1_ai', 'engagement_2_ai', 'engagement_3_ai',
    'mastery_skills_1_ai', 'mastery_skills_2_ai', 'mastery_skills_3_ai',
    'agency_control_1_ai', 'agency_control_2_ai', 'agency_control_4_ai',
]

LIKERT_COLS = (
    [f'engagement_{i}' for i in range(1, 4)] +
    [f'mastery_skills_{i}' for i in range(1, 4)] +
    [f'mastery_learn_{i}' for i in range(1, 4)] +
    [f'mastery_accomplish_{i}' for i in range(1, 4)] +
    [f'mastery_efficacy_{i}' for i in range(1, 4)] +
    [f'mastery_worth_{i}' for i in range(1, 4)] +
    [f'agency_control_{i}' for i in range(1, 4)] +
    [f'ex_reasoning_{i}' for i in range(1, 18)] +
    [f'ex_creativity_{i}' for i in range(1, 12)] +
    [f'add_work_{i}' for i in range(1, 8)] +
    [f'add_students_{i}' for i in range(1, 6)] +
    [f'add_social_{i}' for i in range(1, 10)] +
    [f'add_learn_{i}' for i in range(1, 8)] +
    [f'add_meaning_{i}' for i in range(1, 6)]
)

FREQUENCY_COLS = (
    [f'ai_tool_use_{i}' for i in range(1, 10)] +
    [f'ai_tool_context_{i}' for i in range(1, 13)]
)

BHV_FREQUENCY_COLS = [
    'bhv_reasoning_1', 'bhv_reasoning_2',
    'bhv_learn_1', 'bhv_learn_2',
    'bhv_social_1', 'bhv_social_2',
    'bhv_purpose_1', 'bhv_purpose_2',
    'bhv_health_1', 'bhv_health_2',
]

OVERALL_QUALITY_COLS = ['overall_quality', 'overall_quality_work', 'overall_quality_pers']

# ── Tool & Context labels ──

AI_TOOL_LABELS = {
    'ai_tool_use_1': 'Text-based chatbots',
    'ai_tool_use_2': 'Coding assistants',
    'ai_tool_use_3': 'Image generators',
    'ai_tool_use_4': 'Video/audio generators',
    'ai_tool_use_5': 'AI in office tools',
    'ai_tool_use_6': 'AI companions',
    'ai_tool_use_7': 'Autonomous agents',
    'ai_tool_use_8': 'Robots / Embodied AI',
}

AI_CONTEXT_LABELS = {
    'ai_tool_context_1': 'Work / professional tasks',
    'ai_tool_context_2': 'Studying / academic work',
    'ai_tool_context_3': 'Self-directed learning',
    'ai_tool_context_4': 'Creative projects',
    'ai_tool_context_5': 'Relationship advice',
    'ai_tool_context_6': 'Emotional support',
    'ai_tool_context_7': 'Life planning',
    'ai_tool_context_8': 'Everyday tasks',
    'ai_tool_context_9': 'Information search',
    'ai_tool_context_10': 'Medical advice',
}

# ── Grouping functions ──

def group_education(val):
    if not val:
        return None
    if 'Doctoral' in val:
        return 'Doctoral'
    if 'Master' in val:
        return "Master's"
    if 'Bachelor' in val:
        return "Bachelor's"
    if 'Associate' in val or 'Some college' in val:
        return 'Some College'
    if 'High school' in val or 'Less than' in val:
        return 'High School or Less'
    return 'Other'

def group_ai_usage(val):
    if not val:
        return None
    if val == 'Never':
        return 'Never'
    if 'Less than' in val or 'once a month' in val:
        return 'Rarely'
    if 'per month' in val:
        return 'Monthly'
    if 'per week' in val:
        return 'Weekly'
    if 'once a day' in val or 'hours' in val or 'times a day' in val:
        return 'Daily+'
    return None

# ── AI Impact Ranking Dimensions ──

AI_IMPACT_DIMENSIONS = [
    {'name': 'Life Satisfaction', 'cols': ['fl_satisfaction_1_ai', 'fl_satisfaction_2_ai']},
    {'name': 'Health', 'cols': ['fl_health_1_ai', 'fl_health_2_ai']},
    {'name': 'Purpose & Meaning', 'cols': ['fl_purpose_1_ai', 'fl_purpose_2_ai']},
    {'name': 'Character & Virtue', 'cols': ['fl_character_1_ai', 'fl_character_2_ai']},
    {'name': 'Social Relationships', 'cols': ['fl_social_1_ai', 'fl_social_2_ai']},
    {'name': 'Financial Stability', 'cols': ['financial_1_ai']},
    {'name': 'Engagement', 'cols': ['engagement_1_ai', 'engagement_2_ai', 'engagement_3_ai']},
    {'name': 'Skills & Mastery', 'cols': ['mastery_skills_1_ai', 'mastery_skills_2_ai', 'mastery_skills_3_ai']},
]

# ── Main Processing ──

def safe_mean(values):
    values = [v for v in values if v is not None]
    return sum(values) / len(values) if values else None

def load_csv(filepath):
    """Load CSV and return (headers, question_texts, data_rows)."""
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        headers = next(reader)
        rows = list(reader)

    question_texts = {}
    data_rows = []

    for row in rows:
        if not row or not row[0].strip():
            continue
        # Skip Qualtrics metadata rows
        first_val = row[0].strip()
        if first_val.startswith('{'):
            continue
        # Check if this is a question text row (second header in Qualtrics)
        if first_val in ('Start Date', 'Response Type'):
            # This is the question text row
            for i, h in enumerate(headers):
                if i < len(row) and row[i] and not row[i].startswith('{'):
                    question_texts[h] = row[i]
            continue
        data_rows.append(dict(zip(headers, row)))

    return headers, question_texts, data_rows

def process_row(row, all_cols):
    """Convert a single row's text values to numeric."""
    out = {}

    # 0-10 scale
    for col in NUMERIC_010_COLS:
        if col in all_cols:
            out[col] = parse_numeric(row.get(col, ''))

    # AI impact (0-6, 7=NA)
    for col in AI_IMPACT_COLS:
        if col in all_cols:
            out[col] = parse_ai(row.get(col, ''))

    # Likert
    for col in LIKERT_COLS:
        if col in all_cols:
            out[col] = parse_likert(row.get(col, ''))

    # Frequency
    for col in FREQUENCY_COLS:
        if col in all_cols:
            out[col] = parse_frequency(row.get(col, ''))

    # Behavioral frequency
    for col in BHV_FREQUENCY_COLS:
        if col in all_cols:
            out[col] = parse_bhv_frequency(row.get(col, ''))

    # Overall quality
    for col in OVERALL_QUALITY_COLS:
        if col in all_cols:
            out[col] = parse_overall_quality(row.get(col, ''))

    # Keep raw text for demographics
    out['gender'] = row.get('gender', '').strip() or None
    out['education'] = row.get('education', '').strip() or None
    out['income'] = row.get('income', '').strip() or None
    out['profession'] = row.get('profession', '').strip() or None
    out['relationship'] = row.get('relationship', '').strip() or None
    out['race'] = row.get('race', '').strip() or None
    out['hispanic'] = row.get('hispanic', '').strip() or None

    # Grouped demographics
    out['education_group'] = group_education(out['education'])
    out['ai_usage_group'] = group_ai_usage(row.get('ai_tool_use_1', ''))

    # ── Computed: Overall Flourishing ──
    fl_baseline = []
    for col in NUMERIC_010_COLS:
        val = out.get(col)
        if val is not None:
            if col == 'fl_financial_1':
                # Reverse score: higher worry = lower flourishing
                fl_baseline.append(10 - val)
            else:
                fl_baseline.append(val)
    out['overall_flourishing'] = safe_mean(fl_baseline)

    # ── Computed: Overall AI Impact ──
    fl_ai_vals = []
    for col in ['fl_satisfaction_1_ai', 'fl_satisfaction_2_ai',
                'fl_health_1_ai', 'fl_health_2_ai',
                'fl_purpose_1_ai', 'fl_purpose_2_ai',
                'fl_character_1_ai', 'fl_character_2_ai',
                'fl_social_1_ai', 'fl_social_2_ai', 'financial_1_ai']:
        val = out.get(col)
        if val is not None:
            fl_ai_vals.append(val)
    out['overall_ai_impact'] = safe_mean(fl_ai_vals)

    return out

def compute_demographics(data):
    """Compute demographic distributions."""
    demos = {}

    # Gender
    gender_counts = Counter(r['gender'] for r in data if r.get('gender'))
    demos['gender'] = dict(gender_counts.most_common())

    # Education group
    edu_order = ['High School or Less', 'Some College', "Bachelor's", "Master's", 'Doctoral', 'Other']
    edu_counts = Counter(r['education_group'] for r in data if r.get('education_group'))
    demos['education'] = {k: edu_counts.get(k, 0) for k in edu_order if edu_counts.get(k, 0) > 0}

    # AI usage group
    usage_order = ['Never', 'Rarely', 'Monthly', 'Weekly', 'Daily+']
    usage_counts = Counter(r['ai_usage_group'] for r in data if r.get('ai_usage_group'))
    demos['ai_usage'] = {k: usage_counts.get(k, 0) for k in usage_order if usage_counts.get(k, 0) > 0}

    # Income
    income_counts = Counter(r['income'] for r in data if r.get('income'))
    demos['income'] = dict(income_counts.most_common())

    return demos

def compute_ai_tools(data):
    """Compute AI tool usage rates."""
    n = len(data)
    tools = {}
    for col, label in AI_TOOL_LABELS.items():
        users = sum(1 for r in data if r.get(col) is not None and r[col] > 0)
        tools[label] = {'users': users, 'pct': round(users / n * 100, 1) if n else 0}
    # Sort by usage
    return dict(sorted(tools.items(), key=lambda x: -x[1]['pct']))

def compute_ai_contexts(data):
    """Compute AI usage context rates."""
    n = len(data)
    contexts = {}
    for col, label in AI_CONTEXT_LABELS.items():
        users = sum(1 for r in data if r.get(col) is not None and r[col] > 0)
        contexts[label] = {'users': users, 'pct': round(users / n * 100, 1) if n else 0}
    return dict(sorted(contexts.items(), key=lambda x: -x[1]['pct']))

def compute_ai_impact_ranking(data):
    """Compute AI impact by dimension, ranked."""
    ranking = []
    for dim in AI_IMPACT_DIMENSIONS:
        all_vals = []
        for col in dim['cols']:
            vals = [r[col] for r in data if r.get(col) is not None]
            all_vals.extend(vals)
        if all_vals:
            m = sum(all_vals) / len(all_vals)
            ranking.append({
                'dimension': dim['name'],
                'mean': round(m, 2),
                'deviation': round(m - 3, 2),  # deviation from neutral (3)
                'n': len(all_vals),
            })
    ranking.sort(key=lambda x: -x['deviation'])
    return ranking

def main():
    # Find available input file
    input_file = None
    for f in INPUT_FILES:
        if os.path.exists(f):
            input_file = f
            break
    if not input_file:
        print("Error: No input CSV found.")
        return

    print(f"Reading: {input_file}")
    headers, question_texts, raw_rows = load_csv(input_file)
    print(f"  Found {len(raw_rows)} data rows")

    # Also try to get question texts from survey file
    survey_file = os.path.join(SCRIPT_DIR, 'data', 'human-flourishing-survey-4-4.csv')
    if os.path.exists(survey_file) and survey_file != input_file:
        _, qt, _ = load_csv(survey_file)
        # Merge question texts (survey file has richer text)
        for k, v in qt.items():
            if v and k not in question_texts:
                question_texts[k] = v

    # Process rows
    all_cols = set(headers)
    processed = [process_row(row, all_cols) for row in raw_rows]
    print(f"  Processed {len(processed)} rows")

    # Compute aggregates
    demographics = compute_demographics(processed)
    ai_tools = compute_ai_tools(processed)
    ai_contexts = compute_ai_contexts(processed)
    ai_impact_ranking = compute_ai_impact_ranking(processed)

    # Build output
    output = {
        'meta': {
            'n': len(processed),
            'source': os.path.basename(input_file),
            'questions': question_texts,
        },
        'data': processed,
        'demographics': demographics,
        'ai_tools': ai_tools,
        'ai_contexts': ai_contexts,
        'ai_impact_ranking': ai_impact_ranking,
    }

    # Write JSON
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(output, f, indent=None)  # compact for smaller file

    file_size = os.path.getsize(OUTPUT_FILE) / 1024
    print(f"  Output: {OUTPUT_FILE} ({file_size:.0f} KB)")
    print(f"  Demographics: {list(demographics.keys())}")
    print(f"  AI tools: {len(ai_tools)} types")
    print(f"  AI contexts: {len(ai_contexts)} contexts")
    print(f"  AI impact ranking: {len(ai_impact_ranking)} dimensions")
    print()
    print("AI Impact Ranking (deviation from neutral):")
    for item in ai_impact_ranking:
        bar = '+' if item['deviation'] > 0 else '-'
        print(f"  {item['dimension']:25s} {item['deviation']:+.2f}  ({item['mean']:.2f})")

if __name__ == '__main__':
    main()
