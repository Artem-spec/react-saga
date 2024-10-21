import { ICommponAPI } from "./common.interface";
import { IPlanet } from "./planet";

export interface IFilms extends ICommponAPI {
  results: IFilm[];
}

export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: Array<Object>;
  starships: Array<Object>;
  vehicles: Array<Object>;
  characters: Array<Object>;
  planets: Array<string>;
  url: string;
  created: string;
  edited: string;
}