<script setup lang="ts">
import InputBase from "@/shared/ui/InputBase.vue";
</script>

<template>
  <div class="flex w-[800px] flex-col gap-3">
    <p class="mb-3 font-medium">Персональные данные</p>
    <InputBase
      input-label="Имя"
      type="text"
    />
    <InputBase
      input-label="Возраст"
      type="number"
    />
    <input
      type="text"
      inputmode="numeric"
      pattern="[0-9]*"
    />
  </div>
</template>
