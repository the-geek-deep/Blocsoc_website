// pages/projects.tsx
import Head from 'next/head';
import Header from '../../components/Header';

const Projects: React.FC = () => {
  const projects = [
    { id: 1, name: 'Project A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/images/project_a.jpg', link: '#' },
    { id: 2, name: 'Project B', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/images/project_b.jpg', link: '#' },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Our Projects - TechCompany</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="mt-2 text-sm text-gray-500">Explore some of our latest projects.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project) => (
              <a key={project.id} href={project.link} className="block">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p className="text-sm text-gray-700">{project.description}</p>
                  </div>
                </div>
              </a>
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

export default Projects;
