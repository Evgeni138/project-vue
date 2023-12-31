<template>
    <section class="header center">
        <router-link to="/" class="header__link">
            <div class="header__logo">
                <img class="header__img" src="@/assets/images/img_heading/Logo.png" alt="Logo" />
                <h3 class="header__interno">Interno</h3>
            </div>
        </router-link>
        <div>
            <nav class="header__menu">
                <router-link to="/" class="header__link">Home</router-link>
                <router-link to="/project" class="header__link">Project</router-link>
                <router-link to="/blog" class="header__link">Blog</router-link>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Heading',

    data() {
        return {

        }
    },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/heading.scss';
@import "@/assets/fonts/fonts.css";
</style>