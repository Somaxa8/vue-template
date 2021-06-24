import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("User")
export default class User {

    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("email", String, true)
    email?: string = undefined
    @JsonProperty("name", String, true)
    name?: string = undefined
    @JsonProperty("lastname", String, true)
    lastname?: string = undefined
    @JsonProperty("phone", String, true)
    phone?: string = undefined

}