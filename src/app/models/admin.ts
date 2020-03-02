import { User } from './user';
import { Deserializable } from './deserializable.model';
export class Admin extends User implements Deserializable {

    deserialize(input: any): this {

        Object.assign(this, input)

        return this;
    }
}