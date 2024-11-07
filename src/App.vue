<template>
  <div class="container">
    <div class="content">
      <h1 class="title">Contador</h1>
      <p class="equation">{{ store.count }} x 2 = {{ store.times2 }}</p>
      <button @click="store.increment(1)" class="increment-button">Incrementar</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from './store/counter';  // Asegúrate de que la ruta sea correcta
const store = useCounterStore();
</script>

<style scoped>
/* Reset de estilos */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilos generales */
body {
  font-family: 'Inter', sans-serif; /* Tipografía moderna */
  background-color: #f0f4f8; /* Fondo neutro */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: linear-gradient(135deg, rgba(30, 30, 60, 0.8), rgba(50, 50, 100, 0.8));
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
  color: #ffffff;
}

.content {
  background-color: rgba(255, 255, 255, 0.1); /* Fondo sutil para el contenido */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Título */
.title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

/* Ecuación */
.equation {
  font-size: 1.8rem;
  color: #fff;
  font-weight: 500;
  margin: 15px 0;
}

/* Botón */
.increment-button {
  padding: 12px 24px;
  background-color: #0066FF; /* Azul vibrante */
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.increment-button:hover {
  background-color: #0056CC; /* Azul más oscuro */
  transform: translateY(-3px); /* Efecto hover para que se vea más dinámico */
}

.increment-button:active {
  transform: translateY(0);
}

@media (max-width: 600px) {
  .title {
    font-size: 2rem;
  }

  .equation {
    font-size: 1.5rem;
  }

  .increment-button {
    width: 100%;
    padding: 14px;
    font-size: 1rem;
  }
}
</style>
