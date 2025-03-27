import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-black text-white p-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>Privacy Policy</h1>

        <p className='mb-4 font-bold'>
          Privacy Policy for Lock In: Stop Procastinating
        </p>
        <p className='mb-4'>Last updated: 27th March 2025</p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>Introduction</h2>
        <p className='mb-4'>
          Ye Trading (Sole Proprietaryship) (“we”, “our”, or “us”) is committed
          to protecting your privacy. This Privacy Policy explains the minimal
          data we collect through our app, Lock In: Stop Procastinating, how we
          use it, and your rights regarding your data.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>Data We Collect</h2>
        <ul className='list-disc list-inside mb-4'>
          <li>
            <strong>No Personal Information:</strong> We do not collect personal
            details such as your name, email address, or payment information.
          </li>
          <li>
            <strong>Apple OAuth Login:</strong> All login credentials are
            managed by Apple via OAuth.
          </li>
          <li>
            <strong>App Functionality Data:</strong> We only store information
            essential for the app's functionality. This includes your profile
            details (display name, username, profile picture), friend list, and
            the number of hours you have "locked in" each week.
          </li>
        </ul>

        <h2 className='text-2xl font-bold mt-6 mb-2'>Use of Your Data</h2>
        <p className='mb-4'>
          The data we collect is used solely to provide and enhance the
          functionality of the app. We do not sell, trade, or share your
          information with third parties for marketing or other purposes.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>Data Security</h2>
        <p className='mb-4'>
          We will try our best to keep your data secure using industry-standard
          measures and protocols. While we strive to protect your information,
          please be aware that no security system is impenetrable.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>Third-Party Services</h2>
        <p className='mb-4'>
          We use Supabase to host our servers. As part of their service,
          Supabase may log your IP address. For more details on how Supabase
          handles your data, please refer to their Privacy Policy.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>Your Rights</h2>
        <p className='mb-4'>
          You are free to request the deletion of your account and all
          associated data at any time. Please contact us to exercise this right,
          and we will process your request promptly.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>Changes to This Policy</h2>
        <p className='mb-4'>
          We may update this Privacy Policy from time to time. Any changes will
          be posted within the app, and we encourage you to review the policy
          periodically.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>Contact Us</h2>
        <p className='mb-4'>
          If you have any questions or concerns regarding this Privacy Policy or
          our data practices, please contact us at:
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
