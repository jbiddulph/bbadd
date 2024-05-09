<template>
  <div class="bg-slate-700 w-full">
    <nav class="mx-auto max-w-7xl h-full flex justify-between md:flex-row flex-col text-center">
      <div class="px-6 flex md:flex-row flex-col items-center h-full text-white">
        logo
      </div>
      <ul class="flex md:flex-row flex-col h-full items-center px-6 text-slate-300 text-xl">
        <li class="md:mr-6"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="md:mr-6"><NuxtLink to="/myprofile">My Profile</NuxtLink></li>
        <li v-if="isLoggedIn()" class="md:mr-6 cursor-pointer" @click="signOut">Logout</li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { signOut, isLoggedIn } = useAuth()
</script>

<style scoped>
nav {
  height: 10vh;
}
</style>