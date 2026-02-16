'use client';

import React, { useState } from 'react';
import {
    ShieldCheck,
    Share2,
    Heart,
    ChefHat,
    Award,
    GraduationCap,
    MessageSquare,
    Grid
} from 'lucide-react';
import ServiceFooter from '@/components/ServiceFooter';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ServiceDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = React.use(params);
    const id = resolvedParams.id;

    // Use id in a console log or just ignore it if not needed for the UI logic yet
    console.log("Viewing service:", id);

    return (
        <div style={{ backgroundColor: 'var(--slate-50)', minHeight: '100vh', paddingBottom: '100px' }}>
            {/* Architectural Hero Section */}
            <div className="container" style={{ paddingTop: '2rem' }}>
                <div style={{
                    position: 'relative',
                    height: '450px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: 'var(--lux-shadow-refined)'
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
                        alt="Culinary Experience"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />

                    {/* Floating Profile Avatar */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-40px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 10
                    }}>
                        <div style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            padding: '4px',
                            background: 'white',
                            boxShadow: 'var(--lux-shadow-deep)',
                            backgroundColor: '#eee',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                                alt="Chef Cristina"
                                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div style={{ position: 'absolute', top: '24px', right: '24px', display: 'flex', gap: '12px' }}>
                        <button className="circular-btn"><Share2 size={18} /></button>
                        <button className="circular-btn"><Heart size={18} /></button>
                    </div>

                    {/* Show All Photos Button */}
                    <Link
                        href={`/services/${id}/photos`}
                        style={{
                            position: 'absolute',
                            bottom: '24px',
                            right: '24px',
                            backgroundColor: 'white',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            fontWeight: 600,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: 'var(--slate-900)',
                            zIndex: 5
                        }}
                    >
                        <Grid size={16} />
                        Show all photos
                    </Link>
                </div>
            </div>

            <div className="container" style={{ marginTop: '5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 className="luxury-text-display" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Catalan cuisine by<br />Cristina
                    </h1>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                        <span style={{
                            background: 'var(--slate-900)',
                            color: 'white',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            fontSize: '11px',
                            fontWeight: 800,
                            letterSpacing: '0.05em'
                        }}>100€ OFF WITH CODE: PRIME100</span>
                        <span className="status-badge" style={{ position: 'static', background: 'var(--primary)', color: 'white' }}>Michelin Heart</span>
                    </div>

                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--gray)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                        I offer a variety of Catalan dishes, from farm-to-table meals to fine dining menus.
                        Each experience is tailored to your taste and location.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="luxury-layout-split">
                    {/* Left Column: Details & Experience */}
                    <div>
                        <div className="luxury-section">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: 'var(--slate-100)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)'
                                }}>
                                    <ChefHat size={24} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Private Chef in Barcelona</div>
                                    <div style={{ fontSize: '14px', color: 'var(--gray)' }}>Provided at your residence or venue</div>
                                </div>
                            </div>
                        </div>

                        <div className="luxury-section">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>My Excellence & Credentials</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <CredentialItem
                                    icon={Award}
                                    title="20 years of experience"
                                    desc="I cook for families, groups, and retreats in Barcelona, and organize destination weddings."
                                />
                                <CredentialItem
                                    icon={ShieldCheck}
                                    title="Michelin Trained"
                                    desc="I staged in a Michelin-starred restaurant in Barcelona, refining my culinary skills to the highest standard."
                                />
                                <CredentialItem
                                    icon={GraduationCap}
                                    title="Hofmann Culinary Academy"
                                    desc="Formal training at the prestigious Hofmann Culinary School, combined with deep self-taught passion."
                                />
                            </div>
                        </div>

                        <button style={{
                            width: '100%',
                            padding: '16px',
                            backgroundColor: 'white',
                            border: '1.5px solid var(--slate-200)',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            fontSize: '15px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            color: 'var(--slate-900)',
                            transition: 'all 0.2s'
                        }} className="hover-shadow">
                            <MessageSquare size={18} /> Message Cristina
                        </button>
                    </div>

                    {/* Right Column: Menu Options */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Signature Experiences</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <ExperienceCard
                                image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                                title="Tapas and Paella Journey"
                                price={84}
                                desc="A tasting of 7 artisan tapas, followed by a seafood paella and traditional Crema Catalana."
                            />
                            <ExperienceCard
                                image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                                title="Modern Tasting Menu"
                                price={119}
                                desc="A 10-course seasonal selection featuring local meats, fresh Balearic seafood, and molecular touches."
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ServiceFooter price={48} unit="guest" onAction={() => { }} />
        </div>
    );
};

const CredentialItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
        <div style={{ color: 'var(--slate-900)', marginTop: '2px' }}>
            <Icon size={20} />
        </div>
        <div>
            <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--slate-900)', marginBottom: '4px' }}>{title}</div>
            <div style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: '1.5' }}>{desc}</div>
        </div>
    </div>
);

const ExperienceCard = ({ image, title, price, desc }: { image: string, title: string, price: number, desc: string }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--slate-100)',
                boxShadow: isHovered ? 'var(--lux-shadow-deep)' : 'var(--lux-shadow-refined)',
                cursor: 'pointer',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
        >
            <div style={{ height: '160px' }}>
                <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{title}</h4>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: 800, color: 'var(--slate-900)' }}>${price}</div>
                        <div style={{ fontSize: '10px', color: 'var(--gray)', fontWeight: 600 }}>per guest</div>
                    </div>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: '1.5' }}>{desc}</p>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
