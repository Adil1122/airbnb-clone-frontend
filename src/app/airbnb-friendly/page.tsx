'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const AirbnbFriendlyPage = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', color: '#222222', fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif' }}>
            <header style={{
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #EBEBEB',
                position: 'relative',
                zIndex: 10,
                backgroundColor: 'white'
            }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: '#FF385C' }}>
                        <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.636l-.261.015-.231.003c-3.447 0-6.356-2.416-6.356-6.478 0-.102.002-.234.004-.325l.006-.217c.05-.924.293-1.805.96-3.396l.144-.354c.987-2.297 5.147-11.007 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.234 0-2.056.565-3.037 2.308l-.508.985c-2.01 3.94-6.196 12.72-7.14 14.966l-.142.348c-.54 1.291-.72 1.954-.761 2.651l-.01.222c0 2.924 2.112 4.478 4.356 4.478 1.621 0 3.514-1.127 5.488-3.18l.8-.883.8.883c1.974 2.053 3.867 3.18 5.488 3.18 2.245 0 4.357-1.554 4.357-4.478 0-.083-.001-.19-.003-.277l-.008-.223c-.04-.697-.221-1.36-.76-1.651l-.142-.348c-.945-2.246-5.131-11.026-7.14-14.966l-.508-.985C18.056 3.565 17.234 3 16 3zm0 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                    </svg>
                    <span style={{ color: '#FF385C', fontSize: '18px', fontWeight: 800, letterSpacing: '-0.5px' }}>airbnb</span>
                </Link>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <Link href="/help" style={{ color: '#222222', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Help Center</Link>
                    <Link href="/become-a-host" style={{ color: '#222222', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Become a host</Link>
                    <Link href="/signup-login" style={{
                        backgroundColor: '#FF385C',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '22px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        fontSize: '14px'
                    }}>
                        Log in or sign up
                    </Link>
                </div>
            </header>

            <main>
                <section style={{
                    textAlign: 'center',
                    padding: '80px 24px 64px 24px',
                    background: 'linear-gradient(180deg, #FFFBFA 0%, #FFFFFF 100%)'
                }}>
                    <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-0.02em', maxWidth: '900px', margin: '0 auto 24px auto' }}>
                        Discover Airbnb‑friendly apartments
                    </h1>
                    <p style={{ fontSize: '20px', color: '#717171', fontWeight: '400', maxWidth: '700px', margin: '0 auto 48px auto' }}>
                        Rent a place to live. Airbnb it part-time.
                    </p>
                    <Link href="#explore" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: '#222222',
                        color: 'white',
                        padding: '14px 32px',
                        borderRadius: '24px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        fontSize: '16px'
                    }}>
                        <Search size={20} />
                        Explore near you
                    </Link>
                </section>

                <section style={{ padding: '0 24px 96px 24px', maxWidth: '1760px', margin: '0 auto' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '24px',
                            marginBottom: '48px'
                        }}>
                            <ApartmentCard
                                image="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/5347d650-16de-4f5a-a38e-79edc988befa.png"
                                title="Sentral Apartments"
                                location="Denver, Colorado"
                            />
                            <ApartmentCard
                                image="https://a0.muscache.com/im/pictures/a78b22a2-e081-4fa4-a7f2-e756d9699801.jpg"
                                title="Park 12 Apartments"
                                location="San Diego, California"
                            />
                            <ApartmentCard
                                image="https://a0.muscache.com/im/pictures/a78b22a2-e081-4fa4-a7f2-e756d9699801.jpg"
                                title="Old Town Apartments"
                                location="Scottsdale, Arizona"
                            />
                        </div>
                        <p style={{ fontSize: '18px', color: '#717171', textAlign: 'center', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                            We've partnered with Airbnb-friendly apartment buildings across the US to make it easier to Airbnb your place.
                        </p>
                    </div>
                </section>

                <section style={{ padding: '80px 24px', backgroundColor: '#F7F7F7' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <blockquote style={{ fontSize: '28px', fontWeight: '500', fontStyle: 'italic', marginBottom: '32px', lineHeight: '1.4' }}>
                            "I can't express how grateful I am that my building is Airbnb-friendly! Hosting has given me some financial freedom and a sense of control to invest in myself."
                        </blockquote>
                        <p style={{ fontSize: '18px', color: '#717171' }}>
                            Hosts like Gina, in downtown San Diego, earned an average of <strong style={{ color: '#222222', fontSize: '24px' }}>$13,442 per year</strong>
                        </p>
                    </div>
                </section>

                <section style={{ padding: '96px 24px' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '48px' }}>Ready to get started?</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'left' }}>
                            <StepCard
                                number="1"
                                title="First, browse Airbnb‑friendly apartments in your area."
                            />
                            <StepCard
                                number="2"
                                title="Next, find out how much you can earn on Airbnb."
                            />
                            <StepCard
                                number="3"
                                title="Then, we'll help you contact the places you like."
                            />
                        </div>
                        <Link href="#explore" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: '#FF385C',
                            color: 'white',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            fontSize: '16px',
                            marginTop: '48px'
                        }}>
                            <Search size={20} />
                            Explore near you
                        </Link>
                    </div>
                </section>

                <section style={{ padding: '96px 24px', backgroundColor: '#F7F7F7' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '48px', textAlign: 'center' }}>Your questions, answered</h2>
                        <div>
                            <Accordion title="Does Airbnb own or operate these buildings?">
                                <p>No. This is a partnership between Airbnb and building owners to make it easier for renters to find apartments that let them host part-time. Airbnb does not own or operate these buildings.</p>
                            </Accordion>
                            <Accordion title="What sets Airbnb-friendly apartments apart from regular apartment buildings?">
                                <p>Airbnb has teamed up with some of the top apartment buildings in the US and the UK to give renters the chance to host on Airbnb part-time. You'll find that these apartments are as appealing and comfortable as traditional apartment buildings in vibrant city centers – plus you can host on Airbnb. It's a fantastic way to embrace the sharing economy while enjoying the perks of apartment living!</p>
                            </Accordion>
                            <Accordion title="What are the benefits of becoming an Airbnb host without owning a property?">
                                <p>Becoming an Airbnb host without owning a property offers several benefits. With Airbnb-friendly apartments, you have the flexibility to lease or rent a home while still enjoying the opportunity to host guests. This allows you to make additional money without the long-term commitment of property ownership. You can also gain valuable hospitality experience and have the chance to meet travelers from around the world.</p>
                            </Accordion>
                            <Accordion title="How do leases in Airbnb-friendly apartments differ from leases in regular apartments?">
                                <p>Airbnb-friendly apartments come in all shapes and sizes. While traditional apartment buildings may have strict rules against hosting, Airbnb-friendly buildings offer flexibility to their residents. These apartment communities empower their residents to share their homes on Airbnb part-time, creating opportunities for both hosts and guests to connect and creating the ability for their residents to earn extra money on their space.</p>
                            </Accordion>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '48px' }}>
                            <p style={{ fontSize: '18px', color: '#717171', marginBottom: '16px' }}>Can't find what you're looking for?</p>
                            <Link href="/help" style={{
                                color: '#222222',
                                textDecoration: 'underline',
                                fontSize: '16px',
                                fontWeight: '600'
                            }}>
                                Visit our Help Center
                            </Link>
                        </div>
                    </div>
                </section>

                <section style={{ padding: '64px 24px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '24px' }}>Find your Airbnb‑friendly apartment in another city</h2>
                    <p style={{ fontSize: '18px', color: '#717171', marginBottom: '32px' }}>Don't see your city?</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <button style={{
                            backgroundColor: '#222222',
                            color: 'white',
                            padding: '14px 28px',
                            borderRadius: '12px',
                            fontWeight: '600',
                            fontSize: '16px',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            Join the waitlist
                        </button>
                        <button style={{
                            backgroundColor: 'white',
                            color: '#222222',
                            padding: '14px 28px',
                            borderRadius: '12px',
                            fontWeight: '600',
                            fontSize: '16px',
                            border: '1px solid #222222',
                            cursor: 'pointer'
                        }}>
                            Are you a building owner? Learn more
                        </button>
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

const ApartmentCard = ({ image, title, location }: { image: string; title: string; location: string }) => (
    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <div style={{ padding: '20px', backgroundColor: 'white' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{title}</h3>
            <p style={{ fontSize: '14px', color: '#717171' }}>{location}</p>
        </div>
    </div>
);

const StepCard = ({ number, title }: { number: string; title: string }) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', padding: '24px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#222222',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: '700',
            flexShrink: 0
        }}>
            {number}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ fontSize: '20px', fontWeight: '600', margin: 0 }}>{title}</p>
        </div>
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

export default AirbnbFriendlyPage;
