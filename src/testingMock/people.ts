import { IPeople, IPersonage } from "../components/starwars/interface/people";

export const getPersonageMock = (): IPersonage => {
  return {
    name: "name",
    birth_year: "birth_year",
    eye_color: "eye_color",
    gender: "gender",
    hair_color: "hair_color",
    height: "height",
    mass: "mass",
    skin_color: "skin_color",
    homeworld: "homeworld",
    films: [],
    species: [],
    starships: [],
    vehicles: [],
    url: "url",
    created: "created",
    edited: "edited",
  };
};
