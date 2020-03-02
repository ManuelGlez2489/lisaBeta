import Artist from "./artist";
import Category from "./category";
import Service from "./service";

export default class LisaEvent {
    id: number;
    start_date: string;
    end_date: string;
    capacity: number;
    artist: Artist;
    category: Category;
    service: Service
}