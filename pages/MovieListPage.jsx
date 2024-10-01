import movies from "../data/movies.json";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

export default function MovieListPage(){

    const [search, setSearch] = useState('')
    
    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }

    const filmesFiltrados = movies.filter(filme => filme.titulo.toLowerCase().includes(search.toLowerCase()))
        
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
        filmesFiltrados.length > 0 ?   
        filmesFiltrados
        .map(movie =>(
        <MovieCard key={movie.id} {...movie}/>
        ))
        :
        <p>Filme não Encontrado</p>
        }
    </div>
        </>
    )
}