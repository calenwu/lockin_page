import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-black text-white p-8'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>
          Privacy Policy for Lock In: Stop Procrastinating
        </h1>
        <p className='mb-4'>Last updated: May 12, 2025</p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>1. Introduction</h2>
        <p className='mb-4'>
          Ye Trading (Sole Proprietorship) (“we”, “our”, “us”, “Lock In”) is
          committed to protecting your privacy. This Privacy Policy explains
          clearly what data we collect, how we use it, and your rights regarding
          your data when using the Lock In: Stop Procrastinating app (the
          “Service” or “App”).
        </p>
        <p className='mb-4'>
          By using our App, you agree to this Privacy Policy. If you disagree
          with any terms, please do not use the App.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>2. Data We Collect</h2>
        <p className='mb-4'>
          We collect minimal personal data, limited to what's essential for the
          functionality of our app:
        </p>
        <p className='mb-4 font-bold'>Personal Data We Collect:</p>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <strong>Profile Information:</strong> Display name, username,
            profile picture, and friend list, stored to provide core
            functionalities (e.g., displaying your profile to other users).
          </li>
          <li>
            <strong>Usage Data:</strong> Information regarding how many hours
            you've "locked in" per week, which is publicly viewable in the app.
          </li>
          <li>
            <strong>Technical Data:</strong> Firebase Cloud Messaging (FCM)
            tokens, used exclusively to send you push notifications.
          </li>
          <li>
            <strong>Wall of Shame Videos:</strong> If you choose to use the Wall
            of Shame feature to extend your daily app limits, we collect the
            video recording of you reading the challenge text. This video is
            linked to your account and is accessible via a unique, hard-to-guess
            link for approximately 48 hours before deletion. Only friends you
            are connected with in the app will receive this link directly.
            Anyone else would need to guess the link (with a chance of roughly
            one in three hundred forty undecillion (a number with 37 zeros), or
            2^128, of guessing correctly) or otherwise obtain it to view the
            video during this period.
          </li>
        </ul>
        <p className='mb-4'>
          We do not collect sensitive personal data, payment details, or
          passwords. Logins are managed securely through Apple's OAuth.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          3. How We Use Your Data
        </h2>
        <p className='mb-4'>Your data is used exclusively to:</p>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>Provide and maintain the App's core functionalities.</li>
          <li>
            Allow interaction and social features within the App (such as
            sharing activity with friends).
          </li>
          <li>
            Send push notifications about your usage, reminders, and updates to
            the Service.
          </li>
          <li>
            Display Wall of Shame videos to users who have the specific access
            link, for a limited duration.
          </li>
        </ul>
        <p className='mb-4'>
          We do not sell, trade, or share your data with third parties for
          marketing or advertising purposes.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>4. Data Security</h2>
        <p className='mb-4'>
          We take your privacy and security seriously. We utilize secure servers
          (hosted by Supabase) and employ industry-standard measures and
          encryption technologies to protect your data. While we strive for
          strong security, no system can guarantee 100% protection. By using the
          Service, you acknowledge these risks.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          5. Third-Party Services
        </h2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <strong>Supabase:</strong> Hosts our database and backend services.
            Supabase may log your IP address as part of standard operational
            practices. For details, review their Privacy Policy.
          </li>
        </ul>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          6. Children's Privacy (COPPA Compliance)
        </h2>
        <p className='mb-4'>
          Lock In is not intended for children under the age of 13. We do not
          knowingly collect personal data from anyone under 13. If we discover
          or are notified that we have inadvertently collected personal data
          from children under 13, we will promptly delete it. Please contact us
          immediately if you suspect we may have collected data from a child
          under 13.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          7. Your Rights and Choices
        </h2>
        <p className='mb-4'>
          <strong>Account Deletion & Data Removal:</strong> You can request to
          delete your account and associated data at any time by contacting us{' '}
          <a
            href='https://app.youform.com/forms/qhl8g6a7'
            target='_blank'
            rel='noopener noreferrer'
          >
            via Form
          </a>
          . Upon verification of your request, we will promptly delete your
          account data.
        </p>
        <p className='mb-4'>
          <strong>Push Notifications:</strong> You can disable push
          notifications via your device settings.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>8. Data Retention</h2>
        <p className='mb-4'>
          We retain your personal data as long as your account remains active,
          or as required by law. Upon deletion of your account, we may retain
          data in backup systems temporarily. However, such data will not be
          actively used or accessed. Wall of Shame videos are automatically
          deleted approximately 48 hours after they are posted.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          9. International Users & Data Transfers
        </h2>
        <p className='mb-4'>
          Lock In is hosted on servers primarily based in the United States. By
          using Lock In from outside the United States, you consent to your
          personal data being transferred and processed in the United States,
          which may offer different levels of data protection than your home
          country.
        </p>
        <p className='mb-4'>
          For users in the European Economic Area (EEA), we ensure data
          transfers are compliant with GDPR by using standard contractual
          clauses approved by the European Commission or similar mechanisms
          providing adequate protection.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          10. California Residents (CCPA Compliance)
        </h2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <strong>Right to Know:</strong> Request disclosure about the
            categories and specific pieces of personal data collected.
          </li>
          <li>
            <strong>Right to Delete:</strong> Request deletion of your collected
            personal data.
          </li>
          <li>
            <strong>Right to Non-Discrimination:</strong> You will not receive
            discriminatory treatment when exercising your privacy rights.
          </li>
        </ul>
        <p className='mb-4'>
          To exercise these rights, please contact us at{' '}
          <a
            href='https://app.youform.com/forms/qhl8g6a7'
            target='_blank'
            rel='noopener noreferrer'
          >
            via Form
          </a>
          . Verification of identity is required.
        </p>
        <p className='mb-4'>
          We do not sell your personal data to third parties.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          11. European Economic Area Users (GDPR Compliance)
        </h2>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>
            <strong>Right to Access:</strong> Request access to your personal
            data.
          </li>
          <li>
            <strong>Right to Rectify:</strong> Request correction of inaccurate
            data.
          </li>
          <li>
            <strong>Right to Erasure ("Right to be Forgotten"):</strong> Request
            deletion of your data.
          </li>
          <li>
            <strong>Right to Data Portability:</strong> Request transfer of your
            data to another service provider.
          </li>
          <li>
            <strong>Right to Object:</strong> Object to processing your data for
            certain purposes.
          </li>
        </ul>
        <p className='mb-4'>
          To exercise these rights, contact us at{' '}
          <a
            href='https://app.youform.com/forms/qhl8g6a7'
            target='_blank'
            rel='noopener noreferrer'
          >
            via Form
          </a>
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>
          12. Updates to this Policy
        </h2>
        <p className='mb-4'>
          We may occasionally update this Privacy Policy. Any updates will be
          clearly announced within the App. Continued use of Lock In after
          updates implies acceptance of the new terms.
        </p>

        <h2 className='text-2xl font-bold mt-6 mb-2'>13. Contact Us</h2>
        <p className='mb-4'>
          If you have questions, concerns, or requests related to your data or
          privacy rights, please contact:
          <br />
          Ye Trading (Sole Proprietorship)
          <br />
          <a
            href='https://app.youform.com/forms/qhl8g6a7'
            target='_blank'
            rel='noopener noreferrer'
          >
            Via form
          </a>
          <br />
          or Email: calenwubiz@gmail.com
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
