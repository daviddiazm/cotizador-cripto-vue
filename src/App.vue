<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import AppForm from './components/AppForm.vue';
import AppLoader from './components/AppLoader.vue';
import useCripto from './composables/useCripto';
import AppCotizacion from './components/App-Cotizacion.vue';



const { monedas, criptoMonedas, obtenerCotizacion, criptoInto, isLoading, isCriptoInfo } = useCripto()



const cotizar = reactive({
  moneda: '',
  cripto: ''
})



const cotizarCriptos = () => {
  obtenerCotizacion(cotizar)
}




</script>

<template>
  <div class="contenedor">

    <h1 class="titulo">Cotizador de CriptoMonedas</h1>
      <div class="contenido">
        <AppForm
          :monedas="monedas"
          :criptoMonedas="criptoMonedas"
          :cotizar="cotizar"
          @cotizar-criptos="cotizarCriptos"
          v-model:moneda="cotizar.moneda"
          v-model:cripto="cotizar.cripto"
        />

        <AppCotizacion
          v-if="isCriptoInfo"
          :criptoInto="criptoInto"
        />

        <AppLoader
          v-if="isLoading"
        />
      </div>
  </div>
</template>

<style scoped></style>
