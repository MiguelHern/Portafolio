<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="text-white flex flex-col items-center justify-center"
      data-aos="fade-up"
      :data-aos-delay="100 * index"
    >
      <div class="relative h-full">
        <div
          :class="
            isVisible === index ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 backdrop-blur-none'
          "
          @click="goToProject(index)"
          @mouseenter="isVisible = index"
          @mouseleave="isVisible = null"
          class="absolute cursor-pointer px-5 w-full h-full bg-black bg-opacity-30 rounded-lg border border-primary flex justify-center items-center transition-opacity transition-backdrop duration-300 ease-in-out"
        >
          <div class="flex flex-col text-center gap-3">
            <span class="max-w-xl font-thin">{{ project.shortDescription }}</span>
            <div
              class="font-bold text-lg flex text-center justify-center items-center gap-3 transition-all duration-300 ease-in-out"
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
          class="w-full h-full object rounded-lg shadow-md cursor-pointer"
        />
      </div>
      <div class="mt-3 w-full">
        <span class="text-xl mb-1">
          {{ project.category }}
        </span>

        <div class="flex gap-3">
          {
          <span v-for="(tech, index) in project.technologiesFb" :key="index" class="font-thin text-gray-400">
            {{ tech }}
          </span>
          }
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import projectsData from '@/assets/data/projectsData.json'
import { useRouter } from 'vue-router'

const isVisible = ref(null)

const router = useRouter()
const goToProject = (projectId) => {
  router.push(`/portfolio#project-${projectId}`)
}

// Aquí accedemos directamente a los proyectos del JSON
const projects = Object.values(projectsData)
</script>

<style scoped>
/* Puedes agregar más estilos aquí si es necesario */
</style>
