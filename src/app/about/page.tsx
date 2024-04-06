// pages/about.tsx
import Head from 'next/head';
import Header from '../../components/Header';

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>About - Paradigm.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold leading-tight text-gray-900">About Paradigm.xyz</h1>
          <p className="mt-4 text-lg text-gray-700">
            Paradigm.xyz is a platform for exploring the latest trends and insights in technology, 
            innovation, and entrepreneurship. We strive to provide valuable content and resources 
            to our community of tech enthusiasts, professionals, and entrepreneurs.
          </p>
        </section>

        <section className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our mission is to empower individuals and organizations to embrace innovation 
            and technology for positive change. We aim to inspire and educate our audience 
            through insightful articles, interviews, and events.
          </p>
        </section>

        <section className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900">Our Approach</h2>
          <p className="mt-4 text-lg text-gray-700">
            We believe in a collaborative and inclusive approach to technology. Our platform 
            is designed to facilitate learning, networking, and collaboration among our members.
          </p>
        </section>

        <section className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
          <ul className="mt-4 text-lg text-gray-700 list-disc list-inside">
            <li>Innovation</li>
            <li>Education</li>
            <li>Community</li>
            <li>Integrity</li>
            <li>Diversity</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2022 Paradigm.xyz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
