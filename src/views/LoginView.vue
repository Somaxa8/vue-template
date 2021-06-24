<template>
    <v-container fluid class="fill-height welcome-background">
        <v-row align="center">
            <v-col cols="12" md="5" class="pa-md-16">
                <div class="d-flex flex-column mb-15">
                    <v-img src="@/assets/logo.png" width="140" class="mb-15"/>
                    <h1 class="text-center text-md-left">Accede a tu cuenta</h1>
                </div>
                <v-form ref="form">
                    <v-text-field
                        @keydown.enter="$refs.loginButton.$el.click()"
                        v-model="email" label="Email" name="email"
                        prepend-icon="mdi-email" type="email"
                        :rules="emailRules" @click:prepend="developLogin()"
                    />

                    <v-text-field
                        @keydown.enter="$refs.loginButton.$el.click()"
                        v-model="password" label="Contraseña"
                        name="password" prepend-icon="mdi-lock"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" :rules="passwordRules"
                    />
                    <v-btn
                        class="mb-15 mt-4" :loading="progress"
                        ref="loginButton" :key="loginButtonReset" block
                        color="primary" large @click.once="login()">Acceder
                    </v-btn>
                </v-form>
            </v-col>
            <v-col cols="12" md="2" class="justify-center hidden-sm-and-down">
                <v-img src="@/assets/logo.png" width="200"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">

import {Component, Ref, Vue} from "vue-property-decorator";
import StringTool from "@/services/tool/StringTool";
import LoginService from "@/services/LoginService";
import SessionModule from "@/store/SessionModule";
import {getModule} from "vuex-module-decorators";
import SnackbarModule from "@/store/SnackbarModule";
import Session from "@/models/Session";
import ProfileTool from "@/services/tool/ProfileTool";

@Component
export default class LoginView extends Vue {
    @Ref() readonly form!: HTMLFormElement
    @Ref() readonly loginButton!: HTMLButtonElement
    sessionModule: SessionModule = getModule(SessionModule)
    email: string = ""
    password: string = ""
    showPassword: boolean = false
    progress: boolean = false
    loginButtonReset = 1
    emailRules = [
        (v: string) => v.length > 0 ? true : "Email requerido",
        (v: string) => StringTool.validateEmail(v) ? true : "Email no es válido"
    ]
    passwordRules = [
        (v: string) => v.length > 0 ? true : "Contraseña requerida"
    ]


    created() {
        if (ProfileTool.isDev()) {
            this.email = "admin@template.com"
            this.password = "1234"
        }

        this.sessionModule.setSession(new Session());
        this.sessionModule.saveSession()
    }

    login() {
        if (this.form.validate()) {
            LoginService.postLogin(this, this.email, this.password, getModule(SnackbarModule), this.sessionModule)
        }
    }

    count: number = 0
    rotation: number = 0
    developLogin() {
        this.count++
        if (this.count % 3 == 0) {
            switch (this.rotation) {
                case 0: this.email = "admin@template.com"; break
                case 1: this.email = "admin2@template.com"; break
                case 2: this.email = "admin3@template.com"; break
            }
            this.password = "1234"
            this.rotation++
            if (this.rotation > 2) this.rotation = 0
        }
    }
}
</script>

<style>
.welcome-background {
    background-image: linear-gradient(100deg, #fff 50%, rgba(102, 102, 102, 0.46) 50%);
}
</style>