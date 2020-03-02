import { User } from './user';
export class Consumer extends User {

    constructor() {
        super();
    }
    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}