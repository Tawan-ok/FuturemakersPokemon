"use client";

import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../../lib/queries';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const PokemonDetail = () => {
    const params = useParams();
    const [pokemonName, setPokemonName] = useState<string>('');

    useEffect(() => {
        if (params?.name) {
            const name = Array.isArray(params.name) ? params.name[0] : params.name;
            setPokemonName(name);
        }
    }, [params]);

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: { name: pokemonName },
        skip: !pokemonName,  
    });

    if (loading) return <p style={{ textAlign: 'center', fontSize: '1.5rem', color: '#555' }}>Loading...</p>;
    if (error || !data?.pokemon) return <p style={{ textAlign: 'center', fontSize: '1.5rem', color: 'red' }}>Pokemon not found.</p>;

    const pokemon = data.pokemon;

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ fontSize: '2rem', color: '#ffcb05' }}>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} style={{ width: '200px', height: '200px', borderRadius: '50%', border: '5px solid #3b4cca' }} />
            <p style={{ fontSize: '1.2rem', color: '#333' }}><strong>Type:</strong> {pokemon.types.join(', ')}</p>
            <h3 style={{ color: '#3b4cca', fontSize: '1.5rem', marginTop: '20px' }}>Attacks</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
                {pokemon.attacks.fast.map((atk: any) => (
                    <li key={atk.name} style={{ background: '#ffcb05', margin: '5px 0', padding: '10px', borderRadius: '5px', color: '#333', fontWeight: 'bold' }}>{atk.name} - {atk.damage}</li>
                ))}
            </ul>
            <h3 style={{ color: '#3b4cca', fontSize: '1.5rem', marginTop: '20px' }}>Evolutions</h3>
            {pokemon.evolutions ? (
                pokemon.evolutions.map((evo: any) => (
                    <button 
                        key={evo.id} 
                        onClick={() => window.location.href = `/?search=${evo.name}`}
                        style={{ margin: '5px', padding: '10px 20px', fontSize: '1rem', background: '#3b4cca', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        {evo.name}
                    </button>
                ))
            ) : (
                <p style={{ color: '#777' }}>No Evolutions</p>
            )}
        </div>
    );
};

export default PokemonDetail;
