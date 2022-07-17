<script setup>
    defineProps({
        quotes: { type: Object, required: true }
    })
</script>

<template>
    <section class="card-body my-2">
        <table class="table">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Máximo</th>
                    <th>Mínimo</th>
                    <th>Variação</th>
                    <th><img src="../assets/cash.svg" alt=""></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(quote, key) in quotes" :key="key">
                    <td>{{ key }}</td>
                    <td>{{ quote.name }}</td>
                    <td>{{ quote.high }}</td>
                    <td>{{ quote.low }}</td>
                    <td>
                        <span class="label label-rounded text-small"
                            :class="{ 'label-success': quote.pctChange > 0, 'label-error': quote.pctChange < 0 }">
                            {{ quote.pctChange }}%
                        </span>
                    </td>
                    <td>
                        <a href="#" class="btn btn-primary btn-sm tooltip tooltip-le" data-tooltip="Seguir">
                            <i class="icon icon-plus"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
