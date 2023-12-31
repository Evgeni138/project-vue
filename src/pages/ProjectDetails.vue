<template>
    <div class="projectDetails">
        <div class="title__back"></div>
        <div class="content">
            <h2 class="content__header">{{ data.title }}</h2>
            <p class="content__p1">{{ data.p1 }}</p>
            <p class="content__p1">{{ data.p2 }}</p>
        </div>
        <swiper :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff'
        }" :zoom="true" :navigation="true" :pagination="{
    clickable: true
}" :modules="modules" class="mySwiper">
            <swiper-slide>
                <div class="swiper-zoom-container">
                    <img class="img" src="@/assets/images/img_projectDetails/Photo1.png" />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-zoom-container">
                    <img class="img" src="@/assets/images/img_projectDetails/Photo1.png" />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-zoom-container">
                    <img class="img" src="@/assets/images/img_projectDetails/Photo1.png" />
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { mapState } from 'vuex'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules'
export default {
    data() {
        return {
            text: ''
        }
    },
    computed: {
        ...mapState(['data'])
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/projectDetails.scss';
@import '@/assets/fonts/fonts.css';
</style>
