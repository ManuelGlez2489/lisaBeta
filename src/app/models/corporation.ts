import { Building } from "./building"
import { Deserializable } from './deserializable.model'

export class Corporation implements Deserializable {

    id: number
    url: string
    building: Building

    deserialize(input: any): this {
        Object.assign(this, input)
        this.building = new Building().deserialize(input.building);
        return this;
    }
}