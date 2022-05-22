var review_1_text = "He elevated the performance of the team and product with a Data-Driven Approach. He was a quick learner, open to listening and doing experiments.";
var review_2_text = "He was the best PM ever.";
var i = 0;

function TextReviewCarousel()
{
    
    if(i==0)
    {
        document.getElementById("review_text").innerHTML = review_1_text;
        i++;
    }
    else
    {
        document.getElementById("review_text").innerHTML = review_2_text;
        i=0;
    }
    setTimeout("TextReviewCarousel();",5000);
}

function Hello() 
{
    alert("Kein Problem");
}