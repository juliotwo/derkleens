'use client';
import Footer from '@/components/molecules/Footer';
import Hero from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import Services from '@/components/organisms/Services';
import Missions from '@/components/molecules/Missions';
import References from '@/components/molecules/References';
import Navbar from '@/components/molecules/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar textBlack={false} withCart={true} />

      <Services isHome={false} />

      <Footer />
    </main>
  );
}
