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
          <event :event="event" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed, reactive, toRefs, onMounted } from "vue";
import { getListEvents } from "../services/events.js";
import Event from "../components/Event.vue";

export default {
  components: {
    Event,
  },
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