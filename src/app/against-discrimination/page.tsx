'use client';

import React from 'react';
import Link from 'next/link';
import {
    Zap,
    Calendar,
    Star,
    Users,
    Shield,
    Briefcase,
    Accessibility,
    ArrowRight
} from 'lucide-react';

const AntiDiscriminationPage = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white', color: '#222222', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', paddingBottom: '100px' }}>
            {/* Minimal Centered Header */}
            <header style={{
                padding: '32px 24px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'white'
            }}>
                <Link href="/">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: '#FF385C' }}>
                        <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.636l-.261.015-.231.003c-3.447 0-6.356-2.416-6.356-6.478 0-.102.002-.234.004-.325l.006-.217c.05-.924.293-1.805.96-3.396l.144-.354c.987-2.297 5.147-11.007 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.234 0-2.056.565-3.037 2.308l-.508.985c-2.01 3.94-6.196 12.72-7.14 14.966l-.142.348c-.54 1.291-.72 1.954-.761 2.651l-.01.222c0 2.924 2.112 4.478 4.356 4.478 1.621 0 3.514-1.127 5.488-3.18l.8-.883.8.883c1.974 2.053 3.867 3.18 5.488 3.18 2.245 0 4.357-1.554 4.357-4.478 0-.083-.001-.19-.003-.277l-.008-.223c-.04-.697-.221-1.36-.76-1.651l-.142-.348c-.945-2.246-5.131-11.026-7.14-14.966l-.508-.985C18.056 3.565 17.234 3 16 3zm0 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                    </svg>
                </Link>
            </header>

            <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 40px' }}>
                {/* Hero Section */}
                <section style={{
                    textAlign: 'center',
                    padding: '64px 0 80px 0'
                }}>
                    <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: '#222222' }}>2024 update</p>
                    <h1 style={{
                        fontSize: '48px',
                        fontWeight: '800',
                        lineHeight: '1.2',
                        maxWidth: '600px',
                        margin: '0 auto',
                        letterSpacing: '-0.02em'
                    }}>
                        Fighting discrimination and making travel more open to all
                    </h1>
                </section>

                {/* Project Lighthouse Section */}
                <section style={{ textAlign: 'center', margin: '0 auto 100px auto' }}>
                    <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '48px', width: '48px', fill: 'currentColor' }}>
                            <path d="M16 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm6.364 2.636a1 1 0 0 1 0 1.415l-1.414 1.414a1 1 0 1 1-1.415-1.414l1.414-1.415a1 1 0 0 1 1.415 0zm-12.728 0a1 1 0 0 1 1.415 0l1.414 1.415a1 1 0 1 1-1.414 1.414l-1.415-1.414a1 1 0 0 1 0-1.415zM16 8a4 4 0 0 1 4 4v1h2v2h-1.07l1.07 7h-12l1.07-7H10v-2h2v-1a4 4 0 0 1 4-4zm2 5h-4v7h4v-7zm-2-3a2 2 0 0 0-2 2v1h4v-1a2 2 0 0 0-2-2zM28 15a1 1 0 0 1 0 2h-2a1 1 0 1 1 0-2h2zM6 15a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2h2zm16.364 12.364a1 1 0 0 1-1.415 0l-1.414-1.414a1 1 0 1 1 1.415-1.415l1.414 1.415a1 1 0 0 1 0 1.414zm-12.728 0a1 1 0 0 1 0-1.414l1.414-1.415a1 1 0 1 1 1.415 1.415l-1.414 1.414a1 1 0 0 1-1.415 0z" />
                        </svg>
                    </div>

                    <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>Project Lighthouse</h2>

                    <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#222222', marginBottom: '40px', textAlign: 'left' }}>
                        Launched in 2020, Project Lighthouse is a tool we use in the United States that helps uncover and address potential disparities in how users of different perceived races may experience Airbnb. We developed Project Lighthouse with guidance from a number of leading civil rights and privacy organizations. <Link href="#" style={{ fontWeight: '600', textDecoration: 'underline', color: 'inherit' }}>Learn more</Link>
                    </p>

                    <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Using real data</h3>
                            <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#484848' }}>
                                We examine how guests and hosts use our platform. Statistical analyses help us find opportunities to make Airbnb more open to everyone.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Protecting privacy</h3>
                            <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#484848' }}>
                                We analyze trends in aggregate and don’t associate perceived race information with specific people or accounts.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Constantly improving</h3>
                            <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#484848' }}>
                                Our team continues to identify new ways to make Airbnb more open and equitable.
                            </p>
                        </div>
                    </div>
                </section>

                <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: '700', margin: '80px 0 40px 0' }}>Our ongoing work</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                    <WorkItem
                        icon={<Zap size={32} strokeWidth={1.5} />}
                        title="Making Instant Book accessible to more people"
                        description="Instant Book—a feature that allows guests to book a listing without requiring hosts to approve a reservation request—is an important tool that can help reduce potential discrimination in the booking process by supporting more objective bookings. Recent changes that allow for a more holistic definition of a positive track record on Airbnb have helped increase the number of guests successfully booking reservations via Instant Book."
                    />
                    <WorkItem
                        icon={<Calendar size={32} strokeWidth={1.5} />}
                        title="Helping hosts respond to booking requests"
                        description="New steps that help hosts respond to booking requests in a timely manner also increased the booking success rate. These changes include making pending reservation requests more prominent for hosts. This decreased the number of reservation requests that previously went unanswered, effectively increasing the number of guests who successfully book a place to stay."
                    />
                    <WorkItem
                        icon={<Star size={32} strokeWidth={1.5} />}
                        title="Helping guests build a positive reputation on Airbnb"
                        description="Guests with reviews have a higher booking success rate. We’ve now made it easier for guests to add co-travelers with Airbnb accounts to their reservation, which enables these co-travelers to receive a review even if they did not book the stay."
                    />
                    <WorkItem
                        icon={<Users size={32} strokeWidth={1.5} />}
                        title="Supporting hosts and guests throughout their stay"
                        description="We introduced a new feature allowing hosts and guests to display their preferred names on their profiles, after confirming their legal name. We’re also improving the process for hosts or guests who report being identified by the incorrect pronouns in a review. If a host or guest expresses this concern, the pronoun is replaced with the user’s preferred name."
                    />
                    <WorkItem
                        icon={<Shield size={32} strokeWidth={1.5} />}
                        title="Strengthening our policies and procedures"
                        description={<span>We’ve refined the process by which hosts decline a reservation request to help inform them about acceptable and unacceptable reasons for rejecting a booking request. We’ve also updated our <Link href="#" style={{ color: 'inherit', fontWeight: '600', textDecoration: 'underline' }}>Non-Discrimination Policy</Link> to make it more effective and incorporated new protections against caste discrimination. Lastly, we are implementing a series of changes to help enhance fairness when a host cancels an existing reservation.</span>}
                    />
                    <WorkItem
                        icon={<Briefcase size={32} strokeWidth={1.5} />}
                        title="Sharing more information about economic empowerment opportunities available on Airbnb"
                        description={<span>We are expanding the <Link href="#" style={{ color: 'inherit', fontWeight: '600', textDecoration: 'underline' }}>Airbnb Entrepreneurship Academy</Link>, which introduces people from diverse and historically underrepresented communities to hosting on our platform in partnership with organizations including Hispanic Wealth Project, Brotherhood Crusade, and United Spinal Association. We’re also continuing to participate in Operation HOPE’s 1 Million Black Businesses (1MBB) initiative, which provides support and coaching for Black entrepreneurs to start, grow, or scale their businesses.</span>}
                    />
                    <WorkItem
                        icon={<Accessibility size={32} strokeWidth={1.5} />}
                        title="Continuing our commitment to guests with mobility needs"
                        description="Our accessibility feature search filters make it easier for guests to find and book stays that meet their needs. Through Accessibility Review, we review every accessibility feature submitted by hosts for accuracy."
                    />
                </div>

                {/* History Section */}
                <section style={{ margin: '100px 0', borderTop: '1px solid #EDEDED', paddingTop: '80px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px' }}>Our commitment to fighting discrimination</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#484848', marginBottom: '40px' }}>
                        This work follows a history of working to fight discrimination including one of the first Civil Rights Audits in 2016, an additional update in 2019, the announcement of Project Lighthouse in 2020, and our 2022 initial release of Project Lighthouse data. These updates covered a range of evolving initiatives and efforts to support everyone being successful on Airbnb.
                    </p>

                    <div style={{ margin: '48px 0', borderRadius: '16px', overflow: 'hidden' }}>
                        <img src="/images/against_discrimination_hero.png" alt="Airbnb Community" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    <h2 style={{ fontSize: '32px', fontWeight: '700', margin: '80px 0 24px 0' }}>The Airbnb Community Commitment</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#484848', marginBottom: '40px' }}>
                        Since 2016, we’ve asked everyone who uses Airbnb to commit to treating others with respect and without judgment or bias by agreeing to the <Link href="#" style={{ color: 'inherit', fontWeight: '600', textDecoration: 'underline' }}>Airbnb Community Commitment</Link>. Anyone who doesn’t agree is denied access to or removed from our platform.
                    </p>

                    <div style={{
                        padding: '40px',
                        backgroundColor: '#F7F7F7',
                        borderRadius: '16px',
                        fontSize: '20px',
                        lineHeight: '1.5',
                        fontWeight: '600',
                        color: '#222222',
                        maxWidth: '600px',
                        margin: '0 auto 80px auto'
                    }}>
                        "I will treat everyone in the community—regardless of their race, religion, national origin, ethnicity, skin color, disability, sex, gender identity, sexual orientation, or age—with respect, and without judgment or bias."
                    </div>

                    <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '16px' }}>Read the 2024 report</h2>
                    <p style={{ fontSize: '16px', color: '#484848', marginBottom: '32px', fontStyle: 'italic' }}>
                        The 2024 Project Lighthouse Update includes key Project Lighthouse findings and our complete data set, and progress we’ve made since 2016.
                    </p>

                    <button style={{
                        backgroundColor: '#E31C5F',
                        color: 'white',
                        padding: '14px 24px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '600',
                        border: 'none',
                        cursor: 'pointer',
                        marginBottom: '40px'
                    }}>
                        View report
                    </button>

                    <div style={{ fontSize: '15px', color: '#484848' }}>
                        This report follows updates on our work we issued in <Link href="#" style={{ textDecoration: 'underline', color: 'inherit', fontWeight: '600' }}>2016</Link>, <Link href="#" style={{ textDecoration: 'underline', color: 'inherit', fontWeight: '600' }}>2019</Link> and <Link href="#" style={{ textDecoration: 'underline', color: 'inherit', fontWeight: '600' }}>2022</Link>.
                    </div>
                </section>
            </main>
        </div>
    );
};

const WorkItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: React.ReactNode }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ color: '#222222' }}>{icon}</div>
        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#222222' }}>{title}</h3>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#484848' }}>{description}</p>
    </div>
);

export default AntiDiscriminationPage;
