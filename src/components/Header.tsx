'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Globe, Menu, UserCircle, Command, Facebook, Apple, Mail, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Modal from './Modal';

const Header: React.FC = () => {
    const [isHostModalOpen, setIsHostModalOpen] = useState(false);
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [activeLanguageTab, setActiveLanguageTab] = useState<'language' | 'currency'>('language');
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOpenAuth = () => setIsAuthModalOpen(true);
        window.addEventListener('open-auth-modal', handleOpenAuth);

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('open-auth-modal', handleOpenAuth);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'var(--primary)' }}>
                            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.636l-.261.015-.231.003c-3.447 0-6.356-2.416-6.356-6.478 0-.102.002-.234.004-.325l.006-.217c.05-.924.293-1.805.96-3.396l.144-.354c.987-2.297 5.147-11.007 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.234 0-2.056.565-3.037 2.308l-.508.985c-2.01 3.94-6.196 12.72-7.14 14.966l-.142.348c-.54 1.291-.72 1.954-.761 2.651l-.01.222c0 2.924 2.112 4.478 4.356 4.478 1.621 0 3.514-1.127 5.488-3.18l.8-.883.8.883c1.974 2.053 3.867 3.18 5.488 3.18 2.245 0 4.357-1.554 4.357-4.478 0-.083-.001-.19-.003-.277l-.008-.223c-.04-.697-.221-1.36-.76-1.651l-.142-.348c-.945-2.246-5.131-11.026-7.14-14.966l-.508-.985C18.056 3.565 17.234 3 16 3zm0 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                        </svg>
                        <span className="desktop-only" style={{ color: 'var(--primary)', fontSize: '22px', fontWeight: 800, letterSpacing: '-1px' }}>airbnb</span>
                    </Link>

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
                        <div
                            className="host-link desktop-only"
                            onClick={() => setIsHostModalOpen(true)}
                            style={{ cursor: 'pointer' }}
                        >
                            Become a host
                        </div>
                        <div
                            style={{ padding: '12px', cursor: 'pointer' }}
                            className="desktop-only"
                            onClick={() => setIsLanguageModalOpen(true)}
                        >
                            <Globe size={16} />
                        </div>
                        <div
                            className="user-menu-btn"
                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                            style={{ cursor: 'pointer', position: 'relative' }}
                        >
                            <Menu size={16} />
                            <div style={{ color: '#717171' }}>
                                <UserCircle size={32} />
                            </div>

                            {/* Precise User Menu Dropdown */}
                            {isUserMenuOpen && (
                                <div
                                    ref={menuRef}
                                    style={{
                                        position: 'absolute',
                                        top: '55px',
                                        right: '0',
                                        width: '240px',
                                        background: 'white',
                                        borderRadius: '12px',
                                        boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
                                        padding: '8px 0',
                                        zIndex: 2000,
                                        cursor: 'default'
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Section 1: Help Center */}
                                    <div className="menu-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px' }}>
                                        <HelpCircle size={18} />
                                        <span>Help Center</span>
                                    </div>
                                    <div style={{ height: '1px', background: '#ebebeb', margin: '4px 0' }}></div>

                                    {/* Section 2: Become a host */}
                                    <div
                                        className="menu-item"
                                        style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                                        onClick={() => {
                                            setIsHostModalOpen(true);
                                            setIsUserMenuOpen(false);
                                        }}
                                    >
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontWeight: 600 }}>Become a host</span>
                                            <span style={{ fontSize: '13px', color: '#717171' }}>It's easy to start hosting and earn extra income.</span>
                                        </div>
                                        <div style={{ opacity: 0.6 }}>
                                            {/* Small person icon as seen in image */}
                                            <UserCircle size={28} />
                                        </div>
                                    </div>

                                    {/* Section 3: Simple Links */}
                                    <Link href="/refer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="menu-item" style={{ padding: '10px 16px' }}>Refer a Host</div>
                                    </Link>
                                    <div className="menu-item" style={{ padding: '10px 16px' }}>Find a co-host</div>
                                    <Link href="/giftcards" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="menu-item" style={{ padding: '10px 16px' }}>Gift cards</div>
                                    </Link>
                                    <div style={{ height: '1px', background: '#ebebeb', margin: '4px 0' }}></div>

                                    {/* Section 4: Auth */}
                                    <Link href="/signup-login" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div
                                            className="menu-item"
                                            style={{ padding: '12px 16px', fontWeight: 600, cursor: 'pointer' }}
                                            onClick={() => setIsUserMenuOpen(false)}
                                        >
                                            Log in or sign up
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Auth Modal (Re-integrated) */}
                <Modal
                    isOpen={isAuthModalOpen}
                    onClose={() => setIsAuthModalOpen(false)}
                    title="Log in or sign up"
                >
                    <div className="auth-modal-content">
                        <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px' }}>Welcome to Airbnb</h3>

                        <div className="input-field">
                            <label style={{ display: 'block', fontSize: '12px', color: '#717171', marginBottom: '4px' }}>Phone number</label>
                            <input
                                type="text"
                                placeholder="Phone number"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #b0b0b0',
                                    borderRadius: '8px',
                                    fontSize: '16px'
                                }}
                            />
                        </div>

                        <p style={{ fontSize: '12px', color: '#222222', marginTop: '8px', marginBottom: '24px' }}>
                            We’ll call or text you to confirm your number. Standard message and data rates apply.
                        </p>

                        <button style={{
                            width: '100%',
                            padding: '14px',
                            background: '#E31C5F',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}>
                            Continue
                        </button>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '24px 0',
                            gap: '16px'
                        }}>
                            <div style={{ flex: 1, height: '1px', background: '#ebebeb' }}></div>
                            <span style={{ fontSize: '12px', color: '#717171' }}>or</span>
                            <div style={{ flex: 1, height: '1px', background: '#ebebeb' }}></div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <SocialBtn icon="Facebook" label="Continue with Facebook" />
                            <SocialBtn icon="Google" label="Continue with Google" />
                            <SocialBtn icon="Apple" label="Continue with Apple" />
                            <SocialBtn icon="Mail" label="Continue with email" />
                        </div>
                    </div>
                </Modal>

                {/* Host Selection Modal */}
                <Modal
                    isOpen={isHostModalOpen}
                    onClose={() => setIsHostModalOpen(false)}
                    title="What would you like to host?"
                    maxWidth="800px"
                    footer={
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button style={{
                                padding: '10px 24px',
                                background: '#dddddd',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontWeight: 600,
                                cursor: 'not-allowed'
                            }}>
                                Next
                            </button>
                        </div>
                    }
                >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', padding: '16px 0' }}>
                        <HostOption
                            icon={<HomeIcon size={48} />}
                            label="Home"
                        />
                        <HostOption
                            icon={<BalloonIcon size={48} />}
                            label="Experience"
                        />
                        <HostOption
                            icon={<ClocheIcon size={48} />}
                            label="Service"
                        />
                    </div>
                </Modal>

                {/* Language Modal */}
                <Modal
                    isOpen={isLanguageModalOpen}
                    onClose={() => setIsLanguageModalOpen(false)}
                    title="Language and currency"
                    maxWidth="1032px"
                >
                    <div className="language-modal-content">
                        <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid #ebebeb', marginBottom: '24px' }}>
                            <button
                                onClick={() => setActiveLanguageTab('language')}
                                style={{
                                    padding: '12px 0',
                                    borderBottom: activeLanguageTab === 'language' ? '2px solid #222222' : '2px solid transparent',
                                    background: 'none',
                                    borderTop: 'none',
                                    borderLeft: 'none',
                                    borderRight: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    color: activeLanguageTab === 'language' ? '#222222' : '#717171'
                                }}
                            >
                                Language and region
                            </button>
                            <button
                                onClick={() => setActiveLanguageTab('currency')}
                                style={{
                                    padding: '12px 0',
                                    borderBottom: activeLanguageTab === 'currency' ? '2px solid #222222' : '2px solid transparent',
                                    background: 'none',
                                    borderTop: 'none',
                                    borderLeft: 'none',
                                    borderRight: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    color: activeLanguageTab === 'currency' ? '#222222' : '#717171'
                                }}
                            >
                                Currency
                            </button>
                        </div>

                        {activeLanguageTab === 'language' ? (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                                {/* ... existing languages ... */}
                                {[
                                    { name: 'English', region: 'United States' },
                                    { name: 'English', region: 'United Kingdom' },
                                    { name: 'English', region: 'India' },
                                    { name: 'English', region: 'Australia' },
                                    { name: 'English', region: 'Canada' },
                                    { name: 'Français', region: 'France' },
                                    { name: 'Français', region: 'Canada' },
                                    { name: 'Français', region: 'Belgique' },
                                    { name: 'Français', region: 'Suisse' },
                                    { name: 'Deutsch', region: 'Deutschland' },
                                    { name: 'Deutsch', region: 'Österreich' },
                                    { name: 'Deutsch', region: 'Schweiz' },
                                    { name: 'Español', region: 'España' },
                                    { name: 'Español', region: 'México' },
                                    { name: 'Español', region: 'Argentina' },
                                    { name: 'Español', region: 'Colombia' },
                                    { name: 'Italiano', region: 'Italia' },
                                    { name: 'Italiano', region: 'Svizzera' },
                                    { name: 'Português', region: 'Brasil' },
                                    { name: 'Português', region: 'Portugal' },
                                    { name: 'Türkçe', region: 'Türkiye' },
                                    { name: 'العربية', region: 'العالم' },
                                    { name: 'العربية', region: 'مصر' },
                                    { name: 'العربية', region: 'السعودية' },
                                    { name: 'العربية', region: 'الإمارات' },
                                    { name: '日本語', region: '日本' },
                                    { name: '한국어', region: '대한민국' },
                                    { name: '中文', region: '简体' },
                                    { name: '中文', region: '繁體' },
                                    { name: '中文', region: '香港' },
                                    { name: 'Русский', region: 'Россия' },
                                    { name: 'Polski', region: 'Polska' },
                                    { name: 'Nederlands', region: 'Nederland' },
                                    { name: 'Nederlands', region: 'België' },
                                    { name: 'Svenska', region: 'Sverige' },
                                    { name: 'Norsk', region: 'Norge' },
                                    { name: 'Dansk', region: 'Danmark' },
                                    { name: 'Suomi', region: 'Suomi' },
                                    { name: 'Tiếng Việt', region: 'Việt Nam' },
                                    { name: 'Tagalog', region: 'Pilipinas' },
                                    { name: 'Melayu', region: 'Malaysia' },
                                    { name: 'Bahasa Indonesia', region: 'Indonesia' },
                                    { name: 'हिन्दी', region: 'भारत' },
                                    { name: 'Bengali', region: 'India' },
                                    { name: 'বাংলা', region: 'বাংলাদেশ' },
                                    { name: 'Magyar', region: 'Magyarország' },
                                    { name: 'Čeština', region: 'Česká republika' },
                                    { name: 'Slovenčina', region: 'Slovensko' },
                                    { name: 'Română', region: 'România' },
                                    { name: 'Ελληνικά', region: 'Ελλάδα' },
                                    { name: 'עברית', region: 'ישראל' },
                                ].map((lang, i) => (
                                    <div key={i} style={{
                                        padding: '12px',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        transition: 'background 0.2s'
                                    }} className="lang-item">
                                        <div style={{ fontSize: '14px', color: '#222222', fontWeight: 500 }}>{lang.name}</div>
                                        <div style={{ fontSize: '14px', color: '#717171' }}>{lang.region}</div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>
                                <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px' }}>Choose a currency</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                                    {[
                                        { name: 'United States dollar', code: 'USD', symbol: '$' },
                                        { name: 'Australian dollar', code: 'AUD', symbol: '$' },
                                        { name: 'Brazilian real', code: 'BRL', symbol: 'R$' },
                                        { name: 'Bulgarian lev', code: 'BGN', symbol: 'лв.' },
                                        { name: 'Canadian dollar', code: 'CAD', symbol: '$' },
                                        { name: 'Chilean peso', code: 'CLP', symbol: '$' },
                                        { name: 'Chinese yuan', code: 'CNY', symbol: '¥' },
                                        { name: 'Colombian peso', code: 'COP', symbol: '$' },
                                        { name: 'Costa Rican colon', code: 'CRC', symbol: '₡' },
                                        { name: 'Czech koruna', code: 'CZK', symbol: 'Kč' },
                                        { name: 'Danish krone', code: 'DKK', symbol: 'kr' },
                                        { name: 'Egyptian pound', code: 'EGP', symbol: 'ج.م' },
                                        { name: 'Emirati dirham', code: 'AED', symbol: 'د.إ' },
                                        { name: 'Euro', code: 'EUR', symbol: '€' },
                                        { name: 'Ghanaian cedi', code: 'GHS', symbol: 'GH₵' },
                                        { name: 'Hong Kong dollar', code: 'HKD', symbol: '$' },
                                        { name: 'Hungarian forint', code: 'HUF', symbol: 'Ft' },
                                        { name: 'Indian rupee', code: 'INR', symbol: '₹' },
                                        { name: 'Indonesian rupiah', code: 'IDR', symbol: 'Rp' },
                                        { name: 'Israeli new shekel', code: 'ILS', symbol: '₪' },
                                        { name: 'Japanese yen', code: 'JPY', symbol: '¥' },
                                        { name: 'Kazakhstani tenge', code: 'KZT', symbol: '₸' },
                                        { name: 'Kenyan shilling', code: 'KES', symbol: 'KSh' },
                                        { name: 'Malaysian ringgit', code: 'MYR', symbol: 'RM' },
                                        { name: 'Mexican peso', code: 'MXN', symbol: '$' },
                                        { name: 'Moroccan dirham', code: 'MAD', symbol: 'د.م.' },
                                        { name: 'New Taiwan dollar', code: 'TWD', symbol: '$' },
                                        { name: 'New Zealand dollar', code: 'NZD', symbol: '$' },
                                        { name: 'Norwegian krone', code: 'NOK', symbol: 'kr' },
                                        { name: 'Peruvian sol', code: 'PEN', symbol: 'S/' },
                                        { name: 'Philippine peso', code: 'PHP', symbol: '₱' },
                                        { name: 'Polish zloty', code: 'PLN', symbol: 'zł' },
                                        { name: 'Pound sterling', code: 'GBP', symbol: '£' },
                                        { name: 'Qatari riyal', code: 'QAR', symbol: 'ر.ق' },
                                        { name: 'Romanian leu', code: 'RON', symbol: 'lei' },
                                    ].map((curr, i) => (
                                        <div key={i} style={{
                                            padding: '12px',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s',
                                            border: curr.code === 'USD' ? '1px solid #222222' : 'none'
                                        }} className="lang-item">
                                            <div style={{ fontSize: '14px', color: '#222222', fontWeight: 500 }}>{curr.name}</div>
                                            <div style={{ fontSize: '14px', color: '#717171' }}>{curr.code} – {curr.symbol}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <style jsx>{`
                        .lang-item:hover, .menu-item:hover {
                            background-color: #f7f7f7;
                        }
                        .menu-item {
                            cursor: pointer;
                            transition: background-color 0.2s;
                            font-size: 14px;
                            color: #222222;
                        }
                    `}</style>
                </Modal>


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

const SocialBtn = ({ icon, label }: { icon: string, label: string }) => (
    <button style={{
        width: '100%',
        padding: '12px',
        background: 'white',
        border: '1px solid #222222',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 600,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    }}>
        <div style={{ position: 'absolute', left: '24px' }}>
            {icon === 'Facebook' && <Facebook size={20} color="#1877F2" />}
            {icon === 'Google' && <svg viewBox="0 0 18 18" width="18" height="18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"></path><path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"></path><path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"></path><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.468 2.01.957 4.962l3.007 2.332c.708-2.127 2.692-3.714 5.036-3.714z" fill="#EA4335"></path></svg>}
            {icon === 'Apple' && <Apple size={20} />}
            {icon === 'Mail' && <Mail size={20} />}
        </div>
        {label}
    </button>
);

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

const HostOption = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div style={{
        border: '1px solid #dddddd',
        borderRadius: '12px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
    }} className="host-option">
        <div style={{ color: '#222222' }}>{icon}</div>
        <span style={{ fontSize: '18px', fontWeight: 600, color: '#222222' }}>{label}</span>
        <style jsx>{`
            .host-option:hover {
                border-color: #222222;
                box-shadow: 0 6px 16px rgba(0,0,0,0.12);
            }
        `}</style>
    </div>
);

export default Header;
