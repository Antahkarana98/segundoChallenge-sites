<script setup>

  const props = defineProps({
    lenguage: Boolean
  });


</script>


<template>
  <div class="flex">
    <p class="my-auto me-3">{{props.lenguage ? 'Inglés' : 'English'}}</p>
      <label class="relative inline-flex items-center cursor-pointer">
        <input
        type="checkbox"
        value=""
        class="sr-only peer"
        >
        <div class="w-[4.5rem] h-9 bg-gray-200 peer-focus:outline-none rounded-full peer
        dark:bg-black peer-checked:after:translate-x-full
        peer-checked:after:border-white after:content-[''] after:absolute after:top-1 ps-1
        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7
        after:transition-all dark:border-gray-600 peer-checked:bg-purple-light"></div>
      </label>
      <p class="my-auto ms-3">{{props.lenguage ? 'Español' : 'Spanish'}}</p>
  </div>


</template>
