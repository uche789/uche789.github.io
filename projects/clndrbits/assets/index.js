Vue.createApp({
  components: {
    navigation,
    calendarMonth,
    calendarYear,
  },
  data: () => ({
    calendarMonth: null,
    calendarYear: null,
    selectedDate: '',
    viewMode: '',

  }),
  mounted() {
    this.selectedDate = new Date();
    ClndrBits.calendar.init({
      dateValue: this.selectedDate,
      dateChanged: this.dateChanged
    });
  },
  computed: {
    formatSelectDate() {
      if (!this.selectedDate) return '';
      return `${this.selectedDate.getFullYear()}-${this.selectedDate.getMonth() + 1}-${this.selectedDate.getDate()}`
    }
  },
  methods: {
    dateChanged(res) {
      this.calendarMonth = res;
      this.$nextTick(() => {
        this.calendarYear = ClndrBits.calendar.getCalendarYear();
      });
    },
    resetDateNow() {
      this.selectedDate = new Date();
      ClndrBits.calendar.setDate(this.selectedDate);
    },
    selectDate(value) {
      this.selectedDate = new Date(value);
      ClndrBits.calendar.setDate(this.selectedDate);
    },
    getNextMonth() {
      ClndrBits.calendar.getNextMonth();
      console.log('hhh');
    },
    getPrevMonth() {
      console.log('sssss');
      ClndrBits.calendar.getPrevMonth();
    },
    getNextYear() {
      ClndrBits.calendar.getNextYear();
    },
    getPrevYear() {
      ClndrBits.calendar.getPrevYear();
    },
  },
  template: `
    <div class="content">
      <navigation
        @reset="resetDateNow"
        @prevYear="getPrevYear"
        @nextYear="getNextYear"
        :year="calendarMonth && calendarMonth.date.currentYear"
        :month="calendarMonth && calendarMonth.date.currentMonth.name"
      />
      <article class="calendars">
        <calendar-month
          v-if="calendarMonth"
          :month="calendarMonth.date.currentMonth.name"
          :data="calendarMonth.calendarValues"
          class="calendar-section"
          :selected-date="formatSelectDate"
          @selectDate="selectDate"
          @prevMonth="getPrevMonth"
          @nextMonth="getNextMonth"
        />
        <calendar-year 
          v-if="calendarYear"
          :data="calendarYear"
          class="calendar-section"
          :selected-date="formatSelectDate"
          @selectDate="selectDate"
        />
      </article>
    </div>
  `,
}).mount('#app');