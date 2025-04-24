'use client';

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = async () => {
    if (!email || !password) {
      setMessage('Preencha todos os campos')
      return
    }

    const { error } = await supabase.auth.signUp({ email, password })

    if (error) {
      setMessage(`Erro: ${error.message}`)
    } else {
      setMessage('✅ Cadastro realizado! Redirecionando...')
      setTimeout(() => router.push('/login'), 1500)
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/images/background.jpg"
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover blur-md opacity-70"
      />
      <div className="relative z-10 bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Cadastro</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          className="w-full p-2 mb-2 border rounded"
        />
        <button
          onClick={handleRegister}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
        >
          Cadastrar
        </button>
        {message && <p className="mt-2">{message}</p>}
      </div>
    </div>
  )
}
