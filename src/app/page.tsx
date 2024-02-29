import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import CategoryCardWrap from '@/components/categoryCard/categoryCardWrap';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryCardWrap />
      <Footer />
    </div>
  );
}
