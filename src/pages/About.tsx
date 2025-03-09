
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useElementOnScreen } from '@/utils/animations';

const About = () => {
  const { ref, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Our Story</h1>
            
            <div
              ref={ref as React.RefObject<HTMLDivElement>}
              className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="aspect-video bg-gray-100 rounded-lg mb-8"></div>
              
              <div className="prose prose-lg mx-auto">
                <p className="lead">
                  LUXE was founded in 2023 with a mission to redefine modern fashion through innovative design and sustainable practices.
                </p>
                
                <p>
                  Our journey began with a simple idea: to create clothing that empowers individuals to express themselves while respecting our planet. Today, we've grown into a global brand with a passionate community of fashion enthusiasts who share our values.
                </p>
                
                <h2>Our Values</h2>
                
                <ul>
                  <li><strong>Quality Craftsmanship:</strong> We meticulously create each piece to ensure durability and timeless style.</li>
                  <li><strong>Sustainability:</strong> From sourcing materials to production, we prioritize environmentally friendly practices.</li>
                  <li><strong>Inclusive Design:</strong> We create fashion that celebrates diversity and makes everyone feel represented.</li>
                  <li><strong>Innovation:</strong> We continuously explore new technologies and approaches to enhance your fashion experience.</li>
                </ul>
                
                <h2>Our Team</h2>
                
                <p>
                  Behind LUXE is a diverse team of designers, craftspeople, and fashion enthusiasts who share a passion for exceptional clothing. We combine traditional techniques with cutting-edge innovation to create pieces that stand the test of time.
                </p>
                
                <h2>Join Our Journey</h2>
                
                <p>
                  We invite you to be part of our story. Explore our collections, share your feedback, and join us in shaping the future of fashion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
