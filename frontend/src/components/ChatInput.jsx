// ChatInput.jsx - The input bar at the bottom, textarea and send button

export default function ChatInput() {
    return (
        <div style={{
            padding: '14px 20px 16px',
            borderTop: '1px solid var(--border-spice)',
            background: 'linear-gradient(0deg, rgba(8,5,2,0.92) 0%, rgba(15,9,3,0.75) 100%)',
            backdropFilter: 'blur(8px)',
            flexShrink: 0,  // never shrink, always stays at the bottom
        }}>

            <div style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-end'
            }}>
                <textarea
                    rows={1}
                    placeholder="Speak your question into the desert wind..."
                    style={{
                        flex: 1,
                        background: 'rgba(30,16,5,0.7)',
                        border: '1px solid rgba(100,55,15,0.45)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-primary)',
                        fontSize: '15.5px',
                        padding: '10px 14px',
                        resize: 'none',
                        minHeight: '44px',
                        lineHeight: 1.55,
                        outline: 'none',
                    }}
                />

                {/* Send button */}
                <button style={{
                    width: '44px',
                    height: '44px',
                    background: 'linear-gradient(135deg, #7a3510, #4a2008)',
                    border: '1px solid rgba(196,122,30,0.5)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                }}>
                    {/* Arrow icon */}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M2 9L16 9M16 9L10 3M16 9L10 15"
                            stroke="rgba(196,122,30,0.9)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            <p style={{
                textAlign: 'center',
                marginTop: '8px',
                fontFamily: 'var(--font-display)',
                fontSize: '9px',
                letterSpacing: '0.14em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
            }}>
                The spice enhances awareness · Dune RAG System
            </p>
        </div>
    )
}