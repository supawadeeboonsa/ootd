import { weeklyInsight, wardrobeItems } from '../data/mockData.js'

const mostWorn = [...wardrobeItems].sort((a, b) => b.wearCount - a.wearCount).slice(0, 3)
const leastWorn = [...wardrobeItems].sort((a, b) => a.wearCount - b.wearCount).slice(0, 3)

export default function Insights() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h2 className="text-[20px] font-medium">Insights</h2>
        <p className="mt-1 text-[13px] font-light text-muted">สถิติการแต่งตัวของคุณ</p>
      </div>

      <div className="rounded-2xl bg-surface p-6 shadow-card">
        <p className="text-[15px] leading-relaxed">{weeklyInsight}</p>
      </div>

      <div>
        <p className="mb-3 text-[12px] font-medium uppercase tracking-wider text-muted">ใส่บ่อยที่สุด</p>
        <div className="space-y-2">
          {mostWorn.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl bg-surface p-4 shadow-card">
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.image}</span>
                <span className="text-[14px] font-medium">{item.name}</span>
              </div>
              <span className="text-[13px] font-light text-muted">ใส่ {item.wearCount}×</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-[12px] font-medium uppercase tracking-wider text-muted">ไม่ค่อยได้ใส่</p>
        <div className="space-y-2">
          {leastWorn.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-xl bg-surface p-4 shadow-card">
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.image}</span>
                <span className="text-[14px] font-medium">{item.name}</span>
              </div>
              <span className="text-[13px] font-light text-alert">ยังไม่ได้แต่งตัวนี้นานมากแล้ว</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
