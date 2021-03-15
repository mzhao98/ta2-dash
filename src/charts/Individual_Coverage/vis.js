




import * as d3 from 'd3';

//const draw = (props) => {
//    d3.select('.vis-scatterplot > *').remove();
//    const width = props.width;
//    const height = props.height;
//    d3.select('.vis-scatterplot').append('svg').attr('width',width).attr('height',height)
//}
function transition(path) {
    path.transition()
        .duration(2000)
        .attrTween("stroke-dasharray", tweenDash);
}
function tweenDash() {
    var l = this.getTotalLength(),
        i = d3.interpolateString("0," + l, l + "," + l);
    return function (t) { return i(t); };
}

const draw = (props) => {
    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 950 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;


    // append the svg object to the body of the page
    var svg = d3.select(".ind_coverage")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")")

    //Read the data
    d3.csv("https://raw.githubusercontent.com/mzhao98/data_store/main/xy_traj_cer.csv", function(data) {

      // Add X axis
      var x = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.ID; })])
        .range([ 0, width ]);
      svg.append("g")
        .attr("class", "myXaxis")   // Note that here we give a class to the X axis, to be able to call it later and modify it
        .call(d3.axisBottom(x))
        .attr("opacity", "1")

//      var x = d3.scaleLinear()
//      .domain(d3.extent(data, function(d) { return d.date; }))
//      .range([ 0, width ]);
//      svg.append("g")
//      .attr("transform", "translate(0," + height + ")")
//      .call(d3.axisBottom(x));

      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, 1300])
        .range([height, 0]);
      svg.append("g")
       .attr("class", "myYaxis")
        .call(d3.axisLeft(y));

      svg.append("text")
        .attr("class", "myXaxis")
        .attr("text-anchor", "end")
        .attr("x", width/2)
        .attr("y", 0)
        .text("Seconds Elapsed");


      svg.append("text")
        .attr("class", "myYaxis")
        .attr("text-anchor", "end")
        .attr("x", -50)
        .attr("y", -50)
//        .attr("y", width/2)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Coverage");

//       Add the line
      svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "#000000")
          .attr("stroke-width", 1.5)
          .attr("d", d3.line()
            .x(function(d) { return x(d.ID) })
            .y(function(d) { return y(d.ideal_coverage) })
            )
            .attr("opacity", "1")

     svg.append("text")
        .attr("class", "path")
        .attr("text-anchor", "end")
        .attr("x", width+10)
        .attr("y", 50)
        .text("optimal team");

//       var line = d3.svg.line()
//        .interpolate("linear")
//        .x(function(d) { return x(d.ID); })
//        .y(function(d) { return y(d.coverage); });


      // Add dots
//      svg.append('g')
//        .selectAll("dot")
//        .data(data)
//        .enter()
//        .append("circle")
//          .attr("cx", function (d) { return x(d.ID); } )
//          .attr("cy", function (d) { return y(d.coverage); } )
//          .attr("r", 2.5)
//          .style("fill", "#69b3a2")
//          .attr("opacity", "0")
//          .call(transition);
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

        svg.selectAll("path")
          .attr("opacity", "1")




      svg.selectAll("circle")
        .transition()
        .delay(function(d,i){return(i*100)})
        .duration(2000)
        .attr("opacity", "1")

    })
}


export default draw;