'use client';

import React, { useState } from 'react';
import HelpHeader from '@/components/HelpHeader';
import { Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const HelpPage = () => {
    const [activeTab, setActiveTab] = useState('Guest');

    const tabs = ['Guest', 'Home host', 'Experience host', 'Service host', 'Travel admin'];

    const topArticles = [
        {
            title: "Cancel your home reservation as a guest",
            description: "You can cancel or make changes to your home reservation in your trips."
        },
        {
            title: "Change the date or time of your service or experience reservation",
            description: "When you book a service or experience, you can update the date or time depending on..."
        },
        {
            title: "If your host cancels your home reservation",
            description: "If your reservation is canceled by your host, you'll get a full refund. If the cancellation..."
        },
        {
            title: "Payment methods accepted",
            description: "We support different payment methods depending on the country your payment..."
        },
        {
            title: "Add or remove a payment method",
            description: "Find out how to manage your payment methods."
        },
        {
            title: "When you'll pay for your reservation",
            description: "Timing differs by the type of booking you're making, how you're paying, and the location ..."
        }
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', color: '#222222', fontFamily: 'Inter, sans-serif' }}>
            <HelpHeader />

            <main>
                {/* Hero Section */}
                <section style={{ paddingTop: '80px', paddingBottom: '0', textAlign: 'center' }}>
                    <div style={{ maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
                        <h1 style={{ fontSize: '64px', fontWeight: 'bold', letterSpacing: '-0.02em', marginTop: '0', marginRight: '0', marginBottom: '48px', marginLeft: '0' }}>Hi, how can we help?</h1>

                        <div style={{ position: 'relative', maxWidth: '640px', marginTop: '0', marginLeft: 'auto', marginRight: 'auto', marginBottom: '80px' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #DDDDDD',
                                borderRadius: '32px',
                                backgroundColor: '#F7F7F7',
                                transition: 'box-shadow 0.2s ease',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
                            }} className="search-box-hover">
                                <input
                                    type="text"
                                    placeholder="Search how-tos and more"
                                    style={{
                                        width: '100%',
                                        paddingLeft: '24px',
                                        backgroundColor: 'transparent',
                                        fontSize: '16px',
                                        border: 'none',
                                        outline: 'none',
                                        color: '#222222',
                                        height: '48px'
                                    }}
                                />
                                <button style={{
                                    backgroundColor: '#FF385C',
                                    padding: '12px',
                                    borderRadius: '50%',
                                    marginLeft: '4px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Search style={{ color: 'white' }} size={18} strokeWidth={3} />
                                </button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '32px',
                            overflowX: 'auto',
                            borderBottom: '1px solid #DDDDDD',
                            scrollbarWidth: 'none'
                        }}>
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        paddingBottom: '16px',
                                        whiteSpace: 'nowrap',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        border: 'none',
                                        background: 'none',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        color: activeTab === tab ? '#222222' : '#717171',
                                        transition: 'color 0.2s ease'
                                    }}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '3px',
                                            backgroundColor: '#222222'
                                        }}></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <div style={{ maxWidth: '1080px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px', paddingTop: '64px', paddingBottom: '64px' }}>
                    {/* Login Banner */}
                    <div style={{
                        border: '1px solid #DDDDDD',
                        borderRadius: '16px',
                        padding: '40px',
                        marginBottom: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '32px',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
                    }} className="responsive-banner">
                        <div style={{ textAlign: 'left', flex: 1 }}>
                            <h2 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '8px', marginTop: '0' }}>We're here for you</h2>
                            <p style={{ color: '#717171', fontSize: '16px', margin: 0 }}>Log in to get help with your reservations, account, and more.</p>
                        </div>
                        <button style={{
                            backgroundColor: '#FF385C',
                            color: 'white',
                            padding: '14px 32px',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            border: 'none',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            transition: 'background-color 0.2s ease'
                        }} className="hover:bg-[#E31C5F]">
                            Log in or sign up
                        </button>
                    </div>

                    {/* Guides Section */}
                    <section style={{ marginBottom: '96px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0' }}>Guides for getting started</h2>
                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                fontWeight: 'bold',
                                textDecoration: 'underline',
                                textUnderlineOffset: '4px',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                fontSize: '14px',
                                color: '#222222'
                            }}>
                                Browse all topics <ChevronRight size={16} />
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                            {/* Guide Card 1 */}
                            <Link href="/help/article/3218" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ cursor: 'pointer' }}>
                                    <div style={{
                                        position: 'relative',
                                        height: '280px',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        marginBottom: '20px',
                                        backgroundColor: 'black',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '48px'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ color: '#FF385C', fontSize: '64px', fontWeight: '900', letterSpacing: '-0.1em' }}>air</span>
                                            <span style={{ color: 'white', fontSize: '64px', fontWeight: '900', letterSpacing: '-0.1em' }}>cover</span>
                                        </div>
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0' }}>AirCover for guests</h3>
                                </div>
                            </Link>
                            {/* Guide Card 2 */}
                            <div style={{ cursor: 'pointer' }}>
                                <div style={{
                                    position: 'relative',
                                    height: '280px',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    marginBottom: '20px',
                                    backgroundImage: "url('https://a0.muscache.com/im/pictures/aff098a5-d5e8-4903-8884-60c058c4060c.jpg?im_w=720')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                </div>
                                <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0' }}>Essential resources for new hosts</h3>
                            </div>
                        </div>
                    </section>

                    {/* Top Articles Section */}
                    <section style={{ marginBottom: '96px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '40px', marginTop: '0' }}>Top articles</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', columnGap: '48px', rowGap: '64px' }}>
                            {topArticles.map((article, index) => (
                                <div key={index} style={{ cursor: 'pointer' }}>
                                    <h3 style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        marginBottom: '12px',
                                        marginTop: '0',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '3px',
                                        lineHeight: '1.4'
                                    }}>{article.title}</h3>
                                    <p style={{ color: '#717171', fontSize: '16px', lineHeight: '1.5', margin: '0', marginBottom: '24px' }}>{article.description}</p>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#DDDDDD' }}></div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Explore More Section */}
                    <section style={{ marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '40px', marginTop: '0' }}>Explore more</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }} className="explore-grid">
                            <div style={{ gridColumn: 'span 2', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="explore-inner">
                                <div style={{ cursor: 'pointer', borderRadius: '12px', overflow: 'hidden' }}>
                                    <div style={{
                                        height: '280px',
                                        width: '100%',
                                        backgroundImage: "url('https://a0.muscache.com/im/pictures/676f4995-1823-441f-8086-1070183e8700.jpg?im_w=720')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        position: 'relative'
                                    }}>
                                        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.05)' }}></div>
                                    </div>
                                    <div style={{ backgroundColor: '#222222', padding: '24px', minHeight: '100px' }}>
                                        <h3 style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', marginTop: '0' }}>Our community policies</h3>
                                        <p style={{ color: 'white', fontSize: '14px', margin: '0', opacity: 0.9 }}>How we build a foundation of trust.</p>
                                    </div>
                                </div>
                                <div style={{ cursor: 'pointer', borderRadius: '12px', overflow: 'hidden' }}>
                                    <div style={{
                                        height: '280px',
                                        width: '100%',
                                        backgroundImage: "url('https://a0.muscache.com/im/pictures/d13cf2ef-04b3-4f9e-a89c-43f550917631.jpg?im_w=720')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        position: 'relative'
                                    }}>
                                        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.05)' }}></div>
                                    </div>
                                    <div style={{ backgroundColor: '#222222', padding: '24px', minHeight: '100px' }}>
                                        <h3 style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', marginTop: '0' }}>Safety tips and guidelines</h3>
                                        <p style={{ color: 'white', fontSize: '14px', margin: '0', opacity: 0.9 }}>Resources to help travelers stay safe.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Box */}
                            <div style={{
                                backgroundColor: 'white',
                                border: '1px solid #DDDDDD',
                                borderRadius: '16px',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                                height: 'fit-content',
                                marginTop: '0'
                            }}>
                                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', marginTop: '0' }}>Need to get in touch?</h2>
                                <p style={{ color: '#717171', marginBottom: '40px', fontSize: '16px', lineHeight: '1.4', margin: '0 0 40px 0' }}>We’ll start with some questions and get you to the right place.</p>
                                <button style={{
                                    width: '100%',
                                    border: '1.5px solid #222222',
                                    color: '#222222',
                                    padding: '14px',
                                    borderRadius: '12px',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                    backgroundColor: 'white',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s ease',
                                    marginBottom: '32px'
                                }} className="hover:bg-[#F7F7F7]">
                                    Contact us
                                </button>
                                <p style={{ fontSize: '14px', margin: '0', color: '#222222' }}>
                                    You can also <span style={{ textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer', textUnderlineOffset: '2px' }}>give us feedback.</span>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <style jsx>{`
                .hover\:bg-\[\#F7F7F7\]:hover { background-color: #F7F7F7 !important; }
                .hover\:bg-\[\#E31C5F\]:hover { background-color: #E31C5F !important; }
                .search-box-hover:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important; }
                
                @media (max-width: 768px) {
                    .responsive-banner {
                        flex-direction: column !important;
                        text-align: center !important;
                    }
                    .explore-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .explore-inner {
                        grid-column: span 1 !important;
                        grid-template-columns: 1fr !important;
                    }
                }
                
                /* Hide scrollbar */
                main ::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default HelpPage;
