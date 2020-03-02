import { Deserializable } from './deserializable.model'


export class Building implements Deserializable {

    id: number
    url: string
    time_zone
    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}