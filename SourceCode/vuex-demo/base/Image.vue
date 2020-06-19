<style scoped>
  img {
    display: block; width: 100%;
  }
</style>
<template>
  <div>
    <input v-el:file v-if="!item.url" @change="upload" class="form-control" type="file">
    <img v-if="item.url" :src="item.url">
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
      upload(e) {
        var fileElement = this.$els.file;
        var file = fileElement.files[0];
        var blobURL =  window.webkitURL.createObjectURL(file);
        this.updateItem(this.itemIndex
          , { type : 'image', url : blobURL }
        );
      }
    }
  }
</script>