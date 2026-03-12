'use client';

import React from 'react';
import Link from 'next/link';

const IntroToHostingPage = () => {
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
            </header>

            <main>
                <section style={{
                    textAlign: 'center',
                    padding: '160px 24px 80px 24px',
                    background: 'linear-gradient(180deg, #FFFBFA 0%, #FFFFFF 100%)'
                }}>
                    <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-0.02em', maxWidth: '900px', margin: '0 auto 24px auto' }}>
                        Intro to hosting on Airbnb
                    </h1>
                    <p style={{ fontSize: '20px', color: '#717171', fontWeight: '400', maxWidth: '700px', margin: '0 auto 48px auto' }}>
                        Learn the basics in a free webinar presented by Superhost Ambassadors.
                    </p>
                </section>

                <section style={{ padding: '0 24px 96px 24px', maxWidth: '1760px', margin: '0 auto' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '48px' }}>
                            <img 
                                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1764101828784/original/dc1567dd-c21b-4a4d-bf8e-ed62e11deb37.png?im_w=720" 
                                alt="A host standing in the doorway of a rustic stone house"
                                style={{ width: '100%', borderRadius: '16px' }}
                            />
                        </div>

                        <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '32px', textAlign: 'center' }}>Sign up for a webinar</h2>
                        <p style={{ fontSize: '16px', color: '#717171', marginBottom: '32px', textAlign: 'center' }}>
                            Selecting a link will take you to a Zoom site.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <WebinarLink country="Canada" language="English" />
                            <WebinarLink country="España" language="Español" />
                            <WebinarLink country="France" language="Français" />
                            <WebinarLink country="Italia" language="Italiano" />
                            <WebinarLink country="United Kingdom" language="English" />
                            <WebinarLink country="United States" language="English" />
                            <WebinarLink country="United States" language="Español" />
                        </div>
                    </div>
                </section>

                <section style={{ padding: '80px 24px', backgroundColor: '#F7F7F7' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '48px', textAlign: 'center' }}>What to expect</h2>
                        
                        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                            <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>Everything you need to get started</h3>
                            <p style={{ fontSize: '18px', color: '#717171', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                                Experienced hosts called Superhost Ambassadors will walk you through hosting, from how to list your space to what to do before guests arrive.
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '24px'
                        }}>
                            <img 
                                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1764035186347/original/4a88ff4c-d80e-4b73-a45d-d503e9fc54b6.png?im_w=720" 
                                alt="Woman setting a vase of flowers on the table"
                                style={{ width: '100%', borderRadius: '16px' }}
                            />
                            <img 
                                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1764102119517/original/c0cfa2af-d71d-44c3-9843-b552891dbe81.png?im_w=720" 
                                alt="A cozy house entrance"
                                style={{ width: '100%', borderRadius: '16px' }}
                            />
                        </div>
                    </div>
                </section>

                <section style={{ padding: '80px 24px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '24px' }}>Support beyond the webinar</h2>
                        <p style={{ fontSize: '18px', color: '#717171', lineHeight: '1.6' }}>
                            The Superhost Ambassador who presents your webinar can also be your guide. They can provide free one-to-one support, help you set up your listing, and give you hosting tips as you discover what it&apos;s like to become a host.
                        </p>
                    </div>
                </section>

                <section style={{ padding: '80px 24px', backgroundColor: '#F7F7F7' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '32px', textAlign: 'center' }}>Airbnb resources</h2>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <ResourceCard 
                                title="Estimate your earnings"
                                description="Find out how much you could earn by listing your space."
                                link="/host/homes"
                            />
                            <ResourceCard 
                                title="First-time hosting"
                                description="Set your listing apart and get ready for guests."
                                link="/resources/hosting-homes/g/first-time-hosting-25"
                            />
                            <ResourceCard 
                                title="Pricing your place"
                                description="Discover how our pricing tools can help you set a competitive rate."
                                link="/resources/hosting-homes/g/pricing-your-place-21"
                            />
                        </div>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '48px 24px', borderTop: '1px solid #EBEBEB', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '1760px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#717171' }}>
                        <span>© 2026 Airbnb, Inc.</span>
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

const WebinarLink = ({ country, language }: { country: string; language: string }) => (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '20px 24px',
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #EBEBEB'
    }}>
        <div>
            <span style={{ fontSize: '16px', fontWeight: '600', marginRight: '12px' }}>{country}</span>
            <span style={{ fontSize: '14px', color: '#717171' }}>{language}</span>
        </div>
        <Link href="#" style={{
            color: '#222222',
            textDecoration: 'underline',
            fontSize: '14px',
            fontWeight: '600'
        }}>
            {language === 'Español' ? 'Ver webinarios' : 'View webinars'}
        </Link>
    </div>
);

const ResourceCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
    <div style={{ 
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #EBEBEB'
    }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: '#717171', marginBottom: '16px' }}>{description}</p>
        <Link href={link} style={{
            color: '#222222',
            textDecoration: 'underline',
            fontSize: '14px',
            fontWeight: '600'
        }}>
            {title === 'Estimate your earnings' ? 'Find out how much you could earn' : 
             title === 'First-time hosting' ? 'Set your listing apart' : 
             'Discover how our pricing tools can help'}
        </Link>
    </div>
);

export default IntroToHostingPage;
