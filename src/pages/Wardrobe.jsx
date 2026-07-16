import { useState } from 'react'
import { wardrobeItems } from '../data/mockData.js'
import Tag from '../components/Tag.jsx'

const filters = ['ทั้งหมด', 'เสื้อ', 'กางเกง', 'รองเท้า', 'Accessories', 'ไม่ค่อยได้ใส่']

export default function Wardrobe() {
  const [active, setActive] = useState('ทั้งหมด')

  const filtered = wardrobeItems.filter((item) => {
    if (active === 'ทั้งหมด') return true
    if (active === 'ไม่ค่อยได้ใส่') return item.wearCount <= 1
    return item.category === active
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[20px] font-medium">ตู้เสื้อผ้าของฉัน</h2>
        <p className="mt-1 text-[13px] font-light text-muted">{wardrobeItems.length} ชิ้นทั้งหมด</p>
      </div>

      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
              active === f ? 'bg-accent text-white' : 'bg-surface text-muted hover:bg-tag'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-surface p-10 text-center shadow-card">
          <p className="text-[15px] font-medium">ยังไม่มี item ในหมวดนี้</p>
          <p className="mt-1 text-[13px] font-light text-muted">เริ่มบันทึก item แรกของคุณ →</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-xl bg-surface shadow-card">
              <div
                className="flex h-28 items-center justify-center text-4xl"
                style={{ backgroundColor: item.color === '#FFFFFF' ? '#F0EEE9' : `${item.color}1A` }}
              >
                {item.image}
              </div>
              <div className="space-y-1.5 p-3">
                <p className="text-[14px] font-medium leading-snug">{item.name}</p>
                <Tag>{item.tag}</Tag>
                <p className="text-[12px] font-light text-muted">ใส่ {item.wearCount}×</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
