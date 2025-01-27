<template>
  <div class="relative w-full px-24 xl:px-48 mt-8">
    <div class="flex overflow-hidden">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="flex-none w-full h-full text-white flex items-center justify-center transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div>
          <p class="text-primary text-center">{{ project.category }}</p>
          <p
            class="text-3xl font-semibold block text-center cursor-pointer"
            @click="goToProject(index)"
          >
            {{ project.title }}
          </p>

          <div class="space-x-4 mt-3 text-center">
            <div
              v-for="(tech, index) in project.technologiesFb"
              :key="index"
              class="border border-primary bg-blue-950 inline-block px-2 py-1 font-bold rounded-lg"
            >
              {{ tech }}
            </div>
          </div>
          <div
            class="mt-4 relative cursor-pointer"
            @click="goToProject(index)"
            @mouseenter="isVisible = true"
            @mouseleave="isVisible = false"
          >
            <div
              :class="isVisible ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 backdrop-blur-none'"
              class="absolute w-full h-full bg-black bg-opacity-40 rounded-lg border border-primary flex justify-center items-center transition-opacity transition-backdrop duration-300 ease-in-out"
            >
              <div class="flex flex-col text-center gap-3">
                <span class="max-w-xl font-thin">{{ project.shortDescription }}</span>
                <div
                  class="font-bold text-lg flex text-center justify-center items-center gap-3 hover:stroke-primary hover:text-primary transition-all duration-300 ease-in-out"
                >
                  Ver proyecto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <img
              :src="project.images[0].url"
              :alt="project.images[0].description"
              class="w-full rounded-lg shadow-md border border-primary cursor-pointer"
            />
          </div>
        </div>
      </div>
      <button
        @click="prev"
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-950 border border-primary stroke-primary text-white p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          class="size-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        @click="next"
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-950 border border-primary stroke-primary p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          class="size-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>

    <!-- Botones de navegación -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import projectsData from '@/assets/data/projectsData.json'
import { useRouter } from 'vue-router'

const isVisible = ref(false)

const router = useRouter()
const goToProject = (projectId) => {
  router.push(`/portfolio#project-${projectId}`)
}

// Aquí accedemos directamente a los proyectos del JSON, sin usar Object.entries
const projects = Object.values(projectsData)

const currentIndex = ref(0)

// Función para avanzar al siguiente proyecto
const next = () => {
  if (currentIndex.value < projects.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

// Función para retroceder al proyecto anterior
const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = projects.length - 1
  }
}
</script>

<style scoped>
/* Puedes agregar más estilos aquí si es necesario */
</style>
