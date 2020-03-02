import { Avatar } from './avatar';
import { Token } from './token';
import { Consumer } from './consumer';
import { Admin } from './admin';
import { Deserializable } from './deserializable.model';

export class User implements Deserializable {

  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  token: Token;
  avatar: Avatar;
  type: string;
  //todo create and add here the roles model
  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}