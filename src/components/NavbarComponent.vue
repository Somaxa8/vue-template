<template>
    <v-app-bar app clipped-left color="secondary">
        <v-app-bar-nav-icon class="mr-1" color="white"></v-app-bar-nav-icon>

        <v-divider vertical inset></v-divider>
        <v-img src="@/assets/logo.png" aspect-ratio="1" max-width="40" max-height="40" class="mx-4 logo-tint"/>

        <v-toolbar-title class="white--text">{{projectName}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu bottom left>
            <template v-slot:activator="{ on }">
                <v-btn dark icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list min-width="200">

                <v-list-item>
                    <v-switch v-model="dark" label="Dark" height="10"></v-switch>
                </v-list-item>

                <v-divider class="my-2"/>

                <v-list-item @click="logout()">
                    <v-list-item-title>Salir</v-list-item-title>
                </v-list-item>

            </v-list>
        </v-menu>

    </v-app-bar>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {getModule} from "vuex-module-decorators";
import SnackbarModule from "@/store/SnackbarModule";
import LoginService from "@/services/LoginService";
import SessionModule from "@/store/SessionModule";
import ConstantTool from "@/services/tool/ConstantTool";
@Component
export default class NavbarComponent extends Vue {
    sessionModule: SessionModule = getModule(SessionModule)
    snackbarModule: SnackbarModule = getModule(SnackbarModule)
    projectName: string = ConstantTool.PROJECT_NAME
    get dark() {
        return this.$vuetify.theme.dark
    }
    set dark(v: boolean) {
        this.sessionModule.session.dark = v
        this.sessionModule.saveSession()
        this.$vuetify.theme.dark = v
    }
    logout() {
        LoginService.logout(this)
    }
}
</script>
