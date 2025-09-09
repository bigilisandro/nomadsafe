"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [activeCard, setActiveCard] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is it medical or travel insurance?",
      answer: "No, it's specifically for electronic device theft.",
    },
    {
      question: "Can I unsubscribe at any time?",
      answer: "Yes, it's 100% flexible.",
    },
    {
      question: "Is it valid for travel to several countries?",
      answer: "Yes, global coverage.",
    },
    {
      question: "Do I have to keep invoices for my devices?",
      answer: "Yes, for verification.",
    },
    {
      question: "What does the insurance not cover?",
      answer: "Damage, wear, commercial theft, etc.",
    },
    {
      question: "How do I report a theft?",
      answer: "Simple online form and police report.",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/hero.gif)",
            filter: "blur(1px)",
            opacity: 0.5,
            zIndex: 1,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black-ops-one mb-6 leading-tight">
            Theft insurance for digital nomads
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Protect your electronic devices from theft and robbery anywhere in
            the world.
          </p>
          <Link
            href="#plans"
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            See available plans
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Protect What Matters Section */}
      <section className="py-30 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-black-ops-one">
                Protect what matters most on your travels
              </h2>
              <p className="text-xl text-gray-300">
                Your devices can disappear in seconds. With NomadSafe, they are
                recovered without complications.
              </p>
            </div>
            <div className="relative">
              <div className="flex space-x-4 overflow-x-auto pb-4">
                <div className="flex-shrink-0 w-80 bg-white text-black p-6 py-12 rounded-lg grid">
                  <Image
                    src="/security.svg"
                    width={48}
                    height={48}
                    alt="Laptop icon"
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-center">
                    Specific against theft and robbery
                  </h3>
                </div>
                <div className="flex-shrink-0 w-80 bg-white text-black p-6 py-12 rounded-lg grid">
                  <Image
                    src="/computer.svg"
                    width={48}
                    height={48}
                    alt="Laptop icon"
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-center">
                    Specific against theft and robbery
                  </h3>
                </div>
                <div className="flex-shrink-0 w-80 bg-white text-black p-6 py-12 rounded-lg grid">
                  <Image
                    src="/security.svg"
                    width={48}
                    height={48}
                    alt="Laptop icon"
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-center">
                    Specific against theft and robbery
                  </h3>
                </div>
              </div>
              {/* Navigation arrows */}
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                onClick={() => setActiveCard((prev) => (prev === 0 ? 1 : 0))}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                onClick={() => setActiveCard((prev) => (prev === 0 ? 1 : 0))}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-black-ops-one">
              How does it work?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We want your coverage to be as simple as your nomadic lifestyle.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex items-center space-x-8">
                <Image
                  src="/plane.jpg"
                  width={300}
                  height={300}
                  alt="Choose your protection plan"
                  className="rounded-full border-2 border-white box-shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 font-black-ops-one">
                    Choose your protection plan
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Select the plan that best fits your needs, register online
                    and activate your coverage in minutes.
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">
                    More information →
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center space-x-8">
                <Image
                  src="/step-2.jpg"
                  width={300}
                  height={300}
                  alt="Choose your protection plan"
                  className="rounded-full border-2 border-white box-shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 font-black-ops-one">
                    Travel calmly with your active coverage
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Enjoy your travels knowing that your devices are protected
                    anywhere in the world. Modify your plan whenever you want.
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">
                    More information →
                  </button>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center space-x-8">
                <Image
                  src="/step-3.jpg"
                  width={300}
                  height={300}
                  alt="Choose your protection plan"
                  className="rounded-full border-2 border-white box-shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 font-black-ops-one">
                    Report and receive your refund
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Simple online process to report the theft and receive your
                    refund directly to your bank account.
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">
                    More information →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Covers Section */}
      <section id="what-it-covers" className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-black-ops-one">
              What does it cover?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All your electronic devices are covered anywhere in the world.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
            {[
              { name: "Laptop", icon: "💻" },
              { name: "Camera", icon: "📷" },
              { name: "Lenses", icon: "🔍" },
              { name: "Smartphone", icon: "📱" },
              { name: "E-readers", icon: "📚" },
              { name: "Headphones", icon: "🎧" },
              { name: "Music Player", icon: "🎵" },
              { name: "Tablet", icon: "📱" },
              { name: "Drone", icon: "🚁" },
              { name: "VR", icon: "🎮" },
            ].map((device, index) => (
              <div
                key={index}
                className="bg-black text-white p-6 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 text-center border border-gray-800"
              >
                <div className="text-4xl mb-2">{device.icon}</div>
                <div className="text-sm font-medium">{device.name}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="#plans"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              See available plans
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Full Width Image */}
      <section
        className="h-140 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1652553264186-c0da6dbca798?w=1920&h=600&fit=crop')",
        }}
      />

      {/* Available Plans Section */}
      <section id="plans" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-black-ops-one">
              Available Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your plan to travel without worries and the possibility to
              cancel whenever you want.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
              <div className="text-4xl font-bold mb-6 font-black-ops-one">
                $19/mo
              </div>
              <ul className="space-y-3 mb-8">
                <li>• Max value per object $500</li>
                <li>• Min deductible $50</li>
                <li>• Max coverage $2,500/year</li>
                <li>• Direct refund</li>
              </ul>
              <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Choose this plan
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white text-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
              <div className="text-4xl font-bold mb-6 font-black-ops-one">
                $29/mo
              </div>
              <ul className="space-y-3 mb-8">
                <li>• Max value per object $1,000</li>
                <li>• Min deductible $25</li>
                <li>• Max coverage $5,000/year</li>
                <li>• Direct refund</li>
              </ul>
              <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Choose this plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-2xl text-gray-300 font-black-ops-one">
            NomadSafe is unique in being specifically dedicated to covering
            electronic thefts, unlike other insurances that only offer it as a
            complement. Not a travel or medical insurance. Not a add-on. Just security for your electronic devices.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-30 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-black-ops-one">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Your doubts, resolved before you think of them.
              </p>
              <Link
                href="#plans"
                className="inline-flex items-center bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get my plan
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-800 pb-4">
                  <button
                    className="w-full text-left flex justify-between items-center py-2"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <p className="text-gray-300 mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
