import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/Homepage.vue'
import Blog from '@/pages/Blog.vue'
import BlogDetails from '@/pages/BlogDetails.vue'
import Project from '@/pages/Project.vue'
import ProjectDetails from '@/pages/ProjectDetails.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/blogdetails',
        name: 'BlogDetails',
        component: BlogDetails
    },
    {
        path: '/project',
        name: 'Project',
        component: Project
    },
    {
        path: '/projectDetails',
        name: 'ProjectDetails',
        component: ProjectDetails
    },
    {
        path: '/:CatchAll(.*)',
        name: '404',
        component: NotFound
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
