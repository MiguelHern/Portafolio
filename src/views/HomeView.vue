<script setup>
import CardProjectsHome from '@/components/CardProjectsHome.vue'
import carouselData from '@/assets/data/projectsData.json'
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Importa useRouter
import CarouselComponent from '@/components/CarouselComponent.vue'

// Inicializa con los datos del primer proyecto
const firstProjectKey = Object.keys(carouselData)[0]
const firstProject = carouselData[firstProjectKey]

let title = ref(firstProject.title)
let description = ref(firstProject.shortDescription)
let images = ref(firstProject.images.map((image) => image.url))

const projects = Object.entries(carouselData)

const switchData = (projectName) => {
  const project = carouselData[projectName]
  if (project) {
    title.value = project.title
    description.value = project.shortDescription
    images.value = project.images.map((image) => image.url)
  }
}

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
      class="space-y-3 absolute lg:bottom-20 lg:left-64 flex lg:w-auto w-full justify-center bottom-20 text-white blur-sm-ao-lg"
    >
      <div class="lg:text-start text-center">
        <span class="text-xl font-thin"> Miguel Hernández </span>
        <h1 class="text-4xl mb-3">Programador <span class="text-primary">Web</span></h1>

        <ul class="flex gap-3 lg:justify-start justify-center">
          <li>
            <a href="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-white hover:stroke-primary transition-colors duration-200 ease-in-out"
              >
                <g clip-path="url(#clip0_10_109)">
                  <path
                    d="M12 25.3333C5.33333 27.3333 5.33333 22 2.66666 21.3333M21.3333 29.3333V24.1733C21.3833 23.5375 21.2974 22.8984 21.0814 22.2984C20.8653 21.6984 20.5239 21.1512 20.08 20.6933C24.2667 20.2267 28.6667 18.64 28.6667 11.36C28.6663 9.49843 27.9503 7.70826 26.6667 6.36C27.2745 4.73134 27.2315 2.93113 26.5467 1.33333C26.5467 1.33333 24.9733 0.866665 21.3333 3.30666C18.2773 2.47843 15.056 2.47843 12 3.30666C8.36 0.866665 6.78666 1.33333 6.78666 1.33333C6.10183 2.93113 6.05886 4.73134 6.66666 6.36C5.3735 7.71826 4.65669 9.52462 4.66666 11.4C4.66666 18.6267 9.06666 20.2133 13.2533 20.7333C12.8147 21.1866 12.4763 21.7272 12.2604 22.3199C12.0445 22.9126 11.9557 23.5441 12 24.1733V29.3333"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_109">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-white hover:stroke-primary transition-colors duration-200 ease-in-out"
              >
                <path
                  d="M21.3333 10.6667C23.4551 10.6667 25.4899 11.5095 26.9902 13.0098C28.4905 14.5101 29.3333 16.5449 29.3333 18.6667V28H24V18.6667C24 17.9594 23.719 17.2811 23.2189 16.781C22.7189 16.2809 22.0406 16 21.3333 16C20.6261 16 19.9478 16.2809 19.4477 16.781C18.9476 17.2811 18.6667 17.9594 18.6667 18.6667V28H13.3333V18.6667C13.3333 16.5449 14.1762 14.5101 15.6765 13.0098C17.1768 11.5095 19.2116 10.6667 21.3333 10.6667Z"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 12H2.66666V28H8V12Z"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33333 7.99999C6.80609 7.99999 8 6.80608 8 5.33332C8 3.86056 6.80609 2.66666 5.33333 2.66666C3.86057 2.66666 2.66666 3.86056 2.66666 5.33332C2.66666 6.80608 3.86057 7.99999 5.33333 7.99999Z"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>
        <button
          class="mt-3 px-12 py-2 bg-primary text-white font-semibold rounded-md w-full shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300"
        >
          Currículum
        </button>
      </div>
    </div>

    <iframe
      src="https://my.spline.design/particles-a315ecf81b2793f51b19320584572ddf/"
      frameborder="0"
      width="100%"
      height="100%"
    ></iframe>
  </section>

  <section class="text-white px-8 md:px-64 pt-12 md:pt-24">
    <h2 data-aos="fade-in" class="text-3xl blur-sm-ao mb-8 text-white font-bold">Proyectos</h2>
    <CarouselComponent />
    <div class="flex justify-center mt-8 border-b border-gray-800 pb-12 md:pb-24">
      <button
        class="px-12 py-2 bg-primary text-white font-semibold rounded-md shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300"
      >
        Ver más proyectos
      </button>
    </div>
  </section>

  <section class="text-white px-8 md:px-64 pt-12 md:pt-24">
    <h2 data-aos="fade-in" class="text-3xl blur-sm-ao mb-8 text-white font-bold">Educación</h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-b border-gray-800 pb-12 md:pb-24"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      >
        <figure>
          <img
            src="https://res.cloudinary.com/djfokdod6/image/upload/v1738026381/d90b2509-4e75-4121-bf7c-b3ae9aac75c0.png"
            alt=""
            class="w-full h-48 object-cover"
          />
        </figure>
        <figcaption class="p-3 flex-1 flex flex-col justify-between">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">
            Ingeniería en sistemas computacionales
          </h3>
          <p class="text-gray-600 text-sm">2024</p>
          <p class="text-gray-600 text-sm">UACAM</p>
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      >
        <figure>
          <img
            src="https://res.cloudinary.com/djfokdod6/image/upload/v1738026521/49c8cd05-0f83-4e49-9dc9-6e3c28ceafdd.png"
            alt=""
            class="w-full h-48 object-cover"
          />
        </figure>
        <figcaption class="p-3 flex-1 flex flex-col justify-between">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">Vue.js: De cero a experto</h3>
          <p class="text-gray-600 text-sm">2024</p>
          <p class="text-gray-600 text-sm">Udemy</p>
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      >
        <figure>
          <img
            src="https://res.cloudinary.com/djfokdod6/image/upload/v1738026521/49c8cd05-0f83-4e49-9dc9-6e3c28ceafdd.png"
            alt=""
            class="w-full h-48 object-cover"
          />
        </figure>
        <figcaption class="p-3 flex-1 flex flex-col justify-between">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">
            Desarrollo Web Desde Cero: HTML:5, CSS3 y Js
          </h3>
          <p class="text-gray-600 text-sm">2024</p>
          <p class="text-gray-600 text-sm">Udemy</p>
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      >
        <figure>
          <img
            src="https://res.cloudinary.com/djfokdod6/image/upload/v1738026521/49c8cd05-0f83-4e49-9dc9-6e3c28ceafdd.png"
            alt=""
            class="w-full h-48 object-cover"
          />
        </figure>
        <figcaption class="p-3 flex-1 flex flex-col justify-between">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">
            Diseño UI: diseño visual y diseño de interfaz con Figma
          </h3>
          <p class="text-gray-600 text-sm">2024</p>
          <p class="text-gray-600 text-sm">Udemy</p>
        </figcaption>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      >
        <figure>
          <img
            src="https://res.cloudinary.com/djfokdod6/image/upload/v1738029491/34736600-4490-4667-94e3-e9eca543374b.png"
            alt=""
            class="w-full h-48 object-fit"
          />
        </figure>
        <figcaption class="p-3 flex-1 flex flex-col justify-between">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">English for IT 1</h3>
          <p class="text-gray-600 text-sm">2025</p>
          <p class="text-gray-600 text-sm">CISCO</p>
        </figcaption>
      </div>
    </div>
  </section>

  <section class="text-white px-8 md:px-64 pt-12 md:pt-24">
    <header class="mb-6">
      <h2 data-aos="fade-in" class="text-3xl blur-sm-ao mb-8 text-center md:text-start font-bold">Resumen</h2>
    </header>
    <p data-aos="fade-in" class="border-b border-gray-800 pb-12 md:pb-24">
      Soy ingeniero en sistemas computacionales con experiencia en desarrollo frontend,
      especializado en Vue.js y familiarizado con TypeScript. Me apasiona crear interfaces
      intuitivas y funcionales que mejoren la experiencia del usuario. Además, cuento con
      habilidades en desarrollo backend, trabajando con tecnologías como Python y PHP, lo que me
      permite abordar proyectos de manera integral, desde el diseño de la interfaz hasta la
      implementación de la lógica del servidor. Estoy comprometido con la calidad del código y la
      colaboración en equipo para entregar soluciones robustas y efectivas.
    </p>
  </section>

  <section class="text-white px-8 md:px-64 py-12 md:py-24 border-b border-gray-800 pb-12 md:pb-24">
    <main class="md:mt-16 mt-8 text-white">
      <h2 data-aos="fade-in" class="text-3xl blur-sm-ao mb-8 text-center md:text-start font-bold">
        Tecnologías
      </h2>
      <ul grid grid-cols-3>
        <li class="grid grid-cols-5" data-aos="fade-up">
          <div class="md:col-span-2 col-span-5"><span class="">Frontend</span></div>
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
          <div class="col-span-2"><span class="">Backend</span></div>
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
          <div class="col-span-2"><span class="">Herramientas</span></div>
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

  <section></section>
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
