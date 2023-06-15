<script>
import WelcomeSect from './mainComponents/WelcomeSect.vue';
import ClassesSect from './mainComponents/ClassesSect.vue';
import ImageSect from './mainComponents/ImageSect.vue';
import NewsSect from './mainComponents/NewsSect.vue';

export default {
    name: "PageMain",
    components: {
        WelcomeSect,
        ClassesSect,
        ImageSect,
        NewsSect
    }
}
</script>

<template>
    <main>
        <WelcomeSect />

        <ClassesSect />

        <ImageSect />

        <NewsSect />
    </main>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;
</style>
