'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-center">
      
      <img
        src="/images/background.jpg"
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover blur-md opacity-70 -z-10"
      />

     
      <div className="z-10 bg-white/80 backdrop-blur-md p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">🎬 Bem-vindo ao OMDB App</h1>
        <p className="mb-6 text-gray-700">Pesquise seus filmes favoritos!</p>
        <div className="flex flex-col gap-4">
          <Link
            href="/register"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition"
          >
            Cadastrar
          </Link>
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  )
}
