<template>
  <div class="p-2">
    <h1 class="text-lg">Gastos evento:</h1>
    <div class="flex">
      <router-link
        class="flex-auto btn bg-blue-700 text-white p-2 my-2"
        :to="{ name: 'newSpence' }"
        >Nuevo Gasto</router-link
      >
    </div>
    <table class="w-screen border-gray-500 table-auto">
      <thead class="border-red-700">
        <th>Descripcion</th>
        <th>Cantidad</th>
        <th>Por</th>
        <th>Acciones</th>
      </thead>

      <tbody>
        <tr class="bg-red-100" v-for="spence in listSpences" :key="spence.id">
          <td>{{ spence.description }}</td>
          <td>${{ spence.amount }}</td>
          <td>{{ spence.owner }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div>
      <span><strong>TOTAL:</strong></span>
      <span>${{ total }}</span>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, computed } from "vue";
import { getSpencesByEvents } from "../services/events.js";
import { useRoute } from "vue-router";
export default {
  setup() {
    const state = reactive({
      listSpences: [],
    });
    const route = useRoute();
    const total = computed(() => {
      let subTotal = 0;
      state.listSpences.map((spence) => (subTotal += spence.amount));
      return subTotal;
    });
    onMounted(() => {
      console.log("Mouting app");
      getSpencesByEvents(route.params.eventId).then((response) => {
        state.listSpences = response;
      });
    });
    return {
      ...toRefs(state),
      total,
    };
  },
};
</script>

<style>
</style>