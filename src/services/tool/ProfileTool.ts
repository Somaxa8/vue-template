export default class ProfileTool {

    static isDev(): boolean {
        return process.env.VUE_APP_PROFILE === "dev"
    }

    static isProd(): boolean {
        return process.env.VUE_APP_PROFILE === "prod"
    }

}