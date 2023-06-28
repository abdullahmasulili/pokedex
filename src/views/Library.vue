<script setup>
import { onMounted, ref } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'
import { useLibraryStore } from '@/store/library';
import PokemonDetails from '@/components/PokemonDetails.vue';

const library = useLibraryStore()
const isLoading = ref(true)

const onEndOfPage = (isIntersecting, entries, observer) => {
  if(isIntersecting && library.pokemons.length >= 20) {
    isLoading.value = true
    
    if(library.nextPage !== library.prevPage && typeof library.nextPage === 'string') {
      library.fetchMorePokemons(library.nextPage).then(() => isLoading.value = false)
    }
  }
}

onMounted(() => {
  library.fetchPokemons()
})

</script>

<template>
  <v-col v-if="!library.isLoading">
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="(pokemon, index) in library.allPokemons" :key="pokemon.url">
        <pokemon-card :name="pokemon.name" :url="pokemon.url" :pokemon="pokemon" :key="pokemon.url"/>
      </v-col>
    </v-row>
  </v-col>
  <div v-if="!library.isLoading && library.pokemons.length < library.count && !library.isFiltered" class="text-center my-3" v-intersect="onEndOfPage">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <pokemon-details v-if="Object.values(library.selectedPokemon).length > 0"/>
</template>
