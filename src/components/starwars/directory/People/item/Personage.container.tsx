import { PersonageLayout } from "./Personage.layout";
import { IPeople, IPersonage } from '../../../interface/people';

interface IComponentProps{
    item: IPersonage
}

export const Personage = (props: IComponentProps)=>{

    const {item} = props;

    return <PersonageLayout item={item}/>;
}