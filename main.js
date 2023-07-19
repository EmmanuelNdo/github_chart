(async function () {
  const response = await fetch("./repositories.json");
  const json = await response.json();

  const repositories = json.items;
  console.log("repositories: ", repositories);

  const repos = repositories.map((repository) => ({
    name: repository.name,
    stars: repository.stargazers_count,
  }));

  ///console.log("json: ", json);

  var chartDom = document.querySelector("div.diagram");
  if (chartDom === null) {
    throw new Error("div.diagram not found");
  }
  var myChart = echarts.init(chartDom, "vintage");
  var option;

  option = {
    xAxis: {
      type: "category",
      data: repos.map((r) => r.name),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: repos.map((r) => r.stars),
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };

  option && myChart.setOption(option);
})();
