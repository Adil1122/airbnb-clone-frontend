'use client';

import React from 'react';
import { Mail, ChevronDown, X } from 'lucide-react';
import { GoogleIcon, AppleIcon, FacebookIcon } from '@/components/Icons';
import Link from 'next/link';

const SignupLoginPage = () => {
    return (
        <div style={{
            minHeight: 'calc(100vh - 100px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backgroundColor: 'var(--slate-50)'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '560px',
                backgroundColor: 'var(--white)',
                borderRadius: '24px',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
                border: '1px solid var(--slate-100)',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    padding: '1.25rem 1.5rem',
                    borderBottom: '1px solid var(--slate-100)',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative'
                }}>
                    <Link href="/" style={{
                        position: 'absolute',
                        left: '1.5rem',
                        color: 'var(--slate-900)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        transition: 'background 0.2s'
                    }} className="hover-bg-slate">
                        <X size={18} />
                    </Link>
                    <h1 style={{
                        width: '100%',
                        textAlign: 'center',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--slate-900)',
                        margin: 0
                    }}>
                        Log in or sign up
                    </h1>
                </div>

                <div style={{ padding: '2rem 1.5rem' }}>
                    <h2 style={{
                        fontSize: '22px',
                        marginBottom: '1.5rem',
                        color: 'var(--slate-900)',
                        fontWeight: 600
                    }}>
                        Welcome to Prime
                    </h2>

                    {/* Input Group */}
                    <div style={{
                        border: '1px solid var(--slate-200)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginBottom: '1rem'
                    }}>
                        <div style={{
                            padding: '12px 16px',
                            borderBottom: '1px solid var(--slate-200)',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <div style={{ fontSize: '11px', color: 'var(--gray)', fontWeight: 600, textTransform: 'uppercase' }}>Country/Region</div>
                                <div style={{ fontSize: '15px', color: 'var(--slate-900)' }}>Pakistan (+92)</div>
                            </div>
                            <ChevronDown size={20} color="var(--gray)" />
                        </div>
                        <div style={{ padding: '12px 16px' }}>
                            <div style={{ fontSize: '11px', color: 'var(--gray)', fontWeight: 600, textTransform: 'uppercase' }}>Phone number</div>
                            <input
                                type="text"
                                placeholder="Phone number"
                                style={{
                                    width: '100%',
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '15px',
                                    padding: '4px 0',
                                    backgroundColor: 'transparent',
                                    color: 'var(--slate-900)'
                                }}
                            />
                        </div>
                    </div>

                    <p style={{ fontSize: '12px', color: 'var(--gray)', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                        We'll call or text you to confirm your number. Standard message and data rates apply. <span style={{ textDecoration: 'underline', cursor: 'pointer', fontWeight: 600, color: 'var(--slate-900)' }}>Privacy Policy</span>
                    </p>

                    <button className="prime-login-cta" style={{
                        width: '100%',
                        padding: '14px',
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--slate-900) 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        marginBottom: '1.5rem',
                        boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
                        transition: 'transform 0.2s'
                    }}>
                        Continue
                    </button>

                    {/* Divider */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '1.5rem',
                        gap: '1rem'
                    }}>
                        <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--slate-100)' }}></div>
                        <span style={{ fontSize: '12px', color: 'var(--gray)', fontWeight: 500 }}>or</span>
                        <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--slate-100)' }}></div>
                    </div>

                    {/* Social Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <SocialButton icon={<GoogleIcon />} label="Continue with Google" />
                        <SocialButton icon={<AppleIcon />} label="Continue with Apple" />
                        <SocialButton icon={<Mail size={20} />} label="Continue with email" />
                        <SocialButton icon={<FacebookIcon />} label="Continue with Facebook" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .prime-login-cta:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(79, 70, 229, 0.3);
                }
                .hover-bg-slate:hover {
                    background-color: var(--slate-50);
                }
            `}</style>
        </div>
    );
};

const SocialButton = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <button style={{
        width: '100%',
        padding: '12px 16px',
        backgroundColor: 'var(--white)',
        border: '1.5px solid var(--slate-200)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        fontSize: '14px',
        fontWeight: 600,
        color: 'var(--slate-900)',
        cursor: 'pointer',
        transition: 'all 0.2s'
    }} className="social-btn">
        <div style={{ position: 'absolute', left: '16px' }}>
            {icon}
        </div>
        {label}
        <style jsx>{`
            .social-btn:hover {
                background-color: var(--slate-50);
                border-color: var(--slate-300);
                transform: scale(1.01);
            }
        `}</style>
    </button>
);

export default SignupLoginPage;
