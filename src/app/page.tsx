'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
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

interface Experience {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUrl: string;
  reviews: number;
  category: string;
}

interface Service {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUrl: string;
  category: string;
  duration: string;
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

const MOCK_EXPERIENCES: Experience[] = [
  {
    id: 101,
    title: 'Dubai Desert Safari Adventure',
    location: 'Dubai, UAE',
    price: 89,
    rating: 4.92,
    imageUrl: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?auto=format&fit=crop&w=800&q=80',
    reviews: 234,
    category: 'Adventure'
  },
  {
    id: 102,
    title: 'Tuscan Wine Tasting Tour',
    location: 'Florence, Italy',
    price: 125,
    rating: 4.98,
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    reviews: 456,
    category: 'Food & Drink'
  },
  {
    id: 103,
    title: 'Tokyo Hidden Food Market Walk',
    location: 'Tokyo, Japan',
    price: 75,
    rating: 4.95,
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    reviews: 189,
    category: 'Food & Drink'
  },
  {
    id: 104,
    title: 'Paris Art & Architecture Walk',
    location: 'Paris, France',
    price: 65,
    rating: 4.88,
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    reviews: 312,
    category: 'Culture'
  },
  {
    id: 105,
    title: 'Bali Jungle Trek & Waterfall',
    location: 'Bali, Indonesia',
    price: 55,
    rating: 4.91,
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    reviews: 567,
    category: 'Nature'
  },
  {
    id: 106,
    title: 'Barcelona Cooking Class',
    location: 'Barcelona, Spain',
    price: 95,
    rating: 4.97,
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    reviews: 278,
    category: 'Food & Drink'
  },
  {
    id: 107,
    title: 'New York Jazz Club Night',
    location: 'New York, USA',
    price: 85,
    rating: 4.85,
    imageUrl: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=800&q=80',
    reviews: 423,
    category: 'Entertainment'
  },
  {
    id: 108,
    title: 'Santorini Sunset Sailing',
    location: 'Santorini, Greece',
    price: 145,
    rating: 4.99,
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    reviews: 389,
    category: 'Boat Tour'
  },
  {
    id: 109,
    title: 'Marrakech Medina Food Tour',
    location: 'Marrakech, Morocco',
    price: 68,
    rating: 4.93,
    imageUrl: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80',
    reviews: 198,
    category: 'Food & Drink'
  },
  {
    id: 110,
    title: 'Sydney Harbour Kayaking',
    location: 'Sydney, Australia',
    price: 79,
    rating: 4.86,
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    reviews: 156,
    category: 'Adventure'
  }
];

const MOCK_SERVICES: Service[] = [
  {
    id: 201,
    title: 'Private Chef for Dinner Party',
    location: 'Los Angeles, USA',
    price: 350,
    rating: 4.97,
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    category: 'Chef',
    duration: '4 hours'
  },
  {
    id: 202,
    title: 'Professional Photo Shoot',
    location: 'New York, USA',
    price: 275,
    rating: 4.92,
    imageUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
    category: 'Photography',
    duration: '2 hours'
  },
  {
    id: 203,
    title: 'Relaxing Swedish Massage',
    location: 'Miami, USA',
    price: 120,
    rating: 4.98,
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    category: 'Wellness',
    duration: '60 min'
  },
  {
    id: 204,
    title: 'Live Jazz Band Performance',
    location: 'New Orleans, USA',
    price: 500,
    rating: 4.95,
    imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    category: 'Entertainment',
    duration: '3 hours'
  },
  {
    id: 205,
    title: 'Yoga Instructor Session',
    location: 'San Diego, USA',
    price: 85,
    rating: 4.89,
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    category: 'Fitness',
    duration: '60 min'
  },
  {
    id: 206,
    title: 'Personal Driver & Tour Guide',
    location: 'San Francisco, USA',
    price: 200,
    rating: 4.91,
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    category: 'Transportation',
    duration: '8 hours'
  },
  {
    id: 207,
    title: 'Floral Arrangement Workshop',
    location: 'Seattle, USA',
    price: 95,
    rating: 4.87,
    imageUrl: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80',
    category: 'Art',
    duration: '2 hours'
  },
  {
    id: 208,
    title: 'Mixology Cocktail Class',
    location: 'Chicago, USA',
    price: 110,
    rating: 4.94,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    category: 'Entertainment',
    duration: '2 hours'
  },
  {
    id: 209,
    title: 'Spa & Wellness Package',
    location: 'Austin, USA',
    price: 180,
    rating: 4.96,
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    category: 'Wellness',
    duration: '3 hours'
  },
  {
    id: 210,
    title: 'Portrait Drawing by Artist',
    location: 'Denver, USA',
    price: 150,
    rating: 4.88,
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80',
    category: 'Art',
    duration: '90 min'
  }
];

const ALL_MOCK_PROPERTIES = [
  ...MOCK_PROPERTIES,
  ...MOCK_PROPERTIES.map(p => ({ ...p, id: p.id + 10 })),
  ...MOCK_PROPERTIES.map(p => ({ ...p, id: p.id + 20 })),
  ...MOCK_PROPERTIES.map(p => ({ ...p, id: p.id + 30 })),
  ...MOCK_PROPERTIES.map(p => ({ ...p, id: p.id + 40 }))
];

const ALL_MOCK_EXPERIENCES = [
  ...MOCK_EXPERIENCES,
  ...MOCK_EXPERIENCES.map(e => ({ ...e, id: e.id + 10 })),
  ...MOCK_EXPERIENCES.map(e => ({ ...e, id: e.id + 20 })),
  ...MOCK_EXPERIENCES.map(e => ({ ...e, id: e.id + 30 })),
  ...MOCK_EXPERIENCES.map(e => ({ ...e, id: e.id + 40 }))
];

const ALL_MOCK_SERVICES = [
  ...MOCK_SERVICES,
  ...MOCK_SERVICES.map(s => ({ ...s, id: s.id + 10 })),
  ...MOCK_SERVICES.map(s => ({ ...s, id: s.id + 20 })),
  ...MOCK_SERVICES.map(s => ({ ...s, id: s.id + 30 })),
  ...MOCK_SERVICES.map(s => ({ ...s, id: s.id + 40 }))
];

type TabType = 'homes' | 'experiences' | 'services';

function HomeContent() {
  const [properties] = useState<Property[]>(ALL_MOCK_PROPERTIES);
  const [experiences] = useState<Experience[]>(ALL_MOCK_EXPERIENCES);
  const [services] = useState<Service[]>(ALL_MOCK_SERVICES);
  const [localTab, setLocalTab] = useState<TabType>('homes');
  const searchParams = useSearchParams();

  const urlTab = searchParams.get('tab');
  const activeTab: TabType = (urlTab === 'experiences' || urlTab === 'services') ? urlTab : (localTab !== 'homes' ? localTab : 'homes');

  return (
    <div className="prime-home">
      <div className="container" style={{ paddingBottom: '6rem', paddingTop: '2rem' }}>
        {activeTab === 'homes' && (
          <>
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
                  onHeartClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal'))}
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
                  onHeartClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal'))}
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
                  onHeartClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal'))}
                />
              ))}
            </div>
          </>
        )}

        {activeTab === 'experiences' && (
          <>
            {/* Informational Banner */}
            <div className="info-banner" style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Continue exploring <strong>Florence</strong></span>
                <span style={{ color: '#717171' }}>• Mar 15 – 20 • 2 guests</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
                <Compass size={16} color="#717171" strokeWidth={2.5} />
                <img src="https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?auto=format&fit=crop&w=100&q=80" alt="Florence" className="banner-img" />
              </div>
            </div>

            {/* Section: Experiences in Dubai */}
            <div className="section-header">
              <h2>Experiences in Dubai</h2>
              <ChevronRight size={20} className="arrow-link" />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '24px'
            }}>
              {experiences.slice(0, 12).map(experience => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  onHeartClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal'))}
                />
              ))}
            </div>

            {/* Section: Popular in Italy */}
            <div className="section-header">
              <h2>Popular in Italy</h2>
              <ChevronRight size={20} className="arrow-link" />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '24px'
            }}>
              {experiences.slice(12, 24).map(experience => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  onHeartClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal'))}
                />
              ))}
            </div>

            {/* Section: Trending now */}
            <div className="section-header">
              <h2>Trending now</h2>
              <ChevronRight size={20} className="arrow-link" />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '24px'
            }}>
              {experiences.slice(24, 36).map(experience => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  onHeartClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal'))}
                />
              ))}
            </div>
          </>
        )}

        {activeTab === 'services' && (
          <>
            {/* Informational Banner */}
            <div className="info-banner" style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Book a <strong>Chef</strong> for your stay</span>
                <span style={{ color: '#717171' }}>• Mar 10 – 15 • 4 guests</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
                <Compass size={16} color="#717171" strokeWidth={2.5} />
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=100&q=80" alt="Chef" className="banner-img" />
              </div>
            </div>

            {/* Section: Chefs */}
            <div className="section-header">
              <h2>Chefs near you</h2>
              <ChevronRight size={20} className="arrow-link" />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '24px'
            }}>
              {services.slice(0, 12).map(service => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onHeartClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal'))}
                />
              ))}
            </div>

            {/* Section: Artists */}
            <div className="section-header">
              <h2>Artists & Photographers</h2>
              <ChevronRight size={20} className="arrow-link" />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '24px'
            }}>
              {services.slice(12, 24).map(service => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onHeartClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal'))}
                />
              ))}
            </div>

            {/* Section: Wellness & Massage */}
            <div className="section-header">
              <h2>Wellness & Massage</h2>
              <ChevronRight size={20} className="arrow-link" />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '24px'
            }}>
              {services.slice(24, 36).map(service => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onHeartClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal'))}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Tab Selector - Fixed at bottom */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTop: '1px solid #DDDDDD',
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'center',
        gap: '48px',
        zIndex: 100
      }}>
        <button
          onClick={() => setLocalTab('homes')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            padding: '8px 16px',
            borderBottom: activeTab === 'homes' ? '2px solid #222222' : '2px solid transparent',
            transition: 'all 0.2s'
          }}
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '24px', width: '24px', fill: activeTab === 'homes' ? '#222222' : '#717171' }}>
            <path d="M16 2.65l13.53 10.99-1.26 1.55L16 4.97 3.73 15.19 2.47 13.63 16 2.65zM27 15v13h-8v-8h-6v8H5V15h2v11h4v-8h10v8h4V15h2z"></path>
          </svg>
          <span style={{ fontSize: '12px', fontWeight: activeTab === 'homes' ? 600 : 400, color: activeTab === 'homes' ? '#222222' : '#717171' }}>Homes</span>
        </button>

        <button
          onClick={() => setLocalTab('experiences')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            padding: '8px 16px',
            borderBottom: activeTab === 'experiences' ? '2px solid #222222' : '2px solid transparent',
            transition: 'all 0.2s'
          }}
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '24px', width: '24px', fill: activeTab === 'experiences' ? '#222222' : '#717171' }}>
            <path d="M16 2a11 11 0 0 0-11 11c0 8.24 11 17 11 17s11-8.76 11-17A11 11 0 0 0 16 2zm0 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
          </svg>
          <span style={{ fontSize: '12px', fontWeight: activeTab === 'experiences' ? 600 : 400, color: activeTab === 'experiences' ? '#222222' : '#717171' }}>Experiences</span>
        </button>

        <button
          onClick={() => setLocalTab('services')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            padding: '8px 16px',
            borderBottom: activeTab === 'services' ? '2px solid #222222' : '2px solid transparent',
            transition: 'all 0.2s'
          }}
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '24px', width: '24px', fill: activeTab === 'services' ? '#222222' : '#717171' }}>
            <path d="M16 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm15 15a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h1.04C3.02 13.45 8.9 7.86 16 7.86s12.98 5.59 13.96 13.14z"></path>
          </svg>
          <span style={{ fontSize: '12px', fontWeight: activeTab === 'services' ? 600 : 400, color: activeTab === 'services' ? '#222222' : '#717171' }}>Services</span>
        </button>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          div:has(> .info-banner) {
            padding-bottom: 1rem !important;
          }
        }
      `}</style>
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

const ExperienceCard = ({ experience, onHeartClick }: { experience: Experience, onHeartClick: () => void }) => {
  return (
    <Link href={`/experiences/${experience.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="property-card" style={{ cursor: 'pointer' }}>
        <div className="image-wrapper" style={{
          position: 'relative',
          aspectRatio: '1',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '10px'
        }}>
          <img
            src={experience.imageUrl}
            alt={experience.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {experience.rating >= 4.9 && (
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
              Top rated
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
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#222222', marginBottom: '2px' }}>{experience.title}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px' }}>
              <span style={{ color: '#717171' }}>${experience.price} per person</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#222222' }}>
                <Star size={12} fill="#222222" />
                <span style={{ fontWeight: 400 }}>{experience.rating}</span>
              </div>
            </div>
            <span style={{ fontSize: '13px', color: '#717171' }}>{experience.reviews} reviews</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ServiceCard = ({ service, onHeartClick }: { service: Service, onHeartClick: () => void }) => {
  return (
    <Link href={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="property-card" style={{ cursor: 'pointer' }}>
        <div className="image-wrapper" style={{
          position: 'relative',
          aspectRatio: '1',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '10px'
        }}>
          <img
            src={service.imageUrl}
            alt={service.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

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
            {service.category}
          </div>

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
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#222222', marginBottom: '2px' }}>{service.title}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px' }}>
              <span style={{ color: '#717171' }}>${service.price}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#222222' }}>
                <Star size={12} fill="#222222" />
                <span style={{ fontWeight: 400 }}>{service.rating}</span>
              </div>
            </div>
            <span style={{ fontSize: '13px', color: '#717171' }}>{service.duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
};
