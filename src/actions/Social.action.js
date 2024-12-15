import { GET_SOCIAL } from '../constant/Constants';

export function getSocial(id) {
    return {
        type: GET_SOCIAL,
        social_profile_employee_id: id,
    }
}