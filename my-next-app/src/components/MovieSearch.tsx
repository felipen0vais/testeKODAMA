'use client';

import { useState } from 'react'

type Movie = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function MovieSearch() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!query) return
    setLoading(true)
    const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY
    const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${query}`)
    const data = await res.json()
    setMovies(data.Search || [])
    setLoading(false)
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome do filme..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Buscar
        </button>
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="border rounded shadow p-2">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.png'}
                alt={movie.Title}
                className="w-full h-72 object-cover rounded"
              />
              <h2 className="text-lg font-semibold">{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
