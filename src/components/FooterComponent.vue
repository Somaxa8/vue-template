<template>
    <v-footer color="secondary">
        <v-row justify="center">
            <v-col class="py-1 text-center white--text overline" cols="12">
                &copy; {{ new Date().getFullYear() }} <strong>{{projectName}}</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ConstantTool from "@/services/tool/ConstantTool";
@Component
export default class FooterComponent extends Vue {

    projectName: string = ConstantTool.PROJECT_NAME

}
</script>
