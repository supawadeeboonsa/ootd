export default function Tag({ children, warm = false }) {
  return (
    <span
      className={`inline-block rounded-md px-2 py-1 text-[11px] font-medium uppercase tracking-wider ${
        warm ? 'bg-warm/20 text-warm' : 'bg-tag text-muted'
      }`}
    >
      {children}
    </span>
  )
}
