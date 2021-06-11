<template>
  <h1>Listado Eventos</h1>
  <div class="flex">
    <table class="w-screen border-gray-500 table-auto">
      <thead class="border-red-700">
        <th>Nombre</th>
        <th>Fecha</th>
        <th>Lugar</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        <tr class="bg-red-100" v-for="event in listEvents" :key="event.id">
          <td>{{ event.name }}</td>
          <td>{{ event.date }}</td>
          <td>{{ event.place }}</td>

          <td class="p-2">
            <button class="btn bg-blue-700 text-white p-2 m-2">Detalle</button>
            <button class="btn bg-blue-700 text-white p-2 m-2">Editar</button>
            <button class="btn bg-red-700 text-white p-2 m-2">Cancelar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed, reactive, toRefs, onMounted } from "vue";
import { getListEvents } from "../services/events.js";
export default {
  setup() {
    const state = reactive({
      listEvents: [],
    });

    onMounted(() => {
      console.log("Mouting app");
      getListEvents().then((response) => {
        state.listEvents = response;
      });
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
table td,
table th {
  border: solid 1px black;
}
</style>