<script setup lang="ts">
import HeaderBase from "@/components/HeaderBase.vue";
import useChildrenStore from "@/shared/stores/children";
import usePersonalStore from "@/shared/stores/personal";
const personalStore = usePersonalStore();
const childrenStore = useChildrenStore();
</script>

<template>
  <HeaderBase />
  <main class="container mt-8 flex w-[800px] flex-col items-center gap-8">
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
  </main>
</template>
