import { ICommponAPI } from './common.interface';

export interface IPeople extends ICommponAPI {
  results: IPersonage[]
}

export interface IPersonage {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Array<Object>;
  species: Array<Object>;
  starships: Array<Object>;
  vehicles: Array<Object>;
  url: string;
  created: string;
  edited: string;
}
