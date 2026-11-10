//Conectar HTML con JS
const songForm = document.getElementById('song_form');
const playlist = document.getElementById('playlist');
 
//Función para agregar las canciones
 
function addSong(songName, songArtist, songLink) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <strong>${songName}</strong> - ${songArtist}
        <a href="${songLink}"><i>Reproducir</i></a>
        <button class="delete-btn" > Eliminar </button>
    `;
    playlist.appendChild(listItem);
}
 
//Obtener valores del formulario
songForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const songName = document.getElementById("song_name").value;
    const songArtist = document.getElementById("song_artist").value;
    const songLink = document.getElementById("song_url").value;
 
    addSong(songName, songArtist, songLink)
    songForm.reset();
 
})