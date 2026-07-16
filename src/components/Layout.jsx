import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/my-style', label: 'My Style' },
  { to: '/style-quiz', label: 'Quiz' },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-bg/90 px-6 py-4 backdrop-blur">
        <h1 className="text-[22px] font-semibold tracking-[-0.5px]">OOTD</h1>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-[14px] transition-colors ${
                  isActive ? 'bg-surface font-medium text-ink shadow-card' : 'text-muted hover:bg-surface/60'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="h-9 w-9 rounded-full bg-accent" />
      </header>
      <main className="mx-auto min-w-0 max-w-6xl px-5 py-8 sm:px-8">
        <Outlet />
      </main>
    </div>
  )
}
