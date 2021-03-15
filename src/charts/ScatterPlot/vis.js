import * as d3 from 'd3';

//const draw = (props) => {
//    d3.select('.vis-scatterplot > *').remove();
//    const width = props.width;
//    const height = props.height;
//    d3.select('.vis-scatterplot').append('svg').attr('width',width).attr('height',height)
//}
//width = 950 - margin.left - margin.right,

const draw = (props) => {
    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 1100,
        height = 900 - margin.top - margin.bottom;


    // append the svg object to the body of the page
    var svg = d3.select(".vis-scatterplot")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")")

    //Read the data
    //d3.csv("https://raw.githubusercontent.com/mzhao98/data_store/main/cer_test2.csv", function(data) {
    d3.csv("cer_test.csv", function(data) {
      // Add X axis
      var x = d3.scaleLinear()
        .domain([0, 145])
        .range([ 0, width ]);
      svg.append("g")
        .attr("class", "myXaxis")   // Note that here we give a class to the X axis, to be able to call it later and modify it
        .call(d3.axisBottom(x))
        .attr("opacity", "1")

      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, 140])
        .range([0, height]);
      svg.append("g")
        .call(d3.axisLeft(y));

      // Add dots
      svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
          .attr("cx", function (d) { return x(d.y); } )
          .attr("cy", function (d) { return y(d.x); } )
          .attr("r", 3.5)
          .style("fill", function (d) { return (d.color); })
          .attr("opacity", "0")



      svg.selectAll("circle")
        .transition()
        .delay(function(d,i){return(i*10)})
        .duration(1000)
        .attr("opacity", "1")



    })


}


export default draw;