<script setup>
import { onMounted, ref } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'
import { useLibraryStore } from '@/store/library';

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
  <v-col>
    <v-row>
      <v-col cols="12" md="6" lg="3" v-for="(pokemon, index) in library.pokemons" :key="index">
        <pokemon-card :name="pokemon.name" :url="pokemon.url"></pokemon-card>
      </v-col>
    </v-row>
  </v-col>
  <div v-if="library.pokemons.length < library.count" class="text-center my-3" v-intersect="onEndOfPage">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
</template>
