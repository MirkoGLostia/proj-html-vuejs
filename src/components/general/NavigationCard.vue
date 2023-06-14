<script>
export default {
    name: "NavigationCard",
    props: {
        details: Object
    }
}
</script>

<template>
    <div class="navigation-card-style">
        <div>
            <img :src="`/img/${details.image}.png`">
        </div>
        <h5>
            {{ details.title }}
        </h5>
        <p v-for="info in details.text">
            {{ info }}
        </p>
    </div>
</template>

<style lang="scss">
@use './../../styles/partials/variables' as v;
@use './../../styles/partials/mixins' as *;

.navigation-card-style {
    text-align: center;
    padding: 50px;

    img {
        height: 40px;
        width: 40px;
        margin: 20px;
    }

    h5 {
        margin-bottom: 20px;
        color: v.$myButterflyBush;
        font-size: 22px;
    }

    p {
        color: rgb(167, 163, 163);
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
    }
}
</style>