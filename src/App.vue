<template>
  <div id="app">
    <header class="app-header">
      <div class="header-container">
        <!-- Botón "Inicio" solo se muestra si no estás en la pantalla Home -->
        <h1>
          Judo Trainer
          <!-- Si estamos en la vista de entrenamiento diario, se muestra el título del día -->
          <span v-if="$route.name === 'DayPlan'"> - {{ trainingDayTitle }}</span>
        </h1>
      </div>
      <router-link v-if="$route.name !== 'Home'" to="/" class="home-button">Inicio</router-link>
    </header>
    <router-view/>
    <BackToTop />
  </div>
</template>

<script>

import BackToTop from './components/BackToTop.vue';

export default {
  name: 'App',
  components: {
    BackToTop
  },
  computed: {
    trainingDayTitle() {
      // Mapeo de ID de entrenamiento a título (ajusta según tus datos)
      if (this.$route.name === 'DayPlan') {
        const mapping = {
          '1': 'Día 1: Fuerza máxima y explosividad',
          '2': 'Día 2: Fuerza funcional y alta intensidad',
          'daniela': 'Daniela: Programa de Fuerza Moderada - Piernas y Glúteos'
        };
        return mapping[this.$route.params.id] || '';
      }
      return '';
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.app-header {
  background-color: #333;
  color: white;
  padding: 1rem;
  font-size: 0.8rem;
  padding-bottom: 2rem;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.home-button {
  position: absolute;
  left: 1rem;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  background: transparent;
  border: none;
}
</style>