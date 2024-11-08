<script setup lang="ts">
import FooterBase from "@/components/FooterBase.vue";
import HeaderBase from "@/components/HeaderBase.vue";
</script>

<template>
  <div class="flex h-screen flex-col">
    <HeaderBase />
    <main class="container mt-8 flex w-[800px] flex-grow flex-col items-center gap-8">
      <slot />
    </main>
    <FooterBase />
  </div>
</template>
