'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Heart, Star, Compass, Facebook, Apple, Mail } from 'lucide-react';
import Modal from '@/components/Modal';

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
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

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
            <PropertyCard
              key={property.id}
              property={property}
              onHeartClick={() => setIsAuthModalOpen(true)}
            />
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
            <PropertyCard
              key={property.id}
              property={property}
              onHeartClick={() => setIsAuthModalOpen(true)}
            />
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
            <PropertyCard
              key={property.id}
              property={property}
              onHeartClick={() => setIsAuthModalOpen(true)}
            />
          ))}
        </div>
        {/* Auth Modal */}
        <Modal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          title="Log in or sign up"
        >
          <div className="auth-modal-content" style={{ padding: '8px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px' }}>Welcome to Airbnb</h3>

            <div className="input-field" style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', color: '#717171', marginBottom: '4px' }}>Phone number</label>
              <input
                type="text"
                placeholder="Phone number"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #b0b0b0',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
            </div>

            <p style={{ fontSize: '12px', color: '#222222', marginTop: '8px', marginBottom: '24px' }}>
              We’ll call or text you to confirm your number. Standard message and data rates apply.
            </p>

            <button style={{
              width: '100%',
              padding: '14px',
              background: '#E31C5F', // Airbnb brand color
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: '24px'
            }}>
              Continue
            </button>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              margin: '24px 0',
              gap: '16px'
            }}>
              <div style={{ flex: 1, height: '1px', background: '#ebebeb' }}></div>
              <span style={{ fontSize: '12px', color: '#717171' }}>or</span>
              <div style={{ flex: 1, height: '1px', background: '#ebebeb' }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <SocialBtn icon="Facebook" label="Continue with Facebook" />
              <SocialBtn icon="Google" label="Continue with Google" />
              <SocialBtn icon="Apple" label="Continue with Apple" />
              <SocialBtn icon="Mail" label="Continue with email" />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

const PropertyCard = ({ property, onHeartClick }: { property: Property, onHeartClick: () => void }) => {
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
              onHeartClick();
            }}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              filter: 'drop-shadow(0 0px 4px rgba(0,0,0,0.5))',
              zIndex: 10
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
const SocialBtn = ({ icon, label }: { icon: string, label: string }) => (
  <button style={{
    width: '100%',
    padding: '12px',
    background: 'white',
    border: '1px solid #222222',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    position: 'relative'
  }}>
    <div style={{ position: 'absolute', left: '24px' }}>
      {icon === 'Facebook' && <Facebook size={20} color="#1877F2" />}
      {icon === 'Google' && <svg viewBox="0 0 18 18" width="18" height="18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"></path><path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"></path><path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"></path><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.468 2.01.957 4.962l3.007 2.332c.708-2.127 2.692-3.714 5.036-3.714z" fill="#EA4335"></path></svg>}
      {icon === 'Apple' && <Apple size={20} />}
      {icon === 'Mail' && <Mail size={20} />}
    </div>
    {label}
  </button>
);
