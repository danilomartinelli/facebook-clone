<template>
    <div v-if="!loadingAuthUser" class="flex flex-col flex-1 h-screen overflow-y-hidden">
        <Nav />
        <div class="flex overflow-y-hidden flex-1">
            <div class="w-1/3">
                <Sidebar />
            </div>
            <div class="overflow-x-hidden w-2/3">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from './Nav';
    import Sidebar from "./Sidebar";

    export default {
        name: "App",

        data: () => {
            return {
                loadingAuthUser: true,
            }
        },

        components: {
            Nav,
            Sidebar
        },

        async mounted() {
            this.loadingAuthUser = true;
            await this.$store.dispatch('fetchAuthUser');
            this.loadingAuthUser = false;
        }
    }
</script>

<style scoped>

</style>
