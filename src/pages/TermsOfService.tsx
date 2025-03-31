import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className='min-h-screen bg-black text-white p-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>
          Terms of ServiceLock In: Stop Procrastinating
        </h1>

        <p className='mb-4'>Last updated: March 31, 2025</p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>1. Acceptance of Terms</h2>
        <p className='mb-4'>
          By using the Lock In: Stop Procrastinating app, you agree to comply
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
        <p>
          No Abuse or Spam: Do not abuse or spam the system in any manner that
          disrupts the service for other users.
        </p>
        <p className='mt-2'>
          Respect Other Users: Be friendly and considerate. Do not disturb or
          harass others.
        </p>
        <p className='mt-2'>
          Profile Picture Guidelines: It is strictly forbidden to set
          inappropriate or illegal profile pictures. Any content deemed
          offensive, explicit, or in violation of laws is not permitted.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          4. Subscription and Products
        </h2>
        <p>
          Users may access premium features or products through paid
          subscriptions.
        </p>
        <p className='mt-2'>
          Prices for subscriptions and products may be adjusted by Lock In at
          any time. If subscription prices are adjusted, users will be required
          to pay the new price at the start of the next billing period.
        </p>
        <p className='mt-2'>
          Lock In reserves the right to terminate or restrict any user's
          subscription or account access at any time, with or without notice.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>5. Account Termination</h2>
        <p className='mb-4'>
          We reserve the right to terminate or suspend your account at any time,
          with or without notice, if you violate these Terms of Service or if
          your behavior is harmful to the community or the app.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          6. Changes to These Terms
        </h2>
        <p className='mb-4'>
          We may update these Terms from time to time. Your continued use of the
          app after changes constitutes your acceptance of the new terms.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>7. Contact Us</h2>
        <p className='mb-4'>
          If you have any questions or concerns about these Terms of Service,
          please contact:
          <br />
          Ye Trading (Sole Proprietorship)
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
