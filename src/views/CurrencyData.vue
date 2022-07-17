<script setup>
import { onMounted, reactive } from 'vue'
import api from '../services/api'
import ListQuotes from '../components/ListQuotes.vue'
import HeaderQuotes from '../components/HeaderQuotes.vue'

const data = reactive({
    quotes: {}
})

onMounted(async () => {
    const response = await api.all()
    data.quotes = response.data
})
</script>

<template>
    <main class="container grid-lg my-2 py-2">
        <header-quotes></header-quotes>
        <list-quotes :quotes="data.quotes"></list-quotes>
    </main>
</template>