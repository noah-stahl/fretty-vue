<script setup lang="ts">
import FretButton from '../components/FretButton.vue'
import { A_FRETS, B_FRETS, D_FRETS, G_FRETS, HIGH_E_FRETS, LOW_E_FRETS } from '../constants/Frets'
</script>

<template>
  <div>
    <div>
      <FretButton v-for="fret in HIGH_E_FRETS" :key="fret.fretNumber" :fret="fret" />
    </div>
    <div>
      <FretButton v-for="fret in B_FRETS" :key="fret.fretNumber" :fret="fret" />
    </div>
    <div>
      <FretButton v-for="fret in G_FRETS" :key="fret.fretNumber" :fret="fret" />
    </div>
    <div>
      <FretButton v-for="fret in D_FRETS" :key="fret.fretNumber" :fret="fret" />
    </div>
    <div>
      <FretButton v-for="fret in A_FRETS" :key="fret.fretNumber" :fret="fret" />
    </div>
    <div>
      <FretButton v-for="fret in LOW_E_FRETS" :key="fret.fretNumber" :fret="fret" />
    </div>
  </div>
</template>
