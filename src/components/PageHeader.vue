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
            <!-- immagini in background (da far ruotare con timer come bonus) -->
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
