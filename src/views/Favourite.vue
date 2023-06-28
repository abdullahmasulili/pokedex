<script setup>
import { useLibraryStore } from '@/store/library';
import PokemonCard from '@/components/PokemonCard.vue'

const library = useLibraryStore()
</script>

<template>
    <v-col>
        <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(pokemon, index) in library.allFavouritedPokemon" :key="pokemon.url">
                <pokemon-card :name="pokemon.name" :url="pokemon.url" :pokemon="pokemon" :key="pokemon.url"/>
            </v-col>
        </v-row>
    </v-col>
</template>