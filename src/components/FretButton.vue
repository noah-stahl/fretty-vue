<script setup lang="ts">
import type { Fret } from '../types/Fret';
const props = defineProps<{
  fret: Fret
}>()
const playNote = () => {
    console.log(props.fret.note)
    props.fret.note.sound.play()
    props.fret.note.sound.fade(1, 0, 1500)
  }
</script>

<template>
  <button class="fretButton border-2" @click="playNote">{{ fret.fretNumber }}</button>
</template>


<style>
.fretButton {
  width: 50px;
  height: 50px;
}
</style>