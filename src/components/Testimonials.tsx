import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'The care I received at SmartCare was exceptional. The medical team was professional, compassionate, and made me feel comfortable throughout my treatment.',
      rating: 5,
      treatment: 'Cardiac Surgery'
    },
    {
      name: 'Michael Chen',
      role: 'International Patient',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'As an international patient, I was worried about the process. SmartCare made everything seamless from visa assistance to post-treatment care.',
      rating: 5,
      treatment: 'Orthopedic Surgery'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient Family',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'When my father needed emergency care, SmartCare was there 24/7. The emergency team saved his life, and we will be forever grateful.',
      rating: 5,
      treatment: 'Emergency Care'
    },
    {
      name: 'Dr. James Wilson',
      role: 'Referring Physician',
      image: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      content: 'I regularly refer my patients to SmartCare because of their excellent medical standards and patient-centered approach to healthcare.',
      rating: 5,
      treatment: 'Specialist Referral'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real patients who experienced exceptional care at SmartCare Hospital.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="card p-12 text-center relative overflow-hidden">
            <div className="absolute top-6 left-6 text-blue-200">
              <Quote className="w-12 h-12" />
            </div>

            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-blue-100">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 mb-2">{testimonials[currentIndex].role}</p>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonials[currentIndex].treatment}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Patient Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">25,000+</div>
            <div className="text-gray-600">Patients Treated</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Doctors</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600">Specialties</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;