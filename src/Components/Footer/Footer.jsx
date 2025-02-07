import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center text-base-content p-4 text-xs">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} By
          <span className="text-[#4FC5C5] font-bold">
            {' '}
            Nur Mahammad Mondol Robiul{' '}
          </span>
          - All rights reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
