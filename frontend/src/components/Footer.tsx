import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
type IconProps = { className?: string };



// SVG Icon Components
const TwitterIcon = ({ className }: IconProps) => (
  <svg className={`w-4 h-4 ${className || ''}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const FacebookIcon = ({ className }: IconProps) => (
  <svg className={`w-4 h-4 ${className || ''}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg className={`w-4 h-4 ${className || ''}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const GithubIcon = ({ className }: IconProps) => (
  <svg className={`w-4 h-4 ${className || ''}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const PhoneIcon = ({ className }: IconProps) => (
  <svg className={`w-4 h-4 ${className || ''}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = ({ className }: IconProps) => (
  <svg className={`w-4 h-4 ${className || ''}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <svg
    className={`w-5 h-5 ${className || ''}`}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    {/* ... */}
  </svg>
);


const AppleIcon = ({ className }: IconProps) => (
  <svg className={`w-5 h-5 ${className || ''}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const GooglePlayIcon = ({ className }: IconProps) => (
  <svg className={`w-5 h-5 ${className || ''}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#085a90] text-white rounded-b-4xl mb-2">
      <div className="max-w-7xl mx-auto px-6 py-2 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ml-16  p-6 rounded-lg">
          {/* Left Section */}
          <div className="space-y-6 border-r border-gray-200 mx-2">
            {/* Logo and Description */}
            <div className=" ">
              <div className="items-center space-x-2 mb-4 ">
                <div className="">
                  <Image
                    src="/images/logo1.png" // Replace with your logo path
                    alt="App Logo"
                    width={84}
                    height={32}
                  />
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed max-w-md text-xs">
                [App Name] makes booking your next stay easy, affordable, and stress-free. 
                With thousands of hotels worldwide, exclusive deals, and secure payment 
                options, we are here to help you find the perfect place to stay, every time.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-2">
              <Link 
                href="#" 
                className="w-10 h-10 bg-blue-00 hover:bg-blue-00 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-blue-00 hover:bg-blue-00 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-blue-00 hover:bg-blue-00 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-blue-00 hover:bg-blue-00 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="GitHub"
              >
                <GithubIcon />
              </Link>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3">
<LocationIcon className="text-blue-200 mt-1 flex-shrink-0" />
              <p className="text-blue-100 text-xs">
                123 Travel St, Suite 100, City, Country
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-sm">
            {/* Navigation Links */}
            <div>
              <nav className="space-y-4">
                <Link 
                  href="/" 
                  className="block text-white hover:text-blue-200 transition-colors duration-200"
                >
                  Home
                </Link>
                <Link 
                  href="/hotels" 
                  className="block text-white hover:text-blue-200 transition-colors duration-200"
                >
                  Hotels
                </Link>
                <Link 
                  href="/deals" 
                  className="block text-white hover:text-blue-200 transition-colors duration-200"
                >
                  Deals
                </Link>
                <Link 
                  href="/about" 
                  className="block text-white hover:text-blue-200 transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-white hover:text-blue-200 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Contact Info and App Download */}
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="text-blue-200" />
                  <a 
                    href="tel:+15551234567" 
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <EmailIcon className="text-blue-200" />
                  <a 
                    href="mailto:support@yourappname.com" 
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    support@yourappname.com
                  </a>
                </div>
              </div>
{/* Download App Section */}
<div>
  <h3 className="text-white font mb-3 text-xl">Download Our App</h3>
  <div className="flex items-center space-x-3">
    <Link href="#">
      <GooglePlayIcon className="w-10 h-6 text-white" />
    </Link>
    <Link href="#">
      <AppleIcon className="w-6 h-6 text-white" />
    </Link>
  </div>
          <div className=" mt-8 pt-6">
          <p className="text-blue-200 text-sm text-center">
            © 2023, All Rights Reserved
          </p>
        </div>
</div>


            </div>
          </div>
        </div>

        {/* Copyright */}

      </div>
    </footer>
  );
};

export default Footer;