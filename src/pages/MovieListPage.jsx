import movies from "../data/movies.json";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

export default function MovieListPage(){

    const [search, setSearch] = useState('')
    const [listaFilmes, setlistaFilmes] = useState(movies)

    const handleSearch = (e) =>{
        setSearch(e.target.value)
        
        const filmesFiltrados = movies
        setlistaFilmes(filmesFiltrados)
    }


    return (
        <>
        <h2>Veja a lista completa de Filmes</h2>
        <input 
        className="text-black"
        type="text" 
        name="search" 
        id="search" 
        value={search}
        onChange={handleSearch}
        />
        <div className="flex">
        {
        listaFilmes
        .filter(filme=>(filme.titulo).includes(search))
        .map(movie =>(
        <MovieCard key={movie.id} {...movie}/>
        ))
        }
    </div>
        </>
    )
}