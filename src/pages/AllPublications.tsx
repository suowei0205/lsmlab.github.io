import Navbar from '../components/Navbar';
import Publications from '../components/Publications';
import Footer from '../components/Footer';

export default function AllPublications() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar activeSection="publications" />
      <main className="flex-grow pt-20">
        <Publications showAll={true} />
      </main>
      <Footer />
    </div>
  );
}
