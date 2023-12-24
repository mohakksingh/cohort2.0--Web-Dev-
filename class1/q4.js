const ages=[21,22,23,24,25];
const numberOfPeople=ages.length;
for (let index = 0; index < numberOfPeople; index++) {
    if(ages[index] % 2==0){
        console.log(ages[index]);
    }
}