// ─── Outfit Data ─────────────────────────────────────────────────────────────
// Structure: outfits[occasion][season][color] = [look1, look2]

const outfits = {
  casual: {
    summer: {
      black: [
        "Black graphic tee with light-wash slim jeans and white leather sneakers",
        "Black linen short-sleeve shirt with khaki shorts and black sandals"
      ],
      white: [
        "White polo shirt with navy chino shorts and tan loafers",
        "White linen shirt (open over a tee) with beige joggers and slip-on sneakers"
      ],
      blue: [
        "Light blue chambray shirt with white shorts and canvas sneakers",
        "Navy striped tee with light jeans and blue suede loafers"
      ],
      neutral: [
        "Olive green tee with stone-wash jeans and tan suede desert boots",
        "Beige linen shirt with camel shorts and brown leather sandals"
      ]
    },
    winter: {
      black: [
        "Black turtleneck with dark jeans, black Chelsea boots and a wool overcoat",
        "Black hoodie under a charcoal peacoat with black joggers and boots"
      ],
      white: [
        "Ivory cable-knit sweater with dark grey jeans and white sneakers",
        "White mock-neck tee under a cream wool coat with slim trousers and loafers"
      ],
      blue: [
        "Navy crewneck sweater with dark indigo jeans and brown suede boots",
        "Blue flannel shirt under a denim jacket with black jeans and Chelsea boots"
      ],
      neutral: [
        "Camel crewneck sweater with grey slim-fit trousers and brown leather boots",
        "Tan shearling jacket over a grey tee with dark jeans and desert boots"
      ]
    },
    spring: {
      black: [
        "Black bomber jacket over a white tee with slim jeans and clean sneakers",
        "Black chore coat with a grey tee, olive trousers and leather loafers"
      ],
      white: [
        "White button-down (tucked) with light chinos and white canvas sneakers",
        "White baseball jacket with grey joggers and fresh white trainers"
      ],
      blue: [
        "Light blue denim jacket over a white tee with slim chinos and loafers",
        "Blue striped Breton shirt with navy trousers and white sneakers"
      ],
      neutral: [
        "Beige trench coat over a grey tee with slim jeans and tan boots",
        "Olive utility jacket with white tee, stone chinos and suede loafers"
      ]
    },
    fall: {
      black: [
        "Black quilted jacket with dark jeans, black boots and a grey scarf",
        "Black leather jacket over a charcoal Henley with raw denim and Chelsea boots"
      ],
      white: [
        "Off-white chunky knit sweater with rust brown trousers and tan boots",
        "White Oxford shirt under a grey field jacket with dark jeans and loafers"
      ],
      blue: [
        "Navy quilted vest over a blue oxford shirt with corduroy trousers and brogues",
        "Denim-on-denim look: mid-wash shirt jacket over dark jeans and white sneakers"
      ],
      neutral: [
        "Camel topcoat over a white tee with dark jeans and brown leather boots",
        "Taupe bomber jacket with olive trousers, a white tee and suede chukkas"
      ]
    }
  },

  formal: {
    summer: {
      black: [
        "Black slim-cut suit with a crisp white shirt, no tie, and black leather oxfords",
        "Black linen suit with a light grey shirt and black monk-strap shoes"
      ],
      white: [
        "White dress shirt with light grey dress trousers, black belt and leather oxfords",
        "Ivory linen blazer with white trousers and tan leather loafers"
      ],
      blue: [
        "Navy blue slim suit with a light blue shirt, silver tie and black cap-toe oxfords",
        "Blue seersucker suit with a white shirt and brown leather brogues"
      ],
      neutral: [
        "Light grey suit with a white shirt, soft brown tie and tan leather oxfords",
        "Beige linen suit with a white dress shirt and loafers — no tie"
      ]
    },
    winter: {
      black: [
        "Charcoal black suit with a white shirt, black tie and polished oxfords",
        "Black double-breasted suit with a black turtleneck and leather derby shoes"
      ],
      white: [
        "White dress shirt with a black suit, silver cufflinks and black leather oxfords",
        "Ivory turtleneck under a dark navy suit with black dress shoes"
      ],
      blue: [
        "Navy wool suit with a pale blue shirt, navy grenadine tie and brown oxfords",
        "Midnight blue suit with a white shirt, no tie and black cap-toe shoes"
      ],
      neutral: [
        "Medium grey flannel suit with a white shirt, burgundy tie and black shoes",
        "Taupe herringbone suit with an ivory shirt and dark brown dress boots"
      ]
    },
    spring: {
      black: [
        "Black suit with a fine-stripe white shirt, pocket square and polished oxfords",
        "Charcoal slim suit with a pale pink shirt, black knit tie and black loafers"
      ],
      white: [
        "White shirt with light grey trousers, a navy blazer and brown suede loafers",
        "Light cream suit with a white shirt, no tie, and beige suede shoes"
      ],
      blue: [
        "Light blue suit with a white shirt, no tie and tan leather loafers",
        "Navy blazer with white dress trousers, light blue shirt and white bucks"
      ],
      neutral: [
        "Stone-coloured suit with a white Oxford shirt and tan leather brogues",
        "Sand linen trousers with a white dress shirt, navy blazer and loafers"
      ]
    },
    fall: {
      black: [
        "Black suit with a dark grey turtleneck and black leather Chelsea boots",
        "Charcoal wool suit with a white shirt, black tie bar and black oxfords"
      ],
      white: [
        "White dress shirt with a black suit, burgundy pocket square and black shoes",
        "Off-white turtleneck under a charcoal suit with dark brown dress shoes"
      ],
      blue: [
        "Navy suit with a white shirt, dark knit tie and dark brown Oxford shoes",
        "Cobalt blue blazer with grey trousers, white shirt and black loafers"
      ],
      neutral: [
        "Camel check suit with an ivory shirt, brown knit tie and tan brogues",
        "Grey tweed suit with a white shirt and dark brown leather boots"
      ]
    }
  },

  party: {
    summer: {
      black: [
        "Black slim tee with tailored black shorts, a gold chain and white leather sneakers",
        "Black resort shirt (open) over a white tee with black slim trousers and mules"
      ],
      white: [
        "White linen shirt (sleeves rolled) with tailored white shorts and tan leather sandals",
        "White Cuban collar shirt with navy slim trousers and white suede loafers"
      ],
      blue: [
        "Blue floral resort shirt with white slim trousers and navy loafers",
        "Cobalt blue polo with light chino shorts and blue suede sneakers"
      ],
      neutral: [
        "Beige resort shirt with stone linen trousers and brown leather slides",
        "Sand coloured co-ord set (shirt + trousers) with white sneakers"
      ]
    },
    winter: {
      black: [
        "Black turtleneck with black tailored trousers, a leather belt and sharp Chelsea boots",
        "Black velvet blazer with a white shirt, black trousers and black loafers"
      ],
      white: [
        "White turtleneck with black slim trousers, silver watch and black Chelsea boots",
        "Ivory ribbed sweater with charcoal trousers and white leather sneakers"
      ],
      blue: [
        "Cobalt blue slim shirt with dark jeans, a statement watch and black boots",
        "Navy velvet blazer over a white shirt with black trousers and loafers"
      ],
      neutral: [
        "Camel turtleneck with slim dark trousers, a gold watch and suede boots",
        "Stone blazer with a white shirt, black slim trousers and dark Chelsea boots"
      ]
    },
    spring: {
      black: [
        "Black satin bomber over a white tee with black slim trousers and white sneakers",
        "Black sheer overshirt with a black tee, slim jeans and leather boots"
      ],
      white: [
        "White slim shirt (2 buttons open) with light chinos and white leather sneakers",
        "White resort shirt with beige slim trousers and tan loafers"
      ],
      blue: [
        "Cobalt blue satin jacket with a white tee, black trousers and white sneakers",
        "Blue printed short-sleeve shirt with slim white jeans and loafers"
      ],
      neutral: [
        "Tan suede jacket over a white tee with slim olive trousers and white sneakers",
        "Cream knit shirt with stone slim trousers and beige suede loafers"
      ]
    },
    fall: {
      black: [
        "Black leather jacket over a black tee with black slim jeans and combat boots",
        "Black double-breasted blazer with a white tee, dark jeans and Chelsea boots"
      ],
      white: [
        "White oversized shirt jacket over a white tee with black slim trousers and boots",
        "Off-white ribbed long-sleeve with dark burgundy trousers and white sneakers"
      ],
      blue: [
        "Dark blue leather jacket over a white tee with slim dark jeans and boots",
        "Blue velvet blazer with a white shirt, grey trousers and black loafers"
      ],
      neutral: [
        "Camel suede jacket with a white tee, dark jeans and tan leather boots",
        "Grey blazer over a black turtleneck with slim dark trousers and boots"
      ]
    }
  },

  office: {
    summer: {
      black: [
        "Black slim chinos with a light blue Oxford shirt, black belt and black loafers",
        "Black dress trousers with a white linen shirt and black leather mules"
      ],
      white: [
        "White Oxford shirt with light grey slim trousers, a black belt and leather oxfords",
        "White linen shirt (tucked) with navy chinos and tan suede loafers"
      ],
      blue: [
        "Navy chinos with a light blue shirt, tan suede loafers and a brown leather belt",
        "Light blue Oxford shirt with grey slim trousers and navy tassel loafers"
      ],
      neutral: [
        "Khaki slim chinos with a white shirt, light grey blazer and brown loafers",
        "Stone trousers with a light grey polo and tan suede Chelsea boots"
      ]
    },
    winter: {
      black: [
        "Black slim trousers with a black turtleneck, charcoal blazer and black Chelsea boots",
        "Charcoal suit trousers with a black mock-neck and leather Oxford shoes"
      ],
      white: [
        "White Oxford shirt under a grey V-neck sweater with dark trousers and black oxfords",
        "Ivory turtleneck with navy trousers, a dark blazer and brown Derby shoes"
      ],
      blue: [
        "Navy slim trousers with a blue fine-stripe shirt, navy blazer and brown leather shoes",
        "Dark blue chinos with a white shirt under a blue wool sweater and loafers"
      ],
      neutral: [
        "Grey flannel trousers with a camel crewneck sweater and brown leather Derby shoes",
        "Taupe chinos with a white shirt, stone blazer and suede Chelsea boots"
      ]
    },
    spring: {
      black: [
        "Black slim chinos with a white shirt, black knit blazer and clean white sneakers",
        "Charcoal trousers with a black mock-neck, navy blazer and black loafers"
      ],
      white: [
        "White shirt with light beige trousers, a tan blazer and white leather sneakers",
        "White button-down with slim light grey chinos and navy loafers"
      ],
      blue: [
        "Light blue shirt with slim navy chinos, a tan blazer and brown loafers",
        "Navy blazer over a white shirt with light grey trousers and white sneakers"
      ],
      neutral: [
        "Stone chinos with a white Oxford shirt, a beige blazer and tan suede loafers",
        "Olive slim trousers with a white shirt and a camel cardigan and brown boots"
      ]
    },
    fall: {
      black: [
        "Black slim trousers with a white shirt, dark grey wool blazer and black Chelsea boots",
        "Charcoal chinos with a black turtleneck, a black blazer and loafers"
      ],
      white: [
        "White shirt under a grey herringbone blazer with dark navy trousers and black shoes",
        "Off-white shirt with charcoal slim trousers and brown leather Derby shoes"
      ],
      blue: [
        "Navy slim trousers with a blue fine-knit sweater, white shirt underneath and brogues",
        "Cobalt blue chinos with a white shirt, a dark grey blazer and brown loafers"
      ],
      neutral: [
        "Grey wool trousers with a camel rollneck sweater and tan leather Chelsea boots",
        "Stone chinos with a white shirt, olive field jacket and dark brown boots"
      ]
    }
  }
};

// ─── DOM Ready ───────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const btn        = document.getElementById("generateBtn");
  const output     = document.getElementById("output");
  const cardsWrap  = document.getElementById("outfitCards");

  btn.addEventListener("click", generateOutfit);

  function generateOutfit() {
    const occasion = document.getElementById("occasion").value;
    const season   = document.getElementById("season").value;
    const color    = document.getElementById("color").value;

    // Safe lookup with fallback
    const looks =
      outfits?.[occasion]?.[season]?.[color] ||
      ["Classic white Oxford shirt with navy chinos and brown leather loafers",
       "Grey crewneck with slim dark jeans and white clean sneakers"];

    // Render cards
    cardsWrap.innerHTML = "";

    looks.forEach((look, i) => {
      const card = document.createElement("div");
      card.className = "outfit-card";
      card.innerHTML = `
        <div class="card-look">Look ${i + 1}</div>
        <div class="card-outfit">${look}</div>
      `;
      cardsWrap.appendChild(card);
    });

    // Show output section
    output.classList.remove("hidden");
    output.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});
