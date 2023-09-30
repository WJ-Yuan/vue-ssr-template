<template>
  <div class="mt-15px">{{ $t('description.home') }}</div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()
</script>
