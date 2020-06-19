<style scoped>
	img {
    display: block; width: 100%;
  }
</style>

<template>
	<div class="row">
		<div class="col-xs-5">
			<textarea 
	  	:value="item.content" @blur="updateContent"
	  	class="form-control"></textarea>
		</div>
		<div class="col-xs-5">
			<input v-el:file v-if="!item.url" @change="updateUrl" class="form-control" type="file">
    	<img v-if="item.url" :src="item.url">
		</div>
	</div>
  
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
	  	updateContent(e) {
	  		const { url } = this.item;
	  		this.updateItem(
	  			this.itemIndex
	  			, { type : 'mix', content : e.target.value, url : url}
	  		)
	  	},
	  	updateUrl() {
	  		const { content } = this.item;
	  		var fileElement = this.$els.file;
        var file = fileElement.files[0];
        var blobURL =  window.webkitURL.createObjectURL(file);
	  		this.updateItem(
	  			this.itemIndex
	  			, { type : 'mix', content : content, url : blobURL}
	  		)
	  	}
	  }
  }
</script>