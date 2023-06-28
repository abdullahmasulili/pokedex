<script setup>
import { useAppStore } from '@/store/app';

const app = useAppStore()
</script>

<template>
    <v-bottom-navigation class="d-flex d-md-none">
        <v-btn value="/library">
            <v-icon>mdi-library-shelves</v-icon>
            Pokemon Library
        </v-btn>
        <v-btn value="/favourite">
            <v-icon>mdi-pokeball</v-icon>
            Your Pokemon
        </v-btn>
        <v-btn value="/filter" @click="app.toggleDrawer('filter')">
            <v-icon>mdi-filter</v-icon>
            Filter
        </v-btn>
    </v-bottom-navigation>
</template>