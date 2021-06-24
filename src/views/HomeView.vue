<template>
    <v-container fill-height fluid>
        <v-row align="center" justify="center">
            <v-col cols="auto">
                <v-img src="@/assets/logo.png" aspect-ratio="1" width="200" height="200"></v-img>
            </v-col>
            <v-col cols="12" align="center">
                <h1>Bienvenidos a {{projectName}}</h1>
            </v-col>
            <v-col cols="12" align="center" text-center>
                <p class="text-center">
                    Para obtener ayuda sobre esta web,<br>por favor póngase en contacto con nosotros a través de
                    <a href="mailto:admin@template.com">admin@template.com</a>
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ConstantTool from "@/services/tool/ConstantTool";

@Component
export default class HomeView extends Vue {
    projectName: string = ConstantTool.PROJECT_NAME
}
</script>