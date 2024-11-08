import { defineStore } from "pinia";
import { ref } from "vue";

const usePersonalStore = defineStore("personal", () => {
  const name = ref<string>("Пустое");
  const age = ref<number>(0);

  return { name, age };
});

export default usePersonalStore;
