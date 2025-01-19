"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Search = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim() === '') {
            router.push('/');
        } else {
            router.push(`/?search=${query}`);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Pokemon"
                style={{
                    padding: '10px',
                    fontSize: '1rem',
                    width: '300px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    outline: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
            />
            <button 
                onClick={handleSearch} 
                style={{
                    marginLeft: '10px',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    background: '#3b4cca',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                }}
            >
                Search
            </button>
        </div>
    );
};

export default Search;
