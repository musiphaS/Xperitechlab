import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2024 Xperitechlab. All rights reserved. | <a href="mailto:info@xperitechlab.com" className="underline">info@xperitechlab.com</a>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com/xperitechlab" target="_blank" className="hover:text-primary">Facebook</a>
          <a href="https://twitter.com/xperitechlab" target="_blank" className="hover:text-primary">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;