document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementById('animatedText');
    const words = text.textContent.trim().split(/\s+/); // Memisahkan teks menjadi kata-kata

    text.textContent = ''; // Kosongkan konten teks asli

    words.forEach(function(word, wordIndex) {
        const wordContainer = document.createElement('span');
        wordContainer.classList.add('word-container');
        text.appendChild(wordContainer);

        const letters = word.split(''); // Memisahkan setiap kata menjadi huruf-huruf

        letters.forEach(function(letter, letterIndex) {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('letter');
            span.style.animationDelay = `${wordIndex * 0.5 + letterIndex * 0.1}s`; // Delay animasi setiap huruf
            wordContainer.appendChild(span);
        });

        // Tambahkan spasi antar kata jika bukan kata terakhir
        if (wordIndex < words.length - 1) {
            const space = document.createTextNode(' ');
            text.appendChild(space);
        }
    });

    // Smooth scrolling untuk tautan internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Pesan sambutan dinamis
    const greeting = document.getElementById('greeting');
    const now = new Date();
    const hours = now.getHours();
    let greetingMessage;

    if (hours < 12) {
        greetingMessage = 'Good Morning, Cantikku!';
    } else if (hours < 18) {
        greetingMessage = 'Good Afternoon, Cantikku!';
    } else {
        greetingMessage = 'Good Evening, Cantikku!';
    }

    greeting.textContent = greetingMessage;

    // Kontrol musik latar belakang
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const volumeControl = document.getElementById('volumeControl');

    playButton.addEventListener('click', function() {
        backgroundMusic.play();
    });

    pauseButton.addEventListener('click', function() {
        backgroundMusic.pause();
    });

    volumeControl.addEventListener('input', function() {
        backgroundMusic.volume = this.value;
    });

    // Putar musik latar belakang secara otomatis saat halaman dimuat
    backgroundMusic.play();
});
