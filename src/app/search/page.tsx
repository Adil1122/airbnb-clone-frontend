'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api';

interface Property {
    id: number;
    title: string;
    subtitle: string;
    beds: string;
    dates: string;
    oldPrice: number;
    price: number;
    totalNights: number;
    rating: number;
    reviews: number;
    imageUrl: string;
    isGuestFavorite: boolean;
    lat: number;
    lng: number;
}

const SEARCH_RESULTS: Property[] = [
    {
        id: 1,
        title: 'Condo in Murree',
        subtitle: '| Pine Retreat Bhurban | 1BHK Deluxe Suite |...',
        beds: '1 bedroom · 1 king bed',
        dates: 'Mar 3 – 8',
        oldPrice: 177,
        price: 137,
        totalNights: 5,
        rating: 4.95,
        reviews: 86,
        imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
        isGuestFavorite: true,
        lat: 33.9113,
        lng: 73.4241,
    },
    {
        id: 2,
        title: 'Cottage in Murree',
        subtitle: '| Solmere Lodge | Stunning 3BR w/ Basmnt |...',
        beds: '3 bedrooms · 3 beds',
        dates: 'Mar 3 – 8',
        oldPrice: 713,
        price: 538,
        totalNights: 5,
        rating: 5.0,
        reviews: 17,
        imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
        isGuestFavorite: true,
        lat: 33.8997,
        lng: 73.3934,
    },
    {
        id: 3,
        title: 'Villa in Bhurban',
        subtitle: 'Beautiful mountain view villa with private garden...',
        beds: '2 bedrooms · 2 beds',
        dates: 'Mar 3 – 8',
        oldPrice: 200,
        price: 160,
        totalNights: 5,
        rating: 4.8,
        reviews: 42,
        imageUrl: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
        isGuestFavorite: false,
        lat: 33.9213,
        lng: 73.4441,
    },
    {
        id: 4,
        title: 'Cabin in Nathia Gali',
        subtitle: 'Cozy wooden cabin surrounded by pine trees...',
        beds: '1 bedroom · 1 bed',
        dates: 'Mar 3 – 8',
        oldPrice: 150,
        price: 115,
        totalNights: 5,
        rating: 4.9,
        reviews: 120,
        imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
        isGuestFavorite: true,
        lat: 33.9400,
        lng: 73.4000,
    },
    {
        id: 5,
        title: 'Apartment in Murree',
        subtitle: 'Modern apartment near Mall Road...',
        beds: '2 bedrooms · 3 beds',
        dates: 'Mar 3 – 8',
        oldPrice: 300,
        price: 229,
        totalNights: 5,
        rating: 4.7,
        reviews: 55,
        imageUrl: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80',
        isGuestFavorite: false,
        lat: 33.9072,
        lng: 73.3903,
    },
    {
        id: 6,
        title: 'House in Changla Gali',
        subtitle: 'Spacious family house with valley views...',
        beds: '4 bedrooms · 6 beds',
        dates: 'Mar 3 – 8',
        oldPrice: 500,
        price: 457,
        totalNights: 5,
        rating: 4.95,
        reviews: 30,
        imageUrl: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=80',
        isGuestFavorite: true,
        lat: 33.9200,
        lng: 73.3500,
    },
];

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 33.907,
    lng: 73.390
};

const mapOptions = {
    disableDefaultUI: true,
    zoomControl: false,
    styles: [
        {
            "featureType": "poi",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "featureType": "transit",
            "stylers": [{ "visibility": "off" }]
        }
    ]
};

export default function SearchPage() {
    const [properties] = useState<Property[]>(SEARCH_RESULTS);
    const [map, setMap] = useState<google.maps.Map | null>(null);

    /* Commenting out Google Maps hooks and callbacks for now
    const { isLoaded: _isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "" // User should provide their API key here
    });

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        const bounds = new window.google.maps.LatLngBounds();
        properties.forEach(p => bounds.extend({ lat: p.lat, lng: p.lng }));
        map.fitBounds(bounds);
        setMap(map);
    }, [properties]);

    const onUnmount = useCallback(function callback(map: google.maps.Map) {
        setMap(null);
    }, []);
    */

    const isLoaded = true; // Use true so the components expecting a 'loaded' state render their children (like the img)

    return (
        <div style={{ display: 'flex', width: '100%', minHeight: 'calc(100vh - 82px)' }}>
            {/* Left side list */}
            <div style={{ flex: '1 1 50%', maxWidth: '60%', padding: '24px 24px', overflowY: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h1 style={{ fontSize: '18px', fontWeight: 600 }}>Over 1,000 homes</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', border: '1px solid #DDDDDD', padding: '12px 16px', borderRadius: '12px' }}>
                        <div style={{ width: '20px', height: '20px', backgroundColor: '#e5e5e5', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                                <path d="M4 11h16v2H4z" />
                            </svg>
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: 500 }}>Prices include all fees</span>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '24px'
                }}>
                    {properties.map(property => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                        />
                    ))}
                </div>
            </div>

            {/* Right side map - Fixed */}
            <div style={{
                flex: '1 1 50%',
                position: 'sticky',
                top: '82px',
                height: 'calc(100vh - 82px)',
                overflow: 'hidden',
                borderLeft: '1px solid #DDDDDD'
            }}>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    {/* Commenting out Google Map integration for now as requested */}
                    {/* {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={12}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            options={mapOptions}
                        >
                            {properties.map(prop => (
                                <OverlayView
                                    key={prop.id}
                                    position={{ lat: prop.lat, lng: prop.lng }}
                                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                >
                                    <PriceMarker price={prop.price} />
                                </OverlayView>
                            ))}
                        </GoogleMap>
                    ) : (
                        <div style={{ width: '100%', height: '100%', backgroundColor: '#f7f7f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span>Loading map...</span>
                        </div>
                    )} */}

                    <img
                        src="/map-placeholder.png"
                        alt="Map Placeholder"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />

                    {/* Map Controls */}
                    <div style={{ position: 'absolute', top: '24px', right: '24px', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 100 }}>
                        <button
                            onClick={() => map?.setZoom((map.getZoom() || 12) + 1)}
                            style={{ backgroundColor: 'white', border: 'none', borderRadius: '8px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', fontSize: '20px' }}>
                            <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3"><path d="M29 3L18 3M29 3L29 14M29 3L19 13M3 29L14 29M3 29L3 18M3 29L13 19"></path></svg>
                        </button>
                        <div style={{ backgroundColor: 'white', border: 'none', borderRadius: '8px', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
                            <button
                                onClick={() => map?.setZoom((map.getZoom() || 12) + 1)}
                                style={{ border: 'none', background: 'none', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', borderBottom: '1px solid #eee', fontSize: '20px' }}>+</button>
                            <button
                                onClick={() => map?.setZoom((map.getZoom() || 12) - 1)}
                                style={{ border: 'none', background: 'none', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '20px' }}>−</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const PriceMarker = ({ price }: { price: number }) => (
    <div style={{
        backgroundColor: 'white',
        padding: '6px 12px',
        borderRadius: '24px',
        fontWeight: 800,
        fontSize: '14px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.18)',
        cursor: 'pointer',
        transform: 'translate(-50%, -50%)',
        whiteSpace: 'nowrap',
        transition: 'transform 0.1s',
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'}
    >
        ${price}
    </div>
);

const PropertyCard = ({ property }: { property: Property }) => {
    return (
        <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{
                position: 'relative',
                aspectRatio: '19/18',
                borderRadius: '16px',
                overflow: 'hidden'
            }}>
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {property.isGuestFavorite && (
                    <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#222222',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        Guest favorite
                    </div>
                )}

                <button
                    style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'none',
                        border: 'none',
                        color: 'rgba(0,0,0,0.5)',
                        cursor: 'pointer',
                        zIndex: 10,
                    }}>
                    <Heart size={28} fill="rgba(0,0,0,0.5)" stroke="white" strokeWidth={2} />
                </button>

                {/* Placeholder for dots */}
                <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '6px'
                }}>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} style={{
                            width: i === 0 ? '6px' : '4px',
                            height: i === 0 ? '6px' : '4px',
                            borderRadius: '50%',
                            backgroundColor: i === 0 ? 'white' : 'rgba(255,255,255,0.6)',
                            alignSelf: 'center'
                        }} />
                    ))}
                </div>
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#222222', margin: 0 }}>{property.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#222222' }}>
                        <Star size={14} fill="#222222" />
                        <span style={{ fontSize: '14px', fontWeight: 400 }}>{property.rating} ({property.reviews})</span>
                    </div>
                </div>
                <div style={{ color: '#717171', fontSize: '15px', marginTop: '2px', lineHeight: '1.4' }}>
                    <div>{property.subtitle}</div>
                    <div>{property.beds}</div>
                    <div>{property.dates}</div>
                </div>
                <div style={{ marginTop: '8px', fontSize: '15px' }}>
                    <span style={{ textDecoration: 'line-through', color: '#717171', marginRight: '6px' }}>${property.oldPrice}</span>
                    <span style={{ fontWeight: 600, color: '#222222' }}>${property.price}</span>
                    <span style={{ color: '#222222' }}> for {property.totalNights} nights</span>
                </div>
            </div>
        </div>
    );
};
