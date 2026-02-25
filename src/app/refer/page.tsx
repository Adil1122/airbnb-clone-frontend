'use client';

import React, { useState } from 'react';
import { Copy, Facebook, MessageCircle, Mail, Twitter, Share2, Check, ChevronDown, ChevronUp } from 'lucide-react';
export default function ReferPage() {
    const [isCopied, setIsCopied] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('https://www.airbnb.com/refer?r=67');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="refer-page" style={{ background: '#fff', minHeight: '100vh' }}>
            <main style={{ maxWidth: '1032px', margin: '0 auto', padding: '64px 24px' }}>
                {/* Hero Section */}
                <div style={{ marginBottom: '48px' }}>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#222', marginBottom: '16px', lineHeight: '1.1' }}>
                        Earn $100 for every <br /> new host you refer
                    </h1>
                    <p style={{ fontSize: '18px', color: '#222', opacity: 0.8 }}>
                        Help your friends start their hosting journey and earn a cash reward for each one who completes a stay.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)', gap: '80px' }}>
                    {/* Left Column: Sharing Tool */}
                    <div>
                        <div style={{
                            border: '1px solid #ebebeb',
                            borderRadius: '16px',
                            padding: '32px',
                            boxShadow: '0 6px 16px rgba(0,0,0,0.08)'
                        }}>
                            <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px' }}>Invite your friends</h2>

                            <div style={{ marginBottom: '32px' }}>
                                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#717171', marginBottom: '8px', textTransform: 'uppercase' }}>
                                    Your referral link
                                </label>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    background: '#f7f7f7',
                                    padding: '12px 16px',
                                    borderRadius: '8px',
                                    border: '1px solid #ddd'
                                }}>
                                    <span style={{ flex: 1, fontSize: '14px', color: '#222', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        airbnb.com/refer?r=67
                                    </span>
                                    <button
                                        onClick={copyToClipboard}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: isCopied ? '#008489' : '#222',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            fontSize: '14px',
                                            fontWeight: 600
                                        }}
                                    >
                                        {isCopied ? <Check size={18} /> : <Copy size={18} />}
                                        {isCopied ? 'Copied' : 'Copy'}
                                    </button>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                                <ShareOption icon={<Facebook size={24} color="#1877F2" />} label="Facebook" />
                                <ShareOption icon={<MessageCircle size={24} color="#0084ff" />} label="Messenger" />
                                <ShareOption icon={<Twitter size={24} color="#1DA1F2" />} label="Twitter" />
                                <ShareOption icon={<Mail size={24} color="#717171" />} label="Email" />
                            </div>

                            <div style={{ marginTop: '32px', textAlign: 'center' }}>
                                <button style={{
                                    background: '#222',
                                    color: '#fff',
                                    padding: '14px 24px',
                                    borderRadius: '8px',
                                    fontWeight: 600,
                                    border: 'none',
                                    cursor: 'pointer',
                                    width: '100%'
                                }}>
                                    Import contacts
                                </button>
                            </div>
                        </div>

                        {/* How it Works */}
                        <div style={{ marginTop: '64px' }}>
                            <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '40px' }}>How it works</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                <Step num={1} title="Send an invite" desc="Share your link with friends who have never hosted on Airbnb." />
                                <Step num={2} title="They list their home" desc="Help them through the process or let them explore on their own." />
                                <Step num={3} title="You get paid" desc="Once they complete their first qualifying booking, you'll receive your reward." />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dashboard & FAQ */}
                    <div>
                        <div style={{ marginBottom: '64px' }}>
                            <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px' }}>Your referrals</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <StatCard label="Invited" value="0" />
                                <StatCard label="Listed" value="0" />
                                <StatCard label="Earned" value="$0" isHighlight />
                            </div>
                            <p style={{ marginTop: '16px', fontSize: '14px', color: '#717171' }}>
                                Rewards will be sent to your payout method once conditions are met.
                            </p>
                        </div>

                        <div style={{ borderTop: '1px solid #ebebeb', paddingTop: '48px' }}>
                            <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px' }}>Frequently asked questions</h2>
                            <div>
                                <FaqItem
                                    index={0}
                                    isOpen={openFaq === 0}
                                    toggle={toggleFaq}
                                    question="Who can I refer?"
                                    answer="You can refer anyone who has never published a listing on Airbnb before. They must create a new listing using your unique link."
                                />
                                <FaqItem
                                    index={1}
                                    isOpen={openFaq === 1}
                                    toggle={toggleFaq}
                                    question="When do I get my reward?"
                                    answer="You'll receive your reward after your referred friend completes their first qualifying reservation. This usually happens a few days after their first guest checks out."
                                />
                                <FaqItem
                                    index={2}
                                    isOpen={openFaq === 2}
                                    toggle={toggleFaq}
                                    question="Is there a limit to how many people I can refer?"
                                    answer="Current terms allow for unlimited referrals, but rewards are subject to the specific campaign limits mentioned in our Terms of Service."
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div style={{ marginTop: '80px', paddingTop: '48px', borderTop: '1px solid #ebebeb' }}>
                    <p style={{ fontSize: '14px', color: '#717171', lineHeight: '1.5' }}>
                        Referrals are subject to the <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Referral Terms and Conditions</span>. Qualifying bookings must have a minimum value as specified in the terms. Rewards are paid out in your local currency.
                    </p>
                </div>
            </main>
        </div>
    );
}

const ShareOption = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        padding: '12px',
        borderRadius: '8px',
        transition: 'background 0.2s'
    }} className="share-opt">
        <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '1px solid #ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {icon}
        </div>
        <span style={{ fontSize: '12px', color: '#222' }}>{label}</span>
        <style jsx>{`
            .share-opt:hover { background: #f7f7f7; }
        `}</style>
    </div>
);

const Step = ({ num, title, desc }: { num: number, title: string, desc: string }) => (
    <div style={{ display: 'flex', gap: '24px' }}>
        <div style={{
            minWidth: '32px',
            height: '32px',
            borderRadius: '50%',
            background: '#222',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '14px'
        }}>
            {num}
        </div>
        <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#222', marginBottom: '4px' }}>{title}</h3>
            <p style={{ fontSize: '16px', color: '#717171', lineHeight: '1.4' }}>{desc}</p>
        </div>
    </div>
);

const StatCard = ({ label, value, isHighlight = false }: { label: string, value: string, isHighlight?: boolean }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 20px',
        borderRadius: '12px',
        background: isHighlight ? '#f7f7f7' : '#fff',
        border: '1px solid #ebebeb'
    }}>
        <span style={{ fontSize: '16px', fontWeight: isHighlight ? 600 : 400, color: '#222' }}>{label}</span>
        <span style={{ fontSize: '20px', fontWeight: 800, color: '#222' }}>{value}</span>
    </div>
);

const FaqItem = ({ index, isOpen, toggle, question, answer }: { index: number, isOpen: boolean, toggle: (i: number) => void, question: string, answer: string }) => (
    <div style={{ borderBottom: '1px solid #ebebeb' }}>
        <button
            onClick={() => toggle(index)}
            style={{
                width: '100%',
                padding: '24px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left'
            }}
        >
            <span style={{ fontSize: '18px', color: '#222' }}>{question}</span>
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isOpen && (
            <div style={{ paddingBottom: '24px', fontSize: '16px', color: '#717171', lineHeight: '1.5' }}>
                {answer}
            </div>
        )}
    </div>
);
