<template>
  <div class="container">
    <div class="bg-green-600 text-white" v-if="showAlert">
      Invitado correctamente
    </div>
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
        <label for="spence-title">Seleccione contacto a invitar</label>
        <select
          name="contacts"
          id="contact"
          class="border-2 border-gray-300 p-1 my-2"
          v-model="contactSelected"
        >
          <option
            v-bind:value="contact.id"
            v-for="contact in contactsList"
            :key="contact.id"
          >
            {{ contact.name }}
          </option>
        </select>
      </div>
      <button
        class="btn bg-blue-700 text-white p-2 my-2"
        @click="saveContact()"
      >
        Invitar
      </button>
      <button class="border-2 border-red-300 bg-white-700 text-red-700 p-2">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs, onMounted } from "vue";
import {
  getListEvents,
  getContactsByUser,
  inviteContactToEvent,
} from "../services/events.js";
export default {
  setup() {
    const state = reactive({
      showAlert: false,
      eventsList: [],
      eventSelected: null,
      contactsList: [],
      contactSelected: null,
    });

    onMounted(() => {
      console.log("Mouting app");
      getListEvents().then((response) => {
        state.eventsList = response;
      });
      getContactsByUser(1).then((response) => {
        state.contactsList = response;
      });
    });

    const saveContact = async () => {
      state.showAlert = true;
      const data = {
        user_contact_id: state.contactSelected,
        event_id: state.eventSelected,
      };
      await inviteContactToEvent(data);
      state.showAlert = true;
    };
    return {
      ...toRefs(state),
      saveContact,
    };
  },
};
</script>

<style>
</style>