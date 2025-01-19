import Search from './components/search';
import Result from './components/result';

export default function Home() {
    return (
        <div>
       <h1 style={{ fontSize: '2.5rem', color: '#ffcb05', textShadow: '2px 2px #3b4cca' ,maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '20px'}}>Search Pokémon</h1>
            <Search />
            <Result />
        </div>
    );
}
