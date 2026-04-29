<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Outfit Generator</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --cream:    #F5F0E8;
      --ink:      #1A1612;
      --charcoal: #2E2A26;
      --taupe:    #8C7B6B;
      --gold:     #B8935A;
      --gold-lt:  #D4AF7A;
      --card-bg:  #FFFFFF;
      --border:   #E0D8CC;
      --ff-head:  'Playfair Display', Georgia, serif;
      --ff-body:  'DM Sans', sans-serif;
      --radius:   6px;
    }

    html, body {
      width: 360px;
      min-height: 480px;
      background: var(--cream);
      font-family: var(--ff-body);
      color: var(--ink);
      font-size: 13px;
    }

    .container { display: flex; flex-direction: column; min-height: 100%; padding: 0 0 12px; }

    .header { background: var(--ink); padding: 22px 24px 20px; position: relative; overflow: hidden; }
    .header::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--gold), var(--gold-lt), var(--gold)); }
    .header::before { content: ''; position: absolute; top: 0; right: 0; bottom: 0; width: 120px; background: repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(255,255,255,0.02) 6px, rgba(255,255,255,0.02) 12px); }

    .header-badge { display: inline-block; font-size: 9px; font-weight: 500; letter-spacing: 0.18em; color: var(--gold); border: 1px solid var(--gold); border-radius: 2px; padding: 2px 7px; margin-bottom: 10px; }
    .title { font-family: var(--ff-head); font-size: 30px; font-weight: 700; line-height: 1.05; color: var(--cream); letter-spacing: -0.01em; }
    .title em { font-style: italic; color: var(--gold-lt); }
    .subtitle { margin-top: 6px; font-size: 11px; color: var(--taupe); font-weight: 300; letter-spacing: 0.04em; }

    .form-section { padding: 20px 24px 0; display: flex; flex-direction: column; gap: 12px; }
    .field { display: flex; flex-direction: column; gap: 5px; }
    .label { font-size: 10px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--charcoal); display: flex; align-items: center; gap: 6px; }
    .label-icon { color: var(--gold); font-size: 8px; }
    .select-wrapper { position: relative; }

    select { width: 100%; padding: 9px 32px 9px 12px; appearance: none; -webkit-appearance: none; border: 1.5px solid var(--border); border-radius: var(--radius); background: var(--card-bg); font-family: var(--ff-body); font-size: 13px; color: var(--ink); cursor: pointer; transition: border-color 0.18s; outline: none; }
    select:focus { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(184,147,90,0.12); }
    .select-arrow { position: absolute; right: 11px; top: 50%; transform: translateY(-50%); font-size: 11px; color: var(--taupe); pointer-events: none; }

    .btn { margin-top: 4px; width: 100%; padding: 11px 20px; background: var(--ink); color: var(--cream); border: none; border-radius: var(--radius); font-family: var(--ff-body); font-size: 13px; font-weight: 500; letter-spacing: 0.06em; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: background 0.18s, transform 0.1s; }
    .btn:hover { background: var(--charcoal); box-shadow: 0 4px 16px rgba(26,22,18,0.22); }
    .btn:active { transform: scale(0.98); }
    .btn-icon { font-size: 16px; transition: transform 0.2s; }
    .btn:hover .btn-icon { transform: translateX(3px); }

    .output { padding: 18px 24px 0; animation: slideUp 0.32s ease; }
    .output.hidden { display: none; }
    @keyframes slideUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

    .output-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
    .output-label { font-size: 9px; font-weight: 500; letter-spacing: 0.18em; color: var(--gold); white-space: nowrap; }
    .output-divider { flex: 1; height: 1px; background: linear-gradient(90deg, var(--gold), transparent); }
    .outfit-cards { display: flex; flex-direction: column; gap: 8px; }

    .outfit-card { background: var(--card-bg); border: 1.5px solid var(--border); border-radius: var(--radius); padding: 12px 14px; position: relative; animation: fadeCard 0.3s ease both; }
    .outfit-card:nth-child(2) { animation-delay: 0.08s; }
    @keyframes fadeCard { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
    .outfit-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: linear-gradient(180deg, var(--gold), var(--gold-lt)); border-radius: var(--radius) 0 0 var(--radius); }

    .card-look { font-size: 9px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--taupe); margin-bottom: 5px; }
    .card-outfit { font-size: 12.5px; line-height: 1.55; color: var(--charcoal); }

    .more-link { display: inline-flex; align-items: center; gap: 5px; margin-top: 12px; font-size: 11px; font-weight: 500; color: var(--gold); text-decoration: none; transition: color 0.15s, gap 0.15s; }
    .more-link:hover { color: var(--ink); gap: 8px; }

    .footer { margin-top: auto; padding: 16px 24px 0; font-size: 10px; color: var(--taupe); text-align: center; }
    .footer a { color: var(--gold); text-decoration: none; font-weight: 500; }
  </style>
</head>
<body>
  <div class="container">
    <header class="header">
      <div class="header-badge">MEN'S STYLE</div>
      <h1 class="title">Outfit<br><em>Generator</em></h1>
      <p class="subtitle">Curated looks for every occasion</p>
    </header>

    <main class="form-section">
      <div class="field">
        <label for="occasion" class="label"><span class="label-icon">◈</span> Occasion</label>
        <div class="select-wrapper">
          <select id="occasion">
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="party">Party</option>
            <option value="office">Office</option>
          </select>
          <span class="select-arrow">↓</span>
        </div>
      </div>
      <div class="field">
        <label for="season" class="label"><span class="label-icon">◈</span> Season</label>
        <div class="select-wrapper">
          <select id="season">
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="fall">Fall</option>
          </select>
          <span class="select-arrow">↓</span>
        </div>
      </div>
      <div class="field">
        <label for="color" class="label"><span class="label-icon">◈</span> Color Preference</label>
        <div class="select-wrapper">
          <select id="color">
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
            <option value="neutral">Neutral</option>
          </select>
          <span class="select-arrow">↓</span>
        </div>
      </div>
      <button id="generateBtn" class="btn">
        <span class="btn-text">Generate Outfit</span>
        <span class="btn-icon">→</span>
      </button>
    </main>

    <section id="output" class="output hidden">
      <div class="output-header">
        <span class="output-label">YOUR LOOKS</span>
        <div class="output-divider"></div>
      </div>
      <div id="outfitCards" class="outfit-cards"></div>
      <a href="https://essentialmens.com/" target="_blank" class="more-link">View more outfits <span>↗</span></a>
    </section>

    <footer class="footer">
      Powered by <a href="https://essentialmens.com/" target="_blank">EssentialMens.com</a>
    </footer>
  </div>
  <script src="popup.js"></script>
</body>
</html>
