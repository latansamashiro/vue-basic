<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-3xl font-bold text-slate-600">Selamat Datang</h1>
    <div class="flex items-center justify-center mt-4 gap-2">
      <RouterLink
        to="/page-one"
        class="px-4 py-2 text-white bg-green-500 rounded cursor-pointer"
        >Hal. Satu</RouterLink
      >
      <RouterLink
        to="/page-two"
        class="px-4 py-2 text-white bg-green-500 rounded cursor-pointer"
        >Tugas #2</RouterLink
      >
      <RouterLink
        to="/page-three"
        class="px-4 py-2 text-white bg-blue-500 rounded cursor-pointer"
        >Tugas #3</RouterLink
      >
    </div>
  </div>
</template>
