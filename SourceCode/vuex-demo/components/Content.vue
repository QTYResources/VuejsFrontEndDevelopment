<style scoped>
  .content {
    padding: 10px; margin-left: 120px; margin-right: 30px;
  }
  .item {
    position: relative; margin-bottom: 20px;
  }
  .item-controls {
    position: absolute; top:-4px; right: -30px; list-style: none; display: none;
  }
  .item:hover .item-controls{
    display: block;
  }
  .item-controls li {
    font-size:16px; min-height: 20px;
  }
</style>

<template>
  <div class="content">
    <input type="text" v-model="appName">
    <div class="item" v-for="item in items">
      <input type="text" 
        :value="item.content" 
        @blur="updateContent($index, $event.target.value)">
      <!-- <ul class="item-controls">
        <li>
          <i v-if="$index != 0" @click="sortItem($index, $index - 1)" 
            class="glyphicon glyphicon-chevron-up">  
          </i>
        </li>
        <li>
          <i @click="deleteItem($index)" class="glyphicon glyphicon-remove"></i>
        </li>
        <li>
          <i v-if="$index != items.length - 1" @click="sortItem($index, $index + 1)" 
            class="glyphicon glyphicon-chevron-down">
          </i>
        </li>
      </ul>
      <text :item-index="$index" :item="item" v-if="item.type == 'text'">
      </text>
      <ele-image :item-index="$index" :item="item" v-if="item.type == 'image'">
      </ele-image>
      <mix  :item-index="$index" :item="item" v-if="item.type == 'mix'">
      </mix> -->
    </div>
  </div>
</template>

<script>
  import { updateContent, updateName } from '../vuex/actions'

  import Text from './../base/Text.vue';
  import EleImage from './../base/Image.vue';
  import Mix from './../base/Mix.vue';

  export default {
    components : {
      Text
      , EleImage
      , Mix
    },
    vuex: {
      getters: {
        items: state => state.items,
        name : state => state.name
      },
      actions: {
        updateContent,
        updateName
      }
    },
    computed: {
      appName: {
        get() {
          return this.name;
        },
        set(val) {
          this.updateName(val);
        }
      }
    }
  }
</script>