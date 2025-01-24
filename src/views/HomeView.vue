<script setup>
import CardProjectsHome from '@/components/CardProjectsHome.vue'
import carouselData from '@/assets/data/projectsData.json'
import { ref } from 'vue'

let title = ref('')
let description = ref('')
let images = ref([])

const switchData = (projectName) => {
  const project = carouselData[projectName]
  if (project) {
    title.value = project.title
    description.value = project.shortDescription
    // Extraer solo las URLs de las imágenes
    images.value = project.images.map((image) => image.url)
  }
}
import { useRouter } from 'vue-router'  // Importa useRouter
const router = useRouter()
const goToProject = (projectId) => {
  router.push(`/portfolio#project-${projectId}`)
}
</script>

<template>
  <section class="flex h-screen relative">
    <div class="absolute w-full h-full origin-center clip-hole"></div>
    <div class="space-y-3 absolute bottom-20 left-20 text-white">
      <span class="text-lg"> Miguel Hernández </span>
      <h1 class="text-3xl">Programador Web</h1>
      <div class="flex gap-3">
        <span>Lenguajes</span>
        <div>
          <span>Vue</span>
        </div>
        <div>
          <span>TypeScript</span>
        </div>
        <div>
          <span>Python</span>
        </div>
      </div>
    </div>
    <iframe
      src="https://my.spline.design/particles-a315ecf81b2793f51b19320584572ddf/"
      frameborder="0"
      width="100%"
      height="100%"
    ></iframe>
  </section>

  <section class="text-white px-16 py-24">
    <header>
      <h2 id="" data-aos="fade-in" class="text-3xl blur-sm-ao ">Resumen</h2>
      <p >
        Soy ingeniero en sistemas computacionales con experiencia en desarrollo frontend utilizando
        Vue.js y TypeScript. También cuento con habilidades en backend, trabajando con tecnologías
        como Python y PHP, lo que me permite desarrollar soluciones completas y funcionales.
      </p>

    </header>
    <main class="mt-16">
      <ul grid grid-cols-3 >
        <li class="grid grid-cols-5" data-aos="fade-up">
          <div class="md:col-span-2 col-span-5"><span>Frontend</span></div>
          <div class="md:col-span-3 col-span-5 border-b border-gray-800">
            <ul class="text-xl flex flex-wrap gap-5 py-6">
              <li>Vue</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </li>
        <li class="grid grid-cols-5" data-aos="fade-up">
          <div class="col-span-2"><span>Backend</span></div>
          <div class="md:col-span-3 col-span-5 border-b border-gray-800">
            <ul class="text-xl flex flex-wrap gap-5 py-6">
              <li>Python</li>
              <li>Flask</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
          </div>
        </li>
        <li class="grid grid-cols-5" data-aos="fade-up">
          <div class="col-span-2"><span>Herramientas</span></div>
          <div class="md:col-span-3 col-span-5 border-b border-gray-800">
            <ul class="text-xl flex flex-wrap gap-5 py-6">
              <li>Git</li>
              <li>Figma</li>
              <li>Jira</li>
              <li>Postman</li>
            </ul>
          </div>
        </li>
      </ul>
    </main>
  </section>

  <section class="text-white px-16 py-24 bg-bgsecondary">
    <header>
      <h2  id="" data-aos="fade-in" class="text-3xl blur-sm-ao ">Proyectos</h2>
    </header>
    <main class="mt-16 grid grid-cols-5 h-full">
      <div class="col-span-2 mr-32 items-center hidden sm:flex h-[720px]">
        <transition
          name="fade"
          enter-active-class="transition-opacity duration-500 ease-in-out"
          leave-active-class="transition-opacity duration-500 ease-in-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-4"
        >
          <div v-if="title">
            <CardProjectsHome :title="title" :description="description" :images="images" />
          </div>
        </transition>
      </div>

      <div
        class="col-span-5 md:col-span-3 md:justify-start justify-center flex items-center sm:translate-x-0"
      >
        <ul class="space-y-12 text-6xl lista">
          <li data-aos="fade-up" class="item transition-all duration-300 ease-in-out md:text-start text-center">
            <button @mouseover="switchData('FisioLab')" @mouseleave="switchData('')" @click="goToProject(0)" class="">
              FisioLabs
            </button>
          </li>
          <li data-aos="fade-up" class="item transition-all duration-300 ease-in-out md:text-start text-center">
            <button @mouseover="switchData('General10')" @mouseleave="switchData('')" @click="goToProject(1)" class="">
              General10
            </button>
          </li>
          <li data-aos="fade-up" class="item transition-all duration-300 ease-in-out md:text-start text-center">
            <button @mouseover="switchData('WriteScore')" @mouseleave="switchData('')" @click="goToProject(2)" class="">
              Habitify - Clon
            </button>
          </li>
          <li data-aos="fade-up" class="item transition-all duration-300 ease-in-out md:text-start text-center">
            <button @mouseover="switchData('WriteScore')" @mouseleave="switchData('')" class="">
              WriteScore
            </button>
          </li>
        </ul>
      </div>
    </main>
  </section>
</template>
<style scoped>
.lista:hover .item:not(:hover) {
  @apply text-white75;
}
.clip-hole {
  clip-path: polygon(
    0% 0%,
    0% 100%,
    25% 100%,
    25% 25%,
    75% 25%,
    75% 75%,
    25% 75%,
    25% 100%,
    100% 100%,
    100% 0%
  );
}
.blur-sm-ao {
  filter: blur(10px);
  transition: filter 0.5s ease-in-out; /* Transición suave para el desenfoque */
}

.aos-animate {
  filter: blur(0);
}
</style>
