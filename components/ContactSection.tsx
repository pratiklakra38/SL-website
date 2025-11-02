
import React, { useState } from 'react';

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.794.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
);


const ContactSection: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');
        // Mock form submission
        setTimeout(() => {
            if (formState.name && formState.email && formState.message) {
                 setStatus(`Thank you, ${formState.name}! Your message has been sent.`);
                 setFormState({ name: '', email: '', message: '' });
            } else {
                setStatus('Please fill out all fields.');
            }
        }, 1000);
    };

    return (
        <section id="contact" className="py-20 md:py-28 bg-brand-dark-secondary/50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">Ready to Start Your Journey?</h2>
                    <p className="mt-4 text-lg text-gray-400">Join thousands of devotees learning traditional kirtan instruments.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <a href="mailto:ajay@example.com" className="flex items-center justify-center bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors">
                            <EmailIcon /> Email Me
                        </a>
                         <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-500 transition-colors">
                            <WhatsAppIcon /> WhatsApp
                        </a>
                    </div>
                    
                    <div className="mt-12 text-center">
                        <p className="text-gray-500 mb-6">Or send a message directly</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" name="name" placeholder="Name" value={formState.name} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-brand-gold focus:border-brand-gold" />
                            <input type="email" name="email" placeholder="Email" value={formState.email} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-brand-gold focus:border-brand-gold" />
                            <textarea name="message" placeholder="Message" rows={4} value={formState.message} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-brand-gold focus:border-brand-gold"></textarea>
                            <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                                Send Message
                            </button>
                            {status && <p className="mt-4 text-sm text-gray-400">{status}</p>}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
