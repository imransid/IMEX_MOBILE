/* eslint-disable */

import { BASE_URL } from '@/utils/environment';
import ToastPopUp from '@/utils/Toast.android';
import axios from 'axios';

export const createMedicine = async (accessToken: string) => {
  const mutation = `
    mutation {
       createMonthlyMedicines(
        medicines: [{
            medicineLocalId: { Days: ["sat", "Sun", "Mon"], eachOfDays: "12", medicineLocalId: "12121" }
        },
        {
            medicineLocalId: { Days: ["sat", "Sun", "Mon"], eachOfDays: "2", medicineLocalId: "213" }
        }
        ]
    )
    {
        message
        
      }
    }
    `;

  try {
    const response = await axios.post(
      BASE_URL,
      { query: mutation },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (
      response?.data?.data?.createMonthlyMedicines?.message !== undefined &&
      response?.data?.data?.createMonthlyMedicines?.message !== null
    ) {
    } else if (Array.isArray(response?.data?.errors) && response.data.errors.length > 0) {
      // Show error message from the response
      const errorMessage: any = response?.data?.errors[0]?.message;
      if (typeof errorMessage === 'string') {
        ToastPopUp(errorMessage);
      }
    } else {
      ToastPopUp('Something Went wrong ! please try again later.');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios Error:', error.message);
    } else {
      console.error('Unexpected Error:', error);
    }
    ToastPopUp('Network Error! Please check your connection.');
  }
};
