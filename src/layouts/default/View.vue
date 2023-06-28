<template>
    <navigation-drawer />
    <v-main class="fill-height">
        <toolbar />
        <router-view />
    </v-main>
</template>

<script setup>
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import Toolbar from '@/components/Toolbar.vue';
</script>
