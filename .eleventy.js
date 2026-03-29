module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("*.json");

  // Add data files
  eleventyConfig.addGlobalData("patient", require("./patient-data.json"));
  eleventyConfig.addGlobalData("adminData", require("./admin-data.json"));

  // Date filter
  eleventyConfig.addFilter("dateFormat", function(date) {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  });

  // Trend arrow filter
  eleventyConfig.addFilter("trendArrow", function(trend) {
    if (trend === "up") return "↗️";
    if (trend === "down") return "↘️";
    return "→";
  });

  // Currency filter
  eleventyConfig.addFilter("currency", function(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  });

  // Percentage filter
  eleventyConfig.addFilter("percent", function(value) {
    return Math.round(value) + '%';
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_layouts"
    }
  };
};