let comment = document.getElementById("comment")
let retweet = document.getElementById("retweet")
let like = document.getElementById("Like")
let  upload = document.getElementById("upload")


let likeCount = 0
let retweetCount = 0

let commentHandler =()=>{
    
    console.log("Clicked Comment")
    comment.style.color ="cyan"
}
let LikeHandler =()=>{
    console.log("Clicked Like")
    like.style.color ="red";
    likeCount++
    like.innerText= likeCount  
}
let retweetHandler = () =>{
    console.log("Clicked Retweet")
    retweet.style.color ="lightgreen"
    retweetCount++
    retweet.innerText = retweetCount
}
let uploadHandler =()=>{
    console.log("Clicked Upload")
}
