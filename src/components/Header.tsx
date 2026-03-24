'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Search, Globe, Menu, UserCircle, Command, Facebook, Apple, Mail, HelpCircle, MapPin, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import Modal from './Modal';

const HeaderContent: React.FC = () => {
    const [isHostModalOpen, setIsHostModalOpen] = useState(false);
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [activeLanguageTab, setActiveLanguageTab] = useState<'language' | 'currency'>('language');
    const [isWhereDropdownOpen, setIsWhereDropdownOpen] = useState(false);
    const [isWhenDropdownOpen, setIsWhenDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const menuRef = useRef<HTMLDivElement>(null);
    const whereDropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isSearchPage = pathname === '/search';
    const activeTab = searchParams.get('tab') || 'homes';

    useEffect(() => {
        const handleOpenAuth = () => setIsAuthModalOpen(true);
        window.addEventListener('open-auth-modal', handleOpenAuth);

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsUserMenuOpen(false);
            }
            if (whereDropdownRef.current && !whereDropdownRef.current.contains(event.target as Node)) {
                setIsWhereDropdownOpen(false);
                setIsWhenDropdownOpen(false);
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
                    {!isSearchPage && (
                        <div className="nav-tabs desktop-only" style={{ display: 'flex', gap: '24px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                            <Link href="/" style={{ textDecoration: 'none' }}>
                                <div className="nav-tab" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', borderBottom: activeTab === 'homes' ? '2px solid #222222' : '2px solid transparent' }}>
                                    <span style={{ color: activeTab === 'homes' ? '#222222' : '#717171', fontSize: '16px', fontWeight: activeTab === 'homes' ? 600 : 400 }}>Homes</span>
                                </div>
                            </Link>
                            <Link href="/?tab=experiences" style={{ textDecoration: 'none' }}>
                                <div className="nav-tab" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', borderBottom: activeTab === 'experiences' ? '2px solid #222222' : '2px solid transparent' }}>
                                    <span style={{ color: activeTab === 'experiences' ? '#222222' : '#717171', fontSize: '16px', fontWeight: activeTab === 'experiences' ? 600 : 400 }}>Experiences</span>
                                </div>
                            </Link>
                            <Link href="/?tab=services" style={{ textDecoration: 'none' }}>
                                <div className="nav-tab" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', borderBottom: activeTab === 'services' ? '2px solid #222222' : '2px solid transparent' }}>
                                    <span style={{ color: activeTab === 'services' ? '#222222' : '#717171', fontSize: '16px', fontWeight: activeTab === 'services' ? 600 : 400 }}>Services</span>
                                </div>
                            </Link>
                        </div>
                    )}

                    {isSearchPage && (
                        <div style={{ display: 'flex', gap: '16px', position: 'absolute', left: '50%', transform: 'translateX(-50%)', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '8px', border: '1px solid #DDDDDD', borderRadius: '40px', padding: '8px 8px', boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)', backgroundColor: 'white', alignItems: 'center', height: '48px', transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
                                <button style={{ border: 'none', background: 'none', fontWeight: 600, fontSize: '14px', padding: '0 16px', cursor: 'pointer', borderRight: '1px solid #DDDDDD' }}>Homes nearby</button>
                                <button style={{ border: 'none', background: 'none', fontWeight: 600, fontSize: '14px', padding: '0 16px', cursor: 'pointer', borderRight: '1px solid #DDDDDD' }}>Any week</button>
                                <button style={{ border: 'none', background: 'none', color: '#717171', fontSize: '14px', padding: '0 16px', cursor: 'pointer' }}>Add guests</button>
                                <button style={{ background: '#FF385C', border: 'none', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginLeft: '4px' }}>
                                    <Search size={14} strokeWidth={3} />
                                </button>
                            </div>
                            <button style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '10px 16px', border: '1px solid #DDDDDD', borderRadius: '24px', background: 'white', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '14px', width: '14px', fill: 'currentColor' }}><path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                                Filters
                            </button>
                        </div>
                    )}

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
                                    <Link href="/help" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <div className="menu-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px' }}>
                                            <HelpCircle size={18} />
                                            <span>Help Center</span>
                                        </div>
                                    </Link>

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
                {!isSearchPage && (
                    <div className="search-container">
                        <div className="search-bar-full" ref={whereDropdownRef} style={{ position: 'relative' }}>
                            <div
                                className="search-item"
                                onClick={() => { setIsWhereDropdownOpen(true); setIsWhenDropdownOpen(false); }}
                                style={{ cursor: 'pointer' }}
                            >
                                <span className="search-label">Where</span>
                                <input
                                    type="text"
                                    className="search-value"
                                    placeholder="Search destinations"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => setIsWhereDropdownOpen(true)}
                                    style={{
                                        fontSize: '14px',
                                        border: 'none',
                                        outline: 'none',
                                        background: 'transparent',
                                        width: '180px',
                                        color: '#222222'
                                    }}
                                />
                            </div>
                            <div className="search-divider desktop-only"></div>
                            <div
                                className="search-item desktop-only"
                                onClick={() => { setIsWhenDropdownOpen(true); setIsWhereDropdownOpen(false); }}
                                style={{ cursor: 'pointer' }}
                            >
                                <span className="search-label">When</span>
                                <span className="search-value">Add dates</span>
                            </div>
                            <div className="search-divider desktop-only"></div>
                            <div className="search-item desktop-only">
                                <span className="search-label">Who</span>
                                <span className="search-value">Add guests</span>
                            </div>
                            <Link href="/search" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                <button className="search-btn-red">
                                    <Search size={18} strokeWidth={2.5} />
                                </button>
                            </Link>

                            {/* Where Dropdown */}
                            {isWhereDropdownOpen && (
                                <div style={{
                                    position: 'absolute',
                                    top: '70px',
                                    left: '0',
                                    width: '430px',
                                    backgroundColor: 'white',
                                    borderRadius: '32px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                    padding: '16px',
                                    zIndex: 1000,
                                    maxHeight: '480px',
                                    overflowY: 'auto'
                                }}>
                                    <WhereDropdown searchQuery={searchQuery} onClose={() => setIsWhereDropdownOpen(false)} />
                                </div>
                            )}

                            {/* When Dropdown */}
                            {isWhenDropdownOpen && (
                                <div style={{
                                    position: 'absolute',
                                    top: '70px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'white',
                                    borderRadius: '32px',
                                    boxShadow: '0 8px 28px rgba(0,0,0,0.15)',
                                    zIndex: 1000,
                                }}>
                                    <WhenDropdown onClose={() => setIsWhenDropdownOpen(false)} />
                                </div>
                            )}
                        </div>
                    </div>
                )}
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

interface Destination {
    id: string;
    name: string;
    region: string;
    imageUrl: string;
    type: 'region' | 'city';
}

const SUGGESTED_DESTINATIONS: Destination[] = [
    { id: '1', name: 'Bangkok', region: 'Thailand', imageUrl: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=100&q=80', type: 'city' },
    { id: '2', name: 'Phuket', region: 'Thailand', imageUrl: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=100&q=80', type: 'city' },
    { id: '3', name: 'Chiang Mai', region: 'Thailand', imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=100&q=80', type: 'city' },
    { id: '4', name: 'Dubai', region: 'United Arab Emirates', imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=100&q=80', type: 'city' },
    { id: '5', name: 'Paris', region: 'France', imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=100&q=80', type: 'city' },
    { id: '6', name: 'New York', region: 'United States', imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=100&q=80', type: 'city' },
    { id: '7', name: 'Tokyo', region: 'Japan', imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=100&q=80', type: 'city' },
    { id: '8', name: 'London', region: 'United Kingdom', imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=100&q=80', type: 'city' },
    { id: '9', name: 'Barcelona', region: 'Spain', imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=100&q=80', type: 'city' },
    { id: '10', name: 'Bali', region: 'Indonesia', imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=100&q=80', type: 'city' },
];

const REGIONS: Destination[] = [
    { id: 'r1', name: "I'm flexible", region: '', imageUrl: '', type: 'region' },
    { id: 'r2', name: 'Europe', region: '', imageUrl: '', type: 'region' },
    { id: 'r3', name: 'Southeast Asia', region: '', imageUrl: '', type: 'region' },
    { id: 'r4', name: 'United States', region: '', imageUrl: '', type: 'region' },
    { id: 'r5', name: 'Middle East', region: '', imageUrl: '', type: 'region' },
    { id: 'r6', name: 'Asia Pacific', region: '', imageUrl: '', type: 'region' },
];

const WhereDropdown = ({ searchQuery, onClose }: { searchQuery: string; onClose: () => void }) => {
    const router = require('next/navigation').useRouter();

    const filteredDestinations = searchQuery.length > 0
        ? SUGGESTED_DESTINATIONS.filter(d =>
            d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            d.region.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : SUGGESTED_DESTINATIONS.slice(0, 6);

    const handleSelect = (destination: Destination) => {
        onClose();
        router.push(`/search?location=${encodeURIComponent(destination.name)}`);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {searchQuery.length === 0 && (
                <>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {REGIONS.map(region => (
                            <button
                                key={region.id}
                                onClick={() => handleSelect(region)}
                                style={{
                                    padding: '8px 14px',
                                    borderRadius: '20px',
                                    border: '1px solid #DDDDDD',
                                    backgroundColor: 'white',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    transition: 'all 0.2s'
                                }}
                                className="region-btn"
                            >
                                <MapPin size={12} />
                                {region.name}
                            </button>
                        ))}
                    </div>
                    <div style={{ height: '1px', backgroundColor: '#EBEBEB', margin: '4px 0' }} />
                </>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <p style={{ fontSize: '12px', fontWeight: 600, color: '#717171', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {searchQuery.length > 0 ? 'Destinations' : 'Popular destinations'}
                </p>

                {filteredDestinations.length > 0 ? (
                    filteredDestinations.map(destination => (
                        <div
                            key={destination.id}
                            onClick={() => handleSelect(destination)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                padding: '10px 12px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'background 0.2s'
                            }}
                            className="destination-item"
                        >
                            {destination.imageUrl && (
                                <img
                                    src={destination.imageUrl}
                                    alt={destination.name}
                                    style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '10px',
                                        objectFit: 'cover'
                                    }}
                                />
                            )}
                            {!destination.imageUrl && (
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '10px',
                                    backgroundColor: '#F7F7F7',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <MapPin size={20} color="#717171" />
                                </div>
                            )}
                            <div>
                                <p style={{ fontSize: '15px', fontWeight: 600, color: '#222222', margin: 0 }}>{destination.name}</p>
                                <p style={{ fontSize: '13px', color: '#717171', margin: '2px 0 0 0' }}>{destination.region}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{ padding: '20px', textAlign: 'center', color: '#717171', fontSize: '14px' }}>
                        No destinations found for "{searchQuery}"
                    </div>
                )}
            </div>

            <style jsx>{`
                .destination-item:hover {
                    background-color: #F7F7F7;
                }
                .region-btn:hover {
                    border-color: #222222;
                }
            `}</style>
        </div>
    );
};

const WhenDropdown = ({ onClose }: { onClose: () => void }) => {
    const [activeTab, setActiveTab] = useState<'dates' | 'months' | 'flexible'>('flexible');
    const [duration, setDuration] = useState<'weekend' | 'week' | 'month'>('week');

    return (
        <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '850px' }}>
            {/* Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                <div style={{ background: '#EBEBEB', borderRadius: '32px', display: 'flex', padding: '4px' }}>
                    <button
                        onClick={() => setActiveTab('dates')}
                        style={{ background: activeTab === 'dates' ? 'white' : 'transparent', borderRadius: '24px', padding: '8px 24px', border: activeTab === 'dates' ? '1px solid #DDDDDD' : '1px solid transparent', boxShadow: activeTab === 'dates' ? '0 1px 2px rgba(0,0,0,0.08)' : 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer', color: '#222222' }}
                    >Dates</button>
                    <button
                        onClick={() => setActiveTab('months')}
                        style={{ background: activeTab === 'months' ? 'white' : 'transparent', border: activeTab === 'months' ? '1px solid #DDDDDD' : '1px solid transparent', boxShadow: activeTab === 'months' ? '0 1px 2px rgba(0,0,0,0.08)' : 'none', borderRadius: '24px', padding: '8px 24px', fontWeight: 600, fontSize: '14px', color: '#222222', cursor: 'pointer' }}
                    >Months</button>
                    <button
                        onClick={() => setActiveTab('flexible')}
                        style={{ background: activeTab === 'flexible' ? 'white' : 'transparent', border: activeTab === 'flexible' ? '1px solid #DDDDDD' : '1px solid transparent', boxShadow: activeTab === 'flexible' ? '0 1px 2px rgba(0,0,0,0.08)' : 'none', borderRadius: '24px', padding: '8px 24px', fontWeight: 600, fontSize: '14px', color: '#222222', cursor: 'pointer' }}
                    >Flexible</button>
                </div>
            </div>

            {/* Dates Content */}
            <div style={{ display: activeTab === 'dates' ? 'block' : 'none' }}>
                {/* Calendars */}
                <div style={{ display: 'flex', gap: '48px', justifyContent: 'center', marginBottom: '24px', padding: '0 16px' }}>
                    {/* Left Calendar : March 2026 */}
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', marginBottom: '24px', alignItems: 'center' }}>
                            <button style={{ position: 'absolute', left: 0, background: 'transparent', border: 'none', cursor: 'not-allowed', color: '#DDDDDD', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentColor' }}><path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </button>
                            <strong style={{ fontSize: '16px', fontWeight: 600, color: '#222222' }}>March 2026</strong>
                        </div>
                        {/* Days of week */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: '16px' }}>
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                                <div key={i} style={{ fontSize: '12px', color: '#717171', fontWeight: 600 }}>{d}</div>
                            ))}
                        </div>
                        {/* Days grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', gap: '2px' }}>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                                <div key={`mar-${day}`} style={{
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: day >= 24 ? 600 : 400,
                                    color: day >= 24 ? '#222222' : '#DDDDDD',
                                    cursor: day >= 24 ? 'pointer' : 'default',
                                    borderRadius: '50%'
                                }}
                                    className={day >= 24 ? 'calendar-day' : ''}>
                                    {day}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Calendar : April 2026 */}
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', marginBottom: '24px', alignItems: 'center' }}>
                            <strong style={{ fontSize: '16px', fontWeight: 600, color: '#222222' }}>April 2026</strong>
                            <button style={{ position: 'absolute', right: 0, background: 'transparent', border: 'none', cursor: 'pointer', color: '#222222', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentColor' }}><path d="M12 4l11.3 11.3a1 1 0 0 1 0 1.4L12 28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </button>
                        </div>
                        {/* Days of week */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: '16px' }}>
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                                <div key={i} style={{ fontSize: '12px', color: '#717171', fontWeight: 600 }}>{d}</div>
                            ))}
                        </div>
                        {/* Days grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', gap: '2px' }}>
                            {/* Empty cells for April (Starts on Wednesday) */}
                            <div style={{ height: '48px' }}></div>
                            <div style={{ height: '48px' }}></div>
                            <div style={{ height: '48px' }}></div>
                            {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
                                <div key={`apr-${day}`} style={{
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: '#222222',
                                    cursor: 'pointer',
                                    borderRadius: '50%'
                                }}
                                    className="calendar-day">
                                    {day}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Options / Pills */}
                <div style={{ display: 'flex', gap: '12px', alignSelf: 'flex-start' }}>
                    <button style={{ padding: '8px 16px', borderRadius: '32px', border: '1px solid #222222', background: 'white', color: '#222222', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Exact dates</button>
                    <button style={{ padding: '8px 16px', borderRadius: '32px', border: '1px solid #DDDDDD', background: 'white', color: '#222222', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>± 1 day</button>
                    <button style={{ padding: '8px 16px', borderRadius: '32px', border: '1px solid #DDDDDD', background: 'white', color: '#222222', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>± 2 days</button>
                    <button style={{ padding: '8px 16px', borderRadius: '32px', border: '1px solid #DDDDDD', background: 'white', color: '#222222', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>± 3 days</button>
                    <button style={{ padding: '8px 16px', borderRadius: '32px', border: '1px solid #DDDDDD', background: 'white', color: '#222222', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>± 7 days</button>
                    <button style={{ padding: '8px 16px', borderRadius: '32px', border: '1px solid #DDDDDD', background: 'white', color: '#222222', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>± 14 days</button>
                </div>
            </div>

            {/* Months Content */}
            {activeTab === 'months' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: 600, color: '#222222', margin: '0 0 32px 0' }}>When's your trip?</h2>

                    {/* Circular UI */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
                        <svg width="320" height="320" viewBox="0 0 320 320">
                            <defs>
                                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="16" result="blur" />
                                    <feComponentTransfer in="blur" result="glow">
                                        <feFuncA type="linear" slope="0.8" />
                                    </feComponentTransfer>
                                    <feMerge>
                                        <feMergeNode in="glow" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#ff385c" />
                                    <stop offset="100%" stopColor="#d70566" />
                                </linearGradient>
                                <filter id="shadow">
                                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1" />
                                </filter>
                                <filter id="shadowHandle">
                                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.25" />
                                </filter>
                            </defs>

                            {/* Outer ring shadow */}
                            <circle cx="160" cy="160" r="100" fill="none" stroke="#f0f0f0" strokeWidth="56" filter="url(#shadow)" />

                            {/* Background Ring */}
                            <circle cx="160" cy="160" r="100" fill="none" stroke="#f7f7f7" strokeWidth="56" />

                            {/* 12 dots */}
                            {Array.from({ length: 12 }).map((_, i) => {
                                const angle = (i * 30 - 90) * (Math.PI / 180);
                                const cx = 160 + 100 * Math.cos(angle);
                                const cy = 160 + 100 * Math.sin(angle);
                                return <circle key={i} cx={cx} cy={cy} r="2.5" fill="#c0c0c0" />;
                            })}

                            {/* Inner white circle shadow */}
                            <circle cx="160" cy="160" r="68" fill="#ffffff" filter="url(#shadow)" />

                            {/* Red Arc outer glow */}
                            <path d="M 160 60 A 100 100 0 0 1 246.60 210" fill="none" stroke="#ff385c" strokeWidth="56" strokeLinecap="butt" filter="url(#glow)" opacity="0.4" />

                            {/* Red solid Arc */}
                            <path d="M 160 60 A 100 100 0 0 1 246.60 210" fill="none" stroke="url(#redGrad)" strokeWidth="56" strokeLinecap="butt" />

                            {/* White handle */}
                            <circle cx="246.60" cy="210" r="14.5" fill="#ffffff" filter="url(#shadowHandle)" />

                            {/* Text inside the white circle */}
                            <circle cx="160" cy="160" r="68" fill="#ffffff" />
                            <text x="160" y="150" textAnchor="middle" dominantBaseline="middle" alignmentBaseline="middle" fontSize="72" fontWeight="800" fill="#222222" letterSpacing="-2" style={{ fontFamily: 'inherit' }}>4</text>
                            <text x="160" y="195" textAnchor="middle" dominantBaseline="middle" alignmentBaseline="middle" fontSize="16" fontWeight="600" fill="#222222" style={{ fontFamily: 'inherit' }}>months</text>
                        </svg>
                    </div>

                    {/* Bottom Selected Dates */}
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '15px', color: '#222222' }}>
                        <span style={{ borderBottom: '1px solid #222222', fontWeight: 600, paddingBottom: '2px' }}>Wed, Apr 1</span>
                        <span style={{ margin: '0 4px' }}>to</span>
                        <span style={{ borderBottom: '1px solid #222222', fontWeight: 600, paddingBottom: '2px' }}>Sat, Aug 1</span>
                    </div>
                </div>
            )}

            {/* Flexible Content */}
            {activeTab === 'flexible' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '0 16px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#222222', margin: '0 0 24px 0' }}>How long would you like to stay?</h3>

                    {/* Duration Options */}
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
                        {['Weekend', 'Week', 'Month'].map((opt) => (
                            <button
                                key={opt}
                                onClick={() => setDuration(opt.toLowerCase() as any)}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: '24px',
                                    border: duration === opt.toLowerCase() ? '2px solid #222222' : '1px solid #DDDDDD',
                                    background: duration === opt.toLowerCase() ? '#F7F7F7' : 'white',
                                    color: '#222222',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#222222', margin: '0 0 24px 0' }}>Go anytime</h3>

                    {/* Month Cards Row */}
                    <div style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
                        <div style={{ display: 'flex', gap: '12px', overflowX: 'hidden', padding: '4px' }}>
                            {[
                                { name: 'April', year: '2026' },
                                { name: 'May', year: '2026' },
                                { name: 'June', year: '2026' },
                                { name: 'July', year: '2026' },
                                { name: 'August', year: '2026' },
                                { name: 'September', year: '2026' },
                            ].map((month, i) => (
                                <div
                                    key={i}
                                    style={{
                                        minWidth: '120px',
                                        flex: '1',
                                        aspectRatio: '1',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid #DDDDDD',
                                        borderRadius: '16px',
                                        padding: '16px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        backgroundColor: 'white'
                                    }}
                                    className="month-card"
                                >
                                    <Calendar size={32} strokeWidth={1} style={{ marginBottom: '12px', color: '#222222' }} />
                                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#222222' }}>{month.name}</span>
                                    <span style={{ fontSize: '12px', color: '#717171' }}>{month.year}</span>
                                </div>
                            ))}
                        </div>

                        {/* Scroll Button */}
                        <button style={{
                            position: 'absolute',
                            right: '-16px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: 'white',
                            border: '1px solid #DDDDDD',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            zIndex: 10
                        }}>
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                .calendar-day {
                    transition: border 0.1s;
                    border: 1px solid transparent;
                }
                .calendar-day:hover {
                    border-color: #222222;
                }
                .month-card:hover {
                    border-color: #222222;
                    box-shadow: 0 0 0 1px #222222;
                }
            `}</style>
        </div>
    );
};

const Header: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <HeaderContent />
        </Suspense>
    );
};

export default Header;
