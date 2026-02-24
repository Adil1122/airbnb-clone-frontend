'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Heart, Star, Compass } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUrl: string;
  status: string;
  type: string;
  categoryId: number;
}

const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Modern Villa with Pool',
    location: 'Bangkok, Thailand',
    price: 150,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    status: 'Available',
    type: 'Villa',
    categoryId: 2
  },
  {
    id: 2,
    title: 'Cozy Farmhouse',
    location: 'Chiang Mai, Thailand',
    price: 80,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    status: 'Available',
    type: 'Farmhouse',
    categoryId: 3
  },
  {
    id: 3,
    title: 'Historic Castle Stay',
    location: 'Edinburgh, UK',
    price: 450,
    rating: 4.95,
    imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&w=800&q=80',
    status: 'Available',
    type: 'Castle',
    categoryId: 4
  },
  {
    id: 4,
    title: 'Beachfront Bungalow',
    location: 'Phuket, Thailand',
    price: 200,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    status: 'Available',
    type: 'Bungalow',
    categoryId: 1
  },
  {
    id: 5,
    title: 'Mountain Retreat',
    location: 'Swiss Alps, Switzerland',
    price: 300,
    rating: 4.85,
    imageUrl: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
    status: 'Available',
    type: 'Cabin',
    categoryId: 3
  },
  {
    id: 6,
    title: 'Urban Loft',
    location: 'New York, USA',
    price: 250,
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    status: 'Available',
    type: 'Apartment',
    categoryId: 5
  },
  {
    id: 7,
    title: 'Desert Oasis',
    location: 'Dubai, UAE',
    price: 400,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80',
    status: 'Available',
    type: 'Villa',
    categoryId: 8
  },
  {
    id: 8,
    title: 'Icy Glass Igloo',
    location: 'Lapland, Finland',
    price: 600,
    rating: 4.98,
    imageUrl: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=80',
    status: 'Available',
    type: 'Igloo',
    categoryId: 7
  },
  {
    id: 9,
    title: 'Tiny Treehouse',
    location: 'Portland, USA',
    price: 120,
    rating: 4.75,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    status: 'Available',
    type: 'Treehouse',
    categoryId: 9
  },
  {
    id: 10,
    title: 'Luxury Yacht',
    location: 'Monaco',
    price: 1000,
    rating: 4.99,
    imageUrl: 'https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&w=800&q=80',
    status: 'Available',
    type: 'Yacht',
    categoryId: 10
  }
];

// Add more mock properties to fill the sections
const ALL_MOCK_PROPERTIES = [
  ...MOCK_PROPERTIES,
  ...MOCK_PROPERTIES.map(p => ({ ...p, id: p.id + 10 })),
  ...MOCK_PROPERTIES.map(p => ({ ...p, id: p.id + 20 })),
  ...MOCK_PROPERTIES.map(p => ({ ...p, id: p.id + 30 })),
  ...MOCK_PROPERTIES.map(p => ({ ...p, id: p.id + 40 }))
];

export default function Home() {
  const [properties] = useState<Property[]>(ALL_MOCK_PROPERTIES);

  return (
    <div className="prime-home">
      <div className="container" style={{ paddingBottom: '6rem', paddingTop: '2rem' }}>
        {/* Informational Banner */}
        <div className="info-banner" style={{ cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Continue searching for homes in <strong>Bangkok</strong></span>
            <span style={{ color: '#717171' }}>• Mar 2 – 12 • 5 guests</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
            <Compass size={16} color="#717171" strokeWidth={2.5} />
            <img src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=100&q=80" alt="Bangkok" className="banner-img" />
          </div>
        </div>

        {/* Section: Stay near... */}
        <div className="section-header">
          <h2>Stay near Wat Saket Ratchaworamahawihan</h2>
          <ChevronRight size={20} className="arrow-link" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '24px'
        }}>
          {properties.slice(0, 12).map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Section: Available for similar dates */}
        <div className="section-header">
          <h2>Available for similar dates</h2>
          <ChevronRight size={20} className="arrow-link" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '24px'
        }}>
          {properties.slice(12, 24).map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Section: Stay in Bang Rak */}
        <div className="section-header">
          <h2>Stay in Bang Rak</h2>
          <ChevronRight size={20} className="arrow-link" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '24px'
        }}>
          {properties.slice(24, 36).map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <Link href={`/properties/${property.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="property-card" style={{ cursor: 'pointer' }}>
        <div className="image-wrapper" style={{
          position: 'relative',
          aspectRatio: '1',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '10px'
        }}>
          <img
            src={property.imageUrl}
            alt={property.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* Guest Favorite Badge */}
          {property.rating >= 4.8 && (
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#222222',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              Guest favorite
            </div>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              // Handle like logic
            }}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'none',
              border: 'none',
              color: 'white',
              filter: 'drop-shadow(0 0px 4px rgba(0,0,0,0.5))'
            }}>
            <Heart size={24} strokeWidth={2.5} fill="none" />
          </button>
        </div>

        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#222222', marginBottom: '2px' }}>{property.title}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px' }}>
              <span style={{ color: '#717171' }}>${property.price} for 10 nights</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#222222' }}>
                <Star size={12} fill="#222222" />
                <span style={{ fontWeight: 400 }}>{property.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
