'use client';

import React, { useState, useEffect } from 'react';
import { Search, Globe, Menu, UserCircle, Command } from 'lucide-react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{
            padding: isScrolled ? '1rem 0' : '1.5rem 0',
            position: 'sticky',
            top: 0,
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'white',
            backdropFilter: 'blur(12px)',
            zIndex: 1100,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2.5rem'
            }}>
                {/* Prime Logo - Unique Style */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                        width: '44px',
                        height: '44px',
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--slate-900) 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
                    }}>
                        <Command size={24} />
                    </div>
                    <span style={{
                        fontWeight: 800,
                        fontSize: '1.5rem',
                        background: 'linear-gradient(to right, var(--slate-900), var(--primary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-1.5px'
                    }} className="desktop-only">
                        PRIME
                    </span>
                </div>

                {/* Integrated Discovery Bar */}
                <div className="discovery-bar" style={{ flex: 1, maxWidth: '720px' }}>
                    <div className="discovery-segment">
                        <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>Discover</span>
                        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--slate-800)' }}>Any Destination</span>
                    </div>
                    <div className="discovery-segment desktop-only">
                        <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--gray)', textTransform: 'uppercase' }}>Timeline</span>
                        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--gray)' }}>Add dates</span>
                    </div>
                    <div className="discovery-segment desktop-only">
                        <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--gray)', textTransform: 'uppercase' }}>Community</span>
                        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--gray)' }}>Add service</span>
                    </div>
                    <div style={{
                        padding: '2px',
                        marginLeft: '8px'
                    }}>
                        <button className="header-search-btn" style={{
                            background: 'var(--slate-900)',
                            color: 'white',
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.2s'
                        }}>
                            <Search size={22} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* User Workspace */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="desktop-only">
                    <div className="header-nav-link">
                        List Property
                    </div>
                    <Globe size={18} style={{ cursor: 'pointer', color: 'var(--gray)' }} />
                    <Link href="/signup-login" className="header-user-menu" style={{ textDecoration: 'none' }}>
                        <Menu size={18} />
                        <div style={{
                            width: '34px',
                            height: '34px',
                            backgroundColor: 'var(--slate-100)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--slate-700)'
                        }}>
                            <UserCircle size={28} />
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
