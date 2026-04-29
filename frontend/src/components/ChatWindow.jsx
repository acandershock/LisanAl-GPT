// ChatWindow.jsx - The scrollable message area

export default function ChatWindow() {
    // Hardcoded for now just to see what messages look like.
    const messages = [
        { id: 1, role: 'user', text: 'Who are the Fremen?' },
        { id: 2, role: 'bot', text: 'The Fremen are the indigenous people of Arrakis, hardened by generations of life in the deep desert. They are fierce warriors, expert survivalists, and the keepers of a secret dream: to transform their world into a paradise.'},
        { id: 3, role: 'user', text: 'What is the spice melange?'},
    ]

    return (
        <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
        }}>
            {messages.map(msg => (
                <div
                    key={msg.id}
                    style={{
                        display: 'flex',
                        gap: '12px',
                        maxWidth: '88%',
                        // User messages sit on the right, bot on the left
                        alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                        flexDirection: msg.role === 'user' ? 'row-reverse' : 'row'
                    }}
                >
                    {/* Avatar circle */}
                    <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: '11px',
                        fontWeight: 600,
                        border: '1px solid var(--border-spice)',
                        marginTop: '2px',
                        background: msg.role === 'user'
                            ? 'radial-gradient(135deg at 30% 30%, #4a2a0a, #1a0e05)'
                            : 'radial-gradient(135deg at 30% 30%, #3d1a05, #1a0800)',
                        color: msg.role === 'user' ? 'var(--sand-light)' : 'var(--spice-orange)',
                    }}>
                        {msg.role === 'user' ? 'YOU' : 'L'}
                    </div>

                    {/* Message content */}
                    <div>
                        <div style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '9px',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'var(--text-muted)',
                            marginBottom: '5px',
                            textAlign: msg.role === 'user' ? 'right' : 'left',
                        }}>
                            {msg.role === 'user' ? 'Seeker' : 'Lisan Al-GPT'}
                        </div>

                        <div style={{
                            padding: '11px 16px',
                            borderRadius: 'var(--radius-md)',
                            lineHeight: 1.65,
                            fontSize: '15.5px',
                            ...(msg.role === 'user' ? {
                                background: 'rgba(60,30,8,0.7)',
                                border: '1px solid rgba(196,122,30,0.3)',
                                color: 'var(--sand-pale)',
                                borderTopRightRadius: 0,
                            } : {
                                background: 'rgba(20,10,3,0.75)',
                                border: '1px solid rgba(100,50,15,0.4)',
                                color: 'var(--text-primary)',
                                borderTopLeftRadius: 0,
                            }),
                        }}>
                            {msg.text}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}