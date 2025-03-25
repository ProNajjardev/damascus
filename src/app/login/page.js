import React from 'react';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-lg w-96">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">تسجيل الدخول</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-gray-600" htmlFor="email">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-600" htmlFor="password">كلمة المرور</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="أدخل كلمة المرور"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}
