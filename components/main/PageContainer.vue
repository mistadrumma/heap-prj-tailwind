<template>
    <main class="flex flex-col flex-1 ">

        <div class="container flex flex-col md:grid md:space-y-0 w-full
	md:grid-cols-12
	md:flex-1 md:grid-rows-full
		space-y-4
		md:gap-6
		max-w-full bg-gradient-to-b from-indigo-100  via-purple-100 to-pink-100 dark:from-gray-900 dark:to-gray-925
	">
    <section class="pt-16 border-gray-100 col-span-full flex-1 pb-16 md:pb-0">
            <slot></slot>
        </section>
        </div>
   
</main>
</template>