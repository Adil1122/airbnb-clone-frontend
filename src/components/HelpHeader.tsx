'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Globe, Menu, UserCircle, Search } from 'lucide-react';

interface HelpHeaderProps {
    showSearch?: boolean;
}

const HelpHeader: React.FC<HelpHeaderProps> = ({ showSearch = false }) => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1100,
            backgroundColor: 'white',
            borderBottom: '1px solid #DDDDDD',
            padding: '12px 0',
            height: '80px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={{
                maxWidth: '1760px',
                margin: '0 auto',
                width: '100%',
                padding: '0 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo & Help Center Title */}
                <div style={{ display: 'flex', alignItems: 'center', minWidth: '180px' }}>
                    <Link href="/help" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: '#FF385C' }}>
                            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.636l-.261.015-.231.003c-3.447 0-6.356-2.416-6.356-6.478 0-.102.002-.234.004-.325l.006-.217c.05-.924.293-1.805.96-3.396l.144-.354c.987-2.297 5.147-11.007 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.234 0-2.056.565-3.037 2.308l-.508.985c-2.01 3.94-6.196 12.72-7.14 14.966l-.142.348c-.54 1.291-.72 1.954-.761 2.651l-.01.222c0 2.924 2.112 4.478 4.356 4.478 1.621 0 3.514-1.127 5.488-3.18l.8-.883.8.883c1.974 2.053 3.867 3.18 5.488 3.18 2.245 0 4.357-1.554 4.357-4.478 0-.083-.001-.19-.003-.277l-.008-.223c-.04-.697-.221-1.36-.76-1.651l-.142-.348c-.945-2.246-5.131-11.026-7.14-14.966l-.508-.985C18.056 3.565 17.234 3 16 3zm0 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                        </svg>
                        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#222222', letterSpacing: '-0.02em' }}>Help Center</span>
                    </Link>
                </div>

                {/* Search Bar (Optional) */}
                {showSearch && (
                    <div style={{
                        flex: '0 1 400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 24px'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #DDDDDD',
                            borderRadius: '32px',
                            backgroundColor: '#F7F7F7',
                            transition: 'box-shadow 0.2s ease',
                            cursor: 'pointer'
                        }} className="header-search-box">
                            <span style={{
                                paddingLeft: '16px',
                                color: '#717171',
                                fontSize: '14px',
                                flex: 1,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>Search how-tos and more</span>
                            <div style={{
                                backgroundColor: '#FF385C',
                                padding: '8px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Search size={14} color="white" strokeWidth={3} />
                            </div>
                        </div>
                    </div>
                )}

                {/* Right Menu */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '180px', justifyContent: 'flex-end' }}>
                    <button style={{
                        padding: '12px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} className="hover:bg-[#F7F7F7]">
                        <Globe size={18} strokeWidth={2.5} />
                    </button>
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '6px 6px 6px 12px',
                                border: '1px solid #DDDDDD',
                                borderRadius: '32px',
                                backgroundColor: 'white',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                            className="hover:shadow-md"
                        >
                            <Menu size={16} strokeWidth={2.5} />
                            <div style={{ backgroundColor: '#717171', borderRadius: '50%', padding: '2px', display: 'flex' }}>
                                <UserCircle size={28} style={{ color: 'white' }} />
                            </div>
                        </button>

                        {isUserMenuOpen && (
                            <div
                                ref={menuRef}
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    right: 0,
                                    marginTop: '8px',
                                    width: '240px',
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
                                    padding: '8px 0',
                                    zIndex: 2000,
                                    border: '1px solid #EEEEEE'
                                }}
                            >
                                <div style={{ padding: '12px 16px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }} className="hover:bg-[#F7F7F7]">Log in</div>
                                <div style={{ padding: '12px 16px', fontSize: '14px', cursor: 'pointer' }} className="hover:bg-[#F7F7F7]">Sign up</div>
                                <div style={{ height: '1px', backgroundColor: '#DDDDDD', margin: '8px 0' }}></div>
                                <div style={{ padding: '12px 16px', fontSize: '14px', cursor: 'pointer' }} className="hover:bg-[#F7F7F7]">Airbnb your home</div>
                                <div style={{ padding: '12px 16px', fontSize: '14px', cursor: 'pointer' }} className="hover:bg-[#F7F7F7]">Host an Experience</div>
                                <div style={{ padding: '12px 16px', fontSize: '14px', cursor: 'pointer' }} className="hover:bg-[#F7F7F7]">Help Center</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .hover\:bg-\[\#F7F7F7\]:hover { background-color: #F7F7F7 !important; }
                .hover\:shadow-md:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important; }
                .header-search-box:hover { box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important; }
            `}</style>
        </header>
    );
};

export default HelpHeader;
