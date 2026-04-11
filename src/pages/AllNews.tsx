import Navbar from '../components/Navbar';
import News from '../components/News';
import Footer from '../components/Footer';

export default function AllNews() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar activeSection="news" />
      <main className="flex-grow pt-20">
        <News showAll={true} />
      </main>
      <Footer />
    </div>
  );
}
