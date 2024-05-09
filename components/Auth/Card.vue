<template>
  <div>
    <div v-if="!showConfirmEmailMessage">
      <UCard class="w-['40rem']">
        <template #header>
          <Placeholder class="h-8" />
          <h3 class="text-2xl capitalize">{{ authState }}</h3>
        </template>
          <!-- {{ user }} -->
        <Placeholder class="h-32" />
        <div class="flex flex-col">
          <input v-model="input.email" class="mb-4 p-2 rounded border" type="email" placeholder="Email">
          <input v-model="input.password" class="mb-4 p-2 rounded border " type="password" placeholder="Password">
        </div>
        <UButton @click="handleSubmit" class="w-auto text-center font-bold capitalize">{{ authState }}</UButton>
        <UButton @click="signOut" class="w-auto text-center font-bold bg-red-600">Logout</UButton>
        <p v-if="authError" class="text-red-700 font-bold text-sm mt-4">{{ authError }}</p>
        <template #footer>
          <Placeholder class="h-8" />
          <p @click="toggleAuthState" class="text-center text-blue-500 text-sm cursor-pointer">{{authState  === "login" ? "don't have an account? Create one now" : "Alread have an account, go ahead and login"}}</p>
        </template>
      </UCard>
    </div>
    <div v-else>
      <UCard class="w-['40rem']">
        <h3>Check here for confirmation message</h3>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAuth from '@/composables/useAuth';
const authState = ref<"login" | "signup">("login")
const authError = ref("")
const showConfirmEmailMessage = ref(false)
const input = reactive({
  password: "",
  email: ""
})
const router = useRouter()
const { signUp, signIn, user, signOut } = useAuth();
const toggleAuthState = () => {
  if(authState.value === "login") authState.value = "signup"
  else authState.value = "login"
  authError.value = ""
}
const handleSubmit = async () => {
  try {
    if(authState.value === "login") {
      //sign in
      await signIn({email: input.email, password: input.password});
      router.push("/myprofile")
    } else {
      await signUp({email: input.email, password: input.password});
      showConfirmEmailMessage.value = true;
    }
    input.email = ""
    input.password = ""
  } catch (err) {
    authError.value = err.message
  }
}
</script>

<style scoped>

</style>