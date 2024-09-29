// Function to check the speed of a car and calculate demerit points
function checkSpeed(speed) {
    // Define the speed limit
    const speedLimit = 70;

    // Check if the speed is below the speed limit
    let speed=140
    if (speed <= speedLimit) {
        console.log("Ok"); // If speed is less than 70, print "Ok"
    } 
    // For every 5km/s above the speed limit (70) the driver should get 1 demerit points
    else if (speed>=70 && speed<=75){
        console.log("points:1");
        
    }
    else if (speed>=75 && speed<=80){
        console.log("points:2");
        
    }
    else if (speed>=85 && speed<=90){
        console.log("Points:4");
    }
    else if (speed>=90 && speed<=95){
        console.log("Points:5");
    }
    else if (speed>=95 && speed<=100){
        console.log("Points:6");
    }
    else if (speed>=100 && speed<=105){
        console.log("Points:7");
    }
    else if (speed>=105 && speed<=110){
        console.log("Points:8");
    }
    else if (speed>=110 && speed<=115){
        console.log("Points:9");
    }
    else if (speed>=115 && speed<=120){
        console.log("Points:10");
    }
    else if (speed>=120 && speed<=125){
        console.log("Points:11");
    }
    else if (speed>=125 && speed<=130){
        console.log("Points:12");
    }
    
    // If the driver gets more than 12 points, his license will be suspended
    
    else if(speed>130){
        console.log("License Suspended")
    }
    console.log();