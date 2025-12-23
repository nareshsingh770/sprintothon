import ScrollAnimation from "../components/ScrollAnimation";
import ContactForm from "../components/ContactForm";
import CountdownTimer from "../components/CountdownTimer";

import { eventCategory, facts, services, trainers } from "@/lib/appConstant";
import { Scroll } from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/herobanner.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55 dark:bg-black/55" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-20 text-center z-10">
          <ScrollAnimation direction="down" distance={48}>
            {/* <Logo className="text-5xl md:text-7xl" /> */}
            <div className="mt-6 text-white text-left">
              <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
                INTRODUCING SPRINTOTHON:{" "}
                <span className="text-orange-600">RUN, WALK, UNITE</span>
              </h1>
              <p className="text-sm md:text-xl text-gray-200 max-w-3xl mb-10">
                Achieve the Impossible. Action-oriented, inspiring, and
                community-focused.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href="/register"
                  className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  Get Register
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href="/contact-us"
                  className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:text-black font-semibold hover:bg-white transition-all hover:scale-105 backdrop-blur-sm"
                >
                  Contact Us
                </a>
              </div>

              {/* Event Date Banner */}
              <div className="mt-8 md:mt-12">
                <div className="inline-block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl p-1 shadow-2xl animate-pulse">
                  <div className="bg-black/80 backdrop-blur-sm rounded-xl px-6 py-4 md:px-8 md:py-5">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            className="w-6 h-6 md:w-7 md:h-7 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="text-center md:text-left">
                        <p className="text-white text-xs md:text-sm font-semibold mb-1 tracking-wide">
                          🎉 Noida's 1st Premier Familython for Every Age
                        </p>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                          <span className="text-orange-400 text-base md:text-lg font-black uppercase">
                            Save the Date:
                          </span>
                          <span className="text-white text-lg md:text-xl font-black">
                            29th March, 2026
                          </span>
                        </div>
                        <div className="hidden md:inline-block ml-2 mt-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                          Early Bird tickets are limited- Only the first 50
                          registrations will get huge discounts!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          {/* Overlapping Profile Images */}
          <ScrollAnimation direction="up" distance={32}>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 w-[400px] mt-24">
              <div className="flex -space-x-3">
                <img
                  src="/images/profiles/profile-1.png"
                  alt="Runner 1"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/images/profiles/profile-2.png"
                  alt="Runner 2"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/images/profiles/profile-3.png"
                  alt="Runner 3"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/images/profiles/profile-4.png"
                  alt="Runner 4"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
              </div>
              {/* Text */}
              <div className="text-white">
                <p className="font-semibold text-sm leading-tight">
                  Over 20,000+ Active
                </p>
                <p className="font-semibold text-sm leading-tight">
                  Runners in Kolkata
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Prize Money Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="down" distance={50}>
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="bg-yellow-400 text-gray-900 text-xs md:text-sm font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-lg animate-bounce">
                  🏆 Win Big Prizes
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
                Massive Cash Rewards
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                Compete and win exciting cash prizes in every category!
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Top 5 Winners Card */}
            <ScrollAnimation direction="left" distance={100}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-4 shadow-xl">
                      <svg
                        className="w-10 h-10 md:w-12 md:h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase">
                      Top 1st - 5th
                    </h3>
                    <div className="mb-4">
                      <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
                        ₹50,000
                      </div>
                      <p className="text-gray-600 font-semibold text-sm md:text-base">
                        Each Winner
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4">
                      <p className="text-gray-800 font-bold text-sm md:text-base">
                        From Every Category
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Top 6-10 Winners Card */}
            <ScrollAnimation direction="right" distance={100}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-full p-4 shadow-xl">
                      <svg
                        className="w-10 h-10 md:w-12 md:h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase">
                      Top 6th - 10th
                    </h3>
                    <div className="mb-4">
                      <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
                        ₹25,000
                      </div>
                      <p className="text-gray-600 font-semibold text-sm md:text-base">
                        Each Winner
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4">
                      <p className="text-gray-800 font-bold text-sm md:text-base">
                        From Every Category
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Bottom CTA */}
          <ScrollAnimation direction="up" distance={50}>
            <div className="text-center mt-12">
              <div className="inline-block bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4 border-2 border-white/30">
                <p className="text-white text-lg md:text-xl font-bold mb-2">
                  💰 Total Prize Pool Worth Lakhs!
                </p>
                <p className="text-white/90 text-sm md:text-base">
                  Register now and compete for amazing cash rewards
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Us Section */}
      <section
        className="py-20 bg-[rgb(var(--background))] overflow-hidden"
        id="aboutus"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-red-500 font-semibold uppercase">
              OUR MISSION
            </p>
            <h2 className="text-5xl font-extrabold mb-2">
              BUILD A STRONGER TOMORROW
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
            <ScrollAnimation
              className="md:col-span-5"
              direction="right"
              distance={170}
            >
              <div>
                <img
                  src="/images/banner1.jpg"
                  alt="Team running together"
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />
              </div>
            </ScrollAnimation>
            <div className="md:col-span-7">
              <ScrollAnimation direction="left" distance={170}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4">WHO WE ARE</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Sprintothon is founded on the belief that a strong
                    community is built on shared goals, fitness, and positive
                    initiatives even for an overweight and unfit person to
                    transform them in a fit version of them. We aim to create a
                    platform for togetherness, celebration, and healthy drives,
                    where every participant is encouraged to achieve what seems
                    impossible and unachievable.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We pledge to educate maximum kids along with their parents
                    and drive them towards a healthy life as they are the future
                    of India.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" distance={32}>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Vision Card */}
                  <div className="bg-muted p-5 bg-[rgb(var(--secondary))]">
                    <h3 className="text-2xl font-bold mb-4">VISION</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To create a thriving, inclusive community where fitness,
                      health, and wellness are accessible to everyone,
                      regardless of age or fitness level, transforming lives one
                      stride at a time and inspiring the next generation to
                      embrace an active, healthier lifestyle.
                    </p>
                  </div>

                  {/* Mission Card */}
                  <div className="bg-muted p-5 bg-[rgb(var(--secondary))]">
                    <h3 className="text-2xl font-bold mb-4">MISSION</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To organize inspiring community running events that unite
                      people of all abilities, promote physical wellness, and
                      educate children and families about the transformative
                      power of fitness while celebrating the achievements of
                      every participant, no matter their starting point.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[rgb(var(--background))] overflow-hidden">
        <div className="text-center mb-12">
          <p className="text-sm text-red-500 font-semibold uppercase">
            BUILD A STRONG RUNNING SQUAD
          </p>
          <h2 className="text-5xl font-extrabold mb-2">
            PUSH FURTHER TOGETHER
          </h2>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Side - Feature Cards */}
            <ScrollAnimation
              className="lg:col-span-7 grid md:grid-cols-2 gap-6"
              direction="right"
              distance={100}
            >
              {/* Expert Coach */}
              <div className="bg-[rgb(var(--secondary))] rounded-lg p-8">
                <div className="w-16 h-16 bg-red-500 rounded flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 uppercase tracking-wide">
                  EXPERT COACH
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  Whether you're aiming for a personal best in the 10KM, guiding
                  your child through their first Kidathon, or discovering the
                  benefits of seated movement in the Sitathon, our panel of
                  certified experts is here to support you.
                </p>
              </div>

              {/* Active Team */}
              <div className="bg-[rgb(var(--secondary))] rounded-lg p-8">
                <div className="w-16 h-16 bg-red-500 rounded flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 uppercase tracking-wide">
                  ACTIVE TEAM
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our event is powered by a passionate community of volunteers,
                  medical professionals, and support staff—our Active Team. They
                  are the friendly faces ensuring smooth operations, safety, and
                  encouragement across all four event categories.
                </p>
              </div>

              {/* Smart Program */}
              <div className="bg-[rgb(var(--secondary))] rounded-lg p-8">
                <div className="w-16 h-16 bg-red-500 rounded flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 uppercase tracking-wide">
                  SMART PROGRAM
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our Smart Program is a comprehensive, multi-week preparation
                  guide designed by our Expert Coaches to ensure you arrive at
                  the starting line confident and prepared.
                </p>
              </div>

              {/* Special Event */}
              <div className="bg-[rgb(var(--secondary))] rounded-lg p-8">
                <div className="w-16 h-16 bg-red-500 rounded flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold mb-4 uppercase tracking-wide">
                  SPECIAL EVENT
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond the Finish Line: An electrifying music waits for your
                  moves and steps to rejuvenate your mind, body, feeling, mode,
                  thinking, experience & for a memory for life
                </p>
              </div>
            </ScrollAnimation>
            {/* Right Side - Join Our Journey */}
            <ScrollAnimation
              className="lg:col-span-5"
              direction="left"
              distance={100}
            >
              <div>
                <div className="bg-[rgb(var(--secondary))] rounded-lg p-8 h-full flex flex-col">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase">
                    Join Our Journey
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Join the most inclusive sports event designed for every age,
                    every ability, and every health goal.
                  </p>

                  {/* Video/Image Container */}
                  <div className="relative rounded-lg overflow-hidden mb-4 flex-grow">
                    <img
                      src="/images/banner1.jpg"
                      alt="Running team"
                      className="w-full h-full object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <button className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Avatars + Stats */}
                  <div className="mt-6 bg-[rgb(var(--background))] p-4 rounded-lg flex items-center gap-4 shadow-sm border border-gray-100">
                    <div className="flex -space-x-3">
                      <img
                        src="/images/profiles/profile-1.png"
                        alt="Runner 1"
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      <img
                        src="/images/profiles/profile-2.png"
                        alt="Runner 2"
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      <img
                        src="/images/profiles/profile-3.png"
                        alt="Runner 3"
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      <img
                        src="/images/profiles/profile-4.png"
                        alt="Runner 4"
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        Over 20,000+ Active
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Runners Kolkata
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services / Clubs Section */}
      <section className="py-20 bg-stone-800">
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between mb-8 gap-4">
            <div>
              <p className="text-sm text-red-500 font-semibold uppercase">
                BUILD
              </p>
              <h2 className="text-5xl font-extrabold mb-2 text-white">
                POWER EVERY DAY
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Urban Pace Club */}
            <ScrollAnimation
              className="relative rounded-lg overflow-hidden shadow-lg"
              direction="up"
              distance={32}
            >
              <img
                src="/section-1.jpg"
                alt="Urban Pace Club"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase">
                  URBAN PACE CLUB
                </h3>
                <p className="text-sm text-gray-200 mt-3 max-w-xl">
                  Join a vibrant community of city runners and walkers who
                  believe in the power of movement, camaraderie, and urban
                  exploration. Whether you're training for your first 5K or just
                  want to enjoy a healthy lifestyle, this club welcomes all
                  paces and backgrounds. Experience group runs, city adventures,
                  and a supportive squad that motivates you to keep moving
                  forward.
                </p>
                {/* <a className="mt-4 inline-flex items-center text-red-400 font-semibold">
                  DISCOVER MORE →
                </a> */}
              </div>
            </ScrollAnimation>

            {/* Card 2: Marathon Club */}
            <ScrollAnimation
              className="relative rounded-lg overflow-hidden shadow-lg"
              direction="up"
              distance={32}
            >
              <img
                src="/section-2.jpg"
                alt="Marathon Club"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase">
                  MARATHON CLUB
                </h3>
                <p className="text-sm text-gray-200 mt-3 max-w-xl">
                  For those who dream big and run far! The Marathon Club is
                  dedicated to helping you conquer longer distances, improve
                  your endurance, and celebrate every milestone. With expert-led
                  training plans, group long runs, and motivational meetups,
                  you'll be prepared for your next 10K, half marathon, or full
                  marathon—no matter your starting point.
                </p>
                {/* <a className="mt-4 inline-flex items-center text-red-400 font-semibold">
                  DISCOVER MORE →
                </a> */}
              </div>
            </ScrollAnimation>

            {/* Card 3: Event Prep */}
            <ScrollAnimation
              className="relative rounded-lg overflow-hidden shadow-lg"
              direction="up"
              distance={32}
            >
              <img
                src="/section-3.jpg"
                alt="Event Prep"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase">
                  EVENT PREP
                </h3>
                <p className="text-sm text-gray-200 mt-3 max-w-xl">
                  Get race-day ready with our Event Prep club! From nutrition
                  tips and pacing strategies to warm-up routines and mental
                  preparation, we provide everything you need to perform your
                  best. Perfect for first-timers and seasoned participants
                  alike, this club ensures you step onto the course with
                  confidence and excitement.
                </p>
                {/* <a className="mt-4 inline-flex items-center text-red-400 font-semibold">
                  DISCOVER MORE →
                </a> */}
              </div>
            </ScrollAnimation>

            {/* Card 4: Stamina Boost */}
            <ScrollAnimation
              className="relative rounded-lg overflow-hidden shadow-lg"
              direction="up"
              distance={32}
            >
              <img
                src="/section-4.jpg"
                alt="Stamina Boost"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase">
                  STAMINA BOOST
                </h3>
                <p className="text-sm text-gray-200 mt-3 max-w-xl">
                  Unlock your full potential with Stamina Boost! This club
                  focuses on building endurance, strength, and resilience
                  through fun group workouts, interval training, and expert
                  guidance. Ideal for anyone looking to push their limits,
                  recover stronger, and enjoy a healthier, more energetic
                  lifestyle—together as a team.
                </p>
                {/* <a className="mt-4 inline-flex items-center text-red-400 font-semibold">
                  DISCOVER MORE →
                </a> */}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Events / Upcoming Races Section */}
      <section className="py-20 bg-[rgb(var(--background))]" id="events">
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-sm text-red-500 font-semibold uppercase">
                Event
              </p>
              <h2 className="text-5xl font-extrabold mb-2">
                RACE FOR THE MOMENT
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {eventCategory.map((event, index) => (
              <ScrollAnimation
                key={index}
                className="bg-[rgb(var(--secondary))] rounded-lg shadow-md"
                direction="up"
                distance={100}
              >
                <div className="flex flex-col md:grid md:grid-cols-12 md:items-center">
                  {/* Event Details */}
                  <div className="col-span-12 md:col-span-4 p-4 md:p-8">
                    <h3 className="text-xl md:text-2xl font-extrabold mb-2 md:mb-3">
                      {event.title}{" "}
                      <span className="text-[0.75rem] text-gray-500 font-medium">
                        ({event.age_group})
                      </span>
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                      {event.description}
                    </p>
                    <div className="text-xs md:text-sm text-gray-500 flex flex-wrap items-center gap-2 md:gap-4">
                      <span className="inline-flex items-center gap-1 md:gap-2">
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6z" />
                        </svg>{" "}
                        {event.location}
                      </span>
                      <span className="inline-flex items-center gap-1 md:gap-2">
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6 2a1 1 0 00-1 1v14l6-3 6 3V3a1 1 0 00-1-1H6z" />
                        </svg>{" "}
                        {event.time}
                      </span>
                      <span className="inline-flex items-center gap-1 md:gap-2">
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6 2a1 1 0 00-1 1v14l6-3 6 3V3a1 1 0 00-1-1H6z" />
                        </svg>{" "}
                        {event.date}
                      </span>
                    </div>
                  </div>

                  {/* Event Image - Hidden on mobile */}
                  <div className="hidden md:block md:col-span-3">
                    <img
                      src={event.image}
                      alt={event.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Pricing Section */}
                  <div className="col-span-12 md:col-span-5 p-2 flex flex-col items-center justify-center">
                    <div className="relative w-full md:max-w-xs">
                      {/* Discount Badge */}
                      {event.regularPrice && (
                        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-10">
                          <div className="relative animate-bounce">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-sm opacity-60"></div>
                            <div className="relative bg-gradient-to-br from-orange-500 to-red-600 text-white text-[0.6rem] md:text-[0.65rem] font-black px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg">
                              {Math.round(
                                ((event.regularPrice - event.price) /
                                  event.regularPrice) *
                                  100
                              )}
                              % OFF
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Pricing Card */}
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-lg md:rounded-xl p-3 md:p-4 shadow-lg border-2 border-orange-200 dark:border-orange-900">
                        {/* Price Section */}
                        <div className="text-center mb-2 md:mb-3">
                          <div className="flex items-baseline justify-center gap-1.5 md:gap-2">
                            <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                              ₹{event.price}
                            </span>
                            {event.regularPrice && (
                              <span className="text-sm md:text-base line-through text-gray-400 font-medium">
                                ₹{event.regularPrice}
                              </span>
                            )}
                          </div>
                          {event.regularPrice && (
                            <div className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-[0.6rem] md:text-[0.65rem] font-bold px-2 py-0.5 rounded-full mt-1">
                              <span>💰</span>
                              <span>
                                Save ₹{event.regularPrice - event.price}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Countdown Timer */}
                        <CountdownTimer />

                        {/* CTA Button */}
                        <a
                          href={`/register?event=${encodeURIComponent(
                            event.title
                          )}`}
                          className="w-full mt-2 md:mt-3 block text-center px-3 md:px-4 py-3 md:py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-bold hover:from-red-700 hover:to-orange-700 transition-all hover:scale-105 hover:shadow-lg transform uppercase text-[0.65rem] md:text-xs tracking-wide"
                        >
                          🎟️ Buy Ticket Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      {/* <section className="py-20 bg-[rgb(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-red-500 font-semibold uppercase mb-2">
              Trainers
            </p>
            <h2 className="text-5xl font-extrabold">TRAIN WITH PASSION</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <ScrollAnimation
                key={index}
                className="group relative"
                direction="up"
                distance={100}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-extrabold">{trainer.name}</h3>
                  <p className="text-muted-foreground">{trainer.role}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
