import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const rightHanded = ref(true)

  function swapHands() {
    console.log('swapHands')
    rightHanded.value = !rightHanded.value
    console.log(rightHanded.value)
  }

  return { rightHanded, swapHands }
})
