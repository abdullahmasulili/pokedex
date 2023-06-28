import { defineStore } from 'pinia'
import axios from 'axios'

export const useLibraryStore = defineStore('library', {
    state: () => ({
        pokemons: [],
        count: 0,
        nextPage: null,
        prevPage: null,
        types: [],
        isLoading: false,
        isFiltered: false,
        selectedPokemon: {}
    }),
    getters: {
        allPokemons: state => state.pokemons,
        pokemonTypes: state => state.types,
        getSelectedPokemon: state => state.selectedPokemon
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
                    this.isFiltered = false
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
                .catch(err => console.log(err))
        },
        async fetchPokemonTypes() {
            await axios.get('https://pokeapi.co/api/v2/type')
                .then(({ data }) => {
                    const { results } = data

                    this.types = results
                })
                .catch(err => console.log(err))
        },
        async fetchPokemonsByType(urls) {
            this.isFiltered = true

            let filteredPokemons = []

            for(let i = 0; i < urls.length; i++) {
                await axios.get(urls[i])
                    .then(({ data }) => {
                        const { pokemon } = data

                        for(let item of pokemon) {
                            filteredPokemons.push(item.pokemon)
                        }
                    })
                    .catch(err => {
                        this.isLoading = false
                        console.log(err)
                    })

            }
            
            this.isLoading = false
            this.pokemons = filteredPokemons
            this.nextPage = null,
            this.prevPage = null
        }
    }
})