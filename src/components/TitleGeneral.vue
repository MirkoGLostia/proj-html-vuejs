<script>
export default {
    name: "TitleGeneral",
    props: {
        title: String,
        message: String
    }
}
</script>

<template>
    <div>
        <h4>
            {{ title }}
        </h4>
        <span>
            {{ message }}
        </span>
        <img src="/img/header_divider.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;

div {
    @include myBaseContainerCenter;
    flex-direction: column;

    h4 {
        color: v.$myButterflyBush;
        font-size: 60px;
        font-weight: 200;
    }

    span {
        color: rgb(178, 178, 178);
        font-size: 25px;
    }

    img {
        margin-top: 30px;
    }
}
</style>