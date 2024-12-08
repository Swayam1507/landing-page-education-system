import React from "react";
import { Check } from "lucide-react";
import { scrollToTargetAdjusted } from "/src/Helper";

const features = [
  "Dashboard",
  "Standards & Subjects",
  "Students Management",
  "Exams, Attendance, and Results",
  "Fees & Online Payment",
  "Email Automation",
  "Report Generation",
  "Hosting & Domain",
];

const plans = [
  {
    name: "Monthly Plan",
    price: "$15",
    period: "month",
    features: features,
    savings: "",
  },
  {
    name: "Yearly Plan",
    price: "$150",
    period: "year",
    features: features,
    popular: true,
    savings: "Save $30!",
  },
];

export function Pricing() {
  const scrollToContact = () => {
    // document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    scrollToTargetAdjusted("contact");
  };

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get access to all modules and features with our simple pricing plans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.popular
                  ? "border-2 border-blue-500 shadow-xl bg-white hover:shadow-2xl"
                  : "border border-gray-200 shadow-lg bg-white hover:shadow-xl"
              } p-8 transition-all duration-300`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                  Best Value
                </span>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <span
                  className={`inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium ${
                    plan.savings ? "" : "invisible"
                  }`}
                >
                  {plan.savings}
                </span>
              </div>
              <div className="border-t border-b border-gray-100 py-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Includes:</h4>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Custom Solutions Available!
            </h3>
            <p className="text-gray-600 mb-6">
              Need specific modules or features? We can create a custom plan
              tailored to your institution's needs.
            </p>
            <button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
              onClick={scrollToContact}
            >
              Contact for Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
