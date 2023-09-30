<template>
  <div>
    <div class="text-center mt-100px">
      <div>
        <img class="img mr-10px" src="@/assets/vue.svg" alt="vue" />

        <img class="img" src="@/assets/vite.svg" alt="vite" />
      </div>
      <h1>🔥 Vue SSR Template</h1>
    </div>
    <div class="text-center">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'CommonLayout'
})
</script>
<style lang="scss" scoped>
.img {
  width: 100px;
  cursor: pointer;
}
</style>
