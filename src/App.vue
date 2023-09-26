<template>
  <RouterLink to="/home">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>

  <router-view v-slot="{ Component }">
    <Suspense>
      <div>
        <component :is="Component" />
      </div>
    </Suspense>
  </router-view>
</template>

<script setup lang="ts"></script>
