<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="prod in products">
                <ProductCard :product="prod" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    //fetch data
    const { data:products } = await useFetch('https://fakestoreapi.com/products')

    //override head
    useHead ({
        title: 'Nuxt3 Notes',
        meta:[
            {
                name: 'description', content: 'Nuxt3 Notes'
            }
        ]
    })
</script>

<style lang="scss" scoped>

</style>