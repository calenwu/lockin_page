import React from 'react';
import { Link } from 'react-router-dom';

export default function Credits() {
  return (
    <div className='min-h-screen bg-black text-white p-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>Credits</h1>

        <p className='mb-6'>
          Lock In app wouldn't be possible without the amazing artwork and
          contributions from these talented artists:
        </p>

        <div className='space-y-8'>
          <div className='border border-gray-700 rounded-lg p-6'>
            <h2 className='text-2xl font-bold mb-2'>Rémi Tran</h2>
            <a
              href='https://trinketmage.github.io/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 hover:underline'
            >
              Visit Portfolio
            </a>
          </div>

          <div className='border border-gray-700 rounded-lg p-6'>
            <h2 className='text-2xl font-bold mb-2'>Nasana</h2>
            <a
              href='https://x.com/nasana_x'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 hover:underline'
            >
              Follow on X
            </a>
          </div>

          <div className='border border-gray-700 rounded-lg p-6'>
            <h2 className='text-2xl font-bold mb-2'>GrishTad</h2>
            <a
              href='https://github.com/GrishTad'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 hover:underline'
            >
              View GitHub Profile
            </a>
          </div>
        </div>

        <p className='mt-8 mb-8'>
          We extend our sincere gratitude to these artists for their
          extraordinary work that has helped make Lock In a visually engaging
          experience.
        </p>

        <div className='mt-8'>
          <Link to='/' className='text-blue-400 hover:underline'>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
