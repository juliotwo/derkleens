'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/molecules/Navbar';

// Array de usuarios como lo solicitaste.
const allowedUsers = [
  { user: 'julio', password: 'passwordJulio', products: '3,4' },
  { user: 'ana', password: 'passwordAna', products: '1,2' },
  { user: 'luis', password: 'passwordLuis', products: '5,6' },
  { user: 'maria', password: 'passwordMaria', products: '7,8' },
  { user: 'carlos', password: 'passwordCarlos', products: '3,7' },
  {
    user: 'sofia',
    password: 'passwordSofia',
    products: null,
    withAdditionals: true,
  },
  {
    user: 'pedro',
    password: 'passwordPedro',
    products: null,
    withAdditionals: true,
  },
  {
    user: 'JamesKelley',
    password: 'passwordJames',
  },
  {
    user: 'RichardLewis',
    password: 'passwordRichard',
    products: null,
    withAdditionals: true,
  },
  {
    user: 'CarlosAlonso',
    password: 'passwordCarlos',
    products: null,
    withAdditionals: true,
  },
  {
    user: 'julioCesar',
    password: 'passwordJulio',
  },
];

const LoginPage = () => {
  // 1. Hooks para manejar el estado y la navegación
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 2. Lógica para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Busca si el usuario existe en el array
    const foundUser = allowedUsers.find((u) => u.user === username);

    // Valida si el usuario fue encontrado y si la contraseña es correcta
    if (foundUser && foundUser.password === password) {
      // Credenciales correctas
      setError(''); // Limpia cualquier error previo

      router.push('/products');
    } else {
      // Credenciales incorrectas
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <>
      <Navbar withCart={false} />
      <main className='flex items-center justify-center min-h-screen bg-slate-100'>
        <div className='w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg'>
          {/* --- Header con la nueva paleta de colores --- */}
          <div className='text-center'>
            <h1 className='text-3xl font-bold text-slate-800'>Welcome Back</h1>
            <p className='mt-2 text-gray-600'>
              Please sign in to access your account
            </p>
          </div>

          {/* --- Formulario con inputs y botón actualizados --- */}
          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            {/* Email Input */}
            <div>
              <label
                htmlFor='username'
                className='block mb-2 text-sm font-medium text-slate-700'
              >
                Username
              </label>
              <input
                id='username'
                name='username'
                type='text'
                autoComplete='username'
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // --- Input con acento dorado en el estado 'focus' ---
                className='w-full px-4 py-3 text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300'
                placeholder='you@example.com'
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-slate-700'
              >
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // --- Input con acento dorado en el estado 'focus' ---
                className='w-full px-4 py-3 text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300'
                placeholder='••••••••'
              />
            </div>

            {/* El mensaje de error se mantiene en rojo para una clara alerta visual */}
            {/* {error && <div className='text-sm text-red-600'>{error}</div>} */}

            {/* Submit Button */}
            <div>
              <button
                type='submit'
                // --- Botón principal con el color azul marino y acento dorado ---
                className='w-full px-4 py-3 font-semibold text-white bg-green-800 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300'
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
