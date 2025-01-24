<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isModalOpen = ref(true);

onMounted(() => {
  if (isModalOpen.value) {
    document.body.classList.add('overflow-hidden');
  }
});

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
});

const closeModal = () => {
  isModalOpen.value = false;
  document.body.classList.remove('overflow-hidden');
};
</script>

<template>
  <!-- Modal -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <!-- Contenido del modal -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Modal Abierta
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Este modal está abierto por defecto. Puedes agregar cualquier contenido aquí.
      </p>
      <div class="flex justify-end">
        <button
          class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          @click="closeModal"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
