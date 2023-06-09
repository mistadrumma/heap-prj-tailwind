<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const usersToggle = ref(false);

const showUsers = () => {
  usersToggle.value = !usersToggle.value;
};


async function signout() {
  const { error } = await supabase.auth.signOut()
  const cookieToken = useCookie('sb-access-token')
  cookieToken.value = null
  const cookieRefreshToken = useCookie('sb-refresh-token')
  cookieRefreshToken.value = null



}
</script>

<template>
  <header v-if="user" class="border-b border-gray-100 dark:bg-gray-900">
    <div class="w-full px-4 lg:px-6 xl:container flex items-center h-16">
      <div class="flex flex-1 items-center">
        <NuxtLink class="flex flex-none items-center mr-5 lg:mr-6" to="/">
          <!--          <img alt="Hugging Face's logo" class="md:mr-2 w-7" src="/front/assets/huggingface_logo-noborder.svg">-->
          <span class="hidden text-lg font-bold whitespace-nowrap md:block">Heap Mind</span>
        </NuxtLink>
        <div class="flex md:order-2">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Search</span>
          </button>
          <div class="relative hidden md:block">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
          </div>
          <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>
      <nav class="ml-auto hidden lg:block text-sm">
        <ul class="flex items-center space-x-2">
          <li>

            <NuxtLink to="/recipes" class="flex items-center group px-2 py-0.5 dark:hover:text-gray-400 hover:text-indigo-700 ">
              <svg class="w-5 h-5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              New
            </NuxtLink>
          </li>
          <li>
            <a href="#" class="flex items-center group px-2 py-0.5 dark:hover:text-gray-400 hover:text-red-700">
              <svg class="w-5 h-5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
              Hot
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center group px-2 py-0.5 dark:hover:text-gray-400 hover:text-blue-700">
              Blog
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center group px-2 py-0.5 dark:hover:text-gray-400 hover:text-amber-300">
              About
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-2 py-0.5 dark:hover:text-gray-400 hover:text-green-700">
              Contact
            </a>
          </li>
          <li>
            <hr class="w-0.5 h-5 border-none bg-gray-100 dark:bg-gray-800">
          </li>
          <li v-if="!user">
            <NuxtLink to="/login" class="cursor-pointer  hover:text-gray-500 dark:hover:text-gray-400">
              Log In
            </NuxtLink>
          </li>
          <li v-if="!user">
            <NuxtLink to="/signup"
              class="">
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-3 py-1 text-center ">
                Sign Up
              </button>

            </NuxtLink>

          </li>
          <li v-if="user">
            <div class="flex items-center md:order-2">
              <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" :src="user.user_metadata.avatar_url" alt="user photo">
              </button>
              <!-- Dropdown menu -->
              <div class="z-50 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <div class="px-4 py-3">
                  <span class="block text-sm text-gray-900 dark:text-white">{{user.user_metadata.user_name}}</span>
                  <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{{user.user_metadata.email}}</span>
                </div>
                <ul class="py-1" aria-labelledby="user-menu-button">
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="" @click="signout"  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
              </div>
              <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>


  </header>
</template>



<script>
export default {
  name: "navbar"
}
</script>

<style scoped>
@media (min-width: 1280px) {
  .xl\:container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }
}
</style>