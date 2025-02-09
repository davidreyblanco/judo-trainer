<template>
  <div class="day-plan">
    <div
      v-for="(bloque, index) in dayPlan.bloques"
      :key="index"
      class="bloque"
    >
      <h1 class="header">{{ bloque.titulo }}</h1>
      
      <!-- Si el bloque requiere timer -->
      <div v-if="bloque.timer">
        <Timer :duration="bloque.timerDuration" />
      </div>
      
      <ul>
        <li v-for="(ejercicio, idx) in bloque.ejercicios" :key="idx">
          <strong>{{ ejercicio.nombre }}</strong>
          <p v-if="ejercicio.detalles">{{ ejercicio.detalles }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Timer from './Timer.vue'

export default {
  name: 'DayPlan',
  components: {
    Timer
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      trainingPlans: {
        '1': {
          titulo: 'David: Día 1: Fuerza máxima y explosividad',
          bloques: [
            {
              titulo: 'Calentamiento (10 minutos)',
              ejercicios: [
                { nombre: 'Movilidad articular', detalles: 'Caderas, hombros, tobillos.' },
                { nombre: 'Ejercicios dinámicos', detalles: 'Skipping, desplazamientos laterales, saltos pequeños.' }
              ],
              timer: false
            },
            {
              titulo: 'Ejercicios principales',
              ejercicios: [
                { nombre: 'Sentadilla profunda (máquina multipower)', detalles: '4x5 (80-85% de 1RM, pérdida de velocidad <20% por serie). Enfócate en la máxima velocidad durante la subida.' },
                { nombre: 'Press de banca', detalles: '4x5 (70-80% de 1RM, pérdida de velocidad <20%).' },
                { nombre: 'Remo con barra o mancuernas', detalles: '3x6 (con carga moderada, máxima velocidad de tracción).' }
              ],
              timer: false
            },
            {
              titulo: 'Ejercicios auxiliares',
              ejercicios: [
                { nombre: 'Saltos verticales con peso corporal', detalles: '3x8 (máxima altura en cada salto).' },
                { nombre: 'Push press', detalles: '3x6 (60-70% del máximo esfuerzo, con enfoque en la velocidad de empuje).' }
              ],
              timer: false
            },
            {
              titulo: 'Core',
              ejercicios: [
                { nombre: 'Plancha con desplazamientos laterales', detalles: '3x30 segundos.' },
                { nombre: 'Russian twists con mancuerna', detalles: '3x12 (por lado).' }
              ],
              timer: false
            },
            {
              titulo: 'Estiramientos y relajación (10 minutos)',
              ejercicios: [
                { nombre: 'Estiramientos generales', detalles: '' }
              ],
              timer: false
            }
          ]
        },
        '2': {
          titulo: 'David: Día 2: Fuerza funcional y alta intensidad',
          bloques: [
            {
              titulo: 'Calentamiento (10 minutos)',
              ejercicios: [
                { nombre: 'Movilidad dinámica', detalles: 'Rotaciones de tronco, estiramientos dinámicos.' },
                { nombre: 'Saltos a la comba', detalles: '2-3 minutos.' }
              ],
              timer: false
            },
            {
              titulo: 'Circuito de alta intensidad (4 rondas, descanso 90 segundos entre rondas)',
              ejercicios: [
                { nombre: 'Peso muerto rumano', detalles: '8 repeticiones.' },
                { nombre: 'Dominadas asistidas o remo con TRX', detalles: '10 repeticiones.' },
                { nombre: 'Burpees explosivos', detalles: '12 repeticiones.' },
                { nombre: 'Thrusters', detalles: '10 repeticiones.' },
                { nombre: 'Sprint en el sitio', detalles: '20 segundos (máxima velocidad).' }
              ],
              timer: true,
              timerDuration: 90
            },
            {
              titulo: 'Ejercicio específico de judo',
              ejercicios: [
                { nombre: 'Lanzamientos con gomas (uchi-komi simulados)', detalles: '3x12 por lado (máxima velocidad y control).' },
                { nombre: 'Tirones explosivos con gomas (simulación de kuzushi)', detalles: '3x10 por brazo.' }
              ],
              timer: false
            },
            {
              titulo: 'Core',
              ejercicios: [
                { nombre: 'Rollouts con rueda o gomas', detalles: '3x10.' },
                { nombre: 'Levantamiento de piernas suspendidas', detalles: '3x12.' }
              ],
              timer: false
            },
            {
              titulo: 'Estiramientos y relajación (10 minutos)',
              ejercicios: [
                { nombre: 'Estiramientos generales', detalles: '' }
              ],
              timer: false
            },
            {
              titulo: 'Bloque específico de Judo (20-30 minutos)',
              ejercicios: [
                { nombre: 'Suspensión en barra con toalla o judogi', detalles: '3x30-40 segundos.' },
                { nombre: 'Farmer’s Walk con toalla y kettlebell/mancuerna', detalles: '3x20-30 metros.' },
                { nombre: 'Crush Grippers', detalles: '3x10 repeticiones por mano.' },
                { nombre: 'Isométrico de agarre con judogi en barra', detalles: '3x20-30 segundos.' },
                { nombre: 'Tirones explosivos con gomas (simulación de kuzushi)', detalles: '3x10 por brazo.' },
                { nombre: 'Golpes de agarre en movimiento (judogi + goma)', detalles: '3x20 segundos.' },
                { nombre: 'Uchi-komi con resistencia (judogi + kettlebell o goma)', detalles: '3x12 por lado.' },
                { nombre: 'Saltos reactivos + entrada rápida', detalles: '3x8 repeticiones.' },
                { nombre: 'Sombras de judo con cambios de nivel', detalles: '3x30 segundos.' },
                { nombre: 'Sprint en corto + entrada (5 metros)', detalles: '4 repeticiones.' },
                { nombre: 'Combinaciones de Uchi-komi con bandas elásticas', detalles: '3x8 por lado.' },
                { nombre: 'Progresión de ataques en 3 fases', detalles: '3x4 combinaciones.' },
                { nombre: 'Trabajo de dirección con conos', detalles: '3x6 repeticiones.' }
              ],
              timer: true,
              timerDuration: 60
            }
          ]
        },
        // --- Nueva sección para Daniela ---
        daniela: {
          titulo: 'Daniela: Programa de Fuerza Moderada - Piernas y Glúteos',
          bloques: [
            {
              titulo: 'Día 1 - Piernas y Glúteos (Fuerza básica)',
              ejercicios: [
                { nombre: 'Sentadilla goblet (con mancuerna o kettlebell)', detalles: '3x12-15 reps.' },
                { nombre: 'Puente de glúteos (con peso opcional)', detalles: '3x15-20 reps.' },
                { nombre: 'Zancadas alternas', detalles: '3x10 reps. cada pierna' },
                { nombre: 'Elevaciones de talones (gemelos)', detalles: '3x15 reps.' },
                { nombre: 'Plancha lateral con abducción de pierna', detalles: '3x12 reps. por lado' }
              ],
              timer: false
            },
            {
              titulo: 'Día 2 - Core y Tren Superior (Complementario)',
              ejercicios: [
                { nombre: 'Plancha frontal', detalles: '3x30-45 segundos' },
                { nombre: 'Press de hombros con mancuernas', detalles: '3x12 reps.' },
                { nombre: 'Remo con bandas elásticas o mancuerna', detalles: '3x12 reps.' },
                { nombre: 'Elevaciones laterales con mancuernas', detalles: '3x15 reps.' },
                { nombre: 'Abdominales bicicleta', detalles: '3x20 (10 reps. por lado)' }
              ],
              timer: false
            },
            {
              titulo: 'Día 3 - Piernas y Glúteos (Resistencia y Estabilidad)',
              ejercicios: [
                { nombre: 'Sentadilla búlgara (con pie trasero elevado)', detalles: '3x10 reps. cada pierna' },
                { name: 'Hip thrust (puente de glúteos con espalda apoyada)', detalles: '3x12 reps.' },
                { nombre: 'Peso muerto rumano con mancuernas', detalles: '3x12 reps.' },
                { nombre: 'Monster Walk con banda elástica', detalles: '3x20 pasos' },
                { nombre: 'Skipping (rodillas arriba) o saltos suaves', detalles: '3x20 segundos' }
              ],
              timer: false
            },
            {
              titulo: 'Día 4 - Movilidad, Coordinación y Trabajo Funcional',
              ejercicios: [
                { nombre: 'Sentadilla con salto controlado', detalles: '3x10 reps.' },
                { nombre: 'Step-ups en banco o escalón alto', detalles: '3x12 reps. cada pierna' },
                { nombre: 'Puente de glúteos con una pierna', detalles: '3x12 reps. por lado' },
                { nombre: 'Desplazamientos laterales con banda elástica', detalles: '3x12 reps. cada lado' },
                { nombre: 'Trabajo de movilidad: estiramientos dinámicos y foam roller', detalles: '' }
              ],
              timer: false
            },
            {
              titulo: 'Recomendaciones adicionales',
              ejercicios: [
                { nombre: 'Calentamiento previo', detalles: '5-10 minutos de movilidad articular y activación con bandas' },
                { nombre: 'Progresión', detalles: 'Aumentar repeticiones o carga progresivamente' },
                { nombre: 'Ejecución', detalles: 'Ejecutar los ejercicios con control para evitar lesiones' }
              ],
              timer: false
            }
          ]
        }
      }
    }
  },
  computed: {
    dayPlan() {
      return this.trainingPlans[this.id] || { titulo: 'Día no encontrado', bloques: [] }
    }
  }
}
</script>

<style scoped>
.day-plan {
  padding: 1rem;
  text-align: left;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.home-button {
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.bloque {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

h3 {
  margin-top: 0;
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  margin-bottom: 0.5rem;
}
</style>