<template>
  <div class="home pa-6">
    <FieldAddTask />
    <FieldTaskList v-if="getTasks.length" :get-tasks="getTasks" />
    <FieldNoTask v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FieldAddTask from '../components/Todo/FieldAddTask';
import FieldTaskList from '../components/Todo/FieldTaskList';
import FieldNoTask from '../components/Todo/FieldNoTask';

export default {
  name: 'IndexPage',
  components: {
    FieldAddTask,
    FieldTaskList,
    FieldNoTask,
  },

  computed: {
    ...mapGetters('store', ['getTasks']),
  },
};
</script>
<style lang='scss' scoped>
.no-task {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;
}
</style>
