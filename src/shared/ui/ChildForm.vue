<script setup lang="ts">
import InputBase from "./InputBase.vue";
</script>

<template>
  <article class="flex w-full items-center justify-between gap-4">
    <InputBase
      class="w-full"
      type="text"
      input-label="Имя"
    />
    <InputBase
      class="w-full"
      type="number"
      input-label="Возраст"
    />

    <button class="text-primary cursor-pointer text-sm">Удалить</button>
  </article>
</template>
