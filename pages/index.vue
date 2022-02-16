<template>
  <div class='home pa-6'>
    <v-list class='pt-0' flat>
      <v-list-item-group multiple>
        <div v-for='(item,index) in this.tasks' :key='index'>
          <v-list-item>
            <template v-slot:default='{ active, }'>
              <v-list-item-action>
                <v-checkbox
                  :input-value='active'
                  color='primary'
                ></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
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
      tasks: [
        { id: 1, title: 'Wake Up' },
        { id: 2, title: 'Get a Cup of Tea' },
        { id: 3, title: 'Drink Tea' },
      ],
    };
  },
};
</script>
