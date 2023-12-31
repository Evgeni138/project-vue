<template>
    <div class="details center">
        <div>
            <div v-for="item in filteredItems" :key="id" class="details__content" style="margin-bottom: 150px">
            <h2 class="detail__header">
               {{ item.header }}
            </h2>
            <div class="details__photo1"><img :src="item.img1" alt="img1" /></div>
            <div class="details__footer">
                <h3 class="details__date">{{ item.date }}</h3>
                <div class="details__links">
                <a href="#" class="details__link">Interior</a>
                <span class="details__span">/</span>
                <a href="#" class="details__link">Home</a>
                <span class="details__span">/</span>
                <a href="#" class="details__link">Decore</a>
                </div>
            </div>
            <div class="details__fill">
                <p class="details__text">
                {{ item.textContent1 }}
                <br />
                <br />
                {{ item.textContent2 }}
                </p>
                <div class="details__quate">
                <div class="details__inside">
                    <span class="details__hooks">,,</span>
                    <span class="details__textquate"
                    >{{ item.quate }}</span
                    >
                </div>
                </div>
                <h2 class="details__subtitle">{{ item.subTitle }}</h2>
                <p class="details__text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the majority
                have suffered.
                </p>
                <ol class="details__ol">
                    <li v-for="one in item.lis" class="details__li details__text">
                        {{ one }}
                    </li>
                </ol>
                <div class="details__photo2">
                <img style="width=100%" :src="item.img2" alt="img2" />
                </div>
                <p class="details__text">
                    {{ item.textContent3 }}
                </p>
            </div>
            </div>
            </div>
            <div class="details__tags">
            <h2 class="details__tag">Tags</h2>
            <div class="details__btns">
                <button class="details__button" @click="filterItems('button1')">Kitchen</button>
                <button class="details__button" @click="filterItems('button2')">Bedroom</button>
                <button class="details__button" @click="filterItems('button3')">Building</button>
                <button class="details__button" @click="filterItems('button4')">Archetecture</button>
                <button class="details__button" @click="filterItems('button5')">Kitchen Planning</button>
                <button class="details__button" @click="filterItems('button6')">Badroom</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BlogDetails',

        data() {
            return {
                dataContent: [
                    {
                        id: 1,
                        header: 'Let’s Get Solution for Building Construction Work',
                        img1: require('@/assets/images/img_blogDetails/photo1.png'),
                        date: '26 December,2022',
                        textContent1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular elief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, y injecthumour, or randomised words which dont look even slightly believable.',
                        textContent2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.',
                        quate: 'The details are not the details. They make the design.',
                        subTitle: 'Design sprints are great',
                        lis: [
                            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        ],
                        img2: require('@/assets/images/img_blogDetails/photo1_2.png'),
                        textContent3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular elief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        button: 'button1'
                    },
                    {
                        id: 2,
                        header: 'Exploring Minimalist Design: A Guide to Simplicity in Visual Communication',
                        img1: require('@/assets/images/img_blogDetails/photo2.png'),
                        date: '26 November,2022',
                        textContent1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular elief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, y injecthumour, or randomised words which dont look even slightly believable.',
                        textContent2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.',
                        quate: 'Design is not just what it looks like and feels like. Design is how it works.',
                        subTitle: 'New Design sprints are great again',
                        lis: [
                            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        ],
                        img2: require('@/assets/images/img_blogDetails/photo2_2.png'),
                        textContent3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular elief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        button: 'button2'

                    },
                    {
                        id: 3,
                        header: 'The Power of Color in Design: Harnessing Emotions through Visual Palette',
                        img1: require('@/assets/images/img_blogDetails/photo3.png'),
                        date: '8 March,2022',
                        textContent1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular elief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, y injecthumour, or randomised words which dont look even slightly believable.',
                        textContent2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.',
                        quate: 'Simplicity is the ultimate sophistication.',
                        subTitle: 'New Design sprints are great again',
                        lis: [
                            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        ],
                        img2: require('@/assets/images/img_blogDetails/photo3_2.png'),
                        textContent3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular elief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        button: 'button3'

                    },
                    {
                        id: 4,
                        header: 'Typography Trends: Crafting Unique Textual Experiences in Modern Design',
                        img1: require('@/assets/images/img_blogDetails/photo4.png'),
                        date: '9 May,2022',
                        textContent1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular elief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, y injecthumour, or randomised words which dont look even slightly believable.',
                        textContent2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.',
                        quate: 'Design is thinking made visual.',
                        subTitle: 'Design is the key to making a lasting impression. It is important to create a visually appealing and functional design that engages users and communicates the intended message effectively.',
                        lis: [
                            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        ],
                        img2: require('@/assets/images/img_blogDetails/photo4_2.png'),
                        textContent3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular elief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        button: 'button4'

                    },
                    {
                        id: 5,
                        header: 'Embracing User-Centered Design: Putting People at the Heart of User Experience',
                        img1: require('@/assets/images/img_blogDetails/photo5.png'),
                        date: '12 June,2022',
                        textContent1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular elief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, y injecthumour, or randomised words which dont look even slightly believable.',
                        textContent2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.',
                        quate: 'Good design is obvious. Great design is transparent.',
                        subTitle: 'A well-designed interface can enhance the user experience, making it intuitive and easy to navigate. Clear and concise graphic elements, intuitive navigation menus, and responsive layouts contribute to a positive user experience.',
                        lis: [
                            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        ],
                        img2: require('@/assets/images/img_blogDetails/photo5_2.png'),
                        textContent3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular elief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        button: 'button5'

                    },
                    {
                        id: 6,
                        header: 'The Impact of Design Psychology: Understanding the Subconscious Influence on User Behavior',
                        img1: require('@/assets/images/img_blogDetails/photo6.png'),
                        date: '26 October,2022',
                        textContent1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular elief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, y injecthumour, or randomised words which dont look even slightly believable.',
                        textContent2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.',
                        quate: 'Design is intelligence made visible.',
                        subTitle: 'Design should not only be visually pleasing but also aligned with the brand identity and its values. It should reflect the personality and essence of the company or product. Consistency in design elements, such as color schemes, typography, and imagery, helps to establish a strong brand presence.',
                        lis: [
                            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                        ],
                        img2: require('@/assets/images/img_blogDetails/photo6_2.png'),
                        textContent3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular elief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                        button: 'button6'

                    },
                ],
                currentFilter: null,
            }
        },
        methods: {
            filterItems(filter) {
                this.currentFilter = filter;
            }
        },
        computed: {
            filteredItems() {
                if (!this.currentFilter) {
                    return this.dataContent;
                };
                return this.dataContent.filter(item => item.button === this.currentFilter);
        }
    },

    };
</script>

<style scoped lang="scss">
    @import '@/assets/styles/blogDetails.scss';
    @import "@/assets/fonts/fonts.css";
</style>