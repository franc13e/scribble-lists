(() => {
  'use strict';

  // ---------- doodles ----------
  // class names (tw, wig, bob, beat, float, look, zap) add little idle animations, see style.css

  const S = 'fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"';
  const svg = (body, vb = '0 0 220 170') =>
    `<svg class="doodle" viewBox="${vb}" aria-hidden="true">${body}</svg>`;

  const DOODLES = {
    grocery: svg(`
      <g ${S}>
        <g class="wig">
          <path d="M18 80 Q58 166 142 108 Z"/>
          <path d="M31 90 Q64 146 128 108"/>
        </g>
        <path d="M112 56 C124 16 186 12 202 56 Z"/>
        <path d="M122 50 C136 28 178 24 192 50"/>
        <path class="float" d="M32 38 c-4 0 -6 4 -3 6 c4 2 9 -2 7 -7 c-2 -6 -11 -6 -14 1 c-3 8 4 15 12 13"/>
        <path d="M166 126 c12 4 6 22 -6 14 s2 -18 14 -8"/>
        <path class="tw" d="M84 26 l9 9 M93 26 l-9 9"/>
        <path class="tw d1" d="M66 54 l6 6 M72 54 l-6 6"/>
        <path class="tw d2" d="M188 92 l8 8 M196 92 l-8 8"/>
      </g>
      <g fill="currentColor">
        <g class="wig">
          <ellipse cx="52" cy="104" rx="3" ry="5" transform="rotate(-35 52 104)"/>
          <ellipse cx="72" cy="118" rx="3" ry="5" transform="rotate(-20 72 118)"/>
          <ellipse cx="94" cy="122" rx="3" ry="5" transform="rotate(10 94 122)"/>
          <ellipse cx="66" cy="96" rx="3" ry="5" transform="rotate(-25 66 96)"/>
          <ellipse cx="88" cy="104" rx="3" ry="5"/>
        </g>
        <circle cx="140" cy="44" r="3"/><circle cx="158" cy="38" r="3.5"/><circle cx="176" cy="44" r="3"/>
        <circle class="tw d1" cx="12" cy="120" r="4"/><circle cx="110" cy="20" r="3"/><circle class="tw" cx="150" cy="80" r="3.5"/>
        <circle cx="206" cy="128" r="3"/><circle class="tw d2" cx="44" cy="22" r="2.5"/>
      </g>`),

    wish: svg(`
      <g ${S}>
        <rect x="64" y="76" width="92" height="72" rx="6"/>
        <path d="M110 78 V148"/>
        <path class="bob" d="M110 58 C92 26 66 36 78 52 C86 62 104 60 110 58 C116 60 134 62 142 52 C154 36 128 26 110 58"/>
        <path class="tw" d="M30 34 v18 M21 43 h18"/>
        <path class="tw d1" d="M186 30 v12 M180 36 h12"/>
        <path d="M34 104 l-14 -4 M36 120 l-16 4 M40 88 l-10 -10"/>
        <path d="M186 74 l14 -6 M184 58 l10 -10"/>
        <path class="tw d2" d="M82 96 l10 10 M92 96 l-10 10"/>
        <path d="M136 118 c-3 0 -5 3 -2 5 c3 2 7 -1 5 -5 c-2 -5 -9 -5 -11 1 c-2 6 3 11 9 10"/>
      </g>
      <g fill="currentColor">
        <rect x="56" y="58" width="108" height="22" rx="5"/>
        <path class="beat" d="M182 112 c-6 -10 -21 -4 -13 8 l13 13 l13 -13 c8 -12 -7 -18 -13 -8z"/>
        <circle cx="54" cy="20" r="3"/><circle class="tw" cx="168" cy="16" r="3.5"/><circle cx="200" cy="96" r="3"/>
        <circle class="tw d1" cx="26" cy="146" r="3.5"/><circle cx="196" cy="150" r="3"/>
      </g>`),

    todo: svg(`
      <g ${S}>
        <path class="zap" d="M74 32 L36 98 L70 92 L52 150 L112 76 L76 82 L102 32 Z"/>
        <rect x="134" y="34" width="20" height="20" rx="3"/>
        <rect x="134" y="72" width="20" height="20" rx="3"/>
        <rect x="134" y="110" width="20" height="20" rx="3"/>
        <path d="M138 44 l5 6 l12 -16"/>
        <path d="M138 82 l5 6 l12 -16"/>
        <path d="M164 44 h36 M164 82 h28 M164 120 h32"/>
        <path class="tw" d="M22 70 l-12 -4 M20 90 l-14 6 M26 112 l-12 12"/>
        <path class="tw d1" d="M118 42 l12 -8"/>
      </g>
      <g fill="currentColor">
        <circle class="tw d2" cx="30" cy="34" r="3"/><circle cx="112" cy="130" r="3.5"/><circle class="tw" cx="96" cy="150" r="2.5"/>
        <circle cx="16" cy="140" r="3"/><circle class="tw d1" cx="122" cy="104" r="2.5"/>
      </g>`),

    other: svg(`
      <g ${S}>
        <g class="wig">
          <path d="M62 22 L82 42 L62 62 L42 42 Z"/>
          <circle cx="62" cy="80" r="13"/>
          <path d="M62 98 L86 146 L38 146 Z"/>
        </g>
        <circle cx="154" cy="46" r="20"/>
        <circle class="look" cx="154" cy="46" r="7"/>
        <path class="float" d="M104 96 c16 -22 34 8 50 -10 s24 18 36 -2"/>
        <path class="tw" d="M118 128 l14 -8 M150 132 l6 12 M178 120 l14 6"/>
      </g>
      <g fill="currentColor">
        <path class="tw d1" d="M100 30 l14 4 l-10 10 z"/>
        <path class="tw d2" d="M184 140 l12 -2 l-4 12 z"/>
        <path d="M22 96 l10 -6 l2 12 z"/>
        <circle cx="120" cy="60" r="3"/><circle class="tw" cx="200" cy="70" r="3.5"/><circle cx="26" cy="20" r="3"/>
        <circle cx="104" cy="150" r="3"/><circle class="tw d1" cx="194" cy="24" r="2.5"/>
      </g>`),

    welcome: svg(`
      <g fill="currentColor">
        <path d="M58 156 C30 120 36 56 86 46 C134 38 152 86 144 156 L128 156 C134 116 128 84 112 76 C98 94 80 100 72 102 C68 124 76 144 82 156 Z"/>
        <circle class="tw" cx="22" cy="40" r="3"/><circle cx="196" cy="140" r="3"/><circle class="tw d2" cx="178" cy="22" r="3.5"/>
      </g>
      <g ${S}>
        <path d="M74 100 C74 132 96 148 112 142 C128 134 132 106 124 80"/>
        <path d="M88 114 q5 4 10 0"/>
        <path d="M110 112 q5 4 10 0"/>
        <path d="M100 130 q6 3 12 0"/>
        <path class="float" d="M30 20 c-10 0 -12 14 -2 16 c-6 10 10 18 16 8 c10 6 20 -6 12 -14 c4 -10 -10 -16 -16 -8 c-2 -4 -6 -4 -10 -2"/>
        <path class="float" d="M166 104 c-8 -2 -12 10 -4 14 c-2 8 10 12 14 4 c8 2 12 -8 6 -12 c2 -8 -8 -12 -12 -6"/>
        <path class="wig" d="M168 36 v32 M178 30 v40 M188 34 v34 M162 36 h34 l4 -14 l-6 -8"/>
        <path class="tw" d="M56 22 l8 8 M64 22 l-8 8"/>
        <path class="tw d1" d="M116 22 l8 8 M124 22 l-8 8"/>
        <path class="tw d2" d="M150 74 l7 7 M157 74 l-7 7"/>
        <path class="tw" d="M20 96 l7 7 M27 96 l-7 7"/>
      </g>`),

    ready: svg(`
      <g ${S}>
        <g class="bob">
          <path d="M62 84 L128 72 L150 92 L150 140 L84 152 L62 132 Z"/>
          <path d="M62 84 L84 104 L150 92 M84 104 V152"/>
          <path d="M100 118 v8 M126 114 v8"/>
          <path d="M102 136 q12 6 24 -2"/>
          <path d="M94 76 c-2 -18 22 -22 26 -4"/>
        </g>
        <path class="wig" d="M150 38 c16 -14 40 0 30 24 c-8 18 -30 16 -34 4"/>
        <path d="M160 30 c-2 -10 6 -14 10 -8"/>
      </g>
      <g fill="currentColor">
        <path d="M168 44 c6 0 10 6 6 12 c-4 4 -12 2 -12 -4 z"/>
      </g>
      <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
        <path class="tw" d="M30 40 l10 4 M24 62 l12 -2 M40 22 l4 10 M20 92 l14 2 M30 118 l12 -6 M26 146 l10 -8"/>
        <path class="tw d1" d="M60 30 l6 8 M80 20 l2 10 M110 26 l-2 12 M130 40 l-6 8"/>
        <path class="tw d2" d="M170 104 l12 4 M168 124 l14 0 M164 146 l10 8 M196 92 l10 -4 M192 116 l14 6"/>
        <path d="M120 160 l12 2 M54 162 l-10 2 M200 150 l8 6"/>
      </g>`),
  };

  // little mochi buddy with a sprout; happy = ^ ^ eyes
  const mascot = (happy = false, extra = '') => `
    <svg class="mascot ${extra}" viewBox="0 0 60 54" aria-hidden="true">
      <path class="ln" d="M30 10 c0 -4 2 -7 6 -7 M30 10 c-1 -3 -4 -5 -7 -4"/>
      <path class="body" d="M7 45 C3 31 10 11 30 10 C50 9 58 28 54 44 C52 50 45 50 30 50 C16 50 9 50 7 45 Z"/>
      ${happy
        ? `<path class="ln" d="M19 30 q3 -4 6 0 M35 30 q3 -4 6 0"/><path class="ln" d="M26 35 q4 5 8 0"/>`
        : `<g class="eyes" fill="currentColor"><circle cx="22" cy="30" r="2.5"/><circle cx="38" cy="30" r="2.5"/></g>
           <path class="ln" d="M27 35 q3 3 6 0"/>`}
      <path class="ln blush" d="M13 36 l3 -3 M16 37 l3 -3 M41 36 l3 -3 M44 37 l3 -3"/>
    </svg>`;

  // tiny line stickers picked from what you type
  const STICKERS = [
    ['coconut', '<circle cx="12" cy="12.5" r="8"/><circle cx="9.5" cy="10" r=".9"/><circle cx="14.5" cy="10" r=".9"/><circle cx="12" cy="13.5" r=".9"/><path d="M6.5 17l1.5-1 M17.5 17l-1.5-1"/>'],
    ['corn', '<path d="M12 3c3 0 4 4 4 9s-2 7-4 7-4-2-4-7 1-9 4-9z M10 8h4 M9.5 12h5 M10 16h4 M8 13c-3 2-4 5-3 8 3 0 5-1 7-2 M16 13c3 2 4 5 3 8-3 0-5-1-7-2"/>'],
    ['meat|chicken|beef|pork|steak|mince|bacon|ham|sausage|lamb|turkey|wing|drumstick|bbq',
      '<path d="M10 14c-3-3-2-10 4-11s9 4 7 8-8 6-11 3z M10.5 13.5l-4.5 4.5"/><circle cx="4.3" cy="17.6" r="1.9"/><circle cx="6.4" cy="19.7" r="1.9"/>'],
    ['rice|noodle|pasta|ramen|ramyeon|spaghetti|udon|cereal|oat|soup|kimchi|tteok',
      '<path d="M3 12h18c0 5-4 8-9 8s-9-3-9-8z M14 9l6-6 M16 10l6-4"/>'],
    ['soap|shampoo|conditioner|body|lotion|tooth|floss|deodorant|sunscreen|skincare|cleanser|sanitis|sanitiz|detergent|bleach|razor',
      '<path d="M5 13h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"/><circle cx="8" cy="8" r="2"/><circle cx="14" cy="5" r="1.5"/><circle cx="17" cy="9.5" r="1.2"/>'],
    ['toilet|tissue|paper towel|napkin|wipe|diaper|nappy|pads|tampon',
      '<path d="M8 4h9c2 0 3 3 3 7s-1 7-3 7H8 M8 4c-2 0-3 3-3 7s1 7 3 7 3-3 3-7-1-7-3-7z M17 18v3h-6"/><circle cx="8" cy="11" r="1"/>'],
    ['apple|banana|fruit|berr|strawberr|orange|grape|peach|pear|lemon|lime|melon|mango|cherr|kiwi',
      '<path d="M12 7c-3-2-7 0-7 5s3 9 5 9c1 0 1.5-.5 2-.5s1 .5 2 .5c2 0 5-4 5-9s-4-7-7-5z M12 7c0-2 1-4 3-4"/>'],
    ['egg', '<path d="M12 3c-4 0-7 7-7 11a7 7 0 0 0 14 0c0-4-3-11-7-11z"/>'],
    ['milk|yog|cream|juice|soy', '<path d="M8 8l2-4h4l2 4v12H8z M8 8h8"/>'],
    ['bread|bagel|toast|croissant|bun|cake|cookie|biscuit|muffin', '<path d="M4 10a4 4 0 0 1 3-6h10a4 4 0 0 1 3 6v9H4z"/>'],
    ['carrot|veg|lettuce|spinach|broccoli|onion|garlic|potato|tomato|salad|herb|kale|cabbage|cucumber|pepper|avocado|leaf',
      '<path d="M5 19c0-9 6-14 14-14 0 8-5 14-14 14z M5 19l8-8"/>'],
    ['fish|salmon|tuna|shrimp|prawn|seafood|sushi', '<path d="M3 12c3-5 10-6 14 0-4 6-11 5-14 0z M17 12l4-4v8z"/><circle cx="8" cy="11" r=".6"/>'],
    ['coffee|tea|latte|matcha|mug|cup|boba', '<path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z M16 11h2a2 2 0 0 1 0 4h-2 M9 3c0 2 2 2 2 4"/>'],
    ['cheese|butter', '<path d="M3 17l18-8v10H3z"/><circle cx="9" cy="15" r="1"/><circle cx="15" cy="14" r="1"/>'],
    ['gift|present|birthday|bday', '<path d="M4 10h16v10H4z M3 7h18v3H3z M12 7v13 M12 7c-2-4-6-3-4-1 M12 7c2-4 6-3 4-1"/>'],
    ['book|read|novel|manga|comic|journal|notebook', '<path d="M4 5c3-1 6-1 8 1v14c-2-2-5-2-8-1z M20 5c-3-1-6-1-8 1v14c2-2 5-2 8-1z"/>'],
    ['shirt|dress|sweater|hoodie|jacket|jeans|cloth|top|skirt|shoe|sock|cardigan',
      '<path d="M8 3l-5 4 3 3 2-2v12h8V8l2 2 3-3-5-4c-1 2-3 2-4 2s-3 0-4-2z"/>'],
    ['clean|wash|laundry|vacuum|dish|tidy|sweep|mop', '<path d="M14 3l-4 9 M6 12h8l2 9H4z"/>'],
    ['trip|travel|flight|plane|ticket|holiday|vacation|pack', '<path d="M3 12l18-8-6 16-3-7z M12 13l9-9"/>'],
    ['movie|film|show|netflix|series|drama|anime', '<path d="M4 5h16v14H4z M4 9h16 M4 15h16 M8 5v4 M16 5v4 M8 15v4 M16 15v4"/>'],
    ['love|date|mom|mum|dad|friend|call|hug', '<path d="M12 20l-7-7a4 4 0 0 1 7-5 4 4 0 0 1 7 5z"/>'],
  ].map(([words, path]) => [new RegExp('\\b(' + words + ')', 'i'), path]);

  const sticker = text => {
    const hit = STICKERS.find(([re]) => re.test(text));
    return hit ? `<svg class="stk" viewBox="0 0 24 24" aria-hidden="true">${hit[1]}</svg>` : '';
  };

  const CHECK = `<svg viewBox="0 0 32 32" aria-hidden="true">
    <path class="ring" d="M17 3.6c7.2.3 12 5.8 11.6 12.7-.4 6.9-5.9 12-12.6 11.7C9 27.7 3.8 22.3 4 15.6 4.3 8.9 9.6 3.6 16.4 4.2"/>
    <path class="tick" d="M9 16.5l5.2 5.6L24.5 8.5"/></svg>`;

  const SCRIBBLE = `<svg class="scribble" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
    <path pathLength="100" d="M1 7 L9 4 L16 8 L25 3 L33 8 L42 4 L50 8 L59 3 L67 8 L76 4 L84 8 L92 4 L99 6"/></svg>`;

  const SPARKS = [
    '<svg viewBox="0 0 20 20"><path d="M10 1Q11 9 19 10Q11 11 10 19Q9 11 1 10Q9 9 10 1Z" fill="currentColor"/></svg>',
    '<svg viewBox="0 0 20 20"><path d="M10 17L3 10a4 4 0 0 1 7-5 4 4 0 0 1 7 5z" fill="currentColor"/></svg>',
    '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="4" fill="currentColor"/></svg>',
    '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>',
  ];

  // ---------- words ----------

  const NOTES = ['drink some water ♡', 'one thing at a time', 'you’re doing great', 'don’t forget snacks',
    'small steps count ✿', 'take a little break', 'hi hi!', 'proud of you'];
  const DONE = ['you did it! ✿', 'all done ♡', 'look at you go!', 'list cleared, yay'];
  const pick = (arr, not) => {
    const pool = arr.filter(x => x !== not);
    return pool[Math.floor(Math.random() * pool.length)];
  };

  // ---------- state ----------

  const KINDS = [
    { id: 'grocery', label: 'Groceries', hint: 'eggs, bread, the good cheese', group: 'Basket', placeholder: 'add groceries…' },
    { id: 'wish', label: 'Wishlist', hint: 'things you’d love someday', group: 'Wants', placeholder: 'add a wish…' },
    { id: 'todo', label: 'To-do', hint: 'chores, errands, plans', group: 'Today', placeholder: 'add a task…' },
    { id: 'other', label: 'Anything', hint: 'books, films, ideas…', group: 'Things', placeholder: 'add something…' },
  ];
  const kindOf = id => KINDS.find(k => k.id === id) || KINDS[3];

  const KEY = 'scribble-lists:v1';
  const uid = () => Math.random().toString(36).slice(2, 10);

  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && Array.isArray(s.lists)) return s;
    } catch (e) { /* fall through */ }
    return { seen: false, user: '', lists: [] };
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
  }

  let state = load();
  let draft = null;           // the new-list wizard in progress
  let you = state.user || ''; // name being typed on the "what is your name" screen
  let filter = 'all';
  let note = pick(NOTES);
  let pendingFocus = null;    // selector to focus after the next render
  let lastRoute = null;
  let justAdded = null;       // item id to pop in
  let justToggled = null;     // item id to animate its tick
  let hop = false;            // make the buddy hop after the next render

  const esc = s => String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  const route = () => location.hash.replace(/^#/, '') || '/';
  const currentList = () => {
    const r = route();
    return r.startsWith('/list/') ? state.lists.find(l => l.id === r.slice(6)) : null;
  };
  const go = path => {
    if (route() === path) render();
    else location.hash = path;
  };

  const stats = list => {
    const items = list.sections.flatMap(s => s.items);
    return { total: items.length, done: items.filter(i => i.done).length };
  };

  // ---------- views ----------

  function welcomeView() {
    return `
      <section class="screen center">
        <div class="art">${DOODLES.grocery}</div>
        <h1 class="headline"><small>It’s time to sort out</small>all your lists</h1>
        <div class="rule"></div>
        <p class="sub">Groceries, wishlists, chores — jot them down before you forget</p>
        <div class="spacer"></div>
        <button class="pill wide" data-action="start">Continue</button>
      </section>`;
  }

  function nameView() {
    return `
      <section class="screen">
        <div class="art">${DOODLES.welcome}</div>
        <form data-form="you">
          <p class="question">First, what is your name?</p>
          <input class="field" name="you" maxlength="24" autocomplete="given-name"
            placeholder="your name" value="${esc(you)}">
        </form>
        <div class="spacer"></div>
        <div class="nav">
          <button class="text-btn" data-action="you-back">Back</button>
          <button class="pill" data-action="you-next" ${you.trim() ? '' : 'disabled'}>Next</button>
        </div>
      </section>`;
  }

  function wizardView() {
    const k = kindOf(draft.kind);
    if (draft.step === 0) {
      return `
        <section class="screen">
          <div class="art">${DOODLES.other}</div>
          <form data-form="name">
            <p class="question">${state.lists.length ? 'What is your new list called?' : 'What should your first list be called?'}</p>
            <input class="field" name="name" maxlength="40" autocomplete="off"
              placeholder="weekly shop" value="${esc(draft.name)}">
          </form>
          <div class="spacer"></div>
          <div class="nav">
            <button class="text-btn" data-action="wiz-back">Back</button>
            <button class="pill" data-action="wiz-next" ${draft.name.trim() ? '' : 'disabled'}>Next</button>
          </div>
        </section>`;
    }
    if (draft.step === 1) {
      return `
        <section class="screen">
          <p class="question" style="margin-top:8px">What kind of list is it?</p>
          <div class="kinds">
            ${KINDS.map(x => `
              <button class="kind-tile ${x.id === draft.kind ? 'on' : ''}" data-action="pick-kind" data-kind="${x.id}">
                ${DOODLES[x.id]}
                <b>${x.label}</b><span>${x.hint}</span>
              </button>`).join('')}
          </div>
          <div class="spacer"></div>
          <div class="nav">
            <button class="text-btn" data-action="wiz-back">Back</button>
            <button class="pill" data-action="wiz-next">Next</button>
          </div>
        </section>`;
    }
    return `
      <section class="screen center">
        <div class="art">${DOODLES.ready}</div>
        <h1 class="headline"><small>And now</small>you’re ready</h1>
        <p class="sub">Tap the button to start filling up “${esc(draft.name.trim())}”, your new ${k.label.toLowerCase()} list</p>
        <div class="spacer"></div>
        <button class="pill wide" data-action="create">Let’s start</button>
        <button class="text-btn" data-action="wiz-back" style="margin-top:8px">Back</button>
      </section>`;
  }

  function card(l) {
    const { total, done } = stats(l);
    const pct = total ? Math.round(done / total * 100) : 0;
    return `
      <a class="card" href="#/list/${l.id}">
        <div class="card-art">${DOODLES[kindOf(l.kind).id]}</div>
        <div class="card-body">
          <h3>${esc(l.name)}</h3>
          <div class="bar"><span style="width:${pct}%"></span></div>
          <small>${!total ? 'nothing here… yet' : done === total ? 'all done ✿' : `${done} of ${total} ticked off`}</small>
        </div>
      </a>`;
  }

  function homeView() {
    const hour = new Date().getHours();
    const hello = hour < 12 ? 'good morning' : hour < 18 ? 'good afternoon' : 'good evening';
    const lists = [...state.lists].sort((a, b) => b.created - a.created);
    const count = id => lists.filter(l => l.kind === id).length;

    let body;
    if (!lists.length) {
      body = `<div class="empty">${mascot()}<p>no lists yet —<br>let’s make one ♡</p></div>`;
    } else if (filter === 'all') {
      body = KINDS.filter(k => count(k.id)).map(k => `
        <h2 class="group-label">${k.label}</h2>
        <div class="cards">${lists.filter(l => l.kind === k.id).map(card).join('')}</div>`).join('');
    } else {
      const shown = lists.filter(l => l.kind === filter);
      body = shown.length
        ? `<div class="cards">${shown.map(card).join('')}</div>`
        : `<div class="empty">${mascot()}<p>no ${kindOf(filter).label.toLowerCase()} lists yet</p></div>`;
    }

    return `
      <section class="screen">
        <div class="home-head">
          <div>
            <button class="hello" data-action="edit-name">${hello}${state.user ? ', ' + esc(state.user) : ''} ✿</button>
            <h1 class="home-title">your lists</h1>
          </div>
          <button class="buddy" data-action="poke" aria-label="Say hi">
            <span class="bubble">${esc(note)}</span>${mascot()}
          </button>
        </div>
        ${lists.length ? `
          <div class="chips">
            <button class="chip ${filter === 'all' ? 'on' : ''}" data-action="filter" data-kind="all">All<i>${lists.length}</i></button>
            ${KINDS.map(k => `<button class="chip ${filter === k.id ? 'on' : ''}" data-action="filter" data-kind="${k.id}">${k.label}<i>${count(k.id)}</i></button>`).join('')}
          </div>` : ''}
        ${body}
        <div class="spacer"></div>
        <div class="dock"><button class="pill wide" data-action="new">New list</button></div>
      </section>`;
  }

  function listView(l) {
    const k = kindOf(l.kind);
    const { total, done } = stats(l);
    const allDone = total > 0 && done === total;
    return `
      <section class="screen">
        <div class="topbar">
          <a class="text-btn" href="#/">Back</a>
          <span class="kind-tag">${k.label}</span>
        </div>
        <div class="hero">
          <div class="hero-art">${DOODLES[k.id]}</div>
          <div style="flex:1;min-width:0">
            <input class="title-input" data-field="list-name" value="${esc(l.name)}" maxlength="40" aria-label="List name">
          </div>
        </div>
        <div class="progress-row">
          <p class="progress-line">${!total ? 'nothing here… yet' : allDone ? 'all done! go treat yourself ✿' : `${done} of ${total} ticked off`}</p>
          <span class="buddy sm">${mascot(allDone)}</span>
        </div>

        ${l.sections.map(s => {
          const sd = s.items.filter(i => i.done).length;
          return `
          <div class="group" data-sec="${s.id}">
            <div class="group-head">
              <input class="group-name" data-field="sec-name" value="${esc(s.name)}" maxlength="30" aria-label="Group name">
              <span class="group-count">${s.items.length ? `${sd}/${s.items.length}` : ''}</span>
              <button class="icon-btn" data-action="del-sec" title="Remove group" aria-label="Remove group">×</button>
            </div>
            <ul class="items">
              ${s.items.map(i => `
                <li class="item ${i.done ? 'done' : ''} ${i.id === justAdded ? 'new' : ''} ${i.id === justToggled ? 'just' : ''}" data-item="${i.id}">
                  <button class="check" data-action="toggle" aria-label="${i.done ? 'Untick' : 'Tick'} ${esc(i.text)}">${CHECK}</button>
                  <button class="item-text" data-action="toggle"><span class="txt">${esc(i.text)}${SCRIBBLE}</span>${sticker(i.text)}</button>
                  <button class="icon-btn" data-action="del-item" aria-label="Delete ${esc(i.text)}">×</button>
                </li>`).join('')}
            </ul>
            <form class="add-row" data-form="add-item">
              <span class="add-plus" aria-hidden="true">+</span>
              <input name="text" maxlength="80" autocomplete="off" placeholder="${k.placeholder}" aria-label="Add item to ${esc(s.name)}">
            </form>
          </div>`;
        }).join('')}

        <button class="new-group" data-action="add-sec">+ add a group <span style="color:var(--muted)">(like “dairy” or “birthday”)</span></button>
        <div class="list-foot">
          <button class="text-btn" data-action="clear-done" ${done ? '' : 'disabled style="opacity:.4"'}>Clear ticked</button>
          <button class="text-btn danger" data-action="del-list">Delete list</button>
        </div>
      </section>`;
  }

  // ---------- render ----------

  const app = document.getElementById('app');

  function render() {
    const r = route();
    let html;
    if (r.startsWith('/list/')) {
      const l = currentList();
      html = l ? listView(l) : homeView();
    } else if (r === '/new') {
      if (!draft) draft = { step: 0, name: '', kind: 'grocery' };
      html = wizardView();
    } else if (r === '/hi') {
      html = nameView();
    } else {
      draft = null;
      html = !state.seen && !state.lists.length ? welcomeView() : homeView();
    }

    const key = r + (draft ? ':' + draft.step : '');
    const changed = key !== lastRoute;
    lastRoute = key;

    app.innerHTML = html;
    justAdded = justToggled = null;

    if (changed) {
      app.firstElementChild.classList.add('enter');
      app.scrollTop = 0;
      window.scrollTo(0, 0);
      if (r === '/hi') pendingFocus = pendingFocus || 'input[name=you]';
      if (draft && draft.step === 0) pendingFocus = pendingFocus || 'input[name=name]';
    }
    if (pendingFocus) {
      const el = app.querySelector(pendingFocus.sel || pendingFocus);
      if (el) {
        el.focus({ preventScroll: !changed && !pendingFocus.sel });
        if (pendingFocus.select) el.select();
      }
      pendingFocus = null;
    }
    if (hop) { hopBuddy(); hop = false; }
  }

  function hopBuddy() {
    const m = app.querySelector('.buddy > .mascot');
    if (!m) return;
    m.classList.remove('hop');
    void m.getBoundingClientRect(); // restart the animation
    m.classList.add('hop');
    setTimeout(() => m.classList.remove('hop'), 520);
  }

  function burst(x, y, big) {
    const n = big ? 16 : 5;
    for (let i = 0; i < n; i++) {
      const p = document.createElement('span');
      p.className = 'spark';
      p.innerHTML = big ? SPARKS[i % SPARKS.length] : SPARKS[i % 2 ? 2 : 0];
      const ang = (i / n) * Math.PI * 2 + Math.random() * .6;
      const dist = big ? 60 + Math.random() * 70 : 22 + Math.random() * 12;
      const size = big ? 10 + Math.random() * 10 : 9;
      p.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;` +
        `--dx:${Math.cos(ang) * dist}px;--dy:${Math.sin(ang) * dist}px;--r:${Math.random() * 180 - 90}deg`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 900);
    }
  }

  function toast(msg) {
    document.querySelectorAll('.toast').forEach(t => t.remove());
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = mascot(true) + `<span>${esc(msg)}</span>`;
    document.body.appendChild(t);
    setTimeout(() => t.classList.add('out'), 2200);
    setTimeout(() => t.remove(), 2600);
  }

  const afterName = () => go(state.lists.length ? '/' : '/new');

  // ---------- events ----------

  app.addEventListener('click', e => {
    const t = e.target.closest('[data-action]');
    if (!t || t.disabled) return;
    const list = currentList();
    const secEl = t.closest('[data-sec]');
    const sec = list && secEl ? list.sections.find(s => s.id === secEl.dataset.sec) : null;
    const itemEl = t.closest('[data-item]');
    const item = sec && itemEl ? sec.items.find(i => i.id === itemEl.dataset.item) : null;

    switch (t.dataset.action) {
      case 'start':
        state.seen = true; save(); go(state.user ? '/new' : '/hi'); break;
      case 'edit-name':
        you = state.user || ''; go('/hi'); break;
      case 'you-back':
        if (!state.lists.length) { state.seen = false; save(); }
        go('/');
        break;
      case 'you-next':
        if (!you.trim()) return;
        state.user = you.trim(); save(); afterName();
        break;
      case 'poke': {
        note = pick(NOTES, note);
        const b = t.querySelector('.bubble');
        b.textContent = note;
        b.style.animation = 'none';
        void b.offsetWidth;
        b.style.animation = '';
        hopBuddy();
        break;
      }
      case 'new':
        draft = null; go('/new'); break;
      case 'filter':
        filter = t.dataset.kind; render(); break;
      case 'wiz-back':
        if (draft.step === 0) { draft = null; go(state.lists.length ? '/' : '/hi'); } else { draft.step--; render(); }
        break;
      case 'wiz-next':
        if (draft.step === 0 && !draft.name.trim()) return;
        draft.step++; render(); break;
      case 'pick-kind':
        draft.kind = t.dataset.kind; render(); break;
      case 'create': {
        const k = kindOf(draft.kind);
        const l = {
          id: uid(), name: draft.name.trim(), kind: k.id, created: Date.now(),
          sections: [{ id: uid(), name: k.group, items: [] }],
        };
        state.seen = true;
        state.lists.push(l);
        save();
        draft = null;
        pendingFocus = { sel: '.add-row input' };
        go('/list/' + l.id);
        break;
      }
      case 'toggle': {
        if (!item) return;
        const box = itemEl.querySelector('.check').getBoundingClientRect();
        item.done = !item.done;
        justToggled = item.id;
        save();
        const { total, done } = stats(list);
        const finished = item.done && done === total;
        if (finished) hop = true;
        render();
        if (item.done) burst(box.left + box.width / 2, box.top + box.height / 2, finished);
        if (finished) toast(pick(DONE));
        break;
      }
      case 'del-item':
        if (item) { sec.items = sec.items.filter(i => i !== item); save(); render(); }
        break;
      case 'add-sec': {
        const s = { id: uid(), name: 'New group', items: [] };
        list.sections.push(s); save();
        pendingFocus = { sel: `[data-sec="${s.id}"] .group-name`, select: true };
        render();
        break;
      }
      case 'del-sec':
        if (sec.items.length && !confirm(`Remove “${sec.name}” and its ${sec.items.length} item(s)?`)) return;
        list.sections = list.sections.filter(s => s !== sec); save(); render();
        break;
      case 'clear-done':
        list.sections.forEach(s => { s.items = s.items.filter(i => !i.done); });
        save(); render();
        break;
      case 'del-list':
        if (!confirm(`Delete “${list.name}”? This can’t be undone.`)) return;
        state.lists = state.lists.filter(l => l !== list); save(); go('/');
        break;
    }
  });

  app.addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    if (f.dataset.form === 'you') {
      if (you.trim()) { state.user = you.trim(); save(); afterName(); }
      return;
    }
    if (f.dataset.form === 'name') {
      if (draft.name.trim()) { draft.step = 1; render(); }
      return;
    }
    if (f.dataset.form === 'add-item') {
      const list = currentList();
      const secId = f.closest('[data-sec]').dataset.sec;
      const sec = list.sections.find(s => s.id === secId);
      const text = f.elements.text.value.trim();
      if (!text) return;
      const item = { id: uid(), text, done: false };
      sec.items.push(item);
      save();
      justAdded = item.id;
      hop = true;
      pendingFocus = `[data-sec="${secId}"] .add-row input`;
      render();
    }
  });

  app.addEventListener('input', e => {
    const n = e.target.name;
    if (n === 'name' && draft) {
      draft.name = e.target.value;
      const next = app.querySelector('[data-action="wiz-next"]');
      if (next) next.disabled = !draft.name.trim();
    } else if (n === 'you') {
      you = e.target.value;
      const next = app.querySelector('[data-action="you-next"]');
      if (next) next.disabled = !you.trim();
    }
  });

  app.addEventListener('change', e => {
    const field = e.target.dataset.field;
    const list = currentList();
    if (!field || !list) return;
    const v = e.target.value.trim();
    if (field === 'list-name') {
      if (v) list.name = v; else e.target.value = list.name;
    } else if (field === 'sec-name') {
      const sec = list.sections.find(s => s.id === e.target.closest('[data-sec]').dataset.sec);
      if (v) sec.name = v; else e.target.value = sec.name;
    }
    save();
  });

  // Enter in a heading input just commits the rename
  app.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.dataset.field) e.target.blur();
  });

  window.addEventListener('hashchange', render);

  const clock = document.getElementById('clock');
  const tick = () => {
    const d = new Date();
    clock.textContent = `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
  };
  tick();
  setInterval(tick, 30000);

  // installable + offline (see sw.js)
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
  }

  render();
})();
