import React from 'react';
import Navbar from './component/navbar';
import ImageSlider from './component/ImageSlider';
import NewsTicker from './component/NewsTicker';
import NewsGrid from './component/NewsGrid';
import Footer from './component/Footer';

export default function Home() {
  const news = [
    "الأخبار العاجلة: ارتفاع أسعار النفط عالميًا",
    "الطقس اليوم: توقعات بانخفاض درجات الحرارة",
    "التكنولوجيا: إطلاق هاتف جديد من شركة كبرى",
    "الرياضة: فريق محلي يفوز ببطولة الدوري",
  ];
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <div className="p-4">
        <h1 className="text-2xl mb-4">شريط الأخبار</h1>
        <NewsTicker newsItems={news} direction="horizontal" speed={2000} />
      </div>
      <NewsGrid />
      <Footer />
    </div>
  );
}
