<script setup>
const user = useSupabaseUser();
watchEffect(() => {
  if (user.value) {
    return navigateTo('/');
  }
});
</script>
<template>
  <Signupform />
</template>
<script>
export default {
  name: "signup"
}
// definePageMeta({
//   layout: "signin",
// });
</script>



<style scoped>

</style>