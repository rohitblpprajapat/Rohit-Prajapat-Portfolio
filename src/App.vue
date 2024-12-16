<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex flex-col md:flex-row mx-auto md:w-[50vw] items-center h-screen">
    <div class="flex-none items-center mb-4 md:mb-0">
      <img class="rounded-full h-40 w-40 md:h-80 md:w-80 mx-2 object-cover" src="./assets/picofme.png" alt="">
    </div>
    <div class="about flex items-center text-center md:text-left">
      <p class="text-gray">
        <span class="font-bold text-4xl">Namaste</span> 
        I am a dedicated and passionate software engineer with a strong focus on delivering high-quality, innovative solutions. My journey in the tech industry has been filled with exciting challenges, rewarding projects, and continuous learning. Through this platform, I invite you to explore my world of coding, problem-solving, and creativity.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>
