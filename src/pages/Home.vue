<template>
  <div>
    <ul class="m-3 flex flex-wrap justify-center align-middle">
      <li class="flex-1 bg-red-800 text-white p-4 m-2">
        <router-link :to="{ name: 'eventsList' }">Listado eventos</router-link>
      </li>
      <li class="flex-1 bg-red-800 text-white p-4 m-2">
        <router-link :to="{ name: 'newEvent' }">Nuevo Evento</router-link>
      </li>
      <li class="flex-1 bg-red-800 text-white p-4 m-2">
        <router-link :to="{ name: 'newSpence' }">Nuevo Gasto</router-link>
      </li>
      <li class="flex-1 bg-red-800 text-white p-4 m-2">
        <router-link :to="{ name: 'inviteContact' }"
          >Nuevo Invitado</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>