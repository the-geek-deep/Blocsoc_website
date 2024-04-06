// pages/team.tsx
import Head from 'next/head';
import Header from '../../components/Header';

const Team: React.FC = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', position: 'CEO', image: '/images/john_doe.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est quam. Sed id libero vel sem pharetra pharetra.' },
    { id: 2, name: 'Jane Smith', position: 'CTO', image: '/images/jane_smith.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est quam. Sed id libero vel sem pharetra pharetra.' },
    // Add more team members as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Our Team - TechCompany</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="mt-2 text-sm text-gray-500">Get to know the talented individuals behind TechCompany.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                <p className="text-gray-500 text-center">{member.position}</p>
                <p className="mt-4 text-sm text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2022 TechCompany. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Team;
