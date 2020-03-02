import { Deserializable } from './deserializable.model'

export class Role implements Deserializable {

    id: number
    name: string

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}