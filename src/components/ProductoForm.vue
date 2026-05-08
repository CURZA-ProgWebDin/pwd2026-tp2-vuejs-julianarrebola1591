<script setup>
import { ref } from 'vue'

const emit = defineEmits(['nuevo-producto'])

var id = 0
const nombre = ref('')
const precio = ref('')
const stock = ref('')
const categoria = ref('')
const error = ref('')

const crearProducto = () => {
  error.value = ''

  if (!nombre.value || !precio.value || !stock.value || !categoria.value) {
    error.value = 'Todos los campos son obligatorios.'
    return
  }

  if (isNaN(precio.value) || Number(precio.value) <= 0) {
    error.value = 'El precio debe ser un número válido mayor a 0.'
    return
  }

  if (isNaN(stock.value) || Number(stock.value) < 0) {
    error.value = 'El stock debe ser un número válido igual o mayor a 0.'
    return
  }

  const nuevoProducto = {
    id: id + 1,
    nombre: nombre.value,
    precio: Number(precio.value),
    stock: Number(stock.value),
    categoria: categoria.value
  }

  emit('nuevo-producto', nuevoProducto)

  nombre.value = ''
  precio.value = ''
  stock.value = ''
  categoria.value = ''
}

</script>

<template>
  <form @submit.prevent="crearProducto">
    <div>
      <label>Nombre del producto</label>
      <input type="text" v-model="nombre" />
    </div>

    <div>
      <label>Precio</label>
      <input type="text" v-model="precio" />
    </div>

    <div>
      <label>Stock</label>
      <input type="text" v-model="stock" />
    </div>

    <div>
      <label>Categoría</label>
      <select v-model="categoria">
        <option value="">Seleccionar categoría</option>
        <option value="Tecnología">Tecnología</option>
        <option value="Ropa">Ropa</option>
        <option value="Alimentos">Alimentos</option>
        <option value="Librería">Librería</option>
      </select>
    </div>

    <button type="submit">Crear producto</button>

    <p v-if="error">{{ error }}</p>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
}

form div {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #1f2937;
}

input,
select {
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 15px;
  transition: 0.2s;
  outline: none;
}

input:focus,
select:focus {
  border-color: #1f9678;
  box-shadow: 0 0 0 3px rgba(31, 150, 120, 0.15);
}

button {
  background-color: #1f9678;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background-color: #187a61;
}

.error {
  color: #dc2626;
  font-size: 14px;
  margin-top: -8px;
}
</style>