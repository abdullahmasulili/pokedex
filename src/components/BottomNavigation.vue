<script setup>
import { useAppStore } from '@/store/app';

const app = useAppStore()

function handleClick(path) {
    this.$router.push(path)
}
</script>

<template>
    <v-bottom-navigation class="d-flex d-md-none">
        <v-btn value="/library" href="/library">
            <v-icon>mdi-library-shelves</v-icon>
            Pokemon Library
        </v-btn>
        <v-btn value="/favourite" href="/favourite">
            <v-icon>mdi-pokeball</v-icon>
            Your Pokemon
        </v-btn>
        <v-btn value="/filter" @click="app.toggleDrawer('filter')">
            <v-icon>mdi-filter</v-icon>
            Filter
        </v-btn>
    </v-bottom-navigation>
</template>