import Profession from "./profession";

export default class Service {
    id: number;
    name: string;
    profession_name: string;
    duration: number;
    profession: Profession;
    total_price: number;
}