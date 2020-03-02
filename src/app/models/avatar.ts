import { Deserializable } from './deserializable.model';
export class Avatar  {
   id:number
   url: string
   deserialize(input: any): this {
      Object.assign(this, input);
      return this;
    }
}