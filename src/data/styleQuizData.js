// Data derived from style-quiz-concept.md and onboarding-quiz-concept.md

// Drop image files into public/mood-images/<styleKey>/1.jpg ... 4.jpg and they'll
// appear automatically — this just builds the expected file paths per style.
function moodImages(key) {
  return [1, 2, 3, 4].map((n) => `/mood-images/${key}/${n}.jpg`)
}

// Real photos sourced from Unsplash (free license), for styles that already have a full set.
function unsplash(id) {
  return `https://images.unsplash.com/${id}?q=80&w=600&auto=format&fit=crop`
}

export const archetypes = {
  minimal: {
    key: 'minimal',
    name: 'Minimal',
    definition: 'ตัดทุกอย่างที่ไม่จำเป็นออก เหลือแค่สิ่งที่ดีที่สุด',
    colorDots: ['⬜', '⬛', '🩶'],
    bg: '#F5F4F2',
    text: '#1A1A1A',
    tagline: 'น้อยชิ้น เลือกมาดี คือหรูหราที่แท้จริง',
    mood: [
      ['🪵',  'โต๊ะไม้สีอ่อน'],
      ['🥛',  'แก้วน้ำใส'],
      ['📚',  'หนังสือ 2 เล่ม'],
      ['🤍',  'ผ้า linen ขาว'],
    ],
    images: [
      unsplash('photo-1519219788971-8d9797e0928e'),
      unsplash('photo-1614887065001-06c958a7cddd'),
      unsplash('photo-1529590003495-b2646e2718bf'),
      unsplash('photo-1604147706283-d7119b5b822c'),
    ],
  },
  streetwear: {
    key: 'streetwear',
    name: 'Streetwear',
    definition: 'Energy จากถนน culture จากดนตรีและกีฬา',
    colorDots: ['🟫', '⬛', '🟡'],
    bg: '#1A1A1A',
    text: '#FFFFFF',
    tagline: 'Style เกิดจากถนน ไม่ใช่ห้างสรรพสินค้า',
    mood: [
      ['👟', 'sneaker ด้านข้าง'],
      ['📐', 'เส้นกราฟิก'],
      ['🧱', 'urban texture'],
      ['🧥', 'hoodie พับ'],
    ],
    images: [
      unsplash('photo-1542291026-7eec264c27ff'),
      unsplash('photo-1604716053460-3f66248bf8de'),
      unsplash('photo-1521459467264-802e2ef3141f'),
      unsplash('photo-1620799140188-3b2a02fd9a77'),
    ],
  },
  oldMoney: {
    key: 'oldMoney',
    name: 'Old Money',
    definition: 'Quiet luxury สิ่งดีๆ ไม่จำเป็นต้องตะโกน',
    colorDots: ['🟤', '🟢', '⬜'],
    bg: '#EDE8DF',
    text: '#1A1A1A',
    tagline: 'สิ่งที่ดีไม่จำเป็นต้องตะโกน',
    mood: [
      ['📓', 'สมุดหนัง'],
      ['⌚', 'นาฬิกา analog'],
      ['🧵', 'ผ้าสีครีม'],
      ['🌳', 'รั้วสวน'],
    ],
    images: moodImages('oldMoney'),
  },
  koreanCasual: {
    key: 'koreanCasual',
    name: 'Korean Casual',
    definition: 'Effortless แต่ประณีต layering เป็นเรื่องปกติ',
    colorDots: ['🩶', '⬜', '🌸'],
    bg: '#F2F0F5',
    text: '#1A1A1A',
    tagline: 'Effortless ไม่ใช่บังเอิญ แต่ฝึกมาแล้ว',
    mood: [
      ['☕', 'กาแฟ'],
      ['🌿', 'plant เล็ก'],
      ['🎀', 'ผ้า pastel'],
      ['🌇', 'afternoon light'],
    ],
    images: moodImages('koreanCasual'),
  },
  smartCasual: {
    key: 'smartCasual',
    name: 'Smart Casual',
    definition: 'อยู่ระหว่างทางการกับสบาย เข้าได้ทุกที่',
    colorDots: ['💙', '⬜', '🩵'],
    bg: '#EEF2F7',
    text: '#1A1A1A',
    tagline: 'เข้าได้ทุกที่ เพราะรู้ว่าตัวเองเป็นใคร',
    mood: [
      ['💻', 'laptop เปิด'],
      ['💼', 'กระเป๋า leather'],
      ['🏙️', 'เมืองผ่านกระจก'],
      ['🪟', 'แสงยามเช้า'],
    ],
    images: moodImages('smartCasual'),
  },
  vintage: {
    key: 'vintage',
    name: 'Vintage',
    definition: 'ยืมความงามจากอดีต ใส่ในบริบทปัจจุบัน',
    colorDots: ['🟧', '🟤', '🟡'],
    bg: '#F5EDE0',
    text: '#1A1A1A',
    tagline: 'ยืมความงามจากอดีต ใส่ในบริบทของตัวเอง',
    mood: [
      ['💿', 'วินิล'],
      ['📷', 'กล้องฟิล์ม'],
      ['🧶', 'fabric pattern เก่า'],
      ['🕯️', 'แสงอุ่น'],
    ],
    images: moodImages('vintage'),
  },
}

const emojiToHex = {
  '⬜': '#FFFFFF',
  '⬛': '#1A1A1A',
  '🩶': '#B5B2AC',
  '🟫': '#8B5E34',
  '🟡': '#D4AF37',
  '🟢': '#4B6A4B',
  '🌸': '#F3C6D3',
  '💙': '#5B7FBB',
  '🩵': '#A9D6E5',
  '🟧': '#D97B3F',
  '🟤': '#6B4A34',
}

export function dotsToHex(dots) {
  return dots.map((d) => emojiToHex[d] || '#CCCCCC')
}

// helper: first style listed in an option = +2, remaining listed = +1 (per doc's Q1 example)
function s(...styles) {
  const scores = {}
  styles.forEach((key, i) => {
    scores[key] = i === 0 ? 2 : 1
  })
  return scores
}

export const questions = [
  {
    dimension: 'Energy / Vibe',
    prompt: 'เวลาเดินเข้าห้อง คุณอยากให้คนรู้สึกยังไงกับคุณ?',
    options: [
      { text: 'ไม่ต้องรู้สึกอะไรพิเศษ — คุณแค่อยู่ตรงนั้น', scores: s('minimal', 'oldMoney') },
      { text: 'อยากให้คนสังเกตเห็นแต่ไม่รู้ว่าทำไม', scores: s('koreanCasual', 'smartCasual') },
      { text: 'อยากให้คนรู้สึก energy ของคุณก่อนเดินเข้ามา', scores: s('streetwear') },
      { text: 'อยากให้คนสงสัยว่าเสื้อมาจากไหน', scores: s('vintage') },
    ],
  },
  {
    dimension: 'Color Comfort Zone',
    prompt: 'Palette ที่คุณหยิบมาใส่โดยไม่คิดคือ?',
    options: [
      { text: 'ขาว เทา ดำ น้ำตาล — สีที่ mix กับทุกอย่างได้', scores: s('minimal', 'oldMoney') },
      { text: 'ขาว ครีม ชมพูอ่อน น้ำเงินซีด — pastel territory', scores: s('koreanCasual') },
      { text: 'ดำ เทาเข้ม กรมท่า พร้อม pop 1 สี', scores: s('streetwear', 'smartCasual') },
      { text: 'สีที่มีประวัติศาสตร์ — mustard terracotta olive', scores: s('vintage') },
    ],
  },
  {
    dimension: 'Fit Philosophy',
    prompt: "ทรงเสื้อผ้าที่คุณรู้สึก 'ใช่' มากที่สุดคือ?",
    options: [
      { text: 'Tailored — ทรงชัด ทุกอย่างอยู่ที่มันควรอยู่', scores: s('minimal', 'oldMoney', 'smartCasual') },
      { text: 'Oversized ทับ Fitted — เล่น proportion', scores: s('streetwear', 'koreanCasual') },
      { text: 'Relaxed แต่ไม่หลวม — comfortable first', scores: s('koreanCasual', 'smartCasual') },
      { text: 'อะไรก็ได้ถ้า texture หรือ pattern มันน่าสนใจ', scores: s('vintage') },
    ],
  },
  {
    dimension: 'Brand Relationship',
    prompt: 'คุณรู้สึกยังไงกับ logo และ branding บนเสื้อผ้า?',
    options: [
      { text: 'ไม่อยากให้มี ยิ่งเงียบยิ่งดี', scores: { minimal: 2, oldMoney: 2 } },
      { text: 'โอเคถ้าเป็น subtle logo เล็กๆ', scores: s('smartCasual', 'koreanCasual') },
      { text: 'Logo และ graphic คือส่วนหนึ่งของ look', scores: s('streetwear') },
      { text: 'ไม่สน brand — สนแค่ว่าของชิ้นนั้นมีเรื่องราวไหม', scores: s('vintage') },
    ],
  },
  {
    dimension: 'Getting Ready',
    prompt: 'เวลาแต่งตัว process ของคุณเป็นยังไง?',
    options: [
      { text: 'รวดเร็ว — หยิบ 3 ชิ้น ออกไปได้เลย', scores: s('minimal') },
      { text: 'ใช้เวลา layering และทดลอง combination', scores: s('koreanCasual', 'vintage') },
      { text: 'วางแผนล่วงหน้า รู้ว่าจะใส่อะไรตั้งแต่เมื่อคืน', scores: s('oldMoney', 'smartCasual') },
      { text: 'อยู่กับ vibe ของวัน — spontaneous', scores: s('streetwear') },
    ],
  },
  {
    dimension: 'Occasion Flexibility',
    prompt: 'ถ้าต้องเลือกชุดชุดเดียวไปงาน 3 อย่างในวันเดียว (กาแฟเช้า / ประชุม / dinner) คุณจะ?',
    options: [
      { text: 'เลือกชุด neutral ที่ดูดีในทุก context', scores: s('minimal', 'smartCasual') },
      { text: 'เพิ่ม accessory และ layer ระหว่างวัน', scores: s('koreanCasual') },
      { text: 'ยึด style ตัวเองไว้ ปล่อยให้คนอื่น adapt', scores: s('streetwear', 'vintage') },
      { text: 'เลือก classic piece ที่ทำให้ดูน่าเชื่อถือทุกที่', scores: s('oldMoney') },
    ],
  },
  {
    dimension: 'Material & Texture',
    prompt: 'เวลาเลือกเสื้อผ้า มือคุณสัมผัสผ้าก่อนเสมอ — คุณชอบ?',
    options: [
      { text: 'ผ้าที่น้ำหนักเบา smooth ไหล — ดูแลง่าย', scores: s('minimal', 'koreanCasual') },
      { text: 'Cotton หนา fleece canvas — durable และ honest', scores: s('streetwear') },
      { text: 'Wool cashmere linen — natural และมีอายุดีขึ้น', scores: s('oldMoney') },
      { text: 'ผ้าที่มีเรื่องราว — tweed denim เก่า ผ้าทอ', scores: s('vintage') },
    ],
  },
  {
    dimension: 'Reference World',
    prompt: 'สิ่งที่ inspire การแต่งตัวคุณมากที่สุดคือ?',
    options: [
      { text: 'สถาปัตยกรรม การออกแบบ art direction', scores: s('minimal') },
      { text: 'ดนตรี ศิลปิน culture ที่คุณชอบ', scores: s('streetwear') },
      { text: 'คนที่แต่งตัวดีในหนังเก่า series period drama', scores: s('oldMoney', 'vintage') },
      { text: 'GRWM / street snap / everyday fashion content', scores: s('koreanCasual', 'smartCasual') },
    ],
  },
  {
    dimension: 'Wardrobe Size Philosophy',
    prompt: 'Wardrobe ในฝันของคุณคือ?',
    options: [
      { text: '30 ชิ้น แต่ทุกชิ้นสมบูรณ์แบบ — capsule wardrobe', scores: s('minimal', 'oldMoney') },
      { text: 'เต็มไปด้วยชิ้นที่หาไม่ได้ที่อื่น — curated chaos', scores: s('vintage', 'streetwear') },
      { text: 'Mix ระหว่าง basic และ statement piece', scores: s('koreanCasual', 'smartCasual') },
      { text: 'ไม่สน size สน vibe — ถ้าชอบก็เอา', scores: s('streetwear', 'vintage') },
    ],
  },
  {
    dimension: 'Self-expression',
    prompt: 'สำหรับคุณ การแต่งตัวคือ?',
    options: [
      { text: 'Armor — ช่วยให้รู้สึก ready และมั่นใจ', scores: s('minimal', 'smartCasual') },
      { text: 'Art — expression ที่เปลี่ยนได้ทุกวัน', scores: s('vintage', 'koreanCasual') },
      { text: 'Identity — บอกว่าฉันเป็นส่วนหนึ่งของ culture นี้', scores: s('streetwear') },
      { text: 'Habit — ทำจนชินแล้วก็ไม่ค่อยคิดเรื่องนี้', scores: s('oldMoney') },
    ],
  },
]

// key = two archetype keys sorted alphabetically, joined with "_"
export const hybridLabels = {
  minimal_oldMoney: 'Quiet Luxury',
  koreanCasual_minimal: 'Clean Seoul',
  streetwear_vintage: 'Archive Culture',
  oldMoney_smartCasual: 'Dressed Down Classic',
  koreanCasual_vintage: 'Thrift & Tender',
  minimal_smartCasual: 'Understated Pro',
  koreanCasual_streetwear: 'Seoul Street',
  oldMoney_vintage: 'Heirloom',
}

// Flavor insight shown on retake when the primary style shifts between two
// specific archetypes (per onboarding-quiz-concept.md's Retake + Evolution section).
export const evolutionInsights = {
  oldMoney_minimal: 'คุณกำลังเงียบลง และมั่นใจขึ้น',
}

export const analyzingQuotes = [
  'style ที่ดีที่สุดคือ style ที่ทำให้คุณเป็นตัวเอง',
  'ไม่มีคำตอบผิดถูก มีแค่คุณที่ตอนนี้เป็นแบบนี้',
  'quiz นี้คือกระจก ไม่ใช่คำสั่ง',
]
