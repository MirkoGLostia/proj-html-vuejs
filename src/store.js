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
    ],
    navMenuFoot: [
        {
            id: 1,
            image: "envelopeOran",
            title: "Postal Address",
            text: ["Fable Care Center", "85 Fentiman Ave", "Ottawa, ON K1S 0T7"]
        },
        {
            id: 2,
            image: "mobile",
            title: "Phone & E-mail",
            text: ["Phone: 1-800-64-38", "Fax: 1-800-64-39", "office@fable.com"]
        },
        {
            id: 3,
            image: "clock",
            title: "Business Hours",
            text: ["Monday - Friday", "8.00 am - 5.00 pm", "Weekend Closed"]
        },
        {
            id: 4,
            image: "documentOran",
            title: "Sessions",
            text: ["Mornings, 8 am - 12 noon", "Afternoons, 1 pm - 5 pm", "Full Day, 8 am - 5 pm"]
        }
    ],
    welcomeSectNav: [
        {
            id: 1,
            image: "schoolbag_alt",
            title: "Morbi Etos",
            text: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto magnam? Alias perferendis est eaque exercitationem id vel sunt soluta iusto expedita laboriosam. At, quos laboriosam asperiores iste tempora dolore!"]
        },
        {
            id: 2,
            image: "stroller_alt",
            title: "Congue Gravida",
            text: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto magnam? Alias perferendis est eaque exercitationem id vel sunt soluta iusto expedita laboriosam. At, quos laboriosam asperiores iste tempora dolore!"]
        },
        {
            id: 3,
            image: "globe_alt",
            title: "Maecenas Node",
            text: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto magnam? Alias perferendis est eaque exercitationem id vel sunt soluta iusto expedita laboriosam. At, quos laboriosam asperiores iste tempora dolore!"]
        },
        {
            id: 4,
            image: "bell_alt",
            title: "Praesent Morbi",
            text: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto magnam? Alias perferendis est eaque exercitationem id vel sunt soluta iusto expedita laboriosam. At, quos laboriosam asperiores iste tempora dolore!"]
        }
    ],
    classCardData: [
        {
            id: 1,
            name: "Little Lambs",
            description: "Class name",
            image: "class_01",
            age: "12-24",
            ageCount: "month",
            size: "9"
        },
        {
            id: 2,
            name: "Bouncy Bears",
            description: "Class name",
            image: "class_02",
            age: "2-3",
            ageCount: "years",
            size: "12"
        },
        {
            id: 3,
            name: "Tenderhearts",
            description: "Class name",
            image: "class_03",
            age: "3-4",
            ageCount: "years",
            size: "15"
        },
        {
            id: 4,
            name: "Shining Stars",
            description: "Class name",
            image: "class_04",
            age: "4-5",
            ageCount: "years",
            size: "20"
        }
    ]
})