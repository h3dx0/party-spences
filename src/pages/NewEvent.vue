<template>
  <div class="container">
    <form action="" class="m-2 flex flex-col">
      <button class="btn bg-blue-700 text-white p-2 my-2">Guardar</button>
      <button class="border-2 border-red-300 bg-white-700 text-red-700 p-2">
        Cancelar
      </button>
    </form>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({});
  },
};
</script>


<style>
</style>