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
        <v-btn icon @click="app.toggleDrawer('filter')">
            <v-icon>mdi-filter</v-icon>
        </v-btn>
    </v-toolbar>
</template>