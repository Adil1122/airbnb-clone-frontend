'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowLeft, Share2, Heart, Bed, Sofa, Utensils, Bath, Home, Grid } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

const PHOTO_SECTIONS = [
    {
        id: 'exterior',
        title: 'Exterior',
        icon: <Home size={18} />,
        photos: [
            'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
        ]
    },
    {
        id: 'kitchen',
        title: 'Kitchen',
        icon: <Utensils size={18} />,
        photos: [
            'https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=2070&auto=format&fit=crop'
        ]
    },
    {
        id: 'living',
        title: 'Living area',
        icon: <Sofa size={18} />,
        photos: [
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop'
        ]
    },
    {
        id: 'bedroom',
        title: 'Bedroom',
        icon: <Bed size={18} />,
        photos: [
            'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2073&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop'
        ]
    },
    {
        id: 'bathroom',
        title: 'Full bathroom',
        icon: <Bath size={18} />,
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

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        const container = document.getElementById('photo-scroll-container');

        PHOTO_SECTIONS.forEach((section) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(section.id);
                    }
                },
                {
                    threshold: 0.2,
                    root: container,
                    rootMargin: '-80px 0px -50% 0px'
                }
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
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        const container = document.getElementById('photo-scroll-container');
        if (element && container) {
            container.scrollTo({
                top: element.offsetTop - 0,
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
        <div style={{ backgroundColor: 'white', minHeight: '100vh', color: '#222222' }}>
            {/* Fixed Header */}
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px',
                backgroundColor: 'white',
                borderBottom: '1px solid #DDDDDD',
                zIndex: 1000,
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}>
                <button
                    onClick={() => router.back()}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer'
                    }}
                    className="hover-bg-f7"
                >
                    <X size={20} />
                </button>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textDecoration: 'underline' }}>
                        <Share2 size={16} /> <span className="desktop-only">Share</span>
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textDecoration: 'underline' }}>
                        <Heart size={16} /> <span className="desktop-only">Save</span>
                    </button>
                </div>
            </header>

            <main style={{ display: 'flex', justifyContent: 'center', paddingTop: '64px', height: 'calc(100vh - 64px)' }}>
                {/* Right Content: Grouped Photos */}
                <div
                    id="photo-scroll-container"
                    style={{
                        width: '100%',
                        maxWidth: '850px',
                        overflowY: 'auto',
                        padding: '40px 0',
                        scrollBehavior: 'smooth',
                        backgroundColor: 'white'
                    }}
                >
                    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
                        {/* Photo Tour Title Section */}
                        <div style={{ marginBottom: '40px' }}>
                            <h1 style={{ fontSize: '32px', fontWeight: 600, color: '#222222', marginBottom: '24px' }}>Photo tour</h1>

                            {/* Horizontal Category Navigation */}
                            <div style={{
                                display: 'flex',
                                gap: '12px',
                                overflowX: 'auto',
                                paddingBottom: '16px',
                                MsOverflowStyle: 'none',
                                scrollbarWidth: 'none'
                            }} className="hide-scrollbar">
                                {PHOTO_SECTIONS.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        style={{
                                            flexShrink: 0,
                                            padding: '8px 16px',
                                            borderRadius: '24px',
                                            border: '1px solid #DDDDDD',
                                            backgroundColor: activeSection === section.id ? '#F7F7F7' : 'white',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            color: '#222222',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            borderColor: activeSection === section.id ? '#222222' : '#DDDDDD'
                                        }}
                                    >
                                        {section.icon}
                                        {section.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {PHOTO_SECTIONS.map((section, sIdx) => {
                                const previousPhotosCount = PHOTO_SECTIONS
                                    .slice(0, sIdx)
                                    .reduce((acc, s) => acc + s.photos.length, 0);

                                return (
                                    <div key={section.id} id={section.id} style={{ scrollMarginTop: '0px', paddingTop: '10px' }}>
                                        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', color: '#222222' }}>{section.title}</h2>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                            {section.photos.map((photo, pIdx) => {
                                                const globalIndex = previousPhotosCount + pIdx;
                                                return (
                                                    <div
                                                        key={`${section.id}-${pIdx}`}
                                                        onClick={() => setSelectedPhotoIndex(globalIndex)}
                                                        style={{
                                                            width: '100%',
                                                            cursor: 'pointer',
                                                            backgroundColor: '#F7F7F7',
                                                            borderRadius: '12px',
                                                            overflow: 'hidden'
                                                        }}
                                                    >
                                                        <img
                                                            src={photo}
                                                            alt={`${section.title} image`}
                                                            style={{ width: '100%', height: 'auto', display: 'block' }}
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>

            {/* Lightbox Overlay */}
            {selectedPhotoIndex !== null && (
                <div
                    onClick={() => setSelectedPhotoIndex(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'black',
                        zIndex: 2000,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <button
                        onClick={(e) => { e.stopPropagation(); setSelectedPhotoIndex(null); }}
                        style={{
                            position: 'absolute',
                            top: '24px',
                            left: '24px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                    >
                        <X size={24} />
                    </button>

                    <div style={{ position: 'absolute', top: '24px', right: '24px', color: 'white', fontSize: '16px' }}>
                        {selectedPhotoIndex + 1} / {ALL_PHOTOS.length}
                    </div>

                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: '100%',
                            maxWidth: '1000px',
                            maxHeight: '80vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}
                    >
                        <button
                            onClick={handleBack}
                            style={{
                                position: 'absolute',
                                left: '-80px',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                border: '1px solid white',
                                backgroundColor: 'transparent',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                            className="desktop-only"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <img
                            src={ALL_PHOTOS[selectedPhotoIndex]}
                            style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
                            alt="Full size"
                        />

                        <button
                            onClick={handleNext}
                            style={{
                                position: 'absolute',
                                right: '-80px',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                border: '1px solid white',
                                backgroundColor: 'transparent',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                            className="desktop-only"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            )}

            <style jsx global>{`
                .hover-bg-f7:hover {
                    background-color: #F7F7F7 !important;
                }
                @media (max-width: 950px) {
                    main { display: block !important; }
                    aside { display: none !important; }
                }
            `}</style>
        </div>
    );
}
