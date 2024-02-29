import React from 'react';
import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';

export const metadata: Metadata = {
  title: 'Easy Cooking | Перші страви',
  description: 'Generated by create next app',
};

const FirstDishes = () => {
  return <Layout>First-dishes</Layout>;
};

export default FirstDishes;