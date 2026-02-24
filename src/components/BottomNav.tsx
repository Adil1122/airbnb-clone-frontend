'use client';

import React from 'react';
import { Home, Heart, Search, MessageSquare, User } from 'lucide-react';
import Link from 'next/link';

const BottomNav: React.FC = () => {
    return (
        <div className="bottom-nav">
            <Link href="/" className="nav-item active">
                <Search size={24} />
                <span>Explore</span>
            </Link>
            <Link href="#" className="nav-item">
                <Heart size={24} />
                <span>Wishlists</span>
            </Link>
            <Link href="#" className="nav-item">
                <Home size={24} />
                <span>Trips</span>
            </Link>
            <Link href="#" className="nav-item">
                <MessageSquare size={24} />
                <span>Inbox</span>
            </Link>
            <Link href="#" className="nav-item">
                <User size={24} />
                <span>Profile</span>
            </Link>
        </div>
    );
};

export default BottomNav;
