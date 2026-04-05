/* ============================================
   Human Flourishing in the Age of AI — v2
   ============================================ */

// ── SVG Icons (Feather-style line icons) ──
const ICONS = {
  overall: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  aiimpact: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  satisfaction: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  health: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  purpose: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  character: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  social: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  financial: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  engagement: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  mastery: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  agency: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
  creativity: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  reasoning: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
  work: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  learning: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  emotional: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  meaning: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  demographics: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
};

// ── Section Definitions ──
const SECTIONS = [
  { id: 'satisfaction', title: 'Happiness & Life Satisfaction', icon: 'satisfaction',
    questions: [
      { col: 'fl_satisfaction_1', aiCol: 'fl_satisfaction_1_ai', scale: [0,10], labels: ['Not satisfied at all','Completely satisfied'], primary: true },
      { col: 'fl_satisfaction_2', aiCol: 'fl_satisfaction_2_ai', scale: [0,10], labels: ['Extremely unhappy','Extremely happy'] }
    ]},
  { id: 'health', title: 'Health & Wellbeing', icon: 'health',
    questions: [
      { col: 'fl_health_2', aiCol: 'fl_health_2_ai', scale: [0,10], labels: ['Poor','Excellent'], primary: true },
      { col: 'fl_health_1', aiCol: 'fl_health_1_ai', scale: [0,10], labels: ['Poor','Excellent'] }
    ]},
  { id: 'purpose', title: 'Meaning & Purpose', icon: 'purpose',
    questions: [
      { col: 'fl_purpose_1', aiCol: 'fl_purpose_1_ai', scale: [0,10], labels: ['Not at all','Completely'], primary: true },
      { col: 'fl_purpose_2', aiCol: 'fl_purpose_2_ai', scale: [0,10], labels: ['Strongly disagree','Strongly agree'] }
    ]},
  { id: 'character', title: 'Character & Virtue', icon: 'character',
    questions: [
      { col: 'fl_character_1', aiCol: 'fl_character_1_ai', scale: [0,10], labels: ['Not true of me','Completely true'], primary: true },
      { col: 'fl_character_2', aiCol: 'fl_character_2_ai', scale: [0,10], labels: ['Not true of me','Completely true'] }
    ]},
  { id: 'social', title: 'Close Social Relationships', icon: 'social',
    questions: [
      { col: 'fl_social_1', aiCol: 'fl_social_1_ai', scale: [0,10], labels: ['Not at all','Completely'], primary: true },
      { col: 'fl_social_2', aiCol: 'fl_social_2_ai', scale: [0,10], labels: ['Not at all','Completely'] }
    ]},
  { id: 'financial', title: 'Financial & Material Stability', icon: 'financial',
    questions: [
      { col: 'fl_financial_1', aiCol: 'financial_1_ai', scale: [0,10], labels: ['Never worry','Worry all the time'], primary: true, reversed: true }
    ]},
  { id: 'engagement', title: 'Engagement & Flow', icon: 'engagement',
    questions: [
      { col: 'engagement_1', aiCol: 'engagement_1_ai', scale: [1,5], labels: ['Strongly disagree','Strongly agree'], primary: true },
      { col: 'engagement_2', aiCol: 'engagement_2_ai', scale: [1,5], labels: ['Strongly disagree','Strongly agree'] },
      { col: 'engagement_3', aiCol: 'engagement_3_ai', scale: [1,5], labels: ['Strongly disagree','Strongly agree'] }
    ]},
  { id: 'mastery', title: 'Mastery & Skills', icon: 'mastery',
    questions: [
      { col: 'mastery_skills_1', aiCol: 'mastery_skills_1_ai', scale: [1,5], labels: ['Strongly disagree','Strongly agree'], primary: true },
      { col: 'mastery_skills_2', aiCol: 'mastery_skills_2_ai', scale: [1,5], labels: ['Strongly disagree','Strongly agree'] },
      { col: 'mastery_skills_3', aiCol: 'mastery_skills_3_ai', scale: [1,5], labels: ['Strongly disagree','Strongly agree'] }
    ]},
  { id: 'agency', title: 'Agency & Autonomy', icon: 'agency',
    questions: [
      { col: 'agency_control_1', aiCol: 'agency_control_1_ai', scale: [1,5], labels: ['Strongly disagree','Strongly agree'], primary: true, reversed: true },
      { col: 'agency_control_2', aiCol: 'agency_control_2_ai', scale: [1,5], labels: ['Strongly disagree','Strongly agree'], reversed: true }
    ]},
  { id: 'creativity', title: 'Creativity & AI', icon: 'creativity',
    questions: [
      { col: 'ex_creativity_1', scale: [1,5], labels: ['Strongly disagree','Strongly agree'], primary: true }
    ],
    likertItems: [
      { col: 'ex_creativity_1', pos: true }, { col: 'ex_creativity_2', pos: true },
      { col: 'ex_creativity_3', pos: true }, { col: 'ex_creativity_4', pos: true },
      { col: 'ex_creativity_5', pos: true }, { col: 'ex_creativity_6', pos: false },
      { col: 'ex_creativity_7', pos: true }, { col: 'ex_creativity_8', pos: true },
      { col: 'ex_creativity_9', pos: false }, { col: 'ex_creativity_10', pos: false },
      { col: 'ex_creativity_11', pos: true }
    ]},
  { id: 'reasoning', title: 'Reasoning & Critical Thinking', icon: 'reasoning',
    questions: [
      { col: 'ex_reasoning_1', scale: [1,5], labels: ['Strongly disagree','Strongly agree'], primary: true }
    ],
    likertItems: [
      { col: 'ex_reasoning_1', pos: true }, { col: 'ex_reasoning_2', pos: true },
      { col: 'ex_reasoning_3', pos: true }, { col: 'ex_reasoning_4', pos: true },
      { col: 'ex_reasoning_7', pos: true }, { col: 'ex_reasoning_8', pos: true },
      { col: 'ex_reasoning_9', pos: true }, { col: 'ex_reasoning_10', pos: true },
      { col: 'ex_reasoning_16', pos: true },
      { col: 'ex_reasoning_5', pos: false }, { col: 'ex_reasoning_6', pos: false },
      { col: 'ex_reasoning_11', pos: false }, { col: 'ex_reasoning_12', pos: false },
      { col: 'ex_reasoning_13', pos: false }, { col: 'ex_reasoning_14', pos: false },
      { col: 'ex_reasoning_15', pos: false }, { col: 'ex_reasoning_17', pos: false }
    ]},
  { id: 'work', title: 'Work & AI', icon: 'work',
    questions: [
      { col: 'add_work_2', scale: [1,5], labels: ['Strongly disagree','Strongly agree'], primary: true }
    ],
    likertItems: [
      { col: 'add_work_1', pos: true }, { col: 'add_work_2', pos: true },
      { col: 'add_work_3', pos: true }, { col: 'add_work_7', pos: true },
      { col: 'add_work_4', pos: false }, { col: 'add_work_5', pos: false },
      { col: 'add_work_6', pos: false }
    ]},
  { id: 'learning', title: 'Learning & Education', icon: 'learning',
    questions: [
      { col: 'add_learn_1', scale: [1,5], labels: ['Strongly disagree','Strongly agree'], primary: true }
    ],
    likertItems: [
      { col: 'add_learn_1', pos: true }, { col: 'add_learn_2', pos: true },
      { col: 'add_learn_4', pos: true }, { col: 'add_learn_5', pos: true },
      { col: 'add_learn_7', pos: true },
      { col: 'add_learn_3', pos: false }, { col: 'add_learn_6', pos: false }
    ]},
  { id: 'emotional', title: 'Social & Emotional Impact', icon: 'emotional',
    questions: [
      { col: 'add_social_1', scale: [1,5], labels: ['Strongly disagree','Strongly agree'], primary: true }
    ],
    likertItems: [
      { col: 'add_social_1', pos: true }, { col: 'add_social_3', pos: true },
      { col: 'add_social_4', pos: true },
      { col: 'add_social_2', pos: false }, { col: 'add_social_5', pos: false },
      { col: 'add_social_6', pos: false }, { col: 'add_social_7', pos: false },
      { col: 'add_social_8', pos: false }, { col: 'add_social_9', pos: false }
    ]},
  { id: 'meaning', title: 'Life Direction & Meaning', icon: 'meaning',
    questions: [
      { col: 'add_meaning_1', scale: [1,5], labels: ['Strongly disagree','Strongly agree'], primary: true }
    ],
    likertItems: [
      { col: 'add_meaning_1', pos: true }, { col: 'add_meaning_2', pos: true },
      { col: 'add_meaning_4', pos: true },
      { col: 'add_meaning_3', pos: false }, { col: 'add_meaning_5', pos: false }
    ]},
];

// ── Global State ──
let DATA = { raw: [], meta: {}, demographics: {}, ai_tools: {}, ai_contexts: {}, ai_impact_ranking: [] };
let FILTERED = [];
let QUESTIONS = {};
const CHARTS = new Map();

// ── Statistics ──
function mean(a) { return a.length ? a.reduce((s,v) => s+v, 0) / a.length : 0; }
function median(a) { if (!a.length) return 0; const s = [...a].sort((x,y) => x-y); const m = s.length >> 1; return s.length & 1 ? s[m] : (s[m-1]+s[m])/2; }
function stddev(a) { if (a.length < 2) return 0; const m = mean(a); return Math.sqrt(a.reduce((s,v) => s+(v-m)**2, 0)/(a.length-1)); }

function gaussK(u) { return Math.exp(-0.5*u*u) / Math.sqrt(2*Math.PI); }
function kde(data, nPts, sMin, sMax) {
  if (!data.length) return [];
  const bw = Math.max(0.3, 1.06 * stddev(data) * Math.pow(data.length, -0.2));
  const step = (sMax - sMin) / nPts;
  const pts = [];
  for (let i = 0; i <= nPts; i++) {
    const x = sMin + i * step;
    let d = 0;
    for (const v of data) d += gaussK((x - v) / bw);
    pts.push({ x, y: d / (data.length * bw) });
  }
  return pts;
}

function col(data, name) { return data.map(r => r[name]).filter(v => v != null); }

// ── Tooltip ──
const TT = {
  el: null,
  init() { this.el = document.getElementById('tooltip'); },
  show(html, e) { this.el.innerHTML = html; this.el.classList.add('visible'); this.pos(e); },
  pos(e) {
    const r = this.el.getBoundingClientRect();
    let x = e.clientX + 12, y = e.clientY + 12;
    if (x + r.width > window.innerWidth) x = e.clientX - r.width - 12;
    if (y + r.height > window.innerHeight) y = e.clientY - r.height - 12;
    this.el.style.left = x + 'px'; this.el.style.top = y + 'px';
  },
  hide() { this.el.classList.remove('visible'); }
};

// ── Spectrum Bar Renderer (Dual Density) ──
function renderSpectrumBar(container, data, qConfig, chartId) {
  const vals = col(data, qConfig.col);
  const aiVals = qConfig.aiCol ? col(data, qConfig.aiCol) : [];
  if (!vals.length) { container.innerHTML = '<p class="annotation">Insufficient data.</p>'; return null; }

  const isPrimary = qConfig.primary;
  const margin = { top: isPrimary ? 55 : 42, right: 20, bottom: 50, left: 20 };
  const totalW = container.clientWidth || 800;
  const w = totalW - margin.left - margin.right;
  const trackH = isPrimary ? 26 : 20;
  const densityH = isPrimary ? 85 : 60;
  const totalH = margin.top + densityH + trackH + margin.bottom;

  const svg = d3.select(container).append('svg')
    .attr('viewBox', `0 0 ${totalW} ${totalH}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .style('width', '100%').style('height', 'auto');
  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

  // Gradient
  const gradId = `grad-${chartId}`;
  const defs = svg.append('defs');
  const grad = defs.append('linearGradient').attr('id', gradId).attr('x1','0%').attr('x2','100%');
  if (qConfig.reversed) {
    grad.append('stop').attr('offset','0%').attr('stop-color','#16a34a');
    grad.append('stop').attr('offset','50%').attr('stop-color','#f59e0b');
    grad.append('stop').attr('offset','100%').attr('stop-color','#dc2626');
  } else {
    grad.append('stop').attr('offset','0%').attr('stop-color','#dc2626');
    grad.append('stop').attr('offset','50%').attr('stop-color','#f59e0b');
    grad.append('stop').attr('offset','100%').attr('stop-color','#16a34a');
  }

  const x = d3.scaleLinear().domain(qConfig.scale).range([0, w]);

  // Track
  g.append('rect').attr('x',0).attr('y',densityH).attr('width',w).attr('height',trackH)
    .attr('rx',trackH/2).attr('fill',`url(#${gradId})`).attr('opacity',0.25);

  // ── Baseline density (light grey) ──
  const density1 = kde(vals, 120, qConfig.scale[0], qConfig.scale[1]);
  let maxY = d3.max(density1, d => d.y) || 1;

  // ── AI-adjusted density (dark grey) ──
  let density2 = [], aiAdj = [];
  if (aiVals.length > 5) {
    const scaleRange = qConfig.scale[1] - qConfig.scale[0];
    const scaleFactor = scaleRange / 10;
    data.forEach(r => {
      const base = r[qConfig.col];
      const ai = r[qConfig.aiCol];
      if (base != null && ai != null) {
        const adj = Math.max(qConfig.scale[0], Math.min(qConfig.scale[1], base + (ai - 3) * scaleFactor));
        aiAdj.push(adj);
      }
    });
    if (aiAdj.length > 5) {
      density2 = kde(aiAdj, 120, qConfig.scale[0], qConfig.scale[1]);
      const maxY2 = d3.max(density2, d => d.y) || 0;
      maxY = Math.max(maxY, maxY2);
    }
  }

  const yScale = d3.scaleLinear().domain([0, maxY]).range([densityH, 0]);
  const area = d3.area().x(d => x(d.x)).y0(densityH).y1(d => yScale(d.y)).curve(d3.curveBasis);

  // Draw baseline density (light grey)
  const densityPath1 = g.append('path').datum(density1).attr('d', area)
    .attr('fill', 'rgba(0,0,0,0.06)').attr('stroke', 'rgba(0,0,0,0.18)').attr('stroke-width', 1.5)
    .style('opacity', 0);

  // Draw AI-adjusted density (dark grey)
  let densityPath2 = null;
  if (density2.length) {
    densityPath2 = g.append('path').datum(density2).attr('d', area)
      .attr('fill', 'rgba(0,0,0,0.12)').attr('stroke', 'rgba(0,0,0,0.35)').attr('stroke-width', 1.5)
      .style('opacity', 0);
  }

  // Hover area
  g.append('rect').attr('x',0).attr('y',0).attr('width',w).attr('height',densityH+trackH)
    .attr('fill','transparent').style('cursor','crosshair')
    .on('mousemove', function(event) {
      const [mx] = d3.pointer(event);
      const xVal = x.invert(mx);
      const clamped = Math.max(qConfig.scale[0], Math.min(qConfig.scale[1], Math.round(xVal)));
      const count = vals.filter(v => Math.round(v) === clamped).length;
      const pct = ((count / vals.length) * 100).toFixed(1);
      TT.show(`<strong>Score: ${clamped}</strong><div class="tt-row"><span class="tt-label">Respondents</span><span>${count} (${pct}%)</span></div>`, event);
    })
    .on('mouseleave', () => TT.hide());

  // ── Baseline average ──
  const avg = mean(vals);
  const med = median(vals);
  const sd = stddev(vals);

  const avgLine = g.append('line')
    .attr('x1',x(avg)).attr('x2',x(avg)).attr('y1',-5).attr('y2',densityH+trackH+5)
    .attr('stroke','#0f172a').attr('stroke-width',2).attr('stroke-dasharray','5,3').style('opacity',0);

  const avgLabel = g.append('text').attr('x',x(avg)).attr('y',-14).attr('text-anchor','middle')
    .attr('font-family',"'Newsreader', serif").attr('font-size',isPrimary?'26px':'20px')
    .attr('font-weight','500').attr('fill','#0f172a').text(avg.toFixed(1)).style('opacity',0);

  // Avg tooltip
  g.append('rect').attr('x',x(avg)-15).attr('y',-30).attr('width',30).attr('height',densityH+trackH+35)
    .attr('fill','transparent').style('cursor','pointer')
    .on('mouseenter', e => TT.show(
      `<strong>Current Average</strong><div class="tt-row"><span class="tt-label">Mean</span><span class="tt-val">${avg.toFixed(2)}</span></div>` +
      `<div class="tt-row"><span class="tt-label">Median</span><span>${med.toFixed(1)}</span></div>` +
      `<div class="tt-row"><span class="tt-label">Std Dev</span><span>\u00B1${sd.toFixed(2)}</span></div>` +
      `<div class="tt-row"><span class="tt-label">n</span><span>${vals.length}</span></div>`, e))
    .on('mousemove', e => TT.pos(e)).on('mouseleave', () => TT.hide());

  // ── AI average marker ──
  let aiGroup = null, tensionLine = null;
  if (aiAdj.length > 5) {
    const aiAvg = mean(aiAdj);
    const aiMeanRaw = mean(aiVals);
    const pullColor = aiMeanRaw > 3.1 ? '#16a34a' : aiMeanRaw < 2.9 ? '#dc2626' : '#64748b';
    const aiY = densityH + trackH / 2;

    // Tension line
    tensionLine = g.append('line').attr('x1',x(avg)).attr('x2',x(aiAvg)).attr('y1',aiY).attr('y2',aiY)
      .attr('stroke',pullColor).attr('stroke-width',2.5)
      .attr('stroke-dasharray','6,3').style('opacity',0);

    // "AI" label — offset if too close to baseline avg
    const pxDist = Math.abs(x(aiAvg) - x(avg));
    const labelOffset = pxDist < 40 ? (aiAvg >= avg ? 24 : -24) : 0;
    aiGroup = g.append('g').attr('transform',`translate(${x(aiAvg)},0)`).style('opacity',0).style('cursor','pointer');
    aiGroup.append('line').attr('x1',0).attr('x2',0).attr('y1',-5).attr('y2',densityH+trackH+5)
      .attr('stroke',pullColor).attr('stroke-width',1.5).attr('stroke-dasharray','3,2');
    aiGroup.append('text').attr('x',labelOffset).attr('y',-16).attr('text-anchor','middle')
      .attr('font-family',"'Inter', sans-serif").attr('font-size','12px').attr('font-weight','700')
      .attr('fill','#0f172a').text('AI');
    aiGroup.append('text').attr('x',labelOffset).attr('y',-4).attr('text-anchor','middle')
      .attr('font-family',"'Newsreader', serif").attr('font-size','14px').attr('font-weight','500')
      .attr('fill', pullColor).text(aiAvg.toFixed(1));

    const aiQText = QUESTIONS[qConfig.aiCol] || 'How has using AI tools affected this dimension?';
    aiGroup.on('mouseenter', e => TT.show(
      `<strong>AI-Adjusted Average</strong>` +
      `<div style="font-size:0.78rem;color:#94a3b8;margin:4px 0 6px">${aiQText}</div>` +
      `<div class="tt-row"><span class="tt-label">AI Impact Mean</span><span class="tt-val">${aiMeanRaw.toFixed(2)}</span></div>` +
      `<div class="tt-row"><span class="tt-label">Scale</span><span>0 (much worse) \u2013 6 (much better)</span></div>` +
      `<div class="tt-row"><span class="tt-label">Direction</span><span style="color:${pullColor}">${aiMeanRaw > 3.1 ? '\u2191 Positive' : aiMeanRaw < 2.9 ? '\u2193 Negative' : '\u2194 Neutral'}</span></div>` +
      `<div class="tt-row"><span class="tt-label">n</span><span>${aiVals.length}</span></div>`, e))
    .on('mousemove', e => TT.pos(e)).on('mouseleave', () => TT.hide());
  }

  // Scale labels
  g.append('text').attr('x',0).attr('y',densityH+trackH+22)
    .attr('font-family',"'Inter', sans-serif").attr('font-size','11px').attr('fill','#94a3b8').text(qConfig.labels[0]);
  g.append('text').attr('x',w).attr('y',densityH+trackH+22).attr('text-anchor','end')
    .attr('font-family',"'Inter', sans-serif").attr('font-size','11px').attr('fill','#94a3b8').text(qConfig.labels[1]);

  // Ticks
  const tickStep = qConfig.scale[1] <= 5 ? 1 : 2;
  d3.range(qConfig.scale[0], qConfig.scale[1]+1, tickStep).forEach(t => {
    g.append('line').attr('x1',x(t)).attr('x2',x(t)).attr('y1',densityH+trackH+2).attr('y2',densityH+trackH+6).attr('stroke','#cbd5e1');
    g.append('text').attr('x',x(t)).attr('y',densityH+trackH+16).attr('text-anchor','middle')
      .attr('font-family',"'Inter', sans-serif").attr('font-size','9px').attr('fill','#cbd5e1').text(t);
  });

  // Legend
  const legY = densityH + trackH + 34;
  g.append('rect').attr('x',0).attr('y',legY).attr('width',12).attr('height',8).attr('rx',2).attr('fill','rgba(0,0,0,0.08)');
  g.append('text').attr('x',16).attr('y',legY+7).attr('font-family',"'Inter', sans-serif").attr('font-size','9px').attr('fill','#94a3b8').text('Current');
  if (density2.length) {
    g.append('rect').attr('x',70).attr('y',legY).attr('width',12).attr('height',8).attr('rx',2).attr('fill','rgba(0,0,0,0.18)');
    g.append('text').attr('x',86).attr('y',legY+7).attr('font-family',"'Inter', sans-serif").attr('font-size','9px').attr('fill','#94a3b8').text('AI-adjusted');
  }

  return { densityPath1, densityPath2, avgLine, avgLabel, tensionLine, aiGroup };
}

// ── Horizontal Bar Chart ──
function renderHBarChart(container, items, color, maxPct) {
  const margin = { top: 8, right: 60, bottom: 8, left: 180 };
  const barH = 26, gap = 4;
  const h = items.length * (barH + gap) + margin.top + margin.bottom;
  const totalW = container.clientWidth || 700;
  const w = totalW - margin.left - margin.right;
  maxPct = maxPct || Math.max(...items.map(d => d.pct), 1);

  const svg = d3.select(container).append('svg').attr('viewBox', `0 0 ${totalW} ${h}`)
    .attr('preserveAspectRatio', 'xMidYMid meet').style('width', '100%').style('height', 'auto');
  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
  const x = d3.scaleLinear().domain([0, maxPct]).range([0, w]);

  items.forEach((d, i) => {
    const y = i * (barH + gap);
    g.append('rect').attr('x', 0).attr('y', y).attr('width', x(d.pct)).attr('height', barH)
      .attr('rx', 4).attr('fill', color).attr('opacity', 0.7);
    g.append('text').attr('x', -8).attr('y', y + barH / 2 + 1).attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle').attr('font-family', "'Inter', sans-serif")
      .attr('font-size', '12px').attr('fill', '#475569').text(d.label.length > 28 ? d.label.slice(0,26)+'…' : d.label);
    g.append('text').attr('x', x(d.pct) + 6).attr('y', y + barH / 2 + 1)
      .attr('dominant-baseline', 'middle').attr('font-family', "'Inter', sans-serif")
      .attr('font-size', '12px').attr('font-weight', '600').attr('fill', '#0f172a').text(d.pct.toFixed(0) + '%');
  });
}

// ── Diverging Bar Chart (AI Impact) ──
function renderDivergingChart(container, ranking) {
  const margin = { top: 8, right: 50, bottom: 24, left: 160 };
  const barH = 30, gap = 6;
  const h = ranking.length * (barH + gap) + margin.top + margin.bottom;
  const totalW = container.clientWidth || 700;
  const w = totalW - margin.left - margin.right;
  const maxDev = Math.max(...ranking.map(d => Math.abs(d.deviation)), 0.5);

  const svg = d3.select(container).append('svg').attr('viewBox', `0 0 ${totalW} ${h}`)
    .attr('preserveAspectRatio', 'xMidYMid meet').style('width', '100%').style('height', 'auto');
  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
  const x = d3.scaleLinear().domain([-maxDev, maxDev]).range([0, w]);
  const center = x(0);

  // Center line
  g.append('line').attr('x1', center).attr('x2', center).attr('y1', -4).attr('y2', h - margin.top - margin.bottom + 4)
    .attr('stroke', '#cbd5e1').attr('stroke-width', 1);
  g.append('text').attr('x', center).attr('y', h - margin.top - margin.bottom + 18).attr('text-anchor', 'middle')
    .attr('font-family', "'Inter', sans-serif").attr('font-size', '9px').attr('fill', '#94a3b8').text('Neutral (3.0)');

  ranking.forEach((d, i) => {
    const y = i * (barH + gap);
    const barX = d.deviation >= 0 ? center : x(d.deviation);
    const barW = Math.abs(x(d.deviation) - center);
    const fillColor = d.deviation >= 0 ? '#16a34a' : '#dc2626';

    g.append('rect').attr('x', barX).attr('y', y).attr('width', barW).attr('height', barH)
      .attr('rx', 4).attr('fill', fillColor).attr('opacity', 0.6);
    g.append('text').attr('x', -8).attr('y', y + barH / 2 + 1).attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle').attr('font-family', "'Inter', sans-serif")
      .attr('font-size', '12px').attr('fill', '#475569').text(d.dimension);
    g.append('text').attr('x', d.deviation >= 0 ? x(d.deviation) + 6 : x(d.deviation) - 6)
      .attr('y', y + barH / 2 + 1).attr('text-anchor', d.deviation >= 0 ? 'start' : 'end')
      .attr('dominant-baseline', 'middle').attr('font-family', "'Inter', sans-serif")
      .attr('font-size', '12px').attr('font-weight', '600')
      .attr('fill', fillColor).text((d.deviation >= 0 ? '+' : '') + d.deviation.toFixed(2));
  });
}

// ── Likert Summary Chart ──
function renderLikertChart(container, data, items, chartId) {
  if (!items || !items.length) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'likert-chart-container';
  wrapper.innerHTML = '<div class="likert-chart-title">Item-Level Responses</div>';

  items.forEach((item, i) => {
    const vals = col(data, item.col);
    if (!vals.length) return;
    const avg = mean(vals);
    const qText = QUESTIONS[item.col] || item.col;
    const shortText = qText.length > 100 ? qText.substring(0, 98) + '\u2026' : qText;

    const row = document.createElement('div');
    row.className = 'likert-item';
    row.innerHTML = `<div class="likert-text" title="${qText}">${shortText}</div>
      <div class="likert-bar-wrap" id="lb-${chartId}-${i}"></div>
      <div class="likert-value" style="color:${item.pos ? (avg >= 3 ? '#16a34a' : '#dc2626') : (avg <= 3 ? '#16a34a' : '#dc2626')}">${avg.toFixed(1)}</div>`;
    wrapper.appendChild(row);

    requestAnimationFrame(() => {
      const el = document.getElementById(`lb-${chartId}-${i}`);
      if (!el) return;
      const bw = el.clientWidth || 280, bh = 28;
      const svg = d3.select(el).append('svg').attr('width', bw).attr('height', bh);
      svg.append('rect').attr('x',0).attr('y',8).attr('width',bw).attr('height',12).attr('rx',6).attr('fill','#f1f5f9');
      const fillW = ((avg - 1) / 4) * bw;
      const fc = item.pos ? (avg >= 3.5 ? '#16a34a' : avg >= 2.5 ? '#f59e0b' : '#dc2626')
                          : (avg <= 2.5 ? '#16a34a' : avg <= 3.5 ? '#f59e0b' : '#dc2626');
      svg.append('rect').attr('x',0).attr('y',8).attr('width',fillW).attr('height',12).attr('rx',6).attr('fill',fc).attr('opacity',0.3);
      svg.append('circle').attr('cx',fillW).attr('cy',14).attr('r',5).attr('fill',fc);
      svg.append('line').attr('x1',bw/2).attr('x2',bw/2).attr('y1',6).attr('y2',22).attr('stroke','#cbd5e1').attr('stroke-dasharray','2,2');
    });
  });
  container.appendChild(wrapper);
}

// ── Compute demographics from filtered data ──
function computeDemographics(data) {
  const n = data.length;
  const count = (key) => {
    const c = {};
    data.forEach(r => { const v = r[key]; if (v) c[v] = (c[v]||0) + 1; });
    return Object.entries(c).sort((a,b) => b[1]-a[1]).map(([label, ct]) => ({ label, count: ct, pct: ct/n*100 }));
  };

  // AI tool usage
  const toolLabels = {
    ai_tool_use_1: 'Text chatbots', ai_tool_use_2: 'Coding assistants',
    ai_tool_use_3: 'Image generators', ai_tool_use_4: 'Video/audio generators',
    ai_tool_use_5: 'AI in office tools', ai_tool_use_6: 'AI companions',
    ai_tool_use_7: 'Autonomous agents', ai_tool_use_8: 'Robots / Embodied AI'
  };
  const tools = Object.entries(toolLabels).map(([col, label]) => {
    const users = data.filter(r => r[col] != null && r[col] > 0).length;
    return { label, count: users, pct: users/n*100 };
  }).sort((a,b) => b.pct - a.pct);

  // AI contexts
  const ctxLabels = {
    ai_tool_context_1: 'Work / professional', ai_tool_context_2: 'Academic work',
    ai_tool_context_3: 'Self-directed learning', ai_tool_context_4: 'Creative projects',
    ai_tool_context_5: 'Relationship advice', ai_tool_context_6: 'Emotional support',
    ai_tool_context_7: 'Life planning', ai_tool_context_8: 'Everyday tasks',
    ai_tool_context_9: 'Information search', ai_tool_context_10: 'Medical advice'
  };
  const contexts = Object.entries(ctxLabels).map(([col, label]) => {
    const users = data.filter(r => r[col] != null && r[col] > 0).length;
    return { label, count: users, pct: users/n*100 };
  }).sort((a,b) => b.pct - a.pct);

  // AI impact ranking
  const aiDims = [
    { name: 'Life Satisfaction', cols: ['fl_satisfaction_1_ai','fl_satisfaction_2_ai'] },
    { name: 'Health', cols: ['fl_health_1_ai','fl_health_2_ai'] },
    { name: 'Purpose & Meaning', cols: ['fl_purpose_1_ai','fl_purpose_2_ai'] },
    { name: 'Character & Virtue', cols: ['fl_character_1_ai','fl_character_2_ai'] },
    { name: 'Social Relationships', cols: ['fl_social_1_ai','fl_social_2_ai'] },
    { name: 'Financial Stability', cols: ['financial_1_ai'] },
    { name: 'Engagement', cols: ['engagement_1_ai','engagement_2_ai','engagement_3_ai'] },
    { name: 'Skills & Mastery', cols: ['mastery_skills_1_ai','mastery_skills_2_ai','mastery_skills_3_ai'] },
  ];
  const ranking = aiDims.map(dim => {
    const allVals = dim.cols.flatMap(c => col(data, c));
    const m = allVals.length ? mean(allVals) : 3;
    return { dimension: dim.name, mean: m, deviation: m - 3, n: allVals.length };
  }).sort((a,b) => b.deviation - a.deviation);

  return { gender: count('gender'), education: count('education_group'), aiUsage: count('ai_usage_group'), tools, contexts, ranking };
}

// ── Editorial Text ──
function genEditorial(section, data) {
  const q = section.questions.find(q => q.primary) || section.questions[0];
  const vals = col(data, q.col);
  if (!vals.length) return '';
  const avg = mean(vals);
  const pct = avg / q.scale[1];
  const lvl = pct > 0.7 ? 'relatively high' : pct > 0.5 ? 'moderate' : pct > 0.3 ? 'below-average' : 'low';
  let aiText = '';
  if (q.aiCol) {
    const aiVals = col(data, q.aiCol);
    if (aiVals.length) {
      const am = mean(aiVals);
      const dir = am > 3.3 ? 'positive' : am < 2.7 ? 'negative' : 'neutral';
      const str = Math.abs(am-3) > 1 ? 'notably' : Math.abs(am-3) > 0.3 ? 'modestly' : 'minimally';
      aiText = dir === 'positive' ? `AI is perceived as a ${str} positive force here, shifting scores upward.`
             : dir === 'negative' ? `AI is perceived as having a ${str} negative effect, pulling scores downward.`
             : `AI\u2019s perceived impact is largely neutral in this domain.`;
    }
  }
  const texts = {
    satisfaction: `Respondents report ${lvl} life satisfaction, averaging ${avg.toFixed(1)} out of 10. ${aiText}`,
    health: `Overall health ratings center around ${avg.toFixed(1)}/10, placing the sample in the ${lvl} range. ${aiText}`,
    purpose: `Respondents report a ${lvl} sense that the things they do are worthwhile (${avg.toFixed(1)}/10). ${aiText}`,
    character: `Self-assessed character scores average ${avg.toFixed(1)}/10 \u2014 a ${lvl} reading. ${aiText}`,
    social: `Social relationship satisfaction sits at ${avg.toFixed(1)}/10. ${aiText}`,
    financial: `Financial worry averages ${avg.toFixed(1)}/10 (higher = more worry). ${aiText}`,
    engagement: `Engagement levels average ${avg.toFixed(1)}/5 \u2014 ${lvl} absorption in activities. ${aiText}`,
    mastery: `Skill utilization averages ${avg.toFixed(1)}/5, suggesting ${lvl} mastery expression. ${aiText}`,
    agency: `Agreement that others control decisions averages ${avg.toFixed(1)}/5. ${aiText}`,
    creativity: `Respondents show ${lvl} agreement that AI enhances creative output. The balance between AI as collaborator and substitute remains a live tension.`,
    reasoning: `Critical thinking in the age of AI reveals a complex landscape. Respondents show ${lvl} agreement that AI enhances analytical capacity.`,
    work: `Workplace AI integration shows ${lvl} agreement that AI positively impacts work, alongside concerns about meaning and displacement.`,
    learning: `AI\u2019s role in learning shows ${lvl} agreement that it makes new topics more approachable.`,
    emotional: `AI\u2019s entry into emotional support shows mixed results. Benefits from AI conversations coexist with concerns about delayed professional help-seeking.`,
    meaning: `Life direction and meaning-making with AI reveal generative tension: ${lvl} agreement that AI helps clarify goals, with concern about weakened identity.`,
  };
  return texts[section.id] || `Average: ${avg.toFixed(1)}. ${aiText}`;
}

// ── Render All Sections ──
function renderAll(data) {
  const results = document.getElementById('results');
  results.innerHTML = '';
  CHARTS.clear();
  const demos = computeDemographics(data);

  // ── 1. Participant Profile ──
  const demoSection = document.createElement('section');
  demoSection.className = 'flourishing-section';
  demoSection.id = 'section-demographics';
  demoSection.innerHTML = `<div class="section-inner">
    <span class="section-icon">${ICONS.demographics}</span>
    <h2 class="section-title">Participant Profile</h2>
    <p class="section-question" style="font-style:normal;max-width:none">${data.length.toLocaleString()} respondents across demographics, education levels, and AI usage patterns.</p>
    <div class="demo-grid">
      <div class="demo-chart"><div class="demo-chart-title">Gender</div><div id="chart-gender"></div></div>
      <div class="demo-chart"><div class="demo-chart-title">Education Level</div><div id="chart-education"></div></div>
      <div class="demo-chart"><div class="demo-chart-title">AI Usage Frequency (Chatbots)</div><div id="chart-aiusage"></div></div>
    </div>
    <div class="demo-grid" style="margin-top:32px">
      <div class="demo-chart"><div class="demo-chart-title">AI Tools Used</div><div id="chart-tools"></div></div>
      <div class="demo-chart"><div class="demo-chart-title">What AI Is Used For</div><div id="chart-contexts"></div></div>
    </div>
  </div>`;
  results.appendChild(demoSection);

  requestAnimationFrame(() => {
    if (demos.gender.length) renderHBarChart(document.getElementById('chart-gender'), demos.gender, '#6366f1', 100);
    if (demos.education.length) renderHBarChart(document.getElementById('chart-education'), demos.education, '#6366f1', 100);
    if (demos.aiUsage.length) renderHBarChart(document.getElementById('chart-aiusage'), demos.aiUsage, '#6366f1', 100);
    if (demos.tools.length) renderHBarChart(document.getElementById('chart-tools'), demos.tools, '#2563eb', 100);
    if (demos.contexts.length) renderHBarChart(document.getElementById('chart-contexts'), demos.contexts, '#2563eb', 100);
  });

  // ── 2. Overall Flourishing ──
  const overallSection = document.createElement('section');
  overallSection.className = 'flourishing-section';
  overallSection.id = 'section-overall';
  const ofVals = col(data, 'overall_flourishing');
  const ofAvg = ofVals.length ? mean(ofVals) : 0;
  const oaiVals = col(data, 'overall_ai_impact');
  const oaiAvg = oaiVals.length ? mean(oaiVals) : 3;
  overallSection.innerHTML = `<div class="section-inner">
    <span class="section-icon">${ICONS.overall}</span>
    <h2 class="section-title">Overall Human Flourishing</h2>
    <p class="section-question" style="font-style:normal">Composite score averaging all flourishing dimensions (satisfaction, health, purpose, character, social relationships, and financial stability).</p>
    <div class="spectrum-container" id="spectrum-overall"></div>
    <p class="editorial">Across all dimensions, respondents report an overall flourishing score of ${ofAvg.toFixed(1)} out of 10. AI\u2019s aggregate perceived impact is ${oaiAvg > 3.2 ? 'modestly positive' : oaiAvg < 2.8 ? 'modestly negative' : 'largely neutral'} (${oaiAvg.toFixed(2)}/6, where 3 = no effect). The light grey distribution shows where people currently stand; the dark grey shows the AI-adjusted distribution.</p>
  </div>`;
  results.appendChild(overallSection);

  requestAnimationFrame(() => {
    const el = document.getElementById('spectrum-overall');
    if (el) {
      const elems = renderSpectrumBar(el, data, {
        col: 'overall_flourishing', aiCol: 'overall_ai_impact',
        scale: [0, 10], labels: ['Low flourishing', 'High flourishing'], primary: true
      }, 'overall');
      if (elems) CHARTS.set('overall', elems);
    }
  });

  // ── 3. AI Impact Overview ──
  const aiSection = document.createElement('section');
  aiSection.className = 'flourishing-section';
  aiSection.id = 'section-aiimpact';
  aiSection.innerHTML = `<div class="section-inner">
    <span class="section-icon">${ICONS.aiimpact}</span>
    <h2 class="section-title">Where AI Helps \u2014 and Where It Hurts</h2>
    <p class="section-question" style="font-style:normal">Mean AI impact across each flourishing dimension. Bars extend right for positive impact (green) and left for negative impact (red), centered on neutral (3.0).</p>
    <div id="chart-airanking" style="margin:24px 0"></div>
    <p class="editorial">${demos.ranking[0]?.dimension || 'Skills'} shows the strongest positive AI effect (${demos.ranking[0]?.deviation > 0 ? '+' : ''}${demos.ranking[0]?.deviation.toFixed(2)}), while ${demos.ranking[demos.ranking.length-1]?.dimension || 'Social'} shows the most negative (${demos.ranking[demos.ranking.length-1]?.deviation.toFixed(2)}). Most dimensions cluster slightly above neutral, suggesting AI is perceived as a modest net positive \u2014 but the variance across domains tells a richer story.</p>
  </div>`;
  results.appendChild(aiSection);

  requestAnimationFrame(() => {
    const el = document.getElementById('chart-airanking');
    if (el && demos.ranking.length) renderDivergingChart(el, demos.ranking);
  });

  // ── 4. Individual Flourishing Sections ──
  SECTIONS.forEach((section, sIdx) => {
    const el = document.createElement('section');
    el.className = 'flourishing-section';
    el.id = `section-${section.id}`;
    const primaryQ = section.questions.find(q => q.primary) || section.questions[0];
    const qText = QUESTIONS[primaryQ.col] || primaryQ.col;

    let html = `<div class="section-inner">
      <span class="section-icon">${ICONS[section.icon] || ''}</span>
      <h2 class="section-title">${section.title}</h2>
      <p class="section-question">${qText}</p>
      <div class="spectrum-container" id="spectrum-${section.id}-0"></div>`;

    section.questions.forEach((q, qi) => {
      if (qi === 0) return;
      const qt = QUESTIONS[q.col] || q.col;
      html += `<p class="spectrum-sub-label">${qt}</p><div class="spectrum-container" id="spectrum-${section.id}-${qi}"></div>`;
    });

    if (section.likertItems) html += `<div id="likert-${section.id}"></div>`;
    html += `<p class="editorial">${genEditorial(section, data)}</p></div>`;
    el.innerHTML = html;
    results.appendChild(el);

    // Render spectrum bars
    requestAnimationFrame(() => {
      section.questions.forEach((q, qi) => {
        const ctr = document.getElementById(`spectrum-${section.id}-${qi}`);
        if (ctr) {
          const cid = `${section.id}-${qi}`;
          const elems = renderSpectrumBar(ctr, data, q, cid);
          if (elems) CHARTS.set(cid, elems);
        }
      });
      if (section.likertItems) {
        const lc = document.getElementById(`likert-${section.id}`);
        if (lc) renderLikertChart(lc, data, section.likertItems, section.id);
      }
    });
  });
}

// ── Navigation ──
function setupNavigation() {
  const navLinks = document.getElementById('nav-links');
  navLinks.innerHTML = '';
  const allSections = [
    { id: 'demographics', title: 'Participants', icon: 'demographics' },
    { id: 'overall', title: 'Overall Flourishing', icon: 'overall' },
    { id: 'aiimpact', title: 'AI Impact', icon: 'aiimpact' },
    ...SECTIONS.map(s => ({ id: s.id, title: s.title, icon: s.icon }))
  ];

  allSections.forEach(s => {
    const a = document.createElement('a');
    a.className = 'nav-link'; a.href = `#section-${s.id}`; a.dataset.section = s.id;
    a.innerHTML = `<span class="nav-icon">${ICONS[s.icon] ? '<span style="display:inline-flex;width:16px;height:16px">' + ICONS[s.icon].replace(/width="28"/g,'width="16"').replace(/height="28"/g,'height="16"') + '</span>' : ''}</span><span>${s.title}</span>`;
    a.addEventListener('click', e => { e.preventDefault(); document.getElementById(`section-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); navLinks.classList.remove('open'); });
    navLinks.appendChild(a);
  });

  document.getElementById('nav-toggle').addEventListener('click', () => navLinks.classList.toggle('open'));

  // Active section observer
  const sectionEls = allSections.map(s => document.getElementById(`section-${s.id}`)).filter(Boolean);
  const navObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id.replace('section-', '');
        document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.section === id));
      }
    });
  }, { rootMargin: '-100px 0px -60% 0px' });
  sectionEls.forEach(el => navObs.observe(el));

  // Show/hide sticky nav
  const methEl = document.getElementById('methodology');
  const stickyNav = document.getElementById('sticky-nav');
  const filterBar = document.getElementById('filter-bar');
  new IntersectionObserver(([e]) => {
    const show = !e.isIntersecting && e.boundingClientRect.top < 0;
    stickyNav.classList.toggle('visible', show);
    filterBar.classList.toggle('visible', show);
  }).observe(methEl);
}

// ── Filters ──
function setupFilters(data) {
  const controls = document.getElementById('filter-controls');
  controls.innerHTML = '';
  const filters = [
    { key: 'gender', label: 'Gender', values: [...new Set(data.map(r => r.gender).filter(Boolean))].sort() },
    { key: 'education_group', label: 'Education', values: ['High School or Less','Some College',"Bachelor's","Master's",'Doctoral'] },
    { key: 'ai_usage_group', label: 'AI Usage', values: ['Never','Rarely','Monthly','Weekly','Daily+'] }
  ];
  const active = {};

  filters.forEach(f => {
    const sel = document.createElement('select');
    sel.className = 'filter-select';
    sel.innerHTML = `<option value="">${f.label}: All</option>` + f.values.map(v => `<option value="${v}">${v}</option>`).join('');
    sel.addEventListener('change', () => {
      if (sel.value) { active[f.key] = sel.value; sel.classList.add('active-filter'); }
      else { delete active[f.key]; sel.classList.remove('active-filter'); }
      applyFilters(data, active);
    });
    controls.appendChild(sel);
  });

  document.getElementById('filter-reset').addEventListener('click', () => {
    Object.keys(active).forEach(k => delete active[k]);
    controls.querySelectorAll('select').forEach(s => { s.value = ''; s.classList.remove('active-filter'); });
    applyFilters(data, active);
  });
}

function applyFilters(fullData, active) {
  let filtered = fullData;
  Object.entries(active).forEach(([k, v]) => { filtered = filtered.filter(r => r[k] === v); });
  FILTERED = filtered;
  document.getElementById('filter-count').textContent = `Showing ${filtered.length} of ${fullData.length} responses`;
  renderAll(filtered);
  setupScrollAnimations();
}

// ── Scroll Animations ──
function setupScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        animateCharts(e.target.id.replace('section-', ''));
        obs.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
  document.querySelectorAll('.flourishing-section').forEach(el => obs.observe(el));
}

function animateCharts(sectionId) {
  // Find all chart IDs for this section
  const keys = [...CHARTS.keys()].filter(k => k === sectionId || k.startsWith(sectionId + '-'));
  keys.forEach((key, idx) => {
    const el = CHARTS.get(key);
    if (!el) return;
    const delay = idx * 150;
    if (el.densityPath1) el.densityPath1.transition().delay(delay).duration(700).ease(d3.easeCubicOut).style('opacity', 1);
    if (el.densityPath2) el.densityPath2.transition().delay(delay + 200).duration(700).ease(d3.easeCubicOut).style('opacity', 1);
    if (el.avgLine) el.avgLine.transition().delay(delay + 350).duration(450).style('opacity', 1);
    if (el.avgLabel) el.avgLabel.transition().delay(delay + 350).duration(450).style('opacity', 1);
    if (el.tensionLine) el.tensionLine.transition().delay(delay + 600).duration(450).style('opacity', 1);
    if (el.aiGroup) el.aiGroup.transition().delay(delay + 650).duration(450).ease(d3.easeBackOut).style('opacity', 1);
  });
}

// ── Hero Canvas ──
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [], animId;

  function resize() {
    canvas.width = canvas.offsetWidth * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    const w = canvas.offsetWidth, h = canvas.offsetHeight;
    const n = Math.min(70, Math.floor(w * h / 14000));
    particles = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.5 + 0.5
    }));
  }

  function draw() {
    const w = canvas.offsetWidth, h = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.strokeStyle = `rgba(37,99,235,${0.05 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
        }
      }
    }
    particles.forEach(p => {
      ctx.fillStyle = 'rgba(37,99,235,0.15)';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    });
    animId = requestAnimationFrame(draw);
  }

  resize(); draw();
  window.addEventListener('resize', () => { cancelAnimationFrame(animId); resize(); draw(); });
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { if (!animId) draw(); } else { cancelAnimationFrame(animId); animId = null; }
  }).observe(canvas.parentElement);
}

// ── Data Loading ──
function loadData() {
  fetch('data/processed.json')
    .then(r => { if (!r.ok) throw new Error('No processed.json'); return r.json(); })
    .then(json => {
      DATA = json;
      QUESTIONS = json.meta?.questions || {};
      initApp(json.data);
    })
    .catch(() => {
      // Fallback: parse raw CSV
      Papa.parse('data/human-flourishing-synthetic-1000.csv', {
        download: true, header: true, skipEmptyLines: true, dynamicTyping: true,
        complete(res) {
          const data = res.data.filter(r => r.StartDate && !r.StartDate.toString().startsWith('{') && r.StartDate !== 'Start Date');
          // Try getting question text from survey CSV
          Papa.parse('data/human-flourishing-survey-4-4.csv', {
            download: true, header: false, preview: 2,
            complete(r2) {
              if (r2.data.length >= 2) {
                r2.data[0].forEach((c, i) => { if (r2.data[1][i] && !r2.data[1][i].startsWith('{')) QUESTIONS[c] = r2.data[1][i]; });
              }
              initApp(data);
            },
            error() { initApp(data); }
          });
        }
      });
    });
}

function initApp(data) {
  FILTERED = data;
  document.getElementById('filter-count').textContent = `Showing ${data.length} of ${data.length} responses`;
  TT.init();
  renderAll(data);
  setupNavigation();
  setupFilters(data);
  setupScrollAnimations();
  initHeroCanvas();
}

document.addEventListener('DOMContentLoaded', loadData);
