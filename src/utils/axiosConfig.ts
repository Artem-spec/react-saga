import axios from 'axios';


const getInstanceAxios = (url: string)=>{
    return axios.create({
        baseURL: url,
        responseType: 'json',
    });
}
export default getInstanceAxios;