<template>
  <v-list class="pt-0" flat>
    <v-list-item-group multiple>
      <SingleTask
        v-for="(item,index) in getTasks"
        :key="index"
        :class="{ shadow:item.done }"
        :item="item"
      />
    </v-list-item-group>
  </v-list>
</template>

<script>
import SingleTask from './SingleTask';

export default {
  name: 'FieldTaskList',
  components: {
    SingleTask,
  },
  props: {
    getTasks: {
      type: Array,
      default: null,
    },
  },
};
</script>
<style lang='scss' scoped>
@import 'assets/variables';

.shadow {
  background-color: $light-blue;
}
</style>
