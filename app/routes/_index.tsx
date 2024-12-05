import type { MetaFunction } from "@remix-run/node";
import React from 'react';
import { Mail, Instagram, Heart, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Alert, AlertDescription } from '~/components/ui/alert';

export const meta: MetaFunction = () => {
  return [
    { title: "Spay It Forward - Supporting Animal Welfare in Wayne County" },
    { name: "description", content: "Helping stop feline overpopulation through community support and action in Wayne County." },
  ];
};

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-stone-900 text-stone-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-serif italic">Spay It Forward</h1>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-12">
                <a href="#about" className="hover:text-stone-400 font-serif">About</a>
                <a href="#services" className="hover:text-stone-400 font-serif">Services</a>
                <a href="#impact" className="hover:text-stone-400 font-serif">Our Impact</a>
                <a href="#contact" className="hover:text-stone-400 font-serif">Contact</a>
              </div>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 hover:bg-stone-800 font-serif">About</a>
              <a href="#services" className="block px-3 py-2 hover:bg-stone-800 font-serif">Services</a>
              <a href="#impact" className="block px-3 py-2 hover:bg-stone-800 font-serif">Our Impact</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-stone-800 font-serif">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-stone-200 py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-6 text-stone-800">Supporting Animal Welfare in Wayne County</h2>
          <p className="text-xl mb-12 font-serif text-stone-600">Helping stop feline overpopulation through community support and action</p>
          <div className="flex justify-center space-x-6">
            <button className="bg-stone-900 text-stone-200 px-8 py-4 font-serif hover:bg-stone-800">
              Donate Now
            </button>
            <button className="border-2 border-stone-900 px-8 py-4 font-serif text-stone-900 hover:bg-stone-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif italic mb-16 text-center text-stone-800">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <iframe 
                src="/images/placeholder.html" 
                title="Sonni the Cat"
                className="w-full h-[400px] rounded-lg border-0"
              />
            </div>
            <div>
              <h3 className="text-3xl font-serif mb-6 text-stone-800">From Sonni&apos;s Pet Pantry to Spay It Forward</h3>
              <p className="text-stone-600 mb-6 text-lg leading-relaxed">
                Founded by Bentley in honor of his beloved cat, Sonni, we&apos;ve evolved from Sonni&apos;s Pet Pantry into Spay It Forward, 
                focusing on making a lasting impact on feline overpopulation in Wayne County.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Through donations, supplies, and spay/neuter certificates, we support local rescue groups and individuals 
                in their mission to help community cats. Our work includes TNR (trap/neuter/release) initiatives and fostering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif italic mb-16 text-center text-stone-800">How We Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-stone-200">
              <CardHeader>
                <CardTitle className="flex items-center font-serif text-2xl text-stone-800">
                  <Heart className="mr-3 text-stone-600" />
                  Support Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Providing financial assistance and supplies to local rescue groups and individuals
                  dedicated to helping community cats.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200">
              <CardHeader>
                <CardTitle className="flex items-center font-serif text-2xl text-stone-800">
                  <Calendar className="mr-3 text-stone-600" />
                  TNR Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Coordinating and conducting Trap-Neuter-Return operations throughout Wayne County
                  to humanely manage feral cat populations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200">
              <CardHeader>
                <CardTitle className="flex items-center font-serif text-2xl text-stone-800">
                  <Users className="mr-3 text-stone-600" />
                  Community Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Raising awareness about feline overpopulation and providing resources
                  for community members to get involved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif italic mb-16 text-center text-stone-800">Our Impact</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <iframe 
              src="/images/placeholder.html" 
              title="Mass spay/neuter clinic"
              className="w-full h-[400px] rounded-lg border-0"
            />
            <div>
              <Alert className="mb-8 bg-stone-100 border-stone-200">
                <AlertDescription className="text-lg text-stone-600">
                  Recently participated in a mass spay/neuter clinic that altered &amp; vaccinated over 300 community cats in a single day!
                </AlertDescription>
              </Alert>
              <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                Every day, we work tirelessly to make a difference in our community. Through partnerships
                with local veterinarians and rescue groups, we&apos;ve helped hundreds of cats receive the care they need.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="text-center">
                  <p className="text-5xl font-serif text-stone-800">300+</p>
                  <p className="text-stone-600 mt-2">Cats Helped in 2023</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-serif text-stone-800">100%</p>
                  <p className="text-stone-600 mt-2">Volunteer Powered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif italic mb-16 text-center text-stone-800">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-serif mb-6 text-stone-800">Contact Information</h3>
              <div className="space-y-6">
                <p className="flex items-center text-lg text-stone-600">
                  <Mail className="mr-3" />
                  contact@spayitforward.org
                </p>
                <p className="flex items-center text-lg text-stone-600">
                  <Instagram className="mr-3" />
                  @spayitforward
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-6 text-stone-800">Want to Help?</h3>
              <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                Whether you&apos;re interested in volunteering, donating, or learning more about our mission,
                we&apos;d love to hear from you.
              </p>
              <button className="bg-stone-900 text-stone-200 px-8 py-4 font-serif hover:bg-stone-800">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif italic mb-4">Spay It Forward</h3>
              <p className="text-stone-400 text-lg">
                Supporting rescue groups & individuals in Wayne County to help stop feline overpopulation.
              </p>
            </div>
            <div className="text-right">
              <p className="text-stone-400">© 2024 Spay It Forward. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
