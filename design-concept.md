# OOTD — Design Concept
*เว็บช่วยตัดสินใจการแต่งตัว / หา style ของตัวเอง*

---

## ทำไมถึงอ้างอิง The Money Things

| สิ่งที่ชอบใน TMT | นำมาใช้กับ OOTD อย่างไร |
|---|---|
| พื้นหลัง warm-gray (`#F5F4F2`) ที่ไม่แสบตา | ใช้เป็น base เดียวกัน — รู้สึกเหมือนกระดาษ |
| Card ขาว rounded-xl, shadow เบามาก | แต่ละ outfit / หมวดหมู่อยู่ใน card ของมัน |
| Primary button ดำเต็ม / Secondary outline | Decision CTA เช่น "ใส่ชุดนี้เลย" vs "ดูตัวเลือกอื่น" |
| Nav minimal — icon + label dropdown | Sidebar/topbar เล็ก ไม่รกสายตา |
| Typography clean sans-serif, body มี weight hierarchy ชัด | ชื่อ outfit = medium, note = light, tag = xs uppercase |

---

## สี (Color Palette)

```
Background    #F5F4F2   ── warm off-white (เหมือน TMT)
Surface       #FFFFFF   ── card, modal
Border        #E8E6E3   ── divider, input border
Text Primary  #1A1A1A   ── ชื่อ, heading
Text Muted    #888580   ── note, label, placeholder
Accent Black  #111111   ── primary button, icon circle
Accent Warm   #C9A97A   ── tag highlight, "my style" moment — เพิ่มความ premium
Error/Alert   #E05252   ── เช่น "ยังไม่ได้แต่งตัวนี้นานมากแล้ว"
```

ไม่มีสีฉูดฉาด — ใช้เฉดน้ำตาลอุ่นแทนสีน้ำเงิน/เขียวที่ดูเป็น fintech เกินไป

---

## Typography

```
Font family   Inter (หรือ Noto Sans Thai สำหรับข้อความไทย)

H1 / Brand    28px  SemiBold   letter-spacing: -0.5px
H2 / Section  20px  Medium
Body          15px  Regular    line-height: 1.6
Label / Tag   12px  Medium     UPPERCASE, letter-spacing: 0.8px
Micro / Note  13px  Light      color: Text Muted
```

---

## Layout — 3 โหมดหลัก

### 1. หน้า Dashboard — "วันนี้จะใส่อะไร?"

```
┌─────────────────────────────────────────────┐
│  OOTD                              [profile] │  ← Topbar เหมือน TMT
├─────────────┬───────────────────────────────┤
│             │                               │
│  Sidebar    │   Hero Card (ศูนย์กลาง)       │
│  ─────────  │                               │
│  Today      │   ┌───────────────────────┐  │
│  Wardrobe   │   │  วันนี้ อากาศ 33°C    │  │
│  My Style   │   │  ☁ มีฝนตอนเย็น       │  │
│  Insights   │   │                       │  │
│             │   │  [ใส่ชุด Casual]      │  │  ← primary btn ดำ
│             │   │  [ให้ Claude แนะนำ]   │  │  ← secondary outline
│             │   └───────────────────────┘  │
│             │                               │
│             │   ── แนะนำวันนี้ ──           │
│             │   [Card] [Card] [Card]        │  ← horizontal scroll
└─────────────┴───────────────────────────────┘
```

### 2. หน้า Wardrobe — "ตู้เสื้อผ้าของฉัน"

Grid 3 คอลัมน์ของ card แต่ละชิ้น:

```
┌──────────┐  ┌──────────┐  ┌──────────┐
│  [รูป]   │  │  [รูป]   │  │  [รูป]   │
│          │  │          │  │          │
│ เสื้อขาว │  │ กางเกง   │  │ รองเท้า  │
│ Casual   │  │ Straight │  │ Loafer   │
│ ใส่ 3×  │  │ ใส่ 1×  │  │ ใส่ 12× │
└──────────┘  └──────────┘  └──────────┘
```

Filter bar ด้านบน: `ทั้งหมด` `เสื้อ` `กางเกง` `รองเท้า` `Accessories` `ไม่ค่อยได้ใส่`

### 3. หน้า My Style — "Style ของฉันคืออะไร?"

หน้าที่ unique ที่สุด — ให้ความรู้สึก editorial magazine:

```
┌──────────────────────────────────────────────┐
│                                              │
│   Style Identity                             │
│   ─────────────────────────────────          │
│   คุณใส่ชุดแบบนี้บ่อยที่สุด               │
│                                              │
│   ████ Minimal    68%                        │
│   ███  Casual     22%                        │
│   █    Smart      10%                        │
│                                              │
│   ── Color Palette ของคุณ ──                │
│   ⬛ ⬜ 🟫 🩶  ← สีที่ใส่บ่อยจริงๆ          │
│                                              │
│   ── Outfit ที่ดีที่สุดของคุณ ──           │
│   [3 card พร้อมรูป]                         │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Components

### Card — Outfit

```
┌─────────────────────────┐
│  [รูป 16:9 หรือ 3:4]    │
│                         │
│  Casual Friday Look     │  ← 15px Medium
│  เสื้อขาว + กางเกง navy│  ← 13px Light, muted
│                         │
│  CASUAL  2024-07-12     │  ← 12px tag uppercase
└─────────────────────────┘
```

### Decision Card — สำหรับ "วันนี้ใส่อะไร?"

Card ขนาดใหญ่กว่า มี 2 ปุ่ม:
- **[ใส่ชุดนี้เลย]** — btn primary ดำ เต็ม
- **[เปลี่ยนชุด]** — btn outline

### Tag System

```
CASUAL     MINIMAL     FORMAL     WORK
WEEKEND    DATE NIGHT  RAINY DAY  HOT WEATHER
```
Tag = รูปสี่เหลี่ยมมุมโค้ง, พื้น `#F0EEE9`, text muted uppercase xs

---

## Interaction Design

| Action | Behavior |
|---|---|
| Swipe card ซ้าย | "ไม่ใส่วันนี้" — fade out |
| Swipe card ขวา | "บันทึกว่าใส่แล้ว" — check animation |
| Long press รูป | Preview ขยาย full screen |
| Click "ให้ Claude แนะนำ" | Modal + input: "วันนี้มีนัด / อากาศร้อน / ..." |
| Add new item | Slide-up sheet — อัปโหลดรูป + tag |

---

## Micro-moments ที่ทำให้รู้สึก premium

1. **Quote บน landing** — เหมือน TMT ใช้ quote วอร์เรน บัฟเฟตต์
   > *"Style ไม่ใช่เรื่องของเสื้อผ้า แต่เป็นเรื่องของว่าคุณรู้จักตัวเองแค่ไหน"*

2. **Empty state ไม่ boring** — ถ้าตู้เสื้อผ้าว่าง แสดง: "เริ่มบันทึก outfit แรกของคุณ →" ไม่ใช่แค่ "No items found"

3. **Insight ประจำสัปดาห์** — "สัปดาห์นี้คุณใส่โทนสีเข้มถึง 5 วัน" — ข้อมูลเล็กๆ ที่รู้สึกว่า app รู้จักเรา

4. **Loading state** — skeleton card สีเทาอ่อน, ไม่มี spinner หมุน

5. **Scroll behavior** — Nav fade เมื่อ scroll ลง, โผล่เมื่อ scroll ขึ้น

---

## หน้าและ Navigation Flow

```
Landing/Login
     │
     ▼
Dashboard (Today)
  ├── Wardrobe (ตู้เสื้อผ้า)
  │     └── Item Detail
  ├── My Style (Style Identity)
  ├── Insights (สถิติ)
  └── Add Outfit (sheet)
```

---

## Tone of Voice

| ไม่ใช่ | แต่เป็น |
|---|---|
| "Please select an outfit" | "วันนี้ใส่อะไรดี?" |
| "No data available" | "ยังไม่มี outfit ในช่วงนี้" |
| "Success! Item added." | "บันทึกแล้ว ✓" |
| "Error" | "เกิดข้อผิดพลาด ลองใหม่อีกครั้งนะ" |

เสียงของ app = เพื่อนที่ stylish, ไม่ judgy, ตรงแต่อบอุ่น

---

## สิ่งที่ต่างจาก TMT (ปรับให้เหมาะกับ fashion)

- TMT ใช้ **สีขาว-เทา-ดำ** ล้วน → OOTD เพิ่ม **Accent Warm (#C9A97A)** เพื่อให้รู้สึก editorial fashion มากขึ้น
- TMT เน้น **ตัวเลข/กราฟ** → OOTD เน้น **รูปภาพ + card visual**
- TMT navigation แนวนอน → OOTD มี **sidebar** เพราะ content หลายหมวด

---

*concept นี้ยืมดีไซน์ system ของ TMT มาใช้ แต่ปรับ art direction ให้เป็น lifestyle / fashion*
