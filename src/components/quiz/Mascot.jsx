import { mascotColor } from '../../data/onboardingData.js'

const sizeMap = {
  sm: { box: 40, eye: 3, eyeGap: 8, mouthW: 12 },
  md: { box: 56, eye: 4, eyeGap: 11, mouthW: 16 },
  lg: { box: 84, eye: 5, eyeGap: 16, mouthW: 24 },
}

const VB_CX = 20

export default function Mascot({ size = 'md', pulse = false, className = '' }) {
  const s = sizeMap[size] || sizeMap.md

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full ${pulse ? 'animate-pulse' : ''} ${className}`}
      style={{ width: s.box, height: s.box, backgroundColor: mascotColor }}
    >
      <svg width={s.box * 0.6} height={s.box * 0.4} viewBox="0 0 40 24">
        <circle cx={VB_CX - 8} cy="6" r={s.eye} fill="#1A1A1A" />
        <circle cx={VB_CX + 2} cy="6" r={s.eye} fill="#1A1A1A" />
        <path
          d={`M ${VB_CX - s.mouthW / 2} 14 Q ${VB_CX - 3} 22 ${VB_CX + s.mouthW / 2} 14`}
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  )
}
