// ArrakisBackground.jsx - Visual layer

export default function ArrakisBackground() {
    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
        }}>

            {/* Stars */}
            <div style={{
                position: 'absolute',
                inset: 0,
                height: '55%',
                background: `
                    radial-gradient(1px 1px at 10% 15%, rgba(232,213,163,0.9) 0%, transparent 100%),
                    radial-gradient(1px 1px at 25% 8%,  rgba(232,213,163,0.7) 0%, transparent 100%),
                    radial-gradient(1.5px 1.5px at 40% 20%, rgba(232,213,163,0.8) 0%, transparent 100%),
                    radial-gradient(1px 1px at 55% 5%,  rgba(200,190,160,0.6) 0%, transparent 100%),
                    radial-gradient(1px 1px at 70% 18%, rgba(232,213,163,0.9) 0%, transparent 100%),
                    radial-gradient(1px 1px at 85% 10%, rgba(200,190,160,0.7) 0%, transparent 100%),
                    radial-gradient(1.5px 1.5px at 15% 35%, rgba(232,213,163,0.5) 0%, transparent 100%),
                    radial-gradient(1px 1px at 32% 28%, rgba(232,213,163,0.8) 0%, transparent 100%),
                    radial-gradient(1px 1px at 50% 40%, rgba(200,190,160,0.4) 0%, transparent 100%),
                    radial-gradient(1px 1px at 65% 30%, rgba(232,213,163,0.6) 0%, transparent 100%),
                    radial-gradient(1px 1px at 78% 38%, rgba(232,213,163,0.7) 0%, transparent 100%),
                    radial-gradient(1.5px 1.5px at 92% 25%, rgba(232,213,163,0.5) 0%, transparent 100%),
                    radial-gradient(1px 1px at 18% 48%, rgba(232,213,163,0.6) 0%, transparent 100%),
                    radial-gradient(1px 1px at 45% 52%, rgba(232,213,163,0.4) 0%, transparent 100%),
                    radial-gradient(1px 1px at 88% 50%, rgba(232,213,163,0.7) 0%, transparent 100%),
                    radial-gradient(0.5px 0.5px at 3% 22%,  rgba(232,213,163,0.5) 0%, transparent 100%),
                    radial-gradient(0.5px 0.5px at 75% 6%,  rgba(200,190,160,0.4) 0%, transparent 100%)
                `,
            }} />

            {/* Space Gradient */}
            <div style={{
                position: 'absolute',
                inset: 0,
                height: '58%',
                background: 'linear-gradient(180deg, #020408 0%, #04080f 20%, #070d1a 40%, #0f1a2e 55%, transparent 100%)',
            }} />

            {/* Moons */}
            <div style={{
                position: 'absolute',
                width: '28px', height: '28px',
                top: '6%', right: '12%',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #d4c49a, #8a7550)',
                boxShadow: '0 0 12px rgba(212,196,154,0.3)',
            }} />
            <div style={{
                position: 'absolute',
                width: '14px', height: '14px',
                top: '12%', right: '22%',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 40% 40%, #b8a882, #6a5c3e)',
                boxShadow: '0 0 6px rgba(184,168,130,0.2)',
            }} />

            {/* Dunes */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '52%'
            }}>
                <svg
                    width="100%" height="100%"
                    viewBox="0 0 1440 420"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="dg1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%"   stopColor="#2a1205" stopOpacity="0.95" />
                            <stop offset="100%" stopColor="#0d0603" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="dg2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%"   stopColor="#3d1a06" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#150a02" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="dg3" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%"   stopColor="#5a2a0a" stopOpacity="0.85" />
                            <stop offset="100%" stopColor="#1a0e04" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {/* Far dune */}
                    <path
                        d="M0 200 Q180 120 360 160 Q540 200 720 140 Q900 80 1080 130 Q1260 175 1440 150 L1440 420 L0 420 Z"
                        fill="url(#dg1)"
                    />
                    {/* Mid dune */}
                    <path
                        d="M0 260 Q120 200 280 230 Q440 260 620 195 Q800 130 980 190 Q1160 250 1300 215 Q1380 195 1440 220 L1440 420 L0 420 Z"
                        fill="url(#dg2)"
                    />
                    {/* Near dune — crest catches the light */}
                    <path
                        d="M0 330 Q200 270 400 305 Q600 340 760 275 Q920 210 1100 265 Q1280 320 1440 290 L1440 420 L0 420 Z"
                        fill="url(#dg3)"
                    />
                    <path
                        d="M0 330 Q200 270 400 305 Q600 340 760 275 Q920 210 1100 265 Q1280 320 1440 290"
                        stroke="rgba(196,122,30,0.15)" strokeWidth="3" fill="none"
                    />
                    <rect x="0" y="395" width="1440" height="25" fill="#0a0603" />
                </svg>
            </div>

            {/* Spice shimmer */}
            <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '45%',
                background: 'linear-gradient(135deg, transparent 20%, rgba(196,122,30,0.05) 50%, transparent 70%)',
                animation: 'shimmer 6s ease-in-out infinite alternate',
            }} />
        </div>
    )
}