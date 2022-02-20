<template>
  <div class="no-task">
    <v-icon color="primary" size="100">
      mdi-check
    </v-icon>
    <h3 class="primary--text">
      No Task
    </h3>
  </div>
</template>

<script>
export default {
  name: 'FieldNoTask',
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
