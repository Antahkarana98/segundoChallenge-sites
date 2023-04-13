<script setup>
  const props = defineProps({
    lenguage: Boolean
  });
</script>

<template>
  <div class="w-3/4 mx-auto text-center mt-8">

    <h2 v-if="props.lenguage" class="text-custom-gray text-2xl">Increase your income through your content on <strong>Page</strong></h2>
    <h2 v-else class="text-custom-gray text-2xl">Aumenta tus ingresos a través de tu contenido en <strong>Pagina</strong></h2>
    <div class="bg-purple-light mx-10 py-1 rounded-full mt-8 mb-12 flex">
      <div class="mx-auto py-1">
        <p class="text-3xl text-white">{{props.lenguage ? 'Sign up here' : 'Regístrate aquí'}} </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white bg-purple-dark rounded-full me-1 p-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
      </svg>
    </div>
  </div>



</template>
