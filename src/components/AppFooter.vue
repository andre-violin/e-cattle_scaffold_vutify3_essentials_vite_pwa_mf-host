<template>
  <v-footer height="40" app>
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === 'custom:ecattleIcon' ? 24 : 16"
      />
      <span class="d-none">{ item.title }</span>
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px"
    >
      &copy; 2016-{{ new Date().getFullYear() }}
      <span class="d-none d-sm-inline-block">e-Cattle</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://vuetifyjs.com/about/licensing/"
        rel="noopener noreferrer"
        target="_blank"
      >
        MIT License
      </a>
    </div>
  </v-footer>
</template>

<script setup>
const items = [
  {
    title: 'Documentação do e-Cattle',
    icon: 'custom:ecattleIcon',
    href: 'https://documentation.e-cattle.com/'
  },
  {
    title: 'e-Cattle GitHub',
    icon: 'mdi-github',
    href: 'https://github.com/e-cattle'
  }
]
</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out
  &:hover
    color: rgba(25, 118, 210, 1)
</style>
