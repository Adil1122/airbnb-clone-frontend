'use client';

import React from 'react';

interface ServiceFooterProps {
    price: number;
    unit: string;
    onAction: () => void;
}

const ServiceFooter: React.FC<ServiceFooterProps> = ({ price, unit, onAction }) => {
    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid #DDDDDD',
            padding: '16px 0',
            zIndex: 1000,
            boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                        <span style={{ fontSize: '18px', fontWeight: 800, color: '#222222' }}>${price}</span>
                        <span style={{ fontSize: '14px', color: '#717171', fontWeight: 500 }}>/ {unit}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#222222', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>
                        Free cancellation
                    </div>
                </div>

                <button
                    onClick={onAction}
                    style={{
                        padding: '14px 24px',
                        background: 'var(--primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.background = 'var(--primary-hover)')}
                    onMouseOut={(e) => (e.currentTarget.style.background = 'var(--primary)')}
                >
                    Show dates
                </button>
            </div>
        </div>
    );
};

export default ServiceFooter;
