<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'


const route = useRoute()
const router = useRouter()
const isMenuOpen = ref(false)

const goToProject = (projectId) => {
  // Cambiar la URL sin recargar la página
  router.push(`/portfolio#project-${projectId}`)
  console.log(projectId)
}


onMounted(() => {
  if (isMenuOpen.value) {
    document.body.classList.add('overflow-hidden')
  }
  // Ejecutar scroll si hay un hash en la URL al montar el componente
  scrollToSection()
})

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden')
})

// Función para hacer scroll hacia la sección correspondiente
const scrollToSection = () => {
  const hash = route.hash
  if (hash) {
    const sectionId = hash.substring(1) // Eliminar el "#" del hash
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

// Ejecutar scroll cuando el hash en la URL cambie
watch(
  () => route.hash,
  () => {
    scrollToSection()
  },
)

const closeModal = () => {
  isMenuOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}

const backgroundClass = computed(() =>
  isMenuOpen.value ? 'opacity-100 visible' : 'opacity-0 invisible',
)

const dynamicClass = computed(() => (isMenuOpen.value ? 'translate-y-0' : '-translate-y-full'))
</script>
<template>
  <div
    class="fixed inset-0 bg-primary bg-opacity-10 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden"
    :class="backgroundClass"
    @click="closeModal"
  ></div>
  <div class="fixed inset-0 flex items-start justify-center z-50 lg:hidden">
    <!-- Contenido del modal -->
    <div
      class="p-6 rounded-sm pt-8 w-full bg-crema bg-opacity-50 backdrop-blur-sm transition-transform duration-1000 ease-in-out"
      :class="dynamicClass"
    >
      <h3 class="text-md font-thin text-center mb-4 border-b border-gray-800 pb-5">Navegación</h3>
      <div>
        <ul class="space-y-2 lista">
          <li class=" ">
            <RouterLink
              class="item transition-all duration-300 ease-in-out"
              to="/"
              @click="openMenu"
              >Inicio</RouterLink
            >
          </li>
          <li class="">
            <RouterLink
              class="item transition-all duration-300 ease-in-out"
              to="/portfolio"
              @click="openMenu"
              >Portafolio</RouterLink
            >
          </li>
          <li>
            <button class="item transition-all duration-300 ease-in-out" @click="closeModal">
              LinkedIn
            </button>
          </li>
          <li>
            <button class="item transition-all duration-300 ease-in-out" @click="closeModal">
              Github
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <nav class="fixed top-0 z-50 w-full" id="" data-aos="fade-down">
    <!--lign-items: center;

        border-radius: 1rem;
        -moz-column-gap: 5rem;
        column-gap: 5rem;
        flex-direction: row;
        grid-column: 1 / -1;
        grid-row: 1;
        height: 4.5rem;
        margin-top: 0;
        padding: 0 3rem;
        row-gap: 0;
        -->
    <div
      class="px-3 py-3 flex justify-center transition-transform -translate-y-full lg:translate-y-0"
    >
      <ul
        class="flex gap-9 font-thin bg-crema px-6 py-2 transparet-customized rounded-lg text-white lista"
      >
        <li class="item transition-all duration-300 ease-in-out">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="item transition-all duration-300 ease-in-out">
          <RouterLink to="/portfolio">Portafolio</RouterLink>
        </li>
      </ul>
    </div>
  </nav>

  <button
    @click="openMenu"
    class="fixed top-4 right-4 z-50 p-3 rounded-lg transparet-customized lg:hidden"
  >
    <svg
      v-if="!isMenuOpen"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#FFFF"
      class="w-6 h-6 transition-all duration-300 ease-in-out transform"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
    <svg
      v-if="isMenuOpen"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#FFFF"
      class="w-6 h-6 transition-all duration-300 ease-in-out transform"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  </button>

  <div class="fixed z-50 right-4 text-white" v-if="route.path === '/portfolio'">
    <section class="bg-crema rounded-md dark:text-gray-800">
      <div class="container max-w-5xl px-2 py-4 mx-auto ml-4">
        <div
          class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300"
        >
          <div
            v-for="(item, index) in projects"
            :key="index"
            @click="goToProject(index)"
            class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary"
          >
            <h3 class="text-xl font-semibold tracking-wide">{{ index + 1 }}</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.transparet-customized {
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  background-color: rgba(120, 120, 120, 0.35);
  -webkit-tap-highlight-color: transparent;
}
</style>
