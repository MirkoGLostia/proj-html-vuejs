<script>
export default {
    name: "Banner",
    props: {
        message: String,
        btnMex: String
    }
}
</script>

<template>
    <div>
        <div class="banner">
            <h3>
                {{ message }}
            </h3>

            <button>
                {{ btnMex }}
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './../../styles/partials/variables' as v;
@use './../../styles/partials/mixins' as *;

div {
    background-color: v.$myButterflyBush;
    height: 170px;

    .banner {
        @include myBaseContainerCenter;

        h3 {
            color: white;
            font-size: 45px;
            font-weight: 300;
        }

        button {
            background-color: v.$myButterflyBush;
            border: 2px solid white;
            padding: 20px;
            font-size: 18px;
            font-weight: 400;
            color: white;
        }
    }
}
</style>
