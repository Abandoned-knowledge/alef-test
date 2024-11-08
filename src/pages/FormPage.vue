<script setup lang="ts">
import DefaultLayout from "@/app/layouts/DefaultLayout.vue";
import ChildrenInfo from "@/components/ChildrenInfo.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";
</script>

<template>
  <DefaultLayout>
    <PersonalInfo />
    <ChildrenInfo />
  </DefaultLayout>
</template>
