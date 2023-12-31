<template>
  <section class="error center">
    <div class="error__content">
      <h2 class="error__decimal">404</h2>
      <h2 class="error__text">
        We are sorry, but the page you requested was not found
      </h2>
      <router-link to="/">
        <button class="error__btn">
          Back To Home<img
            src="@/assets/images/img_notfound/Vector.png"
            alt="Vector"
            class="error__vector"
          />
        </button>
      </router-link>
    </div>
    <div class="error__img"></div>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/notfound.scss';
@import '@/assets/fonts/fonts.css';
</style>
