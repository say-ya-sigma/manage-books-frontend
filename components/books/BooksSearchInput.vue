<template>
  <div class="block">
    <label :for="id" class="text-gray-700 font-bold">{{ label }}</label>
    <div class="relative">
      <input
        :id="id"
        v-model="query"
        type="text"
        :placeholder="placeholder"
        class="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  label: string;
  placeholder: string;
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
});

const emit = defineEmits(["update:modelValue"]);

const query = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
