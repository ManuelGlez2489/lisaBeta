import { User } from "./user";
import { Token } from './token'
import { Corporation } from './corporation'
import { Deserializable } from './deserializable.model';
import { Role } from './role';
export default class Session implements Deserializable {
    user: User
    token: Token
    corporation: Corporation
    roles: Role[]
    deserialize(input: any): this {
        Object.assign(this, input)
        this.token = new Token().deserialize(input.token);
        this.user = new User().deserialize(input.user);
        this.corporation = new Corporation().deserialize(input.corproation);
        this.roles = input.roles.map(e => new Role().deserialize(e));
        return this;
    }




}