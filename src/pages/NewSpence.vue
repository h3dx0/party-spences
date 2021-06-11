<template>
  <div class="container">
    <div class="m-2 flex flex-col">
      <div class="flex flex-col">
        <label for="event">Seleccione evento</label>
        <select
          name="event"
          id="event"
          class="border-2 border-gray-300 p-1 my-2"
          v-model="eventSelected"
        >
          <option
            v-bind:value="event.id"
            v-for="event in eventsList"
            :key="event.id"
          >
            {{ event.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col">
        <label for="spence-title">Gasto</label>
        <input
          type="text"
          name="spence-title"
          placeholder="Nombre gasto"
          class="border-2 border-gray-300 p-1 my-2"
          v-model="spenceTitle"
        />
        <input
          type="number"
          name="spence-amount"
          class="border-2 border-gray-300 p-1 my-2"
          placeholder="Costo"
          v-model="spenceAmount"
        />
      </div>
      <p>Evento seleccionado: {{ eventSelected }}</p>
      <button class="btn bg-blue-700 text-white p-2 my-2" @click="addSpence()">
        Guardar
      </button>
      <button class="border-2 border-red-300 bg-white-700 text-red-700 p-2">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs, onMounted } from "vue";
import { getListEvents, saveEventSpence } from "../services/events.js";

export default {
  setup() {
    const state = reactive({
      eventsList: [],
      eventSelected: null,
      spenceTitle: "",
      spenceAmount: 0.0,
    });

    onMounted(() => {
      console.log("Mouting app");
      getListEvents().then((response) => {
        state.eventsList = response;
      });
    });

    const addSpence = async () => {
      const spence = {
        description: state.spenceTitle,
        amount: state.spenceAmount,
        eventId: state.eventSelected,
        owner: 1, 
      };
      await saveEventSpence(spence);
    };
    return {
      ...toRefs(state),
      addSpence,
    };
  },
};
</script>

<style>
</style>