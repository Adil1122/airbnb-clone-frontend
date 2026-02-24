'use client';

import React from 'react';
import { Mail, X, ChevronDown } from 'lucide-react';
import { GoogleIcon, AppleIcon, FacebookIcon } from '@/components/Icons';
import Link from 'next/link';

const SignupLoginPage = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backgroundColor: '#FFFFFF'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '568px',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 28px rgba(0,0,0,0.28)'
            }}>
                {/* Header */}
                <div style={{
                    padding: '0 24px',
                    height: '64px',
                    borderBottom: '1px solid #EBEBEB',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative'
                }}>
                    <Link href="/" style={{
                        position: 'absolute',
                        left: '24px',
                        color: '#222222',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        transition: 'background 0.2s',
                        border: 'none',
                        background: 'none',
                        padding: 0
                    }} className="close-btn">
                        <X size={16} strokeWidth={3} />
                    </Link>
                    <h1 style={{
                        width: '100%',
                        textAlign: 'center',
                        fontSize: '16px',
                        fontWeight: 800,
                        color: '#222222',
                        margin: 0
                    }}>
                        Log in or sign up
                    </h1>
                </div>

                <div style={{ padding: '24px' }}>
                    <h2 style={{
                        fontSize: '22px',
                        marginBottom: '24px',
                        color: '#222222',
                        fontWeight: 600
                    }}>
                        Welcome to Airbnb
                    </h2>

                    {/* Unified Input Container */}
                    <div style={{
                        border: '1px solid #B0B0B0',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        marginBottom: '8px'
                    }}>
                        <div style={{
                            padding: '12px 12px 10px',
                            borderBottom: '1px solid #B0B0B0',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }} className="input-group-top">
                            <label style={{ fontSize: '12px', color: '#717171', fontWeight: 400 }}>Country/Region</label>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
                                <span style={{ fontSize: '16px', color: '#222222' }}>India (+91)</span>
                                <ChevronDown size={20} color="#222222" />
                            </div>
                        </div>
                        <div style={{ padding: '12px 12px 10px' }}>
                            <label style={{ fontSize: '12px', color: '#717171', fontWeight: 400 }}>Phone number</label>
                            <input
                                type="text"
                                placeholder="Phone number"
                                style={{
                                    width: '100%',
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '16px',
                                    padding: '2px 0 0',
                                    backgroundColor: 'transparent',
                                    color: '#222222'
                                }}
                            />
                        </div>
                    </div>

                    <p style={{ fontSize: '12px', color: '#222222', marginBottom: '18px', lineHeight: '16px', fontWeight: 400 }}>
                        We'll call or text you to confirm your number. Standard message and data rates apply. <span style={{ textDecoration: 'underline', cursor: 'pointer', fontWeight: 600 }}>Privacy Policy</span>
                    </p>

                    <button className="continue-btn" style={{
                        width: '100%',
                        padding: '14px 24px',
                        backgroundColor: '#FF385C',
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

                    {/* Divider */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '24px',
                        position: 'relative'
                    }}>
                        <div style={{ flex: 1, height: '1px', backgroundColor: '#DDDDDD' }}></div>
                        <span style={{ fontSize: '12px', color: '#717171', padding: '0 16px', backgroundColor: 'white' }}>or</span>
                        <div style={{ flex: 1, height: '1px', backgroundColor: '#DDDDDD' }}></div>
                    </div>

                    {/* Social Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <SocialButton icon={<FacebookIcon />} label="Continue with Facebook" />
                        <SocialButton icon={<GoogleIcon />} label="Continue with Google" />
                        <SocialButton icon={<AppleIcon />} label="Continue with Apple" />
                        <SocialButton icon={<Mail size={20} />} label="Continue with email" />
                    </div>
                </div>

                <style jsx>{`
                    .close-btn:hover {
                        background-color: #F7F7F7 !important;
                    }
                    .continue-btn:hover {
                        background-color: #E31C5F !important;
                    }
                    .input-group-top:hover {
                        background-color: #F7F7F7;
                    }
                `}</style>
            </div>
        </div>
    );
};

const SocialButton = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <button style={{
        width: '100%',
        padding: '13px 24px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #222222',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        fontSize: '14px',
        fontWeight: 600,
        color: '#222222',
        cursor: 'pointer',
        transition: 'background 0.2s, box-shadow 0.2s'
    }} className="social-btn">
        <div style={{ position: 'absolute', left: '24px' }}>
            {icon}
        </div>
        {label}
        <style jsx>{`
            .social-btn:hover {
                background-color: #F7F7F7;
                box-shadow: 0 0 0 1px #222222;
            }
        `}</style>
    </button>
);

export default SignupLoginPage;
