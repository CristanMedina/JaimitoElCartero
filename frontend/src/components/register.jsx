
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario: ', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-pink-500">
          Crea tu Cuenta
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-300 font-semibold mb-2"
            >
              Nombre de Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Ingresa tu nombre de usuario"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 font-semibold mb-2"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-300 font-semibold mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-300 font-semibold mb-2"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Confirma tu contraseña"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-300 shadow-lg transform hover:scale-105"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
