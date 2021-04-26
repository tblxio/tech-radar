"use strict";

const config = async (chart) => {
  const endpoint = "./../output-data.json";

  const data = await fetch(endpoint);
  const dataJSON = await data.json();
  const entries = dataJSON.data;

  const radarConfig = {
    ...chart,
    entries,
  };

  return radarConfig;
};
