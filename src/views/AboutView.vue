<template>
  <div>
    <div class="mt-15">This is an about page</div>
    <button class="mt-15 custom-button" @click="handleClick">count: {{ count }}</button>
  </div>
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
  color: #fff;
  cursor: pointer;
}

.mt-15 {
  margin-top: 15px;
}
</style>
