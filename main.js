
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DICR5a2gO/model.json', modelReady);

}

function  modelReady(){
    classifier.classify(gotResults);
}
var dog=0;
var humans=0;
var cars=0;
var cat=0;
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_count").innerHTML = 'detected dog - '+dog+'detected cat - '+cat+ 'detected human brawl-'+humans+'detected car-'+cars;

        document.getElementById("result_label").style.color = 'rgb('
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = 'rgb('
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('animal_image');


        if (results[0].label == "Cat Hissing") {
         img.src = 'Cat_hissing.png';   
          cat= cat+1;
          }else if(results[0].label == "Human brawl"){
         img.src = 'Brawl_humans.png';   
         humans=humans+1;
          }else if(results[0].label == "car honking"){
            img.src = 'Car_honking.png';   
          cars=cars+1; 
         }else if(results[0].label == "Dog Barking"){
            img.src = 'Dog_barking.png';   
            dog=dogs+1;
        } else{
            img.src = 'index.jpeg';   
           }  
        }
    } 


