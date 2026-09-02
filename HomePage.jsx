import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ShoppingBag, Store, Megaphone, Wrench, ShieldCheck, Truck, CreditCard,
    Headset, ArrowRight, BadgeCheck, PackageCheck,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import ProductsList from '@/components/ProductsList';
import { whatsappMessageLink } from '@/lib/constants';

const HERO_IMAGE = 'https://images.hostinger.com/0aca1e7a-08ba-498b-9457-3f3647b61b46.png';

const PILLARS = [
    {
        icon: ShoppingBag,
        title: 'BUY',
        text: 'Shop quality products from verified sellers at honest prices — delivered to your door.',
        to: '/shop',
        cta: 'Start shopping',
    },
    {
        icon: Store,
        title: 'SELL',
        text: 'Open your storefront and reach thousands of buyers across Nigeria and beyond.',
        to: '/contact',
        cta: 'Become a seller',
    },
    {
        icon: Megaphone,
        title: 'ADVERTISE',
        text: 'Put your brand in front of ready buyers with banners, features and social promos.',
        to: '/advertise',
        cta: 'See ad packages',
    },
    {
        icon: Wrench,
        title: 'SERVICES',
        text: 'Logistics, sourcing, marketing and business support — handled by our team.',
        to: '/services',
        cta: 'Explore services',
    },
];

const TRUST_POINTS = [
    { icon: ShieldCheck, label: 'Secure Payments' },
    { icon: Truck, label: 'Nationwide Delivery' },
    { icon: BadgeCheck, label: 'Verified Sellers' },
    { icon: Headset, label: '24/7 Support' },
];

const MARQUEE_ITEMS = ['BUY', 'SELL', 'ADVERTISE', 'SERVICES'];

const NIGERIA_PAYMENTS = ['Paystack', 'Flutterwave', 'Bank Transfer', 'USSD', 'Verve'];
const INTERNATIONAL_PAYMENTS = ['Visa', 'Mastercard', 'PayPal'];

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>OMUGO EMPIRE — Your Trusted Marketplace for Everything</title>
                <meta name="description" content="OMUGO EMPIRE is Nigeria's trusted marketplace to buy, sell, advertise and access services. Secure payments, nationwide delivery and international shipping." />
            </Helmet>

            {/* Hero */}
            <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-background">
                <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10" />
                <div className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-primary/5" />
                <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-16">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground"
                        >
                            <BadgeCheck className="h-4 w-4 text-gold" /> Nigeria&apos;s trusted marketplace
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                        >
                            Your Trusted Marketplace for{' '}
                            <span className="relative inline-block text-primary">
                                Everything
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden="true">
                                    <path d="M3 9C60 3 140 3 197 8" stroke="hsl(var(--gold))" strokeWidth="5" strokeLinecap="round" />
                                </svg>
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
                        >
                            Buy quality products, sell to thousands, advertise your brand and access trusted services — all in one place, across Nigeria and worldwide.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <Link
                                to="/shop"
                                className="flex h-12 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
                            >
                                Shop Now <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                to="/contact"
                                className="flex h-12 items-center rounded-full border-2 border-primary px-7 font-semibold text-primary transition-colors hover:bg-accent"
                            >
                                Sell With Us
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
                        >
                            {TRUST_POINTS.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                    <Icon className="h-5 w-5 shrink-0 text-primary" /> {label}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
                            <img src={HERO_IMAGE} alt="A happy OMUGO EMPIRE customer shopping with her phone in Lagos" className="h-full w-full object-cover" />
                        </div>
                        <div className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:-left-8">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                                <PackageCheck className="h-5 w-5 text-primary" />
                            </span>
                            <div>
                                <p className="text-sm font-bold text-foreground">Order delivered</p>
                                <p className="text-xs text-muted-foreground">Lagos → Abuja, 2 days</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:right-8">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                                <CreditCard className="h-5 w-5 text-gold" />
                            </span>
                            <div>
                                <p className="text-sm font-bold text-foreground">Payment secured</p>
                                <p className="text-xs text-muted-foreground">Buyer protection active</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Marquee */}
            <div className="overflow-hidden bg-primary py-3.5" aria-hidden="true">
                <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
                    {[...Array(2)].map((_, dup) => (
                        <div key={dup} className="flex items-center gap-10">
                            {[...Array(3)].flatMap((_, rep) =>
                                MARQUEE_ITEMS.map((item) => (
                                    <span key={`${rep}-${item}`} className="flex items-center gap-10 font-display text-sm font-bold tracking-[0.3em] text-primary-foreground">
                                        {item} <span className="h-2 w-2 rounded-full bg-gold" />
                                    </span>
                                )),
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Pillars */}
            <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
                <Reveal>
                    <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-gold">What we do</p>
                    <h2 className="mt-3 text-center font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                        One empire, four ways to grow
                    </h2>
                </Reveal>
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {PILLARS.map(({ icon: Icon, title, text, to, cta }, i) => (
                        <Reveal key={title} delay={i * 0.08}>
                            <Link
                                to={to}
                                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                                    <Icon className="h-6 w-6" />
                                </span>
                                <h3 className="mt-5 font-display text-xl font-extrabold tracking-wide text-foreground">{title}</h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                                <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary">
                                    {cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Featured products */}
            <section className="bg-secondary/60 py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <Reveal>
                        <div className="flex flex-wrap items-end justify-between gap-4">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">Marketplace</p>
                                <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">Featured products</h2>
                            </div>
                            <Link to="/shop" className="flex items-center gap-1.5 font-semibold text-primary hover:underline">
                                View all products <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </Reveal>
                    <div className="mt-12">
                        <ProductsList limit={4} />
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="border-y border-border bg-card py-16">
                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center sm:px-6 lg:grid-cols-4">
                    <Reveal>
                        <p className="font-display text-4xl font-extrabold text-primary">
                            <CountUp value={12000} suffix="+" />
                        </p>
                        <p className="mt-2 text-sm font-medium text-muted-foreground">Happy Customers</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="font-display text-4xl font-extrabold text-primary">
                            <CountUp value={8500} suffix="+" />
                        </p>
                        <p className="mt-2 text-sm font-medium text-muted-foreground">Orders Delivered</p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="font-display text-4xl font-extrabold text-primary">
                            <CountUp value={650} suffix="+" />
                        </p>
                        <p className="mt-2 text-sm font-medium text-muted-foreground">Verified Sellers</p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className="font-display text-4xl font-extrabold text-primary">24/7</p>
                        <p className="mt-2 text-sm font-medium text-muted-foreground">Customer Support</p>
                    </Reveal>
                </div>
            </section>

            {/* Payments */}
            <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <Reveal>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">Payments</p>
                        <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                            Pay your way — in Nigeria or anywhere
                        </h2>
                        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                            Checkout is fast and secure whether you&apos;re paying from Lagos, London or New York. Every order is covered by our buyer protection promise.
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                            <ShieldCheck className="h-5 w-5" /> 100% secure checkout
                        </div>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="space-y-6">
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <p className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-foreground">
                                    <span className="h-2.5 w-2.5 rounded-full bg-primary" /> Nigeria
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {NIGERIA_PAYMENTS.map((p) => (
                                        <span key={p} className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">{p}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                <p className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-foreground">
                                    <span className="h-2.5 w-2.5 rounded-full bg-gold" /> International
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {INTERNATIONAL_PAYMENTS.map((p) => (
                                        <span key={p} className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">{p}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
                <Reveal>
                    <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20" />
                        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-gold/10" />
                        <h2 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
                            Ready to buy, sell or grow with us?
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                            Join thousands of Nigerians and international customers who trust OMUGO EMPIRE every day.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                to="/shop"
                                className="flex h-12 items-center rounded-full bg-gold px-7 font-semibold text-gold-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
                            >
                                Start Shopping
                            </Link>
                            <a
                                href={whatsappMessageLink('Hello OMUGO EMPIRE! I want to sell or advertise with you.')}
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-12 items-center rounded-full border-2 border-primary-foreground/40 px-7 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
