import React from 'react';
import Image from 'next/image';

interface PartnerBenefit {
  title: string;
  description: string;
  icon: string;
}

interface CommunityPartner {
  name: string;
  logo: string;
  description: string;
  website: string;
}

const CommunityPartnersPage = () => {
  const partnerBenefits: PartnerBenefit[] = [
    {
      title: 'Leverage Resources & Expertise',
      description: 'Access our community\'s collective knowledge and resources to accelerate your initiatives.',
      icon: '🤝'
    },
    {
      title: 'Product Introduction',
      description: 'Showcase your products and services to our engaged community of learners and innovators.',
      icon: '🚀'
    },
    {
      title: 'Talent Acquisition',
      description: 'Connect with skilled professionals and recruit top talent from our community.',
      icon: '👥'
    },
    {
      title: 'Brand Presence',
      description: 'Increase your brand visibility and establish thought leadership in the tech community.',
      icon: '🌟'
    }
  ];

  const communityPartners: CommunityPartner[] = [
    {
      name: 'TechCorp',
      logo: '/images/partners/techcorp-logo.png',
      description: 'Leading technology solutions provider',
      website: 'https://techcorp.com'
    },
    {
      name: 'InnovateLabs',
      logo: '/images/partners/innovatelabs-logo.png',
      description: 'Innovation and research laboratory',
      website: 'https://innovatelabs.com'
    },
    {
      name: 'DevHub',
      logo: '/images/partners/devhub-logo.png',
      description: 'Developer community platform',
      website: 'https://devhub.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Community Partners
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Join our network of forward-thinking organizations and be part of a community that\'s shaping the future of technology and learning.
          </p>
        </div>
      </div>

      {/* Partner Benefits Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Partner with μLearn?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the unique benefits of joining our community partnership program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Partners Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Community Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the organizations that believe in our mission and support our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityPartners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {partner.description}
                </p>
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Opportunities Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-lg text-gray-600">
                Explore different ways to collaborate with our community
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  🎓 Educational Partner
                </h3>
                <p className="text-gray-600 mb-4">
                  Provide learning resources, courses, or educational content to our community members.
                </p>
                <ul className="text-sm text-gray-600">
                  <li>• Course sponsorship</li>
                  <li>• Guest lectures</li>
                  <li>• Certification programs</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  💼 Industry Partner
                </h3>
                <p className="text-gray-600 mb-4">
                  Connect with our community for recruitment, internships, and collaborative projects.
                </p>
                <ul className="text-sm text-gray-600">
                  <li>• Job postings</li>
                  <li>• Internship programs</li>
                  <li>• Project collaborations</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  🚀 Technology Partner
                </h3>
                <p className="text-gray-600 mb-4">
                  Share your technological expertise and tools to support our community initiatives.
                </p>
                <ul className="text-sm text-gray-600">
                  <li>• Platform access</li>
                  <li>• Technical mentoring</li>
                  <li>• Product demos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of partners and help us build a better future for technology education and innovation.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a 
              href="mailto:partnerships@mulearn.org" 
              className="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="#partnership-form" 
              className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-purple-700 transition-colors"
            >
              Apply for Partnership
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPartnersPage;

export const metadata = {
  title: 'Community Partners | μLearn',
  description: 'Join our network of forward-thinking organizations and be part of a community that\'s shaping the future of technology and learning.',
  keywords: 'community partners, collaboration, technology partnerships, μLearn partners',
};
