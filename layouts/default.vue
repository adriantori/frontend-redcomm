<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt Practice</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/notes" class="btn">Sticky Notes</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>

    <!-- output page content -->
    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>

<style scoped>.router-link-exact-active {
    color: aqua;
}</style>