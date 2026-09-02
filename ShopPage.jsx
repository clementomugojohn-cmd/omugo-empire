import React from 'react';
import { Helmet } from 'react-helmet';
import ProductsList from '@/components/ProductsList';
import Reveal from '@/components/Reveal';

export default function ShopPage() {
    return (
        <>
            <Helmet>
                <title>Shop Products — OMUGO EMPIRE</title>
                <meta name="description" content="Browse quality products from verified sellers on OMUGO EMPIRE — electronics, fashion, home goods and more, with secure checkout and nationwide delivery." />
            </Helmet>

            <section className="border-b border-border bg-primary py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">The Marketplace</p>
                    <h1 className="mt-3 font-display text-4xl font-extrabold text-primary-foreground sm:text-5xl">Shop Products</h1>
                    <p className="mt-4 max-w-2xl text-primary-foreground/80">
                        Handpicked quality from verified sellers. Every order is protected and delivered nationwide.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
                <Reveal>
                    <ProductsList />
                </Reveal>
            </section>
        </>
    );
}
