const guessBtn = document.querySelector("#guessBtn");
const input = document.querySelector("#input");
const output = document.querySelector(".output");


let target;
let counter = 3;

target = Math.floor(Math.random() * 10 + 1);

guessBtn.addEventListener("click", guess);


function guess()
{
    let guess = input.value;

    console.log(target);

    if(guess == target)
    {
        output.textContent = "You guess it correctly!"; 
        guessBtn.textContent = "PLAY AGAIN";
        guessBtn.addEventListener("click", playAgain);
        output.classList.add("active");
        input.disabled = true;
    }
    else
    {
        counter--;

        if(counter == 0)
        {
            output.textContent = "Try Again. . ."; 
            guessBtn.textContent = "PLAY AGAIN";
            guessBtn.addEventListener("click", playAgain);
            input.disabled = true;
            
        }
        else
        {
            output.textContent = "Wrong! " + `${counter}` + " Guesses left. . ."; 
            output.classList.add("active");
        }
    }

    input.value = ""; 
}

function playAgain()
{
    window.location.reload();
    
}