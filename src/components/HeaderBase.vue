<script setup lang="ts">
import LogoIcon from "@/shared/icons/LogoIcon.vue";

const routes = [
  {
    to: "/",
    name: "Форма",
  },
  {
    to: "/preview",
    name: "Превью",
  },
];
</script>

<template>
  <header class="border-b-black-10 border-b">
    <div class="container flex items-center justify-between py-6">
      <LogoIcon />
      <nav class="flex gap-6">
        <RouterLink
          v-for="route in routes"
          :to="route.to"
          class="hover:text-black cursor-pointer text-gray transition-all"
        >
          {{ route.name }}
        </RouterLink>
      </nav>
      <LogoIcon class="invisible opacity-0" />
    </div>
  </header>
</template>

<style lang="css" scoped>
.router-link-exact-active {
  @apply text-black;
}
</style>
