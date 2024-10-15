// import { client as axiosClient, BASE_URL } from "../../services/client";
// import { Response } from '../type';
// import { BattalionRequest, BattalionResponse } from "@services/battalion/battalion.service.type";
  
//   export const medicineDetailsService = {
//     battalion: async (
//       battalionRequest: BattalionRequest
//     ): Promise<Response<BattalionResponse>> => {
//       try {
//         const url: string = BASE_URL;
//         const response = await axiosClient.post(
//           url,
//           JSON.stringify({
//             query: `query FindAllBattalion($page: Float!, $limit: Float!) {
//                     findAllBattalion(page: $page, limit: $limit)
//                     {
//                             id,
//                             nameBn,
//                             nameEn,
//                             url,
//                             order,
//                             logoFilePath,
//                             mapFilePath,
//                             isPublished,
//                             createdAt,
//                             updateAt
//                     }
//                 }`,
//             variables: {
//               page: battalionRequest.page,
//               limit: battalionRequest.limit
//             },
//           })
//         );
//         console.log("Response of create battalion service:", response);
//         return response?.data;
//       } catch (error) {
//         console.log("Error:", error);
//         throw error;
//       }
//     },
//   };
  