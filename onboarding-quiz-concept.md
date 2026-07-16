# OOTD — Onboarding + Style Quiz
*Design Concept ฉบับเต็ม — อ้างอิง The Money Things*

---

## สิ่งที่เห็นจาก TMT แล้วนำมาใช้

| TMT Pattern | นำมาใช้ใน OOTD |
|---|---|
| Mascot วงกลมสีฟ้า + หน้ายิ้ม | Mascot วงกลมสีครีม/nude + หน้ายิ้ม — ชื่อ **"Style"** |
| "สวัสดี เราชื่อ Mony" | "สวัสดี เราชื่อ **Style** — จะช่วยหาตัวตนของคุณ" |
| Progress bar แนวนอน (dash) | Progress bar เดิม — dash 10 อัน |
| Option card ขาว rounded full-width | เหมือนกันทุกอย่าง |
| Illustration ตัวละคร บน pastel blue card | Illustration silhouette รูปร่างบน pastel card |
| พื้นหลัง warm gray `#EEECEA` | ใช้เดิม |
| Auto-advance หลัง tap | ใช้เดิม |

---

## Mascot — "Style"

```
  ╭───╮
 │ ˘‿˘ │   ← วงกลม สี #E8D5C4 (nude/warm)
  ╰───╯       ไม่ใช่ฟ้า เพราะ fashion = warm tone

ชื่อ: Style
บุคลิก: เพื่อนที่แต่งตัวดี ไม่ judge ไม่ขาย
```

---

## Flow ทั้งหมด

```
┌─────────────────────────────────────────────────────┐
│  STEP 1   ทักทาย + ถามชื่อ                          │
│  STEP 2   ถามเพศ                                    │
│  STEP 3   ถามรูปร่าง (เปลี่ยนตาม STEP 2)           │
│  ─────────────────────────────────────              │
│  STEP 4–13   Style Quiz 10 ข้อ                      │
│  ─────────────────────────────────────              │
│  STEP 14  Analyzing... (transition)                 │
│  STEP 15  ผลลัพธ์ + บันทึกการ์ด                    │
└─────────────────────────────────────────────────────┘
```

Progress bar แสดงตั้งแต่ STEP 2 เป็นต้นไป (13 dash = 3 onboarding + 10 quiz)

---

## STEP 1 — ทักทาย

```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│              ╭───╮                      │
│             │ ˘‿˘ │                     │  ← Mascot "Style" สี nude
│              ╰───╯                      │
│                                         │
│      สวัสดี เราชื่อ Style               │  ← H2 bold, centered
│   อยากให้เรียกชื่อคุณว่าอะไรดี ?        │  ← body muted
│                                         │
│   ┌─────────────────────────────────┐  │
│   │         ชื่อของคุณ              │  │  ← input, border nude active
│   └─────────────────────────────────┘  │
│                                         │
│         [  ถัดไป  ]                     │  ← primary btn ดำ
│                                         │
└─────────────────────────────────────────┘
```

**Input spec:**
- Border default: `#E0DDD9`
- Border active (focus): `#C9A97A` (warm gold)
- Placeholder: "ชื่อของคุณ" สี muted
- ปุ่ม enable หลังพิมพ์อักษรแรก

---

## STEP 2 — เพศ

```
┌─────────────────────────────────────────┐
│  ─── ─── ─── ─── ...  (progress bar)   │
│                                         │
│              ╭───╮                      │
│             │ ˘‿˘ │                     │
│              ╰───╯                      │
│                                         │
│     คุณ[ชื่อ] เป็นผู้ชายหรือผู้หญิง ?  │
│    (เพื่อแนะนำรูปร่างให้ตรงกว่านี้)     │  ← muted xs
│                                         │
│   ┌─────────────────────────────────┐  │
│   │           ผู้ชาย               │  │
│   └─────────────────────────────────┘  │
│   ┌─────────────────────────────────┐  │
│   │           ผู้หญิง              │  │
│   └─────────────────────────────────┘  │
│   ┌─────────────────────────────────┐  │
│   │        ไม่ระบุ / อื่นๆ         │  │
│   └─────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

**Auto-advance** — tap แล้วไป STEP 3 ทันที (ไม่ต้องกดถัดไป)

---

## STEP 3A — รูปร่าง (ผู้ชาย)

```
┌─────────────────────────────────────────┐
│  ─── ─── ─── ─── ...                   │
│                                         │
│              ╭───╮                      │
│             │ ˘‿˘ │                     │
│              ╰───╯                      │
│                                         │
│    รูปร่างของคุณใกล้เคียงแบบไหน ?      │
│     เลือกที่ตรงที่สุด ไม่มีผิดถูก      │  ← muted
│                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
│  │ [ภาพ]│ │ [ภาพ]│ │ [ภาพ]│ │ [ภาพ]│  │  ← 2×2 grid card
│  │      │ │      │ │      │ │      │  │
│  │ Slim │ │Athlet│ │Average│ │ Big  │  │
│  └──────┘ └──────┘ └──────┘ └──────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### รูปร่างผู้ชาย 4 แบบ

| ชื่อ | คำอธิบายสั้น | Illustration |
|---|---|---|
| **Slim / Lean** | ผอมบาง ไหล่แคบ | Silhouette ตรงยาว |
| **Athletic** | กล้ามเนื้อ ไหล่กว้าง เอวคอด | V-shape |
| **Average** | สัดส่วนปกติ ไม่ผอมไม่อ้วน | สมมาตร |
| **Big / Heavyset** | รูปร่างใหญ่ อกกว้าง | กว้างกว่า |

---

## STEP 3B — รูปร่าง (ผู้หญิง)

```
┌─────────────────────────────────────────┐
│  ─── ─── ─── ─── ...                   │
│                                         │
│              ╭───╮                      │
│             │ ˘‿˘ │                     │
│              ╰───╯                      │
│                                         │
│    รูปร่างของคุณใกล้เคียงแบบไหน ?      │
│                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐            │
│  │ [ภาพ]│ │ [ภาพ]│ │ [ภาพ]│            │
│  │Hourgls│ │ Pear │ │Apple │            │
│  └──────┘ └──────┘ └──────┘            │
│  ┌──────┐ ┌──────┐                     │
│  │ [ภาพ]│ │ [ภาพ]│                     │
│  │Rect. │ │Petite│                     │
│  └──────┘ └──────┘                     │
│                                         │
└─────────────────────────────────────────┘
```

### รูปร่างผู้หญิง 5 แบบ

| ชื่อ | ลักษณะ | Fit Hint |
|---|---|---|
| **Hourglass** | อกและสะโพกกว้าง เอวคอด | Fitted เน้นเอว |
| **Pear / Triangle** | สะโพกกว้างกว่าไหล่ | A-line, wide-leg |
| **Apple / Oval** | อกและท้องกว้าง สะโพกแคบ | Empire waist, flowy |
| **Rectangle** | ไหล่-เอว-สะโพกใกล้เคียงกัน | Layer, belt เพิ่ม curve |
| **Petite** | ตัวเล็ก สัดส่วนกะทัดรัด | Cropped, high-waist |

### STEP 3C — ผู้ไม่ระบุเพศ
ใช้ชุดคำถามรูปร่างแบบ neutral: Slim / Medium / Broad / Plus — ไม่ใช้ชื่อ gender-specific

---

## Illustration Style — Card รูปร่าง

อ้างอิงจาก TMT ที่ใช้ line illustration บน pastel card:

```
พื้น card   : #EAE4DC  (warm sand) แทน pastel blue ของ TMT
Silhouette  : line drawing บางๆ สีเดียวกับพื้นแต่เข้มกว่า
ไม่มีหน้า  : เป็น faceless figure — ทุกคนเป็นตัวแทนได้
ขนาด card  : เท่ากัน, 2 คอลัมน์, square
```

---

## STEP 4–13 — Style Quiz (10 ข้อ)

Progress bar เพิ่มขึ้นทุกข้อ — dash ที่ active = ดำ, ที่เหลือ = gray

### Question Screen Layout

```
┌─────────────────────────────────────────┐
│  ← │ ● ● ● ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │ →  │  ← progress dash
│                                         │
│              ╭───╮                      │
│             │ ˘‿˘ │                     │
│              ╰───╯                      │
│                                         │
│         ข้อ 4 จาก 10                    │  ← muted xs
│                                         │
│     เวลาเดินเข้าห้อง คุณอยาก           │  ← H2 bold centered
│     ให้คนรู้สึกยังไงกับคุณ?            │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │  ไม่ต้องรู้สึกอะไร — แค่อยู่ตรงนั้น│  │
│   └─────────────────────────────────┘  │
│   ┌─────────────────────────────────┐  │
│   │  อยากให้สังเกตแต่ไม่รู้ว่าทำไม  │  │
│   └─────────────────────────────────┘  │
│   ┌─────────────────────────────────┐  │
│   │  อยากให้รู้สึก energy ก่อนเดินเข้า│  │
│   └─────────────────────────────────┘  │
│   ┌─────────────────────────────────┐  │
│   │  อยากให้สงสัยว่าเสื้อมาจากไหน  │  │
│   └─────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

**Option card state:**
- Default: พื้นขาว, border `#E0DDD9`, text `#1A1A1A`
- Selected: พื้น `#1A1A1A`, text ขาว, border ดำ
- Auto-advance: 300ms หลัง tap

---

### 10 คำถาม (พร้อม Weight)

**Q1 — Energy**
"เวลาเดินเข้าห้อง คุณอยากให้คนรู้สึกยังไงกับคุณ?"
```
A  ไม่ต้องรู้สึกอะไรพิเศษ — แค่อยู่ตรงนั้น     → MIN+2, OLD+1
B  สังเกตเห็นแต่ไม่รู้ว่าทำไม                  → KOR+2, SMA+1
C  รู้สึก energy ก่อนเดินเข้ามา                → STR+2
D  สงสัยว่าเสื้อมาจากไหน                       → VIN+2
```

**Q2 — Color**
"Palette ที่หยิบมาใส่โดยไม่คิดคือ?"
```
A  ขาว เทา ดำ น้ำตาล                           → MIN+2, OLD+1
B  ขาว ครีม ชมพูอ่อน น้ำเงินซีด               → KOR+2
C  ดำเทาเข้มพร้อม pop 1 สี                     → STR+2, SMA+1
D  mustard terracotta olive — สีมีประวัติ       → VIN+2
```

**Q3 — Fit**
"ทรงเสื้อผ้าที่รู้สึก 'ใช่' มากที่สุด?"
```
A  Tailored — ทรงชัด ทุกอย่างอยู่ที่มันควรอยู่  → MIN+2, OLD+1, SMA+1
B  Oversized ทับ Fitted — เล่น proportion        → STR+2, KOR+1
C  Relaxed แต่ไม่หลวม — comfortable first        → KOR+2, SMA+1
D  อะไรก็ได้ถ้า texture น่าสนใจ                  → VIN+2
```

**Q4 — Brand**
"คุณรู้สึกยังไงกับ logo บนเสื้อ?"
```
A  ไม่อยากให้มี ยิ่งเงียบยิ่งดี                 → MIN+2, OLD+2
B  โอเคถ้าเป็น subtle logo เล็กๆ               → SMA+2, KOR+1
C  Logo คือส่วนหนึ่งของ look                    → STR+2
D  ไม่สน brand — สนว่ามีเรื่องราวไหม            → VIN+2
```

**Q5 — Getting Ready**
"เวลาแต่งตัว process ของคุณเป็นยังไง?"
```
A  รวดเร็ว — หยิบ 3 ชิ้น ออกไปได้เลย            → MIN+2
B  ใช้เวลา layering และทดลอง combination         → KOR+2, VIN+1
C  วางแผนล่วงหน้า รู้ตั้งแต่เมื่อคืน             → OLD+2, SMA+1
D  อยู่กับ vibe ของวัน — spontaneous              → STR+2
```

**Q6 — Occasion**
"ถ้าต้องใช้ชุดเดียวไป 3 งานในวันเดียว?"
```
A  เลือก neutral ที่ดูดีทุก context               → MIN+2, SMA+1
B  เพิ่ม accessory และ layer ระหว่างวัน           → KOR+2
C  ยึด style ตัวเอง ปล่อยให้คนอื่น adapt         → STR+2, VIN+1
D  เลือก classic piece ที่น่าเชื่อถือทุกที่         → OLD+2
```

**Q7 — Material**
"เวลาเลือกเสื้อ มือสัมผัสผ้าก่อน — คุณชอบ?"
```
A  เบา smooth ไหล — ดูแลง่าย                    → MIN+2, KOR+1
B  Cotton หนา fleece canvas — durable           → STR+2
C  Wool cashmere linen — natural มีอายุดีขึ้น    → OLD+2
D  ผ้าที่มีเรื่องราว — tweed denim เก่า ผ้าทอ    → VIN+2
```

**Q8 — Inspiration**
"สิ่งที่ inspire การแต่งตัวมากที่สุด?"
```
A  สถาปัตยกรรม การออกแบบ art direction          → MIN+2
B  ดนตรี ศิลปิน culture ที่ชอบ                  → STR+2
C  คนในหนังเก่า series period drama             → OLD+2, VIN+1
D  GRWM / street snap / everyday content        → KOR+2, SMA+1
```

**Q9 — Wardrobe Dream**
"Wardrobe ในฝันคือ?"
```
A  30 ชิ้น แต่ทุกชิ้นสมบูรณ์แบบ — capsule        → MIN+2, OLD+1
B  เต็มชิ้นที่หาไม่ได้ที่อื่น — curated chaos      → VIN+2, STR+1
C  Mix ระหว่าง basic กับ statement               → KOR+2, SMA+1
D  ไม่สน size สน vibe                            → STR+2
```

**Q10 — Self-expression**
"สำหรับคุณ การแต่งตัวคือ?"
```
A  Armor — ช่วยให้รู้สึก ready และมั่นใจ          → MIN+2, SMA+1
B  Art — expression ที่เปลี่ยนได้ทุกวัน            → VIN+2, KOR+1
C  Identity — บอกว่าเป็นส่วนหนึ่งของ culture นี้   → STR+2
D  Habit — ทำจนชินแล้วไม่ค่อยคิด                  → OLD+2
```

*ตัวย่อ: MIN=Minimal, STR=Streetwear, OLD=Old Money, KOR=Korean Casual, SMA=Smart Casual, VIN=Vintage*

---

## STEP 14 — Analyzing Screen

```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│              ╭───╮                      │
│             │ ˘‿˘ │   ← animate pulse  │
│              ╰───╯                      │
│                                         │
│      กำลังค้นหาตัวตนของคุณ...          │  ← fade in/out
│                                         │
│   "style ที่ดีที่สุดคือ                │
│    style ที่ทำให้คุณเป็นตัวเอง"         │  ← quote rotate ทุก 1.5s
│                                         │
│                                         │
│   ──────────────────────────           │  ← progress bar เต็ม
│                                         │
└─────────────────────────────────────────┘
```

Duration: 2.5 วิ → ไป Result

---

## STEP 15 — ผลลัพธ์

### Layout — Result Screen (เต็มหน้า scroll)

```
┌─────────────────────────────────────────┐
│                                         │
│  ╭───╮                                  │
│ │ ˘‿˘ │  [ชื่อ] นี่คือตัวตนของคุณ      │  ← top, small
│  ╰───╯                                  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │        [Mood Collage]             │  │  ← 16:9 หรือ 3:4
│  │   4 texture/object/color images   │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  MINIMAL                                │  ← H1 bold uppercase
│  with Korean Casual notes               │  ← secondary muted
│                                         │
│  "คนที่เชื่อว่าของน้อยชิ้นแต่เลือก      │  ← tagline italic
│  มาดี คือความหรูหราที่แท้จริง"          │
│                                         │
│  ─────────────────────────────         │
│                                         │
│  Style Breakdown                        │
│  ████████████  Minimal       14         │
│  █████████     Korean Casual 11         │
│  ██████        Old Money      8         │
│  ████          Smart Casual   6         │
│  ██            Vintage        3         │
│  █             Streetwear     2         │
│                                         │
│  ─────────────────────────────         │
│                                         │
│  Fit ที่เหมาะกับรูปร่างคุณ             │  ← section (ใช้ข้อมูล STEP 3)
│  ┌─────────────────────────────────┐  │
│  │ ✓ High-waist straight pants    │  │
│  │ ✓ Boxy oversized shirt         │  │
│  │ ✓ Minimal layering             │  │
│  │ ✗ Heavy print / pattern        │  │
│  └─────────────────────────────────┘  │
│                                         │
│  [บันทึกเป็นการ์ด]                      │  ← primary btn ดำ
│  [ทำแบบทดสอบใหม่]                      │  ← secondary outline
│                                         │
└─────────────────────────────────────────┘
```

---

## Style Card — บันทึกได้

### ขนาดและ Format
- Export: **1080 × 1350px** (3:4 — เหมาะ IG Story / Pinterest)
- File: PNG พื้นไม่โปร่งใส
- มุมโค้ง: 28px (preview) / ไม่มีมุมโค้ง (export เต็ม)

### Layout การ์ด

```
┌──────────────────────────────┐
│                              │
│  OOTD                  ˘‿˘  │  ← top bar, app name + mascot xs
│                              │
│  ┌────────────────────────┐  │
│  │                        │  │
│  │    [Mood Collage]      │  │  ← 4 ภาพ 2×2 grid
│  │  texture / object      │  │    ไม่มีคน ไม่มีสินค้า
│  │  color / atmosphere    │  │    เป็น curated aesthetic
│  │                        │  │
│  └────────────────────────┘  │
│                              │
│  MY STYLE IS                 │  ← label 11px uppercase muted
│                              │
│  Minimal                     │  ← H1 36px Bold
│  with Korean Casual          │  ← 16px muted
│                              │
│  ─────────────────────────   │
│                              │
│  "คนที่เชื่อว่าของน้อยชิ้น   │  ← tagline 14px italic
│  แต่เลือกมาดี                │
│  คือความหรูหราที่แท้จริง"     │
│                              │
│  Jul 2025      [ชื่อ]        │  ← วันที่ + ชื่อจาก STEP 1
│                              │
└──────────────────────────────┘
```

### พื้นหลังการ์ดตาม Style

```
Minimal        #F5F4F2   warm off-white
Streetwear     #1A1A1A   near black (text ขาว)
Old Money      #EDE8DF   warm sand
Korean Casual  #F2F0F5   lavender white
Smart Casual   #EEF2F7   cool white
Vintage        #F5EDE0   warm amber
```

---

## Mood Collage — ภาพของแต่ละ Style

ไม่ใช้รูปคน ไม่ใช้รูปสินค้า — ใช้ **atmosphere object**

| Style | ภาพที่ใช้ใน Collage |
|---|---|
| **Minimal** | ผ้า linen ขาว / โต๊ะไม้สีอ่อน / แก้วใส / หนังสือปกเรียบ |
| **Streetwear** | รองเท้า sneaker ข้าง / spray can / urban concrete / hoodie พับ |
| **Old Money** | สมุดหนัง / นาฬิกา analog / ผ้า wool / รั้วสวนอังกฤษ |
| **Korean Casual** | กาแฟลาเต้ / plant เล็ก / ผ้า pastel / แสงบ่าย soft |
| **Smart Casual** | laptop เปิด / กระเป๋า leather / เมืองผ่านกระจก / นาฬิกา slim |
| **Vintage** | วินิล / กล้องฟิล์ม / ผ้า pattern เก่า / แสงอุ่นจากหน้าต่าง |

---

## Hybrid Labels

เมื่อ Primary และ Secondary ต่างกัน < 3 คะแนน:

| Pair | Label |
|---|---|
| Minimal + Old Money | **Quiet Luxury** |
| Minimal + Korean Casual | **Clean Seoul** |
| Streetwear + Vintage | **Archive Culture** |
| Old Money + Smart Casual | **Dressed Down Classic** |
| Korean Casual + Vintage | **Thrift & Tender** |
| Smart Casual + Minimal | **Understated Pro** |
| Streetwear + Korean Casual | **Seoul Street** |
| Vintage + Old Money | **Heirloom** |

---

## Fit Guide ตาม Body Type + Style

ผลลัพธ์ section "Fit ที่เหมาะกับรูปร่างคุณ" คำนวณจาก STEP 3 × STEP 15

### ตัวอย่าง: ผู้หญิง Pear + Minimal

```
✓  High-waist wide-leg pants (balance สะโพก)
✓  Monochrome top + bottom (ดูยาว)
✓  Structured shoulder top (เพิ่มไหล่)
✗  Low-waist jeans
✗  Heavy pattern บริเวณสะโพก
```

### ตัวอย่าง: ผู้ชาย Slim + Streetwear

```
✓  Oversized hoodie / jacket (เพิ่ม volume)
✓  Layered fits (เพิ่มความกว้าง)
✓  Baggy pants + chunky sneaker
✗  Skinny fit ทุกชิ้น
✗  Horizontal stripe ที่บาง
```

---

## 4 การ์ดที่บันทึกได้

| การ์ด | เนื้อหา | ขนาด |
|---|---|---|
| **Style Card** | ผล quiz + mood image + tagline | 1080×1350 |
| **Color Palette Card** | 5 สีของ style + ชื่อสี | 1080×1080 |
| **Fit Guide Card** | Do / Don't ตาม body + style | 1080×1350 |
| **Style Quote Card** | Quote + style name บน background เรียบ | 1080×1080 |

---

## Tagline ของแต่ละ Style

| Style | Tagline |
|---|---|
| Minimal | "น้อยชิ้น เลือกมาดี คือหรูหราที่แท้จริง" |
| Streetwear | "Style เกิดจากถนน ไม่ใช่ห้างสรรพสินค้า" |
| Old Money | "สิ่งที่ดีไม่จำเป็นต้องตะโกน" |
| Korean Casual | "Effortless ไม่ใช่บังเอิญ แต่ฝึกมาแล้ว" |
| Smart Casual | "เข้าได้ทุกที่ เพราะรู้ว่าตัวเองเป็นใคร" |
| Vintage | "ยืมความงามจากอดีต ใส่ในบริบทของตัวเอง" |

---

## สิ่งที่ Quiz นี้ไม่ทำ

- ❌ ไม่แนะนำให้ซื้ออะไร
- ❌ ไม่มีลิงก์ shop / affiliate
- ❌ ไม่บอกว่า style ไหนดีกว่า
- ❌ ไม่ judge รูปร่าง — ทุก body type มี fit guide ของตัวเอง
- ❌ ไม่บังคับอยู่ใน 1 style — hybrid คือ valid

---

## Retake + Style Evolution

```
ทำครั้งแรก    → บันทึกผล + วันที่
ทำซ้ำ 90 วัน → เปรียบเทียบอัตโนมัติ

ถ้าผลเหมือนเดิม → "Style ของคุณ consistent มาก"
ถ้าผลเปลี่ยน    → "Style คุณกำลัง evolve"
                   Minimal → Old Money
                   "คุณกำลังเงียบลง และมั่นใจขึ้น"
```

---

*ออกแบบให้รู้สึกเหมือน TMT — เพื่อนที่ไม่ judge แค่ช่วยให้รู้จักตัวเองมากขึ้น*
