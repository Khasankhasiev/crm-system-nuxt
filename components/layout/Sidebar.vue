<template>
   <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
      <NuxtLink to="/" class="mb-10 block">
         <NuxtImg src="/logo.svg" width="140px" class="mx-auto"></NuxtImg>
      </NuxtLink>
      <button @click="logout" class="absolute top-2 right-3 transition-colors hover:text-primary">
         <Icon name="line-md:logout" size="20"/>
      </button>
      <LayoutMenu />
   </aside>
</template>

<script setup lang="ts" >
import { account } from '@/lib/appwrite';
import { useAuthStore, useIsLoadingStore } from '@/store/auth.store';

const isLoadingStore = useIsLoadingStore()
const store = useAuthStore()
const router = useRouter()

const logout = async() => {
   isLoadingStore.set(true)

   await account.deleteSession('current')
   store.clear()
   await router.push('/login')

   isLoadingStore.set(false)
}
</script> 