<template>
  <div class="w-full max-w-xl min-w-[200px] relative">
    <div class="relative">
      <input
        type="email"
        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-300 rounded-3xl pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="검색"
        v-model="inputValue"
      />
      <button
        class="w-16 absolute right-0.5 top-0 h-9 rounded-r-3xl bg-gray-100 border border-transparent border-l-gray-300 text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-gray-200 focus:shadow-none hover:bg-gray-200 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <MagnifyingGlassIcon class="text-black w-6 h-6 ml-4" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const inputValue = ref<string>('')

watch(inputValue, () => {
  console.log(inputValue.value)
})
</script>
