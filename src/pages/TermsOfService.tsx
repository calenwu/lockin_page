import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className='min-h-screen bg-black text-white p-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>Terms of Service</h1>

        <p className='text-2xl mb-4'>Lock In: Stop Procrastinating</p>
        <p className='mb-8'>Last updated: April 1, 2025</p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>1. Acceptance of Terms</h2>
        <p className='mb-4'>
          By using Lock In: Stop Procrastinating, you agree to comply with these
          Terms of Service. If you do not agree, please do not use the app.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          2. User Responsibilities
        </h2>
        <p className='mb-4'>
          We expect all users to engage respectfully with the app and each
          other. Lock In is designed to enhance your productivity, and a
          positive environment is essential for everyone's success.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>3. Prohibited Conduct</h2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            No Abuse or Spam: Do not abuse or spam the system in any manner that
            disrupts the service for other users.
          </li>
          <li>
            Respect Other Users: Be friendly and considerate. Do not disturb or
            harass others.
          </li>
          <li>
            Profile Picture Guidelines: It is strictly forbidden to set
            inappropriate or illegal profile pictures. Any content deemed
            offensive, explicit, or in violation of laws is not permitted.
          </li>
        </ul>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          4. Subscription and Products
        </h2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            Users may access premium features or products through paid
            subscriptions.
          </li>
          <li>
            Subscription prices may be adjusted by Lock In at any time. Users
            will pay the new price starting at the next billing period.
          </li>
          <li>
            Lock In reserves the right to terminate or restrict any user's
            subscription or account access at any time, with or without notice.
          </li>
        </ul>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          5. Limitation of Liability
        </h2>
        <p className='mb-4'>
          The Lock In app may contain bugs or operational issues and may not
          always function as intended. You acknowledge that Lock In is not
          liable for harm, issues, or losses caused by these operational
          failures.
        </p>
        <p className='mb-4'>
          We strive to keep the app as bug-free as possible. However, users
          experiencing critical issues can uninstall the app via their device's
          Operating System Settings as a final remedy.
        </p>
        <p className='mb-4'>
          Lock In will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or revenues
          arising out of your use of the app.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          6. Privacy and Data Collection
        </h2>
        <p className='mb-4'>We prioritize your privacy:</p>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            Data Stays on Device: Lock In uses system APIs (like Apple's Screen
            Time API) to block apps and distractions. Usage data stays on your
            device, and we do not store detailed app-usage data.
          </li>
          <li>
            Minimize Data Collection: We collect minimal data, clearly described
            below, necessary for the functionality of the app and improving user
            experience.
          </li>
          <li>
            No Data Selling: We never sell personal data to third parties.
          </li>
        </ul>

        <p className='font-bold mt-4 mb-2'>Types of Data Collected:</p>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            Data Linked to You:
            <ul className='list-disc pl-6 mt-2'>
              <li>
                Contact information and user identifiers are used to manage
                subscriptions and payments, and to assist with restoring
                accounts and handling support requests.
              </li>
            </ul>
          </li>
          <li>
            Data Not Linked to You:
            <ul className='list-disc pl-6 mt-2'>
              <li>
                Usage data, diagnostics, and crash reports are collected
                anonymously to help improve the app and user experience.
              </li>
            </ul>
          </li>
        </ul>

        <h2 className='text-2xl font-bold mt-6 mb-2'>7. Refund Policy</h2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            For annual subscription purchases made directly through Lock In
            (website), refund requests can typically be accommodated within 30
            days of your purchase.
          </li>
          <li>
            Refund requests must be sent from the email used for the original
            purchase.
          </li>
          <li>
            For App Store purchases, contact Apple directly as we do not handle
            refunds processed through Apple's platform.
          </li>
        </ul>

        <h2 className='text-2xl font-bold mt-6 mb-2'>8. Account Termination</h2>
        <p className='mb-4'>
          We reserve the right to terminate or suspend your account at any time,
          with or without notice. This will most likely happen if you violate
          these Terms of Service or your behavior is harmful to the community or
          the app.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          9. Changes to These Terms
        </h2>
        <p className='mb-4'>
          We may update these Terms periodically. Continued use after changes
          indicates acceptance of the updated Terms.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          10. End User License Agreement (EULA)
        </h2>
        <p className='mb-4'>
          Your use of Lock In: Stop Procrastinating is governed by Apple's
          Standard End User License Agreement, accessible here:
          <br />
          <a
            href='https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:underline'
          >
            Apple Standard EULA
          </a>
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          11. Contact Information
        </h2>
        <p className='mb-4'>
          If you have questions or concerns about these Terms of Service, please
          contact:
          <br />
          Ye Trading (Sole Proprietorship)
          <a
            href='https://app.youform.com/forms/qhl8g6a7'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:underline'
          >
            via our contact form
          </a>
          <br />
          or email us at
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
