import {Vue} from "vue-property-decorator";

export default class RouterTool {

    static configTabs(component: Vue, tabs: string[]): number {
        let result: number = 0
        tabs.forEach((path, index) => {
            if (component.$route.path.includes(path)) {
                result = index + 1
            }
        })
        return result
    }

    static watchTabs(component: Vue, endpoint: string, tab: number, tabs: string[]) {
        let path: string = endpoint
        path += (tab == 0) ? "" : tabs[tab - 1]
        component.$router.push(path).catch(error => {})
    }

}