"use client";

import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../lib/queries';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ITEMS_PER_PAGE = 20;

const Result = () => {
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setSearchQuery(searchParams.get('search') || '');
    }, [searchParams]);

    const { loading, error, data } = useQuery(GET_POKEMON_LIST, {
        variables: { first: ITEMS_PER_PAGE, offset: 0 },
    });

    if (loading) return <p style={{ textAlign: 'center', fontSize: '1.5rem', color: '#555' }}>Loading...</p>;
    if (error) return <p style={{ textAlign: 'center', fontSize: '1.5rem', color: 'red' }}>Error loading Pokémon list.</p>;

    const displayedPokemons = searchQuery.trim() === ''
        ? data.pokemons
        : data.pokemons.filter((pokemon: any) =>
            pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#ffcb05', textShadow: '2px 2px #3b4cca' }}>Pokémon List</h1>
            {displayedPokemons.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    {displayedPokemons.map((pokemon: any) => (
                        <div 
                            key={pokemon.id} 
                            style={{
                                border: '1px solid #ccc', 
                                borderRadius: '10px', 
                                padding: '20px', 
                                textAlign: 'center',
                                width: '200px',
                                backgroundColor: '#f9f9f9',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            }}
                        >
                            <img 
                                src={pokemon.image} 
                                alt={pokemon.name} 
                                style={{ width: '150px', height: '150px', borderRadius: '50%', border: '3px solid #3b4cca' }}
                            />
                            <h3 style={{ color: '#3b4cca', fontSize: '1.5rem', marginTop: '10px' }}>{pokemon.name}</h3>
                            <p style={{ fontSize: '1rem', color: '#555' }}>Type: {pokemon.types.join(', ')}</p>
                            <a 
                                href={`/pokemon/${pokemon.name.toLowerCase()}`} 
                                style={{ 
                                    display: 'inline-block', 
                                    marginTop: '10px', 
                                    padding: '10px 20px', 
                                    fontSize: '1rem', 
                                    backgroundColor: '#3b4cca', 
                                    color: 'white', 
                                    borderRadius: '5px', 
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                }}
                            >
                                View Details
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={{ fontSize: '1.5rem', color: '#777' }}>No Pokémon found.</p>
            )}
        </div>
    );
};

export default Result;
