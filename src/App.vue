<template>
  <router-view v-slot="{ Component }">
    <Suspense>
      <div>
        <component :is="Component" />
      </div>
    </Suspense>
  </router-view>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
