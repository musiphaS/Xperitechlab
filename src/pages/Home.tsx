import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Home: React.FC = () => {
    return (
        <MainLayout>
            <section className="bg-gray-100 py-44">
                <div className="container mx-auto flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Xperitechlab</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        We specialize in Website Development and Digital Marketing for schools and lodges.
                    </p>
                    <a
                        href="/contact"
                        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                    >
                        Contact Us Today
                    </a>
                </div>
            </section>
        </MainLayout>
    );
};

export default Home;