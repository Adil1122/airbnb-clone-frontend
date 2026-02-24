'use client';

import React from 'react';
import {
    Palmtree,
    Waves,
    Mountain,
    Castle,
    Flame,
    Tent,
    Snowflake,
    Wind,
    Coffee,
    Ship,
    Compass
} from 'lucide-react';

interface Category {
    id: number;
    label: string;
    iconName: string;
    slug: string;
}

interface CategoryBarProps {
    categories: Category[];
    activeCategoryId: number | null;
    onCategoryChange: (id: number | null) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categories, activeCategoryId, onCategoryChange }) => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Flame': return <Flame size={24} />;
            case 'Palmtree': return <Palmtree size={24} />;
            case 'Waves': return <Waves size={24} />;
            case 'Mountain': return <Mountain size={24} />;
            case 'Castle': return <Castle size={24} />;
            case 'Snowflake': return <Snowflake size={24} />;
            case 'Tent': return <Tent size={24} />;
            case 'Wind': return <Wind size={24} />;
            case 'Coffee': return <Coffee size={24} />;
            case 'Ship': return <Ship size={24} />;
            default: return <Flame size={24} />;
        }
    };

    return (
        <div style={{
            position: 'sticky',
            top: '140px',
            zIndex: 1000,
            backgroundColor: 'white',
            borderBottom: '1px solid var(--border)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    gap: '2.5rem',
                    overflowX: 'auto',
                    padding: '0.75rem 0'
                }} className="hide-scrollbar">
                    <div
                        className={`category-item ${activeCategoryId === null ? 'active' : ''}`}
                        onClick={() => onCategoryChange(null)}
                    >
                        <Compass size={24} />
                        <span style={{ fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap' }}>All</span>
                    </div>
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`category-item ${activeCategoryId === cat.id ? 'active' : ''}`}
                            onClick={() => onCategoryChange(cat.id)}
                        >
                            {getIcon(cat.iconName)}
                            <span style={{ fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap' }}>{cat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryBar;
