<template>
    <div class="side-bar-view">
        <pre>
        Usuario:
        detalles:
        nombre: {{user.nombres}},
        primer apellido: {{user.primerApellido}},
        rol: {{user.rol}}
        </pre>
    </div>
</template>
<script>
export default {
    props:[
        'user'
    ]
}
</script>

<style scoped>
.side-bar-view {
    padding: 150px 0;
    text-align: left;
  width: 200px;
  background-color: white;
  height: 100%;
  overflow: hidden;
}
</style>
