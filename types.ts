// Fix: Import `ReactNode` to correctly type JSX elements and resolve missing namespace error.
import type { ReactNode } from 'react';

export interface Course {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  discount?: string;
  isFeatured?: boolean;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  lessons: number;
  price: string;
  originalPrice?: string;
  category: 'Mridanga' | 'Kartal' | 'Combined' | 'Orientation';
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  countryCode: string;
  image: string;
}

export interface TrustStat {
    icon: ReactNode;
    value: string;
    label: string;
}