import {GET_ASSETS} from '../constant/Constants';

export function getAssets(com_id, id) {
  return {
    type: GET_ASSETS,
    asset_com_id: com_id,
    asset_employee_id: id,
  };
}
