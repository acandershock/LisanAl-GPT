// SandwormLoader.jsx - "Thinking" animation shown while backend processes requests

export default function SandwormLoader() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '4px 0',
            alignSelf: 'flex-start',
            animation: 'msgIn 0.3s ease-out',
        }}>
            {/* Avatar */}
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
                background: 'radial-gradient(135deg at 30% 30%, #3d1a05, #1a0800)',
                border: '1px solid rgba(212,82,26,0.4)',
                boxShadow: '0 0 8px rgba(212,82,26,0.25)',
                color: 'var(--spice-orange)',
                marginTop: '2px'
            }}>
                L
            </div>

            {/* Animation + label row */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                {/* Sandworm SVG */}
                <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    style={{
                        filter: 'drop-shadow(0 0 6px rgba(212,82,26,0.5))'
                    }}>
                        {/* Fills core with spice-orange glow */}
                        <defs>
                            <radialGradient id="wormCore" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#d4521a" stopOpacity="0.9" />
                                <stop offset="60%" stopColor="#8b3010" stopOpacity="0.7" />
                                <stop offset="100%" stopColor="#3d1a05" stopOpacity="0.5" />
                            </radialGradient>
                        </defs>

                        {/* Outer Ring */}
                        <g style={{
                            transformOrigin: '28px 28px',
                            animation: 'rotateOuterTeeth 2.4s linear infinite'
                        }}>
                            <g fill="#6b3510" stroke="rgba(139,69,19,0.7)" strokeWidth="0.5">
                                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
                                    <ellipse
                                        key={deg}
                                        cx="28" cy="5"
                                        rx="2.2" ry="4.5"
                                        transform={`rotate(${deg} 28 28)`}
                                    />
                                ))}
                            </g>
                            <circle cx="28" cy="28" r="21" fill="none" stroke="rgba(100,50,15,0.6)" strokeWidth="1.2" />
                        </g>

                        {/* Middle Ring */}
                        <g style={{
                            transformOrigin: '28px 28px',
                            animation: 'rotateMidTeeth 1.8s linear infinite reverse'
                        }}>
                            <g fill="#7a3a12" stroke="rgba(160,80,25,0.6)" strokeWidth="0.5">
                                {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                                    <ellipse
                                        key={deg}
                                        cx="28" cy="12"
                                        rx="1.8" ry="3.5"
                                        transform={`rotate(${deg} 28 28)`}
                                    />
                                ))}
                            </g>
                            <circle cx="28" cy="28" r="14" fill="none" stroke="rgba(120,60,18,0.5)" strokeWidth="1" />
                        </g>

                        {/* Inner Ring */}
                        <g style={{
                            transformOrigin: '28px 28px',
                            animation: 'rotateInnerTeeth 1.2s linear infinite'
                        }}>
                            <g fill="#8b4515" stroke="rgba(180,100,30,0.5)" strokeWidth="0.5">
                                {[0, 60, 120, 180, 240, 300].map(deg => (
                                    <ellipse
                                        key={deg}
                                        cx="28" cy="18"
                                        rx="1.4" ry="2.5"
                                        transform={`rotate(${deg} 28 28)`}
                                    />
                                ))}
                            </g>
                            <circle cx="28" cy="28" r="8" fill="none" stroke="rgba(150,75,20,0.4)" strokeWidth="0.8" />
                        </g>

                        {/* Core */}
                        <g style={{
                            transformOrigin: '28px 28px',
                            animation: 'corePulse 2.4s ease-in-out infinite'
                        }}>
                            <circle cx="28" cy="28" r="6.5" fill="url(#wormCore)" />
                            <circle cx="28" cy="28" r="3.5" fill="rgba(212,82,26,0.8)" />
                            <circle cx="28" cy="28" r="1.5" fill="rgba(255,160,60,0.9)" />
                        </g>
                    </svg>

                    {/* Pulsing text label */}
                    <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize:'9px',
                        letterSpacing: '0.18em',
                        color: 'var(--spice-orange)',
                        textTransform: 'uppercase',
                        animation: 'wormPulse 2s ease-in-out infinite',
                    }}>
                        Consulting the spice...
                    </span>
            </div>
        </div>
    )
}