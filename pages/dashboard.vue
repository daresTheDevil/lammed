<template>
  <div>
    <v-breadcrumbs class="pt-2 ml-3">
      <v-icon slot="divider">chevron_right</v-icon>
      <v-breadcrumbs-item><v-icon medium>home</v-icon></v-breadcrumbs-item>
      <v-breadcrumbs-item>Dashboard</v-breadcrumbs-item>
    </v-breadcrumbs>
    <v-container grid-list-md>
      <v-layout
        row 
        wrap>
        <v-flex xs6>
          <v-card>
            <v-card-title>
              Upcoming Events:
            </v-card-title>
            <v-card-text>
              <v-layout
                my-2
                align-center
              >
                <strong class="mx-3 info--text text--darken-3">
                  Remaining: {{ remainingTasks }}
                </strong>

                <v-divider vertical/>

                <strong class="mx-3 black--text">
                  Completed: {{ completedTasks }}
                </strong>

                <v-spacer/>

                <v-progress-circular
                  :value="progress"
                  class="mr-2"
                />
              </v-layout>
              <v-text-field 
                v-model="task" 
                outline 
                label="Add a task..." 
                @keydown.enter="create">
                <v-fade-transition slot="append">
                  <v-icon 
                    v-if="task" 
                    @click="create">add_circle</v-icon>
                </v-fade-transition>
              </v-text-field>
            
              <v-card 
                v-if="tasks.length > 0" 
                flat>
                <v-slide-y-transition
                  group
                  tag="v-list"
                >
                  <template v-for="(task, i) in tasks">
                    <v-divider
                      v-if="i !== 0"
                      :key="`${i}-divider`"
                    />

                    <v-list-tile :key="`${i}-${task.text}`">
                      <v-list-tile-action>
                        <v-checkbox
                          v-model="task.done"
                          color="info darken-3"
                        >
                          <div
                            slot="label"
                            :class="task.done && 'grey--text' || 'text--primary'"
                            class="ml-3"
                            v-text="task.text"
                          />
                        </v-checkbox>
                      </v-list-tile-action>

                      <v-spacer/>

                      <v-scroll-x-transition>
                        <v-icon
                          v-if="task.done"
                          color="success"
                        >
                          check
                        </v-icon>
                      </v-scroll-x-transition>
                    </v-list-tile>
                  </template>
                </v-slide-y-transition>
                <v-btn @click="clearTasks">Clear</v-btn>
              </v-card>
            </v-card-text>
          </v-card>
        </v-flex>
        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TodoItem from '@/components/TodoItem.vue'


const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}
export default {
  components: {
    TodoItem
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  },
  data () {
    return {
      tasks: [
        {
          done: false,
          text: 'Foobar'
        },
        {
          done: false,
          text: 'Fizzbuzz'
        }
      ],
      task: null,
      newTodo: '',
      todos: [],
      filters: filters,
      visibility: this.filter,
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    }
  },
  computed: {
    completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      remainingTasks () {
        return this.tasks.length - this.completedTasks
      },
    // todos () {
    //   return this.$store.state.todos
    // },
    allChecked () {
      return this.todos.every(todo => todo.done)
    },
    allTodos () {
      return this.todos
    },
    activeTodos () {
      return this.todos.filter(todo => !todo.done)
    },
    completedTodos () {
      return this.todos.filter(todo => !todo.done)
    },

    // filteredTodos () {
    //   return filters(this.todos)
    // },
    remaining () {
      return this.todos.filter(todo => !todo.done).length
    },
    progressPercentage () {
      const len = this.todos.length
      return ((len - this.remaining) * 100) / len
    }
  },
  methods: {
    ...mapActions([
      'toggleAll',
      'clearCompleted'
    ]),
    clearTasks() {
      this.tasks = []
    },
    create () {
        this.tasks.push({
          done: false,
          text: this.task
        })

        this.task = null
      },
    addTodo () {
      const text = this.newTodo.trim()
      if (text) {
        // this.$store.dispatch('addTodo', text)
        this.todos.push(text)
      }
      this.newTodo = ''
    }
  }
}
</script>

<style />
