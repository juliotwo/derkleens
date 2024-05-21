import axios from 'axios';
import { TRANSACTION, SEND_EMAIL } from './urls';

const API_KEY =
  '6HAJ0ULOkAjeNKT336d2puzZu5QGA2LtFjggpgGaKk3Gt6l14KkFaIT7H34bQkJt';
// const API_KEY =
//   'zwgqaebUA0pr2q0iEcpu20gySPqD40x8ssMLGyPwtecfjq7w5RYyyvmlrlIhFGRO'; // dev
export const ApiTransaction = {
  makeTransaction: async (data) => {
    try {
      const response = await axios.post(TRANSACTION, data, {
        headers: {
          'Content-Type': 'application/json',
          'MERCHANT-API-KEY':
            '6HAJ0ULOkAjeNKT336d2puzZu5QGA2LtFjggpgGaKk3Gt6l14KkFaIT7H34bQkJt',
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  sendEmail: async (data) => {
    try {
      const response = await axios.post(SEND_EMAIL, data, {
        headers: {
          'Content-Type': 'application/json',
          'MERCHANT-API-KEY': API_KEY,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
