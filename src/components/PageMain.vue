<script>
import WelcomeSect from './mainComponents/WelcomeSect.vue';
import ClassesSect from './mainComponents/ClassesSect.vue';

export default {
    name: "PageMain",
    components: {
        WelcomeSect,
        ClassesSect
    }
}
</script>

<template>
    <main>
        <WelcomeSect />

        <ClassesSect />
    </main>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;
</style>
