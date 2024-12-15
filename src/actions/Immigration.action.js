import { IMMIGRATION } from '../constant/Constants';

export function getImmigrations(id) {
    return {
        type: IMMIGRATION,
        social_profile_employee_id: id,
    }
}