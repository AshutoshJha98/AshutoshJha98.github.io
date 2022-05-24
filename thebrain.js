const review_texts = ["He elevated the performance of the team and product with a Data-Driven Approach. He was a quick learner, open to listening and doing experiments.<br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;- Mayank Singh",
                        "He was the best PM ever.<br><br><br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;- Nandhini Venkatesan"];
const review_avatars = ["url('mayank_review_avatar.png')", "url('nandhini_review_avatar.png')"]
var i = 0;

function TextReviewCarousel()
{
    
    if(i==0)
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