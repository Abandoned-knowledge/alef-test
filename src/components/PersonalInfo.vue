<script setup lang="ts">
import usePersonalStore from "@/shared/stores/personal";
import InputBase from "@/shared/ui/InputBase.vue";

const personalStore = usePersonalStore();
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <p class="mb-3 font-medium">Персональные данные</p>
    <InputBase
      input-label="Имя"
      type="text"
      v-model="personalStore.name"
    />
    <InputBase
      input-label="Возраст"
      type="number"
      v-model="personalStore.age"
    />
  </div>
</template>
