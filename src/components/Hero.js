import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration, ease: "easeOut" }
});

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <HeroContent />;
  }
  
  return (
    <motion.div {...fadeUpPreset(0.1, 0.8)}>
      <HeroContent />
    </motion.div>
  );
}

function HeroContent() {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-400 rounded-full opacity-60 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-400 rounded-full opacity-60 translate-x-20 translate-y-20"></div>
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-purple-300 rounded-full opacity-40 -translate-x-12"></div>
        <div className="absolute top-1/4 right-0 w-28 h-28 bg-purple-300 rounded-full opacity-40 translate-x-14"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center text-center">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-purple-600 mb-4 leading-tight">
            ДЛЯ ВЧИТЕЛІВ
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700 mb-8">
            ЯКІ ЦІНУЮТЬ СВІЙ ЧАС
          </p>
        </div>
        
        {/* Yellow banner */}
        <div className="bg-yellow-300 rounded-2xl px-8 py-6 mb-12 max-w-4xl w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-purple-800 mb-2">
            ГОТОВІ УРОКИ
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-purple-800 mb-4">
            ЕЛЕКТРОННІ ПІДРУЧНИКИ
          </h2>
          <p className="text-lg md:text-xl text-purple-700 font-semibold">
            згідно з програмою МОН України
          </p>
        </div>
        
        {/* Laptop mockup */}
        <div className="relative mb-12 laptop-shadow">
          <div className="bg-gray-800 rounded-t-2xl p-2">
            <div className="bg-white rounded-xl overflow-hidden" style={{ width: '800px', height: '500px', maxWidth: '90vw', maxHeight: '60vw' }}>
              {/* Browser header */}
              <div className="bg-gray-100 px-4 py-2 border-b flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 ml-4">
                  wow.svs.com.ua
                </div>
                <div className="text-sm text-gray-600">
                  info@svs.com.ua 044-5
                </div>
              </div>
              
              {/* Website content */}
              <div className="p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                    <span className="font-bold text-purple-600">WOW уроки</span>
                  </div>
                  <nav className="hidden md:flex gap-6 text-sm">
                    <span>Про нас</span>
                    <span>WOW уроки</span>
                    <span>Книги</span>
                  </nav>
                </div>
                
                {/* Grade selection */}
                <div className="flex justify-center gap-2 mb-6 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((grade) => (
                    <div key={grade} className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg mb-1 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{grade}</span>
                      </div>
                      <span className="text-xs">{grade} клас</span>
                    </div>
                  ))}
                </div>
                
                {/* Content area */}
                <div className="flex gap-4">
                  {/* Sidebar */}
                  <div className="w-1/4">
                    <h3 className="font-semibold mb-2">Готові підручники</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-3 h-3" />
                        <span>Готові підручники (2)</span>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold mt-4 mb-2">Клас</h3>
                    <div className="space-y-1 text-sm">
                      {[
                        { grade: '0 клас', count: '(0)' },
                        { grade: '1 клас', count: '(522)', checked: true },
                        { grade: '2 клас', count: '(394)' },
                        { grade: '3 клас', count: '(402)' },
                        { grade: '4 клас', count: '(443)' },
                        { grade: '5 клас', count: '(397)' },
                        { grade: '6 клас', count: '(417)' },
                        { grade: '7 клас', count: '(446)' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <input type="checkbox" className="w-3 h-3" checked={item.checked} readOnly />
                          <span className={item.checked ? 'text-blue-600' : ''}>{item.grade} {item.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="flex-1">
                    <div className="flex justify-end mb-4">
                      <button className="text-sm bg-gray-200 px-3 py-1 rounded">
                        Сортувати за ціною
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { title: 'Освітньо-електронний ресурс з Мистецтва 1 клас', price: '240 грн.' },
                        { title: 'Освітньо-електронний ресурс з української мови та читання 1 клас', price: '92 грн.' },
                        { title: 'Підготовка та удосконалення викладання логічного мислення математики', price: '' }
                      ].map((item, index) => (
                        <div key={index} className="border rounded-lg p-3">
                          <div className="w-full h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded mb-2 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">BOOK</span>
                          </div>
                          <h4 className="text-xs font-semibold mb-2 line-clamp-2">{item.title}</h4>
                          {item.price && (
                            <p className="text-sm font-bold text-purple-600">{item.price}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 h-4 rounded-b-2xl"></div>
        </div>
        
        {/* CTA Button */}
        <div className="bg-yellow-300 rounded-2xl px-8 py-4">
          <button className="flex items-center gap-2 text-2xl md:text-3xl font-black text-purple-800 hover:text-purple-900 transition-colors">
            Ознайомтесь за посиланням
            <ExternalLink className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;