<script setup>
  import SocialMedia from './components/SocialMedia.vue';
  import Lenguage from './components/Language.vue';
  import Header from './components/Header.vue';
</script>

<template>
  <div>

    <div class="mt-5 flex justify-between mx-10">
      <div class="text-4xl">
        <SocialMedia />
      </div>
      <div>
        <Lenguage />
      </div>
    </div>

    <div>
      <Header />
    </div>

  </div>
</template>
