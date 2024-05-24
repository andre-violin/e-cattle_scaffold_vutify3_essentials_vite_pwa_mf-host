<script setup>
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()
const offlineOrRefresh = offlineReady || needRefresh

async function close() {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <v-snackbar v-model="offlineOrRefresh" vertical>
    <div v-if="offlineReady" class="text-subtitle-1 pb-2">
      <p>Aplicativo pronto para funcionar offline!</p>
    </div>
    <div v-if="needRefresh" class="text-subtitle-1 pb-2">
      <p>Novo conteúdo disponível, clique no botão recarregar para atualizar</p>
    </div>
    <template #actions>
      <v-btn v-if="needRefresh" @click="updateServiceWorker()" color="info">
        Recarregar
      </v-btn>
      <v-btn @click="close">Fechar</v-btn>
    </template>
  </v-snackbar>
</template>
