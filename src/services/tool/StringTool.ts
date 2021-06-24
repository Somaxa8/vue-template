export default class StringTool {

    private static readonly VALID_EMAIL_ADDRESS_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    private static readonly VALID_URL_REGEX = new RegExp(/^(http|https):\/\/[^ "]+$/)

    static validateEmail(email: string): boolean {
        return this.VALID_EMAIL_ADDRESS_REGEX.test(email)
    }

    static validateUrl(url: string): boolean {
        return this.VALID_URL_REGEX.test(url)
    }

    static searchFilter(text: string, search: string): boolean {
        text = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        search = search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        let splitFilter: boolean = true
        search.split(" ").forEach(w => { if (!text.includes(w)) { splitFilter = false } })
        return splitFilter
    }

}