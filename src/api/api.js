import axios from "axios";

export const getAxios = async (url) => {
    const resp = await axios.get(url);
    return resp;
};