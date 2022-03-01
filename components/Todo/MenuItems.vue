<template>
  <div>
    <EditDialog
      :dialog="editStatus"
      :task-id="taskId"
      :todo-title="todoTitle"
      @changeEditDialogStatus="changeEditDialogStatus"
    />
    <Dialog :dialog="deleteStatus" :task-id="taskId" @changeDialog="changeDialogStatus" />
    <v-menu
      bottom
      left
    >
      <template #activator="{ on, attrs }">
        <v-btn
          class="mt-6"
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          {{ index }}
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import EditDialog from '../Dialog/EditDialog';
import Dialog from '../Dialog/Dialog';

export default {
  components: { Dialog, EditDialog },
  props: {
    indexInfo: {
      type: Number,
      required: true,
    },
    taskId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      targetId: null,
      editStatus: false,
      deleteStatus: false,
      todoTitle: '',
      items: [
        {
          title: 'Edit',
          icon: 'mdi-pencil',
          click() {
            this.editStatus = true;
          },
        },
        {
          title: 'Due date',
          icon: 'mdi-calendar-range',
        },
        {
          title: 'Delete',
          icon: 'mdi-delete',
          click() {
            this.deleteStatus = true;
          },
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      deleteTodo: 'store/removeTodo',
    }),
    handleClick(i) {
      console.log('a', i);
      this.items[i].click.call(this);
      const targetTitle = this.$store.getters['store/getTasks'].find(item => item.id === (this.indexInfo + 1));
      this.todoTitle = targetTitle.title;
    },
    changeDialogStatus(status) {
      this.deleteStatus = status;
    },
    changeEditDialogStatus(status) {
      this.editStatus = status;
    },
  },
};
</script>
<style scoped></style>
