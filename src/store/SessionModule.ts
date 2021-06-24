import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "@/store/store";
import Session from "@/models/Session";
import CryptoTool from "@/services/tool/CryptoTool";
import ConstantTool from "@/services/tool/ConstantTool";
import Authority from "@/models/Authority";

@Module({dynamic: true, store, name: "SessionModule"})
export default class SessionModule extends VuexModule {

    session: Session = new Session()


    @Mutation
    setSession(session: Session) {
        this.session = session;
    }

    @Mutation
    relateAuthority(authority: Authority) {
        if (!this.session.authorities.some(a => a.name == authority.name)) {
            this.session.authorities.push(authority)
        }
    }

    @Mutation
    unrelateAuthority(authority: Authority) {
        this.session.authorities = this.session.authorities.filter(a => a.name != authority.name)
    }

    @Action
    saveSession() {
        try {
            if (ConstantTool.ENCRYPT_SESSION) {
                let object = CryptoTool.encrypt(JSON.stringify(this.session))
                localStorage.setItem(Session.KEY, object)
            } else {
                localStorage.setItem(Session.KEY, JSON.stringify(this.session))
            }
        } catch (e) {
            console.log("Error on saving session...")
            localStorage.removeItem(Session.KEY)
            this.setSession(new Session())
        }
    }

    @Action
    loadSession() {
        try {
            let sessionObject = localStorage.getItem(Session.KEY)
            if (sessionObject != null) {
                if (ConstantTool.ENCRYPT_SESSION) {
                    let object = CryptoTool.decrypt(sessionObject);
                    this.setSession(JSON.parse(object))
                } else {
                    this.setSession(JSON.parse(sessionObject))
                }
            } else {
                this.setSession(new Session())
            }
        } catch (e) {
            console.log("Error on loading session...")
            localStorage.removeItem(Session.KEY)
            this.setSession(new Session())
        }
    }

}