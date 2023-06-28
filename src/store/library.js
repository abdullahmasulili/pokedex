import { defineStore } from 'pinia'
import Axios from 'axios'

export const useLibraryStore = defineStore('library', {
    state: () => ({
        pokemons: [],
        count: 0,
        nextPage: null,
        prevPage: null
    }),
    getters: {
        allPokemons: state => state.pokemons
    },
    actions: {
        async fetchPokemons() {
            await Axios.get('/pokemon')
                .then(response => {
                    const {count, results, next, previous} = response.data

                    this.count = count
                    this.nextPage = next
                    this.prevPage = previous
                    this.pokemons = results.map(result => {
                        return {
                            result,
                            details: this.fetchPokemonDetail(result.url)
                        }
                    })
                })
                .catch(err => console.log(err))
        },
        async fetchPokemonDetail(url) {
            console.log(url)
        }
    }
})