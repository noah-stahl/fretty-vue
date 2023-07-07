<script setup lang="ts">
import type { Fret } from '../types/Fret';
const props = defineProps<{
  fret: Fret
}>()
const playNote = () => {
    console.log(props.fret.note.pitchClass.color.hex())
    props.fret.note.sound.play()
    props.fret.note.sound.fade(1, 0, 1500)
  }
const color = props.fret.note.pitchClass.color.hex();
</script>

<template>
  <button class="fretButton border-2" :style="{backgroundColor: color}"  @click="playNote">{{ fret.fretNumber }}</button>
</template>


<style>
.fretButton {
  width: 70px;
  height: 50px;
}
</style>