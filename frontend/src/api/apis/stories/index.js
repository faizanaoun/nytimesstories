import { apiError } from "../../../functions/common.js";
import { GET_METHOD } from "../../axiosMethods";


//get my data
export const fetchAllStories = async () => {
    try {
        const { data } = await GET_METHOD(`/stories`);
        return data;
    } catch (error) {
        return apiError(error)
    }
};
