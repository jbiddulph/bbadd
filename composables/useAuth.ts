import { ref } from 'vue';
import useSupabase from '@/composables/useSupabase';

const useAuth = () => {
  const user = ref(null);
  const router = useRouter();
  const supabase = useSupabase();

  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null;
    if (session === null) {
      user.value = null;
    }
  })
  
  // const signUp = async ({ email, password, ...metadata}: { email: string, password: string, [key: string]: any }) => {
  const signUp = async ({ email, password, ...metadata }) => {
    const {data: u, error} = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/myprofile?source=email`,
      },
    }, 
    {
      data: metadata,
    });
    if(error) throw error
    return u
  }
  const signIn = async ({email, password}) => {
    const {data: u, error} = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if(error) throw error
    return u
  }
  const signOut = async () => {
    const {error} = await supabase.auth.signOut()
    if(error) throw error
    router.push("/")
  }
  const isLoggedIn = () => {
    return !!user.value
  }
  return {
    user,
    signUp,
    signIn,
    signOut,
    isLoggedIn
  }
}

export default useAuth;
