<template>
  <div id="app">
		<side></side>
		<content></content>
  </div>
</template>

<script>
	import Side from './Side.vue'
	import Content from './Content.vue'
  export default {
    components : {
      Side,
    	Content
    }
  }
</script>