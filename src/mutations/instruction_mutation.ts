import { BASE_URL } from '@/utils/environment';
import ToastPopUp from '@/utils/Toast.android';
import axios from 'axios';

export const INSTRUCTION_MUTATION = async (medicineDetailsId: string, instructionData: any) => {
  const mutation = `
        mutation CreateInstructionMedicines {
            createInstructionMedicines(
                medicines: { 
                    medicineLocalId: "${medicineDetailsId}", 
                    instrucTion: "${instructionData.instrucTion}" }
            ) 
                {
                    message
            }
        }
    `;

  try {
    const response = await axios.post(
      BASE_URL,
      {
        query: mutation,
        variables: {
          medicineDetailsExtraId: medicineDetailsId
        }
      },
      {
        headers: {
          Authorization: `Bearer ${instructionData.accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (
      response?.data?.data?.instrucTion?.message !== undefined &&
      response.data.data.instrucTion.message !== null
    ) {
      ToastPopUp(response.data.data.instrucTion.message);
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
