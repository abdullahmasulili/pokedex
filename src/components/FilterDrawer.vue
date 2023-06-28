<script setup>
import { useAppStore } from '@/store/app';
import { useLibraryStore } from '@/store/library';
import { onMounted, ref } from 'vue'

const app = useAppStore()
const lib = useLibraryStore()
let selectedType = ref([])

onMounted(() => {
    lib.fetchPokemonTypes()
})
</script>

<template>
    <v-navigation-drawer temporary v-model="app.filterDrawer" location="right">
        <template v-slot:prepend>
            <h5 class="text-h5 pa-3">Filter Types</h5>
        </template>
        
        <v-chip-group v-model="selectedType" column multiple class="px-3">
            <v-chip filter 
                v-for="(type, index) in lib.types" 
                :key="index"
                :value="type.url"
                color="primary"
            >
            <span class="text--capitalize">
                {{ type.name }}
            </span>
            </v-chip>
        </v-chip-group>
        <div class="drawer__action px-3">
            <v-btn block 
                append-icon="mdi-filter-check" 
                variant="flat" 
                color="primary" 
                rounded="pill" 
                @click="lib.fetchPokemonsByType(selectedType)"
            >
                Apply
            </v-btn>
        </div>
    </v-navigation-drawer>
</template>