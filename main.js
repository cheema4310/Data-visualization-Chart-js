let tasteWheel = document.getElementById("tasteWheel").getContext("2d");


const labels = ["sweet", "salty", "spicy", "rich", "smokey", "savoury", "sour", "crunchy"];

Chart.defaults.global.legend.display = false;
   
// Chart.defaults.global.tooltips.enabled = false;


function onLevelClicked(flavorName, level) {
            
    console.log(' flavor = ' + flavorName + ", level = " + level);

    window.location.href = "hyperlink.html?flavorName=" + flavorName + "&level=" + level;
    

}
let backgroundColor = ["white","white","white","white","white","white","white","white"]


let data = {
    labels: labels,
    datasets:[{
        label: "level-5",
        data: [5,5,5,5,5,5,5,5],
        backgroundColor: backgroundColor,
        borderWidth: 2,
        borderColor: "black",
        hoverBorderWidth: 3,
        hoverBorderColor: "white",
        hoverBackgroundColor : "black",
        borderAlign: "inner"
    },
    {
        label: "level-4",
        data: [4,4,4,4,4,4,4,4],
        backgroundColor: backgroundColor,
        borderWidth: 2,
        borderColor: "black",
        hoverBorderWidth: 3,
        hoverBorderColor: "white",
        hoverBackgroundColor : "black",
        borderAlign : "inner"
    },
    {
        label: "level-3",
        data: [3,3,3,3,3,3,3,3],
        backgroundColor: backgroundColor,
        borderWidth: 2,
        borderColor: "black",
        hoverBorderWidth: 3,
        hoverBorderColor: "white",
        hoverBackgroundColor : "black",
        borderAlign : "inner"
    },
    {
        label: "level-2",
        data: [2,2,2,2,2,2,2,2],
        backgroundColor: backgroundColor,
        borderWidth: 2,
        borderColor: "black",
        hoverBorderWidth: 3,
        hoverBorderColor: "white",
        hoverBackgroundColor : "black",
        borderAlign : "center"
    },
    {
        label: "level-1",
        data: [1,1,1,1,1,1,1,1],
        backgroundColor: backgroundColor,
        borderWidth: 2,
        borderColor: "black",
        hoverBorderWidth: 3,
        hoverBorderColor: "white",
        hoverBackgroundColor : "black",
        borderAlign : "inner"
    }
]

}



        
    

    
        let wheelObject = {
            type: "doughnut",
            data: data,
            options:{

                cutoutPercentage: 25,
                responsive: false,
                tooltips: {
                    mode: "nearest",
                    backgroundColor: "#ffd369",
                    titleFontColor: "black",
                    bodyFontColor: "black",
                    titleFontStyle: "bold",
                    titleFontFamily: "New Times Roman",
                    displayColors: false,
                    cornerRadius: 16
                },
                legend: {
                    align: "center",
                    // onClick : flavorLegendClicked,
                    labels: {

                        boxWidth: 0,
                        
                    }
                },

                // onClick: onLevelClicked

                onClick: event => {

                    
                    // creating clicked index position
                    const clickedIndex = tasteWheelChart.getElementAtEvent(event)[0]._index;

                    // creating dataset Index position 
                    const datasetIndex = tasteWheelChart.getElementAtEvent(event)[0]._datasetIndex;
                    
                    // getting the name of falvor
                    const flavorName = data.labels[clickedIndex];

                    // getting the level of flavor
                    const level = data.datasets[datasetIndex].data[clickedIndex];

                    onLevelClicked(flavorName, level);
                    
                },
                animation: {
                    // animateRotate: false,
                    // animateScale: true,
                },

                // legend html generate 

                legendCallback: function(tasteWheelChart) {
                    
                    let text = [];
                    text.push('<ul class="list-inline flavor">');

                    for(let i=0; i<tasteWheelChart.data.labels.length; i++){
                        text.push('<li class="list-inline-item btn ');
                        text.push(tasteWheelChart.data.labels[i]);
                        text.push('">')
                        text.push(tasteWheelChart.data.labels[i]);
                        text.push('</li>');
                    }

                    text.push('</ul>');
                    return text.join("");
                    
                },


                onHover: (event, chartElement) => {
                    event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';

                    var item = tasteWheelChart.getElementAtEvent(event);

                    let hoverIndex = tasteWheelChart.getElementAtEvent(event)[0]._index;

                    let hoverDatasetIndex = tasteWheelChart.getElementAtEvent(event)[0]._datasetIndex;

                    labelsIndex = labels.indexOf(labels[hoverIndex]);

                    let itemLevel = data.datasets[hoverDatasetIndex].data[hoverIndex];
                    console.log(chartElement[0]._index, labelsIndex);


                                                                    //  check above code to get acturate results 



                    // for(let x=0; x < labels.length; x++){
                    //     if(chartElement[0]._index === labels.indexOf(labels[x])){

                    //         console.log("ab");

                    //         for(let i = hoverDatasetIndex; i<5; i++){ 

                    //                 data.datasets[i].backgroundColor[hoverIndex] = "red";
                    //                 console.log(data.datasets.indexOf(data.datasets[i]));
                                
                            
                    //         }
                    //     }
                    //     tasteWheelChart.update();
                    // }
                    
                    // tasteWheelChart.clear();
                  









                    console.log("hoverIndex = "+ hoverIndex,"hoverDatasetIndex = " + hoverDatasetIndex, "item level = " + itemLevel);

                
                }
 
                
                
            }
        }





        let tasteWheelChart = new Chart("tasteWheel", wheelObject);
        document.getElementById("legend-area").innerHTML = tasteWheelChart.generateLegend();

        


        
       
        

       


        // switch statement for redirecting user to another url

        //     switch (label) {
        //      // add case for each label/slice
        //         case 'sweet 3':
        //             alert('clicked on 3rd level of sweet');
        //             window.location.href('https://www.google.com/');
        //         break;
        //         case 'sour 2':
        //             alert('clicked on 2nd level of sour');
        //             window.location.href('https://www.chipsybrothers.com/');
        //         break;
        //         // add rests ...
        // }