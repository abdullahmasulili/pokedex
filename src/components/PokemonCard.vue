<script setup>
defineProps({
    name: String, 
    type: String,
    id: Number,
    image: String
})
</script>

<template>
    <v-card variant="outlined" color="primary">
        <v-img :src="image"></v-img>
        <v-card-title>
            Name : {{ name }}
        </v-card-title>
        <v-card-subtitle>
            <v-chip>{{ id }}</v-chip>
        </v-card-subtitle>
    </v-card>
</template>
