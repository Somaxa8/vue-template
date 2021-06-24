import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("OAuth2AccessToken")
export default class OAuth2AccessToken {

    @JsonProperty("access_token", String, true)
    accessToken?: string = undefined

}