'use client';
import React, { useContext } from 'react';
import { Button } from 'primereact/button';
import { CartContext, Button as VButton } from 'ui-pages-ecommerce';
import Navbar from '@/components/molecules/Navbar';
import Footer from '@/components/molecules/Footer';
import { productsData } from '@/data';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';

const Product = ({ params }) => {
  const id = params.id;
  const { handleAddOrRemoveProduct, validateProductInCart } =
    useContext(CartContext);
  const isAdded = validateProductInCart(id);

  const product = productsData.find((item) => +item.id === +id);
  const featuresData = product.features.map((feature, index) => ({
    id: index,
    feature,
  }));
  const router = useRouter();

  const featureBodyTemplate = (rowData) => {
    return (
      <div className='flex items-center'>
        <i className='pi pi-check'></i>
        <span className='ml-2'>{rowData.feature}</span>
      </div>
    );
  };
  return (
    <main>
      <Navbar isBlack />
      <div className='container mx-auto mt-10'>
        <VButton
          value='back'
          onClick={() => {
            router.push('/#courses');
          }}
          icon={<FaChevronLeft />}
          iconPosition='start'
          className='flex items-center mb-5 w-28'
        >
          Back
        </VButton>
      </div>
      <div className='flex flex-row gap-4 container mx-auto mt-10 mb-20'>
        <div className='w-full'>
          <Card title={product.name} className='mb-4'>
            <Image
              src={product.image}
              alt={product.name}
              imageClass='w-full'
              width='600'
            />

            <p className='text-4xl font-bold mt-10'>$ {product.price}</p>
            <h2 className='text-2xl font-bold py-8'>{product.name}</h2>
            <div className='flex flex-col gap-2'>
              <p className='mt-5'>{product.description}</p>
              <div className='flex flex-col gap-2 mt-5'>
                <DataTable value={featuresData} className='p-datatable-sm'>
                  <Column
                    field='feature'
                    header='Includes'
                    body={featureBodyTemplate}
                  />
                </DataTable>
              </div>
              <Button
                severity={isAdded ? 'danger' : 'primary'}
                label={isAdded ? 'Remove course' : 'Buy course'}
                onClick={() => handleAddOrRemoveProduct(product.id)}
                size='large'
                className={`mt-5 ${isAdded ? 'bg-red-500' : ''}`}
              />
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Product;
