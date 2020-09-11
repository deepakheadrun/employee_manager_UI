<template>
  <div class="mt-8 mr-16">
    <line-chart :width="500" :height="300" :chart-data="datacollection"></line-chart>
  
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    props:['chart_data'],

    data () {
      return {
        datacollection: null,
        labels:[],
        dataset:[]
      }
    },
    watch:{
chart_data(){
       this.fillData()
}
    },
    mounted () {
      
this.fillData()
    
    },
    methods: {
      fillData () {
        this.labels.length =0
this.dataset.length=0
        this.chart_data.forEach(element => {
       this.labels.push(element.month)
       this.dataset.push(element.rating)
      });
        this.datacollection = {
          labels: this.labels.reverse(),
          datasets: [
            {
               label: 'Performance',
        pointColor: "#fff",
        borderColor: '#ffb88c',
        pointBackgroundColor: "#fff",
        pointBorderColor: "#ffb88c",
        pointHoverBackgroundColor: "#ffb88c",
        pointHoverBorderColor: "#fff",
        pointRadius: 4,
        pointHoverRadius: 4,
        fill: false,
              data: this.dataset.reverse()
            }
          ]
        }
      },
    }
  }
</script>
