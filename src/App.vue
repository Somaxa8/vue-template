<template>
    <v-app>
        <NavbarComponent v-if="showMenu()"/>
        <v-main>
            <router-view/>
            <DialogComponent/>
        </v-main>
        <FooterComponent v-if="showMenu()"/>
        <SnackbarComponent/>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from "vue-property-decorator"
import NavbarComponent from "@/components/NavbarComponent.vue";
import SnackbarComponent from "@/components/SnackbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import DialogComponent from "@/components/DialogComponent.vue";
import {getModule} from "vuex-module-decorators";
import SessionModule from "@/store/SessionModule";

@Component({components: {DialogComponent, NavbarComponent, FooterComponent, SnackbarComponent}})
export default class App extends Vue {

    created() {
        this.$vuetify.theme.dark = getModule(SessionModule).session.dark
    }

    showMenu() {
        return this.$route.name != null && this.$route.name != "login"
    }
}
</script>