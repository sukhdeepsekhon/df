'use client'
import React from "react";
import Image from "next/image";
import styles from "@/MainPage/Stylesheet/fg.module.css"
import "@/MainPage/Stylesheet/SecondStyle.module.css"
import PunjabPolice from '@/MainPage/Images/PP.svg';
import { useEffect } from 'react';
import UPSC from "@/MainPage/Images/UPSC.jpeg"
import NTA from "@/MainPage/Images/NTA.jpeg"
export default function Home() {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const categories = [
    { name: 'All Categories', slug: 'all' },
    { name: 'UPSC', slug: 'upsc' },
    { name: 'JEE', slug: 'jee' },
    { name: 'State', slug: 'state' },
  ];

  const testSeries = [
    { category: 'state', title: 'Punjab Constable', tests: 32, img: PunjabPolice },
    //{ category: 'jee', title: 'JEE Mains', tests: 50, img: NTA },
    //{ category: 'upsc', title: 'UPSC Civil Services', tests: 45, img: UPSC },
  ];

  useEffect(() => {
    // Set the initial position of the underline
    const activeElement = document.querySelector(`.${styles.active}`);
    if (activeElement) {
      setUnderlinePosition(activeElement);
    }
  }, []);

  const setUnderlinePosition = (element) => {
    const categoryRect = element.getBoundingClientRect();
    const containerRect = document.querySelector(`.${styles.categories}`).getBoundingClientRect();
    const offsetLeft = categoryRect.left - containerRect.left;

    const underline = document.querySelector(`.${styles.underline}`);
    underline.style.width = `${categoryRect.width}px`;
    underline.style.transform = `translateX(${offsetLeft}px)`;
  };

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setActiveCategory(category);

    const activeElement = e.target;
    setUnderlinePosition(activeElement);
  };

  const filteredTestSeries = activeCategory === 'all' ? testSeries : testSeries.filter(test => test.category === activeCategory);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Access Unlimited Test Series for Every Ambition</h1>

      <div className={styles.categories}>
        {categories.map((category) => (
          <a
            key={category.slug}
            href="#"
            className={`${styles.category} ${activeCategory === category.slug ? styles.active : ''}`}
            onClick={(e) => handleCategoryClick(e, category.slug)}
          >
            {category.name}
          </a>
        ))}
        <div className={styles.underline}></div>
      </div>

      <div className={styles.grid}>
        {filteredTestSeries.map((test, index) => (
          <div key={index} className={styles.testCard}>
            <Image src={test.img} alt={test.title} className={styles.testImage} width={100} height={100}/>
            <div className={styles.testTitle}>{test.title}</div>
            <div className={styles.testInfo}>{test.tests} Tests</div>
            
          </div>
        ))}
      </div>
    </div>
  );
}




// Import React and any necessary modules
//import Image from "next/image";
//import SecondStyle from "@/MainPage/Stylesheet/SecondStyle.css"