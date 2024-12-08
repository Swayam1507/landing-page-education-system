import React from 'react';
import { Calendar, ClipboardList, GraduationCap, LineChart, Users, Wallet } from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'Fee Management',
    description: 'Streamline fee collection, generate invoices, and track payments effortlessly.'
  },
  {
    icon: Calendar,
    title: 'Attendance Tracking',
    description: 'Monitor student and staff attendance with automated reports and notifications.'
  },
  {
    icon: ClipboardList,
    title: 'Exam Management',
    description: 'Create and manage exams, generate report cards, and analyze performance.'
  },
  {
    icon: LineChart,
    title: 'Analytics & Reports',
    description: 'Get detailed insights with customizable reports and data visualization.'
  },
  {
    icon: Users,
    title: 'Parent Portal',
    description: 'Keep parents informed with real-time updates on attendance, grades, and events.'
  },
  {
    icon: GraduationCap,
    title: 'Learning Management',
    description: 'Facilitate online learning with integrated tools and resources.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Features for Modern Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our smart school management system offers everything you need to run your educational institution efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}