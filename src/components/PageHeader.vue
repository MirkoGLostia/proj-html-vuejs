<script>
export default {
    name: "PageHeader"
}
</script>

<template>
    <header>
        <!-- componente di navigazione -->
        <nav>
            <div>
                <!-- logo -->
            </div>

            <div>
                <ul>
                    <!-- link icone di navigazione, creare classi di selezione attiva (bonus: pensare ad un hover sulle icone) -->
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

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;
</style>
