
import { Course, Testimonial } from './types';

export const COURSES_DATA: Course[] = [
  {
    id: 1,
    title: 'Mridanga Traditional Gaudiya Style – Level 1',
    description: 'Master foundational hand positions, basic strokes, and simple rhythmic patterns. Perfect for absolute beginners with no prior experience.',
    thumbnail: '/images/mrindanga lesson-1 .jpg',
    level: 'Beginner',
    duration: '8h 30m',
    lessons: 24,
    price: '₹2,899',
    originalPrice: '₹4,499',
    discount: '35% OFF',
    category: 'Mridanga',
  },
  {
    id: 2,
    title: 'Mridanga Level 2 – Intermediate Patterns',
    description: 'Build on basics with complex rhythms, speed development, and traditional kirtan patterns used in ISKCON temples worldwide.',
    thumbnail: 'https://picsum.photos/seed/mridanga2/800/450', // mridanga-level2-thumb.jpg
    level: 'Intermediate',
    duration: '12h 15m',
    lessons: 36,
    price: '₹3,499',
    originalPrice: '₹5,999',
    discount: '42% OFF',
    isFeatured: true,
    category: 'Mridanga',
  },
  {
    id: 3,
    title: 'Mridanga Level 3 – Advanced Gaudiya Style',
    description: 'Master advanced compositions, improvisational techniques, and lead kirtan accompaniment with confidence and authenticity.',
    thumbnail: 'https://picsum.photos/seed/mridanga3/800/450', // mridanga-level3-thumb.jpg
    level: 'Advanced',
    duration: '15h 45m',
    lessons: 48,
    price: '₹4,999',
    originalPrice: '₹8,999',
    discount: '44% OFF',
    category: 'Mridanga',
  },
  {
    id: 4,
    title: 'Kartal Level 1 – Hand Techniques',
    description: 'Learn proper kartal holding, basic striking patterns, and foundational rhythms to complement mridanga in kirtan.',
    thumbnail: 'https://picsum.photos/seed/kartal1/800/450', // kartal-level1-thumb.jpg
    level: 'Beginner',
    duration: '5h 20m',
    lessons: 18,
    price: '₹1,999',
    originalPrice: '₹3,499',
    discount: '43% OFF',
    category: 'Kartal',
  },
  {
    id: 5,
    title: 'Kartal Level 2 – Rhythmic Coordination',
    description: 'Develop advanced coordination, syncopated patterns, and learn to follow and enhance mridanga rhythms in group kirtan.',
    thumbnail: 'https://picsum.photos/seed/kartal2/800/450', // kartal-level2-thumb.jpg
    level: 'Intermediate',
    duration: '7h 10m',
    lessons: 24,
    price: '₹2,499',
    originalPrice: '₹4,299',
    discount: '42% OFF',
    category: 'Kartal',
  },
  {
    id: 6,
    title: 'Kartal Level 3 – Performance Practice',
    description: 'Master performance techniques, group coordination, and lead kartal playing in temple and festival settings.',
    thumbnail: 'https://picsum.photos/seed/kartal3/800/450', // kartal-level3-thumb.jpg
    level: 'Advanced',
    duration: '9h 30m',
    lessons: 30,
    price: '₹3,299',
    originalPrice: '₹5,799',
    discount: '43% OFF',
    category: 'Kartal',
  },
  {
    id: 7,
    title: 'Traditional Gaudiya Style – Complete Module',
    description: 'Comprehensive journey through authentic Gaudiya Vaishnava musical traditions, combining mridanga and kartal mastery.',
    thumbnail: 'https://picsum.photos/seed/gaudiya/800/450', // gaudiya-style-thumb.jpg
    level: 'All Levels',
    duration: '40h 00m',
    lessons: 120,
    price: '₹9,999',
    originalPrice: '₹19,999',
    discount: '50% OFF',
    isFeatured: true,
    category: 'Combined',
  },
  {
    id: 8,
    title: 'Online Mridanga Class Orientation',
    description: 'Free introduction covering why learn mridanga, course structure, practice tips, and getting started with your instrument.',
    thumbnail: 'https://picsum.photos/seed/orientation/800/450', // orientation-thumb.jpg
    level: 'Beginner',
    duration: '2h 00m',
    lessons: 8,
    price: 'FREE',
    originalPrice: '₹999',
    discount: '100% OFF',
    category: 'Orientation',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: 'Learning mridanga from Ajay has transformed my kirtan practice. His step-by-step approach made it accessible even as a complete beginner.',
    name: 'Madhav Krishna Das',
    location: 'USA',
    countryCode: '🇺🇸',
    image: 'https://picsum.photos/seed/test1/100/100', // testimonial-1.jpg
  },
  {
    quote: 'Finally learned the authentic Gaudiya style I was looking for. The online format is convenient, and the community is incredibly supportive.',
    name: 'Radha Priya Devi Dasi',
    location: 'UK',
    countryCode: '🇬🇧',
    image: 'https://picsum.photos/seed/test2/100/100', // testimonial-2.jpg
  },
  {
    quote: 'This is without a doubt the best online mridanga course available in India. The depth of knowledge Ajay shares is unparalleled.',
    name: 'Gopal Sharma',
    location: 'India',
    countryCode: '🇮🇳',
    image: 'https://picsum.photos/seed/test3/100/100', // testimonial-3.jpg
  },
  {
    quote: 'The community support is amazing. We have practice sessions and get personalized feedback which has accelerated my learning curve significantly.',
    name: 'Bhakta David',
    location: 'Australia',
    countryCode: '🇦🇺',
    image: 'https://picsum.photos/seed/test4/100/100', // testimonial-4.jpg
  },
  {
    quote: 'A perfect blend of traditional teaching with modern technology. I can learn at my own pace from anywhere in the world. Highly recommended!',
    name: 'Prema Lilananda',
    location: 'Canada',
    countryCode: '🇨🇦',
    image: 'https://picsum.photos/seed/test5/100/100', // testimonial-5.jpg
  }
];

export const NAV_LINKS = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#/about' },
    { name: 'Courses', href: '#/courses' },
    { name: 'Contact', href: '#contact' },
];
