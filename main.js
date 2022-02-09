const cardDistribution = (data) =>{

    const array = [];
    let id = 1;
    data.map(item => {

        const cardNum = generateCardNumber(item, id++);
        const gift = giftType(cardNum);

        const data = {
            cardNumber: cardNum,
            gitf: gift,
            priority: item.priority
        };
        array.push(data);
    });

    console.log(sortData(array));
}

const sortData = (array) => {
    let done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1].priority > array[i].priority) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
  
    return array;
  }

const generateCardNumber = (item, id) =>{

    const districtCode = firstTwo(item.district).toUpperCase();
    const cYearCode = lastTwo(item.currentYear.toString());
    const postCode = firstTwo(item.postNo.toString());
    const serial = id.toString();

    let Zero = "";
    for(i=1; i<=(6-serial.length); i++) {
        Zero+='0';
    }

    return districtCode + cYearCode + postCode + item.birthYear + Zero + serial;
}

const giftType = (cardNum) => {
    const lastDigit = parseInt(cardNum[15]);
    if(lastDigit%2 === 0){
        return "R";
    }
    else{
        return "W";
    }
}


const firstTwo = (data) =>{
    return data[0] + data[1];
}

const lastTwo = (data) =>{
    return data[2] + data[3];
}

cardDistribution([
    { name: "Fahim", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2},
    { name: "shanto", birthYear: 1995, currentYear: 2022, district: "Rajshahi", postNo: 1211, priority: 1}, 
    { name: "shanto", birthYear: 1900, currentYear: 2000, district: "rangpur", postNo: 1400, priority: 3},
    { name: "Fahim", birthYear: 1993, currentYear: 2022, district: "cHittagong", postNo: 3200, priority: 4},
    { name: "shanto", birthYear: 1992, currentYear: 2021, district: "KHULNA", postNo: 1111, priority: 5}, 
    { name: "shanto", birthYear: 1901, currentYear: 2000, district: "Bagerhat", postNo: 1000, priority: 2},  
])