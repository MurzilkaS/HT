$.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    dataType: "json"
}).done(function(data) {
    console.log(data);
    $.map(data, function(user, i) {
        $("#result").append(`
        <h5>${user.id}</h5>
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        `);
    });
});

$.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/comments",
    dataType: "json"
}).done(function(com) {
    console.log(com);
    $.map(com.slice(0, 20), function(users, j) {
        $("#comments").append(`
        <h5>${users.id}</h5>
        <h3>${users.name}</h3>
        <p>${users.email}</p>
        <p>${users.body}</p>
        `);
    });
});

