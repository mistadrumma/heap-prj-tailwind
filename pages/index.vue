<template>
    <div class="p-4 sm:ml-64">
      <h1>Welcome to the homepage</h1>
    </div>
</template>

<script setup>
const user = useSupabaseUser();

watchEffect(() => {
  if (!user.value) {
    return navigateTo('/signin');
  }
});

definePageMeta({
  middleware: ["auth"]
})

</script>

<style scoped>

</style>