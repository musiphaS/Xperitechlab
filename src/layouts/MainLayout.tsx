import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

type MainLayoutProps = {
  children: React.ReactNode; // Any child component(s) passed to this layout
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">{children}</main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;