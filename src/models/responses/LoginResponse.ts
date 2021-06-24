import OAuth2AccessToken from "@/models/responses/OAuth2AccessToken";
import Authority from "@/models/Authority";
import {JsonObject, JsonProperty} from "json2typescript";
import User from "@/models/User";

@JsonObject("LoginResponse")
export default class LoginResponse {

    @JsonProperty("oauth2AccessToken", OAuth2AccessToken, true)
    oauth2AccessToken?: OAuth2AccessToken = undefined
    @JsonProperty("user", User, true)
    user?: User = undefined
    @JsonProperty("authorities", [Authority], true)
    authorities?: Authority[] = undefined

}