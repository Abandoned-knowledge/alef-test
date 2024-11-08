<script setup lang="ts">
import PlusIcon from "@/shared/ui/PlusIcon.vue";
import ChildForm from "@/shared/ui/ChildForm.vue";
import useChildrenStore from "@/shared/stores/children";
import { computed } from "vue";

const isButtonShow = computed(() => childrenStore.children.length < 5);
const hasChildren = computed(() => childrenStore.children.length > 0);

const childrenStore = useChildrenStore();
</script>

<template>
  <div class="w-full">
    <header class="flex items-center justify-between">
      <p class="w-full font-medium">Дети (макс. 5)</p>
      <button
        v-if="isButtonShow"
        class="button button-outline gap-1 text-nowrap"
        @click="childrenStore.addNewChild()"
      >
        <PlusIcon />
        Добавить ребенка
      </button>
    </header>

    <div class="mt-3 flex w-full flex-col gap-3">
      <p
        class="text-xl font-medium"
        v-if="!hasChildren"
      >
        Нет детей
      </p>
      <ChildForm
        v-for="(child, index) in childrenStore.children"
        :key="index"
        v-model:name="child.name"
        v-model:age="child.age"
        :index="index"
      />
    </div>
  </div>
</template>
