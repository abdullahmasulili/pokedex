<script setup>
import { useAppStore } from '@/store/app';

const app = useAppStore()

</script>

<template>
    <v-toolbar color="white" class="toolbar--sticky d-none d-md-block">
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click="app.toggleDrawer('navigation')"></v-app-bar-nav-icon>
        </template>
        <v-spacer></v-spacer>
        <v-btn prepend-icon="mdi-filter" @click="app.toggleDrawer('filter')">
            Filter
        </v-btn>
    </v-toolbar>
</template>