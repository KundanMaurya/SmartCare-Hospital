import React from 'react';
import { Clock, Users, Globe, Heart, Shield, Award } from 'lucide-react';

const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: '24x7 Emergency',
      description: 'Round-the-clock emergency services with fully equipped trauma center and ambulance services.',
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700'
    },
    {
      icon: Users,
      title: 'Expert Doctors',
      description: 'World-class medical professionals with years of experience and specialized training.',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      icon: Globe,
      title: 'International Patients',
      description: 'Comprehensive support for international patients including visa assistance and translation services.',
      color: 'bg-teal-600',
      hoverColor: 'hover:bg-teal-700'
    },
    {
      icon: Heart,
      title: 'Specialized Care',
      description: 'Advanced treatment options across multiple specialties with personalized care plans.',
      color: 'bg-pink-600',
      hoverColor: 'hover:bg-pink-700'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Maintaining highest safety standards with advanced infection control and patient safety protocols.',
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    },
    {
      icon: Award,
      title: 'Accredited Excellence',
      description: 'Internationally accredited hospital with recognition for quality healthcare and patient satisfaction.',
      color: 'bg-orange-600',
      hoverColor: 'hover:bg-orange-700'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose SmartCare?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive healthcare services with a commitment to excellence, 
            innovation, and compassionate care for every patient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="card p-8 group cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} ${feature.hoverColor} rounded-xl mb-6 transition-all duration-300 group-hover:scale-110`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6">
                  <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                    Learn More →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Need Immediate Medical Attention?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Our emergency department is always ready to serve you with immediate care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Call Emergency: +1 (555) 123-4567
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Find Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;