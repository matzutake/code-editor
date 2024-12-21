<template>
  <div class="custom-select" ref="selectRef">
    <div class="select-trigger" @click="toggleDropdown">
      <span class="selected-option">{{ selectedOption || placeholder }}</span>
      <span class="arrow">&#9662;</span>
    </div>
    <ul v-if="isOpen" class="dropdown">
      <li
        v-for="(option, index) in options"
        :key="index"
        :class="{ 'is-selected': option === selectedOption }"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'StyledSelect',
  props: {
    options: {
      type: Array as () => string[],
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isOpen = ref(false)
    const selectedOption = computed({
      get: () => props.modelValue,
      set: (value: string) => emit('update:modelValue', value),
    })
    const selectRef = ref<HTMLDivElement | null>(null)

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value
    }

    const selectOption = (option: string) => {
      selectedOption.value = option
      isOpen.value = false
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
        isOpen.value = false
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      isOpen,
      selectedOption,
      toggleDropdown,
      selectOption,
      selectRef,
    }
  },
})
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 200px;
  font-family: Arial, sans-serif;
}

.select-trigger {
  background-color: #3d3d3d;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.3s;
}

.select-trigger:hover {
  border-color: #888888;
}

.dropdown {
  position: absolute;
  list-style-type: none;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #3d3d3d;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-top: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown li {
  padding: 8px 12px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.dropdown li:hover {
  background-color: #35502c;
  color: #ffffff;
}

.dropdown .is-selected {
  font-weight: bold;
  background-color: #35502c;
}

.arrow {
  font-size: 2rem;
  color: #666666;
}
</style>
