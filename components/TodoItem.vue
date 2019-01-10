<template>
  <v-list-tile 
    :class="{ 'editing': editing }" 
    class="todo-item">
    <v-list-tile-action>
      <v-checkbox
        v-if="!editing"
        :input-value="todo.done"
        color="primary"
        @change="toggleTodo(todo)"
      />
      <v-icon
        v-else
        color="primary"
      >edit</v-icon>
    </v-list-tile-action>
    <template v-if="!editing">
      <v-list-tile-content
        :class="{ 'primary--text': todo.done }"
        @dblclick="editing = true"
      >
        {{ todo.text }}
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn
          color="red lighten-3"
          flat
          icon
          @click="removeTodo(todo)"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-list-tile-action>
    </template>
    <v-text-field
      v-focus="editing"
      v-else
      ref="input"
      :value="todo.text"
      clearable
      color="primary"
      flat
      hide-details
      maxlength="1023"
      solo
      @blur="doneEdit"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
    />
  </v-list-tile>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          context.$refs.input.focus()
        })
      }
    }
  },
  props: {
    todo: {
      type: null,
      default: null
    },
  },
  data () {
    return {
      editing: false
    }
  },
  methods: {
    ...mapActions([
      'editTodo',
      'removeTodo',
      'toggleTodo'
    ]),
    doneEdit (e) {
      const value = e.target.value.trim()
      const { todo } = this
      if (!value) {
        this.removeTodo(todo)
      } else if (this.editing) {
        this.editTodo({
          todo,
          value
        })
        this.editing = false
      }
    },
    cancelEdit () {
      this.editing = false
    }
  }
}
</script>

<style lang="stylus">
.todo-item
  .v-list__tile
    height: auto
    padding-top: 12px
    padding-bottom: 12px
  &.editing .v-list__tile
    height: 48px
</style>