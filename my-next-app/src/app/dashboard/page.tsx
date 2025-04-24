import MovieSearch from '@/components/MovieSearch'

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      
      <img
        src="/images/background.jpg"
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover blur-md opacity-70 -z-10"
      />

    
      <div className="z-10 px-4 py-6 bg-white/80 backdrop-blur-md rounded shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">🎬 Buscar Filmes com OMDB API</h1>
        <MovieSearch />
      </div>
    </main>
  )
}
