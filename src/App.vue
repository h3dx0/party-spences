<template>
  <div class="container mx-auto">
    <nav class="bg-red-700 text-white">
      <ul class="flex">
        <li class="p-3">
          <router-link :to="{ name: 'eventsList' }"
            >Listado eventos</router-link
          >
        </li>
        <li class="p-3">
          <router-link :to="{ name: 'newEvent' }">Nuevo Evento</router-link>
        </li>
        <li class="p-3">
          <router-link :to="{ name: 'newSpence' }">Nuevo Gasto</router-link>
        </li>
        <li class="p-3">
          <router-link :to="{ name: 'inviteContact' }"
            >Nuevo Invitado</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
