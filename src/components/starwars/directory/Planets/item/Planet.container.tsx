import { IPlanet } from "../../../interface/planet";
import { PlanetLayout } from "./Planet.layout";

interface IComponentProps {
  item: IPlanet;
}

export const Planet = (props: IComponentProps) => {
  const { item } = props;

  return <PlanetLayout item={item} />;
};
