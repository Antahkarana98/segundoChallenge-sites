<template>
  <form class="">
    <div class="relative">
      <input
        type="text"
        placeholder="Correo Electrónico"
        name="email"
        id="email"
        class="ps-10"
      />
      <div class="absolute inset-y-0 left-0 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>

      </div>
    </div>

      <input
        type="date"
        name="date"
        id="date"
      />

      <div class="relative">
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          id="password"
          class="ps-10"
        />

        <div class="absolute inset-y-0 left-0 flex items-center">
          <img src="../assets/NicePng_password-icon-png_2073110.png" alt="" width="20" height="20">
        </div>
      </div>

      <div class="relative">
        <input
          type="password"
          placeholder="Repetir Contraseña"
          name="password2"
          id="password2"
          class="ps-10"
        />

        <div class="absolute inset-y-0 left-0 flex items-center">
          <img src="../assets/NicePng_password-icon-png_2073110.png" alt="" width="20" height="20">
        </div>
      </div>

      <p class="text-center text-custom-gray">Al completar el registro, usted está aceptando nuestras <strong>políticas
        de privacidad y términos de servicio</strong>, además confirma que cumple
        con la mayoria de edad de su lugar de residencia.</p>

      <button
        type="submit"
      >
        Regístrate
      </button>
  </form>
</template>
