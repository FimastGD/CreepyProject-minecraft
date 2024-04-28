document.getElementById('fps').textContent = "Calculating...";
let lastTime = performance.now();
let frameCount = 0;

function updateFPS() {
const now = performance.now();
const deltaTime = now - lastTime;
frameCount++;

if (deltaTime >= 1000) {
    const fps = frameCount;
    frameCount = 0;
    lastTime = now;


    document.getElementById('fps').textContent = fps/*+ 295*/;
}

requestAnimationFrame(updateFPS);
}
requestAnimationFrame(updateFPS);


