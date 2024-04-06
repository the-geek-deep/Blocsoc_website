// pages/contact.tsx
import Head from 'next/head';
import Header from '../../components/Header';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Contact Us - Paradigm.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="mt-2 text-sm text-gray-500">Get in touch with us.</p>
            <form className="mt-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" id="name" name="name" autoComplete="name" placeholder="Your Name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input type="email" id="email" name="email" autoComplete="email" placeholder="Your Email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-lg" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Your Message" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-lg"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">Submit</button>
              </div>
            </form>
          </div>
          <div className="bg-gray-200 py-4 px-6">
            <div className="flex items-center mb-4">
              <FaEnvelope className="w-6 h-6 mr-2 text-gray-700" />
              <a href="mailto:contact@paradigm.xyz" className="text-gray-700">contact@paradigm.xyz</a>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="w-6 h-6 mr-2 text-gray-700" />
              <span className="text-gray-700">+1-234-567-890</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="w-6 h-6 mr-2 text-gray-700" />
              <span className="text-gray-700">123 Street, City, Country</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2022 Paradigm.xyz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
