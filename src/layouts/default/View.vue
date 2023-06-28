<script setup>
    import NavigationDrawer from '@/components/NavigationDrawer.vue';
    import FilterDrawer from '@/components/FilterDrawer.vue';
    import Toolbar from '@/components/Toolbar.vue';
    import BottomNavigation from '@/components/BottomNavigation.vue';
</script>

<template>
    <navigation-drawer />
    <v-main class="fill-height">
        <toolbar />
        <filter-drawer />
        <router-view />
    </v-main>
    <BottomNavigation />
</template>
