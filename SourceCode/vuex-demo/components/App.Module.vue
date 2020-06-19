<template>
  <div id="app">
    <button @click="updateModuleA">A</button>
    <button @click="updateModuleB">B</button>
  </div>
</template>

<script>
  import { updateModuleA, updateModuleB} from './../vuex-module/actions'
  export default {
    vuex : {
      actions : {
        updateModuleA,
        updateModuleB
      }
    }
  }
</script>