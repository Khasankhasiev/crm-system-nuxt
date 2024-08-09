<template>
   <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
      <NuxtLink to="/" class="mb-10 block">
         <NuxtImg src="/logo.svg" width="100px" class="mx-auto"></NuxtImg>
      </NuxtLink>
      <UiButton>Send It</UiButton>
   </aside>
</template>

<script setup lang="ts" >
import UiButton from '@/components/ui/button/Button.vue'
</script> 