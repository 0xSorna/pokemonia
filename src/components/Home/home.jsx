import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { BASE_POKEMON_API_URL, LIMIT } from "../../lib/constants";
import './home.css';
import { PokemonCard } from "../pokemoncard/pokemoncard";

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(LIMIT);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);

    useTitle('Pokémons');

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_POKEMON_API_URL}?limit=${limit}&offset=${offset}`);
            const data = await response.json();
            if (response.ok && data) {
                setPokemons(data.results);
                setTotal(data.count);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [offset, limit]);

    const handlePageChange = (newOffset) => {
        setOffset(newOffset);
    };

    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    return (
        <div className="container my-4">
            {loading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : error ? (
                <div className="text-center text-danger">{error}</div>
            ) : (
                <>
                    <h1 className="text-center mb-4">Pokémons</h1>
                    <div className="row">
                        {pokemons.map((pokemon, idx) => {
                            const pokemonNumber = pokemon.url.split('/').filter(Boolean).pop();
                            return (
                                <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={idx}>
                                    <PokemonCard pokemon={pokemon} idx={pokemonNumber} />
                                </div>
                            );
                        })}
                    </div>
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button 
                                    className="page-link" 
                                    onClick={() => handlePageChange(offset - limit)} 
                                    aria-label="Previous"
                                >
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button 
                                    className="page-link" 
                                    onClick={() => handlePageChange(offset + limit)} 
                                    aria-label="Next"
                                >
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </>
            )}
        </div>
    );
};
