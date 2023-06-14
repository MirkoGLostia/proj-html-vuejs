<script>
import TitleGeneral from './TitleGeneral.vue';

export default {
    name: "PageFooter",
    components: {
        TitleGeneral
    }
}
</script>

<template>
    <footer>
        <!-- componente mappa -->
        <section>
            <!-- mappa -->
            <div>
                <!-- serie di immagini prese da cartella img ricomposte a formare una mappa, sfondo con funzione di z-index -->
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
                <div>
                    <img src="" alt="">
                    <h5></h5>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            <!-- sub-component form messaggio diretto -->
            <section>
                <form>
                    <div>
                        <!-- sx info brevi -->
                        <input type="text">
                        <input type="text">
                        <input type="text">
                    </div>

                    <div>
                        <!-- dx messaggio diretto -->
                        <input type="text">
                    </div>
                </form>

                <button>submit</button>

                <!-- bonus -->
                <div>
                    <!-- in caso di invio messaggio, questo div andrà a sostituire il form con messaggio positivo o negativo -->
                    <div>
                        <!-- messaggio -->
                    </div>
                    <!-- e un bottone per reinviare un altro messaggio -->
                    <button></button>
                </div>
            </section>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;
</style>
