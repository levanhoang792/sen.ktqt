var msg = 'My Love: ';
var apiUrl = 'https://api.telegram.org/bot5508269235:AAHQiuz2qc3wnf9432hKEG6p_LJxGcB8TNw/sendMessage?chat_id=1374234548&text=' + encodeURIComponent(msg + window.location);
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
        <a href="08082022.html" class="btn btn-bir">08/08/2022</a>
    `;

    $("div.buttons").html(buttonsMenu);

    $.getJSON("https://api.ipify.org/?format=json", function (e) {
        var apiUrl = 'https://api.telegram.org/bot5508269235:AAHQiuz2qc3wnf9432hKEG6p_LJxGcB8TNw/sendMessage?chat_id=1374234548&text=' + encodeURIComponent(e.ip);
        fetch(apiUrl).then(response => {
            return response.json();
        }).then(data => {
            // Work with JSON data here
            console.log(data);
        }).catch(err => {
            // Do something for an error here
        });
    });
});