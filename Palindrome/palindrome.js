let score = 0;

 document.getElementById("check")
 .addEventListener ("click", ()=> {
    const input = document.getElementById("wordInput").value.trim();
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");

    if (input === "") {
        resultDiv.innerHTML = "Please enter a word!";
        return;
    }

    
    const cleaned = input.toLowerCase().replace(/\M+/g, '');
    const reversed = cleaned.split('').reverse().join('');

    if (cleaned === reversed) {
        resultDiv.innerHTML = `"${input}" is a Palindrome `;
        score++;
    } else {
        resultDiv.innerHTML = `"${input}" is NOT a Palindrome `;
    }

    scoreDiv.innerHTML = `Score: ${score}`;
    document.getElementById("wordInput").value = "";
});