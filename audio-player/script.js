function loadAudio(input) {
    const file = input.files[0];
    const audio = new Audio();
    audio.src = URL.createObjectURL(file);
    audio.controls = true;
    document.body.appendChild(audio);

    const container = document.getElementById('container');

    const numRows = 6;
    const numCols = 6; 

    container.innerHTML = '';

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const audioBox = document.createElement('div');
            audioBox.classList.add('audio-box');
            const scale = 1 + Math.sin((col / numCols) * Math.PI * 2) * 0.5;
            audioBox.style.height = `${scale * 20}px`; 
            container.appendChild(audioBox);
        }
    }

    audio.play();
}
