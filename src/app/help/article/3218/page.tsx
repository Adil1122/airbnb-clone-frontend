'use client';

import React from 'react';
import HelpHeader from '@/components/HelpHeader';
import { ChevronRight, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const HelpArticlePage = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', color: '#222222', fontFamily: 'Inter, sans-serif' }}>
            <HelpHeader showSearch={true} />

            <main style={{ maxWidth: '1080px', margin: '0 auto', padding: '32px 24px' }}>
                {/* Breadcrumbs */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: '#717171', fontSize: '14px' }}>
                    <Link href="/help" style={{ color: '#717171', textDecoration: 'none' }} className="breadcrumb-link">Home</Link>
                    <ChevronRight size={14} />
                    <span>All topics</span>
                    <ChevronRight size={14} />
                    <span>Searching and booking</span>
                    <ChevronRight size={14} />
                    <span>Booking places to stay</span>
                    <ChevronRight size={14} />
                    <span>Booking basics</span>
                    <ChevronRight size={14} />
                    <span style={{ color: '#222222' }}>AirCover for guests</span>
                </nav>

                <div style={{ display: 'flex', gap: '80px', position: 'relative' }} className="article-layout">
                    {/* Content */}
                    <article style={{ flex: 1, maxWidth: '640px' }}>
                        <p style={{ color: '#717171', fontSize: '14px', marginBottom: '8px', margin: '0 0 8px 0' }}>Guide • Guest</p>
                        <h1 style={{ fontSize: '48px', fontWeight: 'bold', letterSpacing: '-0.02em', marginBottom: '24px', marginTop: '0' }}>AirCover for guests</h1>

                        {/* Hero Banner */}
                        <div style={{
                            width: '100%',
                            height: '360px',
                            backgroundColor: '#222222',
                            borderRadius: '16px',
                            marginBottom: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '40px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ color: '#FF385C', fontSize: '80px', fontWeight: '900', letterSpacing: '-0.1em' }}>air</span>
                                <span style={{ color: 'white', fontSize: '80px', fontWeight: '900', letterSpacing: '-0.1em' }}>cover</span>
                            </div>
                        </div>

                        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '48px', margin: '0 0 48px 0' }}>
                            Every home booking comes with AirCover for guests. If there’s a serious issue with your Airbnb home that your host can’t resolve, we’re here to help.
                        </p>

                        <section style={{ marginBottom: '48px' }}>
                            <h2 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '24px', marginTop: '0' }}>We’ll help you get rebooked or give you a full or partial refund</h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', margin: '0 0 24px 0' }}>Here’s where we can help:</p>
                            <ul style={{ paddingLeft: '24px', margin: '0 0 32px 0' }}>
                                <li style={{ marginBottom: '12px', fontSize: '16px', lineHeight: '1.5' }}>
                                    If your <span style={{ textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer' }}>home host cancels</span> before check-in
                                </li>
                                <li style={{ marginBottom: '12px', fontSize: '16px', lineHeight: '1.5' }}>
                                    If there’s a problem and <span style={{ textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer' }}>you can’t get in touch with your host</span>
                                </li>
                                <li style={{ marginBottom: '0', fontSize: '16px', lineHeight: '1.5' }}>
                                    If the listing is <span style={{ textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer' }}>significantly different</span> than advertised, and your host can’t resolve the issue
                                </li>
                            </ul>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', margin: '0' }}>
                                Our team can help you find a similar place, considering location and amenities, based on availability at comparable pricing. If a similar place isn’t available or you’d prefer not to rebook, we’ll give you a full or partial refund, including service fees.
                            </p>
                        </section>

                        <section style={{ marginBottom: '48px' }}>
                            <h2 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '24px', marginTop: '0' }}>How AirCover for guests works</h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', margin: '0 0 24px 0' }}>
                                AirCover for guests provides support for serious issues with your home booking, for example:
                            </p>
                            <ul style={{ paddingLeft: '24px', margin: '0 0 32px 0' }}>
                                <li style={{ marginBottom: '12px', fontSize: '16px', lineHeight: '1.5' }}>Host cancels your reservation prior to check-in</li>
                                <li style={{ marginBottom: '12px', fontSize: '16px', lineHeight: '1.5' }}>The heating is not working in winter</li>
                                <li style={{ marginBottom: '12px', fontSize: '16px', lineHeight: '1.5' }}>The listing has fewer bedrooms than listed</li>
                                <li style={{ marginBottom: '12px', fontSize: '16px', lineHeight: '1.5' }}>It’s a different type of home—a private room instead of an entire home</li>
                                <li style={{ marginBottom: '0', fontSize: '16px', lineHeight: '1.5' }}>A major advertised amenity, such as a pool or kitchen, is missing</li>
                            </ul>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', margin: '0' }}>
                                AirCover for guests doesn’t include more minor inconveniences, like a broken toaster.
                            </p>
                        </section>

                        <section style={{ marginBottom: '80px' }}>
                            <h2 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '24px', marginTop: '0' }}>Resolving issues during your stay</h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', margin: '0' }}>
                                Your host is your best point of contact to reach out to if anything comes up. You can...
                            </p>
                        </section>
                    </article>

                    {/* Sidebar */}
                    <aside style={{ width: '320px', position: 'sticky', top: '112px', height: 'fit-content' }} className="article-sidebar">
                        <div style={{
                            border: '1px solid #DDDDDD',
                            borderRadius: '16px',
                            padding: '24px',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
                        }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '24px', marginTop: '0', lineHeight: '1.4' }}>
                                Get help with your reservations, account, and more.
                            </h3>
                            <button style={{
                                width: '100%',
                                backgroundColor: '#FF385C',
                                color: 'white',
                                padding: '14px',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease'
                            }} className="hover:bg-[#E31C5F]">
                                Log in or sign up
                            </button>
                        </div>
                    </aside>
                </div>

                {/* Back to top button */}
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '32px',
                        right: '32px',
                        backgroundColor: '#222222',
                        color: 'white',
                        padding: '12px 20px',
                        borderRadius: '32px',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        zIndex: 1000
                    }}
                    className="back-to-top-btn"
                >
                    <ArrowUp size={16} strokeWidth={3} /> Back to top
                </button>
            </main>

            <style jsx>{`
                .breadcrumb-link:hover { text-decoration: underline !important; }
                .hover\:bg-\[\#E31C5F\]:hover { background-color: #E31C5F !important; }
                .back-to-top-btn:hover { background-color: #000000 !important; }
                
                @media (max-width: 900px) {
                    .article-layout {
                        flex-direction: column !important;
                    }
                    .article-sidebar {
                        width: 100% !important;
                        position: static !important;
                        order: -1 !important;
                        margin-bottom: 40px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default HelpArticlePage;
