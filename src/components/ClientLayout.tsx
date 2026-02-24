'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';

interface ClientLayoutProps {
    children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    const pathname = usePathname();
    const isPhotosPage = pathname?.includes('/services/') && pathname?.includes('/photos');

    return (
        <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {!isPhotosPage && <Header />}
            <main style={{ flex: 1 }}>
                {children}
            </main>

            {!isPhotosPage && (
                <footer style={{
                    padding: '48px 0',
                    borderTop: '1px solid #DDDDDD',
                    backgroundColor: '#F7F7F7',
                    marginTop: 'auto'
                }} className="desktop-only border-t border-[#DDDDDD] bg-[#F7F7F7]">
                    <div className="container">
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '40px',
                            paddingBottom: '48px',
                            borderBottom: '1px solid #DDDDDD'
                        }}>
                            {/* Column 1: Support */}
                            <div>
                                <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#222222', marginBottom: '12px' }}>Support</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Help Center</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">AirCover</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Anti-discrimination</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Disability support</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Cancellation options</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Report neighborhood concern</a></li>
                                </ul>
                            </div>

                            {/* Column 2: Hosting */}
                            <div>
                                <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#222222', marginBottom: '12px' }}>Hosting</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Airbnb your home</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">AirCover for Hosts</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Hosting resources</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Community forum</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Hosting responsibly</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Airbnb-friendly apartments</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Join a free hosting class</a></li>
                                </ul>
                            </div>

                            {/* Column 3: Airbnb */}
                            <div>
                                <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#222222', marginBottom: '12px' }}>Airbnb</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Newsroom</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">New features</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Careers</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Investors</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Gift cards</a></li>
                                    <li><a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Airbnb.org emergency stays</a></li>
                                </ul>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: '24px',
                            fontSize: '14px',
                            color: '#222222'
                        }}>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <span>© 2026 Prime Marketplace, Inc.</span>
                                <span>·</span>
                                <a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Privacy</a>
                                <span>·</span>
                                <a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Terms</a>
                                <span>·</span>
                                <a href="#" style={{ color: '#222222', textDecoration: 'none' }} className="hover:underline">Sitemap</a>
                            </div>
                            <div style={{ display: 'flex', gap: '24px', fontWeight: 600 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor' }}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73 -7.502l-.003-.246a7.75 7.75 0 0 1 7.752 -7.752zm1.62 10.72h-3.242a4.76 4.76 0 0 0 .151 1.108l.044.121a4.75 4.75 0 0 0 1.45 2.153c.807-.647 1.342-1.7 1.492-3.06l.047-.145a4.81 4.81 0 0 0 .058-.177zm-4.385-1.393h-3.567a5.25 5.25 0 0 0 1.544 2.891 5.3 5.3 0 0 0 1.74 1.135 5.88 5.88 0 0 1 -.225-1.275 5.72 5.72 0 0 1 -.029-1.261l.537-2.49zm3.93 .01a5.74 5.74 0 0 1 -.3 2.528 5.89 5.89 0 0 1 -.751 1.515 5.96 5.96 0 0 1 -1.455-1.503 5.34 5.34 0 0 1 -.625-2.54l1.565-.001zm3.123 0h-3.567a5.53 5.53 0 0 1 -.541 2.536c.683.473 1.433.854 2.234 1.132l.142.047a5.25 5.25 0 0 0 1.732-3.715zm-11.411-4.045h3.07a5.51 5.51 0 0 1 .536-2.531c-.683-.473-1.433-.854-2.234-1.132l-.142-.047a5.25 5.25 0 0 0 -1.23 3.71zm11.399-4.062h-3.07a5.52 5.52 0 0 1 -.54 2.53c.682.473 1.432.854 2.232 1.132l.142.047a5.25 5.25 0 0 0 1.236-3.709zm-8.483-3.717a5.25 5.25 0 0 0 -1.544 2.891 5.3 5.3 0 0 0 -1.74 1.135 5.88 5.88 0 0 1 .225 1.275 5.72 5.72 0 0 1 .029 1.261l-.537 2.49h3.567zm4.385 1.393h3.567a5.25 5.25 0 0 0 -1.544-2.891 5.3 5.3 0 0 0 -1.74-1.135 5.88 5.88 0 0 1 .225 1.275 5.72 5.72 0 0 1 .029 1.261l.537 2.49h-3.567zm-3.93-.01a5.74 5.74 0 0 1 .3-2.528 5.89 5.89 0 0 1 .751-1.515 5.96 5.96 0 0 1 1.455 1.503 5.34 5.34 0 0 1 .625 2.54l-1.565.001zm-3.123 0h3.567a5.53 5.53 0 0 1 .541-2.536c-.683-.473-1.433-.854-2.234-1.132l-.142-.047a5.25 5.25 0 0 0 -1.732 3.715z"></path></svg>
                                    <span>English (US)</span>
                                </div>
                                <div style={{ cursor: 'pointer' }}>$ USD</div>
                            </div>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
}
