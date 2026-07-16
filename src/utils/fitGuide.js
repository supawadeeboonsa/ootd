// "Fit ที่เหมาะกับรูปร่างคุณ" — combines the body-shape base guide with a
// style-specific silhouette note, per onboarding-quiz-concept.md STEP 15.

const styleFitNotes = {
  minimal: { do: 'เลือกทรง tailored ที่มีเส้นสะอาด มากกว่า relaxed', dont: 'layering ที่รกเกินไป' },
  streetwear: { do: 'เพิ่ม oversized layer เพื่อสร้าง energy', dont: 'fit ที่แนบตัวทั้งชุด' },
  oldMoney: { do: 'เลือกผ้าอย่าง wool หรือ cotton ทรง tailored', dont: 'logo หรือ graphic ที่เด่นเกินไป' },
  koreanCasual: { do: 'ใช้ layering หลายชิ้นแบบ relaxed', dont: 'ทรงที่แข็งเป็นทางการเกินไป' },
  smartCasual: { do: 'เลือกทรง relaxed แต่ยังมีโครงสร้าง', dont: 'ทรงที่เป็นทางการหรือลำลองสุดโต่ง' },
  vintage: { do: 'เพิ่มชิ้นที่มี texture หรือลายที่มีเรื่องราว', dont: 'ผ้า synthetic ที่ดูใหม่เอี่ยมเกินไป' },
}

export function computeFitGuide(bodyShape, styleKey) {
  if (!bodyShape) return null
  const styleNote = styleFitNotes[styleKey]
  return {
    doItems: styleNote ? [...bodyShape.doItems, styleNote.do] : bodyShape.doItems,
    dontItems: styleNote ? [...bodyShape.dontItems, styleNote.dont] : bodyShape.dontItems,
  }
}
