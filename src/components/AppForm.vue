<script setup >
import { ref } from 'vue';
import AppAlerta from './AppAlerta.vue'

  const props = defineProps({
    monedas: {
      type: Array,
      required: true
    },
    criptoMonedas: {
      type: Array,
      required: true
    },

    cotizar: {
      type: Object,
      required: true
    }
  })

  const msgError = ref('')
  const emits = defineEmits(['cotizar-criptos','update:moneda','update:cripto',])


  const validarFormulario = () => {
    
    if(Object.values(props.cotizar).includes('')) {
      msgError.value = 'Todos los campos deben ser rellenados'
      setTimeout(() => {
        msgError.value = ''
      }, 3000);
      return
    }

    emits('cotizar-criptos')
  }
</script>

<template>
  <form
    @submit.prevent="validarFormulario"
    class="formulario">

    <AppAlerta v-if="msgError !== ''">
      {{ msgError }}
    </AppAlerta>

    <div class="campo">
      <label for="form-moneda">Moneda</label>
      <select 
        id="form-moneda"
        @input="$emit('update:moneda',$event.target.value)">
        <option value="">-Selecciona-</option>
        <option 
          v-for="moneda in monedas"
          :value="moneda.codigo"
          >{{ moneda.texto }}</option>
      </select>
    </div>

    <div class="campo">
      <label for="cripto-moneda">Cripto Moneda</label>
      <select 
        id="cripto-moneda"
        @input="$emit('update:cripto',$event.target.value)">
        <option value="">-Selecciona-</option>
        <option 
          v-for="criptoMoneda in criptoMonedas"
          :value="criptoMoneda.CoinInfo.Name"
          >{{ criptoMoneda.CoinInfo.FullName }}</option>
      </select>
    </div>
    <input type="submit" value="Cotizar">
  </form>
</template>

<style scoped>

</style>