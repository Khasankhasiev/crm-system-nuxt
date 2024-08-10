<template>
   <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
      <NuxtLink to="/" class="mb-10 block">
         <NuxtImg src="/logo.svg" width="100px" class="mx-auto"></NuxtImg>
      </NuxtLink>
      <UiButton>S</UiButton>
      <button class="absolute top-2 right-3 transition-colors hover:text-primary">
         <Icon name="line-md:logout" size="20"/>
      </button>

   </aside>
</template>

<script setup lang="ts" >
import UiButton from '@/components/ui/button/Button.vue'
</script> 