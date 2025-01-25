<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isMenuOpen = ref(false)

onMounted(() => {
  if (isMenuOpen.value) {
    document.body.classList.add('overflow-hidden')
  }
})

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden')
})

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
            <RouterLink class="item transition-all duration-300 ease-in-out" to="/" @click="openMenu"
              >Inicio</RouterLink
            >
          </li>
          <li class="">
            <RouterLink class="item transition-all duration-300 ease-in-out" to="/portfolio" @click="openMenu"
              >Portafolio</RouterLink
            >
          </li>
          <li class="">
            <RouterLink class="item transition-all duration-300 ease-in-out" to="/aboutme" @click="openMenu"
              >Acerca de mi</RouterLink
            >
          </li>
          <li>
            <button class="item transition-all duration-300 ease-in-out" @click="closeModal">LinkedIn</button>
          </li>
          <li>
            <button class="item transition-all duration-300 ease-in-out" @click="closeModal">Github</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <nav class="fixed top-0 z-50 w-full" id="" data-aos="fade-down" >
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
        <li class="item transition-all duration-300 ease-in-out">
          <RouterLink to="/aboutme">Acerca de mi</RouterLink>
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
</template>

<style scoped>
.transparet-customized {
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  background-color: rgba(120, 120, 120, 0.35);
  -webkit-tap-highlight-color: transparent;
}

.lista:hover .item:not(:hover) {
  @apply text-white75;
}
</style>
