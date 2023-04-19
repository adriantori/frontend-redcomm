<template>
    <div>
        <head>
            <Title>Notes: {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </head>
        <ProductDetails :product="product"/>
    </div>
</template>

<script setup>
    //must same as [name].vue
    const { id } = useRoute().params;
    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch product
    const { data: product } = await useFetch(uri, { key: id })

    if (!product.value) {
        //passed createError object to template in error.vue
        throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
    }

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>