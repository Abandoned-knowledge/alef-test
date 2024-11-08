import { defineStore } from "pinia";
import { ref } from "vue";

interface Child {
  name: string;
  age: number;
}

const useChildrenStore = defineStore("children", () => {
  const children = ref<Child[]>([
    {
      name: "Петя",
      age: 12,
    },
    {
      name: "Витя",
      age: 8,
    },
  ]);

  function addNewChild() {
    children.value.push({
      name: "Имя",
      age: 0,
    });
  }

  const deleteChild = (index: number) => children.value.splice(index, 1);

  return { children, addNewChild, deleteChild };
});

export default useChildrenStore;
