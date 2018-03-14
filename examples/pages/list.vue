<template>
  <div class="cell-swipe">
    <i-header :fixed="fixed">
        <span slot="title">index-list</span>
    </i-header>
    <i-list :data="listData">
    </i-list>
  </div>
</template>

<script>
const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane']
export default {
  data () {
    return {
      fixed: true,
      listData: []
    }
  },
  mounted () {
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
      let cells = NAMES.filter(name => name[0] === initial)
      this.listData.push({
        initial,
        cells
      })
    })
  },
  methods: {

  }
}
</script>