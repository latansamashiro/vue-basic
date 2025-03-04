<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div
      class="container mx-auto my-4 flex flex-col items-center justify-center p-4"
    >
      <h1 class="text-2xl font-bold text-slate-600">Latihan #3</h1>
      <div class="w-2/3 text-center my-4">
        <p class="flex items-center gap-2">
          Ketika mengetikkan nama dan alamat diatas lalu disubmit, maka
          tampilkan hasilnya pada tabel dan hasil sebelumnya tidak boleh hilang,
          namun terus bertambah dengan hasil submit yang baru.
        </p>
      </div>
      <div class="flex items-center justify-center mt-4 flex-col gap-4 w-2/3">
        <!-- Area Boleh Dimodifikasi / Diubah -->
        <input
          type="text"
          class="px-4 py-2 w-2/3 text-slate-600 bg-slate-100 rounded outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan Nama"
        />
        <input
          type="text"
          class="px-4 py-2 w-2/3 text-slate-600 bg-slate-100 rounded outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan Alamat"
        />
        <button
          class="px-4 py-2 w-2/3 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600"
          @click.prevent=""
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
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b border-gray-200">
                  <td class="px-6 py-4">Moch Diki Widianto</td>
                  <td class="px-6 py-4">Rangkasbitung</td>
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
