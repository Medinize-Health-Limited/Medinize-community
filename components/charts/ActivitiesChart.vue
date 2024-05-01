<template>
  <div class="">
    <client-only>
      <div class="chart-wrapper md:w-full overflow-x-auto">
        <apexchart
          class="md:w-full overflow-x-auto"
          width="1000"
          height="330"
          type="line"
          :options="chartOptions"
          :series="series"
        />
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data () {
    return {
      series: [{
        name: 'Male',
        data: [23, 30, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]
      }, {
        name: 'Female',
        data: [34, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        },
        colors: ['#8A7EF0', '#7CE5C1'],
        markers: {
          size: 5,
          hover: {
            sizeOffset: 5
          }
        }
      }
    }
  }
}
</script>

<style scoped>
div.chart-wrapper {
  width: "100%";
  display: flex;
  height: "50%";
  align-items: center;
  justify-content: flex-start;
}

.align-baseline {
  vertical-align: baseline;
}
</style>
