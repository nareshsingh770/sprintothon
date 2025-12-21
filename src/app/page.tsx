import ScrollAnimation from "../components/ScrollAnimation";
import ContactForm from "../components/ContactForm";

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
            src="/static-sprintothon/images/herobanner.jpg"
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
              <h1 className="text-3xl md:text-7xl font-bold mb-6 text-white">
                STRIDE WITH <span className="text-orange-600">PASSION</span>
              </h1>
              <p className="text-sm md:text-2xl text-gray-200 max-w-3xl mb-10">
                Lorem ipsum dolor sit amet consectetur adipiscing, elit
                vestibulum dictumst enim aliquet, gravida sociosqu turpis in
                habitant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href="/static-sprintothon/register"
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
                  href="#contact"
                  className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:text-black font-semibold hover:bg-white transition-all hover:scale-105 backdrop-blur-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </ScrollAnimation>
          {/* Overlapping Profile Images */}
          <ScrollAnimation direction="up" distance={32}>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 w-[400px] mt-24">
              <div className="flex -space-x-3">
                <img
                  src="/static-sprintothon/images/profiles/profile-1.png"
                  alt="Runner 1"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/static-sprintothon/images/profiles/profile-2.png"
                  alt="Runner 2"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/static-sprintothon/images/profiles/profile-3.png"
                  alt="Runner 3"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="/static-sprintothon/images/profiles/profile-4.png"
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

      {/* About Us Section */}
      <section className="py-20 bg-[rgb(var(--background))]" id="aboutus">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-red-500 font-semibold uppercase">
              ABOUT US
            </p>
            <h2 className="text-5xl font-extrabold mb-2">WHAT WE STAND FOR</h2>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
            <ScrollAnimation
              className="md:col-span-5"
              direction="right"
              distance={170}
            >
              <div>
                <img
                  src="/static-sprintothon/images/banner1.jpg"
                  alt="Team running together"
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />
              </div>
            </ScrollAnimation>
            <div className="md:col-span-7">
              <ScrollAnimation direction="left" distance={170}>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-4">WHO WE ARE</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    habitasse mus, proin feugiat cum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit habitasse mus, proin
                    feugiat cum.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" distance={32}>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Vision Card */}
                  <div className="bg-muted p-8 bg-[rgb(var(--secondary))]">
                    <h3 className="text-3xl font-bold mb-4">VISION</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      habitasse mus, proin feugiat cum.
                    </p>
                  </div>

                  {/* Mission Card */}
                  <div className="bg-muted p-8 bg-[rgb(var(--secondary))]">
                    <h3 className="text-3xl font-bold mb-4">MISSION</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      habitasse mus, proin feugiat cum.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[rgb(var(--background))]">
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
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit,
                  convallis varius sociosqu ullamcorper molestie maecenas.
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
                  Lorem ipsum dolor sit amet consectetur adipiscing elit,
                  convallis varius sociosqu ullamcorper molestie maecenas.
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
                  Lorem ipsum dolor sit amet consectetur adipiscing elit,
                  convallis varius sociosqu ullamcorper molestie maecenas.
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
                  Lorem ipsum dolor sit amet consectetur adipiscing elit,
                  convallis varius sociosqu ullamcorper molestie maecenas.
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
                    Lorem ipsum dolor sit amet consectetur adipiscing, elit
                    primis etiam ad eleifend.
                  </p>

                  {/* Video/Image Container */}
                  <div className="relative rounded-lg overflow-hidden mb-4 flex-grow">
                    <img
                      src="/static-sprintothon/images/banner1.jpg"
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
                        src="/static-sprintothon/images/profiles/profile-1.png"
                        alt="Runner 1"
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      <img
                        src="/static-sprintothon/images/profiles/profile-2.png"
                        alt="Runner 2"
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      <img
                        src="/static-sprintothon/images/profiles/profile-3.png"
                        alt="Runner 3"
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      <img
                        src="/static-sprintothon/images/profiles/profile-4.png"
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
            <div className="ml-auto">
              <a
                href="/portfolio"
                className="inline-block px-5 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
              >
                DISCOVER MORE
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <ScrollAnimation
              className="relative rounded-lg overflow-hidden shadow-lg"
              direction="up"
              distance={32}
            >
              <img
                src="/static-sprintothon/images/portfolio/club-1.jpg"
                alt="Urban Pace Club"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase">
                  URBAN PACE CLUB
                </h3>
                <p className="text-sm text-gray-200 mt-3 max-w-xl">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, lectus
                  praesent nascetur leo nibh class.
                </p>
                <a className="mt-4 inline-flex items-center text-red-400 font-semibold">
                  DISCOVER MORE →
                </a>
              </div>
            </ScrollAnimation>

            {/* Card 2 */}
            <ScrollAnimation
              className="relative rounded-lg overflow-hidden shadow-lg"
              direction="up"
              distance={32}
            >
              <img
                src="/static-sprintothon/images/portfolio/club-2.jpg"
                alt="Marathon Club"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase">
                  MARATHON CLUB
                </h3>
                <p className="text-sm text-gray-200 mt-3 max-w-xl">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, lectus
                  praesent nascetur leo nibh class.
                </p>
                <a className="mt-4 inline-flex items-center text-red-400 font-semibold">
                  DISCOVER MORE →
                </a>
              </div>
            </ScrollAnimation>

            {/* Card 3 */}
            <ScrollAnimation
              className="relative rounded-lg overflow-hidden shadow-lg"
              direction="up"
              distance={32}
            >
              <img
                src="/static-sprintothon/images/portfolio/club-3.jpg"
                alt="Event Prep"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase">
                  EVENT PREP
                </h3>
                <p className="text-sm text-gray-200 mt-3 max-w-xl">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, lectus
                  praesent nascetur leo nibh class.
                </p>
                <a className="mt-4 inline-flex items-center text-red-400 font-semibold">
                  DISCOVER MORE →
                </a>
              </div>
            </ScrollAnimation>

            {/* Card 4 */}
            <ScrollAnimation
              className="relative rounded-lg overflow-hidden shadow-lg"
              direction="up"
              distance={32}
            >
              <img
                src="/static-sprintothon/images/portfolio/club-4.jpg"
                alt="Stamina Boost"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase">
                  STAMINA BOOST
                </h3>
                <p className="text-sm text-gray-200 mt-3 max-w-xl">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, lectus
                  praesent nascetur leo nibh class.
                </p>
                <a className="mt-4 inline-flex items-center text-red-400 font-semibold">
                  DISCOVER MORE →
                </a>
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
            <div>
              <a
                href="/events"
                className="inline-block px-5 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
              >
                DISCOVER MORE
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {eventCategory.map((event, index) => (
              <ScrollAnimation
                key={index}
                className="bg-[rgb(var(--secondary))] rounded-lg shadow-md overflow-hidden grid grid-cols-12 items-center"
                direction="up"
                distance={100}
              >
                <div className="col-span-5 p-8">
                  <h3 className="text-2xl font-extrabold mb-3">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <div className="text-sm text-gray-500 flex items-center gap-4">
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6z" />
                      </svg>{" "}
                      {event.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6 2a1 1 0 00-1 1v14l6-3 6 3V3a1 1 0 00-1-1H6z" />
                      </svg>{" "}
                      {event.time}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6 2a1 1 0 00-1 1v14l6-3 6 3V3a1 1 0 00-1-1H6z" />
                      </svg>{" "}
                      {event.date}
                    </span>
                  </div>
                </div>

                <div className="col-span-2">
                  <img
                    src={event.image}
                    alt={event.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="col-span-5 p-8 flex flex-col items-center">
                  <div className="relative">
                    {event.regularPrice && (
                      <div className="absolute -top-6 -right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                        SAVE{" "}
                        {Math.round(
                          ((event.regularPrice - event.price) /
                            event.regularPrice) *
                            100
                        )}
                        %
                      </div>
                    )}
                    <div className="text-4xl font-extrabold mb-2">
                      ₹{event.price}
                      {event.regularPrice && (
                        <span className="text-lg line-through text-gray-500 font-normal ml-2">
                          ₹{event.regularPrice}
                        </span>
                      )}
                      <span className="text-sm text-gray-500 ml-1">
                        /Ticket
                      </span>
                    </div>
                    {event.regularPrice && (
                      <div className="text-center text-sm text-green-600 dark:text-green-500 font-semibold mt-1">
                        You save ₹{event.regularPrice - event.price}!
                      </div>
                    )}
                  </div>

                  <a
                    href={`/static-sprintothon/register?event=${encodeURIComponent(
                      event.title
                    )}`}
                    className="mt-4 px-6 py-3 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition hover:scale-105"
                  >
                    Buy Ticket
                  </a>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-[rgb(var(--background))]">
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
                  {/* Social Media Overlay */}
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
      </section>
    </main>
  );
}
