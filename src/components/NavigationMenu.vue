<script>
export default {
    name: "NavigationMenu",
    props: {
        details: Object
    }
}
</script>

<template>
    <div>
        <img :src="details.state === 'active' ? `/img/${details.icon}-2.png` : `/img/${details.icon}.png`" alt="">
        <br>
        <span>
            {{ details.sector }}
        </span>
    </div>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;
</style>
