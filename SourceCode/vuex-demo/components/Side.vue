<style scoped>
	ul {
  	display: flex;
	}

	ul li {
	  list-style: none;
	  flex:1;
	}
</style>

<template>
  <ul>
    <li><a v-link="{ name : 'home'}">首页</a></li>
    <li><a v-link="{ name : 'list'}">列表页</a></li>
  </ul>
</template>

<script>
	import { addItem, deleteItem } from '../vuex/actions'

  export default {
  	data() {
  		return {

  		}
  	},
    vuex: {
	    actions: {
	      addItem,
	      deleteItem
	    }
	  }
  }
</script>