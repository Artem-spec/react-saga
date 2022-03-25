import { ICommponAPI } from "./common.interface";
import { IFilm } from "./films";

export interface IPlanets extends ICommponAPI {
  results: IPlanet[];
}

export interface IPlanet {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: Array<Object>;
  films: Array<string>;
  url: string;
  created: string;
  edited: string;
}
