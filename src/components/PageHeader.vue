<script>
import { store } from './../store';
import NavigationMenu from './headerComponents/NavigationMenu.vue';
import Banner from './general/Banner.vue';

export default {
    name: "PageHeader",
    components: {
        NavigationMenu,
        Banner
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <!-- componente di navigazione -->
        <nav>
            <div>
                <img src="img/logo.png" alt="logo">
            </div>

            <div>
                <ul>
                    <li v-for="link in store.navMenuHead" :key="link.id" :class="link.state === 'active' ? 'active' : ''">
                        <NavigationMenu :details="link" />
                    </li>
                </ul>
            </div>
        </nav>

        <!-- componente jumbotron -->
        <section id="jumbotron">
            <!-- immagini in background -->
            <img id="jumbo-boy-img" src="/jumboimg/slider_slide2_img1.png" alt="">
            <img id="jumbo-girl-img" src="/jumboimg/slider_slide2_img2.png" alt="">
            <img id="jumbo-potion-img" src="/jumboimg/slider_icon13.png" alt="">
            <img id="jumbo-train-img" src="/jumboimg/slider_icon12.png" alt="">
            <img id="jumbo-brush-img" src="/jumboimg/slider_icon11.png" alt="">
            <img id="jumbo-pigtail-img" src="/jumboimg/slider_icon14.png" alt="">
            <img id="jumbo-cubes-img" src="/jumboimg/slider_icon16.png" alt="">

            <div>
                <!-- 3 titoli con stili diversi da rivedere alla fine pre bonus -->
                <h3>
                    Friendly Atmosphere
                </h3>
                <h1>
                    Welcoming Place
                </h1>
                <h2>
                    For Every Child
                </h2>

                <button>
                    <!-- button da rivedere commissione per hover -->
                    BUY THIS THEME NOW
                </button>
            </div>
        </section>

        <!-- sezione con messaggio di indirizzamento -->
        <section>
            <Banner message="How to Enroll Your Child to a Class?" btnMex="LEARN MORE  >" />
        </section>
    </header>
</template>

<style lang="scss">
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;

nav {
    @include myBaseContainerCenter;

    background-color: white;

    img {
        height: 145px;
    }

    ul {
        display: flex;
        height: 150px;

        .active {
            background-color: v.$myBlazeOrange;
            color: white;
        }

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120px;
            text-align: center;
            margin-right: 10px;
            color: v.$myButterflyBush;


            img {
                width: 45px;
                height: 45px;
                margin-bottom: 15px;
            }

            span {
                font-size: 20px;
                font-weight: 700;
            }
        }
    }

}

#jumbotron {
    height: 750px;
    background: linear-gradient(to bottom,
            rgb(238, 246, 254) 0%,
            rgb(238, 246, 254) 65%,
            rgb(235, 241, 237) 65%,
            rgb(235, 241, 237) 100%);

    font-size: 40px;
    color: v.$myButterflyBush;
    position: relative;

    #jumbo-boy-img {
        height: 650px;
        position: absolute;
        z-index: 10;
        bottom: 5vh;
        left: 45vw;
    }

    #jumbo-girl-img {
        height: 550px;
        position: absolute;
        z-index: 9;
        bottom: 12vh;
        left: 65vw;
    }

    #jumbo-potion-img {
        height: 120px;
        position: absolute;
        z-index: 9;
        bottom: 60vh;
        left: 53vw;
    }

    #jumbo-train-img {
        height: 95px;
        position: absolute;
        z-index: 9;
        bottom: 55vh;
        left: 45vw;
    }

    #jumbo-brush-img {
        height: 95px;
        position: absolute;
        z-index: 9;
        bottom: 65vh;
        left: 40vw;
    }

    #jumbo-pigtail-img {
        height: 55px;
        position: absolute;
        z-index: 9;
        bottom: 60vh;
        left: 36vw;
    }

    #jumbo-cubes-img {
        height: 90px;
        position: absolute;
        z-index: 9;
        bottom: 65vh;
        left: 30vw;
    }

    div {
        @include myBaseContainerCenter;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 200px;

        h3 {
            color: v.$myBlazeOrange;
            font-style: italic;
            font-weight: 100;
        }

        h1 {
            font-size: 70px;
        }

        h2 {
            font-weight: 100;
        }

        button {
            @include myButton;
        }
    }

}
</style>
