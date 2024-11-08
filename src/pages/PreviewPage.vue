<script setup lang="ts">
import DefaultLayout from "@/app/layouts/DefaultLayout.vue";
import useChildrenStore from "@/shared/stores/children";
import usePersonalStore from "@/shared/stores/personal";
const personalStore = usePersonalStore();
const childrenStore = useChildrenStore();
</script>

<template>
  <DefaultLayout>
    <div class="w-full">
      <p>Персональные данные</p>
      <p class="mt-5 font-bold">{{ personalStore.getFullName }}</p>
    </div>

    <div class="flex w-full flex-col gap-5">
      <p>Дети</p>
      <div
        class="w-fit rounded bg-gray-light px-5 py-3"
        v-for="child in childrenStore.children"
      >
        <p class="font-bold">{{ child.name }}, {{ child.age }} лет</p>
      </div>
    </div>
  </DefaultLayout>
</template>
