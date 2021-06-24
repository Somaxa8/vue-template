import {JsonConverter, JsonCustomConvert, JsonObject, JsonProperty} from "json2typescript";

export enum AuthorityName {
    SUPERADMIN = "SUPERADMIN",
    ADMIN = "ADMIN",
}

@JsonConverter
class NameConverter implements JsonCustomConvert<AuthorityName> {
    deserialize(data: any): AuthorityName {
        return (<any>AuthorityName)[data]
    }
    serialize(data: AuthorityName): any {
        return data.toString()
    }
}

@JsonObject("Authority")
export default class Authority {

    @JsonProperty("name", NameConverter, true)
    name?: AuthorityName = undefined
    @JsonProperty("title", String, true)
    title?: string = undefined
    @JsonProperty("description", String, true)
    description?: string = undefined
    @JsonProperty("enabled", Boolean, true)
    enabled?: boolean = undefined

}