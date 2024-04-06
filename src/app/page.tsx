// pages/index.tsx
import Head from 'next/head';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Paradigm.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header active='home' />

      <main className="container mx-auto px-4 py-8">
        <section>
          <h1 className="text-4xl font-bold leading-tight">Welcome to Paradigm.xyz</h1>
          <p className="mt-4 text-lg text-gray-700">
            Your source for curated crypto research and analysis
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="mt-4 text-lg text-gray-700">
            Paradigm.xyz is a platform dedicated to providing insightful content, analysis, and
            resources in the field of cryptocurrency and blockchain technology. Our mission is to
            empower individuals and organizations to navigate the complexities of the crypto space
            with confidence.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <ul className="mt-4 text-lg text-gray-700">
            <li>Cryptocurrency Market Analysis</li>
            <li>Blockchain Technology Insights</li>
            <li>Educational Resources and Guides</li>
            <li>Consulting Services for Crypto Projects</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-700">
            Have a question or need assistance? Feel free to reach out to us at{' '}
            <a href="mailto:contact@paradigm.xyz" className="text-blue-500 hover:underline">
              contact@paradigm.xyz
            </a>{' '}
            or through our social media channels.
          </p>
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

export default Home;
