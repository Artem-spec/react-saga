import { Container } from "react-bootstrap";
import { IPlanet } from "../../interface/planet";
import { Planet } from "./item/Planet.container";

interface IComponentProps {
  items: IPlanet[];
}

export const PlanetsLayout = (props: IComponentProps) => {
  const { items } = props;
  return (
    <Container>
      <ul className="d-flex flex-wrap p-2 col-example">
        {/* Index т.к. нет добавления удаления, модификации элементов */}
        {items?.map((item, index) => {
          return <Planet key={index} item={item} />;
        })}
      </ul>
    </Container>
  );
};
