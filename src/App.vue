<script setup>

  import { ref } from 'vue';

  import SocialMedia from './components/SocialMedia.vue';
  import Lenguage from './components/Language.vue';
  import Header from './components/Header.vue';
  import Form from './components/Form.vue';


  let lenguage = ref(false);

  const handleChangeSwitch = (e) => {
    lenguage.value = e.target.checked;
  }

</script>

<template>
  <div class="background-image1"></div>
  <div class="background-image2"></div>
  <div class="background-image3"></div>
  <div class="container mx-auto pt-16 z-10 relative">
    <div class="flex justify-between mx-10">
      <div class="text-4xl">
        <SocialMedia />
      </div>
      <div>
        <Lenguage
          :lenguage="lenguage"
          @change="handleChangeSwitch"
        />
      </div>
    </div>

    <div class=" max-w-screen-sm mx-auto ">
      <Header
        :lenguage="lenguage"
      />
      <Form
        :lenguage="lenguage"
      />
    </div>

  </div>
</template>
