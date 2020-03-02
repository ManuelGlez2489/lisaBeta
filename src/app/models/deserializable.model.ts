import { deserialize } from "v8"

export interface Deserializable {
    deserialize(input:any):this;



}