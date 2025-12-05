const arrayContainer = document.getElementById("array-container");
const generateArrayButton = document.getElementById("generate-array");
const bubbleSortButton = document.getElementById("bubble-sort");
const quickSortButton = document.getElementById("quick-sort");
const selectionSortButton = document.getElementById("selection-sort"); // New button for Selection Sort

let array = [];

// Generate random array
function generateArray(size = 50) {
    array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    drawArray();
}

function drawArray() {
    arrayContainer.innerHTML = "";
    array.forEach((value) => {
        const bar = document.createElement("div");
        bar.style.height = `${value * 4}px`; // Scale for visibility
        bar.classList.add("bar");
        arrayContainer.appendChild(bar);
    });
}

// Bubble Sort
async function bubbleSort() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                await swap(j, j + 1);
            }
        }
    }
}

// Quick Sort
async function quickSort(left = 0, right = array.length - 1) {
    if (left < right) {
        const pivotIndex = await partition(left, right);
        await quickSort(left, pivotIndex - 1);
        await quickSort(pivotIndex + 1, right);
    }
}

async function partition(left, right) {
    const pivot = array[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            i++;
            await swap(i, j);
        }
    }
    await swap(i + 1, right);
    return i + 1;
}

// Selection Sort
async function selectionSort() {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            await swap(i, minIndex);
        }
    }
}

// Swap function for visual effect
async function swap(i, j) {
    [array[i], array[j]] = [array[j], array[i]];
    drawArray();
    await new Promise(resolve => setTimeout(resolve, 100)); // Delay for visualization
}

// Event Listeners
generateArrayButton.addEventListener("click", () => generateArray());
bubbleSortButton.addEventListener("click", () => bubbleSort());
quickSortButton.addEventListener("click", () => quickSort());
selectionSortButton.addEventListener("click", () => selectionSort()); // New listener for Selection Sort
