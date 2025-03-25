"use client";
import React from "react";

const Card = ({ image, title, onReadMore }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <button
          onClick={onReadMore}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          قراءة المزيد
        </button>
      </div>
    </div>
  );
};

export default function NewsGrid() {
  const newsData = [
    {
      image: "https://via.placeholder.com/400x300",
      title: "الأخبار العاجلة: عنوان الخبر الأول",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "عنوان الخبر الثاني",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "عنوان الخبر الثالث",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "عنوان الخبر الرابع",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "عنوان الخبر الخامس",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "عنوان الخبر السادس",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "عنوان الخبر السابع",
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "عنوان الخبر الثامن",
    },
  ];

  const handleReadMore = (title) => {
    alert(`قراءة المزيد عن: ${title}`);
  };

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">أحدث الأخبار</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsData.map((news, index) => (
          <Card
            key={index}
            image={news.image}
            title={news.title}
            onReadMore={() => handleReadMore(news.title)}
          />
        ))}
      </div>
    </div>
  );
}
