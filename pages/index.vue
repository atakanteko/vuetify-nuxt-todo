<template>
  <div class='home pa-6'>
    <v-list class='pt-0' flat>
      <v-list-item-group multiple>
        <div v-for='(item,index) in this.tasks'
             :key='index'
             :class='{ shadow:item.done }'>
          <v-list-item @click='toggleDone(item.id)'>
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox
                  :input-value='item.done'
                ></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                  :class='{"text-decoration-line-through":item.done}'>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      checkedNames: [],
      tasks: [
        {
          id: 1,
          title: 'Wake Up',
          done: false,
        },
        {
          id: 2,
          title: 'Get a Cup of Tea',
          done: false,
        },
        {
          id: 3,
          title: 'Drink Tea',
          done: false,
        },
      ],
    };
  },
  methods: {
    toggleDone(taskId) {
      const task = this.tasks.filter((item) => item.id === taskId)[0];
      task.done = !task.done;
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
