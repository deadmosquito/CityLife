$(document).ready(function () {
    var teleportCitiesArr = ["aarhus",
        "adelaide",
        "albuquerque",
        "almaty",
        "amsterdam",
        "anchorage",
        "andorra",
        "ankara",
        "asheville",
        "asuncion",
        "athens",
        "atlanta",
        "auckland",
        "austin",
        "baku",
        "bali",
        "bangkok",
        "barcelona",
        "beijing",
        "beirut",
        "belfast",
        "belgrade",
        "belize city",
        "bengaluru",
        "bergen",
        "berlin",
        "bern",
        "birmingham",
        "birmingham al",
        "bogota",
        "boise",
        "bologna",
        "bordeaux",
        "boston",
        "boulder",
        "bozeman",
        "bratislava",
        "brighton",
        "brisbane",
        "bristol",
        "brno",
        "brussels",
        "bucharest",
        "budapest",
        "buenos aires",
        "buffalo",
        "cairo",
        "calgary",
        "cambridge",
        "cape town",
        "caracas",
        "cardiff",
        "casablanca",
        "charleston",
        "charlotte",
        "chattanooga",
        "chennai",
        "chiang mai",
        "chicago",
        "chisinau",
        "christchurch",
        "cincinnati",
        "cleveland",
        "cluj napoca",
        "cologne",
        "colorado springs",
        "columbus",
        "copenhagen",
        "cork",
        "curitiba",
        "dallas",
        "dar es salaam",
        "delhi",
        "denver",
        "des moines",
        "detroit",
        "doha",
        "dresden",
        "dubai",
        "dublin",
        "dusseldorf",
        "edinburgh",
        "edmonton",
        "eindhoven",
        "eugene",
        "florence",
        "florianopolis",
        "fort collins",
        "frankfurt",
        "fukuoka",
        "gaillimh",
        "gdansk",
        "geneva",
        "gibraltar",
        "glasgow",
        "gothenburg",
        "grenoble",
        "guadalajara",
        "guatemala city",
        "halifax",
        "hamburg",
        "hannover",
        "havana",
        "helsinki",
        "ho chi minh city",
        "hong kong",
        "honolulu",
        "houston",
        "hyderabad",
        "indianapolis",
        "innsbruck",
        "istanbul",
        "jacksonville",
        "jakarta",
        "johannesburg",
        "kansas city",
        "karlsruhe",
        "kathmandu",
        "kiev",
        "kingston",
        "knoxville",
        "krakow",
        "kuala lumpur",
        "kyoto",
        "lagos",
        "la paz",
        "las palmas de gran canaria",
        "las vegas",
        "lausanne",
        "leeds",
        "leipzig",
        "lille",
        "lima",
        "lisbon",
        "liverpool",
        "ljubljana",
        "london",
        "los angeles",
        "louisville",
        "luxembourg",
        "lviv",
        "lyon",
        "madison",
        "madrid",
        "malaga",
        "malmo",
        "managua",
        "manchester",
        "manila",
        "marseille",
        "medellin",
        "melbourne",
        "memphis",
        "mexico city",
        "miami",
        "milan",
        "milwaukee",
        "minneapolis saint paul",
        "minsk",
        "montevideo",
        "montreal",
        "moscow",
        "mumbai",
        "munich",
        "nairobi",
        "nantes",
        "naples",
        "nashville",
        "new orleans",
        "new york",
        "nice",
        "nicosia",
        "oklahoma city",
        "omaha",
        "orlando",
        "osaka",
        "oslo",
        "ottawa",
        "oulu",
        "oxford",
        "palo alto",
        "panama",
        "paris",
        "perth",
        "philadelphia",
        "phnom penh",
        "phoenix",
        "phuket",
        "pittsburgh",
        "portland me",
        "portland or",
        "porto",
        "porto alegre",
        "prague",
        "providence",
        "quebec",
        "quito",
        "raleigh",
        "reykjavik",
        "richmond",
        "riga",
        "rio de janeiro",
        "riyadh",
        "rochester",
        "rome",
        "rotterdam",
        "saint petersburg",
        "salt lake city",
        "san antonio",
        "san diego",
        "san francisco bay area",
        "san jose",
        "san juan",
        "san luis obispo",
        "san salvador",
        "santiago",
        "santo domingo",
        "sao paulo",
        "sarajevo",
        "saskatoon",
        "seattle",
        "seoul",
        "seville",
        "shanghai",
        "singapore",
        "skopje",
        "sofia",
        "st louis",
        "stockholm",
        "stuttgart",
        "sydney",
        "taipei",
        "tallinn",
        "tampa bay area",
        "tampere",
        "tartu",
        "tashkent",
        "tbilisi",
        "tehran",
        "tel aviv",
        "the hague",
        "thessaloniki",
        "tokyo",
        "toronto",
        "toulouse",
        "tunis",
        "turin",
        "turku",
        "uppsala",
        "utrecht",
        "valencia",
        "valletta",
        "vancouver",
        "victoria",
        "vienna",
        "vilnius",
        "warsaw",
        "washington dc",
        "wellington",
        "winnipeg",
        "wroclaw",
        "yerevan",
        "zagreb",
        "zurich"]
    var jobKeyword
    var checkForCityToL
    var checkForCitySecondToL
    var checkForCityThirdToL

    ///////////////////Showing the search Results//////////////////////////
    $("#submit").on("click", function (evt) {
        evt.preventDefault()
        $('.hideDiv').show()
        jobKeyword = $("#search").val()
        $('#results').empty()

        var queryURLadzuna = "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=b1a5ea2c&app_key=d7086361e00ef3e626c405833d03f42f&results_per_page=300&what=" + jobKeyword + "&&content-type=application/json"


        $.ajax({
            url: queryURLadzuna,
            method: "GET"
        }).then(function (response) {
            // console.log(response)
            var getResult = response.results
            ///////////////////////First Loop/////////////////
            for (var i = 0; i < getResult.length; i++) {

                var checkForCity = getResult[i].location.area[1]
                if (checkForCity === undefined) {
                    console.log('Undefined')
                }
                else {
                    checkForCityToL = checkForCity.toLowerCase()
                    for (var j = 0; j < teleportCitiesArr.length; j++) {
                        var value = teleportCitiesArr[j];

                        if (checkForCityToL === value) {
                            console.log(value)
                            console.log(checkForCityToL)
                            console.log('I: ' + i)
                            console.log('J: ' + j)

                            var newDiv = $("<div class='row'>").append(
                                $('<div class = "col-md-12 title-txt" id= "container-title">').html(getResult[i].title),
                                $('<div class ="col-md-12" id="job-description">').html('<span class="desc-txt">Job Description: </span>' + getResult[i].description+'<a href="'+getResult[i].redirect_url+'" target="_blank">Read More</a>'),
                                $('<div class="col-md-12" id="container-company">').html('<span class="company-txt">Company Name: </span>' + getResult[i].company.display_name),
                                $('<div class ="col-md-12" id="posted">').html('<span class="date-txt">Date Created: </span><span class="date-data">' + getResult[i].created+'</span>'),
                                $('<button id ="container-city">').addClass('city').attr('value', getResult[i].location.area[1]).html(getResult[i].location.area[1] + ", " + getResult[i].location.area[0]),
                            
                            )
                            $("#results").append(newDiv)
                            $("#results").append("<hr>")
                        }
                        else (
                            console.log('no')
                        )

                    }
                }
            }
            ///////////////////////Second Loop/////////////////
            for (var i = 0; i < getResult.length; i++) {

                var checkForCitySecond = getResult[i].location.area[2]
                if (checkForCitySecond === undefined) {
                    console.log('Undefined')
                }
                else {
                    checkForCitySecondToL = checkForCitySecond.toLowerCase()
                    for (var j = 0; j < teleportCitiesArr.length; j++) {
                        var value = teleportCitiesArr[j];

                        if (checkForCitySecondToL === value) {
                            console.log(value)
                            console.log(checkForCitySecondToL)
                            console.log('I: ' + i)
                            console.log('J: ' + j)

                            var newDiv = $("<div class='row'>").append(
                                $('<div class = "col-md-12 title-txt" id= "container-title">').html(getResult[i].title),
                                $('<div class ="col-md-12" id="job-description">').html('<span class="desc-txt">Job Description: </span>' + getResult[i].description+'<a href="'+getResult[i].redirect_url+'" target="_blank">Read More</a>'),
                                $('<div class="col-md-12" id="container-company">').html('<span class="company-txt">Company Name: </span>' + getResult[i].company.display_name),
                                $('<div class ="col-md-12" id="posted">').html('<span class="date-txt">Date Created: </span><span class="date-data">' + getResult[i].created+'</span>'),
                                $('<button id ="container-city">').addClass('city').attr('value', getResult[i].location.area[2]).html(getResult[i].location.area[2] + ", " + getResult[i].location.area[1]),
                                $("#results").append("<hr>")
                            )
                            $("#results").append(newDiv)
                        }
                        else (
                            console.log('no')
                        )

                    }
                }
            }
            ///////////////////////ThirdLoop/////////////////
            for (var i = 0; i < getResult.length; i++) {

                var checkForCityThird = getResult[i].location.area[3]
                if (checkForCityThird === undefined) {
                    console.log('Undefined')
                }
                else {
                    checkForCityThirdToL = checkForCityThird.toLowerCase()
                    for (var j = 0; j < teleportCitiesArr.length; j++) {
                        var value = teleportCitiesArr[j];

                        if (checkForCityThirdToL === value) {
                            console.log(value)
                            console.log(checkForCityThird)
                            console.log('I: ' + i)
                            console.log('J: ' + j)

                            var newDiv = $("<div class='row'>").append(
                                $('<div class = "col-md-12 title-txt" id= "container-title">').html(getResult[i].title),
                                $('<div class ="col-md-12" id="job-description">').html('<span class="desc-txt">Job Description: </span>' + getResult[i].description+'<a href="'+getResult[i].redirect_url+'" target="_blank">Read More</a>'),
                                $('<div class="col-md-12" id="container-company">').html('<span class="company-txt">Company Name: </span>' + getResult[i].company.display_name),
                                $('<div class ="col-md-12" id="posted">').html('<span class="date-txt">Date Created: </span><span class="date-data">' + getResult[i].created+'</span>'),
                                $('<button id ="container-city">').addClass('city').attr('value', getResult[i].location.area[3]).html(getResult[i].location.area[3] + ", " + getResult[i].location.area[2]),
                               
                            )
                            $("#results").append(newDiv)
                            $("#results").append("<hr>")
                        }
                        else (
                            console.log('no')
                        )

                    }
                }
            }

        })

    })
    //////////////////Showing the Life score result////////////////////////////
    $(".row").on("click", ".city", function () {
        var city = $(this).val()
        var widgetCity = city.replace(' ', '-')
        console.log(city)
        var queryURLTelePort = "https://teleport.org/cities/" + widgetCity + "/widget/scores/?currency=USD&citySwitcher=false"
        $("#widget").html('</h3><script async class="teleport-widget-script showingResults" data-url=' + queryURLTelePort 
        + ' data-max-width="770" data-height="977" src="https://teleport.org/assets/firefly/widget-snippet.min.js"></script>')


    })

})

//var returnMainCities = adzunaAPICities.filter(function(val) {
  //  return teleportAPIcities.indexOf(val) != -1;
 // });
//var result = x.filter(y.includes)
//console.log(returnMainCities);
//https://developers.teleport.org/assets/urban_areas.json