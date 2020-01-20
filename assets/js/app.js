
d3.csv("data.csv").then(function (data) {

    // Print the milesData
    console.log(data);

    // Format the date and cast the miles value to a number
    var stateID = []
    var state = []
    var poverty = []
    var obesity = []
    var age = []
    var smokes = []
    var income =[]
    var healthcare = []

    data.forEach(function (data) {
        stateID.push(data.abbr);
        state.push(data.state);
        poverty.push(data.poverty);
        obesity.push(data.obesity);
        age.push(data.age);
        smokes.push(data.smokes);
        income.push(data.income);
        healthcare.push(data.healthcare);
    });
    console.log(stateID);
    console.log(state);
    console.log(poverty);
    console.log(obesity);
    console.log(age);
    console.log(smokes);
    console.log(income);
    console.log(healthcare);


    var trace1 = {
        x: poverty,
        y: healthcare,
        mode: 'markers+text',
        type: 'scatter',
        // name: 'Team A',
        text: stateID,
        // textposition: 'top center',
        // textfont: {
        //     family: 'Raleway, sans-serif'
        // },
        marker: { size: 20,
                color: "lightblue" }
    };

    var data = [trace1];

    var layout = {
        xaxis: {
            title: "In Poverty(%)",
            showline: true,
            autorange: true
        },
        yaxis: {
            title: "Lacks Healthcare(%)",
            showline: true,
            autorange: true
        },
        legend: {
            y: 0.5,
            yref: 'paper',
            font: {
                family: 'Arial, sans-serif',
                size: 20,
                color: 'grey',
            }
        },
        title: 'D3 Dabbler'
    };

    Plotly.newPlot('scatter', data, layout);

})