$( document ).ready(function() {
    //TODO get values from Api
    data = [ {
            "country":"Belgium",
            "year":"1980",
            "average_income":26093,
            "top1":{
                "monthly":15547,
                "percentage":7.15
            },
            "top9":{
                "monthly":5486,
                "percentage":22.70
            },
            "top40":{
                "monthly":2572,
                "percentage":47.33
            },
            "bottom50":{
                "monthly":992,
                "percentage":22.82
            }
        },
        {
            "country":"Belgium",
            "year":"2017",
            "average_income":41635,
            "top1":{
                "monthly":26958,
                "percentage":7.77
            },
            "top9":{
                "monthly":9105,
                "percentage":23.62
            },
            "top40":{
                "monthly":4164,
                "percentage":48.01
            },
            "bottom50":{
                "monthly":1428,
                "percentage":20.59
            }
        },
        {
            "country":"USA",
            "year":"2019",
            "average_income":53500,
            "top1":{
                "monthly":91485,
                "percentage":20.52
            },
            "top9":{
                "monthly":13008,
                "percentage":26.26
            },
            "top40":{
                "monthly":4519,
                "percentage":40.55
            },
            "bottom50":{
                "monthly":1129,
                "percentage":12.67
            }
        },
        {
            "country":"USA",
            "year":"1950",
            "average_income":16976,
            "top1":{
                "monthly":24460,
                "percentage":17.29
            },
            "top9":{
                "monthly":3455,
                "percentage":21.97
            },
            "top40":{
                "monthly":1537,
                "percentage":43.46
            },
            "bottom50":{
                "monthly":496,
                "percentage":17.55
            }
        },
        {
            "country":"USA",
            "year":"1980",
            "average_income":30984,
            "top1":{
                "monthly":28866,
                "percentage":11.18
            },
            "top9":{
                "monthly":6744,
                "percentage":23.50
            },
            "top40":{
                "monthly":2940,
                "percentage":45.55
            },
            "bottom50":{
                "monthly":1019,
                "percentage":19.74
            }
        },
        {
            "country":"Example - Full Equality",
            "year":"3000",
            "average_income":100000,
            "top1":{
                "monthly":2174,
                "percentage":1
            },
            "top9":{
                "monthly":2174,
                "percentage":9
            },
            "top40":{
                "monthly":2174,
                "percentage":40
            },
            "bottom50":{
                "monthly":2174,
                "percentage":50
            }
        }
    ];

    //Get countries and date
    for(var i = 0; i < data.length; i++) {
        $('#country-list').append('<option value='+i+'>' + data[i].country + " - " + data[i].year +'</option>');
     }

     for(var i = 0; i < data.length; i++) {
         if (i == 1) {
            $('#country-list-right').append('<option value='+i+' selected>' + data[i].country + " - " + data[i].year +'</option>');
         } else {
            $('#country-list-right').append('<option value='+i+'>' + data[i].country + " - " + data[i].year +'</option>');
         }
     }

    $('.country-list').on('change', function() {
        var l = $('#country-list').val();
        var r = $('#country-list-right').val();
        empty_charts();
        create_charts(data[l],data[r]);
    });

    create_charts(data[0],data[1]);

    function create_charts(left,right){

        var divider = 3;//use for size adjustement
        var cash_size = 25;
        var cash_value = 1000;

        //TITLES
        $("#top1_title").append(create_title_card("For the richest person","success",left.top1.monthly,left.top1.percentage,0))
        $("#top9_title").append(create_title_card("For the next 9 persons","info",left.top9.monthly,left.top9.percentage,0))
        $("#top40_title").append(create_title_card("For the 40 persons in the middle","warning",left.top40.monthly,left.top40.percentageo,0))
        $("#bottom50_title").append(create_title_card("For the poorest 50 persons","red",left.bottom50.monthly,left.bottom50.percentage,0))

        $("#top1_title_right").append(create_title_card("For the richest person","success",right.top1.monthly,top1.percentage,1))
        $("#top9_title_right").append(create_title_card("For the next 9 persons","info",right.top9.monthly,top9.percentage,1))
        $("#top40_title_right").append(create_title_card("For the 40 persons in the middle","warning",right.top40.monthly,top40.percentage,1))
        $("#bottom50_title_right").append(create_title_card("For the poorest 50 persons","red",right.bottom50.monthly,bottom50.percentage,1))
        
        //PEOPLE
        
            $("#top1").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(left.top1.monthly)/ divider + "px;height:" + "auto" + ";'>");
        for (let step = 0; step < 9; step++) 
            $("#top9").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(left.top9.monthly)/divider + "px;height:" + "auto" + ";'>");
        for (let step = 0; step < 40; step++) 
            $("#top40").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(left.top40.monthly)/divider + "px;'>");
        for (let step = 0; step < 50; step++) 
            $("#bottom50").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(left.bottom50.monthly)/divider + "px;'>");
        
        $("#top1_right").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(right.top1.monthly)/divider + "px;'>");
        for (let step = 0; step < 9; step++) 
            $("#top9_right").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(right.top9.monthly)/divider + "px;'>");
        for (let step = 0; step < 40; step++) 
            $("#top40_right").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(right.top40.monthly)/divider + "px;'>");
        for (let step = 0; step < 50; step++) 
            $("#bottom50_right").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(right.bottom50.monthly)/divider + "px;'>");

        // Cash Pile  

        //TITLES
        var country_name = left.country + " - " + left.year;
        var country_name_right = right.country + " - " + right.year;
        $("#top1_title_cash").append('<div>' + country_name + '</div>');
        $("#top1_title_right_cash").append('<div class="text-right">' + country_name_right + '</div>');

        $("#top1_title_cash").append(create_title_card("The richest person gets","success",left.top1.monthly,left.top1.percentage,0))
        $("#top9_title_cash").append(create_title_card("The next 9 persons share","info",left.top9.monthly * 9,left.top9.percentage,0))
        $("#top40_title_cash").append(create_title_card("The 40 persons in the middle share","warning",left.top40.monthly * 40,left.top40.percentageo,0))
        $("#bottom50_title_cash").append(create_title_card("The poorest 50 persons share","red",left.bottom50.monthly * 50,left.bottom50.percentage,0))

        $("#top1_title_right_cash").append(create_title_card("The richest person gets","success",right.top1.monthly,top1.percentage,1))
        $("#top9_title_right_cash").append(create_title_card("The next 9 persons share","info",right.top9.monthly * 9,top9.percentage,1))
        $("#top40_title_right_cash").append(create_title_card("The 40 persons in the middle share","warning",right.top40.monthly * 40,top40.percentage,1))
        $("#bottom50_title_right_cash").append(create_title_card("he poorest 50 persons share","red",right.bottom50.monthly * 50,bottom50.percentage,1))

        total = (1 * left.top1.monthly) / cash_value;
        for (let step = 0; step < total; step++)  
            $("#top1_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;height:" + "auto" + ";'>");
        total = (9 * left.top9.monthly) / cash_value;
        for (let step = 0; step < total; step++) 
            $("#top9_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;height:" + "auto" + ";'>");
        total = (40 * left.top40.monthly) / cash_value;
        for (let step = 0; step < total; step++) 
            $("#top40_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;'>");
        total = (50 * left.bottom50.monthly) / cash_value;
        for (let step = 0; step < total; step++) 
            $("#bottom50_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;'>");

        total = (1 * right.top1.monthly) / cash_value;
        for (let step = 0; step < total; step++)  
            $("#top1_right_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;height:" + "auto" + ";'>");
        total = (9 * right.top9.monthly) / cash_value;
        for (let step = 0; step < total; step++) 
            $("#top9_right_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;height:" + "auto" + ";'>");
        total = (40 * right.top40.monthly) / cash_value;
        for (let step = 0; step < total; step++) 
            $("#top40_right_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;'>");
        total = (50 * right.bottom50.monthly) / cash_value;
        for (let step = 0; step < total; step++) 
            $("#bottom50_right_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;'>");

        // end Cash Pile 


        //Progress repartition
        $("#progress_country_title").append(left.country + " - " + left.year);
        $("#progress_country_right_title").append(right.country + " - " + right.year);

        $("#progress_country").append(create_progress_bar(left));
        $("#progress_country_right").append(create_progress_bar(right));

    }

    function empty_charts(){
        $("#top1").empty();
        $("#top9").empty();
        $("#top40").empty();
        $("#bottom50").empty();

        $("#top1_title").empty();
        $("#top9_title").empty();
        $("#top40_title").empty();
        $("#bottom50_title").empty();

        $("#top1_right").empty();
        $("#top9_right").empty();
        $("#top40_right").empty();
        $("#bottom50_right").empty();

        $("#top1_title_right").empty();
        $("#top9_title_right").empty();
        $("#top40_title_right").empty();
        $("#bottom50_title_right").empty();
        //cash
        $("#top1_cash").empty();
        $("#top9_cash").empty();
        $("#top40_cash").empty();
        $("#bottom50_cash").empty();

        $("#top1_title_cash").empty();
        $("#top9_title_cash").empty();
        $("#top40_title_cash").empty();
        $("#bottom50_title_cash").empty();

        $("#top1_right_cash").empty();
        $("#top9_right_cash").empty();
        $("#top40_right_cash").empty();
        $("#bottom50_right_cash").empty();

        $("#top1_title_right_cash").empty();
        $("#top9_title_right_cash").empty();
        $("#top40_title_right_cash").empty();
        $("#bottom50_title_right_cash").empty();

        //Progress
        $("#progress_country").empty();
        $("#progress_country_right").empty();

        $("#progress_country_title").empty();
        $("#progress_country_right_title").empty();
    }

    //Compute for progress bar (width?)
    //Calculate Ration of ????	
    //TOP 1
    //TITLE
    function create_title_card(title,color,monthly,ratio,direction){
        if(direction){
            var title_card = `
            <div class="info-box mb-3 bg-` + color +  `">
                <div class="info-box-content salary-box">
                    <span class="info-box-text text-right">
                    ` + title +  `
                    </span>
                    <span class="info-box-number" style="font-size:xxx-large;">€ ` 
                    + monthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); +  
                    `</span>
                </div>
            </div>
            `;
        } else {
            /* with details
        var title_card = `
            <div class="info-box mb-3 bg-` + color +  `">
                <div class="info-box-content text-right">
                <span class="info-box-text text-left">
                ` + title +  `
                </span>
                <span class="info-box-number">Monthly Salary : ` + monthly +  `</span>
                <div class="progress">
                    <div class="progress-bar" style="animation-direction: reverse;width: ` + ratio +  `%"></div>
                </div>
                <span class="progress-description">
                        <span class="top1-total-value">` + ratio +  `</span>% of Total Revenue
                    </span>
                </div>
                <span class="info-box-icon"><i class="fas fa-dollar-sign"></i></span>
                <!-- /.info-box-content -->
            </div>
            `;*/
            var title_card = `
            <div class="info-box mb-3 bg-` + color +  `">
                <div class="info-box-content salary-box">
                    <span class="info-box-text">
                    ` + title +  `
                    </span>
                    <span class="info-box-number text-right" style="font-size:xxx-large;">€ ` 
                    + monthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); +  
                    ` </span>
                </div>
            </div>
            `;
        }
        return title_card;

    }

    function create_progress_bar(values){
        var progress_bar= `
        <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: ` + values.top1.percentage +  `%" aria-valuenow="` + values.top1.percentage +  `" aria-valuemin="0" aria-valuemax="100">TOP 1% : ` + values.top1.percentage +  `%</div>
            <div class="progress-bar bg-info" role="progressbar" style="width: ` + values.top9.percentage +  `%" aria-valuenow="` + values.top9.percentage +  `" aria-valuemin="0" aria-valuemax="100">TOP 9% : ` + values.top9.percentage +  `%</div>
            <div class="progress-bar bg-warning" role="progressbar" style="width: ` + values.top40.percentage +  `%" aria-valuenow="` + values.top40.percentage +  `" aria-valuemin="0" aria-valuemax="100">Middle 40% : ` + values.top40.percentage +  `%</div>
            <div class="progress-bar bg-red" role="progressbar" style="width: ` + values.bottom50.percentage +  `%" aria-valuenow="` + values.bottom50.percentage +  `" aria-valuemin="0" aria-valuemax="100">Bottom 50% : ` + values.bottom50.percentage +  `%</div>
        </div>
        `;	
        return progress_bar;
    }

});