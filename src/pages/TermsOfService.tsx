import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className='min-h-screen bg-black text-white p-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>Terms of Service</h1>

        <p className='mb-4 font-bold'>
          Terms of Service for Lock In: Stop Procastinating
        </p>
        <p className='mb-4'>Last updated: 27th March 2025</p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>1. Acceptance of Terms</h2>
        <p className='mb-4'>
          By using the Lock In: Stop Procastinating app, you agree to comply
          with these Terms of Service. If you do not agree, please do not use
          the app.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          2. User Responsibilities
        </h2>
        <p className='mb-4'>
          We expect all users to engage respectfully with the app and each
          other. Our app is designed to enhance your productivity, and a
          positive environment is essential for everyone's success.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>3. Prohibited Conduct</h2>
        <ul className='list-disc list-inside mb-4'>
          <li>
            <strong>No Abuse or Spam:</strong> Do not abuse or spam the system
            in any manner that disrupts the service for other users.
          </li>
          <li>
            <strong>Respect Other Users:</strong> Be friendly and considerate.
            Do not disturb or harass others.
          </li>
          <li>
            <strong>Profile Picture Guidelines:</strong> It is strictly
            forbidden to set inappropriate or illegal profile pictures. Any
            content deemed offensive, explicit, or in violation of laws is not
            permitted.
          </li>
        </ul>

        <h2 className='text-2xl font-bold mt-6 mb-2'>4. Account Termination</h2>
        <p className='mb-4'>
          We reserve the right to terminate or suspend your account at any time,
          with or without notice, if you violate these Terms of Service or if
          your behavior is harmful to the community or the app.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          5. Changes to These Terms
        </h2>
        <p className='mb-4'>
          We may update these Terms from time to time. Your continued use of the
          app after changes constitutes your acceptance of the new terms.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>6. Contact Us</h2>
        <p className='mb-4'>
          If you have any questions or concerns about these Terms of Service,
          please contact:
          <br />
          Ye Trading (Sole Proprietaryship)
          <br />
          calenwubiz@gmail.com
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
