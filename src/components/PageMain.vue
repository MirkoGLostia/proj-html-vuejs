<script>
import WelcomeSect from './mainComponents/WelcomeSect.vue';

export default {
    name: "PageMain",
    components: {
        WelcomeSect
    }
}
</script>

<template>
    <main>
        <WelcomeSect />
    </main>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;
</style>
