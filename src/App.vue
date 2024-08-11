<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import AppForm from './components/AppForm.vue';
import AppLoader from './components/AppLoader.vue';

const criptoMonedas = ref([])
const criptoInto = ref({})
const monedas = ref([
  { codigo: 'USD', texto: 'Dolar de Estados Unidos' },
  { codigo: 'MXN', texto: 'Peso Mexicano' },
  { codigo: 'EUR', texto: 'Euro' },
  { codigo: 'GBP', texto: 'Libra Esterlina' },
])
const cotizar = reactive({
  moneda: '',
  cripto: ''
})

// watch(criptoInto, ()=> {
//   console.log(Object.keys(criptoInto.value));
// })

onMounted(()=> {
  const url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`
  fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
      criptoMonedas.value = data.Data
    })
  
})

const cotizarCriptos = () => {
  console.log('cotizando ando');
  obtenerCotizacion()
}

const obtenerCotizacion = async () => {
  const {moneda, cripto} = cotizar
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`

  const respuesta = await fetch(url)
  const data = await respuesta.json()
  
  criptoInto.value = data.DISPLAY[cripto][moneda]
  

  // fetch(url)
  //   .then(respuesta => respuesta.json())
  //   .then(data => {
  //     console.log(data);
  //     // criptoInto.value = data.Data
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   }) 
  
}

const isCriptoInfo = computed(() => {
  return Object.keys(criptoInto.value).length > 0 ? true : false 
  // return Object.keys() > 0 ? true : false 
})

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

        <div 
          v-if="isCriptoInfo"
          class="contenedor-resultado">
          <h2>Cotizacion</h2>
          <div class="resultado">
            <img class="imagen-cripto" :src="'https://cryptocompare.com/'+criptoInto.IMAGEURL" alt="">
            <div>
              <p>El precio es de <span>{{ criptoInto.PRICE }}</span></p>
              <p>El precio mas bajo del dia <span>{{ criptoInto.HIGDAY }}</span></p>
              <p>El precio mas alto del dia <span>{{ criptoInto.LOWDAY }}</span></p>
              <p>Variacion las ultima 24 horas <span>{{ criptoInto.CHANGEPCT24HOUR }}%</span></p>
              <p>Ultima actualizacion <span>{{ criptoInto.LASTUPDATE }}</span></p>
            </div>
          </div>
        </div>

        <!-- <AppLoader/> -->
      </div>
  </div>
</template>

<style scoped></style>
