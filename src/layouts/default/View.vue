<template>
    <v-layout>
        <navigation-drawer />
        <v-main class="full-height">
            <router-view />
        </v-main>
    </v-layout>
</template>

<script setup>
import NavigationDrawer from '@/components/NavigationDrawer.vue';
</script>
