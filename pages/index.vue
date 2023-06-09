<template>
    <div>
      <h1>Welcome to the homepage</h1>
    </div>
</template>

<script setup>

definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})

</script>

<style scoped>

</style>