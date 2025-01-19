"use client";

import { Suspense } from 'react';
import Search from './components/search';
import Result from './components/result';

export default function Home() {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#ffcb05', textShadow: '2px 2px #3b4cca' }}>Search Pokémon</h1>
            <Search />
            <Suspense fallback={<p>Loading Pokémon...</p>}>
                <Result />
            </Suspense>
        </div>
    );
}
