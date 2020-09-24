/*
    ***    Setting up HTML       ***
*/

  // Create a select element
  var select = d3.select("body")
    .append("select")
    .on("change", update)

  // Add an initial option:
  select.append("option")
    .html("-- Choose a value --")

/*
    ***    api call to update data       ***
*/


 var route = "api";

 update()

// Specify an Update function to create and update visualization elements:
function update() {
    var value = this.value;

    program(route)
    function program(route) {
        // get the data
        d3.json(route).then(function (data) {

            song_data = data.cases
            // console.log(song_data)

            // Add the options:
            var options = []
            if (options.length != 1) {
                select.selectAll("option").remove()
            }
            song_data.forEach(function(d) {
                // console.log(d.SONG)
                options.push(d.SONG);
            });

            var options = select.selectAll(null)
            .data(options)
            .enter()
            .append("option")
            .text(function(d) { return d; });


            /*
                Append data to html
            */
            selected = song_data.filter(function(d) { return d.SONG == value })
            // console.log(selected)
            d3.select('.card-title').html( selected[0].SONG);
            d3.select('.card-text1').html( selected[0].FEATURE_1);
            d3.select('.card-text2').html( selected[0].FEATURE_2);
            d3.select('.card-text3').html( selected[0].FEATURE_3);

        });
    }
}