'use client';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CartContext } from 'ui-pages-ecommerce';
import { CartSection, Button, Payments } from 'ui-pages-ecommerce';

const CartSectionComponent = () => {
  const router = useRouter();
  const [step, setStep] = useState('cart'); // cart | payment

  return (
    <div className='w-full flex justify-center mt-10 mb-20'>
      <div className='container px-4'>
        <div className='flex flex-col gap-5'>
          {step === 'cart' && (
            <CartSection
              onClickBuyMore={() => router.push('/#shop')}
              onClickGoHome={() => router.push('/')}
              variant='table'
              gridColumns={2}
            />
          )}

          {step === 'payment' && (
            <Payments
              callbackPayment={(data) => {
                // Api
                return;
              }}
              onClickBuyMore={() => router.push('/#shop')}
              onClickGoHome={() => router.push('/')}
            />
          )}

          <div>
            <Button
              type='primary'
              onClick={() => setStep(step === 'cart' ? 'payment' : 'cart')}
            >
              {step === 'cart' ? 'Go to Pay' : 'Back to Cart'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSectionComponent;
