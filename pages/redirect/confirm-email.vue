<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 bg-white shadow-md sm:rounded-lg sm:px-10">
      <div class="flex flex-col items-center justify-center w-full">
        <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-100">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 class="text-2xl font-semibold text-gray-900">Email Confirmed</h1>
        <p class="mt-2 text-sm text-gray-600 text-center">Your email has been confirmed. You can now sign in.</p>
      </div>
      <div class="flex flex-col items-center justify-center w-full mt-6">
        <router-link to="/login" class="w-full max-w-xs px-6 py-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 focus:shadow-outline focus:outline-none">
          Sign In
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>