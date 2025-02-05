<template>
  <div class="flex justify-center items-center h-screen">
    <button @click="toggle" class="px-6 py-2 bg-blue-500 text-white rounded-lg">
      Mostrar Contenedor
    </button>
    <div
      class="fixed bottom-0 left-0 right-0 bg-gray-300 text-white p-6 transform transition-all duration-500 h-[80vh] border-8 border-solid border-black"
      role="dialog"
      aria-label="Detalles del curso"
      :class="{ 'translate-y-full': !isVisible }"
    >
      <div class="mx-auto flex flex-col items-center justify-center max-w-7xl px-6 lg:px-8 h-full">
        <header class="text-end w-full">
          <button @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <a
          class="underline text-black text-start"
          href="https://www.udemy.com/course/desarrollo-web-desde-cero-html5-css3-javascript/"
          >Curso</a
        >
        <img
          src="https://res.cloudinary.com/djfokdod6/image/upload/v1738473207/47fa9a16-5d9d-4db1-b8c9-fe3195fbe95f.png"
          alt=""
          class="h-96"
        />

        <!--
        <figure class="flex-1">

          <figcaption>
            <a
              href="https://www.udemy.com/course/desarrollo-web-desde-cero-html5-css3-javascript/"
            ></a>
          </figcaption>
        </figure>
        -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(false)

const toggle = () => {
  isVisible.value = !isVisible.value
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales si es necesario */
</style>
