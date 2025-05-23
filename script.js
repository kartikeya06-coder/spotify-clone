document.querySelector(".main_1 svg").addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("svg clicked");
    document.querySelector("aside").classList.toggle("show");
    // document.querySelector(".main_1").style.zIndex = "2";
});

document.addEventListener("click", (e) => {
    if (e.target != document.querySelector("aside") && e.target != document.querySelector(".main_1 svg")) {
        document.querySelector("aside").classList.remove("show");
    }
})

document.querySelector(".search_button").addEventListener("click", () => {
    document.querySelector(".search_button").style.border = "2px solid white";
    document.querySelector(".search_button").style.transition = "0.1s ease-in-out";
    document.querySelector(".search_button").style.animation = "border-animation ease-out 0.2s";
    // document.querySelector(".search_button").style.backgroundColor = "#302f2f";
})
document.addEventListener("click", async (e) => {
    if (e.target != document.querySelector(".search_button")) {
        document.querySelector(".search_button").style.transition = "0.1s ease-in-out";
        document.querySelector(".search_button").style.animation = "border-animation1 ease-out 0.2s";
        await new Promise(resolve => setTimeout(resolve, 150));
        document.querySelector(".search_button").style.border = "none";
        // document.querySelector(".search_button").style.backgroundColor = "#1f1f1f";

    }
})


let currSong = "";
let stopExecution = false;
let currAudio = null;

async function playSong(i) {

    const songs = ["https://kartikeya06-coder.github.io/spotify-clone/Songs/1_Beautiful_people.mp3" , "https://kartikeya06-coder.github.io/spotify-clone/Songs/2_I_ain't_worried.mp3" , "https://kartikeya06-coder.github.io/spotify-clone/Songs/3_Hold_my_hand.mp3" , "https://kartikeya06-coder.github.io/spotify-clone/Songs/4_APT.mp3" , "https://kartikeya06-coder.github.io/spotify-clone/Songs/5_Espresso.mp3" , "https://kartikeya06-coder.github.io/spotify-clone/Songs/6_Galwawy_girl.mp3" , "https://kartikeya06-coder.github.io/spotify-clone/Songs/7_Shape_of_you.mp3" , "https://kartikeya06-coder.github.io/spotify-clone/Songs/8_Azizam.mp3" , "https://kartikeya06-coder.github.io/spotify-clone/Songs/90_Try_everything.mp3" , "https://kartikeya06-coder.github.io/spotify-clone/Songs/91_Taste.mp3" , "https://kartikeya06-coder.github.io/spotify-clone/Songs/92_Call_when_you_break_up.mp3https://kartikeya06-coder.github.io/spotify-clone/Songs/92_Call_when_you_break_up.mp3" , "https://kartikeya06-coder.github.io/spotify-clone/Songs/93_I_can't_get_enough.mp3"];
    
    // let link = div.querySelectorAll("a")[i + 1].href;
    let link = songs[i];
    // currSong = div.querySelectorAll("a")[i + 1].innerText.slice(0, -4);
    // console.log(currSong);

    if (currAudio) {
        currAudio.pause();
        currAudio.currentTime = 0;
    }

    
    let aud = new Audio(link)
    aud.play();
    currAudio = aud;
    // console.log(aud.play());
    let isPlaying = true;
    
    document.querySelector(".song-name").innerText = document.getElementsByClassName("card")[i].children[1].innerText;


    document.querySelector(".playbar-middle").addEventListener("click", () => {
        if (isPlaying == true) {
            currAudio.pause();
            isPlaying = false;
            console.log(currAudio.currentTime);
        } else {
            currAudio.play();
            isPlaying = true;
            console.log(currAudio.currentTime);
        }
    })

    document.querySelector(".playbar-right").addEventListener("click", async () => {
        currAudio.pause();
        currAudio.currentTime = 0;
        isPlaying = false;
        i++;
        await playSong(i);
    })

    document.querySelector(".playbar-left").addEventListener("click", async () => {
        currAudio.pause();
        currAudio.currentTime = 0;
        currAudio.play();
        isPlaying = true;
    })

    await new Promise(resolve => setInterval(() => {
        document.querySelector(".time").innerText = Math.floor(currAudio.currentTime / 60) + ":" + Math.floor(currAudio.currentTime % 60);
    }, 1000));





}

async function main() {

    document.getElementsByClassName("card")[0].addEventListener("click", async () => {
        await playSong(0);
        // console.log(currSong);

    })
    document.getElementsByClassName("card")[1].addEventListener("click", async () => {
        await playSong(1);
        // console.log(currSong);
    })
    document.getElementsByClassName("card")[2].addEventListener("click", async () => {
        await playSong(2);
        // console.log(currSong);
    })
    document.getElementsByClassName("card")[3].addEventListener("click", async () => {
        await playSong(3);
        // console.log(currSong);
    })
    document.getElementsByClassName("card")[4].addEventListener("click", async () => {
        await playSong(4);
        // console.log(currSong);
    })
    document.getElementsByClassName("card")[5].addEventListener("click", async () => {
        await playSong(5);
        // console.log(currSong);
    })
    document.getElementsByClassName("card")[6].addEventListener("click", async () => {
        await playSong(6);
        // console.log(currSong);
    })
    document.getElementsByClassName("card")[7].addEventListener("click", async () => {
        await playSong(7);
        // console.log(currSong);
    })
    document.getElementsByClassName("card")[8].addEventListener("click", async () => {
        await playSong(8);
        // console.log(currSong);
    })
    document.getElementsByClassName("card")[9].addEventListener("click", async () => {
        await playSong(9);
        // console.log(currSong);
    })
    document.getElementsByClassName("card")[10].addEventListener("click", async () => {
        await playSong(10);
        // console.log(currSong);
    })
    document.getElementsByClassName("card")[11].addEventListener("click", async () => {
        await playSong(11);
        // console.log(currSong);
    })


}

main();

// document.getElementById("beautiful-people").addEventListener("click" , () => {
//     let aud = new Audio('Songs/Beautiful_people.mp3');
//     aud.play();
// })


