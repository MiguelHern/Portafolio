<script setup>
import carouselData from '@/assets/data/projectsData.json'

const projects = Object.entries(carouselData)

import { onMounted } from 'vue'

onMounted(() => {
  // Verifica si hay un fragmento en la URL
  const hash = window.location.hash
  if (hash) {
    const section = document.querySelector(hash)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
</script>

<template>
  <h2 data-aos="fade-in" class="text-3xl blur-sm-ao p-4 text-center text-white font-thin mt-14">Proyectos</h2>
  <div class="sm:ml-4">
    <div class="lg:px-32 px-8 rounded-lg dark:border-gray-700">
      <section
        v-for="([key, project], index) in projects"
        :key="index"
        :id="'project-' + index"
        class="lg:py-8 py-4"
      >
        <div class="text-white space-y-1 mb-6">
          <span class="text-accent text-sm">{{ project.category }}</span>
          <h1 class="text-4xl font-bold">{{ project.title }}</h1>
        </div>
        <div class="md:grid md:space-y-0 space-y-3 grid-cols-2 gap-4 mb-4">
          <figure class="col-span-2 rounded-lg overflow-hidden" data-aos="fade-up">
            <div>
              <img
                :src="project.images[0].url"
                :alt="project.images[0].description || 'Imagen destacada'"
                class="rounded-lg overflow-hidden"

              />
            </div>
            <figcaption class="text-white md:mt-2 mt-0.5 font-thin">
              {{ project.images[0].description }}
            </figcaption>
          </figure>
          <figure
            class="flex flex-col h-full rounded-lg"
            v-for="(image, index) in project.images.slice(1, 5)"
            :key="index" data-aos="fade-up"
          >
            <div class="flex-1 overflow-hidden rounded-lg">
              <img
                :src="image.url"
                :alt="image.description || 'Imagen ' + (index + 1)"
                class="project-image h-full"
              />
            </div>
            <figcaption class="text-white md:mt-2 mt-0.5 font-thin">
              {{ image.description }}
            </figcaption>
          </figure>
        </div>
        <div class="text-white md:grid md:space-y-0 space-y-3 grid-cols-4 gap-y-6 mt-10">
          <div>
            <span class="text-lg font-thin">Descripción</span>
          </div>
          <div class="col-span-3 border-b border-gray-800 pb-5">
            {{ project.description }}
          </div>

          <div>
            <span class="text-lg font-thin">Mi rol</span>
          </div>
          <div class="col-span-3 border-b border-gray-800 pb-5">
            <div v-for="([key, value], index) in Object.entries(project.role)" :key="index">
              <strong>{{ key }}:</strong> {{ value }}
            </div>
          </div>

          <div>
            <span class="text-lg font-thin">Tecnologías utilizadas</span>
          </div>
          <div class="col-span-3 border-b border-gray-800 pb-5">
            <div v-for="([key, value], index) in Object.entries(project.technologies)" :key="index">
              <strong>{{ key }}:</strong> {{ value }}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.blur-sm-ao {
  filter: blur(10px);
  transition: filter 0.5s ease-in-out;
}

.aos-animate {
  filter: blur(0);
}
.blur-sm-ao-lg {
  filter: blur(10px); /* Desenfoque inicial */
  animation: revealBlur 1s ease-out forwards; /* Animación de revelado */
}

@keyframes revealBlur {
  0% {
    filter: blur(30px);
  }
  100% {
    filter: blur(0);
  }
}
</style>
