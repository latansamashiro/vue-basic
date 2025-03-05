<script setup>
import { ref } from "vue";
const name = ref("");
const address = ref("");
const submittedData = ref([]);

const submitForm = () => {
  if (name.value.trim() && address.value.trim()) {
    submittedData.value.push({
      name: name.value,
      address: address.value,
    });
    name.value = "";
    address.value = "";
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div
      class="container mx-auto my-4 flex flex-col items-center justify-center p-4"
    >
      <h1 class="text-2xl font-bold text-slate-600">Latihan #3</h1>
      <div class="w-2/3 my-4">
        <p class="text-center">
          Ketika mengetikkan nama dan alamat diatas lalu disubmit, maka
          tampilkan hasilnya pada tabel dan hasil sebelumnya tidak boleh hilang,
          namun terus bertambah dengan hasil submit yang baru. [<a
            class="text-blue-500 hover:underline"
            target="_blank"
            href="https://cloud.unilam.ac.id/s/nw9oDMEzNH92jzz"
          >
            Lihat Hasil </a
          >]
        </p>
      </div>
      <div class="flex items-center justify-center mt-4 flex-col gap-4 w-2/3">
        <!-- Area Boleh Dimodifikasi / Diubah -->
        <input
          type="text"
          v-model="name"
          class="px-4 py-2 w-2/3 text-slate-600 bg-slate-100 rounded outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan Nama"
        />
        <input
          type="text"
          v-model="address"
          class="px-4 py-2 w-2/3 text-slate-600 bg-slate-100 rounded outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan Alamat"
        />
        <button
          class="px-4 py-2 w-2/3 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600"
          @click.prevent="submitForm"
        >
          Submit
        </button>
        <div class="w-full">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                  <th scope="col" class="px-6 py-3">Nama</th>
                  <th scope="col" class="px-6 py-3">Alamat</th>
                  <th scope="col" class="px-6 py-3">Opsi</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b border-gray-200">
                  <td class="px-6 py-4">Moch Diki Widianto</td>
                  <td class="px-6 py-4">Rangkasbitung</td>
                  <td class="px-6 py-4">
                    <button
                      class="px-2 py-1 text-sm text-white bg-red-500 rounded cursor-pointer hover:bg-red-600"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
                <tr
                  v-for="(data, index) in submittedData"
                  :key="index"
                  class="bg-white border-b border-gray-200"
                >
                  <td class="px-6 py-4">{{ data.name }}</td>
                  <td class="px-6 py-4">{{ data.address }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- Area Boleh Dimodifikasi / Diubah -->
      </div>
    </div>
  </div>
</template>
