<script setup>
  import SocialMedia from './components/SocialMedia.vue';
  import Lenguage from './components/Language.vue';
  import Header from './components/Header.vue';
  import Form from './components/Form.vue';
</script>

<template>
  <div class="container mx-auto">

    <div class="mt-5 flex justify-between mx-10">
      <div class="text-4xl">
        <SocialMedia />
      </div>
      <div>
        <Lenguage />
      </div>
    </div>

    <div class="max-w-xl mx-auto">
      <Header />
      <Form />
    </div>

  </div>
</template>
