'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

const HostHomesPage = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', color: '#222222', fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif' }}>
            <header style={{
                padding: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10
            }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: '#FF385C' }}>
                        <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.636l-.261.015-.231.003c-3.447 0-6.356-2.416-6.356-6.478 0-.102.002-.234.004-.325l.006-.217c.05-.924.293-1.805.96-3.396l.144-.354c.987-2.297 5.147-11.007 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.234 0-2.056.565-3.037 2.308l-.508.985c-2.01 3.94-6.196 12.72-7.14 14.966l-.142.348c-.54 1.291-.72 1.954-.761 2.651l-.01.222c0 2.924 2.112 4.478 4.356 4.478 1.621 0 3.514-1.127 5.488-3.18l.8-.883.8.883c1.974 2.053 3.867 3.18 5.488 3.18 2.245 0 4.357-1.554 4.357-4.478 0-.083-.001-.19-.003-.277l-.008-.223c-.04-.697-.221-1.36-.76-1.651l-.142-.348c-.945-2.246-5.131-11.026-7.14-14.966l-.508-.985C18.056 3.565 17.234 3 16 3zm0 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                    </svg>
                    <span style={{ color: '#FF385C', fontSize: '18px', fontWeight: 800, letterSpacing: '-0.5px' }}>airbnb</span>
                </Link>
                <Link href="/become-a-host" style={{
                    backgroundColor: '#FF385C',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '24px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    fontSize: '14px'
                }}>
                    Get started
                </Link>
            </header>

            <main style={{ paddingTop: 0 }}>
                <section style={{
                    textAlign: 'center',
                    padding: '180px 24px 80px 24px',
                    background: 'linear-gradient(180deg, #FFFBFA 0%, #FFFFFF 100%)'
                }}>
                    <h1 style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-0.02em', maxWidth: '800px', margin: '0 auto 24px auto' }}>
                        Host your home on Airbnb
                    </h1>
                    <p style={{ fontSize: '20px', color: '#717171', fontWeight: '400', maxWidth: '600px', margin: '0 auto' }}>
                        Join millions of hosts on Airbnb
                    </p>
                </section>

                <div style={{ padding: '0 24px 96px 24px', maxWidth: '1760px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '32px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        <FeatureCard
                            icon={
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style={{ width: '48px', height: '48px' }}>
                                    <path fill="#222222" d="M24 4L4 16v24h16V26h8v14h16V16L24 4z"/>
                                </svg>
                            }
                            title="It's easy"
                            description="Create a listing in just a few steps, and get 1-1 support from experienced hosts at any time."
                        />
                        <FeatureCard
                            icon={
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style={{ width: '48px', height: '48px' }}>
                                    <path fill="#222222" d="M24 4c-7.73 0-14 11.2-14 20 0 6.63 3.36 11.85 8 14.92V44l6.67-3.2V39.6c4.64-3.16 8-8.3 8-15.6C38 15.2 31.73 4 24 4zm-4 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                                </svg>
                            }
                            title="It's worth it"
                            description="Getting started is free. You set your price, and we only collect a fee after you've gotten paid."
                        />
                        <FeatureCard
                            icon={
                                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style={{ width: '48px', height: '48px' }}>
                                    <path fill="#222222" d="M24 2L4 14.27v19.46l20 9.08 20-9.08V14.27L24 2zm0 4.97l14 6.36v15.34l-14 6.36-14-6.36V17.33l14-6.36z"/>
                                </svg>
                            }
                            title="You're protected"
                            description="Peace of mind for your home and belongings every time you host on Airbnb."
                        />
                    </div>
                </div>

                <section style={{ padding: '80px 24px', backgroundColor: '#F7F7F7' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '16px' }}>A co-host can help you get started</h2>
                        <p style={{ fontSize: '18px', color: '#717171', marginBottom: '48px' }}>
                            Now you can hire a local co‑host to help create your listing, get your space ready, and more.
                        </p>
                        <Link href="/host/co-hosts" style={{
                            display: 'inline-block',
                            backgroundColor: '#222222',
                            color: 'white',
                            padding: '14px 28px',
                            borderRadius: '12px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            fontSize: '16px'
                        }}>
                            Find a co-host
                        </Link>
                    </div>
                </section>

                <section style={{ padding: '96px 24px', backgroundColor: '#222222', color: 'white' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px' }}>When you host, you're protected</h2>
                                <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.9 }}>
                                    Top-to-bottom protection, included every time you host.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <Check size={24} color="#FF385C" />
                                        <span style={{ fontSize: '16px' }}>Up to $3M damage protection</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <Check size={24} color="#FF385C" />
                                        <span style={{ fontSize: '16px' }}>Up to $1M liability insurance</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <Check size={24} color="#FF385C" />
                                        <span style={{ fontSize: '16px' }}>24-hour safety line</span>
                                    </div>
                                </div>
                                <Link href="/aircover-for-hosts" style={{
                                    display: 'inline-block',
                                    color: 'white',
                                    textDecoration: 'underline',
                                    fontSize: '16px'
                                }}>
                                    Learn about AirCover
                                </Link>
                            </div>
                            <div>
                                <div style={{
                                    backgroundColor: '#333333',
                                    borderRadius: '16px',
                                    padding: '32px'
                                }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: 'white' }}>Additional safeguards</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <li style={{ display: 'flex', gap: '12px', fontSize: '16px', color: 'white' }}>
                                            <span style={{ color: '#FF385C' }}>✓</span>
                                            <span>Guest identity verification</span>
                                        </li>
                                        <li style={{ display: 'flex', gap: '12px', fontSize: '16px', color: 'white' }}>
                                            <span style={{ color: '#FF385C' }}>✓</span>
                                            <span>Profiles & reviews</span>
                                        </li>
                                        <li style={{ display: 'flex', gap: '12px', fontSize: '16px', color: 'white' }}>
                                            <span style={{ color: '#FF385C' }}>✓</span>
                                            <span>$3M damage protection</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ padding: '96px 24px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px' }}>Your questions, answered</h2>
                        <div style={{ textAlign: 'left', marginTop: '48px' }}>
                            <Accordion title="Is my place right for Airbnb?">
                                <p>Airbnb guests are interested in all kinds of places––spare rooms, apartments, houses, vacation homes, even treehouses.</p>
                            </Accordion>
                            <Accordion title="How do I get my place ready for guests?">
                                <p>Make sure everything is clean, clutter-free, and working properly. Items like fresh linens and stocked toiletries help create a comfortable and inviting space to stay.</p>
                            </Accordion>
                            <Accordion title="Do I have to host all the time?">
                                <p>Nope—you control your calendar. You can host once a year, a few nights a month, or more often.</p>
                            </Accordion>
                            <Accordion title="What are Airbnb's fees?">
                                <p>It&apos;s free to create a listing, and Airbnb typically collects a service fee of 3% of the reservation subtotal once you get paid.</p>
                            </Accordion>
                            <Accordion title="How do I get started?">
                                <p>You can create a listing in just a few steps, all at your own pace. Start by telling us about your home, take some photos, and add details about what makes it unique.</p>
                            </Accordion>
                            <Accordion title="How am I protected when I host?">
                                <p>AirCover for Hosts provides top-to-bottom protection every time you host your home on Airbnb.</p>
                            </Accordion>
                            <Accordion title="Are there any regulations that apply in my city?">
                                <p>Some areas have laws and regulations for hosting your home. It&apos;s important to familiarize yourself with any laws that may apply to your location.</p>
                            </Accordion>
                        </div>
                    </div>
                </section>

                <section style={{ padding: '64px 24px', backgroundColor: '#F7F7F7', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '16px' }}>Still have questions?</h2>
                    <p style={{ fontSize: '18px', color: '#717171', marginBottom: '32px' }}>
                        Get answers from an experienced local host.
                    </p>
                    <Link href="/askasuperhost" style={{
                        display: 'inline-block',
                        backgroundColor: '#222222',
                        color: 'white',
                        padding: '14px 28px',
                        borderRadius: '12px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        fontSize: '16px'
                    }}>
                        Ask a host
                    </Link>
                </section>

                <section style={{ padding: '80px 24px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px' }}>Ready to get started?</h2>
                    <Link href="/become-a-host" style={{
                        display: 'inline-block',
                        backgroundColor: '#FF385C',
                        color: 'white',
                        padding: '16px 32px',
                        borderRadius: '12px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        fontSize: '18px'
                    }}>
                        Create your listing
                    </Link>
                </section>
            </main>

            <footer style={{ padding: '48px 24px', borderTop: '1px solid #EBEBEB' }}>
                <div style={{ maxWidth: '1760px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#717171' }}>
                        <span>© 2026 Prime Marketplace, Inc.</span>
                        <a href="#" style={{ color: '#717171', textDecoration: 'none' }}>Privacy</a>
                        <a href="#" style={{ color: '#717171', textDecoration: 'none' }}>Terms</a>
                        <a href="#" style={{ color: '#717171', textDecoration: 'none' }}>Sitemap</a>
                    </div>
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <a href="#" style={{ color: '#222222', textDecoration: 'none', fontSize: '14px' }}>English (US)</a>
                        <a href="#" style={{ color: '#222222', textDecoration: 'none', fontSize: '14px' }}>$ USD</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div style={{ textAlign: 'center', padding: '24px' }}>
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center', color: '#222222' }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>{title}</h3>
        <p style={{ fontSize: '16px', color: '#717171', lineHeight: '1.5' }}>{description}</p>
    </div>
);

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{ borderBottom: '1px solid #EBEBEB' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '24px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#222222'
                }}
            >
                {title}
                {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
            {isOpen && (
                <div style={{ paddingBottom: '24px', color: '#717171', fontSize: '16px', lineHeight: '1.6' }}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default HostHomesPage;
