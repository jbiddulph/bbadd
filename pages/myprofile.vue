<template>
  <div class="h-svh">
    <div class="mx-auto max-w-7xl">
      <h1 class="text-4xl text-slate-500">Profile</h1>
      {{ isLoggedIn() }}
    </div>
  </div>
</template>

<script setup>
const {isLoggedIn} = useAuth()
// definePageMeta({
//   middleware: ["auth"]
//   // or middleware: 'auth'
// })
</script>

<style lang="scss" scoped>

</style>