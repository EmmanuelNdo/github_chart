(async function () {
  const response = await fetch(
    "https://api.github.com/search/repositories?q=stars%3A%3E10000+data-visualization&sort=stars&order=desc"
  );
  const json = await response.json();

  const repositories = json.items;

  const filterRepos = repositories.filter(
    (repo) =>
      ![
        "GitHub-Chinese-Top-Charts",
        "helm",
        "data-science",
        "umami",
        "tui.editor",
        "charts",
        "analytics",
        "sampler",
        "netdata",
        "pixijs",
        "metabase",
        "directus",
        "awesome-datascience",
        "Data-Science-For-Beginners",
        "awesome-creative-coding",
        "best-of-ml-python",
        "awesome-bigdata",
      ].includes(repo.name)
  );

  const repos = filterRepos.map((repository) => ({
    name: repository.name,
    stars: repository.stargazers_count,
  }));
  console.log("repositories: ", repositories);

  var chartDom = document.querySelector("div.diagram");
  if (chartDom === null) {
    throw new Error("div.diagram not found");
  }
  var myChart = echarts.init(chartDom, "dark");
  var option = {
    grid: {
      top: 10,
      bottom: 50,
      left: 200,
      right: 30,
    },
    axisLabel: {
      color: "white",
    },

    yAxis: {
      type: "category",
      data: repos.map((r) => r.name).reverse(),
    },
    xAxis: {
      type: "value",
    },
    series: [
      {
        data: repos.map((r) => r.stars).reverse(),
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
        label: {
          show: true,
          precision: 1,
          position: "right",
          color: "white",
          Fontweight: "bold",
          fontFamily: "monospace",
        },
      },
    ],
  };

  myChart.setOption(option);
})();
