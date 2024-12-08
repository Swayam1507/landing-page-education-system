import React from 'react';
import { Play } from 'lucide-react';
import { scrollToTargetAdjusted } from '/src/Helper'

export function Videos() {
  const scrollToContact = () => {
    // document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    scrollToTargetAdjusted('contact')
  };

  return (
    <section id="videos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See SmartEdu in Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch how SmartEdu transforms the way you manage your educational institution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/75fFhNFBEsk"
                title="Product Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Walkthrough</h3>
              <p className="text-gray-600">
                Take a detailed tour of SmartEdu's features and see how easy it is to use our platform.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/4tj9kgsbBpE"
                title="SmartEdu for Tuition Classes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transform Your Tuition Classes</h3>
              <p className="text-gray-600">
                Discover how SmartEdu solves common challenges in managing tuition classes efficiently.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center mx-auto"
            onClick={scrollToContact}
          >
            <Play className="h-5 w-5 mr-2" />
            Schedule a Live Demo
          </button>
        </div>
      </div>
    </section>
  );
}