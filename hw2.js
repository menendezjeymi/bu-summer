// HOMEWORK 2

/* 
    First Name: Jeymi
    Last Name: Menendez
    Date: 07/13/27

    NOTE: DO THE WORK INSIDE THE FUNCTION GIVEN TO YOU!
*/

/* 
    QUESTION 1: I want you to create a Rock-Paper-Scissors game between
    2 players. The way how it works is that you run multiple games. The number
    of games is up to your choice, but I reccommend 100! I want you to get 
    the percentage of player1 wins, player2 wins, and ties! Then output
    all three of them. (25 POINTS)

    Below, I have a line of code that you can use to randomize each player's choices.

    Math.floor(Math.random() * 3); <- This returns a random value between 0 and 2

    You use it to get a random value from the arrays given.

    Remember the rules:
    - Rock beats Scissors
    - Paper beats Rock
    - Scissors beat Paper

    This will require either a while-loop or for-loop.
*/

function question1() {  
    // TO-DO: COMPLETE ME!
    // PLEASE PRINT THE RESULT IN THIS FUNCTION
    const player1Choice = ["Rock", "Paper", "Scissors"];
    const player2Choice = ["Rock", "Paper", "Scissors"];
    let player1pick = player1Choice[Math.floor(Math.random() * 3)];
    let player2pick = player2Choice[Math.floor(Math.random() * 3)];
    for (let i = 0; i < 100; i++) {
        if (player1pick === player2pick) {
            console.log("It's a tie!");
        } else if (
            (player1pick === "Rock" && player2pick === "Scissors") ||
            (player1pick === "Paper" && player2pick === "Rock") ||
            (player1pick === "Scissors" && player2pick === "Paper")
        ) {
            console.log("Player 1 wins!");
        } else {
            console,log("Player 2 wins!");
        }
    }



};

/* 
    QUESTION 2: Create an Object Constructor that contains 5 key:value pairs.
    It will take 2 different parameters. The purpose of these parameters is
    to find uniqueness in every object you create. (25 POINTS)

    I am giving you freedom on how you want to do this! Think of anything you
    want as long as you can meet my expectations!

    I want you to output 5 different objects.
*/

function question2() {  
    // TO-DO: COMPLETE ME!
    // PLEASE PRINT THE RESULT IN THIS FUNCTION
};

/* 
    BONUS QUESTION: I want you to create a "bubbleSort()" function that will
    sort the array of integers in the order from LEAST TO GREATEST! This algorithm
    will require you to use two for loops! I'll give an example.

    Let's say I give you [8, 2, 5, 9, 7, 0]

    Your outer for loop will start at 8 (Index 0).
    
    Your inner loop will read through the rest of the numbers and 
    check if the number is less than 8. If so, switch. Otherwise,
    move on to the next.

    Once sorted, print out the result to see if the numbers are
    from least to greatest.

    You will run this 4 times with different test cases.

    NOTE: I recommend tracing and writing out the code!

    (20 EXTRA POINTS)
*/

function bonusQuestion() {  
    // TO-DO: COMPLETE ME!
    // PLEASE PRINT THE RESULT IN THIS FUNCTION

    // TEST CASES (DO NOT EDIT)
    let test1 = [23, 5, 42, 18, 9, 31];
    let test2 = [7, 56, 14, 88, 3, 25];
    let test3 = [99, 12, 64, 5, 27, 41];
    let test4 = [8, 37, 2, 61, 49, 15];

    // START HERE

    function bubbleSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr [j + 1]) {
                    // If the current element is greater than the next element, swap them
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    console.log("Test Case 1:", bubbleSort(test1));
    console.log("Test Case 2:", bubbleSort(test2));
    console.log("Test Case 3:", bubbleSort(test3));
    console.log("Test Case 4:", bubbleSort(test4));


};

// DO NOT EDIT THIS
function start() {
    console.log("Starting Question 1:");
    question1();
    console.log("Starting Question 2:");
    question2();
    console.log("Starting Bonus Question:");
    bonusQuestion();
}

start();