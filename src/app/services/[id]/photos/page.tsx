'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const PHOTO_SECTIONS = [
    {
        id: 'exterior',
        title: 'Exterior',
        photos: [
            'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
        ]
    },
    {
        id: 'kitchen',
        title: 'Kitchen',
        photos: [
            'https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=2070&auto=format&fit=crop'
        ]
    },
    {
        id: 'living',
        title: 'Living area',
        photos: [
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop'
        ]
    },
    {
        id: 'bedroom',
        title: 'Bedroom',
        photos: [
            'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2073&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop'
        ]
    },
    {
        id: 'bathroom',
        title: 'Full bathroom',
        photos: [
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop'
        ]
    }
];

const ALL_PHOTOS = PHOTO_SECTIONS.flatMap(section => section.photos);

export default function PhotoTourPage() {
    const params = useParams();
    const router = useRouter();
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState('exterior');

    // Intersection Observer to update active section on scroll
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        PHOTO_SECTIONS.forEach((section) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(section.id);
                    }
                },
                { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
            );

            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId); // Immediate feedback
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100; // Account for sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedPhotoIndex !== null) {
            setSelectedPhotoIndex((selectedPhotoIndex + 1) % ALL_PHOTOS.length);
        }
    };

    const handleBack = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedPhotoIndex !== null) {
            setSelectedPhotoIndex((selectedPhotoIndex - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length);
        }
    };

    // Close on escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedPhotoIndex(null);
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handleBack();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedPhotoIndex]);

    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh', color: 'var(--slate-900)' }}>
            {/* Header / Nav */}
            <div style={{
                position: 'sticky',
                top: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                zIndex: 100,
                borderBottom: '1px solid var(--slate-100)',
                padding: '0 24px'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '80px',
                    justifyContent: 'space-between'
                }}>
                    <button
                        onClick={() => router.back()}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            borderRadius: '50%',
                            transition: 'background 0.2s'
                        }}
                        className="hover-bg-slate-100"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '4px' }}>
                        {PHOTO_SECTIONS.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    padding: '8px 4px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: activeSection === section.id ? 'var(--slate-900)' : 'var(--gray)',
                                    cursor: 'pointer',
                                    borderBottom: activeSection === section.id ? '2px solid var(--slate-900)' : '2px solid transparent',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>

                    <div style={{ width: '40px' }} /> {/* Spacer */}
                </div>
            </div>

            {/* Content */}
            <div className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
                <h1 className="luxury-text-display" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                    Photo tour
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {PHOTO_SECTIONS.map((section, sIdx) => {
                        // Calculate offset to get the correct global index for each photo
                        const previousPhotosCount = PHOTO_SECTIONS
                            .slice(0, sIdx)
                            .reduce((acc, s) => acc + s.photos.length, 0);

                        return (
                            <div key={section.id} id={section.id} style={{ scrollMarginTop: '120px' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>{section.title}</h2>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                    gap: '16px'
                                }}>
                                    {section.photos.map((photo, pIdx) => {
                                        const globalIndex = previousPhotosCount + pIdx;
                                        return (
                                            <div
                                                key={`${section.id}-${pIdx}`}
                                                onClick={() => setSelectedPhotoIndex(globalIndex)}
                                                style={{
                                                    aspectRatio: '3/2',
                                                    borderRadius: '12px',
                                                    overflow: 'hidden',
                                                    cursor: 'pointer',
                                                    backgroundColor: 'var(--slate-100)',
                                                    position: 'relative',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                                className="hover-scale-sm"
                                            >
                                                <img
                                                    src={photo}
                                                    alt={`${section.title} photo`}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                                />
                                                <div style={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    backgroundColor: 'rgba(0,0,0,0)',
                                                    transition: 'background-color 0.2s'
                                                }} className="hover-overlay" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox Overlay */}
            {selectedPhotoIndex !== null && (
                <div
                    onClick={() => setSelectedPhotoIndex(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.98)',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'zoom-out'
                    }}
                >
                    {/* Top Control Bar */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 24px',
                        zIndex: 1020,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)'
                    }}>
                        <div style={{ color: 'white', fontWeight: 600, fontSize: '15px' }}>
                            {selectedPhotoIndex + 1} / {ALL_PHOTOS.length}
                        </div>

                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedPhotoIndex(null); }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'white',
                                border: 'none',
                                padding: '8px 16px',
                                borderRadius: '100px',
                                cursor: 'pointer',
                                fontWeight: 700,
                                fontSize: '14px',
                                color: 'var(--slate-900)',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                                transition: 'transform 0.2s'
                            }}
                            className="hover-scale-sm"
                        >
                            <X size={18} />
                            Close
                        </button>
                    </div>

                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'relative',
                            width: '90%',
                            maxWidth: '1200px',
                            height: '75vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'default'
                        }}
                    >
                        <button
                            onClick={handleBack}
                            style={{
                                position: 'absolute',
                                left: '20px',
                                background: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '48px',
                                height: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                zIndex: 10
                            }}
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <img
                            src={ALL_PHOTOS[selectedPhotoIndex]}
                            alt="Gallery detail"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                borderRadius: '8px'
                            }}
                        />

                        <button
                            onClick={handleNext}
                            style={{
                                position: 'absolute',
                                right: '20px',
                                background: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '48px',
                                height: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                zIndex: 10
                            }}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            )}

            <style jsx global>{`
                .hover-scale-sm:hover {
                    transform: scale(1.02);
                }
                .hover-bg-slate-100:hover {
                    background-color: var(--slate-100);
                }
                .hover-overlay:hover {
                    background-color: rgba(0,0,0,0.05) !important;
                }
            `}</style>
        </div>
    );
}
