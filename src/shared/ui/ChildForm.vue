<script setup lang="ts">
import useChildrenStore from "../stores/children";
import InputBase from "./InputBase.vue";

const { index } = defineProps<{ index: number }>();

const childrenStore = useChildrenStore();

const childName = defineModel<string>("name");
const childAge = defineModel<number>("age");
</script>

<template>
  <article class="flex w-full items-center justify-between gap-4">
    <InputBase
      class="w-full"
      type="text"
      input-label="Имя"
      v-model="childName"
    />
    <InputBase
      class="w-full"
      type="number"
      input-label="Возраст"
      v-model="childAge"
    />

    <button
      @click="childrenStore.deleteChild(index)"
      class="cursor-pointer text-sm text-primary"
    >
      Удалить
    </button>
  </article>
</template>
