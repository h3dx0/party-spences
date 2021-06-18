<template>
  <td>{{ event.name }}</td>
  <td>{{ event.date }}</td>
  <td>{{ event.place }}</td>

  <td class="p-2">
    <button class="btn bg-blue-700 text-white p-2 m-2">Detalle</button>
    <button class="btn bg-blue-700 text-white p-2 m-2">Editar</button>
    <router-link
      :to="{ name: 'listSpences', params: { eventId: event.id } }"
      class="btn bg-blue-700 text-white p-2 m-2"
      >Gastos</router-link
    >
    <button class="btn bg-red-700 text-white p-2 m-2">Cancelar</button>
  </td>
</template>

<script>
import { toRefs } from "vue";
export default {
  props: ["event"],
  setup(props) {
    const { event } = toRefs(props);
    return { event };
  },
};
</script>

<style>
</style>