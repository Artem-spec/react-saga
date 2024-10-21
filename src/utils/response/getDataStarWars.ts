import getInstanceAxios from "../axiosConfig";
import { PathStarWars } from "../path/pathStarwars";
import { IPeople } from '../../components/starwars/interface/people';

const instance = getInstanceAxios(PathStarWars.StarWars);

export const getDataStarwars = (
  path: string,
  page: string = "1"
): Promise<any> => {
  return instance
    .get(`${path}/?page=${page}`)
    .then((response) => response.data);
};
