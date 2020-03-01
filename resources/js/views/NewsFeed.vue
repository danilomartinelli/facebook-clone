<template>
    <div class="flex flex-col items-center py-4">
        <NewPost/>

        <div class="bg-white rounded shadow w-2/3 mt-6 p-4" v-if="loading">
            <FacebookLoader/>
        </div>

        <Post v-else v-for="post in posts.data" :key="post.data.post_id" :post="post"/>

        <div v-if="! loading && posts.data.length < 1" class="flex flex-col items-center mt-8">
            <div class="w-48 h-48 text-gray-400">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="box-open"
                     class="svg-inline--fa fa-box-open fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 640 512">
                    <path fill="currentColor"
                          d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"></path>
                </svg>
            </div>
            <p class="text-gray-800">No posts found</p>
        </div>
    </div>
</template>

<script>
    import {FacebookLoader} from 'vue-content-loader'
    import NewPost from "../components/NewPost";
    import Post from "../components/Post";

    export default {
        name: "NewsFeed",

        components: {
            FacebookLoader,
            NewPost,
            Post
        },

        data: () => {
            return {
                posts: null,
                loading: true,
            }
        },

        async mounted() {
            try {
                this.loading = true;
                const res = await axios.get('/api/posts');
                this.posts = res.data;
            } catch (err) {
                console.log(err);
            } finally {
                this.loading = false;
            }

            this.$store.dispatch('setActivePage', { activePage: "home" });
        }
    }
</script>

<style scoped>

</style>
