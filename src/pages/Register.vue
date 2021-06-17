<template>
  <div class="container">
    <div class="bg-green-600 text-white" v-if="showAlert">
      Cuenta creada correctamente
    </div>
    <h1 class="text-2xl my-2">Cree su cuenta</h1>
    <div class="w-full flex flex-col p-2">
      <label for="">Agregue su correo electrónico</label>

      <input
        type="email"
        v-model="email"
        placeholder="usuario@email.com"
        class="border-2 border-gray-300 p-1 my-2"
      />
      <label for="">Agregue una contraseña</label>

      <input
        type="password"
        v-model="password"
        class="border-2 border-gray-300 p-1 my-2"
      />
      <button
        class="btn bg-blue-700 text-white p-2 my-2"
        @click="registerAcccount()"
      >
        Crear Cuenta
      </button>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from "vue";
import axios from "axios";
export default {
  setup() {
    const state = reactive({
      showAlert: false,
      email: "",
      password: "",
    });
    const registerAcccount = async () => {
      console.log("Register account");
      try {
        await axios.post("http://localhost:3001/register", {
          email: state.email,
          password: state.password,
        });
        state.showAlert = true;
      } catch (error) {
        console.log(error.message);
        alert("Ocurrio un error creando su cuenta");
      }
    };
    return {
      ...toRefs(state),
      registerAcccount,
    };
  },
};
</script>

<style>
</style>