<script setup lang="ts">
import PlusIcon from "@/shared/ui/PlusIcon.vue";
</script>

<template>
  <div class="w-full">
    <header class="flex items-center justify-between">
      <p class="font-medium">Дети (макс. 5)</p>
      <button class="button button-outline gap-1">
        <PlusIcon />
        Добавить ребенка
      </button>
    </header>
  </div>
</template>
