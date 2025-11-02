
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { Testimonial } from '../types';

const StarRating: React.FC = () => (
    <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        ))}
    </div>
);


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-gray-900/50 p-8 rounded-xl border border-gray-800 snap-center">
        <div className="flex items-center mb-4">
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-brand-gold" />
            <div>
                <p className="font-bold text-lg text-white">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.countryCode} {testimonial.location}</p>
            </div>
        </div>
        <StarRating />
        <p className="text-gray-300 mt-4 italic">"{testimonial.quote}"</p>
    </div>
);

const TestimonialsSection: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 md:py-28 bg-brand-dark">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">What Our Students Say</h2>
                    <div className="mt-2 h-1 w-24 bg-brand-orange mx-auto"></div>
                </div>
                <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
