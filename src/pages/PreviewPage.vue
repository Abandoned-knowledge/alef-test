<script setup lang="ts">
import DefaultLayout from "@/app/layouts/DefaultLayout.vue";
import useChildrenStore from "@/shared/stores/children";
import usePersonalStore from "@/shared/stores/personal";
import { computed } from "vue";
const personalStore = usePersonalStore();
const childrenStore = useChildrenStore();

const hasChildren = computed(() => childrenStore.children.length > 0);
</script>

<template>
  <DefaultLayout>
    <div class="w-full">
      <p>Персональные данные</p>
      <p class="mt-5 font-bold">{{ personalStore.getFullName }}</p>
    </div>

    <div class="flex w-full flex-col gap-5">
      <p>Дети</p>
      <p
        v-if="!hasChildren"
        class="text-xl font-medium"
      >
        Нет детей
      </p>
      <template v-else>
        <div
          class="w-fit rounded bg-gray-light px-5 py-3"
          v-for="child in childrenStore.children"
        >
          <p class="font-bold">{{ child.name }}, {{ child.age }} лет</p>
        </div>
      </template>
    </div>
  </DefaultLayout>
</template>
