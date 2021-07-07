<template>
  <div class="container">
   
    <h1 class="text-2xl my-2">Entrar</h1>
    <div class="w-full flex flex-col p-2">
      <label for="">Correo electrónico</label>

      <input
        type="email"
        v-model="email"
        placeholder="usuario@email.com"
        class="border-2 border-gray-300 p-1 my-2"
      />
      <label for="">Contraseña</label>

      <input
        type="password"
        v-model="password"
        class="border-2 border-gray-300 p-1 my-2"
      />
      <button
        class="btn bg-blue-700 text-white p-2 my-2"
        @click="login()"
      >
        Entrar
      </button>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from "vue";
import useUser from "../services/users.js"
export default {
  setup() {
    const state = reactive({
      email: "",
      password: "",
    });

    const {user, isAuthenticated, login } = useUser()

      try {

        login(email, password)

      } catch (error) {
        console.log(error.message);
        alert("Ocurrio un error creando su cuenta");
      }
    return {
      ...toRefs(state),
      login,
    };
  },
};
</script>

<style>
</style>