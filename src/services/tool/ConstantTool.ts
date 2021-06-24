
export default class ConstantTool {

    static readonly BASE_URL = process.env.VUE_APP_BASE_URL
    static readonly CLIENT_SECRET = process.env.VUE_APP_CLIENT_SECRET
    static readonly ENCRYPT_SESSION: boolean = process.env.VUE_APP_ENCRYPT_SESSION === "true"

    static readonly PROJECT_NAME = "vue-template"

}