// Header.jsx - The top bar of the app

export default function Header() {
    return (
        <header style={{
            padding: '14px 24px 10px',
            borderBottom: '1px solid var(--border-spice)',
            background: 'linear-gradient(180deg, rgba(10,8,4,0.85) 0%, rgba(20,12,5,0.6) 100%',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexShrink: 0,
        }}>
            {/* Atreides sigil */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="16" stroke="rgba(196,122,30,0.5)" strokeWidth="0.8"/>
                <circle cx="18" cy="18" r="11" stroke="rgba(196,122,30,0.5)" strokeWidth="0.6"/>
                <path d="M18 5 L24 18 L18 31 L12 18 Z" stroke="rgba(196,122,30,0.6)" strokeWidth="1"/>
                <path d="M5 18 L18 12 L31 18 L18 24 Z" stroke="rgba(196,122,30,0.4)" strokeWidth="0.7"/>
                <circle cx="18" cy="18" r="2.5" fill="rgba(212,82,26,0.7)"/>
            </svg>

            {/* Title block */}
            <div>
                <h1 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: 'var(--sand-light)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                }}>
                    Lisan al-GPT
                </h1>
                <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                    letterSpacing: '0.04em',
                    marginTop: '1px',
                }}>
                    Knowledge from the Desert of Arrakis
                </p>
            </div>

            {/* Badge */}
            <div style={{
                marginLeft: 'auto',
                fontFamily: 'var(--font-display)',
                fontSize: '9px',
                letterSpacing: '0.15em',
                color: 'var(--spice-orange)',
                border: '1px solid rgba(212,82,26,0.4)',
                padding: '3px 8px',
                borderRadius: 'var(--radius-sm)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
            }}>
                Spice-Enhanced RAG
            </div>

        </header>
    )
}