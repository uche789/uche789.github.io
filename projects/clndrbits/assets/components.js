const navigation = Vue.defineComponent({
  props: {
    year: {
      type: String,
      default: '',
    },
    month: {
      type: String,
      default: '',
    }
  },
  template: `
  <nav>
    <div class="nav nav-left">
      <button @click="$emit('reset')">Today</button>
    </div>
    <div class="nav-middle nav-title">{{year}}</div>
    <div class="nav nav-right">
      <div class="controls">
        <div @click="$emit('prevYear')" title="Previous Year"><img src="./assets/img/left.svg"/></div>
        <div @click="$emit('nextYear')" title="Next Month"><img src="./assets/img/right.svg"/></div>
      </div>
    </div>
  </nav>
  `
});

const months = [
  'january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september',
  'october', 'november', 'december'
]

const calendarMonth = Vue.defineComponent({
  props: {
    month: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    selectedDate: {
      type: String,
      required: true,
    }
  },
  data: () => ({
    days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  }),
  methods: {
    getClass(field) {
      const isCurrentMonth = months[new Date(field.dateValue).getMonth()] === this.month
      return {
        [`cell--active`]: isCurrentMonth && this.selectedDate === field.dateValue,
        [`cell--${field.type}`]: true,
      }
    },
  },
  template: `
    <section class="calendar-month">
      <div class="calendar-month__content">
        <div class="calendar-month__controls">
          <span class="calendar-month__label">{{month}}</span>
          <div v-if="controls" class="controls">
            <div @click="$emit('prevMonth')" title="Previous month"><img src="./assets/img/left.svg"/></div>
            <div @click="$emit('nextMonth')" title="Next month"><img src="./assets/img/right.svg"/></div>
          </div>
        </div>
        <div class="table">
          <div class="row">
            <div v-for="day in days" :key="day" class="cell">
              <strong>{{day}}</strong>
            </div>
          </div>
          <div v-for="i in 6" :key="i" class="row">
            <div
              v-for="j in 7"
              :key="day"
              :class="getClass(data[i][j-1])"
              @click="$emit('selectDate', data[i][j-1].dateValue)"
              :data-value="data[i][j-1].dateValue"
              class="cell"
            >
              {{data[i][j-1].value}}
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})

const calendarYear = Vue.defineComponent({
  components: {
    calendarMonth,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    selectedDate: {
      type: String,
      required: true,
    }
  },
  methods: {
    selectDate(dateValue) {
      this.$emit('selectDate', dateValue);
    }
  },
  template: `
    <div class="calendar-year">
      <calendar-month 
        v-for="monthIndex in 12"
        :key="monthIndex"
        :controls="false"
        :month="data[monthIndex-1].name"
        :data="data[monthIndex-1].calendarValues"
        :selected-date="selectedDate"
        @selectDate="selectDate"
      />
    </div>
  `
});