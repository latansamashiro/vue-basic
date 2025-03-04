<script setup>
  import { ref } from 'vue'

  const inputText = ref("")
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div
      class="container mx-auto my-4 flex flex-col items-center justify-center p-4"
    >
      <h1 class="text-2xl font-bold text-slate-600">Tugas #2</h1>
      <div class="flex items-center justify-center mt-4 flex-col gap-4">
        <input
          type="text"
          v-model="inputText"
          class="px-4 py-2 w-1/3 text-slate-600 bg-slate-100 rounded outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan Nama"
        />
        <p class="text-md font-medium text-slate-600">Hasil: {{ inputText }}</p>
        <p class="text-md font-medium text-slate-600">
          Tugas: Ketika mengetik di atas, tampilkan hasil nya secara dinamis,
          misal mengetikkan "Kucing", maka tampilkan "Kucing" sesuai dengan yang
          diketikkan.
        </p>
      </div>
    </div>
  </div>
</template>
