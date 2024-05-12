const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const data = {
  labels: labels,
  datasets: [{
    label: 'Fishing Attempts',
    data: [50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325],
    backgroundColor: [
      'rgba(165, 232, 135, 1)',
      'rgba(165, 232, 135, 1)',
      'rgba(165, 232, 135, 1)',
      'rgba(165, 232, 135, 1)',
      'rgba(165, 232, 135, 1)',
      'rgba(165, 232, 135, 1)'
    ],
    borderColor: [
      'rgba(8, 145, 3, 1)',
      'rgba(8, 145, 3, 1)',
      'rgba(8, 145, 3, 1)',
      'rgba(8, 145, 3, 1)',
      'rgba(8, 145, 3, 1)',
      'rgba(8, 145, 3, 1)'
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true, 
    maintainAspectRatio: true, 
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const myChart = new Chart(
  document.getElementById('myChart').getContext('2d'),
  config
);

// to adjust the height and ratio of the chart, you can use the following code:
const chartContainer = document.getElementById('myChart').parentElement;
const chartHeight = chartContainer.offsetHeight;
const chartWidth = chartContainer.offsetWidth;

//myChart.resize(chartWidth, chartHeight);