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
</script>

<template>
  <div class="input-box">
    <input
      v-if="type === 'number'"
      @keydown="handleKeyDown($event)"
      type="text"
      placeholder=""
    />
    <input
      v-else
      type="text"
      placeholder=""
    />
    <label>{{ inputLabel }}</label>
  </div>
</template>

<style lang="css" scoped>
.input-box {
  @apply relative;
  input {
    @apply border-gray-light w-full rounded border px-4 pb-1.5 pt-6 text-sm outline-1 placeholder:opacity-0;
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
