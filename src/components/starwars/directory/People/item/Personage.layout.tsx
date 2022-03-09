import { IPersonage } from "../../../interface/people";

interface IComponentProps {
  item: IPersonage;
}

export const PersonageLayout = (props: IComponentProps) => {
  return <p>{props.item.name}</p>;
};
