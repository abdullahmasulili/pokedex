<script setup>
import { useAppStore } from '@/store/app';

const app = useAppStore()

</script>

<template>
    <v-toolbar @click="app.toggleNavigationDrawer" color="white" class="ct-toolbar">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-filter</v-icon>
        </v-btn>
    </v-toolbar>
</template>