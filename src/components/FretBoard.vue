<script setup lang="ts">
import FretButton from '../components/FretButton.vue'
import { A_FRETS, B_FRETS, D_FRETS, G_FRETS, HIGH_E_FRETS, LOW_E_FRETS } from '../constants/Frets'
import { useSettingsStore } from '../stores/settings';
import type { Fret } from '../types/Fret';

const settings = useSettingsStore()

function orderedFrets(frets: Fret[]) {
  return settings.rightHanded ? frets : frets.reverse()
}
</script>

<template>
  <div>
    <FretButton v-for="fret in orderedFrets(HIGH_E_FRETS)" :key="fret.fretNumber" :fret="fret" />
  </div>
  <div>
    <FretButton v-for="fret in orderedFrets(B_FRETS)" :key="fret.fretNumber" :fret="fret" />
  </div>
  <div>
    <FretButton v-for="fret in orderedFrets(G_FRETS)" :key="fret.fretNumber" :fret="fret" />
  </div>
  <div>
    <FretButton v-for="fret in orderedFrets(D_FRETS)" :key="fret.fretNumber" :fret="fret" />
  </div>
  <div>
    <FretButton v-for="fret in orderedFrets(A_FRETS)" :key="fret.fretNumber" :fret="fret" />
  </div>
  <div>
    <FretButton v-for="fret in orderedFrets(LOW_E_FRETS)" :key="fret.fretNumber" :fret="fret" />
  </div>
</template>