<script setup>
import { ref, onMounted } from 'vue'
import { useAppStore } from '@/store/app'
import { useLibraryStore } from '@/store/library';

const app = useAppStore()
const lib = useLibraryStore()

let stats = [{
    name: '',
    data: []
}]
let chartOptions = {
    chart: {
        type: 'radar'
    },
    xaxis: {
        categories: []
    },
    responsive: [
        {
            breakpoint:  480,
            options: {
                chart: {
                    height: 270
                }
            }
        }
    ]
}

stats[0].name = lib.getSelectedPokemon.name
lib.getSelectedPokemon.stats.forEach(item => {
    stats[0].data.push(item.base_stat)
    chartOptions.xaxis.categories.push(item.stat.name)
})
</script>

<template>
    <v-dialog v-model="app.dialog">
        <v-card rounded="lg">
            <v-card-title class="d-flex items-center">
                <h4 class="text-h4 text-capitalize">{{ lib.getSelectedPokemon.name }}</h4>
                <v-spacer></v-spacer>
                <v-btn icon color="red" size="40" variant="flat" @click="app.$patch({ dialog: false })">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-subtitle>
                <v-col>
                    <v-row align="center">
                        <span class="me-3">Type</span>
                        <v-chip-group>
                            <v-chip class="text--capitalize" v-for="item in lib.getSelectedPokemon.types" :key="item.slot">{{ item.type.name }}</v-chip>
                        </v-chip-group>
                    </v-row>
                </v-col>
            </v-card-subtitle>
            <v-card-text>
                <v-col>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-img :src="lib.getSelectedPokemon.sprites.other['official-artwork'].front_default"></v-img>
                        </v-col>
                        <v-col cols="12" sm="6" class="flex-column--center">
                            <div id="stats">
                                <apexcharts :options="chartOptions" :series="stats"></apexcharts>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>