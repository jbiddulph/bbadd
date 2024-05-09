<template>
  <div>
    <div class="max-w-md mx-auto flex items-center justify-center h-screen">
      <AuthCard />
    </div>
  </div>
</template>

<script setup lang="ts">
const { supabase } = useSupabase()
</script>

<style scoped>
.container {
  max-width: 50%;
  height: 90vh;
}
</style>