<template>
  <div class="mt-15px">This is an about page</div>
  <button class="mt-15px text-white custom-button cursor-pointer" @click="handleClick">
    count: {{ count }}
  </button>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const handleClick = () => {
  counterStore.increment()
}
</script>

<style scoped lang="scss">
.custom-button {
  height: 32px;
  border: none;
  border-radius: 5px;
  background-color: #4007a2;
  padding: 5px 15px;
  font-weight: 700;
  font-size: 14px;
}
</style>
