import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS

const Footer = () => {
  return (
    <footer className='bg-slate-600 text-white py-10'>
      <div className='container mx-auto px-4'>

        {/* Desktop/Laptop View */}
        <div className='hidden md:flex md:justify-between md:items-start'>

          {/* About Us Section */}
          <div className='md:w-1/4 mb-6 md:mb-0'>
            <h2 className='text-lg font-bold mb-4 cursor-pointer'>About Us</h2>
            <ul>
              <li className='mb-2'>
                <Link to='#' className='hover:text-slate-400'>Company Info</Link>
              </li>
              <li className='mb-2'>
                <Link to='#' className='hover:text-slate-400'>Legal</Link>
              </li>
              <li className='mb-2'>
                <Link to='#' className='hover:text-slate-400'>Careers</Link>
              </li>
              <li className='mb-2'>
                <Link to='#' className='hover:text-slate-400'>Media Center</Link>
              </li>
              <li className='mb-2'>
                <Link to='#' className='hover:text-slate-400'>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className='md:w-1/4 mb-6 md:mb-0'>
            <h2 className='text-lg font-bold mb-4 cursor-pointer'>Quick Links</h2>
            <ul>
              <li className='mb-2'>
                <Link to='/' className='hover:text-slate-400'>Home</Link>
              </li>
              <li className='mb-2'>
                <Link to='#' className='hover:text-slate-400'>Services</Link>
              </li>
              <li className='mb-2'>
                <Link to='#' className='hover:text-slate-400'>Products</Link>
              </li>
              <li className='mb-2'>
                <Link to='#' className='hover:text-slate-400'>FAQ</Link>
              </li>
              <li className='mb-2'>
                <Link to='#' className='hover:text-slate-400'>Blog</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className='md:w-1/4 mb-6 md:mb-0'>
            <h2 className='text-lg font-bold mb-4 cursor-pointer'>Follow Us</h2>
            <div className='flex space-x-4 gap-2'>
              <a href='https://github.com/chetan-90' target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                <i className='fab fa-github'></i> {/* GitHub Icon */}
              </a>
              <a href='https://x.com/ChetanS01132084' target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                <i className='fab fa-twitter'></i> {/* Twitter Icon */}
              </a>
              <a href='https://www.instagram.com/chetan_sharma097?igsh=bmlzM296OHdqcGUy' target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                <i className='fab fa-instagram'></i> {/* Instagram Icon */}
              </a>
              <a href='https://www.linkedin.com/in/chetan-sharma-b14330250' target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                <i className='fab fa-linkedin-in'></i> {/* LinkedIn Icon */}
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className='md:w-1/4 mb-6 md:mb-0'>
            <h2 className='text-lg font-bold mb-4'>Contact Us</h2>
            <p className='mb-2'>123 Coding Street, Tech City, TX 12345</p>
            <p className='mb-2'>Phone : (123) 456-7890</p>
            Email : <a href='mailto:Chetansharma9056@gmail.com' className='hover:text-slate-400'>
              Chetansharma9056@gmail.com
            </a>
          </div>
        </div>

        {/* Mobile View */}
        <div className='md:hidden'>
          <div className='flex justify-between mr-6'>
              <div className='mb-6'>
                <h2 className='text-lg font-bold mb-4 cursor-pointer'>About Us</h2>
                <ul>
                  <li className='mb-2'>
                    <Link to='#' className='hover:text-slate-400'>Company Info</Link>
                  </li>
                  <li className='mb-2'>
                    <Link to='#' className='hover:text-slate-400'>Legal</Link>
                  </li>
                  <li className='mb-2'>
                    <Link to='#' className='hover:text-slate-400'>Careers</Link>
                  </li>
                  <li className='mb-2'>
                    <Link to='#' className='hover:text-slate-400'>Media Center</Link>
                  </li>
                  <li className='mb-2'>
                    <Link to='#' className='hover:text-slate-400'>Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className='mb-6'>
                <h2 className='text-lg font-bold mb-4 cursor-pointer'>Quick Links</h2>
                <ul>
                  <li className='mb-2'>
                    <Link to='/' className='hover:text-slate-400'>Home</Link>
                  </li>
                  <li className='mb-2'>
                    <Link to='#' className='hover:text-slate-400'>Services</Link>
                  </li>
                  <li className='mb-2'>
                    <Link to='#' className='hover:text-slate-400'>Products</Link>
                  </li>
                  <li className='mb-2'>
                    <Link to='#' className='hover:text-slate-400'>FAQ</Link>
                  </li>
                  <li className='mb-2'>
                    <Link to='#' className='hover:text-slate-400'>Blog</Link>
                  </li>
                </ul>
              </div>
          </div>

          <div className='mt-6'>
            <h2 className='text-lg font-bold mb-2 cursor-pointer'>Follow Us</h2>
            <div className='flex space-x-4 gap-2'>
              <a href='https://github.com/chetan-90' target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                <i className='fab fa-github'></i> {/* GitHub Icon */}
              </a>
              <a href='https://x.com/ChetanS01132084' target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                <i className='fab fa-twitter'></i> {/* Twitter Icon */}
              </a>
              <a href='https://www.instagram.com/chetan_sharma097?igsh=bmlzM296OHdqcGUy' target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                <i className='fab fa-instagram'></i> {/* Instagram Icon */}
              </a>
              <a href='https://www.linkedin.com/in/chetan-sharma-b14330250' target="_blank" rel="noopener noreferrer" className='hover:text-slate-400'>
                <i className='fab fa-linkedin-in'></i> {/* LinkedIn Icon */}
              </a>
            </div>
          </div>

          <div className=' mt-8'>
            <h2 className='text-lg font-bold mb-2'>Contact Us</h2>
            <p className='mb-2'>123 Coding Street, Tech City, TX 12345</p>
            <p className='mb-2'>Phone : (123) 456-7890</p>
            Email : <a href='mailto:Chetansharma9056@gmail.com' className='hover:text-slate-400'>
              Chetansharma9056@gmail.com
            </a>
          </div>

          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-slate-800 mt-8 pt-6'>
        <div className='container mx-auto text-center'>
          <p className='text-sm'>&copy; {new Date().getFullYear()} Chetan Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
