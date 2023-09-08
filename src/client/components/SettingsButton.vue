<script setup lang="ts">
import { useSettingsStore } from '../stores/settings';

const settings = useSettingsStore()
</script>

<template>
  <button @click="settings.swapHands">{{ settings.rightHanded ? "righty" : "lefty" }}</button>
</template>

<style></style>