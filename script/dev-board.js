function handleClick(cardId) {
    alert("Board updated successfully");

    const sectionClr = document.getElementById("clr");
    const div = document.createElement('div');
    const h1 = document.getElementById(`card-${cardId}-heading`).innerText;
    const time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    div.innerHTML = `
        <div class="bg-[#f4f7ff] rounded-lg p-3 mt-6">
            <p class="text-slate-600">You Have Completed The Task ${h1} at ${time}</p>
        </div>
    `;
    sectionClr.appendChild(div);

    // disable the button
    document.getElementById(`card-${cardId}-btn`).disabled = true;

    let task = parseInt(document.getElementById('task-left').innerText);
    task -= 1;
    document.getElementById("task-left").innerText = '0' + task;

    let total_task = parseInt(document.getElementById('total-finished-tasks').innerText);
    total_task++;
    document.getElementById('total-finished-tasks').innerText = total_task;

    if (task === 0) {
        alert("You finished the whole deck!");
    }
}

for (let i = 1; i <= 6; i++) {
    document.getElementById(`card-${i}-btn`).addEventListener("click", function(){
        handleClick(i)
    } );
}

// activity history clear
document.getElementById('clear').addEventListener("click", function(){
    document.getElementById("clr").innerHTML = '';
})

// bg-color handling

const colors = ["#ffe2e2", "#3d58fd", "#077ccc", "#ff9259", "#f57b95", "#f4f7ff"];
let currentColor = -1;
document.getElementById("theme").addEventListener("click", function(){
    let newColor;
    do{
        newColor = Math.floor(Math.random()*colors.length);
    }
    while( newColor === currentColor);
    
    currentColor = newColor;
    document.body.style.backgroundColor = colors[currentColor];
})
