<template>
  <div>
    <div class="chart-wrapper w-full overflow-x-auto">
      <client-only>
        <apexchart
          class="md:w-full md:hidden overflow-x-auto"
          width="500"
          height="242"
          type="pie"
          :options="chartOptions"
          :series="series"
        />
        <apexchart
          class="md:w-full hidden md:block overflow-x-auto"
          width="500"
          type="pie"
          :options="chartOptions"
          :series="series"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      series: [80, 20],
      chartOptions: {
        labels: ['Google search ', 'Others'],
        dataLabels: {
          enabled: true
        },
        legend: {
          show: true,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '16px',
          fontFamily: 'Helvetica, Arial',
          fontWeight: 500,
          itemMargin: {
            horizontal: 15,
            vertical: 0
          }
        },
        fill: {
          colors: ['#BDBDBD', '#000000']
        },
        colors: ['#BDBDBD', '#000000'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'center',
                show: false
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
div.chart-wrapper {
  width: "100%";
  height: "100%";
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
