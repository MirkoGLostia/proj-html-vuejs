<script>
import { store } from './../store';
import NavigationMenu from './NavigationMenu.vue';

export default {
    name: "PageHeader",
    components: {
        NavigationMenu
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
        <section>
            <!-- immagini in background (da far ruotare con timer come bonus) -->
            <div>
                <!-- 3 titoli con stili diversi da rivedere alla fine pre bonus -->
                <h3></h3>
                <h1></h1>
                <h2></h2>

                <button>
                    <!-- button da rivedere commissione per hover -->
                </button>
            </div>
        </section>

        <!-- sezione con messaggio di indirizzamento -->
        <section>
            <h3>
                <!-- messaggio -->
            </h3>

            <button>
                <!-- button da rivedere commissione per hover -->
            </button>
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
</style>
