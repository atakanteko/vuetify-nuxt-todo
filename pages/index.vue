<template>
  <div class="home pa-6">
    <FieldAddTask />
    <FieldTaskList v-if="getTasks.length" :get-tasks="getTasks" />
    <div v-else class="no-task">
      <v-icon color="primary" size="100">
        mdi-check
      </v-icon>
      <h3 class="primary--text">
        No Task
      </h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FieldAddTask from '../components/Todo/FieldAddTask';
import FieldTaskList from '../components/Todo/FieldTaskList';

export default {
  name: 'IndexPage',
  components: {
    FieldAddTask,
    FieldTaskList,
  },

  computed: {
    ...mapGetters('store', ['getTasks']),
  },
};
</script>
<style lang='scss' scoped>
@import 'assets/variables';

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
