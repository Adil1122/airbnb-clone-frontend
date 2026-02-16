'use client';

import React from 'react';

interface ServiceFooterProps {
    price: number;
    unit: string;
    onAction: () => void;
}

const ServiceFooter: React.FC<ServiceFooterProps> = ({ price, unit, onAction }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid var(--slate-100)',
            padding: '1rem 0',
            zIndex: 1000,
            boxShadow: '0 -10px 25px rgba(0, 0, 0, 0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--slate-900)' }}>${price}</span>
                        <span style={{ fontSize: '14px', color: 'var(--gray)', fontWeight: 500 }}>/ {unit}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>
                        Free cancellation
                    </div>
                </div>

                <button
                    onClick={onAction}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        padding: '12px 28px',
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--slate-900) 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '15px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: isHovered ? '0 6px 20px rgba(79, 70, 229, 0.35)' : '0 4px 12px rgba(79, 70, 229, 0.25)',
                        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                >
                    Show dates
                </button>
            </div>
        </div>
    );
};

export default ServiceFooter;
