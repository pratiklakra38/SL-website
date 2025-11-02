
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-brand-dark-secondary/50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                         <img 
                            src="/images/Ajay_Gauranga_Das.png"
                            alt="Mentor Ajay Gauranga Das"
                            className="rounded-full w-80 h-80 md:w-96 md:h-96 object-cover border-4 border-brand-gold/70"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white mb-6">About Your Mentor</h2>
                         <p className="text-gray-300 mb-4">
                           Ajay Gauranga Das is a dedicated practitioner and teacher of traditional devotional music within the ISKCON tradition. With over 20 years of experience in kirtan performance and instruction, he has trained students from over 50 countries in the sacred art of playing Mridanga and Kartal.
                        </p>
                        <p className="text-gray-400 mb-8">
                          His teaching philosophy centers on preserving the authentic Gaudiya Vaishnava musical tradition while making it accessible to modern learners worldwide. Through structured online modules, personalized feedback, and community practice sessions, Ajay helps students not just learn an instrument, but connect deeply with the devotional essence of kirtan.
                        </p>
                        <Link to="/about" className="bg-transparent border-2 border-gray-500 text-gray-300 font-bold py-3 px-8 rounded-lg hover:bg-gray-800 hover:border-gray-700 transition-all">
                            Learn More About Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;