<template>
    <navigation-drawer />
    <v-main class="fill-height">
        <toolbar />
        <filter-drawer />
        <router-view />
    </v-main>
</template>

<script setup>
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import FilterDrawer from '@/components/FilterDrawer.vue';
import Toolbar from '@/components/Toolbar.vue';
</script>
