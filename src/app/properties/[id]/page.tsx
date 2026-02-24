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
    Zap,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Map as MapIcon
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

export default function PropertyDetailPage() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id as string;
    const isProperty11 = id === '11';

    const property = {
        id: parseInt(id) || 2,
        title: isProperty11 ? "Luxury Villa with Panoramic Views" : "P4 - Lovely 2 BR 3 Beds, Family Choice, BTS!",
        location: isProperty11 ? "Bang Rak, Bangkok, Thailand" : "Phaya Thai, Bangkok, Thailand",
        price: isProperty11 ? 120 : 45,
        rating: 4.88,
        reviews: 42,
        guestsCount: 5,
        bedroomsCount: 2,
        bedsCount: 3,
        bathsCount: 1,
        host: {
            name: "Pichaya",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
            yearsHosting: 5,
            isSuperhost: true
        },
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=600"
        ]
    };

    const handlePhotoClick = () => {
        if (isProperty11) {
            router.push('/services/3/photos');
        }
    };

    return (
        <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container" style={{ paddingTop: '24px' }}>
                {/* Header Title Section */}
                <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h1 style={{ fontSize: '26px', fontWeight: 600, color: '#222222', marginBottom: '8px' }}>
                            {property.title}
                        </h1>
                        <div style={{ display: 'flex', gap: '16px', paddingTop: '4px' }}>
                            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textDecoration: 'underline' }}>
                                <Share2 size={16} /> Share
                            </button>
                            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textDecoration: 'underline' }}>
                                <Heart size={16} /> Save
                            </button>
                        </div>
                    </div>
                </div>

                {/* Airbnb Style 5-Image Grid */}
                <div
                    onClick={handlePhotoClick}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 1fr',
                        gridTemplateRows: 'repeat(2, 225px)',
                        gap: '8px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        position: 'relative',
                        cursor: isProperty11 ? 'pointer' : 'default'
                    }}
                >
                    {/* Main Large Image */}
                    <div style={{ gridColumn: '1 / 2', gridRow: '1 / 3' }}>
                        <img src={property.images[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Main" />
                    </div>
                    {/* 4 Small Images */}
                    <div style={{ gridColumn: '2 / 3', gridRow: '1 / 2' }}>
                        <img src={property.images[1]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Img 1" />
                    </div>
                    <div style={{ gridColumn: '3 / 4', gridRow: '1 / 2' }}>
                        <img src={property.images[2]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Img 2" />
                    </div>
                    <div style={{ gridColumn: '2 / 3', gridRow: '2 / 3' }}>
                        <img src={property.images[3]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Img 3" />
                    </div>
                    <div style={{ gridColumn: '3 / 4', gridRow: '2 / 3', position: 'relative' }}>
                        <img src={property.images[4]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Img 4" />
                        <button style={{
                            position: 'absolute',
                            bottom: '16px',
                            right: '16px',
                            backgroundColor: 'white',
                            border: '1px solid #222222',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}>
                            <Grid size={16} /> Show all photos
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container" style={{ marginTop: '32px' }}>
                {/* Main Info and Booking Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '80px' }}>
                    {/* Left Column: Details */}
                    <div>
                        {/* Summary Header */}
                        <div style={{ paddingBottom: '24px', borderBottom: '1px solid #DDDDDD', marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '22px', fontWeight: 600, color: '#222222', marginBottom: '4px' }}>
                                Entire apartment in Phaya Thai, Thailand
                            </h2>
                            <p style={{ fontSize: '16px', color: '#222222' }}>
                                {property.guestsCount} guests · {property.bedroomsCount} bedrooms · {property.bedsCount} beds · {property.bathsCount} bath
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                                    <Star size={16} fill="#222222" />
                                    <span>{property.rating}</span>
                                </div>
                                <span>·</span>
                                <span style={{ fontWeight: 600, textDecoration: 'underline' }}>{property.reviews} reviews</span>
                            </div>
                        </div>

                        {/* Host Section */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingBottom: '24px', borderBottom: '1px solid #DDDDDD', marginBottom: '32px' }}>
                            <img
                                src={property.host.image}
                                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                                alt="Host"
                            />
                            <div>
                                <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Hosted by {property.host.name}</h3>
                                <p style={{ fontSize: '14px', color: '#717171' }}>{property.host.yearsHosting} years hosting</p>
                            </div>
                        </div>

                        {/* Features */}
                        <div style={{ paddingBottom: '24px', borderBottom: '1px solid #DDDDDD', marginBottom: '32px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <MapPin size={24} style={{ marginTop: '2px' }} />
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: 600 }}>Great location</h4>
                                        <p style={{ fontSize: '14px', color: '#717171' }}>100% of recent guests gave the location a 5-star rating.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <Zap size={24} style={{ marginTop: '2px' }} />
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: 600 }}>Fast wifi</h4>
                                        <p style={{ fontSize: '14px', color: '#717171' }}>At 250 Mbps, you can take video calls and stream videos for your whole group.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '4px', border: '1px solid #222222', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>
                                        ★
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: 600 }}>Guest favorite</h4>
                                        <p style={{ fontSize: '14px', color: '#717171' }}>One of the most loved homes on Airbnb based on ratings, reviews, and reliability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div style={{ paddingBottom: '24px', borderBottom: '1px solid #DDDDDD', marginBottom: '32px' }}>
                            <p style={{ fontSize: '16px', lineHeight: '24px', color: '#222222', whiteSpace: 'pre-line' }}>
                                Welcome to our lovely 2-bedroom apartment! Perfect for families, this space is located just minutes away from the BTS station, making it easy to explore Bangkok.
                                <br /><br />
                                The apartment features a cozy living area, a fully equipped kitchen, and comfortable beds to ensure a restful stay. Whether you're here for business or leisure, our home offers the perfect base for your Thai adventure.
                            </p>
                            <button style={{ marginTop: '16px', fontSize: '16px', fontWeight: 600, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>
                                Show more
                            </button>
                        </div>

                        {/* Amenities */}
                        <div style={{ paddingBottom: '24px' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px' }}>What this place offers</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <Wifi size={24} /> <span style={{ fontSize: '16px' }}>Wifi</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <Tv size={24} /> <span style={{ fontSize: '16px' }}>TV</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <Car size={24} /> <span style={{ fontSize: '16px' }}>Free parking on premises</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <UtensilsCrossed size={24} /> <span style={{ fontSize: '16px' }}>Kitchen</span>
                                </div>
                            </div>
                            <button style={{
                                marginTop: '32px',
                                padding: '13px 23px',
                                border: '1px solid #222222',
                                borderRadius: '8px',
                                backgroundColor: 'white',
                                fontWeight: 600,
                                fontSize: '16px',
                                cursor: 'pointer'
                            }}>
                                Show all 42 amenities
                            </button>
                        </div>

                        {/* Calendar Section */}
                        <div style={{ paddingBottom: '48px', borderBottom: '1px solid #DDDDDD', marginBottom: '48px', marginTop: '48px' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '8px' }}>10 nights in Phaya Thai</h3>
                            <p style={{ fontSize: '14px', color: '#717171', marginBottom: '24px' }}>Mar 2, 2026 – Mar 12, 2026</p>

                            <div style={{ display: 'flex', gap: '40px' }}>
                                {/* Month 1 */}
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><ChevronLeft size={20} /></button>
                                        <h4 style={{ fontSize: '16px', fontWeight: 600 }}>March 2026</h4>
                                        <div style={{ width: '20px' }}></div>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', gap: '8px' }}>
                                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                            <div key={day} style={{ fontSize: '12px', fontWeight: 600, color: '#717171' }}>{day}</div>
                                        ))}
                                        {[...Array(31)].map((_, i) => (
                                            <div key={i} style={{
                                                height: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '14px',
                                                cursor: 'pointer',
                                                borderRadius: '50%',
                                                backgroundColor: (i + 1 >= 2 && i + 1 <= 12) ? '#F7F7F7' : 'transparent',
                                                fontWeight: (i + 1 >= 2 && i + 1 <= 12) ? 600 : 400,
                                                color: (i + 1 < 1) ? '#DDDDDD' : '#222222'
                                            }}>
                                                {i + 1}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Month 2 */}
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                        <div style={{ width: '20px' }}></div>
                                        <h4 style={{ fontSize: '16px', fontWeight: 600 }}>April 2026</h4>
                                        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><ChevronRight size={20} /></button>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', gap: '8px' }}>
                                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                            <div key={day} style={{ fontSize: '12px', fontWeight: 600, color: '#717171' }}>{day}</div>
                                        ))}
                                        {[...Array(30)].map((_, i) => (
                                            <div key={i} style={{
                                                height: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '14px',
                                                cursor: 'pointer'
                                            }}>
                                                {i + 1}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontSize: '14px', fontWeight: 600 }}>Clear dates</button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Booking Card */}
                    <div>
                        <div style={{ position: 'sticky', top: '128px' }}>
                            <div style={{
                                backgroundColor: 'white',
                                border: '1px solid #DDDDDD',
                                borderRadius: '12px',
                                padding: '24px',
                                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 6px 16px'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                        <span style={{ fontSize: '22px', fontWeight: 600 }}>${property.price}</span>
                                        <span style={{ color: '#222222', fontSize: '16px' }}>night</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: 600 }}>
                                        <Star size={12} fill="#222222" />
                                        <span>{property.rating}</span>
                                        <span>·</span>
                                        <span style={{ color: '#717171', fontWeight: 400, textDecoration: 'underline' }}>{property.reviews} reviews</span>
                                    </div>
                                </div>

                                <div style={{ border: '1px solid #B0B0B0', borderRadius: '8px', marginBottom: '16px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                                        <div style={{ padding: '10px 12px', borderBottom: '1px solid #B0B0B0', borderRight: '1px solid #B0B0B0' }}>
                                            <div style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' }}>Check-in</div>
                                            <div style={{ fontSize: '14px' }}>3/2/2026</div>
                                        </div>
                                        <div style={{ padding: '10px 12px', borderBottom: '1px solid #B0B0B0' }}>
                                            <div style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' }}>Checkout</div>
                                            <div style={{ fontSize: '14px' }}>3/12/2026</div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '10px 12px' }}>
                                        <div style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' }}>Guests</div>
                                        <div style={{ fontSize: '14px' }}>5 guests</div>
                                    </div>
                                </div>

                                <button style={{
                                    width: '100%',
                                    backgroundColor: '#E31C5F',
                                    backgroundImage: 'linear-gradient(to right, #E31C5F 0%, #D70466 100%)',
                                    color: 'white',
                                    padding: '14px',
                                    borderRadius: '8px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginBottom: '16px'
                                }}>
                                    Reserve
                                </button>

                                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                                    <p style={{ color: '#222222', fontSize: '14px' }}>You won't be charged yet</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px' }}>
                                        <span style={{ textDecoration: 'underline' }}>${property.price} x 10 nights</span>
                                        <span>${property.price * 10}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px' }}>
                                        <span style={{ textDecoration: 'underline' }}>Airbnb service fee</span>
                                        <span>$0</span>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        paddingTop: '16px',
                                        borderTop: '1px solid #DDDDDD',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        marginTop: '12px'
                                    }}>
                                        <span>Total before taxes</span>
                                        <span>${property.price * 10}</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{
                                marginTop: '24px',
                                padding: '24px',
                                border: '1px solid #DDDDDD',
                                borderRadius: '12px',
                                display: 'flex',
                                gap: '16px',
                                alignItems: 'center'
                            }}>
                                <div style={{ color: '#E31C5F' }}>
                                    <ShieldCheck size={32} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '16px', fontWeight: 600 }}>AirCover</h4>
                                    <p style={{ fontSize: '14px', color: '#717171' }}>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full Width Sections Below the Grid */}
                <div style={{ borderTop: '1px solid #DDDDDD', marginTop: '48px', paddingTop: '48px' }}>
                    {/* Reviews Section */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '22px', fontWeight: 600, marginBottom: '32px' }}>
                            <Star size={20} fill="#222222" />
                            <span>{property.rating} · {property.reviews} reviews</span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                            {[1, 2].map((i) => (
                                <div key={i}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#F7F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 600 }}>
                                            {i === 1 ? 'J' : 'M'}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '16px', fontWeight: 600 }}>{i === 1 ? 'John' : 'Maria'}</div>
                                            <div style={{ fontSize: '14px', color: '#717171' }}>Joined in 2023</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px', fontSize: '12px' }}>
                                        <div style={{ display: 'flex' }}>
                                            {[...Array(5)].map((_, index) => <Star key={index} size={10} fill="#222222" />)}
                                        </div>
                                        <span style={{ fontWeight: 600 }}>5.0</span>
                                        <span>·</span>
                                        <span style={{ color: '#717171' }}>2 weeks ago</span>
                                    </div>
                                    <p style={{ fontSize: '16px', lineHeight: '24px', color: '#222222' }}>
                                        {i === 1
                                            ? "The place was amazing! Exactly like the pictures. The location is perfect, very close to the BTS station. Pichaya was a great host and provided everything we needed."
                                            : "Excellent stay for my family. The 2 bedrooms were spacious and clean. The view from the balcony is lovely. Highly recommend this place for anyone visiting Bangkok!"}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <button style={{
                            marginTop: '32px',
                            padding: '13px 23px',
                            border: '1px solid #222222',
                            borderRadius: '8px',
                            backgroundColor: 'white',
                            fontWeight: 600,
                            fontSize: '16px',
                            cursor: 'pointer'
                        }}>
                            Show all {property.reviews} reviews
                        </button>
                    </div>

                    {/* Where you'll be Section */}
                    <div style={{ marginTop: '48px', paddingTop: '48px', borderTop: '1px solid #DDDDDD' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px' }}>Where you'll be</h3>
                        <div style={{
                            width: '100%',
                            height: '480px',
                            backgroundColor: '#F7F7F7',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            marginBottom: '24px',
                            position: 'relative'
                        }}>
                            {/* Mock Map Image */}
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200&h=480"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                alt="Map"
                            />
                            {/* Location Pin Mock */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    backgroundColor: '#E31C5F',
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                                }}>
                                    <Home size={24} />
                                </div>
                                <div style={{
                                    marginTop: '8px',
                                    backgroundColor: 'white',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                                }}>
                                    Your property
                                </div>
                            </div>
                        </div>
                        <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Phaya Thai, Bangkok, Thailand</h4>
                        <p style={{ fontSize: '16px', lineHeight: '24px', color: '#222222' }}>
                            Phaya Thai is a vibrant district in Bangkok, known for its mix of modern shopping malls, traditional markets, and excellent street food. The BTS Skytrain connection makes it incredibly convenient to reach other major areas of the city.
                        </p>
                        <button style={{ marginTop: '16px', fontWeight: 600, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>Show more</button>
                    </div>

                    {/* Things to Know Section */}
                    <div style={{ marginTop: '48px', paddingTop: '48px', borderTop: '1px solid #DDDDDD' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px' }}>Things to know</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                            <div>
                                <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>House rules</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '16px' }}>
                                    <li>Check-in after 3:00 PM</li>
                                    <li>Checkout before 11:00 AM</li>
                                    <li>5 guests maximum</li>
                                </ul>
                                <button style={{ marginTop: '16px', fontWeight: 600, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>Show more</button>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>Safety & property</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '16px' }}>
                                    <li>No carbon monoxide alarm</li>
                                    <li>Smoke alarm</li>
                                    <li>Security camera on property</li>
                                </ul>
                                <button style={{ marginTop: '16px', fontWeight: 600, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>Show more</button>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>Cancellation policy</h4>
                                <p style={{ fontSize: '16px', lineHeight: '24px', color: '#222222' }}>
                                    Add your trip dates to get the cancellation details for this stay.
                                </p>
                                <button style={{ marginTop: '16px', fontWeight: 600, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>Add dates</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
