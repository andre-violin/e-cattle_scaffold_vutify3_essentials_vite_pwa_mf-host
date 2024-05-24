<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <ReloadPWA />
  </v-app>
</template>

<script setup>
import ReloadPWA from './components/ReloadPWA.vue'
</script>
