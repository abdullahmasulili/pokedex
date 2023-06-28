<template>
    <v-layout>
        <navigation-drawer />
        <v-main>
            <router-view />
        </v-main>
    </v-layout>
</template>

<script setup>
import NavigationDrawer from '@/components/NavigationDrawer.vue';
</script>
