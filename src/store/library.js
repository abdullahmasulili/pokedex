import { defineStore } from 'pinia'
import axios from 'axios'

export const useLibraryStore = defineStore('library', {
    state: () => ({
        pokemons: [],
        count: 0,
        nextPage: null,
        prevPage: null,
    }),
    getters: {
        allPokemons: state => state.pokemons
    },
    actions: {
        async fetchPokemons() {
            await axios.get('https://pokeapi.co/api/v2/pokemon')
                .then(({ data }) => {
                    const {count, results, next, previous} = data

                    this.count = count
                    this.nextPage = next
                    this.prevPage = previous
                    this.pokemons = results
                })
                .catch(err => console.log(err))
        },
        async fetchPokemonDetails(url) {
            return await axios.get(url)
                .then(({ data }) => {
                    return data
                })
                .catch(err => console.log(err))
        },
        async fetchMorePokemons(url) {
            return await axios.get(url)
                .then(({ data }) => {
                    const { results, next } = data
                    
                    results.forEach(result => {
                        this.pokemons.push(result)
                    })

                    this.nextPage = next
                })
        }
    }
})