
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;