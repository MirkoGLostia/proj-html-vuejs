<script>
import { store } from './../../store';
import TitleGeneral from '../general/TitleGeneral.vue';
import NavigationCard from '../general/NavigationCard.vue';

export default {
    name: "WelcomeSect",
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
    <TitleGeneral title="Welcome to Fable" message="Fable daycare, preschool, and kindergarten" />
    <section>
        <div v-for="info in store.welcomeSectNav" :key="info.id">
            <NavigationCard :details="info" :class="{ 'violet': info.id % 2 === 0, '': !info.id % 2 !== 0 }" />
        </div>
    </section>
</template>

<style lang="scss">
@use './../../styles/partials/variables' as v;
@use './../../styles/partials/mixins' as *;

main>section {
    @include myBaseContainerCenter;

    .navigation-card-style {
        div {
            background-color: v.$myBlazeOrange;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 180px;
            width: 180px;
            border-radius: 50%;
            margin: 0 auto;
            margin-bottom: 20px;
        }

        img {
            height: 80px;
            width: 80px;
        }
    }

    .navigation-card-style.violet {
        div {
            background-color: v.$myButterflyBush;
        }
    }
}
</style>
