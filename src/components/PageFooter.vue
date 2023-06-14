<script>
import { store } from './../store';
import TitleGeneral from './general/TitleGeneral.vue';
import NavigationCard from './general/NavigationCard.vue';

export default {
    name: "PageFooter",
    components: {
        TitleGeneral,
        NavigationCard
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <footer>
        <!-- componente mappa -->
        <section id="map-container">
            <!-- mappa -->
            <div id="map-puzzle">
                <!-- serie di immagini prese da cartella img ricomposte a formare una mappa, sfondo con funzione di z-index -->
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
                <div class="map-piece"></div>
            </div>
            <div>
                <!-- contenitore per div di interazione con la mappa, andrà in primo piano con z-index -->
                <div>
                    <!-- up/sx  -->
                    <div>
                        <!-- coordinate e link di sito della mappa -->
                    </div>
                    <div>
                        <img src="" alt="">
                    </div>

                    <!-- dwn/sx -->
                    <div>
                        <!-- imagine mappa satellitare -->
                        <img src="" alt="">
                    </div>

                    <!-- dwn/dx -->
                    <div>
                        <!-- controlli dello zoom -->
                    </div>
                </div>
            </div>
        </section>

        <!-- componente info -->
        <section>
            <!-- titolo, creare una component, ripetizione nel main -->
            <TitleGeneral title="Contact Us" message="Our postal address and contact details" />

            <!-- sub-component navigazione -->
            <nav>
                <!-- serie di link per ricavare informazioni, creare delle card da ciclare -->
                <div v-for="data in store.navMenuFoot" :key="data.id">
                    <NavigationCard :details="data" />
                </div>
            </nav>

            <!-- sub-component form messaggio diretto -->
            <section id="form-container">
                <form>
                    <div>
                        <!-- sx info brevi -->
                        <input type="text" placeholder="your name">
                        <input type="text" placeholder="your e-mail">
                        <input type="text" placeholder="subject">
                    </div>

                    <div>
                        <!-- dx messaggio diretto -->
                        <textarea name="" id="" cols="30" rows="8" placeholder="your message"></textarea>
                    </div>
                </form>

                <button>send message</button>
            </section>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;

#map-container {

    #map-puzzle {
        display: flex;
        flex-wrap: wrap;
    }

    .map-piece {
        width: calc(100% / 9);
        height: calc(100vw / 9);

        // debug
        background-color: black;
        border: 1px solid white;
    }
}

#form-container {
    @include myBaseContainerCenter;
    flex-direction: column;
    margin-bottom: 50px;

    form {
        display: flex;

        input,
        textarea {
            width: 600px;
            margin: 20px;
            padding: 15px;
            font-size: 22px;
            resize: none;
        }

    }

    button {
        @include myButton;
    }
}
</style>
