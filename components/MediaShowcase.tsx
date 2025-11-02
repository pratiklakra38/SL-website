
import React from 'react';

const mediaItems = [
    { id: 1, title: 'Mridanga Lesson - Day 2', thumb: 'https://picsum.photos/seed/media1/800/450' },
    { id: 2, title: 'Kartal Techniques', thumb: 'https://picsum.photos/seed/media2/800/450' },
    { id: 3, title: 'Live Kirtan Session', thumb: 'https://picsum.photos/seed/media3/800/450' },
    { id: 4, title: 'Student Performance', thumb: 'https://picsum.photos/seed/media4/800/450' },
    { id: 5, title: 'Advanced Rhythms', thumb: 'https://picsum.photos/seed/media5/800/450' },
    { id: 6, title: 'Gaudiya Style Explained', thumb: 'https://picsum.photos/seed/media6/800/450' },
];

const MediaShowcase: React.FC = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">From Our Classes</h2>
                     <div className="mt-2 h-1 w-24 bg-brand-orange mx-auto"></div>
                </div>
                <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                    {mediaItems.map(item => (
                        <div key={item.id} className="flex-shrink-0 w-80 bg-gray-900 rounded-lg overflow-hidden group">
                           <div className="relative">
                               <img src={item.thumb} alt={item.title} className="w-full h-48 object-cover" />
                               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.002v3.996a1 1 0 001.555.833l3.49-1.998a1 1 0 000-1.664l-3.49-1.998z" clipRule="evenodd" />
                                    </svg>
                               </div>
                           </div>
                           <div className="p-4">
                               <h3 className="text-white font-semibold">{item.title}</h3>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaShowcase;
