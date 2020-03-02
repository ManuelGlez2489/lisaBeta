import { Deserializable } from './deserializable.model'

export class Token implements Deserializable {

    access_token: string
    expiresAt: string
    deserialize(input: any): this {
        return Object.assign(this, input)
    }


}