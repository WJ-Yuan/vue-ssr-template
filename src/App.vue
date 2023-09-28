<template>
  <CommonLayout>
    <RouterLink class="mr-10px" to="/home">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>

    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </CommonLayout>
</template>

<script setup lang="ts">
import CommonLayout from '@/components/Layout/CommonLayout.vue'
</script>

<style scoped></style>
