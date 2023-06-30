<script setup lang="ts">
defineProps({
  noteName: String
})
</script>

<template>
  <button class="fretButton border-2">{{ noteName }}</button>
</template>


<style>
.fretButton {
  width: 50px;
  height: 50px;
}
</style>