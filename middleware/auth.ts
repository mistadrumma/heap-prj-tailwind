export default defineNuxtRouteMiddleware((to) => {
  const user = ref(useSupabaseUser())
  console.log()
  if (!!user.value?.aud == false) {
    console.log("Не вижу пользователя ", user.value?.aud)
    return '/signup'
  }
})