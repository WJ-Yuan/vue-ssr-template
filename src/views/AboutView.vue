<template>
  <div>
    <div class="mt-15px">{{ $t('description.about') }}</div>
    <button class="mt-15px custom-button" @click="handleClick">count: {{ count }}</button>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useCounterStore } from '@/store/counter'

const { t: $t } = useI18n()
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
</style>
