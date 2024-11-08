import { defineStore } from "pinia";
import { computed, ref } from "vue";

const usePersonalStore = defineStore("personal", () => {
  const name = ref<string>("Василий");
  const age = ref<number>(30);

  const getFullName = computed(() => `${name.value}, ${age.value} лет`);

  return { name, age, getFullName };
});

export default usePersonalStore;
