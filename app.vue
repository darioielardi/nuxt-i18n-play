<script lang="ts" setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 1rem">
    <div>
      Current locale: {{ locale }}
    </div>

    <div style="display: flex; gap: 0.5rem">
      Language switch:
      <a v-for="locale in locales" :key="locale.code" :href="switchLocalePath(locale.code)">
        {{ locale.code }}
      </a>
    </div>

    <div style="display: flex; gap: 0.5rem">
      Pages:
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLinkLocale to="travels">{{ $t('travels') }}</NuxtLinkLocale>
    </div>
  </div>
  
  <NuxtPage />
</template>