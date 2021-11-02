
let pageView = document.getElementById ("pageviews") ;
let priceValue = document.getElementById ("price") ;
let price = 16;
let time = "month"

function info (item, int) {
if (int === "month") {
price = item
}else {
    price = 9 * item
}
}



 function myRange (value) {
    switch (value) {


        case "2" :


        price = 36 ;
        info (price , time) ;
                pageView.innerHTML = `1M Pageviews`
                priceValue.innerHTML = "$" + price.toFixed(2) + " / " + time ;

                break ;

                case "1" : 
                
                price = 24
                info (price , time) ;
                pageView.innerHTML = `500K Pageviews`
                priceValue.innerHTML = "$" + price.toFixed(2) + " / " + time ;

                break ;

                case "0" :
                    
                    price = 16;
                    info (price , time) ;
                    pageView.innerHTML = `100K Pageviews`
                    priceValue.innerHTML = "$" + price.toFixed(2) + " / " + time ;

                    break ;

                    case "-1" :
                        
                        price = 12;
                        info (price , time) ;
                        pageView.innerHTML = `100K Pageviews`
                        priceValue.innerHTML = "$" + price.toFixed(2) + " / " + time ;
                        break ;

                        case "-2" :
                            
                            price = 8
                            info (price , time) ;
                            pageView.innerHTML = `100K Pageviews`
                            priceValue.innerHTML = "$" + price.toFixed(2) + " / " + time ;
            
    

    }
   

}

function toggle(value) {
    if(value === true) {
      time = "year";
      price = 9 * price
      myRange(document.getElementById("price-slider").value);
    }
    else {
      time = "month";
      myRange(document.getElementById("price-slider").value);
    }
  }


document.getElementById("price-slider").oninput = function () {
    myRange(this.value)
}
document.getElementById("interval-switch").oninput = function() {
    toggle(this.checked);
  };
