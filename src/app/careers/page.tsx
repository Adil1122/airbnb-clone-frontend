'use client';

import React from 'react';
import Link from 'next/link';

const CareersPage = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', color: '#222222', fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif' }}>
            <header style={{
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #EBEBEB',
                position: 'relative',
                zIndex: 10,
                backgroundColor: 'white'
            }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: '#FF385C' }}>
                        <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.636l-.261.015-.231.003c-3.447 0-6.356-2.416-6.356-6.478 0-.102.002-.234.004-.325l.006-.217c.05-.924.293-1.805.96-3.396l.144-.354c.987-2.297 5.147-11.007 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.234 0-2.056.565-3.037 2.308l-.508.985c-2.01 3.94-6.196 12.72-7.14 14.966l-.142.348c-.54 1.291-.72 1.954-.761 2.651l-.01.222c0 2.924 2.112 4.478 4.356 4.478 1.621 0 3.514-1.127 5.488-3.18l.8-.883.8.883c1.974 2.053 3.867 3.18 5.488 3.18 2.245 0 4.357-1.554 4.357-4.478 0-.083-.001-.19-.003-.277l-.008-.223c-.04-.697-.221-1.36-.76-1.651l-.142-.348c-.945-2.246-5.131-11.026-7.14-14.966l-.508-.985C18.056 3.565 17.234 3 16 3zm0 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                    </svg>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: '#222222' }}>Careers</span>
                </Link>
                <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                    <Link href="/life-at-airbnb" style={{ color: '#222222', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Life at Airbnb</Link>
                    <Link href="/positions" style={{ color: '#222222', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Job Search</Link>
                    <Link href="/positions" style={{
                        backgroundColor: '#222222',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '24px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        fontSize: '14px'
                    }}>
                        Explore open roles
                    </Link>
                </nav>
            </header>

            <main>
                <section style={{
                    textAlign: 'center',
                    padding: '120px 24px 80px 24px',
                    background: 'linear-gradient(180deg, #FFFBFA 0%, #FFFFFF 100%)'
                }}>
                    <h1 style={{ fontSize: '64px', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-0.02em', maxWidth: '900px', margin: '0 auto 24px auto' }}>
                        Discover your place at Airbnb
                    </h1>
                    <Link href="/positions" style={{
                        display: 'inline-block',
                        backgroundColor: '#FF385C',
                        color: 'white',
                        padding: '14px 32px',
                        borderRadius: '24px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        fontSize: '16px'
                    }}>
                        Explore open roles
                    </Link>
                </section>

                <section style={{ padding: '0 24px 96px 24px' }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '16px',
                            borderRadius: '16px',
                            overflow: 'hidden'
                        }}>
                            <img 
                                src="https://careers.airbnb.com/wp-content/uploads/sites/7/2024/03/homepage-hero1b.jpg?fit=2200%2C1467" 
                                alt="Employees engaged in conversation"
                                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                            />
                            <img 
                                src="https://careers.airbnb.com/wp-content/uploads/sites/7/2024/03/homepage-hero2b.jpg?fit=2200%2C1467" 
                                alt="Remote team member working"
                                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                            />
                            <img 
                                src="https://careers.airbnb.com/wp-content/uploads/sites/7/2024/03/homepage-hero3b.jpg?fit=2200%2C1466" 
                                alt="Employees working together"
                                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                            />
                            <img 
                                src="https://careers.airbnb.com/wp-content/uploads/sites/7/2024/03/homepage-hero4c.jpg?fit=2200%2C1467" 
                                alt="Airbnb team mates at social event"
                                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </section>

                <section style={{ padding: '80px 24px', backgroundColor: '#F7F7F7', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '16px', maxWidth: '800px', margin: '0 auto 16px auto' }}>
                        Work at one of the most creative places on Earth
                    </h2>
                    <p style={{ fontSize: '18px', color: '#717171', marginBottom: '48px', maxWidth: '700px', margin: '0 auto' }}>
                        From our first three guests in 2007, Airbnb has welcomed 1.5 billion arrivals, all thanks to our 5 million Hosts.
                    </p>
                </section>

                <section style={{ padding: '96px 24px' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '48px'
                        }}>
                            <FeatureCard
                                image="https://careers.airbnb.com/wp-content/uploads/sites/7/2024/03/live-and-work-anywhere-1200x800-1.jpg?fit=1200%2C800"
                                title="Live and Work Anywhere"
                                description="We know there is no one-size-fits-all approach to work. That's why we give our employees the flexibility to live and work anywhere in the world where regulations allow—while still providing them with opportunities to connect in person."
                                link="/life-at-airbnb/#live-work-anywhere"
                            />
                            <FeatureCard
                                image="https://careers.airbnb.com/wp-content/uploads/sites/7/2024/03/we-welcome-you.jpg?fit=400%2C290"
                                title="We welcome you"
                                description="Creating connection and belonging in the world begins with a workplace where you're both welcomed and empowered to be your authentic self, so you can deliver your best work."
                                link="/life-at-airbnb"
                            />
                            <FeatureCard
                                image="https://careers.airbnb.com/wp-content/uploads/sites/7/2024/03/make-an-impact.jpg?fit=400%2C290"
                                title="Make an impact"
                                description="Join our global creative community, where passion and collaboration drive innovation to make products that impact the world."
                                link="/positions"
                            />
                        </div>
                    </div>
                </section>

                <section style={{ padding: '96px 24px', backgroundColor: '#222222', color: 'white' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '48px' }}>Open the door to your next role</h2>
                        
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '32px'
                        }}>
                            <StatCard
                                title="Live and Work Anywhere"
                                description="We give our employees the flexibility to live and work anywhere in the world where regulations allow."
                                link="/life-at-airbnb"
                            />
                            <StatCard
                                title="248"
                                description="Open Positions"
                                link="/positions"
                            />
                            <StatCard
                                title="Do the most amazing work of your career"
                                description="Join our global creative community."
                                link="/positions"
                            />
                        </div>
                    </div>
                </section>

                <section style={{ padding: '96px 24px' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '48px', textAlign: 'center' }}>Ongoing at Airbnb</h2>
                        
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '24px'
                        }}>
                            <NewsCard
                                image="https://news.airbnb.com/wp-content/uploads/sites/4/2020/03/BeloRauschNewsroomFeatured_200316.png?fit=1024%2C683"
                                title="Airbnb announces Gus Fuldner as Global Head of Operations"
                                date="March 10, 2026"
                            />
                            <NewsCard
                                image="https://news.airbnb.com/wp-content/uploads/sites/4/2026/03/61718-Credit-FR-©-Leo-Films-Tourisme-Montreal-EN-Credit-©-Leo-Films-Tourisme-Montreal.jpg?fit=1024%2C814"
                                title="Report: Montreal seasonal short-term rental ban risks millions in tourism revenue"
                                date="March 9, 2026"
                            />
                            <NewsCard
                                image="https://news.airbnb.com/wp-content/uploads/sites/4/2026/03/newsroom.jpg?fit=1024%2C683"
                                title="Europe's housing blind spot: short-term rentals bridge the gap"
                                date="March 5, 2026"
                            />
                        </div>
                    </div>
                </section>

                <section style={{ padding: '64px 24px', backgroundColor: '#F7F7F7', textAlign: 'center' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Link href="/positions" style={{
                            display: 'inline-block',
                            backgroundColor: '#FF385C',
                            color: 'white',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            fontSize: '16px'
                        }}>
                            Explore open roles
                        </Link>
                    </div>
                </section>

                <section style={{ padding: '48px 24px', borderTop: '1px solid #EBEBEB' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <p style={{ fontSize: '14px', color: '#717171', lineHeight: '1.6', maxWidth: '900px' }}>
                            Airbnb, Inc. can hire employees in states where we have registered entities. Currently, employees cannot be located/live in: Alaska, Mississippi, and North Dakota. This list is continuously evolving, so please check back with us if the state you live in is on the exclusion list.
                        </p>
                        <p style={{ fontSize: '14px', color: '#717171', marginTop: '16px', lineHeight: '1.6' }}>
                            Reasonable Accommodation — Airbnb values diversity & belonging and is proud to be an Equal Employment Opportunity employer. All individuals seeking employment at Airbnb are considered without regard to race, color, religion, national origin, age, sex, marital status, ancestry, physical or mental disability, veteran status, gender identity, sexual orientation, or any other legally protected characteristic. We are committed to providing reasonable accommodations throughout the recruitment process for applicants with disabilities. If you need assistance, or an accommodation, please let your recruiter know once you are contacted about a role.
                        </p>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '48px 24px', borderTop: '1px solid #EBEBEB', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '32px' }}>
                    <div>
                        <div style={{ marginBottom: '16px' }}>
                            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: '#FF385C' }}>
                                    <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.636l-.261.015-.231.003c-3.447 0-6.356-2.416-6.356-6.478 0-.102.002-.234.004-.325l.006-.217c.05-.924.293-1.805.96-3.396l.144-.354c.987-2.297 5.147-11.007 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.234 0-2.056.565-3.037 2.308l-.508.985c-2.01 3.94-6.196 12.72-7.14 14.966l-.142.348c-.54 1.291-.72 1.954-.761 2.651l-.01.222c0 2.924 2.112 4.478 4.356 4.478 1.621 0 3.514-1.127 5.488-3.18l.8-.883.8.883c1.974 2.053 3.867 3.18 5.488 3.18 2.245 0 4.357-1.554 4.357-4.478 0-.083-.001-.19-.003-.277l-.008-.223c-.04-.697-.221-1.36-.76-1.651l-.142-.348c-.945-2.246-5.131-11.026-7.14-14.966l-.508-.985C18.056 3.565 17.234 3 16 3zm0 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                                </svg>
                                <span style={{ fontSize: '20px', fontWeight: '700', color: '#222222' }}>Airbnb</span>
                            </Link>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                            <Link href="/life-at-airbnb" style={{ color: '#717171', textDecoration: 'none' }}>Life at Airbnb</Link>
                            <Link href="/careers/faq" style={{ color: '#717171', textDecoration: 'none' }}>FAQ</Link>
                            <Link href="/careers/candidate-privacy" style={{ color: '#717171', textDecoration: 'none' }}>Candidate Privacy</Link>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>Careers</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                            <Link href="/positions" style={{ color: '#717171', textDecoration: 'none' }}>Job Search</Link>
                            <Link href="/connect-engineering-apprenticeship" style={{ color: '#717171', textDecoration: 'none' }}>Connect Engineering Apprenticeship</Link>
                            <Link href="/internship-programs" style={{ color: '#717171', textDecoration: 'none' }}>Internship Programs</Link>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
                            <span style={{ color: '#222222', fontWeight: '600' }}>© Airbnb, Inc</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '16px', fontSize: '14px' }}>
                            <Link href="/terms" style={{ color: '#717171', textDecoration: 'none' }}>Terms</Link>
                            <Link href="/terms/privacy_policy" style={{ color: '#717171', textDecoration: 'none' }}>Privacy</Link>
                            <Link href="/sitemaps/v2" style={{ color: '#717171', textDecoration: 'none' }}>Sitemap</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const FeatureCard = ({ image, title, description, link }: { image: string; title: string; description: string; link: string }) => (
    <div>
        <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }} />
        <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: '#717171', lineHeight: '1.6', marginBottom: '16px' }}>{description}</p>
        <Link href={link} style={{ color: '#222222', textDecoration: 'underline', fontSize: '14px', fontWeight: '600' }}>
            {title === 'Live and Work Anywhere' ? 'Learn more' : title === 'We welcome you' ? 'Life at Airbnb' : 'Jobs at Airbnb'}
        </Link>
    </div>
);

const StatCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
    <div style={{ padding: '24px', backgroundColor: '#333333', borderRadius: '16px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '12px', color: 'white' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>{description}</p>
        <Link href={link} style={{ color: 'white', textDecoration: 'underline', fontSize: '14px', fontWeight: '600' }}>
            {title === '248' ? 'Explore open roles' : 'Learn more'}
        </Link>
    </div>
);

const NewsCard = ({ image, title, date }: { image: string; title: string; date: string }) => (
    <div>
        <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }} />
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', lineHeight: '1.4' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: '#717171' }}>{date}</p>
    </div>
);

export default CareersPage;
