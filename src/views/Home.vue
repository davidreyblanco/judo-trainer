<template>
  <div class="home">
    <h2>Seleccione un día de entrenamiento</h2>

    <!-- Lista para David -->
    <h3>Entrenamiento David</h3>
    <ul>
      <li>
        <router-link :to="{ name: 'DayPlan', params: { id: '1' } }">
          Día 1: Fuerza máxima y explosividad
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'DayPlan', params: { id: '2' } }">
          Día 2: Fuerza funcional y alta intensidad
        </router-link>
      </li>
    </ul>

    <!-- Lista para Daniela -->
    <h3>Entrenamiento Daniela</h3>
    <ul>
      <li>
        <router-link :to="{ name: 'DayPlan', params: { id: 'daniela' } }">
          Programa de Fuerza Moderada - Piernas y Glúteos
        </router-link>
      </li>
    </ul>
  </div>
</template>
  
  <script>
  export default {
    name: 'HomeView',
    data() {
      return {
        days: [
          { id: 1, titulo: 'Día 1: Fuerza máxima y explosividad' },
          { id: 2, titulo: 'Día 2: Fuerza funcional y alta intensidad' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .home {
    padding: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 1rem 0;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  </style>