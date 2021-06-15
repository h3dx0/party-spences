<template>
  <div>
    <h3>Gastos evento:</h3>
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
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { getSpencesByEvents } from "../services/events.js";
import { useRoute } from "vue-router";
export default {
  setup() {
    const state = reactive({
      listSpences: [],
    });
    const route = useRoute();
    onMounted(() => {
      console.log("Mouting app");
      getSpencesByEvents(route.params.eventId).then((response) => {
        state.listSpences = response;
      });
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>