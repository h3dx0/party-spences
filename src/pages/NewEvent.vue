<template>
  <div class="container">
    <h1 class="text-2xl my-2">Crear evento</h1>
    <div class="bg-green-600 text-white" v-if="eventSaved">
      Evento creado correctamente
    </div>
    <div class="m-2 flex flex-col">
      <div class="flex flex-col">
        <div class="flex flex-col">
          <label for="event-title">Titulo</label>
          <input
            type="text"
            name="event-title"
            placeholder="Nombre evento"
            class="border-2 border-gray-300 p-1 my-2"
            v-model="event.name"
          />
        </div>
        <div class="flex flex-col">
          <label for="event-title">Fecha</label>
          <input
            type="date"
            name="event-date"
            placeholder="Fecha evento"
            class="border-2 border-gray-300 p-1 my-2"
            v-model="event.date"
          />
        </div>
        <div class="flex flex-col">
          <label for="event-place">Lugar</label>
          <input
            type="text"
            name="event-place"
            placeholder="Lugar evento"
            class="border-2 border-gray-300 p-1 my-2"
            v-model="event.place"
          />
        </div>
      </div>
      <button class="btn bg-blue-700 text-white p-2 my-2" @click="saveEvent">
        Guardar
      </button>
      <button class="border-2 border-red-300 bg-white-700 text-red-700 p-2">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      eventSaved: false,
      event: {
        name: "",
        date: null,
        place: "",
      },
    });
    const saveEvent = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/events",
          state.event
        );
        console.log("Event created", response.data.status);
        state.eventSaved = true;
      } catch (error) {
        console.log(error);
        alert("Ocurrió un error cargando los eventos");
      }
    };
    return {
      ...toRefs(state),
      saveEvent,
    };
  },
};
</script>


<style>
</style>