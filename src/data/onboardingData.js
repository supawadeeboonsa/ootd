// Data derived from onboarding-quiz-concept.md

export const mascotColor = '#E8D5C4'

export const genders = [
  { key: 'male', label: 'ผู้ชาย' },
  { key: 'female', label: 'ผู้หญิง' },
  { key: 'other', label: 'ไม่ระบุ / อื่นๆ' },
]

export const bodyShapesByGender = {
  male: [
    {
      key: 'slim',
      label: 'Slim / Lean',
      description: 'ผอมบาง ไหล่แคบ',
      icon: '🧍',
      doItems: ['Oversized หรือ layered fits เพื่อเพิ่ม volume', 'เสื้อผ้าที่มี texture หรือลายเพื่อเพิ่มมิติ', 'กางเกงทรง straight หรือ wide-leg'],
      dontItems: ['Skinny fit ทุกชิ้นพร้อมกัน', 'ผ้าเนื้อบางเรียบเกินไปทั้งชุด'],
    },
    {
      key: 'athletic',
      label: 'Athletic',
      description: 'กล้ามเนื้อ ไหล่กว้าง เอวคอด',
      icon: '🏋️',
      doItems: ['เสื้อ tailored ที่ตัดตรงไหล่พอดี', 'V-neck หรือ crew neck ที่ไม่รัดแขน', 'กางเกง straight เพื่อ balance สัดส่วนบน'],
      dontItems: ['เสื้อรัดรูปจนเน้นกล้ามเกินไป', 'ไหล่เสื้อที่เล็กกว่าตัว'],
    },
    {
      key: 'average',
      label: 'Average',
      description: 'สัดส่วนปกติ ไม่ผอมไม่อ้วน',
      icon: '🧍',
      doItems: ['เกือบทุกทรงใส่ได้ — เน้นที่ fit สะอาด', 'Layering เพื่อสร้าง silhouette ที่ชัดเจน'],
      dontItems: ['เสื้อผ้าหลวมเกินจนดูไม่มีทรง'],
    },
    {
      key: 'big',
      label: 'Big / Heavyset',
      description: 'รูปร่างใหญ่ อกกว้าง',
      icon: '🧍',
      doItems: ['เสื้อ structured ที่มีไหล่ชัดเจน', 'สีเข้มโทนเดียวเพื่อดูเรียว', 'กางเกงทรง straight ไม่รัด'],
      dontItems: ['ลายใหญ่หรือลายขวางบริเวณลำตัว', 'เสื้อผ้าหลวมจนไม่มีโครงสร้าง'],
    },
  ],
  female: [
    {
      key: 'hourglass',
      label: 'Hourglass',
      description: 'อกและสะโพกกว้าง เอวคอด',
      icon: '👗',
      doItems: ['Fitted ที่เน้นเอว', 'High-waist bottoms', 'Wrap dress หรือ belt เพื่อเน้นสัดส่วน'],
      dontItems: ['เสื้อผ้าทรงกล่องที่ซ่อนเอว', 'Low-waist ที่ตัดสัดส่วนกลางลำตัว'],
    },
    {
      key: 'pear',
      label: 'Pear / Triangle',
      description: 'สะโพกกว้างกว่าไหล่',
      icon: '👗',
      doItems: ['High-waist wide-leg pants เพื่อ balance สะโพก', 'Structured shoulder top เพิ่มไหล่', 'Monochrome look เพื่อให้ดูยาว'],
      dontItems: ['Low-waist jeans', 'ลายหรือ pattern หนาบริเวณสะโพก'],
    },
    {
      key: 'apple',
      label: 'Apple / Oval',
      description: 'อกและท้องกว้าง สะโพกแคบ',
      icon: '👗',
      doItems: ['Empire waist หรือทรง flowy', 'V-neck เพื่อดึงสายตาขึ้น', 'กางเกงหรือกระโปรง A-line'],
      dontItems: ['เสื้อรัดรูปเน้นกลางลำตัว', 'Belt ที่รัดเอวแน่นเกินไป'],
    },
    {
      key: 'rectangle',
      label: 'Rectangle',
      description: 'ไหล่-เอว-สะโพกใกล้เคียงกัน',
      icon: '👗',
      doItems: ['Layer เพื่อสร้างมิติ', 'Belt เพื่อเพิ่ม curve', 'เสื้อผ้าที่มี peplum หรือ ruffle เล็กน้อย'],
      dontItems: ['ทรง straight ตรงตลอดตัวโดยไม่มี layer'],
    },
    {
      key: 'petite',
      label: 'Petite',
      description: 'ตัวเล็ก สัดส่วนกะทัดรัด',
      icon: '👗',
      doItems: ['Cropped tops และ high-waist bottoms', 'ทรงที่พอดีตัว ไม่ยาวเกิน proportion', 'Monochrome เพื่อให้ดูสูงขึ้น'],
      dontItems: ['เสื้อผ้าโอเวอร์ไซส์ที่กลืนสัดส่วนตัว', 'กางเกงขายาวที่ลากพื้น'],
    },
  ],
  other: [
    {
      key: 'slimNeutral',
      label: 'Slim',
      description: 'โครงร่างเพรียวบาง',
      icon: '🧍',
      doItems: ['Layering เพื่อเพิ่ม volume', 'เสื้อผ้าที่มี texture ชัดเจน'],
      dontItems: ['ผ้าบางเรียบทั้งชุด'],
    },
    {
      key: 'medium',
      label: 'Medium',
      description: 'สัดส่วนสมดุล',
      icon: '🧍',
      doItems: ['เกือบทุกทรงใส่ได้ — เน้น fit สะอาด', 'Layering สร้าง silhouette ชัดเจน'],
      dontItems: ['เสื้อผ้าหลวมจนไม่มีทรง'],
    },
    {
      key: 'broad',
      label: 'Broad',
      description: 'โครงร่างกว้าง',
      icon: '🧍',
      doItems: ['เสื้อ structured ไหล่ชัดเจน', 'โทนสีเดียวเพื่อดูเรียว'],
      dontItems: ['ลายใหญ่หรือลายขวางบริเวณลำตัว'],
    },
    {
      key: 'plus',
      label: 'Plus',
      description: 'รูปร่างใหญ่',
      icon: '🧍',
      doItems: ['เสื้อผ้าที่มีโครงสร้างชัดเจน', 'สีเข้มโทนเดียวกันทั้งชุด'],
      dontItems: ['เสื้อผ้าหลวมจนไม่มีโครงสร้าง', 'ลายใหญ่เต็มตัว'],
    },
  ],
}
