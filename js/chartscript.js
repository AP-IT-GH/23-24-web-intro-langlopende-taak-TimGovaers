fetch('https://services.nvd.nist.gov/rest/json/cves/2.0/?lastModStartDate=2024-01-01T13:00:00.000%2B01:00&lastModEndDate=2024-02-16T13:36:00.000%2B01:00&resultsPerPage=10', {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'apikey': 'YOUR_API_KEY'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    if (!data.result) {
      throw new Error('Missing "result" property in API response');
    }
    const vulnerabilities = data.result.CVE_Items;
    console.log("fetching chart");
    const cveIds = vulnerabilities.map(vuln => vuln.configurations.nodes.CVE_data_format[0].CVE.CVE_data_meta.ID);
    const vulnerabilityCounts = vulnerabilities.map(vuln => vuln.impact.baseMetricV2.cvssV2.baseScore);

    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: cveIds,
        datasets: [{
          label: 'Vulnerability Count',
          data: vulnerabilityCounts,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });