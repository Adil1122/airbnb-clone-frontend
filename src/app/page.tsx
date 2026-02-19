'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Star, MapPin, ShieldCheck, Zap, Wind, Coffee, Ship, Compass } from 'lucide-react';
import CategoryBar from '@/components/CategoryBar';
import axios from 'axios';
import Link from 'next/link';

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUrl: string;
  status: string;
  type: string;
}

interface Category {
  id: number;
  label: string;
  iconName: string;
  slug: string;
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const url = activeCategoryId
          ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties?categoryId=${activeCategoryId}`
          : `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`;
        const response = await axios.get(url);
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [activeCategoryId]);

  return (
    <div className="prime-home">
      <CategoryBar
        categories={categories}
        activeCategoryId={activeCategoryId}
        onCategoryChange={setActiveCategoryId}
      />

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1.5rem 1rem'
        }}>
          {properties.map(property => (
            <Link key={property.id} href={`/properties/${property.id}`} className="frame-card block decoration-0" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card-image-wrapper" style={{ aspectRatio: '1/1', marginBottom: '0' }}>
                <img src={property.imageUrl} alt={property.title} />
                <div className="status-badge">{property.status}</div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle like logic here
                  }}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(4px)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--slate-800)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    zIndex: 10,
                    border: 'none'
                  }}>
                  <Heart size={18} />
                </button>

                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  display: 'flex',
                  gap: '6px'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '9px',
                    fontWeight: 800,
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <ShieldCheck size={10} /> SECURE
                  </div>
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  backdropFilter: 'blur(4px)',
                  padding: '4px 10px',
                  borderRadius: '100px',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: 700
                }}>
                  ${property.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
