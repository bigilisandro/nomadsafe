"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setIsSubmitted(true);
  };

  const faqs = [
    {
      question: "Is it medical or travel insurance?",
      answer: "No, it's specifically for electronic device theft or robbery.",
    },
    {
      question: "Can I unsubscribe at any time?",
      answer: "Yes, it's 100% flexible. You can cancel anytime.",
    },
    {
      question: "Is it valid for travel to several countries?",
      answer: "Yes, global coverage. We're not restricted to a specific country.",
    },
    {
      question: "Do I have to keep invoices for my devices?",
      answer: "Yes, for verification. We'll ask you to provide the invoice or a receipt of the purchase.",
    },
    {
      question: "What does the insurance not cover?",
      answer: "Damage, wear, commercial theft, etc. Please check the full list of exclusions in our terms and conditions. ",
    },
    {
      question: "How do I report a theft?",
      answer: "Following our claim process and police report.",
    },
  ];

  return (
    <>
      <Head>
        <title>NomadSafe - Theft Insurance for Digital Nomads | Protect Your Devices Worldwide</title>
        <meta name="description" content="Protect your electronic devices from theft and robbery anywhere in the world. Specialized insurance for digital nomads, remote workers, and travelers." />
        <meta name="keywords" content="digital nomad insurance, device theft insurance, laptop insurance, camera insurance, travel insurance, electronic device protection" />
        <link rel="canonical" href="https://nomadsafe.com" />
      </Head>
      
      <div className="min-h-screen text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
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
          <h1 className="text-7xl font-black-ops-one mb-6 leading-tight">
            Theft insurance for nomads
          </h1>
          <p className="text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Protect your electronic devices from theft and robbery anywhere in
            the world.
          </p>
          <Link
            href="#plans"
            className="inline-flex items-center bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get early access
            <svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
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
      </header>

      {/* Protect What Matters Section */}
      <section className="py-16 sm:py-20 lg:py-30 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-black-ops-one">
                Protect what matters most on your travels
              </h2>
              <p className="text-lg sm:text-xl text-gray-300">
                Your devices can disappear in seconds. With NomadSafe, they are
                recovered without complications.
              </p>
            </div>
            <div className="relative order-1 lg:order-2 overflow-x-auto">
              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex-shrink-0 w-72 sm:w-80 bg-white text-black p-4 sm:p-6 py-8 sm:py-12 rounded-lg grid">
                  <Image
                    src="/security.svg"
                    width={48}
                    height={48}
                    alt="Security icon"
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-center">
                    Specific against theft and robbery
                  </h3>
                </div>
                <div className="flex-shrink-0 w-72 sm:w-80 bg-white text-black p-4 sm:p-6 py-8 sm:py-12 rounded-lg grid">
                  <Image
                    src="/computer.svg"
                    width={48}
                    height={48}
                    alt="Computer icon"
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-center">
                    Covers all your electronic devices
                  </h3>
                </div>
                <div className="flex-shrink-0 w-72 sm:w-80 bg-white text-black p-4 sm:p-6 py-8 sm:py-12 rounded-lg grid">
                  <Image
                    src="/security.svg"
                    width={48}
                    height={48}
                    alt="Security icon"
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-center">
                    For digital nomads, remote workers and travelers
                  </h3>
                </div>
              </div>
              {/* Navigation arrows - hidden on mobile */}
              <button
                className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
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
                className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
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
      <section id="how-it-works" className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20 lg:mb-30">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-black-ops-one">
              How does it work?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              We want your coverage to be as simple as your nomadic lifestyle.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 sm:space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/plane.jpg"
                    width={250}
                    height={250}
                    alt="Choose your protection plan"
                    className="rounded-full border-2 border-white box-shadow-lg w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 font-black-ops-one">
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
              <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/step-2.jpg"
                    width={250}
                    height={250}
                    alt="Travel with coverage"
                    className="rounded-full border-2 border-white box-shadow-lg w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 font-black-ops-one">
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
              <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/step-3.jpg"
                    width={250}
                    height={250}
                    alt="Report and get refund"
                    className="rounded-full border-2 border-white box-shadow-lg w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 font-black-ops-one">
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
      <section id="what-it-covers" className="py-16 sm:py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-black-ops-one">
              What does it cover?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              All your electronic devices are covered anywhere in the world.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mb-12">
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
                className="bg-black text-white p-4 sm:p-6 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 text-center border border-gray-800"
              >
                <div className="text-3xl sm:text-4xl mb-2">{device.icon}</div>
                <div className="text-xs sm:text-sm font-medium">{device.name}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="#plans"
              className="inline-flex items-center bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              See available plans
              <svg
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
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
        className="h-64 sm:h-80 md:h-96 lg:h-140 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1652553264186-c0da6dbca798?w=1920&h=600&fit=crop')",
        }}
      />

      {/* Available Plans Section */}
      <section id="plans" className="py-16 sm:py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-black-ops-one">
              Available Plans
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your plan to travel without worries and the possibility to
              cancel whenever you want.
            </p>
          </div>

          {/* Blurred pricing plans */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto filter blur-sm pointer-events-none">
            {/* Basic Plan */}
            <div className="bg-white text-black p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Basic Plan</h3>
              <div className="text-3xl sm:text-4xl font-bold mb-6 font-black-ops-one">
                $19/mo
              </div>
              <ul className="space-y-3 mb-8 text-sm sm:text-base">
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
            <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Premium Plan</h3>
              <div className="text-3xl sm:text-4xl font-bold mb-6 font-black-ops-one">
                $29/mo
              </div>
              <ul className="space-y-3 mb-8 text-sm sm:text-base">
                <li>• Max value per object $1,000</li>
                <li>• Min deductible $25</li>
                <li>• Max coverage $5,000/year</li>
                <li>• Direct refund</li>
              </ul>
              <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Choose this plan
              </button>
            </div>

            {/* Custom Plan */}
            <div className="bg-white text-black p-6 sm:p-8 rounded-lg sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Teams</h3>
              <div className="text-3xl sm:text-4xl font-bold mb-6 font-black-ops-one">
                Custom
              </div>
              <ul className="space-y-3 mb-8 text-sm sm:text-base">
                <li>• Cover your team members&apos; devices</li>
                <li>• Min deductible $50</li>
                <li>• Max coverage $2,500/year</li>
                <li>• Direct refund</li>
              </ul>
              <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Book a call
              </button>
            </div>
          </div>

          {/* Waitlist Form Overlay */}
          <div className="absolute inset-0 flex items-center justify-center top-32 sm:top-40">
            <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-full mx-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 font-black-ops-one">
                  Join the Waitlist
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Be the first to know when we launch
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="text-center">
                  <div className="text-green-600 text-5xl sm:text-6xl mb-4">✓</div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">You&apos;re on the list!</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We&apos;ll notify you as soon as our plans are available.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Join Waitlist
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-black-ops-one">
            NomadSafe is unique in being specifically dedicated to covering
            electronic thefts, unlike other insurances that only offer it as a
            complement. Not a travel or medical insurance. Not a add-on. Just security for your electronic devices.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 lg:py-30 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-black-ops-one">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                Your doubts, resolved before you think of them.
              </p>
              <Link
                href="#plans"
                className="inline-flex items-center bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get early access
                <svg
                  className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
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

            <div className="space-y-4 order-1 lg:order-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-800 pb-4">
                  <button
                    className="w-full text-left flex justify-between cursor-pointer items-start py-2"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-medium text-sm sm:text-base pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform flex-shrink-0 ${
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
                    <p className="text-gray-300 mt-2 text-sm sm:text-base">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
