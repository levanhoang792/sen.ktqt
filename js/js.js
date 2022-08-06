var apiUrl = 'https://api.telegram.org/bot5250276304:AAHz0sB7_PuHCp4EjnRRKmwrBxRNq0_MTlM/sendMessage?chat_id=1374234548&text=senlogin';
fetch(apiUrl).then(response => {
    return response.json();
}).then(data => {
    // Work with JSON data here
    console.log(data);
}).catch(err => {
    // Do something for an error here
});

$(document).ready(function () {
    const buttonsMenu = `
        <a href="index.html" class="btn btn-bir">04/08/2022</a>
        <a href="05082022.html" class="btn btn-bir">05/08/2022</a>
        <a href="06082022.html" class="btn btn-bir">06/08/2022</a>
    `;

    $("div.buttons").html(buttonsMenu);
});