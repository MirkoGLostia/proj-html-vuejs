<script>
import { store } from './../../store';
import TitleGeneral from '../general/TitleGeneral.vue';

export default {
    name: "ClassesSect",
    components: {
        TitleGeneral
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section>
        <TitleGeneral title="Our Classes" message="Our preschool program has four dedicated classes" />
        <div class="description">
            <div>
                <h3>
                    We provided four classes with nine to twenty children each aged twelve month to five years of age
                </h3>
            </div>
            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium totam aut autem quis. Enim
                    nihil explicabo laborum nostrum est maxime alias quo, ut, harum recusandae maiores reprehenderit, ea at!
                </p>
            </div>
        </div>
    </section>
    <section id="main-class-card-container">
        <div v-for="data in store.classCardData" :key="data.id">
            <div class="class-card-info">
                <h2>
                    {{ data.name }}
                </h2>
                <span>
                    {{ data.description }}
                </span>
                <div>
                    <div class="age">
                        <h6>
                            {{ data.age }}
                        </h6>
                        <span>
                            {{ data.ageCount }} old
                        </span>
                    </div>
                    <div class="class-size">
                        <h6>
                            {{ data.size }}
                        </h6>
                        <span>
                            class size
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <img :src="`/img/${data.image}.jpg`" alt="">
                <button>READ MORE ></button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use './../../styles/partials/variables' as v;
@use './../../styles/partials/mixins' as *;

.description {
    @include myBaseContainerCenter;
    gap: 50px;
    margin: 100px auto;

    div {
        width: 50%;

        h3 {
            color: v.$myButterflyBush;
            font-size: 35px;
            font-weight: 600;
        }

        p {
            color: rgb(143, 143, 143);
            font-size: 24px;
        }
    }
}

#main-class-card-container {
    @include myBaseContainerCenter;
    gap: 40px;
    flex-wrap: wrap;
    margin-bottom: 50px;

    div {
        background-color: v.$myButterflyBush;
        display: flex;
        width: calc(50% - 40px);
        height: 230px;

        div {
            position: relative;
            width: 50%;

            img {
                object-fit: contain;
            }

            button {
                @include myButton;
                position: absolute;
                bottom: 0;
                right: 0;
            }
        }

        .class-card-info {
            flex-direction: column;
            padding: 30px;

            div {
                margin-top: auto;
                height: 60px;
                width: 100%;

                div {
                    display: block;
                    text-align: center;
                }

                .age {
                    border-right: 1px solid rgb(170, 167, 207);
                }
            }

            h2,
            h6 {
                color: white;
                font-size: 28px;
            }

            span {
                font-size: 20px;
                font-weight: 700;
                color: rgb(170, 167, 207);
            }
        }
    }
}
</style>
