// Collapsible functionality for "Read More" button
document.addEventListener("DOMContentLoaded", function () {
    var coll = document.querySelectorAll(".collapsible");

    coll.forEach(function (button) {
        button.addEventListener("click", function () {
            var content = button.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
    
});

         


// Example Chart.js code (if needed)
var ctx = document.getElementById('accuracyChart').getContext('2d');
var accuracyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4'],
        datasets: [{
            label: 'Test Accuracy',
            data: [0.85, 0.88, 0.91, 0.93],
            borderColor: 'rgb(75, 192, 192)',
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Training Accuracy Over Epochs'
            }
        }
    }
    
});

