<template>
  <textarea 
  	:value="item.content" @blur="update"
  	class="form-control"></textarea>
</template>

<script>
  import { updateItem } from '../vuex/actions'

  export default {
    props : ['itemIndex', 'item'],
    vuex: {
	    actions: {
	      updateItem
	    }
	  },
	  methods : {
	  	update(e) {
	  		this.updateItem(
	  			this.itemIndex
	  			, { type : 'text', content : e.target.value}
	  		)
	  	}
	  }
  }
</script>