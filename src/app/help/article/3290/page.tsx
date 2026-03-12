'use client';

import React from 'react';
import HelpHeader from '@/components/HelpHeader';
import { ChevronRight, ArrowUp, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const HelpArticlePage = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', color: '#222222', fontFamily: 'Inter, sans-serif' }}>
            <HelpHeader showSearch={true} />

            <main style={{ maxWidth: '1080px', margin: '0 auto', padding: '32px 24px' }}>
                <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', color: '#717171', fontSize: '14px' }}>
                    <Link href="/help" style={{ color: '#717171', textDecoration: 'none' }} className="breadcrumb-link">Home</Link>
                    <ChevronRight size={14} />
                    <Link href="/help/all-topics" style={{ color: '#717171', textDecoration: 'none' }} className="breadcrumb-link">All topics</Link>
                    <ChevronRight size={14} />
                    <Link href="/help/topic/1398" style={{ color: '#717171', textDecoration: 'none' }} className="breadcrumb-link">Safety</Link>
                    <ChevronRight size={14} />
                    <Link href="/help/topic/1397" style={{ color: '#717171', textDecoration: 'none' }} className="breadcrumb-link">Reporting issues</Link>
                    <ChevronRight size={14} />
                    <span style={{ color: '#222222' }}>Neighborhood Support</span>
                </nav>

                <div style={{ display: 'flex', gap: '80px', position: 'relative' }} className="article-layout">
                    <article style={{ flex: 1, maxWidth: '640px' }}>
                        <p style={{ color: '#717171', fontSize: '14px', marginBottom: '8px', margin: '0 0 8px 0' }}>How-to</p>
                        <h1 style={{ fontSize: '48px', fontWeight: 'bold', letterSpacing: '-0.02em', marginBottom: '24px', marginTop: '0' }}>Neighborhood Support</h1>

                        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', margin: '0 0 24px 0' }}>
                            You can report a party, noise complaint, or neighborhood concern here.
                        </p>

                        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px', margin: '0 0 32px 0' }}>
                            For help with a reservation, hosting, or your account, <Link href="/help/contact-us" style={{ color: '#222222', textDecoration: 'underline' }} className="article-link">contact Airbnb Support</Link>—our Neighborhood Support team is only available to help with concerns related to home sharing in your community.
                        </p>

                        <div style={{
                            backgroundColor: '#F6F3E8',
                            border: '1px solid #E7DBA9',
                            borderRadius: '12px',
                            padding: '20px',
                            marginBottom: '40px'
                        }}>
                            <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', margin: '0 0 8px 0' }}>
                                <strong>For emergencies</strong>: If you feel unsafe or are concerned about your or someone else&apos;s well-being, please contact local emergency services immediately.
                            </p>
                        </div>

                        <section style={{ marginBottom: '48px' }}>
                            <h2 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '24px', marginTop: '0' }}>Urgent neighborhood situations</h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', margin: '0 0 24px 0' }}>
                                Reach out to Neighborhood Support if there&apos;s a party or disturbance happening nearby.
                            </p>
                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                backgroundColor: '#FF385C',
                                color: 'white',
                                padding: '14px 24px',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease'
                            }} className="hover:bg-[#E31C5F]">
                                <Phone size={20} />
                                Request a call
                            </button>
                        </section>

                        <section style={{ marginBottom: '80px' }}>
                            <h2 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '24px', marginTop: '0' }}>Other neighborhood concerns</h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', margin: '0 0 24px 0' }}>
                                Send us a message using the button below. Our team will investigate and follow up via email.
                            </p>
                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                backgroundColor: '#222222',
                                color: 'white',
                                padding: '14px 24px',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease'
                            }} className="hover:bg-[#000000]">
                                <MessageCircle size={20} />
                                Report a concern
                            </button>
                        </section>

                        <div style={{ borderTop: '1px solid #DDDDDD', paddingTop: '32px', marginTop: '32px' }}>
                            <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', margin: '0 0 16px 0' }}>Did this article help?</p>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <button style={{
                                    padding: '10px 20px',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    border: '1px solid #DDDDDD',
                                    backgroundColor: 'white',
                                    cursor: 'pointer'
                                }}>Yes</button>
                                <button style={{
                                    padding: '10px 20px',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    border: '1px solid #DDDDDD',
                                    backgroundColor: 'white',
                                    cursor: 'pointer'
                                }}>No</button>
                            </div>
                        </div>
                    </article>

                    <aside style={{ width: '320px', position: 'sticky', top: '112px', height: 'fit-content' }} className="article-sidebar">
                        <div style={{ marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', marginTop: '0', lineHeight: '1.4' }}>
                                Related articles
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <li>
                                    <Link href="/help/article/3179" style={{ color: '#222222', textDecoration: 'none' }} className="article-link">
                                        <p style={{ fontSize: '14px', color: '#717171', marginBottom: '4px', margin: '0 0 4px 0' }}>How-to • Home host</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>When a neighbor reports an issue</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/help/article/656" style={{ color: '#222222', textDecoration: 'none' }} className="article-link">
                                        <p style={{ fontSize: '14px', color: '#717171', marginBottom: '4px', margin: '0 0 4px 0' }}>How-to</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>What to know if your neighbor is an Airbnb host</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/help/article/3345" style={{ color: '#222222', textDecoration: 'none' }} className="article-link">
                                        <p style={{ fontSize: '14px', color: '#717171', marginBottom: '4px', margin: '0 0 4px 0' }}>Community policy</p>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>Community Disturbance Policy</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>

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
                .article-link:hover { text-decoration: underline !important; }
                .hover\:bg-\[\#E31C5F\]:hover { background-color: #E31C5F !important; }
                .hover\:bg-\[\#000000\]:hover { background-color: #000000 !important; }
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
