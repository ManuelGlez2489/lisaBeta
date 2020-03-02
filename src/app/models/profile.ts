import { Avatar } from './avatar'
import { Deserializable } from './deserializable.model';

export class Profile{
    id: number
    first_name: string
    last_name: string
    email:string
    nickname: string
    phone_number:string
    avatar: Avatar

    deserialize(input: any): this {
        Object.assign(this, input)
        this.avatar = new Avatar().deserialize(input.avatar);
        return this;
      }

}