'use client';
import { productsData } from '@/data';
import { MainProvider } from 'ui-pages-ecommerce';

const Provider = ({ children }) => {
  return (
    <MainProvider
      products={productsData}
      locale={'en'}
      colorPrimary={'#00AA19'}
    >
      {children}
    </MainProvider>
  );
};

export default Provider;
