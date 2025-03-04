<script setup>
import { ref } from "vue";
const inputText = ref("");
const isReadonly = ref(false);

const toggleReadonly = () => {
  isReadonly.value = !isReadonly.value;
};
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
          :readonly="isReadonly"
          class="px-4 py-2 w-1/3 text-slate-600 bg-slate-100 rounded outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan Nama"
        />
        <p class="text-md font-medium text-slate-600">Hasil: {{ inputText }}</p>
        <button
          class="px-4 py-2 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600"
          @click.prevent="toggleReadonly"
        >
          Toggle Readonly
        </button>
        <p class="text-md font-medium text-slate-600">Tugas:</p>
        <ol class="list-decimal">
          <li>
            <p class="flex items-center gap-2">
              Ketika mengetik di atas, tampilkan hasil nya secara dinamis, misal
              mengetikkan "Kucing", maka tampilkan "Kucing" sesuai dengan yang
              diketikkan.
              <span
                class="w-12 flex items-center justify-center px-2 py-1 bg-green-400 rounded text-slate-100"
                >OK</span
              >
            </p>
          </li>
          <li>
            <p class="flex items-center gap-2">
              Ketika klik tombol "Toggle Readonly" maka input element akan
              berganti menjadi readonly dan sebaliknya.
              <span
                class="w-12 flex items-center justify-center px-2 py-1"
                :class="isReadonly ? 'bg-green-400 text-slate-100' : 'bg-red-400 text-slate-100'"
              >
                {{ isReadonly ? "ON" : "OFF" }}
              </span>
            </p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
