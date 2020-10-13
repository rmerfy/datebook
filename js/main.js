let x1 = document.querySelector('.res-x1'),
    x2 = document.querySelector('.res-x2'),
    x3 = document.querySelector('.res-x3'),
    x4 = document.querySelector('.res-x4'),
    x5 = document.querySelector('.res-x5'),
    x6 = document.querySelector('.res-x6'),
    x7 = document.querySelector('.res-x7'),
    x8 = document.querySelector('.res-x8'),
    x9 = document.querySelector('.res-x9'),
    x10 = document.querySelector('.res-x10'),
    x11 = document.querySelector('.res-x11'),
    x12 = document.querySelector('.res-x12'),
    x13 = document.querySelector('.res-x13'),
    calc = document.querySelector('.calc'),
    x14 = document.querySelector('.res-x14'),
    x15 = document.querySelector('.res-x15'),
    x16 = document.querySelector('.res-x16'),
    x17 = document.querySelector('.res-x17'),
    x18 = document.querySelector('.res-x18'),
    x19 = document.querySelector('.res-x19'),
    x20 = document.querySelector('.res-x20'),
    x21 = document.querySelector('.res-x21'),
    x22 = document.querySelector('.res-x22'),
    x23 = document.querySelector('.res-x23'),
    x24 = document.querySelector('.res-x24'),
    x25 = document.querySelector('.res-x25'),
    x26 = document.querySelector('.res-x26'),
    x27 = document.querySelector('.res-x27'),
    x28 = document.querySelector('.res-x28'),
    x29 = document.querySelector('.res-x29'),
    x30 = document.querySelector('.res-x30'),
    x31 = document.querySelector('.res-x31'),
    x32 = document.querySelector('.res-x32'),
    x33 = document.querySelector('.res-x33'),
    x34 = document.querySelector('.res-x34'),
    x35 = document.querySelector('.res-x35'),
    x36 = document.querySelector('.res-x36'),
    x37 = document.querySelector('.res-x37'),
    x38 = document.querySelector('.res-x38'),
    x39 = document.querySelector('.res-x39'),
    x40 = document.querySelector('.res-x40'),
    x42 = document.querySelector('.res-x42'),
    x43 = document.querySelector('.res-x43'),
    x44 = document.querySelector('.res-x44'),
    x45 = document.querySelector('.res-x45'),
    x46 = document.querySelector('.res-x46'),
    x47 = document.querySelector('.res-x47'),
    x48 = document.querySelector('.res-x48'),
    x49 = document.querySelector('.res-x49'),
    x50 = document.querySelector('.res-x50'),
    x51 = document.querySelector('.res-x51'),
    x52 = document.querySelector('.res-x52');


x3.addEventListener('keyup', function(){
    switch(x3.value) {
        case "9":
        x9.value = 41;
        x10.value = 46;
        x11.value = 10;
        x12.value = 2;
        x13.value = 1;
        break;

        case "10":
        x9.value = 30;
        x10.value = 52;
        x11.value = 15;
        x12.value = 2;
        x13.value = 1;
        break;
        
        case "11":
        x9.value = 23;
        x10.value = 57;
        x11.value = 17;
        x12.value = 3;
        x13.value = 1;
        break;
        
        case "12":
        x9.value = 21;
        x10.value = 55;
        x11.value = 19;
        x12.value = 3;
        x13.value = 1;
        break;
        
        case "13":
        x9.value = 20;
        x10.value = 51;
        x11.value = 23;
        x12.value = 5;
        x13.value = 2;
        break;

        case "14":
        x9.value = 19;
        x10.value = 48;
        x11.value = 26;
        x12.value = 6;
        x13.value = "";
        break;

        case "15":
        x9.value = 18;
        x10.value = 46;
        x11.value = "";
        x12.value = "";
        x13.value = "";
        break;
    }
});




calc.addEventListener('click', function(event){
    event.preventDefault();
    //Х14 = Х4*Х8
    let res14 = x4.value * x8.value;
    x14.textContent = res14;
    // Х15 = Х14*Х2
    let res15 = res14 * x2.value;
    x15.textContent = res15;
    //Х16 = Х15*Х9/100
    let res16 = (res15 * x9.value) / 100;
    x16.textContent = res16;
    //Х17 = Х15*Х10/100
    let res17 = (res15 * x10.value) / 100;
    x17.textContent = res17;
    //Х18 = Х15*Х11/100
    let res18 = (res15 * x11.value) / 100;
    x18.textContent = res18;
    //Х19 = Х15*Х12/100
    let res19 = (res15 * x12.value) / 100;
    x19.textContent = res19;
    //Х20 = Х15*Х13/100
    let res20 = (res15 * x13.value) / 100;
    x20.textContent = res20;
    //X21 = X16/X14
    let res21 = res16 / res14;
    x21.textContent = res21;
    //X22 = X17/X14
    let res22 = res17 / res14;
    x22.textContent = res22;
    //X23 = X18/X14
    let res23 = res18 / res14;
    x23.textContent = res23;
    //X24 = X19/X14
    let res24 = res19 / res14;
    x24.textContent = res24;
    //X25 = X20/X14
    let res25 = res20 / res14;
    x25.textContent = res25;
    //Х26 = Х5* Х8*Х21
    let res26 = x5.value * x8.value * res21;
    x26.textContent = res26;
    //Х27 = Х5* Х8*Х22
    let res27 = x5.value * x8.value * res22;
    x27.textContent = res27;
    //Х28 = Х5* Х8*Х23
    let res28 = x5.value * x8.value * res23;
    x28.textContent = res28;
    //Х29 = Х5* Х8*Х24
    let res29 = x5.value * x8.value * res24;
    x29.textContent = res29;
    //Х30 = Х5* Х8*Х25
    let res30 = x5.value * x8.value * res25;
    x30.textContent = res30;
    //Х31 = Х6* Х8*Х21
    let res31 = x6.value * x8.value * res21;
    x31.textContent = res31;
    //Х32 = Х6* Х8*Х22
    let res32 = x6.value * x8.value * res22;
    x32.textContent = res32;
    //Х33 = Х6* Х8*Х23
    let res33 = x6.value * x8.value * res23;
    x33.textContent = res33;
    //Х34 = Х6* Х8*Х24
    let res34 = x6.value * x8.value * res24;
    x34.textContent = res34;
    //Х35 = Х6* Х8*Х25
    let res35 = x6.value * x8.value * res25;
    x35.textContent = res35;
    //Х36 = Х7* Х8*Х21
    let res36 = x7.value * x8.value * res21;
    x36.textContent = res36;
    //Х37 = Х7* Х8*Х22
    let res37 = x7.value * x8.value * res22;
    x37.textContent = res37;
    //Х38 = Х7* Х8*Х23
    let res38 = x7.value * x8.value * res23;
    x38.textContent = res38;
    //Х39 = Х7* Х8*Х24
    let res39 = x7.value * x8.value * res24;
    x39.textContent = res39;
    //Х40 = Х7* Х8*Х25
    let res40 = x7.value * x8.value * res25;
    x40.textContent = res40;
    //x41
    let res41 = 0;


    if(res27 < res32) {
        res41 = res27;
    } else if (res27 < res37) {
        res41 = res27;
    } else if (res32 < res27) {
        res41 = res32;
    } else if (res32 < res37) {
        res41 = res32;
    } else if (res37 < res32) {
        res41 = res37;
    } else if (res37 < res41) {
        res41 = res37;
    } else if(res32 == res27 && res32 == res37) {
        res41 = res32;
    }
    
    console.log(res41);
    //Х42 = Х41*3
    let res42 = res41 * 3;
    x42.textContent = res42;
    //Х43 = Х42/10
    let res43 = res42 / 10;
    x43.textContent = res43;
    //Х44 = Х43*5
    let res44 = res43 * 5;
    x44.textContent = res44;
    //Х45 = Х43*3
    let res45 = res41 * 3;
    x45.textContent = res45;
    //Х46 = Х43*2
    let res46 = res43 * 2;
    x46.textContent = res46;
    //Х47 = Х27-Х41+Х44
    let res47 = res27 - res41 + res44;
    x47.textContent = res47;
    //Х48 = Х32-Х41+Х45
    let res48 = res32 - res41 + res45;
    x48.textContent = res48;
    //Х49 = Х37-Х41+Х46
    let res49 = res37 - res41 + res46;
    x49.textContent = res49;
    //Х50 = Х47/(Х5*Х8)
    let res50 = res47 / (x5.value + x8.value);
    x50.textContent = res50;
    //Х51 = Х48/(Х6*Х8)
    let res51 = res48 / (x6.value + x8.value);
    x51.textContent = res51;
    //Х52 = Х49/(Х7*Х8)
    let res52 = res49 / (x7.value + x8.value);
    x52.textContent = res52;
});