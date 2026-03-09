'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const AccessibilityPage = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', color: '#222222', fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif' }}>
            {/* Header - Simple Logo */}
            <header style={{
                padding: '24px 24px',
                display: 'flex',
                justifyContent: 'flex-start',
                backgroundColor: 'white',
                borderBottom: '1px solid #EBEBEB'
            }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: '#FF385C' }}>
                        <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.636l-.261.015-.231.003c-3.447 0-6.356-2.416-6.356-6.478 0-.102.002-.234.004-.325l.006-.217c.05-.924.293-1.805.96-3.396l.144-.354c.987-2.297 5.147-11.007 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.234 0-2.056.565-3.037 2.308l-.508.985c-2.01 3.94-6.196 12.72-7.14 14.966l-.142.348c-.54 1.291-.72 1.954-.761 2.651l-.01.222c0 2.924 2.112 4.478 4.356 4.478 1.621 0 3.514-1.127 5.488-3.18l.8-.883.8.883c1.974 2.053 3.867 3.18 5.488 3.18 2.245 0 4.357-1.554 4.357-4.478 0-.083-.001-.19-.003-.277l-.008-.223c-.04-.697-.221-1.36-.76-1.651l-.142-.348c-.945-2.246-5.131-11.026-7.14-14.966l-.508-.985C18.056 3.565 17.234 3 16 3zm0 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                    </svg>
                    <span style={{ color: '#FF385C', fontSize: '18px', fontWeight: 800, letterSpacing: '-0.5px' }}>airbnb</span>
                </Link>
            </header>

            <main style={{ maxWidth: '1032px', margin: '0 auto', padding: '0 24px' }}>
                {/* Hero Section */}
                <section style={{ textAlign: 'center', padding: '80px 0 64px 0' }}>
                    <h1 style={{ fontSize: '64px', fontWeight: '800', lineHeight: '1.1', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                        Accessibility <br /> at Airbnb
                    </h1>
                    <p style={{ fontSize: '20px', color: '#717171', fontWeight: '400' }}>
                        Here’s how we’re making it easier to travel with us.
                    </p>
                </section>

                {/* Alternating Feature Sections */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', paddingBottom: '120px' }}>

                    {/* Section 1: Enhanced search filters */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '48px', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <img
                                src="/images/accessibility_search_filters.png"
                                alt="Enhanced search filters"
                                style={{ width: '100%', borderRadius: '16px', display: 'block' }}
                            />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.2', marginBottom: '16px' }}>Enhanced search filters</h2>
                            <p style={{ fontSize: '18px', lineHeight: '1.5', color: '#222222' }}>
                                We’ve simplified our accessibility filters to provide an even better search experience.
                            </p>
                        </div>
                    </div>

                    {/* Section 2: Accessibility review */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: '48px', alignItems: 'center' }}>
                        <div style={{ order: 2 }}>
                            <img
                                src="/images/accessibility_review.png"
                                alt="Accessibility review"
                                style={{ width: '100%', borderRadius: '16px', display: 'block' }}
                            />
                        </div>
                        <div style={{ order: 1 }}>
                            <h2 style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.2', marginBottom: '16px' }}>Accessibility review</h2>
                            <p style={{ fontSize: '18px', lineHeight: '1.5', color: '#222222' }}>
                                We review every accessibility feature submitted by stays hosts for accuracy.
                            </p>
                        </div>
                    </div>

                    {/* Section 3: 1:1 messaging with hosts */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '48px', alignItems: 'center' }}>
                        <div>
                            <img
                                src="/images/accessibility_messaging.png"
                                alt="1:1 messaging with hosts"
                                style={{ width: '100%', borderRadius: '16px', display: 'block' }}
                            />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '700', lineHeight: '1.2', marginBottom: '16px' }}>1:1 messaging with hosts</h2>
                            <p style={{ fontSize: '18px', lineHeight: '1.5', color: '#222222' }}>
                                Chat directly with hosts for more information about the accessibility features of their stay or experience. This allows you to confirm details and feel confident about your booking.
                            </p>
                        </div>
                    </div>

                </div>
            </main>

            {/* Dark Section - EXACT REPLICATION */}
            <div style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '100px 0' }}>
                <div style={{ maxWidth: '1032px', margin: '0 auto', padding: '0 24px' }}>

                    {/* Main Title and Intro */}
                    <div style={{ marginBottom: '64px' }}>
                        <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '32px', letterSpacing: '-0.02em', color: '#FFFFFF' }}>Digital accessibility at Airbnb</h1>
                        <p style={{ fontSize: '20px', lineHeight: '1.6', maxWidth: '900px', color: '#FFFFFF' }}>
                            Airbnb strives to conform with the European Accessibility Act and the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA for our website and mobile applications.
                        </p>
                    </div>

                    {/* How we work and Feedback Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '64px' }}>
                        <div>
                            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#FFFFFF' }}>How we work</h2>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.5', color: '#FFFFFF' }}>
                                    <span>•</span>
                                    <span>Incorporating digital accessibility best practices into our design and engineering processes</span>
                                </li>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.5', color: '#FFFFFF' }}>
                                    <span>•</span>
                                    <span>Providing ongoing accessibility training and resources to our employees</span>
                                </li>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.5', color: '#FFFFFF' }}>
                                    <span>•</span>
                                    <span>Engaging internal and external quality assurance testers</span>
                                </li>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.5', color: '#FFFFFF' }}>
                                    <span>•</span>
                                    <span>Maintaining a cross-functional team dedicated to monitoring and addressing digital accessibility issues across our website and applications</span>
                                </li>
                                <li style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.5', color: '#FFFFFF' }}>
                                    <span>•</span>
                                    <span>Training our customer support agents on digital accessibility issues</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#FFFFFF' }}>Feedback</h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#FFFFFF' }}>
                                We welcome your feedback on Airbnb's digital accessibility practices. Please email us at <a href="mailto:digital-accessibility@airbnb.com" style={{ color: 'white', textDecoration: 'underline' }}>digital-accessibility@airbnb.com</a> to connect. For any other queries apart from digital accessibility reach out to <Link href="/help" style={{ color: 'white', textDecoration: 'underline' }}>Airbnb Community Support</Link>.
                            </p>
                        </div>
                    </div>

                    {/* Dedicated Teams Section */}
                    <div style={{ marginBottom: '80px', maxWidth: '500px' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#FFFFFF' }}>Dedicated teams</h2>
                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#FFFFFF' }}>
                            Airbnb has teams focused on building products that everyone can use. These teams work with engineers, designers, and others across the company to help ensure that our products are built with accessibility in mind.
                        </p>
                    </div>

                    {/* Specifications Section with Accordions */}
                    <div style={{ borderTop: '1px solid #333333', paddingTop: '80px', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '48px' }}>
                        <div>
                            <h2 style={{ fontSize: '48px', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.02em', color: '#FFFFFF' }}>Our digital access specifications</h2>
                            <p style={{ fontSize: '24px', lineHeight: '1.4', marginTop: '24px', color: '#FFFFFF' }}>
                                We're committed to designing an accessible platform.
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <AccordionItem title="Usability for browsers, assistive technology, and devices" />
                            <AccordionItem title="Limitations and alternatives" />
                            <AccordionItem title="Accessibility features" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AccordionItem = ({ title }: { title: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{ borderBottom: '1px solid #333333' }}>
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
                    color: '#FFFFFF',
                    fontSize: '18px',
                    fontWeight: '400',
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                {title}
                <ChevronDown style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#FFFFFF' }} />
            </button>
            {isOpen && (
                <div style={{ paddingBottom: '24px', color: '#FFFFFF', fontSize: '16px', lineHeight: '1.5' }}>
                    Information about {title.toLowerCase()} will be displayed here, following the standard Airbnb accessibility documentation guidelines.
                </div>
            )}
        </div>
    );
};

export default AccessibilityPage;
