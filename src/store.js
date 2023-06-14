import { reactive } from 'vue'

export const store = reactive({
    navMenuHead: [
        {
            id: 1,
            icon: "home",
            sector: "Home",
            state: "active"
        },
        {
            id: 2,
            icon: "document",
            sector: "Pages",
            state: "inactive"
        },
        {
            id: 3,
            icon: "printer",
            sector: "Blog",
            state: "inactive"
        },
        {
            id: 4,
            icon: "cart",
            sector: "Shop",
            state: "inactive"
        },
        {
            id: 5,
            icon: "lab",
            sector: "Shortcodes",
            state: "inactive"
        },
        {
            id: 6,
            icon: "chat",
            sector: "Support",
            state: "inactive"
        },
        {
            id: 7,
            icon: "envelope",
            sector: "Contact",
            state: "inactive"
        }
    ]
})