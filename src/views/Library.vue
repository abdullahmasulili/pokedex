<script setup>
import { onMounted } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'
import { useLibraryStore } from '@/store/library';
const library = useLibraryStore()

onMounted(() => {
  library.fetchPokemons()

})

</script>

<template>
  <v-col>
    <v-row no-gutter>
      <v-col cols="12" md="6" lg="3" v-for="(pokemon, index) in library.pokemons" :key="index">
        <pokemon-card :name="pokemon.name" ></pokemon-card>
      </v-col>
    </v-row>
  </v-col>
</template>
