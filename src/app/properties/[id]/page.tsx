'use client';

import React from 'react';
import {
    Star,
    MapPin,
    Share2,
    Heart,
    ShieldCheck,
    Wifi,
    Car,
    Tv,
    UtensilsCrossed,
    Grid,
    Users,
    Home,
    Waves,
    Zap
} from 'lucide-react';
import Link from 'next/link';

export default function PropertyDetailPage() {
    const property = {
        id: 1,
        title: "Celestial Glass Villa over the Azure Bay",
        location: "Santorini, Greece",
        price: 850,
        rating: 4.98,
        reviews: 124,
        host: {
            name: "Architecture Studio Oia",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
            yearsHosting: 2
        },
        details: {
            guests: 4,
            bedrooms: 2,
            beds: 2,
            baths: 1
        },
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600"
        ]
    };

    return (
        <div style={{ backgroundColor: 'var(--slate-50)', minHeight: '100vh', paddingBottom: '100px' }}>
            {/* Hero Image Section */}
            <div className="container" style={{ paddingTop: '2rem' }}>
                <div style={{
                    position: 'relative',
                    height: '500px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: 'var(--lux-shadow-deep)'
                }}>
                    <img
                        src={property.images[0]}
                        alt={property.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />

                    {/* Actions */}
                    <div style={{ position: 'absolute', top: '24px', right: '24px', display: 'flex', gap: '12px' }}>
                        <button className="circular-btn"><Share2 size={18} /></button>
                        <button className="circular-btn"><Heart size={18} /></button>
                    </div>

                    {/* Show All Photos Button */}
                    <button
                        style={{
                            position: 'absolute',
                            bottom: '24px',
                            right: '24px',
                            backgroundColor: 'white',
                            padding: '10px 20px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            fontWeight: 700,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            border: 'none',
                            zIndex: 5
                        }}
                    >
                        <Grid size={16} />
                        Show all photos
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="container" style={{ marginTop: '3rem' }}>
                {/* Title Section */}
                <div style={{ marginBottom: '2rem' }}>
                    <h1 className="luxury-text-display" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        {property.title}
                    </h1>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem', fontSize: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
                            <Star size={16} fill="#D4AF37" strokeWidth={0} />
                            <span>{property.rating}</span>
                            <span style={{ color: 'var(--gray)', textDecoration: 'underline', cursor: 'pointer' }}>
                                ({property.reviews} reviews)
                            </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gray)' }}>
                            <MapPin size={16} />
                            <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>{property.location}</span>
                        </div>
                        <div style={{
                            padding: '6px 12px',
                            backgroundColor: 'var(--slate-900)',
                            color: 'white',
                            borderRadius: '8px',
                            fontSize: '10px',
                            fontWeight: 800,
                            letterSpacing: '0.05em'
                        }}>
                            ELITE COLLECTION
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="luxury-layout-split">
                    {/* Left Column: Details */}
                    <div>
                        {/* Host Section */}
                        <div className="luxury-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                                    Hosted by {property.host.name}
                                </h2>
                                <p style={{ fontSize: '1rem', color: 'var(--gray)', fontWeight: 500 }}>
                                    {property.details.guests} guests · {property.details.bedrooms} bedrooms · {property.details.beds} beds · {property.details.baths} bath
                                </p>
                            </div>
                            <div>
                                <img
                                    src={property.host.image}
                                    style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', boxShadow: 'var(--lux-shadow-refined)' }}
                                    alt="Host"
                                />
                            </div>
                        </div>

                        {/* Features */}
                        <div className="luxury-section">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <FeatureItem
                                    icon={Waves}
                                    title="Ocean Interaction"
                                    description="Seamless floor-to-ceiling glass creates an infinite connection with the Aegean."
                                />
                                <FeatureItem
                                    icon={Zap}
                                    title="Instant Concierge"
                                    description="Digital-first experience with 24/7 on-demand human support for any request."
                                />
                                <FeatureItem
                                    icon={ShieldCheck}
                                    title="Enhanced Clean"
                                    description="This host committed to a rigorous 5-step enhanced cleaning process."
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="luxury-section">
                            <h3 style={{ fontSize: '12px', fontWeight: 800, marginBottom: '1rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                THE PHILOSOPHY
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--slate-800)' }}>
                                "We didn't build a house; we framed the horizon." The Celestial Glass Villa is a manifesto of minimalist luxury. Carved into the cliffs of Santorini, it uses stone, glass, and light as its primary materials.
                                <br /><br />
                                Every morning, the sunrise is your alarm clock, and every evening, the caldera is your private theater. It is a space designed for deep relaxation and architectural inspiration.
                            </p>
                        </div>

                        {/* Amenities */}
                        <div className="luxury-section">
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>What this place offers</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                <AmenityItem icon={Wifi} label="Ultra-Wideband Mesh" />
                                <AmenityItem icon={Car} label="Free parking" />
                                <AmenityItem icon={Tv} label='65" 4K Smart TV' />
                                <AmenityItem icon={UtensilsCrossed} label="Chef's Kitchen" />
                            </div>
                            <button style={{
                                marginTop: '2rem',
                                padding: '14px 32px',
                                border: '2px solid var(--slate-900)',
                                borderRadius: '12px',
                                backgroundColor: 'transparent',
                                fontWeight: 700,
                                fontSize: '14px',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}>
                                Show all 42 amenities
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Booking Card */}
                    <div>
                        <div style={{ position: 'sticky', top: '120px' }}>
                            <div className="luxury-sidebar-glass">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                                        <span style={{ fontSize: '2rem', fontWeight: 800 }}>${property.price}</span>
                                        <span style={{ color: 'var(--gray)', fontWeight: 600 }}>/ night</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                                        <Star size={14} fill="var(--slate-900)" strokeWidth={0} />
                                        <span>{property.rating}</span>
                                    </div>
                                </div>

                                <div className="luxury-input-frame" style={{ marginBottom: '1.5rem' }}>
                                    <div className="input-cell">
                                        <div className="label-micro">Check-in</div>
                                        <div className="value-main">Add date</div>
                                    </div>
                                    <div className="input-cell">
                                        <div className="label-micro">Checkout</div>
                                        <div className="value-main">Add date</div>
                                    </div>
                                    <div className="input-cell">
                                        <div className="label-micro">Guests</div>
                                        <div className="value-main">1 guest</div>
                                    </div>
                                </div>

                                <button className="luxury-cta">
                                    Reserve
                                </button>

                                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                                    <p style={{ color: 'var(--gray)', fontSize: '13px', fontWeight: 600 }}>You won't be charged yet</p>
                                </div>

                                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--slate-100)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '15px' }}>
                                        <span>${property.price} x 5 nights</span>
                                        <span style={{ fontWeight: 700 }}>${property.price * 5}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '15px' }}>
                                        <span>Service fee</span>
                                        <span style={{ fontWeight: 700 }}>$0</span>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        paddingTop: '1rem',
                                        borderTop: '2px solid var(--slate-900)',
                                        fontSize: '1.1rem',
                                        fontWeight: 800
                                    }}>
                                        <span>Total</span>
                                        <span>${property.price * 5}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
        <div style={{ marginTop: '2px' }}>
            <Icon size={20} className="text-slate-900" />
        </div>
        <div>
            <h4 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>{title}</h4>
            <p style={{ color: 'var(--gray)', fontSize: '15px', lineHeight: '1.5' }}>{description}</p>
        </div>
    </div>
);

const AmenityItem = ({ icon: Icon, label }: { icon: any, label: string }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
        <Icon size={20} style={{ color: 'var(--slate-700)' }} />
        <span style={{ fontSize: '15px', fontWeight: 600 }}>{label}</span>
    </div>
);
