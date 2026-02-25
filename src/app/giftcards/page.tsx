'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronDown, ChevronUp, Gift, ShieldAlert, Store, Building2, Globe } from 'lucide-react';

export default function GiftCardsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const categories = [
        { id: 'occasions', label: 'Occasions' },
        { id: 'seasonal', label: 'Seasonal' },
        { id: 'thankyou', label: 'Thank you' },
        { id: 'birthday', label: 'Birthday' },
        { id: 'wedding', label: 'Wedding' },
        { id: 'travel', label: 'Travel' }
    ];

    const cardDesigns = [
        { id: 1, category: 'travel', img: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80' },
        { id: 2, category: 'travel', img: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=400&q=80' },
        { id: 3, category: 'birthday', img: 'https://images.unsplash.com/photo-1530103862676-fa8c91abe24b?auto=format&fit=crop&w=400&q=80' },
        { id: 4, category: 'thankyou', img: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=400&q=80' },
        { id: 5, category: 'seasonal', img: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=400&q=80' },
        { id: 6, category: 'wedding', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80' }
    ];

    return (
        <div className="gift-cards-page" style={{ background: '#fff' }}>
            {/* 1. Safety Banner */}
            <div style={{ background: 'white', padding: '16px 24px', borderBottom: '1px solid #ebebeb', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                <ShieldAlert size={20} color="#E31C5F" />
                <p style={{ fontSize: '14px', color: '#222', margin: 0 }}>
                    Beware of gift card scams. Airbnb only sells gift cards via airbnb.com and certain retailers. <span style={{ textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}>Learn more</span>
                </p>
            </div>

            {/* 2. Hero Section */}
            <div style={{ position: 'relative', height: '480px', width: '100%', overflow: 'hidden' }}>
                <img
                    src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1600&q=80"
                    alt="Groups of friends"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '24px'
                }}>
                    <h1 style={{ fontSize: '56px', fontWeight: 800, marginBottom: '24px', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Airbnb gift cards</h1>
                    <button style={{
                        background: '#fff',
                        color: '#222',
                        padding: '14px 28px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        Redeem
                    </button>
                </div>
            </div>

            <main style={{ maxWidth: '1032px', margin: '0 auto', padding: '64px 24px' }}>
                {/* 3. You give. They go. Section */}
                <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '600px', margin: '0 auto 80px auto' }}>
                    <h2 style={{ fontSize: '64px', fontWeight: 800, color: '#222', marginBottom: '16px', lineHeight: '1' }}>
                        You give.<br />They go.
                    </h2>
                    <p style={{ fontSize: '18px', color: '#222', marginBottom: '32px' }}>
                        Bring the world of Airbnb to friends and family.
                    </p>
                    <button style={{
                        background: '#222',
                        color: '#fff',
                        padding: '16px 32px',
                        borderRadius: '8px',
                        fontSize: '18px',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        Buy a gift card
                    </button>
                </div>

                {/* 4. Choice/Gallery Section */}
                <div style={{ marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>Pick a design</h2>

                    {/* Categories Tabs */}
                    <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid #ebebeb', marginBottom: '40px', overflowX: 'auto', paddingBottom: '4px' }}>
                        {categories.map((cat, i) => (
                            <button key={cat.id} style={{
                                padding: '12px 0',
                                border: 'none',
                                background: 'none',
                                borderBottom: i === 0 ? '2px solid #222' : '2px solid transparent',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: 600,
                                color: i === 0 ? '#222' : '#717171',
                                whiteSpace: 'nowrap'
                            }}>
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                        {cardDesigns.map(design => (
                            <div key={design.id} style={{ cursor: 'pointer', transition: 'transform 0.2s' }} className="card-design">
                                <div style={{
                                    aspectRatio: '1.6',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                                    marginBottom: '16px'
                                }}>
                                    <img src={design.img} alt={`Airbnb design`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#ebebeb' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. Feature Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '80px' }}>
                    <div style={{ padding: '32px', borderRadius: '16px', background: '#f7f7f7' }}>
                        <Gift size={32} style={{ marginBottom: '16px' }} />
                        <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Never expires</h3>
                        <p style={{ fontSize: '16px', color: '#717171', lineHeight: '1.5' }}>Take your time to plan the perfect trip. Gift cards never expire.</p>
                    </div>
                    <div style={{ padding: '32px', borderRadius: '16px', background: '#f7f7f7' }}>
                        <Globe size={32} style={{ marginBottom: '16px' }} />
                        <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Homes and more</h3>
                        <p style={{ fontSize: '16px', color: '#717171', lineHeight: '1.5' }}>Use your gift card for millions of homes and experiences globally.</p>
                    </div>
                </div>

                {/* 6. Buy in Stores */}
                <div style={{ marginBottom: '80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                        <Store size={28} />
                        <h2 style={{ fontSize: '32px', fontWeight: 700 }}>Buy in stores</h2>
                    </div>
                    <p style={{ fontSize: '18px', color: '#717171', marginBottom: '32px' }}>Pick up a physical gift card at most major retailers.</p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                        gap: '24px',
                        alignItems: 'center'
                    }}>
                        {/* Retailer Mocks */}
                        {[
                            'Amazon', 'Best Buy', 'Safeway', 'Whole Foods', 'Walgreens', 'Target', 'CVS', 'Kroger'
                        ].map(store => (
                            <div key={store} style={{
                                padding: '20px',
                                border: '1px solid #ebebeb',
                                borderRadius: '12px',
                                textAlign: 'center',
                                fontWeight: 700,
                                fontSize: '14px',
                                color: '#717171'
                            }}>
                                {store}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 7. Gift cards for business */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#222',
                    color: '#fff',
                    padding: '64px',
                    borderRadius: '24px',
                    textAlign: 'center',
                    marginBottom: '80px',
                    gap: '24px'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Building2 size={48} />
                    </div>
                    <h2 style={{ fontSize: '40px', fontWeight: 700 }}>Gift cards for business</h2>
                    <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                        Order bulk gift cards to reward your employees, customers, or clients.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button style={{
                            background: '#fff',
                            color: '#222',
                            padding: '14px 24px',
                            borderRadius: '8px',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            Buy in bulk
                        </button>
                    </div>
                </div>

                {/* 8. Precise FAQ Section */}
                <div style={{ borderTop: '1px solid #ebebeb', paddingTop: '80px', maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '40px' }}>Frequently asked questions</h2>
                    <div>
                        <FaqItem
                            index={0}
                            isOpen={openFaq === 0}
                            toggle={toggleFaq}
                            question="Do Airbnb gift cards expire?"
                            answer="Once a gift card has been added to your Airbnb account, the funds won’t expire."
                        />
                        <FaqItem
                            index={1}
                            isOpen={openFaq === 1}
                            toggle={toggleFaq}
                            question="Where can I find my gift card balance?"
                            answer="You can see your gift card balance in your account settings under 'Payments & Payouts'."
                        />
                        <FaqItem
                            index={2}
                            isOpen={openFaq === 2}
                            toggle={toggleFaq}
                            question="Can I buy a gift card for someone in another country?"
                            answer="Gift cards can only be redeemed by individuals who reside in the same country where the gift card was purchased. The recipient must also have a valid payment method issued in that country."
                        />
                        <FaqItem
                            index={3}
                            isOpen={openFaq === 3}
                            toggle={toggleFaq}
                            question="What can an Airbnb gift card be used for?"
                            answer="Gift cards can be used for any stay or experience on Airbnb globally."
                        />
                    </div>
                </div>

                <style jsx>{`
                    .card-design:hover {
                        transform: translateY(-4px);
                    }
                `}</style>
            </main>
        </div>
    );
}

const FaqItem = ({ index, isOpen, toggle, question, answer }: { index: number, isOpen: boolean, toggle: (i: number) => void, question: string, answer: string }) => (
    <div style={{ borderBottom: '1px solid #ebebeb' }}>
        <button
            onClick={() => toggle(index)}
            style={{
                width: '100%',
                padding: '32px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left'
            }}
        >
            <span style={{ fontSize: '18px', fontWeight: 500, color: '#222' }}>{question}</span>
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
        {isOpen && (
            <div style={{ paddingBottom: '32px', fontSize: '16px', color: '#717171', lineHeight: '1.6' }}>
                {answer}
            </div>
        )}
    </div>
);
