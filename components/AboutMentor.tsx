
import React from 'react';

const AboutMentor: React.FC = () => {
    return (
        <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 flex justify-center">
                <img
                    src="/images/Ajay_Gauranga_Das.png"
                    alt="Ajay Gauranga Das Teaching"
                    className="rounded-2xl object-cover w-full h-auto shadow-2xl shadow-brand-orange/10 border-4 border-gray-800"
                />
            </div>
            <div className="lg:col-span-3 text-gray-300 space-y-6 text-lg">
                <p>
                    Ajay Gauranga Das has dedicated over two decades to the practice and teaching of traditional devotional music within the International Society for Krishna Consciousness (ISKCON). His journey began as a young devotee fascinated by the powerful rhythms that accompany kirtan, the devotional chanting that lies at the heart of Gaudiya Vaishnavism.
                </p>
                <h4 className="text-2xl font-bold text-brand-gold pt-4">Journey & Experience</h4>
                <p>
                    Ajay trained under senior mridanga players in the traditional Gaudiya style, mastering the intricate patterns and techniques passed down through generations. Recognizing the need to make these teachings accessible to the global devotee community, he began documenting lessons and creating structured learning modules.
                </p>
                <h4 className="text-2xl font-bold text-brand-gold pt-4">Teaching Philosophy</h4>
                <p>
                    'Kirtan is not just music—it's a spiritual practice,' Ajay often says. His teaching approach emphasizes understanding the devotional context behind each rhythm, building technical skill through patient practice, and creating a supportive learning community.
                </p>
                <h4 className="text-2xl font-bold text-brand-gold pt-4">Instruments & Specializations</h4>
                <ul className="list-disc list-inside space-y-2 pl-2">
                    <li><strong>Mridanga:</strong> Traditional two-headed drum - from basic to advanced compositions.</li>
                    <li><strong>Kartal:</strong> Hand cymbals - focusing on rhythm coordination and melodic patterns.</li>
                    <li><strong>Traditional Gaudiya Style:</strong> Authentic ISKCON kirtan rhythms and structures.</li>
                    <li><strong>Kirtan Leadership:</strong> How to lead and support kirtan groups.</li>
                </ul>
                 <h4 className="text-2xl font-bold text-brand-gold pt-4">Vision</h4>
                <p>
                    'My goal is to ensure that the sacred sounds of the mridanga and kartal continue to resonate in temples and homes worldwide, carried forward by a new generation of dedicated practitioners who understand both the technical mastery and spiritual essence of this divine art.'
                </p>
            </div>
        </div>
    );
};

export default AboutMentor;