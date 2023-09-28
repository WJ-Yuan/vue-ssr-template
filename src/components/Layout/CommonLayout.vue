<template>
  <div>
    <div class="text-center mt-100">
      <div>
        <img class="img" src="@/assets/vue.svg" alt="vue" />

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
.text-center {
  text-align: center;
}

.mt-100 {
  margin-top: 100px;
}

.mr-10 {
  margin-right: 10px;
}

.img {
  width: 100px;
  cursor: pointer;
}
</style>
