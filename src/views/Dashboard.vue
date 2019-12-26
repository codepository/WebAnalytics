<template>
  <v-container
    id="x"
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        :height="realtimeDataChart.options.height"
        style="height:300px;"
        xs12
        md12
        sm12
        lg12>
        <v-card
          :height="realtimeDataChart.options.height">
          <chartist
            :data="realtimeDataChart.data"
            :options="realtimeDataChart.options"
            type="Line"
          />
        </v-card>
      </v-flex>
      <v-flex>
        <v-data-table
          :headers="topContent.headers"
          :items="topContent.data"
          :items-per-page="100"
          class="elevation-1"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// import './../utils/fh.js'
import './../utils/fa.js'
import { getRealtimeData, getTopContent } from '@/api/tongji'
export default {
  components: {
  },
  data () {
    return {
      topContent: {
        headers: [
          { text: '标题', value: 'p.title' },
          { text: 'url', value: 'p.url' },
          { text: '浏览量', value: 'w.pv' },
          { text: '访问者数', value: 'w.uv' },
          { text: '发稿日期', value: 'p.publishdate' },
          { text: '编辑', value: 'p.author' }
        ],
        data: []
      },
      realtimeDataChart: {
        data: {
          labels: ['2019-12-17 00:00', '2019-12-17 00:00', '2019-12-17 00:00', '2019-12-17 00:00', '2019-12-17 00:00', '2019-12-17 00:00', '2019-12-17 00:00'],
          series: [
          ]
        },
        options: {
          // width: '600px',
          height: '300px',
          showPoint: false,
          axisX: { // 横坐标配置
            labelInterpolationFnc: function (value) {
              return value.substr(10)
            },
            showGrid: false
          },
          axisY: {
            onlyInteger: true
          },
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          fullWidth: true,
          showArea: true,
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          classNames: {
            chart: 'ct'
          }
        }
      }
    }
  },
  mounted () {
    this.getRealtimeData('localhost', '2019-12-19 00:00')
    this.getTopContent('localhost', new Date(), new Date())
  },
  methods: {
    getTopContent (domain, start, end) {
      getTopContent(domain, start, end).then(res => {
        this.topContent.data = res.data
      })
    },
    getRealtimeData (domain, start) {
      getRealtimeData(domain, start).then(res => {
        this.transformRealtimeData(res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    transformRealtimeData (data) {
      var max = 0
      var pv = []
      var ip = []
      var uv = []
      var labels = []
      if (data.length === 0) return
      data.forEach(row => {
        (row.pv > max) && (max = row.pv)
        labels.push(row.date)
        pv.push(row.pv)
        ip.push(row.ip)
        uv.push(row.uv)
      })
      // this.realtimeDataChart.data.labels = labels
      this.realtimeDataChart.data.series = []
      this.realtimeDataChart.data.series.push(pv, ip, uv)
      this.realtimeDataChart.options.high = max <= 10 ? 10 : max * 1.2
    }
  }
}
</script>
