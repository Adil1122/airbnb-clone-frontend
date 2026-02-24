'use client';

import React, { useState, useEffect } from 'react';
import { Search, Globe, Menu, UserCircle, Command } from 'lucide-react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-[1100]">
            <div className="container">
                {/* Top Row: Logo, Nav, User Menu */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    {/* Airbnb Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'var(--primary)' }}>
                            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.636l-.261.015-.231.003c-3.447 0-6.356-2.416-6.356-6.478 0-.102.002-.234.004-.325l.006-.217c.05-.924.293-1.805.96-3.396l.144-.354c.987-2.297 5.147-11.007 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.234 0-2.056.565-3.037 2.308l-.508.985c-2.01 3.94-6.196 12.72-7.14 14.966l-.142.348c-.54 1.291-.72 1.954-.761 2.651l-.01.222c0 2.924 2.112 4.478 4.356 4.478 1.621 0 3.514-1.127 5.488-3.18l.8-.883.8.883c1.974 2.053 3.867 3.18 5.488 3.18 2.245 0 4.357-1.554 4.357-4.478 0-.083-.001-.19-.003-.277l-.008-.223c-.04-.697-.221-1.36-.76-1.651l-.142-.348c-.945-2.246-5.131-11.026-7.14-14.966l-.508-.985C18.056 3.565 17.234 3 16 3zm0 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                        </svg>
                        <span className="desktop-only" style={{ color: 'var(--primary)', fontSize: '22px', fontWeight: 800, letterSpacing: '-1px' }}>airbnb</span>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="nav-tabs desktop-only" style={{ display: 'flex', gap: '24px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                        <div className="nav-tab active" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', borderBottom: '2px solid #222222' }}>
                            <span style={{ color: '#222222', fontSize: '16px', fontWeight: 600 }}>Homes</span>
                        </div>
                        <div className="nav-tab" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0' }}>
                            <span style={{ color: '#717171', fontSize: '16px', fontWeight: 400 }}>Experiences</span>
                        </div>
                        <div className="nav-tab" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0' }}>
                            <span style={{ color: '#717171', fontSize: '16px', fontWeight: 400 }}>Services</span>
                        </div>
                    </div>

                    {/* Right Menu */}
                    <div className="header-right">
                        <div className="host-link desktop-only">Become a host</div>
                        <div style={{ padding: '12px', cursor: 'pointer' }} className="desktop-only">
                            <Globe size={16} />
                        </div>
                        <div className="user-menu-btn">
                            <Menu size={16} />
                            <div style={{ color: '#717171' }}>
                                <UserCircle size={32} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="search-container">
                    <div className="search-bar-full">
                        <div className="search-item">
                            <span className="search-label">Where</span>
                            <span className="search-value" style={{ fontSize: '14px' }}>Search destinations</span>
                        </div>
                        <div className="search-divider desktop-only"></div>
                        <div className="search-item desktop-only">
                            <span className="search-label">When</span>
                            <span className="search-value">Add dates</span>
                        </div>
                        <div className="search-divider desktop-only"></div>
                        <div className="search-item desktop-only">
                            <span className="search-label">Who</span>
                            <span className="search-value">Add guests</span>
                        </div>
                        <button className="search-btn-red">
                            <Search size={18} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

// Custom icons for the header tabs to match Airbnb target
const HomeIcon = ({ size = 28 }) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: `${size}px`, width: `${size}px`, fill: 'currentColor' }}>
        <path d="M16 2.65l13.53 10.99-1.26 1.55L16 4.97 3.73 15.19 2.47 13.63 16 2.65zM27 15v13h-8v-8h-6v8H5V15h2v11h4v-8h10v8h4V15h2z"></path>
    </svg>
);

const BalloonIcon = ({ size = 28 }) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: `${size}px`, width: `${size}px`, fill: 'currentColor' }}>
        <path d="M16 2a11 11 0 0 0-11 11c0 8.24 11 17 11 17s11-8.76 11-17A11 11 0 0 0 16 2zm0 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
    </svg>
);

const ClocheIcon = ({ size = 28 }) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: `${size}px`, width: `${size}px`, fill: 'currentColor' }}>
        <path d="M16 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm15 15a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h1.04C3.02 13.45 8.9 7.86 16 7.86s12.98 5.59 13.96 13.14z"></path>
    </svg>
);

export default Header;
