import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-black text-white p-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>Privacy Policy</h1>

        {/* Content will be added later */}

        <div className='mt-8'>
          <Link to='/' className='text-blue-400 hover:underline'>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
