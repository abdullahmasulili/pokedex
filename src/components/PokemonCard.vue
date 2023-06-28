<script setup>
import { useLibraryStore } from '@/store/library';
import { useAppStore } from '@/store/app';
import { ref, onMounted } from 'vue'

const props = defineProps({
    name: String, 
    url: String,
    pokemon: Object
})
const app = useAppStore()
const library = useLibraryStore()
let pokemonDetails = ref({})
let isLoading = ref(true)

const cardColor = (pokemonType = '') => {
    switch(pokemonType) {
        case 'grass':
            return 'green-lighten-4'
        case 'fire':
            return 'red-lighten-2'
        case 'water':
            return 'light-blue-lighten-4'
        case 'bug':
            return 'light-green-lighten-2'
        case 'normal':
            return 'blue-grey-lighten-5'
    }
}

function handleOpenDetail() {
    library.$patch({ selectedPokemon: pokemonDetails.value })
    app.$patch({ dialog: true })
}

onMounted(() => {
    library.fetchPokemonDetails(props.url).then(data => {
        pokemonDetails.value = data
        isLoading.value = false
    })
})

</script>

<template>
    <v-card v-if="!isLoading" 
        rounded="xl" 
        :color="cardColor(pokemonDetails.types[0].type.name)" 
        class="py-5"
    >
        <v-img  :src="pokemonDetails.sprites.other['official-artwork'].front_shiny"></v-img>
        <v-card-title>
            Name : {{ name }}
        </v-card-title>
        <v-card-subtitle>
            <v-col>
                <v-row align="center">
                    <span class="me-3">Types</span>
                    <v-chip-group>
                        <v-chip v-for="(item, index) in pokemonDetails.types">{{ item.type.name }}</v-chip>
                    </v-chip-group>
                </v-row>
            </v-col>
        </v-card-subtitle>
        <v-card-actions>
            <v-btn @click="library.tagPokemonAsFavorite(props.pokemon)" :color="props.pokemon.isFavourited ? 'pink' : 'gray'" prepend-icon="mdi-heart" class="px-2">
                <span>Favourite</span>
            </v-btn>
            <v-btn @click="handleOpenDetail" prepend-icon="mdi-open-in-new" class="px-2">
                <span>Details</span>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
