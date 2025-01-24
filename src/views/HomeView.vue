<script setup>
import CardProjectsHome from '@/components/CardProjectsHome.vue'
import carouselData from '@/assets/data/projectsData.json'
import { ref } from 'vue'

let title = ref('')
let description = ref('')
let images = ref([])

const projects = Object.entries(carouselData)

const switchData = (projectName) => {
  const project = carouselData[projectName]
  if (project) {
    title.value = project.title
    description.value = project.shortDescription
    // Extraer solo las URLs de las imágenes
    images.value = project.images.map((image) => image.url)
  }
}
import { useRouter } from 'vue-router' // Importa useRouter
const router = useRouter()
const goToProject = (projectId) => {
  router.push(`/portfolio#project-${projectId}`)
}
</script>

<template>
  <section class="flex h-screen relative">
    <div class="absolute w-full h-full origin-center clip-hole"></div>
    <div
      data-aos="fade-in"
      class="space-y-3 absolute lg:bottom-20 lg:left-20 flex lg:w-auto w-full justify-center bottom-20 text-white blur-sm-ao-lg"
    >
    <div class="lg:text-start text-center">
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

    </div>
    <iframe
      src="https://my.spline.design/particles-a315ecf81b2793f51b19320584572ddf/"
      frameborder="0"
      width="100%"
      height="100%"
    ></iframe>
  </section>

  <section class="text-white px-8 md:px-16 py-12 md:py-24">
    <header>
      <h2 data-aos="fade-in" class="text-3xl blur-sm-ao mb-4 text-center">Resumen</h2>
      <p data-aos="fade-in">
        Soy ingeniero en sistemas computacionales con experiencia en desarrollo frontend utilizando
        Vue.js y TypeScript. También cuento con habilidades en backend, trabajando con tecnologías
        como Python y PHP, lo que me permite desarrollar soluciones completas y funcionales.
      </p>
    </header>
    <main class="md:mt-16 mt-8">
      <ul grid grid-cols-3>
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
        <li class="grid grid-cols-5 md:mt-0 mt-4" data-aos="fade-up">
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
        <li class="grid grid-cols-5 md:mt-0 mt-4" data-aos="fade-up">
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

  <section class="text-white px-16 py-24 bg-bgsecondary hidden md:block">
    <header>
      <h2 id="" data-aos="fade-in" class="text-3xl blur-sm-ao text-center">Proyectos</h2>
    </header>
    <main class="mt-16 grid grid-cols-5 h-full">
      <div class="md:col-span-2 flex h-[720px] mr-24 items-center">
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
            <CardProjectsHome
              :title="title"
              :description="description"
              :images="images"
              :controls="false"
            />
          </div>
        </transition>
      </div>

      <div class="col-span-3 self-center">
        <ul class="space-y-12 text-6xl lista">
          <li
            data-aos="fade-up"
            class="item transition-all duration-300 ease-in-out md:text-start text-center"
          >
            <button
              @mouseover="switchData('FisioLab')"
              @mouseleave="switchData('')"
              @click="goToProject(0)"
              class=""
            >
              FisioLabs
            </button>
          </li>
          <li
            data-aos="fade-up"
            class="item transition-all duration-300 ease-in-out md:text-start text-center"
          >
            <button
              @mouseover="switchData('General10')"
              @mouseleave="switchData('')"
              @click="goToProject(1)"
              class=""
            >
              General10
            </button>
          </li>
          <li
            data-aos="fade-up"
            class="item transition-all duration-300 ease-in-out md:text-start text-center"
          >
            <button
              @mouseover="switchData('WriteScore')"
              @mouseleave="switchData('')"
              @click="goToProject(2)"
              class=""
            >
              Habitify - Clon
            </button>
          </li>
          <li
            data-aos="fade-up"
            class="item transition-all duration-300 ease-in-out md:text-start text-center"
          >
            <button @mouseover="switchData('WriteScore')" @mouseleave="switchData('')" class="">
              WriteScore
            </button>
          </li>
        </ul>
      </div>
    </main>
  </section>
  <section class="py-16 px-8 text-white">
    <h2 id="" data-aos="fade-in" class="text-3xl blur-sm-ao mb-8 text-center">Proyectos</h2>
    <div
      v-for="([key, project], index) in projects"
      :key="key"
      :id="'project-' + key"
      class="mb-4"
      data-aos="fade-up"
    >
      <div>
        <CardProjectsHome
          :title="project.title"
          :description="project.description"
          :images="project.images.map((image) => image.url)"
          :controls="false"
        />
      </div>
    </div>
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
