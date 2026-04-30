// WelcomeCard.jsx - Displayed with starter questions before any messages are sent

// Starter prompts
const STARTERS = [
    'Who are the Fremen?',
    'What is the Spice Melange?',
    'Tell me about Paul Atreides',
    'Describe the sandworms of Arrakis',
]

export default function WelcomeCard({ onStarter }) {
    return (
        <div style={{
            alignSelf: 'center',
            textAlign: 'center',
            padding: '28px 32px',
            border: '1px solid var(--border-spice)',
            background: 'rgba(15,8,2,0.65)',
            backdropFilter: 'blur(6px)',
            maxWidth: '440px',
            borderRadius: 'var(--radius-md)',
            margin: 'auto 0',
        }}>

            {/* Sandworm sigil */}
            <div style={{ marginBottom: '14px' }}>
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                    <circle cx="26" cy="26" r="24" fill="rgba(61,26,5,0.6)" stroke="rgba(196,122,30,0.4)" strokeWidth="1"/>
                    <ellipse cx="26" cy="26" rx="12" ry="12" fill="rgba(61,26,5,0.8)" stroke="rgba(139,69,19,0.7)" strokeWidth="1.2"/>
                    <ellipse cx="26" cy="26" rx="8" ry="8" fill="none" stroke="rgba(196,122,30,0.5)" strokeWidth="0.8" strokeDasharray="2 2"/>
                    <g stroke="rgba(196,122,30,0.6)" strokeWidth="1.2" strokeLinecap="round">
                        <line x1="26" y1="14" x2="26" y2="17"/>
                        <line x1="34.5" y1="17.5" x2="32.4" y2="19.8"/>
                        <line x1="38" y1="26" x2="35" y2="26"/>
                        <line x1="34.5" y1="34.5" x2="32.4" y2="32.2"/>
                        <line x1="26" y1="38" x2="26" y2="35"/>
                        <line x1="17.5" y1="34.5" x2="19.6" y2="32.2"/>
                        <line x1="14" y1="26" x2="17" y2="26"/>
                        <line x1="17.5" y1="17.5" x2="19.6" y2="19.8"/>
                    </g>
                    <circle cx="26" cy="26" r="3" fill="rgba(212,82,26,0.8)"/>
                </svg>
            </div>

            <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--sand-light)',
                letterSpacing: '0.1em',
                marginBottom: '8px',
            }}>
                The Worm Awaits
            </h2>

            <p style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontStyle: 'italic',
            }}>
                "He who controls the spice, controls the universe."
                <br />
                Ask me anything of Arrakis, the Fremen, or the Atreides saga.
            </p>

            {/* Starter pills */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
                marginTop: '18px',
            }}>
                {STARTERS.map(text => (
                    <button
                        key={text}
                        onClick={() => onStarter(text)}
                        style={{
                            background: 'rgba(61,32,6,0.5)',
                            border: '1px solid var(--border-spice)',
                            color: 'var(--text-secondary)',
                            fontFamily: 'var(--font-body)',
                            fontSize: '13px',
                            padding: '5px 12px',
                            borderRadius: 'var(--radius-sm)',
                            fontStyle: 'italic',
                            cursor: 'pointer',
                        }}
                    >
                        {text}
                    </button>
                ))}
            </div>
        </div>
    )
}