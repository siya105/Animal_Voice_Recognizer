var cat = 0;
var dog = 0;
var lion = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MUEbLu6Zv/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
} 

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'detected voice is of '+ results[0].label;
        document.getElementById("result_count").innerHTML = 'detected dog '+ dog +'detected cat '+ cat;
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('animal_img');

    } if (results[0].label == "Barking") {
        img.src = "dog_img.jpeg";
        dog = dog + 1;
    } else if (results[0].label == "Meowing") {
        img.src = "cat_img.jpeg";
        cat = cat + 1;
    } else if (results[0].label == "Roaring") {
        img.src = "lion_img.png";
    } else {
        img.src = "listening.png";
    }
}