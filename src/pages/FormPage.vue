<script setup lang="ts">
import ChildrenInfo from "@/components/ChildrenInfo.vue";
import HeaderBase from "@/components/HeaderBase.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";
import ChildForm from "@/shared/ui/ChildForm.vue";
</script>

<template>
  <HeaderBase />
  <main class="container mt-8 flex w-[800px] flex-col items-center">
    <PersonalInfo />
    <ChildrenInfo />
    <ChildForm />
  </main>
</template>
