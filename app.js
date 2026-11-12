// ══════════════════════════════════════════════
//   CHILIGUARD AI - MAIN APPLICATION LOGIC
// ══════════════════════════════════════════════

// ── Disease Database ──────────────────────────
const DISEASES = [
  {
    id: 'healthy',
    name: 'Healthy Leaf',
    icon: '🌿',
    type: 'healthy',
    severity: 'None',
    severityClass: 'sev-low',
    bgColor: 'linear-gradient(135deg,#0d2318,#0a1f10)',
    shortDesc: 'Your chili plant is in excellent health with no signs of disease.',
    overview: 'The leaf shows no signs of disease, pest damage, or nutrient deficiency. The plant is healthy, well-nourished, and growing normally. Continue your current care routine.',
    symptoms: ['Vibrant green color throughout the leaf', 'Firm and smooth leaf texture', 'No spots, lesions, or discoloration', 'Normal leaf shape without curling or distortion', 'Healthy venation patterns'],
    causes: ['Good crop management practices', 'Proper irrigation and nutrition', 'Adequate sunlight and air circulation', 'Pest and disease prevention measures'],
    treatment: {
      immediate: ['No treatment needed — maintain current care', 'Continue regular watering schedule', 'Apply balanced fertilizer monthly'],
      organic: ['Compost application for soil health', 'Neem oil spray as preventive measure (bi-weekly)', 'Maintain mulch around plants'],
      chemical: ['No chemical treatment required', 'Consider preventive copper fungicide during rainy season'],
      prevention: ['Rotate crops every season', 'Inspect plants weekly for early signs of disease', 'Maintain proper plant spacing for air circulation']
    }
  },
  {
    id: 'anthracnose',
    name: 'Anthracnose',
    icon: '🟤',
    type: 'fungal',
    severity: 'High',
    severityClass: 'sev-high',
    bgColor: 'linear-gradient(135deg,#2d0a0a,#1a0505)',
    shortDesc: 'Fungal disease causing dark, sunken lesions on leaves and fruits.',
    overview: 'Anthracnose is one of the most destructive chili diseases worldwide, caused by the fungus Colletotrichum capsici. It affects all aerial parts of the plant, causing dark, sunken lesions that can rapidly spread and lead to crop loss of up to 80% if untreated.',
    symptoms: [
      'Dark brown to black circular spots on leaves (3–10mm diameter)',
      'Sunken, water-soaked lesions with orange/pink centers',
      'Lesions may merge to form large necrotic areas',
      'Leaf yellowing and premature drop',
      'Orange-pink spore masses visible in humid conditions',
      'Fruit develop dark, sunken rot'
    ],
    causes: [
      'Fungus: Colletotrichum capsici (primary cause)',
      'Warm, humid weather (25–28°C with high RH)',
      'Infected seeds or plant material',
      'Poor drainage and waterlogging',
      'Dense canopy limiting air circulation',
      'Mechanical wounds from tools or insects'
    ],
    treatment: {
      immediate: [
        'Remove and destroy all infected plant parts immediately',
        'Avoid overhead irrigation — switch to drip irrigation',
        'Improve air circulation by pruning dense canopy',
        'Stop all wounding activities during wet weather'
      ],
      organic: [
        'Spray copper-based fungicide (Bordeaux mixture 1%) every 7 days',
        'Apply neem oil solution (5ml/L) as contact fungicide',
        'Use Bacillus subtilis biofungicide spray weekly',
        'Sprinkle wood ash around plant base to reduce humidity',
        'Garlic extract spray (50g/L) as supplementary treatment'
      ],
      chemical: [
        'Mancozeb 75% WP — 2.5g/L water, spray every 7–10 days',
        'Carbendazim 50% WP — 1g/L water, 3 applications',
        'Azoxystrobin 23% SC — 1ml/L, highly effective systemics',
        'Propiconazole 25% EC — 1ml/L for severe infections',
        'Chlorothalonil 75% WP — 2g/L as protective spray'
      ],
      prevention: [
        'Use certified disease-free seeds; treat seeds with hot water (50°C, 30 min)',
        'Practice crop rotation (minimum 2 years away from Solanaceae)',
        'Apply preventive fungicide spray at first sign of wet season',
        'Remove crop residues after harvest and destroy them',
        'Plant resistant varieties: CA4, Tamesis, or Yolo Wonder',
        'Maintain proper plant nutrition especially Potassium and Calcium'
      ]
    }
  },
  {
    id: 'bacterial_spot',
    name: 'Bacterial Spot',
    icon: '🟡',
    type: 'bacterial',
    severity: 'High',
    severityClass: 'sev-high',
    bgColor: 'linear-gradient(135deg,#2d2200,#1a1400)',
    shortDesc: 'Bacterial disease causing water-soaked spots that turn dark and irregular.',
    overview: 'Bacterial Spot, caused by Xanthomonas campestris pv. vesicatoria, is a major bacterial disease of chili peppers. It spreads rapidly in warm, rainy conditions and can cause significant defoliation and fruit blemishing, reducing both yield and market value.',
    symptoms: [
      'Small, water-soaked spots initially on the undersides of leaves',
      'Spots become dark brown to black, irregular, and raised',
      'Yellow halo surrounding each lesion (key diagnostic feature)',
      'Severely infected leaves turn yellow and drop prematurely',
      'Dark, raised, scabby lesions on fruits',
      'Stems may develop elongated, dark-colored lesions'
    ],
    causes: [
      'Bacterium: Xanthomonas campestris pv. vesicatoria',
      'Spreads via rain splash, wind, and contaminated tools',
      'Warm temperatures (24–30°C) favor rapid spread',
      'High humidity and free moisture on leaves',
      'Infected transplants or seeds',
      'Insect feeding wounds provide entry points'
    ],
    treatment: {
      immediate: [
        'Remove and bag all heavily infected plant material',
        'Disinfect all pruning tools with 10% bleach solution',
        'Avoid working in the field when plants are wet',
        'Install windbreaks to reduce wind-driven spread'
      ],
      organic: [
        'Copper hydroxide spray (3g/L) every 5–7 days during wet conditions',
        'Copper oxychloride (3g/L) alternated with copper hydroxide',
        'Bicarbonate spray (5g sodium bicarbonate/L) to raise leaf pH',
        'Compost tea spray to boost plant immunity'
      ],
      chemical: [
        'Copper sulfate 50% WP — 3g/L water, 7-day intervals',
        'Streptomycin sulfate 20% WP — 0.5g/L (use sparingly)',
        'Copper hydroxide (Kocide 3000) — 2g/L, preventive application',
        'Bactericin or PhytoAid — follow label instructions'
      ],
      prevention: [
        'Use resistant varieties: Aristotle, Declaration, Boynton Bell',
        'Treat seeds with hot water (52°C for 30 minutes)',
        'Implement 2–3 year crop rotation with non-host crops',
        'Use drip irrigation to keep foliage dry',
        'Scout fields twice weekly and remove infected plants early',
        'Apply preventive copper sprays at transplanting'
      ]
    }
  },
  {
    id: 'leaf_curl',
    name: 'Leaf Curl Virus',
    icon: '🔴',
    type: 'viral',
    severity: 'Very High',
    severityClass: 'sev-high',
    bgColor: 'linear-gradient(135deg,#2d0000,#1a0000)',
    shortDesc: 'Viral disease transmitted by whiteflies causing leaf curling and stunting.',
    overview: 'Chili Leaf Curl Virus (ChiLCV) is a devastating viral disease belonging to the Begomovirus group, transmitted by the whitefly Bemisia tabaci. It can cause up to 100% yield loss in severe outbreaks and is one of the most economically important chili diseases in tropical Asia.',
    symptoms: [
      'Downward or upward curling of leaf margins (key symptom)',
      'Leaf puckering, crinkling, and distortion',
      'Yellowing between leaf veins (interveinal chlorosis)',
      'Severe stunting of plant growth',
      'Shortened internodes and compact plant appearance',
      'Flower drop and poor fruit setting',
      'Reduced fruit size and distorted fruits'
    ],
    causes: [
      'Virus: Chili Leaf Curl Virus (ChiLCV) — Begomovirus group',
      'Primary vector: Whitefly (Bemisia tabaci)',
      'Secondary spread through contaminated grafting material',
      'Hot, dry conditions favor whitefly reproduction',
      'Proximity to infected ornamental plants (Lantana, Tomato)',
      'No mechanical transmission (tool-to-plant)'
    ],
    treatment: {
      immediate: [
        'Remove and destroy severely infected plants — there is NO cure for viral infections',
        'Install yellow sticky traps throughout the field to monitor whiteflies',
        'Control whitefly population urgently with approved insecticides',
        'Isolate the infected area with reflective mulch to repel whiteflies'
      ],
      organic: [
        'Spray neem oil (5ml/L + 2ml soap/L) every 5 days to control whiteflies',
        'Yellow sticky traps: 20 traps per acre',
        'Release natural enemies: Encarsia formosa (parasitic wasp)',
        'Spray insecticidal soap (5g/L) every 7 days',
        'Plant basil and marigolds as companion crops to deter whiteflies'
      ],
      chemical: [
        'Imidacloprid 17.8% SL — 0.5ml/L soil drench at planting',
        'Thiamethoxam 25% WG — 0.3g/L spray for whitefly control',
        'Pymetrozine 50% WG — 0.6g/L, effective against sucking insects',
        'Flonicamid 50% WG — 0.3g/L for persistent whitefly control',
        'Spiromesifen 240 SC — 1ml/L for eggs and nymphs'
      ],
      prevention: [
        'Use virus-free certified transplants from certified nurseries',
        'Install 50-mesh nylon nets in nurseries to exclude whiteflies',
        'Use reflective silver mulch to confuse and repel whiteflies',
        'Practice 3-week plant-free period between crop cycles',
        'Avoid growing tomato, tobacco, or Lantana near chili fields',
        'Grow tolerant varieties: Bharat, Indra, or local resistant lines',
        'Monitor whitefly populations and act when >2 adults per leaf'
      ]
    }
  },
  {
    id: 'powdery_mildew',
    name: 'Powdery Mildew',
    icon: '⚪',
    type: 'fungal',
    severity: 'Medium',
    severityClass: 'sev-medium',
    bgColor: 'linear-gradient(135deg,#1a1a2e,#0f0f1a)',
    shortDesc: 'Fungal disease creating white powdery coating on leaf surfaces.',
    overview: 'Powdery Mildew, caused by Leveillula taurica, is a unique chili pathogen that grows internally then produces external spores. Unlike most powdery mildews, it thrives in hot, dry conditions with low humidity, making it challenging to manage in arid growing regions.',
    symptoms: [
      'White to gray powdery coating on leaf surfaces',
      'Yellow patches on upper leaf surface corresponding to powdery growth below',
      'Leaves may curl upward at edges',
      'Severely infected leaves turn yellow-brown and drop',
      'Reduced photosynthesis and plant vigor',
      'Early infection causes leaf distortion in young tissue',
      'Fruit may be exposed to sunscald due to defoliation'
    ],
    causes: [
      'Fungus: Leveillula taurica (internal growth stage makes it unique)',
      'Favored by hot, dry days (20–35°C) with low humidity at night',
      'High plant density restricting air movement',
      'Dusty conditions',
      'Excess nitrogen fertilization promotes susceptible growth',
      'Old, dense canopy with poor light penetration'
    ],
    treatment: {
      immediate: [
        'Remove and destroy heavily infected leaves and plant debris',
        'Prune dense canopy to improve air circulation',
        'Reduce nitrogen fertilization immediately',
        'Avoid overhead irrigation in the evening'
      ],
      organic: [
        'Potassium bicarbonate (5g/L) spray weekly — highly effective',
        'Neem oil (5ml/L) + soap (2ml/L) spray every 7 days',
        'Baking soda solution (5g/L) as emergency treatment',
        'Sulfur dust application in dry conditions',
        'Milk solution (40% milk in water) spray weekly'
      ],
      chemical: [
        'Sulfur 80% WP — 3g/L water, spray every 10 days',
        'Myclobutanil 10% WP — 1g/L for systemic control',
        'Tetraconazole 10% EW — 1ml/L for curative treatment',
        'Trifloxystrobin 50% WG — 0.5g/L for excellent control',
        'Hexaconazole 5% EC — 2ml/L spray'
      ],
      prevention: [
        'Plant at proper spacing to ensure air circulation (60x60cm minimum)',
        'Avoid excess nitrogen; use balanced NPK fertilization',
        'Monitor fields weekly from early season onward',
        'Apply protective sulfur sprays during dry season',
        'Remove crop residues to reduce fungal inoculum',
        'Plant resistant varieties where available'
      ]
    }
  },
  {
    id: 'cercospora_leafspot',
    name: 'Cercospora Leaf Spot',
    icon: '🔵',
    type: 'fungal',
    severity: 'Medium',
    severityClass: 'sev-medium',
    bgColor: 'linear-gradient(135deg,#001a2d,#000f1a)',
    shortDesc: 'Fungal leaf spot causing circular lesions with pale centers and dark borders.',
    overview: 'Cercospora leaf spot (Cercospora capsici) is a widespread fungal disease that causes characteristic circular lesions. While rarely as devastating as anthracnose, severe infections can cause significant defoliation and weaken plants, making them more vulnerable to other diseases.',
    symptoms: [
      'Circular to irregular spots, 0.5–1cm diameter',
      'Pale gray or white center with dark brown to purple border',
      'Yellow halo surrounding mature lesions',
      'Multiple spots may merge forming larger blighted areas',
      'Severe defoliation in wet conditions',
      'Gray spore masses visible on spots in humid conditions'
    ],
    causes: [
      'Fungus: Cercospora capsici',
      'Favored by warm (25–30°C), humid conditions',
      'Spreads by wind and rain splash',
      'Dense planting and overhead irrigation',
      'Infected crop debris in soil',
      'Weakened plants from nutrient stress'
    ],
    treatment: {
      immediate: ['Remove infected leaves and destroy them', 'Improve air circulation by pruning'],
      organic: ['Copper-based fungicide spray every 7–10 days', 'Neem oil spray (5ml/L) weekly', 'Trichoderma-based biofungicide application'],
      chemical: ['Mancozeb 75% WP — 2.5g/L every 7–10 days', 'Iprodione 50% WP — 1g/L for curative action', 'Chlorothalonil 75% WP — 2g/L preventive spray'],
      prevention: ['Use clean seeds; apply fungicide seed treatment', 'Crop rotation with non-host crops', 'Remove all crop debris after harvest', 'Plant at proper spacing (60×60cm)']
    }
  },
  {
    id: 'phytophthora_blight',
    name: 'Phytophthora Blight',
    icon: '🟣',
    type: 'fungal',
    severity: 'Very High',
    severityClass: 'sev-high',
    bgColor: 'linear-gradient(135deg,#1a0028,#0d0015)',
    shortDesc: 'Water mold causing rapid wilting, stem collapse, and plant death.',
    overview: 'Phytophthora blight (Phytophthora capsici) is one of the most destructive diseases of chili worldwide. It attacks roots, stems, leaves, and fruits, capable of killing entire plants within days. Losses of 50–100% are common in severe outbreaks, especially after heavy rainfall.',
    symptoms: [
      'Dark green, water-soaked patches on leaves that turn brown rapidly',
      'White cottony mycelium visible on infected areas in humid conditions',
      'Dark brown to black stem lesions starting from soil level',
      'Sudden wilting and collapse of entire plants ("sudden death")',
      'Root rot with brown to black discoloration',
      'Dark, greasy-looking lesions on fruits'
    ],
    causes: [
      'Oomycete (water mold): Phytophthora capsici',
      'Favored by waterlogged soils and heavy rainfall',
      'Spreads rapidly through soil water and irrigation runoff',
      'Poor drainage and compacted soils',
      'High soil temperatures (25–30°C)',
      'Infected soil or transplants'
    ],
    treatment: {
      immediate: ['Improve drainage immediately — create raised beds if possible', 'Remove and destroy wilted plants including roots', 'Avoid any tillage to prevent spread through soil movement'],
      organic: ['Apply Trichoderma harzianum to soil (10g/L drench)', 'Copper hydroxide soil drench around healthy plants', 'Biochar application to improve soil drainage'],
      chemical: ['Metalaxyl + Mancozeb (Ridomil Gold) — 2.5g/L soil drench', 'Fosetyl-Al 80% WP — 2.5g/L foliar spray', 'Dimethomorph 50% WP — 1g/L spray and soil drench', 'Oxathiapiprolin (Orondis) — latest generation oomycide'],
      prevention: ['Plant on raised beds (30cm high) for excellent drainage', 'Practice 3–4 year rotation with cereals or brassicas', 'Avoid flood irrigation; use drip or furrow irrigation', 'Treat transplanting holes with Metalaxyl before planting', 'Use Phytophthora-resistant varieties where available']
    }
  },
  {
    id: 'fusarium_wilt',
    name: 'Fusarium Wilt',
    icon: '🟠',
    type: 'fungal',
    severity: 'High',
    severityClass: 'sev-high',
    bgColor: 'linear-gradient(135deg,#2d1000,#1a0900)',
    shortDesc: 'Soil-borne fungus causing vascular browning and irreversible plant wilting.',
    overview: 'Fusarium Wilt (Fusarium oxysporum f. sp. capsici) is a devastating soil-borne disease that invades the plant\'s vascular system, blocking water and nutrient transport. It causes progressive wilting that starts from one side of the plant and eventually kills it. The fungus can survive in soil for 15+ years.',
    symptoms: [
      'One-sided wilting starting from lower leaves (early diagnostic sign)',
      'Yellowing and browning of lower leaves progressing upward',
      'Brown discoloration of vascular tissue when stem is cut (key diagnostic feature)',
      'Stunted plant growth even before full wilting',
      'Eventually all leaves wilt and the plant dies',
      'Pink-orange fungal growth at stem base in humid conditions'
    ],
    causes: [
      'Fungus: Fusarium oxysporum f. sp. capsici',
      'Soil-borne pathogen persisting 10–15 years as chlamydospores',
      'Spreads via infected soil, water, tools, and transplants',
      'Enters through roots, especially at wound sites',
      'Favored by warm soil temperatures (25–30°C)',
      'Acidic soils (pH < 6.0) promote disease development'
    ],
    treatment: {
      immediate: ['Remove and destroy infected plants — do not compost', 'Mark infected areas to avoid planting chili there for 3+ years', 'Disinfect all tools with 70% alcohol or 10% bleach'],
      organic: ['Apply Trichoderma asperellum to soil (20g/m²)', 'Adjust soil pH to 6.5–7.0 using lime application', 'Solarize soil with clear plastic for 4–6 weeks (summer)', 'Increase soil organic matter with well-composted manure'],
      chemical: ['Carbendazim 50% WP — soil drench (2g/L) around healthy plants', 'Thiophanate methyl — soil application', 'Fludioxonil seed treatment before planting', 'Captan 50% WP — protective soil drench'],
      prevention: ['Use Fusarium-resistant or tolerant varieties', 'Practice minimum 3-year crop rotation with cereals/brassicas', 'Raise soil pH to 6.5–7.0 for hostile conditions to fungus', 'Never reuse potting mix; sterilize containers before reuse', 'Purchase transplants only from certified disease-free sources']
    }
  },
  {
    id: 'damping_off',
    name: 'Damping-Off',
    icon: '🌱',
    type: 'fungal',
    severity: 'High',
    severityClass: 'sev-high',
    bgColor: 'linear-gradient(135deg,#0d1a00,#080f00)',
    shortDesc: 'Seedling disease causing sudden collapse at soil level.',
    overview: 'Damping-off is caused by several soil-borne pathogens (Pythium, Rhizoctonia, Fusarium) that attack chili seedlings at or near the soil line. It is especially devastating in nurseries and seedbeds, capable of destroying an entire batch of seedlings within days.',
    symptoms: ['Collapsed seedlings at soil level (pre-emergence or post-emergence)', 'Dark, water-soaked, constricted stem at soil line (wire stem)', 'Seedlings topple over and die rapidly', 'White cottony mold at soil surface in humid conditions', 'Poor germination in affected areas'],
    causes: ['Pythium spp., Rhizoctonia solani, Fusarium spp.', 'Overwatering and poor drainage', 'High humidity in seedbeds', 'Contaminated soil or media', 'Excessive seeding density'],
    treatment: {
      immediate: ['Reduce watering frequency immediately', 'Improve ventilation around seedlings', 'Remove collapsed seedlings and surrounding soil'],
      organic: ['Copper fungicide drench (1g/L) at seedling base', 'Trichoderma-enriched potting mix', 'Chamomile tea drench (traditional remedy)'],
      chemical: ['Captan 50% WP — 2g/L soil drench', 'Mancozeb 75% WP — 2.5g/L preventive drench', 'Metalaxyl seed treatment before sowing'],
      prevention: ['Use sterilized seedling media only', 'Sow in well-draining trays/beds', 'Maintain optimal watering (avoid overwatering)', 'Treat seeds with fungicide before sowing', 'Maintain good nursery hygiene']
    }
  },
  {
    id: 'nitrogen_deficiency',
    name: 'Nitrogen Deficiency',
    icon: '🟫',
    type: 'nutrient',
    severity: 'Medium',
    severityClass: 'sev-medium',
    bgColor: 'linear-gradient(135deg,#1a1500,#0f0d00)',
    shortDesc: 'Nutritional disorder causing yellowing of older leaves from bottom up.',
    overview: 'Nitrogen deficiency is a common nutritional disorder in chili, often confused with disease. It causes progressive yellowing starting from the oldest (lowest) leaves and moving upward. It significantly reduces plant growth, flowering, and fruit production.',
    symptoms: ['Uniform yellowing of oldest (lower) leaves first', 'Leaves turn pale green then yellow', 'Yellowing progresses from bottom to top of plant', 'Reduced leaf size on new growth', 'Thin, weak stems', 'Poor fruit set and small fruit size', 'Overall reduced plant vigor'],
    causes: ['Insufficient nitrogen fertilizer application', 'Sandy soils with low nitrogen-holding capacity', 'Leaching from excessive rainfall or irrigation', 'High soil pH (>7.5) reducing N availability', 'Root damage from disease or pests limiting uptake', 'Competitive weeds consuming available nitrogen'],
    treatment: {
      immediate: ['Apply foliar urea spray (1–2% solution) for rapid uptake', 'Side-dress with ammonium sulfate (20g/plant)'],
      organic: ['Apply well-composted poultry manure (1kg/plant)', 'Fish emulsion foliar spray (5ml/L)', 'Blood meal application to soil (50g/m²)'],
      chemical: ['Urea 46% — soil application 20–30g/plant, water thoroughly', 'NPK 20:10:10 water-soluble fertilizer — 2g/L foliar spray', 'Calcium ammonium nitrate — 20g/plant as side-dressing'],
      prevention: ['Follow recommended NPK fertilization schedule for chili', 'Conduct soil testing annually before planting', 'Apply nitrogen in split doses every 3–4 weeks', 'Maintain soil pH 5.8–6.5 for optimal nutrient availability', 'Use organic mulch to reduce nitrogen leaching']
    }
  },
  {
    id: 'spider_mite_damage',
    name: 'Spider Mite Damage',
    icon: '🕷️',
    type: 'nutrient',
    severity: 'Medium',
    severityClass: 'sev-medium',
    bgColor: 'linear-gradient(135deg,#1a0a00,#0f0500)',
    shortDesc: 'Pest damage causing stippling, bronzing, and fine webbing on leaves.',
    overview: 'Spider mites (Tetranychus urticae) are tiny arachnids that suck cell sap from chili leaves. Though not a disease, their damage mimics disease symptoms and can be detected by our AI. Severe infestations in hot, dry conditions can cause significant crop losses.',
    symptoms: ['Fine stippling (tiny white/yellow dots) on upper leaf surface', 'Bronzing or rusty appearance of leaves in heavy infestations', 'Fine webbing visible on underside of leaves', 'Leaves may dry, curl, and drop', 'Tiny moving dots visible on underside with magnification', 'Fruit may show bronzing or russeting'],
    causes: ['Two-spotted spider mite (Tetranychus urticae)', 'Hot, dry weather favors rapid reproduction', 'Dusty conditions near roads or fields', 'Over-application of broad-spectrum insecticides killing natural enemies', 'Water stress in plants'],
    treatment: {
      immediate: ['Spray plants with strong water jet from underneath leaves', 'Apply miticide immediately in severe cases', 'Increase humidity around plants'],
      organic: ['Neem oil (5ml/L) spray targeting leaf undersides', 'Insecticidal soap spray (5g/L) every 5 days', 'Release predatory mites (Phytoseiidae family)', 'Sulfur dust or spray'],
      chemical: ['Abamectin 1.8% EC — 1ml/L spray on leaf undersides', 'Spiromesifen 240 SC — 1ml/L, excellent for eggs', 'Hexythiazox 10% WP — 1g/L for larvae and nymphs', 'Bifenazate 24% SC — 1ml/L, fast knockdown'],
      prevention: ['Maintain adequate soil moisture; avoid water stress', 'Avoid creating dusty conditions near fields', 'Conserve natural enemies by using selective pesticides', 'Install shade nets to reduce temperature in nurseries', 'Monitor leaf undersides weekly with hand lens']
    }
  },
  {
    id: 'cucumber_mosaic_virus',
    name: 'Cucumber Mosaic Virus',
    icon: '🟩',
    type: 'viral',
    severity: 'High',
    severityClass: 'sev-high',
    bgColor: 'linear-gradient(135deg,#001a08,#000f05)',
    shortDesc: 'Viral disease causing mosaic patterns, distortion, and stunting.',
    overview: 'Cucumber Mosaic Virus (CMV) is one of the most widespread plant viruses globally, affecting chili among hundreds of host plants. It is transmitted by aphids in a non-persistent manner, meaning aphids can spread it very rapidly as they move between plants.',
    symptoms: ['Mosaic pattern of light and dark green on leaves', 'Leaf distortion, puckering, and reduced leaf size', 'Stunted plant growth', 'Mottled, irregular coloring on fruits', 'Shoe-string symptom: very narrow, strap-like leaves', 'Poor fruit set and reduced fruit quality'],
    causes: ['Virus: Cucumber Mosaic Virus (CMV)', 'Transmitted by 60+ aphid species (Myzus persicae is primary)', 'Non-persistent transmission: very rapid spread', 'Wide host range (1200+ plant species) provides large inoculum reservoir', 'Warm weather favoring aphid populations'],
    treatment: {
      immediate: ['Remove and destroy severely infected plants', 'Control aphid populations urgently — the vector must be managed', 'Install reflective silver mulch to repel aphids'],
      organic: ['Spray neem oil (5ml/L) every 5–7 days for aphid control', 'Insecticidal soap (5g/L) spray on aphid colonies', 'Release aphid parasitoids (Aphidius colemani)', 'Yellow sticky traps to monitor aphid populations'],
      chemical: ['Imidacloprid 17.8% SL — 0.5ml/L for aphid control', 'Flonicamid 50% WG — 0.3g/L, excellent against aphids', 'Mineral oil spray to interfere with virus acquisition', 'Thiamethoxam 25% WG — 0.3g/L spray'],
      prevention: ['Plant aphid-resistant or CMV-tolerant varieties', 'Use reflective silver mulch throughout the season', 'Establish crop-free periods to break disease cycles', 'Remove weed hosts especially Cucurbitaceae near fields', 'Avoid planting chili near cucumber, tomato, or spinach crops']
    }
  }
];

// ── Experts Database ──────────────────────────
const EXPERTS = [
  {
    emoji: '👩‍🔬',
    name: 'Dr. Maria Santos',
    title: 'Plant Pathologist',
    specialty: 'Fungal Diseases',
    institution: 'International Center for Tropical Agriculture (CIAT)',
    experience: '18 years',
    rating: '4.9',
    reviews: 342,
    tags: ['Anthracnose', 'Phytophthora', 'Fusarium'],
    bio: 'Dr. Santos is a world-renowned expert in Colletotrichum diseases with 18 years of field experience across Southeast Asia and Latin America.',
    available: true,
    email: 'santos@ciat.cgiar.org',
    response: '< 24 hours'
  },
  {
    emoji: '👨‍🌾',
    name: 'Dr. Raj Patel',
    title: 'Agricultural Scientist',
    specialty: 'Crop Management & IPM',
    institution: 'Indian Agricultural Research Institute (IARI)',
    experience: '22 years',
    rating: '4.8',
    reviews: 289,
    tags: ['IPM', 'Bacterial Diseases', 'Nutrient Management'],
    bio: 'Dr. Patel specializes in integrated pest management for spice crops with extensive experience in South Asian agricultural systems.',
    available: true,
    email: 'rpatel@iari.res.in',
    response: '< 48 hours'
  },
  {
    emoji: '👩‍💻',
    name: 'Dr. Li Wei',
    title: 'Fungal Disease Specialist',
    specialty: 'Powdery Mildew & Cercospora',
    institution: 'Chinese Academy of Agricultural Sciences',
    experience: '15 years',
    rating: '4.9',
    reviews: 198,
    tags: ['Powdery Mildew', 'Cercospora', 'Fungicides'],
    bio: 'Dr. Li Wei leads a research group focused on fungal pathogen genomics and developing environmentally-friendly fungicide programs.',
    available: false,
    email: 'liwei@caas.cn',
    response: '2–3 business days'
  },
  {
    emoji: '👨‍⚕️',
    name: 'Dr. Ahmed Hassan',
    title: 'Soil & Nutrition Expert',
    specialty: 'Nutrient Deficiencies & Soil Health',
    institution: 'Egyptian Research Institute of Agriculture',
    experience: '20 years',
    rating: '4.7',
    reviews: 156,
    tags: ['Nutrient Deficiency', 'Soil Health', 'Fertilization'],
    bio: 'Dr. Hassan focuses on soil health and plant nutrition in arid and semi-arid regions, helping farmers optimize fertilizer programs.',
    available: true,
    email: 'ahassan@eari.eg',
    response: '< 36 hours'
  },
  {
    emoji: '👩‍🔬',
    name: 'Dr. Elena Kovac',
    title: 'Viral Disease Expert',
    specialty: 'Plant Viruses & Vector Management',
    institution: 'European Plant Virology Institute',
    experience: '14 years',
    rating: '4.9',
    reviews: 212,
    tags: ['Leaf Curl Virus', 'CMV', 'Whitefly Control'],
    bio: 'Dr. Kovac is a leading authority on begomovirus diseases and their whitefly vectors, with groundbreaking research on integrated virus management.',
    available: true,
    email: 'ekovac@epvi.eu',
    response: '< 24 hours'
  },
  {
    emoji: '👨‍🌱',
    name: 'Dr. Carlos Mendez',
    title: 'Pest Management Specialist',
    specialty: 'Mites, Thrips & Insect Vectors',
    institution: 'Universidad Autónoma Chapingo, Mexico',
    experience: '16 years',
    rating: '4.8',
    reviews: 178,
    tags: ['Spider Mites', 'Aphids', 'Biological Control'],
    bio: 'Dr. Mendez specializes in arthropod pest management for vegetables, with a focus on biological control and reduced-risk pesticide programs.',
    available: false,
    email: 'cmendez@uach.mx',
    response: '3–5 business days'
  }
];

// ── Detection Simulation Data ──────────────────
const SAMPLE_RESULTS = {
  healthy: {
    primary: { id:'healthy', confidence: 94 },
    all: [
      { id:'healthy', confidence:94 },
      { id:'powdery_mildew', confidence:3 },
      { id:'nitrogen_deficiency', confidence:2 },
      { id:'cercospora_leafspot', confidence:1 }
    ]
  },
  anthracnose: {
    primary: { id:'anthracnose', confidence: 87 },
    all: [
      { id:'anthracnose', confidence:87 },
      { id:'cercospora_leafspot', confidence:7 },
      { id:'bacterial_spot', confidence:4 },
      { id:'healthy', confidence:2 }
    ]
  },
  bacterial_spot: {
    primary: { id:'bacterial_spot', confidence: 82 },
    all: [
      { id:'bacterial_spot', confidence:82 },
      { id:'anthracnose', confidence:9 },
      { id:'cercospora_leafspot', confidence:6 },
      { id:'healthy', confidence:3 }
    ]
  },
  leaf_curl: {
    primary: { id:'leaf_curl', confidence: 91 },
    all: [
      { id:'leaf_curl', confidence:91 },
      { id:'cucumber_mosaic_virus', confidence:5 },
      { id:'spider_mite_damage', confidence:3 },
      { id:'healthy', confidence:1 }
    ]
  },
  powdery_mildew: {
    primary: { id:'powdery_mildew', confidence: 89 },
    all: [
      { id:'powdery_mildew', confidence:89 },
      { id:'cercospora_leafspot', confidence:6 },
      { id:'healthy', confidence:3 },
      { id:'nitrogen_deficiency', confidence:2 }
    ]
  }
};

// ── App State ──────────────────────────────────
let currentImageData = null;
let currentSample = null;
let currentTabData = {};
let currentTreatmentDisease = null;
let currentTreatmentTab = 'immediate';

// ══════════════════════════════════════════════
//   NAVIGATION
// ══════════════════════════════════════════════
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll(`[onclick="showSection('${id}')"]`).forEach(el => el.classList.add('active'));
  window.scrollTo({ top:0, behavior:'smooth' });

  // Lazy-init sections
  if (id === 'diseases') renderDiseaseLibrary();
  if (id === 'treatment') renderTreatmentSection();
  if (id === 'experts') renderExperts();
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ══════════════════════════════════════════════
//   UPLOAD & FILE HANDLING
// ══════════════════════════════════════════════
function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) loadImageFile(file);
}

function loadImageFile(file) {
  if (!file.type.startsWith('image/')) {
    alert('Please upload an image file (JPG, PNG, WEBP)');
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    currentImageData = e.target.result;
    currentSample = null;
    showImagePreview(e.target.result);
  };
  reader.readAsDataURL(file);
}

function showImagePreview(src) {
  document.getElementById('previewImg').src = src;
  document.getElementById('uploadIdle').style.display = 'none';
  document.getElementById('uploadPreview').style.display = 'block';
  document.getElementById('detectBtn').disabled = false;
  resetResults();
}

function handleDrop(e) {
  e.preventDefault();
  document.getElementById('uploadZone').classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file) loadImageFile(file);
}

function handleDragOver(e) {
  e.preventDefault();
  document.getElementById('uploadZone').classList.add('drag-over');
}

function handleDragLeave(e) {
  document.getElementById('uploadZone').classList.remove('drag-over');
}

function loadSample(type) {
  currentSample = type;
  currentImageData = null;
  // Show emoji as placeholder
  const colors = {
    healthy:'#2dc653', anthracnose:'#8b4513',
    bacterial_spot:'#daa520', leaf_curl:'#cc0000', powdery_mildew:'#9090a0'
  };
  const icons = {
    healthy:'🌿', anthracnose:'🍂', bacterial_spot:'🍃', leaf_curl:'🌿', powdery_mildew:'🍃'
  };
  const labels = {
    healthy:'Healthy Leaf', anthracnose:'Anthracnose', bacterial_spot:'Bacterial Spot',
    leaf_curl:'Leaf Curl Virus', powdery_mildew:'Powdery Mildew'
  };

  // Create a colored canvas as sample
  const canvas = document.createElement('canvas');
  canvas.width = 400; canvas.height = 300;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(200,150,20,200,150,200);
  grad.addColorStop(0, colors[type] + '44');
  grad.addColorStop(1, '#0d1117');
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,400,300);
  ctx.font = '80px serif';
  ctx.textAlign = 'center';
  ctx.fillText(icons[type], 200, 170);
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 20px Poppins, sans-serif';
  ctx.fillText(labels[type] + ' Sample', 200, 230);

  const dataUrl = canvas.toDataURL('image/png');
  showImagePreview(dataUrl);
}

// ══════════════════════════════════════════════
//   CAMERA
// ══════════════════════════════════════════════
let cameraStream = null;

async function toggleCamera() {
  const checked = document.getElementById('cameraToggle').checked;
  const section = document.getElementById('cameraSection');
  if (checked) {
    try {
      cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
      document.getElementById('cameraFeed').srcObject = cameraStream;
      section.style.display = 'block';
    } catch(err) {
      alert('Camera access denied or not available.');
      document.getElementById('cameraToggle').checked = false;
    }
  } else {
    if (cameraStream) {
      cameraStream.getTracks().forEach(t => t.stop());
      cameraStream = null;
    }
    section.style.display = 'none';
  }
}

function capturePhoto() {
  const video = document.getElementById('cameraFeed');
  const canvas = document.getElementById('captureCanvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  const dataUrl = canvas.toDataURL('image/jpeg');
  currentImageData = dataUrl;
  currentSample = null;
  showImagePreview(dataUrl);
}

// ══════════════════════════════════════════════
//   ANALYSIS ENGINE
// ══════════════════════════════════════════════
function analyzeLeaf() {
  if (!currentImageData && !currentSample) return;
  showLoading();
  runLoadingSteps(() => {
    const result = generateResult();
    showResults(result);
  });
}

function runLoadingSteps(callback) {
  const steps = ['step1','step2','step3','step4'];
  let idx = 0;
  const interval = setInterval(() => {
    if (idx > 0) document.getElementById(steps[idx-1]).classList.remove('active');
    if (idx < steps.length) {
      document.getElementById(steps[idx]).classList.add('active');
      idx++;
    } else {
      clearInterval(interval);
      setTimeout(callback, 500);
    }
  }, 700);
}

function generateResult() {
  if (currentSample && SAMPLE_RESULTS[currentSample]) {
    return SAMPLE_RESULTS[currentSample];
  }
  // For uploaded images: generate realistic random result
  const diseaseIds = DISEASES.map(d => d.id);
  const primary = diseaseIds[Math.floor(Math.random() * diseaseIds.length)];
  const primaryConf = Math.floor(Math.random() * 25) + 70; // 70–95%
  let remaining = 100 - primaryConf;
  const others = diseaseIds.filter(d => d !== primary).slice(0,3);
  const allResults = [{ id: primary, confidence: primaryConf }];
  others.forEach((id, i) => {
    const conf = i < others.length-1
      ? Math.floor(Math.random() * (remaining / 2) + 1)
      : remaining;
    remaining -= conf;
    if (conf > 0) allResults.push({ id, confidence: conf });
  });
  allResults.sort((a,b) => b.confidence - a.confidence);
  return { primary: allResults[0], all: allResults };
}

// ══════════════════════════════════════════════
//   UI STATE MANAGEMENT
// ══════════════════════════════════════════════
function resetResults() {
  document.getElementById('resultsEmpty').style.display = 'flex';
  document.getElementById('resultsLoading').style.display = 'none';
  document.getElementById('resultsContent').style.display = 'none';
}

function showLoading() {
  document.getElementById('resultsEmpty').style.display = 'none';
  document.getElementById('resultsLoading').style.display = 'flex';
  document.getElementById('resultsContent').style.display = 'none';
  // Reset steps
  document.querySelectorAll('.load-step').forEach(s => s.classList.remove('active'));
}

function showResults(result) {
  document.getElementById('resultsLoading').style.display = 'none';
  document.getElementById('resultsContent').style.display = 'block';

  const disease = DISEASES.find(d => d.id === result.primary.id) || DISEASES[0];
  const conf = result.primary.confidence;

  // Header
  document.getElementById('diagIcon').textContent = disease.icon;
  document.getElementById('diagName').textContent = disease.name;
  const sevSpan = document.getElementById('diagSeverity');
  sevSpan.textContent = disease.severity === 'None' ? '✅ Healthy Plant' : `⚠️ ${disease.severity} Severity`;
  sevSpan.className = 'diagnosis-severity ' + disease.severityClass;
  document.getElementById('diagBadge').textContent = conf + '%';
  document.getElementById('diagBadge').style.color = conf >= 85 ? '#e63946' : conf >= 70 ? '#e9c46a' : '#2dc653';

  // Confidence bars
  const barsContainer = document.getElementById('confidenceBars');
  barsContainer.innerHTML = result.all.map(r => {
    const d = DISEASES.find(x => x.id === r.id);
    const color = r.confidence >= 70 ? 'var(--primary)' : r.confidence >= 30 ? 'var(--accent)' : 'var(--green)';
    return `
      <div class="conf-bar-row">
        <span class="conf-label">${d ? d.icon+' '+d.name : r.id}</span>
        <div class="conf-track">
          <div class="conf-fill" style="width:0%;background:${color}" data-width="${r.confidence}%"></div>
        </div>
        <span class="conf-pct">${r.confidence}%</span>
      </div>`;
  }).join('');

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.conf-fill').forEach(el => {
      el.style.width = el.dataset.width;
    });
  }, 100);

  // Store current for tabs
  currentTabData = disease;
  switchTab('overview', document.querySelector('.detail-tab'));

  // Treatment
  renderQuickTreatment(disease);
}

function switchTab(tab, btn) {
  document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const content = document.getElementById('tabContent');
  const d = currentTabData;
  if (!d) return;

  if (tab === 'overview') {
    content.innerHTML = `<p>${d.overview}</p>`;
  } else if (tab === 'symptoms') {
    content.innerHTML = '<ul style="padding-left:1.2rem">' +
      (d.symptoms || []).map(s => `<li style="margin-bottom:6px">${s}</li>`).join('') + '</ul>';
  } else if (tab === 'causes') {
    content.innerHTML = '<ul style="padding-left:1.2rem">' +
      (d.causes || []).map(c => `<li style="margin-bottom:6px">${c}</li>`).join('') + '</ul>';
  }
}

function renderQuickTreatment(disease) {
  const steps = (disease.treatment?.immediate || []).slice(0, 3);
  document.getElementById('treatmentContent').innerHTML = steps.map((s,i) => `
    <div class="treatment-step">
      <div class="step-num">${i+1}</div>
      <div class="step-text">${s}</div>
    </div>`).join('');
}

function resetScan() {
  currentImageData = null;
  currentSample = null;
  document.getElementById('uploadIdle').style.display = 'flex';
  document.getElementById('uploadPreview').style.display = 'none';
  document.getElementById('detectBtn').disabled = true;
  document.getElementById('leafInput').value = '';
  resetResults();
}

// ══════════════════════════════════════════════
//   DOWNLOAD REPORT
// ══════════════════════════════════════════════
function downloadReport() {
  const disease = currentTabData;
  if (!disease || !disease.name) { alert('Please run a scan first.'); return; }

  const date = new Date().toLocaleString();
  const content = `
CHILIGUARD AI — DISEASE DETECTION REPORT
==========================================
Generated: ${date}
System: ChiliGuard AI v2.0

DIAGNOSIS RESULT
─────────────────
Disease Detected : ${disease.name}
Severity         : ${disease.severity}
Disease Type     : ${disease.type}

OVERVIEW
─────────────────
${disease.overview}

SYMPTOMS OBSERVED
─────────────────
${(disease.symptoms || []).map((s,i) => `${i+1}. ${s}`).join('\n')}

CAUSES
─────────────────
${(disease.causes || []).map((c,i) => `${i+1}. ${c}`).join('\n')}

IMMEDIATE ACTIONS
─────────────────
${(disease.treatment?.immediate || []).map((s,i) => `${i+1}. ${s}`).join('\n')}

ORGANIC TREATMENT
─────────────────
${(disease.treatment?.organic || []).map((s,i) => `${i+1}. ${s}`).join('\n')}

CHEMICAL TREATMENT
─────────────────
${(disease.treatment?.chemical || []).map((s,i) => `${i+1}. ${s}`).join('\n')}

PREVENTION STRATEGIES
─────────────────────
${(disease.treatment?.prevention || []).map((s,i) => `${i+1}. ${s}`).join('\n')}

─────────────────────────────────────────
DISCLAIMER: This report is AI-generated and intended as decision support only.
Always consult a certified plant pathologist for critical crop management decisions.

ChiliGuard AI | support@chiliguardai.com
`.trim();

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ChiliGuard_Report_${disease.id}_${Date.now()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// ══════════════════════════════════════════════
//   DISEASE LIBRARY
// ══════════════════════════════════════════════
let libraryFilter = 'all';

function renderDiseaseLibrary() {
  renderDiseasesFiltered();
}

function renderDiseasesFiltered(search = '') {
  const grid = document.getElementById('diseaseGrid');
  const filtered = DISEASES.filter(d => {
    const matchType = libraryFilter === 'all' || d.type === libraryFilter;
    const matchSearch = !search || d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.shortDesc.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:3rem">No diseases found matching your search.</div>';
    return;
  }

  grid.innerHTML = filtered.map(d => `
    <div class="disease-card" onclick="openDiseaseModal('${d.id}')">
      <div class="disease-card-img" style="background:${d.bgColor}">
        <span style="font-size:5rem">${d.icon}</span>
        <span class="disease-type-badge type-${d.type}">${d.type.charAt(0).toUpperCase()+d.type.slice(1)}</span>
      </div>
      <div class="disease-card-body">
        <h3>${d.name}</h3>
        <p>${d.shortDesc}</p>
        <div class="disease-card-footer">
          <span class="severity-pill ${d.severityClass}" style="padding:3px 10px;border-radius:50px;font-size:0.73rem;font-weight:600">
            ${d.severity === 'None' ? '✅ Healthy' : '⚠️ ' + d.severity}
          </span>
          <span class="learn-more">Learn more <i class="fa fa-arrow-right"></i></span>
        </div>
      </div>
    </div>`).join('');
}

function filterDiseases(val) {
  renderDiseasesFiltered(val);
}

function filterByType(type, btn) {
  libraryFilter = type;
  document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderDiseasesFiltered(document.getElementById('diseaseSearch').value);
}

function openDiseaseModal(id) {
  const disease = DISEASES.find(d => d.id === id);
  if (!disease) return;

  document.getElementById('modalContent').innerHTML = `
    <div style="text-align:center;margin-bottom:1.5rem">
      <div style="font-size:4rem;margin-bottom:0.5rem">${disease.icon}</div>
      <h2 style="font-size:1.6rem">${disease.name}</h2>
      <span class="disease-type-badge type-${disease.type}" style="display:inline-block;margin-top:6px">${disease.type}</span>
      <span class="severity-pill ${disease.severityClass}" style="margin-left:8px;padding:4px 12px;border-radius:50px;font-size:0.78rem;font-weight:600">
        Severity: ${disease.severity}
      </span>
    </div>
    <div style="margin-bottom:1.5rem">
      <h4 style="margin-bottom:0.75rem;color:var(--primary)">📋 Overview</h4>
      <p style="color:var(--text-muted);line-height:1.7">${disease.overview}</p>
    </div>
    <div style="margin-bottom:1.5rem">
      <h4 style="margin-bottom:0.75rem;color:var(--accent)">🔎 Symptoms</h4>
      <ul style="padding-left:1.2rem;color:var(--text-muted)">
        ${(disease.symptoms||[]).map(s=>`<li style="margin-bottom:6px">${s}</li>`).join('')}
      </ul>
    </div>
    <div style="margin-bottom:1.5rem">
      <h4 style="margin-bottom:0.75rem;color:var(--secondary)">⚗️ Causes</h4>
      <ul style="padding-left:1.2rem;color:var(--text-muted)">
        ${(disease.causes||[]).map(c=>`<li style="margin-bottom:6px">${c}</li>`).join('')}
      </ul>
    </div>
    <div style="text-align:center;margin-top:1.5rem">
      <button class="btn-primary" onclick="closeModal();showSection('treatment');setTimeout(()=>loadTreatment('${disease.id}'),100)">
        <i class="fa fa-prescription-bottle-alt"></i> View Full Treatment Guide
      </button>
    </div>`;

  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

// ══════════════════════════════════════════════
//   TREATMENT SECTION
// ══════════════════════════════════════════════
function renderTreatmentSection() {
  const nav = document.getElementById('treatmentNav');
  nav.innerHTML = DISEASES.map(d => `
    <li onclick="loadTreatment('${d.id}')" id="tnav-${d.id}">
      ${d.icon} ${d.name}
    </li>`).join('');

  loadTreatment(currentTreatmentDisease || DISEASES[0].id);
}

function loadTreatment(id) {
  currentTreatmentDisease = id;
  const disease = DISEASES.find(d => d.id === id);
  if (!disease) return;

  document.querySelectorAll('#treatmentNav li').forEach(li => li.classList.remove('active'));
  const navItem = document.getElementById('tnav-' + id);
  if (navItem) navItem.classList.add('active');

  currentTreatmentTab = 'immediate';
  renderTreatmentMain(disease, 'immediate');
}

function renderTreatmentMain(disease, tab) {
  const main = document.getElementById('treatmentMain');
  const tabs = [
    { key:'immediate', label:'🚨 Immediate', icon:'fa-bolt' },
    { key:'organic',   label:'🌿 Organic',   icon:'fa-leaf' },
    { key:'chemical',  label:'⚗️ Chemical',  icon:'fa-flask' },
    { key:'prevention',label:'🛡️ Prevention', icon:'fa-shield-alt' }
  ];

  main.innerHTML = `
    <div class="treatment-header">
      <div class="treatment-icon">${disease.icon}</div>
      <div>
        <h2>${disease.name}</h2>
        <p>${disease.shortDesc}</p>
        <span class="severity-pill ${disease.severityClass}" style="padding:3px 10px;border-radius:50px;font-size:0.78rem;font-weight:600;margin-top:6px;display:inline-block">
          ${disease.severity === 'None' ? '✅ Healthy' : '⚠️ ' + disease.severity + ' Severity'}
        </span>
      </div>
    </div>

    <div class="treatment-tabs">
      ${tabs.map(t => `
        <button class="t-tab ${t.key === tab ? 'active':''}"
          onclick="switchTreatmentTab('${disease.id}','${t.key}',this)">
          ${t.label}
        </button>`).join('')}
    </div>

    <div class="t-content" id="tContent">
      ${renderTreatmentTabContent(disease, tab)}
    </div>`;
}

function switchTreatmentTab(diseaseId, tab, btn) {
  document.querySelectorAll('.t-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  currentTreatmentTab = tab;
  const disease = DISEASES.find(d => d.id === diseaseId);
  document.getElementById('tContent').innerHTML = renderTreatmentTabContent(disease, tab);
}

function renderTreatmentTabContent(disease, tab) {
  const steps = (disease.treatment || {})[tab] || [];
  if (steps.length === 0) return '<p style="color:var(--text-muted)">No specific recommendations for this category.</p>';

  if (tab === 'prevention') {
    return `
      <div class="warning-box"><i class="fa fa-info-circle"></i>
        <span>Prevention is the most cost-effective disease management strategy. Implement these practices before disease onset.</span>
      </div>` +
      steps.map((s,i) => `
        <div class="t-step">
          <div class="t-step-num">${i+1}</div>
          <div class="t-step-body"><p>${s}</p></div>
        </div>`).join('');
  }

  if (tab === 'chemical') {
    return `
      <div class="warning-box"><i class="fa fa-exclamation-triangle"></i>
        <span>Always read and follow pesticide label instructions. Use PPE (gloves, mask, goggles). Observe pre-harvest intervals.</span>
      </div>
      <div class="product-grid">` +
        steps.map(s => {
          const parts = s.split('—');
          return `<div class="product-card">
            <h5>${parts[0].trim()}</h5>
            ${parts[1] ? `<p class="dosage">📏 ${parts[1].trim()}</p>` : ''}
          </div>`;
        }).join('') +
      `</div>`;
  }

  return steps.map((s,i) => `
    <div class="t-step">
      <div class="t-step-num">${i+1}</div>
      <div class="t-step-body"><p>${s}</p></div>
    </div>`).join('');
}

// ══════════════════════════════════════════════
//   EXPERTS SECTION
// ══════════════════════════════════════════════
function renderExperts() {
  document.getElementById('expertsGrid').innerHTML = EXPERTS.map((e, i) => `
    <div class="expert-card">
      <div class="expert-avatar">${e.emoji}</div>
      ${e.available
        ? `<div class="available-badge"><div class="available-dot"></div> Available Now</div>`
        : `<div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.3rem">⏰ Response: ${e.response}</div>`
      }
      <div class="expert-name">${e.name}</div>
      <div class="expert-title">${e.title}</div>
      <div class="expert-tags">
        ${e.tags.map(t => `<span class="expert-tag">${t}</span>`).join('')}
      </div>
      <div class="expert-info">${e.bio}</div>
      <div class="expert-rating">
        <span class="stars">★★★★★</span>
        <span style="font-size:0.85rem;font-weight:600">${e.rating}</span>
        <span style="font-size:0.78rem;color:var(--text-muted)">(${e.reviews} reviews)</span>
      </div>
      <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:1rem">
        <i class="fa fa-university" style="color:var(--secondary)"></i> ${e.institution}
        &nbsp;&nbsp;
        <i class="fa fa-clock" style="color:var(--accent)"></i> ${e.experience} exp.
      </div>
      <div class="expert-contact-btns">
        <button class="btn-consult-expert" onclick="prefillExpert('${e.name} – ${e.title}')">
          <i class="fa fa-paper-plane"></i> Consult
        </button>
        <button class="btn-expert-msg" onclick="alert('Message feature coming soon! Email: ${e.email}')">
          <i class="fa fa-envelope"></i>
        </button>
      </div>
    </div>`).join('');
}

function prefillExpert(name) {
  document.getElementById('consultForm').style.display = 'block';
  document.getElementById('cExpert').value = '';
  // Find matching option
  const opts = document.getElementById('cExpert').options;
  for (let o of opts) {
    if (o.text.includes(name.split(' – ')[0].replace('Dr. ',''))) {
      o.selected = true; break;
    }
  }
  document.getElementById('consultForm').scrollIntoView({ behavior:'smooth' });
}

function toggleConsultForm() {
  const form = document.getElementById('consultForm');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
  if (form.style.display === 'block') form.scrollIntoView({ behavior:'smooth' });
}

function submitConsultation() {
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const disease = document.getElementById('cDisease').value.trim();
  const desc = document.getElementById('cDesc').value.trim();
  const expert = document.getElementById('cExpert').value;

  if (!name || !email || !disease || !desc || !expert) {
    alert('Please fill in all required fields (*)');
    return;
  }
  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  document.getElementById('consultForm').style.display = 'none';
  document.getElementById('consultSuccess').style.display = 'flex';
}

function closeSuccess() {
  document.getElementById('consultSuccess').style.display = 'none';
  // Clear form
  ['cName','cEmail','cPhone','cDisease','cDesc'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

// ══════════════════════════════════════════════
//   INIT
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
  // Close modal on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});

