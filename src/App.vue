<template>
  <header class="text-center mt-30">
    <div>
      <img class="w-100px mr-10px cursor-pointer" src="@/assets/vue.svg" alt="vue" />

      <img class="w-100px cursor-pointer" src="@/assets/vite.svg" alt="vite" />
    </div>
    <h1>🔥 Vue SSR Template</h1>
  </header>
  <main class="text-center">
    <RouterLink class="mr-10px" to="/home">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>

    <router-view v-slot="{ Component }">
      <Suspense>
        <div>
          <component :is="Component" />
        </div>
      </Suspense>
    </router-view>
  </main>
</template>

<script setup lang="ts"></script>
