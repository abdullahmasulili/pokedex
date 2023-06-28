<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/store/app';

const app = useAppStore()

const navigations = ref([
    {
        title: "Pokemon Library",
        value: "/library",
        icon: "mdi-library-shelves"
    },
    {
        title: "Your Pokemon",
        value: "/favourite",
        icon: "mdi-pokeball"
    },
    {
        title: "About Me",
        value: "/about",
        icon: "mdi-information-outline"
    }
])
</script>

<template>
    <v-navigation-drawer permanent v-model="app.navigationDrawerState" location="left" class="d-none d-md-flex">
        <template v-slot:prepend>
            <v-list-item
                lines="two"
                prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                title="Jane Smith"
                subtitle="Logged in"
            ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="comfortable" nav v-for="(navigation, index) in navigations" :key="index">
            <v-list-item :prepend-icon="navigation.icon" :title="navigation.title" :to="navigation.value"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>