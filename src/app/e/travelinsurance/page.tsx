'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Plane, Briefcase, ShieldCheck, ChevronRight } from 'lucide-react';

const TravelInsurancePage = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', color: '#222222', fontFamily: 'Inter, sans-serif' }}>
            {/* Minimal Header */}
            <header style={{
                padding: '24px 80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white'
            }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: '#FF385C' }}>
                        <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.636l-.261.015-.231.003c-3.447 0-6.356-2.416-6.356-6.478 0-.102.002-.234.004-.325l.006-.217c.05-.924.293-1.805.96-3.396l.144-.354c.987-2.297 5.147-11.007 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.234 0-2.056.565-3.037 2.308l-.508.985c-2.01 3.94-6.196 12.72-7.14 14.966l-.142.348c-.54 1.291-.72 1.954-.761 2.651l-.01.222c0 2.924 2.112 4.478 4.356 4.478 1.621 0 3.514-1.127 5.488-3.18l.8-.883.8.883c1.974 2.053 3.867 3.18 5.488 3.18 2.245 0 4.357-1.554 4.357-4.478 0-.083-.001-.19-.003-.277l-.008-.223c-.04-.697-.221-1.36-.76-1.651l-.142-.348c-.945-2.246-5.131-11.026-7.14-14.966l-.508-.985C18.056 3.565 17.234 3 16 3zm0 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                    </svg>
                    <span style={{ color: '#FF385C', fontSize: '22px', fontWeight: 800, letterSpacing: '-1px' }}>airbnb</span>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', fontWeight: 600, fontSize: '14px' }}>
                    <span style={{ cursor: 'pointer' }}>Become a host</span>
                    <Globe size={16} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 12px', border: '1px solid #DDDDDD', borderRadius: '24px', cursor: 'pointer' }}>
                        <div style={{ width: '16px', height: '2px', backgroundColor: '#222222', position: 'relative' }}>
                            <div style={{ width: '16px', height: '2px', backgroundColor: '#222222', position: 'absolute', top: '-5px' }}></div>
                            <div style={{ width: '16px', height: '2px', backgroundColor: '#222222', position: 'absolute', top: '5px' }}></div>
                        </div>
                        <div style={{ width: '30px', height: '30px', backgroundColor: '#717171', borderRadius: '50%' }}></div>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section style={{ padding: '0 80px 80px 80px' }}>
                    <div style={{
                        position: 'relative',
                        height: '600px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        backgroundImage: "url('https://a0.muscache.com/im/pictures/canvas/Canvas-1763593696968/original/08072c11-d1c5-43c9-84fa-4659bc027fad.jpeg?im_w=2560')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        color: 'white',
                        padding: '0 80px'
                    }}>
                        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)' }}></div>
                        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
                            <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>Travel insurance</p>
                            <h1 style={{ fontSize: '64px', fontWeight: 'bold', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-0.02em', color: 'white' }}>
                                Peace of mind for your entire stay
                            </h1>
                            <p style={{ fontSize: '20px', lineHeight: '1.4' }}>
                                Set out on your next adventure knowing you’re protected against life’s surprises.
                            </p>
                        </div>
                    </div>
                </section>

                {/* International Notice */}
                <section style={{ maxWidth: '1280px', margin: '0 auto 80px auto', padding: '0 24px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                        border: '1px solid #DDDDDD',
                        borderRadius: '16px',
                        padding: '32px'
                    }}>
                        <Globe size={32} strokeWidth={1.5} />
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Don’t live in the US? <ChevronRight size={18} />
                            </h3>
                            <p style={{ color: '#717171', margin: 0 }}>Get information about where travel insurance is available.</p>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section style={{ maxWidth: '1280px', margin: '0 auto 100px auto', padding: '0 24px' }}>
                    <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', letterSpacing: '-0.02em' }}>Protect your plans from the unexpected</h2>
                    <p style={{ fontSize: '24px', color: '#222222', marginBottom: '64px' }}>Coverage for your trip, your belongings, and your health.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
                        <div>
                            <Plane size={32} style={{ marginBottom: '24px' }} />
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', lineHeight: '1.3' }}>
                                If emergencies or delays affect your travel plans
                            </h3>
                            <p style={{ color: '#222222', fontSize: '16px', lineHeight: '1.5', marginBottom: '24px' }}>
                                Get reimbursed for covered trip interruptions or cancellation.
                            </p>
                            <span style={{ fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Learn more</span>
                        </div>
                        <div>
                            <Briefcase size={32} style={{ marginBottom: '24px' }} />
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', lineHeight: '1.3' }}>
                                When your bags are delayed, damaged, or missing
                            </h3>
                            <p style={{ color: '#222222', fontSize: '16px', lineHeight: '1.5', marginBottom: '24px' }}>
                                Use coverage for replacements or equipment rentals.
                            </p>
                            <span style={{ fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Learn more</span>
                        </div>
                        <div>
                            <ShieldCheck size={32} style={{ marginBottom: '24px' }} />
                            <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px', lineHeight: '1.3' }}>
                                If someone in your group gets sick or injured during the trip
                            </h3>
                            <p style={{ color: '#222222', fontSize: '16px', lineHeight: '1.5', marginBottom: '24px' }}>
                                Coverage can help you get the medical care you need.
                            </p>
                            <span style={{ fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Learn more</span>
                        </div>
                    </div>
                </section>

                {/* Trusted Stats Section */}
                <section style={{ backgroundColor: '#F7F7F7', padding: '100px 80px', textAlign: 'center' }}>
                    <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '48px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Trusted by Airbnb travelers worldwide
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <h2 style={{ fontSize: '56px', fontWeight: 'bold', margin: 0, letterSpacing: '-0.02em' }}>10M+ trips covered</h2>
                        <h2 style={{ fontSize: '56px', fontWeight: 'bold', margin: 0, letterSpacing: '-0.02em' }}>30M+ guests protected</h2>
                    </div>
                </section>

                {/* Disclosure Section */}
                <section style={{ maxWidth: '1280px', margin: '80px auto', padding: '0 24px', color: '#717171', fontSize: '12px', lineHeight: '1.6' }}>
                    <p>
                        This plan is provided by Europ Assistance S.A. It is not available to residents of all countries or territories. Coverage and benefits are subject to terms, conditions, and exclusions, including for pre-existing conditions.
                    </p>
                    <p style={{ marginTop: '24px' }}>
                        Airbnb is not an insurance company and does not sell insurance. This is a summary only. For complete details, please refer to the policy documents provided at checkout or in your reservation details.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default TravelInsurancePage;
