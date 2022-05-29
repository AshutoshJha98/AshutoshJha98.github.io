const review_texts = ["He elevated the performance of the team and product with a Data-Driven Approach. He was a quick learner, open to listening and doing experiments.<br><br><span style='bottom:-3vw;position:absolute;right:0vw;font-size:1.7vw;font-family:Roboto-LightItalic'>- Mayank Singh</span>",
                        "He was the best PM ever.<br><br><span style='bottom:-8vw;position:absolute;right:0vw;font-size:1.7vw;font-family:Roboto-LightItalic'>- Nandhini Venkatesan</span>",
                        "Bhain ne phod diya.<br><br><span style='bottom:-8vw;position:absolute;right:0vw;font-size:1.7vw;font-family:Roboto-LightItalic'>- Zubear Ansari</span>"];
const review_avatars = ["url('images/mayank_review_avatar.png')", "url('images/nandhini_review_avatar.png')", "url('images/zubear_review_avatar.png')"]
var i = 0;

function TextReviewCarousel()
{
    
    if(i<=1)
    {
        document.getElementById("review_text").innerHTML = review_texts[i];
        document.getElementById("review_avatar").style.backgroundImage = review_avatars[i];
        i++;
    }
    else
    {
        document.getElementById("review_text").innerHTML = review_texts[i];
        document.getElementById("review_avatar").style.backgroundImage = review_avatars[i];
        i=0;
    }
    setTimeout("TextReviewCarousel();",5000);
}

function Hello() 
{
    alert("Kein Problem");
}