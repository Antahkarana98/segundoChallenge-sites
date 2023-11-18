<script setup>
  import { ref, reactive, watch } from 'vue'

  const datePlaceholder = ref('Selecciona una fecha')
  const errorName = ref(0)
  const errorEmail = ref(0)
  const errorPassword = ref(0)
  const errorPassword2 = ref(0)
  const errorDate = ref(0)


  let user = reactive({
    name: '',
    email: '',
    password: '',
    password2: '',
    date: '',
  })

  const props = defineProps({
    lenguage: Boolean
  });

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Email
    password: /^.{4,16}$/, // 4 a 12 digitos.
  }

  const validarFormulario = (e) => {
    switch (e.target.name) {

      case "email":
        if (expressions.email.test(e.target.value)) {
          user = {
            ...user,
            email: e.target.value.trim(),
          };
          errorEmail.value = 1;
        }else{
          errorEmail.value = 0;
        }

        break;

      case "name":
        if (expressions.name.test(e.target.value)) {
          user = {
            ...user,
            name: e.target.value.trim(),
          };
          errorName.value = 1;
        }else{
          errorName.value = 0;
        }
        break;

      case "date":

        let formatDate = e.target.value.split('-');
        const year = formatDate[0];
        const month = formatDate[1];
        const day = formatDate[2];
        const age = 18;
        const myDate = new Date();
        myDate.setFullYear(year, month - 1, day);

        const today = new Date();
        today.setFullYear(today.getFullYear() - age);

        if ((today - myDate) < 0) {
          errorDate.value = 1;
          user = {
            ...user,
            date: e.target.value,
          };
        }else{
          errorDate.value = 0;
        }
        break;

      case "password":
        if(expressions.password.test(e.target.value)){
          errorPassword.value = 1;
          user = {
          ...user,
          password: e.target.value.trim(),
          };
        }else{
          errorPassword.value = 0;
        }
        break;

      case "password2":
        if(e.target.value === user.password){
          errorPassword2.value = 1;
          user = {
          ...user,
          password2: e.target.value.trim(),
          };
        }else{
          errorPassword2.value = 0;
        }
        break;

      default:
        break;
    }
  }

</script>

<template>
  <form class="">
    <div class="relative mb-4 flex justify-center">
      <input
        type="text"
        :placeholder="props.lenguage ? 'Correo Electrónico' : 'Email'"
        name="email"
        id="email"
        :class="errorEmail === 1 ? 'w-11/12 sm:w-full py-4 placeholder-custom-gray rounded-full ps-24 border-4 border-green-400 focus:shadow-xl focus:outline-none' : 'w-11/12 sm:w-full py-4 placeholder-custom-gray rounded-full ps-24 focus:shadow-xl focus:outline-none'"
        :value="user.email"
        @input="validarFormulario"
      />
      <div class="absolute inset-y-0 left-0 flex items-center ps-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-custom-gray">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>

      </div>
    </div>

    <div class="relative mb-4 flex justify-center">
      <input
        type="text"
        :placeholder="props.lenguage ? 'Nombre Completo' : 'Full Name'"
        name="name"
        id="name"
        :class="errorName === 1 ? 'w-11/12 sm:w-full py-4 placeholder-custom-gray rounded-full ps-24 border-4 border-green-400 focus:shadow-xl focus:outline-none' : 'w-11/12 sm:w-full py-4 placeholder-custom-gray rounded-full ps-24 focus:shadow-xl focus:outline-none'"
        :value="user.name"
        @input="validarFormulario"
      />

      <div class="absolute inset-y-0 left-0 flex items-center ps-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-custom-gray">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

    </div>

    <div class="relative mb-4 flex justify-center">
      <input
        type="date"
        :placeholder="datePlaceholder"
        name="date"
        id="date"
        :class="errorDate === 1 ? 'w-11/12 sm:w-full py-4 text-custom-gray rounded-full ps-24 border-4 border-green-400 focus:shadow-xl focus:outline-none' : 'w-11/12 sm:w-full py-4 text-custom-gray  rounded-full ps-24 focus:shadow-xl focus:outline-none'"
        :value="user.date"
        @input="validarFormulario"
      />

      <div class="absolute inset-y-0 left-0 flex items-center ps-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-custom-gray">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      </div>
    </div>


    <div class="relative mb-4 flex justify-center">
      <input
        type="password"
        :placeholder="props.lenguage ? 'Contraseña' : 'Password'"
        name="password"
        id="password"
        :class="errorPassword === 1 ? 'w-11/12 sm:w-full py-5 placeholder-custom-gray rounded-full ps-24 border-4 border-green-400 focus:shadow-xl focus:outline-none' : 'w-11/12 sm:w-full py-4 placeholder-custom-gray rounded-full ps-24 focus:shadow-xl focus:outline-none'"
        :value="user.password"
        @input="validarFormulario"
      />

      <div class="absolute inset-y-0 left-0 flex items-center ps-12">
        <img src="../assets/candado2.png" alt="" width="19" height="19" />
      </div>
    </div>

    <div class="relative mb-4 flex justify-center">
      <input
        type="password"
        :placeholder="props.lenguage ? 'Repetir Contraseña' : 'Repite Password'"
        name="password2"
        id="password2"
        :class="errorPassword2 === 1 ? 'w-11/12 sm:w-full  py-5 placeholder-custom-gray rounded-full ps-24 border-4 border-green-400 focus:shadow-xl focus:outline-none' : 'w-11/12 sm:w-full py-4 placeholder-custom-gray rounded-full ps-24 focus:shadow-xl focus:outline-none'"
        :value="user.password2"
        @input="validarFormulario"
      />

      <div class="absolute inset-y-0 left-0 flex items-center ps-12">
        <img src="../assets/candado2.png" alt="" width="19" height="19" />
      </div>
    </div>

    <p v-if="props.lenguage" class="text-center text-custom-gray mb-8">Al completar el registro, usted está aceptando nuestras <span class="text-black font-semibold">políticas
      de privacidad y términos de servicio</span>, además confirma que cumple
      con la mayoria de edad de su lugar de residencia.
    </p>

    <p v-else class="text-center  text-custom-gray mb-8">By completing the registration, you are accepting our <span class="text-black font-semibold ">privacy policies and terms of service</span>, also
      confirming that you are of legal age in your place of residence.
    </p>

    <div class="flex justify-center">
      <button
        type="submit"
        class="w-3/4 py-4 mb-3 text-white bg-black rounded-full text-2xl hover:shadow-xl hover:bg-purple-light transition-all sm:w-full"
      >
        {{ props.lenguage ? 'Regístrate' : 'Sign Up'}}
      </button>

    </div>
    </form>

</template>
