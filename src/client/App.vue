<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="route" to="/settings">Settings</RouterLink>
        <RouterLink class="route" to="/about">About</RouterLink>
        <RouterLink class="route" to="/quiz">Quiz</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.route {
  @apply border-b-2 border-green-400
}
</style>
