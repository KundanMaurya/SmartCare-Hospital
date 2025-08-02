import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}></div>
      </div>

      <div className="relative z-10 container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-6 h-6 text-blue-300" />
              <span className="text-blue-200 font-medium">Trusted Healthcare Since 1995</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Health,
              <span className="text-blue-300"> Our Priority</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Experience world-class healthcare with our team of expert doctors, state-of-the-art facilities, 
              and compassionate care. We're here for you 24/7, providing comprehensive medical services 
              for patients from around the globe.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="btn-primary flex items-center space-x-2">
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
                Emergency Services
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-2">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-200 text-sm">Emergency Care</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-lg mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-blue-200 text-sm">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-lg mx-auto mb-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">25K+</div>
                <div className="text-blue-200 text-sm">Patients Served</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="relative">
            <div className="card p-8 bg-white/95 backdrop-blur">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Appointment</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                    <option>Select Department</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                    <option>General Medicine</option>
                  </select>
                </div>
                <button className="btn-primary w-full">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;