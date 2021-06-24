import Authority from "@/models/Authority";
import User from "@/models/User";

export default class Session {

    static readonly KEY = "Session"

    token!: string
    user!: User
    authorities!: Authority[]

    dark: boolean = false

}