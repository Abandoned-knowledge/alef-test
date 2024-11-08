<script setup lang="ts">
interface Props {
  inputLabel: string;
  type: "text" | "number";
}
const { inputLabel, type } = defineProps<Props>();

function handleKeyDown(event: KeyboardEvent) {
  const key = event.key;
  if (isNaN(Number(event.key)) && key !== "Backspace") event.preventDefault();
}

const model = defineModel();
</script>

<template>
  <div class="input-box">
    <input
      v-if="type === 'number'"
      @keydown="handleKeyDown($event)"
      type="text"
      placeholder=""
      v-model="model"
    />
    <input
      v-else
      type="text"
      placeholder=""
      v-model="model"
    />
    <label>{{ inputLabel }}</label>
  </div>
</template>

<style lang="css" scoped>
.input-box {
  @apply relative;
  input {
    @apply w-full rounded border border-gray-light px-4 pb-1.5 pt-6 text-sm outline-1 placeholder:opacity-0;
    &:focus,
    &:not(:placeholder-shown) {
      + label {
        @apply -translate-y-full text-sm text-gray;
      }
    }
  }

  label {
    @apply pointer-events-none absolute bottom-1.5 left-4 font-normal transition-all;
  }
}
</style>
