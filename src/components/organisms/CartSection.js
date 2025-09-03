'use client';
import { useContext, useState } from 'react';

import { ApiTransaction } from '@/api/api';

import { CartSection, Button, Payments, CartContext } from 'ui-old-version';
import { pageName } from '@/data';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';

const validDiscountCode = ['CAPAPAY10', 'CAPAPAY20'];
const colorRed = '#F73939';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const CartSectionComponent = () => {
  const { products, getTotalCart } = useContext(CartContext);
  const [step, setStep] = useState('cart'); // cart | payment
  const [isValidDiscount, setIsValidDiscount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const createRandomNumberTransaction = () => {
    return Math.floor(Math.random() * 1000000000);
  };
  const extractMessage = (str) => {
    if (!str || str === '' || str === 'null' || str === undefined) {
      return 'An unexpected error occurred. Please try again later.';
    }
    const match = str.match(/message:\s*(.+)/);
    if (match) {
      return match[1];
    } else {
      return str;
    }
  };

  const sendEmail = async (
    email = '',
    phone = '',
    interProducts = [],
    idTransaction = '',
    nameCard = ''
  ) => {
    const services = interProducts?.map((item) => {
      return {
        name: item.name,
        price: parseFloat(item.price),
      };
    });
    const total = isValidDiscount ? 10 : getTotalCart();

    const data = {
      email_for_admin_data: {
        client: pageName,
        email: email,
        name: nameCard,
        amount: total.toFixed(2),
        phone_number: '+52' + phone,
        service: services,
        order_number: idTransaction,
        sender: 'info@capapay.mx',
      },
      email_for_client_data: {
        email: email,
      },
    };
    await ApiTransaction.sendEmail(data);
  };

  const total = isValidDiscount ? 10 : getTotalCart();
  const onPaymentResult = async (data) => {
    setIsLoading(true);

    const merchantTransaction =
      pageName + '-' + createRandomNumberTransaction();

    let body = {
      merchant_transaction_id: merchantTransaction,
      card: {
        number: data.cardNumber,
        holder_name: data.cardName,
        expiration_year: data.cardDate.slice(-2),
        expiration_month: data.cardDate.substring(0, 2),
        cvv: data.cardCvv,
      },
      customer: {
        merchant_customer_id: '331416',
        first_name: data.firstname,
        second_name: '',
        first_surname: data.lastname,
        second_surname: data.secondSurname,
        email: data.email,
        phone_number: '+52' + data.phone,
        home_address: {
          street: data.street,
          external_number: data.extNumber,
          postal_code: data.codePostal,
          colony: '',
          city: data.city,
          state_code: data.state?.slice(0, 2).toUpperCase(),
          state_name: data.state,
          country_code: 'MX',
          country_name: 'Mexico',
        },
        billing_address: {
          street: data.street,
          external_number: data.extNumber,
          postal_code: data.codePostal,
          colony: '',
          city: data.city,
          state_code: data.state?.slice(0, 2).toUpperCase(),
          state_name: data.state,
          country_code: 'MX',
          country_name: 'Mexico',
        },
        nationality: 'MX',
        gender: 'male',
      },
      amount: total.toFixed(2),
      currency: 'MXN',
      description: 'Pago de evento',
    };
    await sleep(2000);
    const dataRes = await ApiTransaction.makeTransaction(body);

    if (dataRes?.content?.status === 'success') {
      let idTransaction = dataRes?.content?.merchant_transaction_id;

      await sendEmail(
        data.email,
        data.phone,
        products,
        idTransaction,
        data.cardName
      );
      setIsLoading(false);
      return {
        success: true,
        data: {
          transactionId: idTransaction,
        },
      };
    } else {
      setIsLoading(false);
      let message = extractMessage(dataRes?.content?.message?.detail);
      return {
        success: false,
        message: message,
      };
    }
  };
  const onChangeDiscount = (value) => {
    setIsValidDiscount(validDiscountCode.includes(value));
  };
  return (
    <div className='w-full flex justify-center mt-10 mb-20'>
      <div className='container px-4'>
        <Button
          value='back'
          onClick={() => {
            if (step === 'payment') {
              setStep('cart');
              return;
            }
            router.push('/#courses');
          }}
          icon={<FaChevronLeft />}
          iconPosition='start'
          className='flex items-center mb-5 w-28'
        >
          Back
        </Button>
        <div className='flex flex-col gap-5'>
          {step === 'cart' && (
            <CartSection
              currency='USD'
              onClickBuyMore={() => router.push('/#courses')}
              onClickGoHome={() => router.push('/')}
              variant='table'
              gridColumns={2}
              buttonProps={{
                onClick: () => setStep(step === 'cart' ? 'payment' : 'cart'),
                label: 'Go to pay',
                backgroundColor: 'white',
                className: 'bg-red-500 text-white',
                style: {
                  backgroundColor: colorRed,
                },
              }}
            />
          )}

          {step === 'payment' && (
            <Payments
              currency='USD'
              isValidDiscountCode={isValidDiscount}
              handleChangeDiscountCode={onChangeDiscount}
              onPaymentResult={onPaymentResult}
              buttonBuyMoreProps={{
                label: 'Buy more',
                onClick: () => router.push('/#courses'),
              }}
              buttonGoHomeProps={{
                label: 'Go home',
                onClick: () => router.push('/'),
              }}
              isLoading={isLoading}
              totalDiscount={isValidDiscount ? 10 : 0}
              buttonBackProps={{
                className: 'text-black',
                label: 'Back',
                style: {
                  color: 'black',
                },
              }}
              buttonNextProps={{
                className: 'bg-red-500 text-white',
                style: {
                  color: 'white',
                  backgroundColor: colorRed,
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSectionComponent;
