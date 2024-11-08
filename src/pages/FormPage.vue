<script setup lang="ts">
import ChildrenInfo from "@/components/ChildrenInfo.vue";
import HeaderBase from "@/components/HeaderBase.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";
</script>

<template>
  <HeaderBase />
  <main class="container mt-8 flex w-[800px] flex-col items-center gap-8">
    <PersonalInfo />
    <ChildrenInfo />
  </main>
</template>
