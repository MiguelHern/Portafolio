<script setup>
import HeaderLayout from './components/HeaderLayout.vue'
//import SidebarLayout from './components/SidebarLayout.vue'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});


</script>

<template>

  <header>
    <HeaderLayout />
  </header>
  <!--
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 h-screen pt-24 transition-transform -translate-x-full lg:translate-x-0"
    aria-label="Sidebar"
  >
    <SidebarLayout />
  </aside>
  -->
  <div class="blur-sm-ao" data-aos="fade-in">
      <RouterView />

  </div>

</template>

<style scoped>
.blur-sm-ao {
  filter: blur(10px);
  transition: filter 0.5s ease-in-out; /* Transición suave para el desenfoque */
}

.aos-animate {
  filter: blur(0);
}
</style>
