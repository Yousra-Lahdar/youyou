const videos = [
    {
        title: "MATHUSALEM",
        date: "2023/03/09",
        timeVideo: "3:04",
        image: "one.avif",

    },
    {
        title: "How to Make Learning as Addictive as Social Media",
        date: "26/10/2023",
        timeVideo: "12:54",
        image: "two.avif",

    },
    {
        title: "Learn English With RATATOUILLE",
        date: "03/05/2023",
        timeVideo: "23:41",
        image: "three.avif",

    },
    {
        title: "MA ROUTINE DU SOIR 2025 dans ma nouvelle Maison ",
        date: "28/04/2025",
        timeVideo: "21:59",
        image: "four.avif",

    },
    {
        title: "Meant to Be Together",
        date: "05/06/2025",
        timeVideo: "3:28:56",
        image: "five.avif",

    },
    {
        title: "Bagjan Oktyabr-Soul Therapy",
        date: "19/09/2024",
        timeVideo: "18:31",
        image: "six.avif",

    },
]

function getDateRelativeString(date) {
    const today = new Date();
    const dateVideo = new Date(date);
    const diffTime = today - dateVideo;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "aujourd'hui";
    if (diffDays === 1) return "il y a 1 jour";
    return `il y a ${diffDays} jours`;
}



function displayVideo(videoDisplay) {
    const bloc = document.getElementById('bloc');
    bloc.innerHTML = "";
    videoDisplay.forEach((elem) => {

        const container = document.createElement('div');
        container.classList.add('video-card');
        bloc.appendChild(container)

        const img = document.createElement('img');
        img.src = elem.image;
        img.alt = elem.title;
        img.classList.add('video-image');
        container.appendChild(img);

        const titre = document.createElement('h3');
        titre.textContent = elem.title;
        container.appendChild(titre);

        const date = document.createElement('p');
        date.textContent = `Date : ${elem.date}`/*`${getDateRelativeString(videos.date)}`*/;
        container.appendChild(date);

        const time = document.createElement('p');
        time.textContent = `Durée : ${elem.timeVideo}`;
        container.appendChild(time);



    });

}

function filterByTitle(arr, searched) {
    return arr.filter((movie) => movie.title.toLowerCase().includes(searched.toLowerCase()));
}


const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    const filtered = filterByTitle(videos, searchInput.value);
    displayVideo(filtered);

});


displayVideo(videos);







