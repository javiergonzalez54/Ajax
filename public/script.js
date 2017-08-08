console.log('hello world');

$(function() {
  console.log('document is ready');
});
// setInterval(function() { console.log('tick'); }, 10);
function alertAndCallback(message, cb) {
  alert(message);
  cb();
};
$.get('https://api.github.com/users/eddroid', function() {
  console.log('success');
}).fail(function() {
  console.log
})
}

//   $('a').click(function(evt) {
//     evt.preventDefault();
//     // console.log('click');
    // var response = $.get('https://api.github.com/users/eddroid');
//     // console.dir(response.responseJSON);
//     $.get('https://api.github.com/users/javiergonzalez54', function(profile, status, xhr) {
//       console.log(profile);
//       var html = '<dl>';
//       for (var key in profile) {
//         // console.log(key);
//         // console.log(profile[key]);
//         html += ("<dt>" + key + "</dt>");
//         html += ("<dd>" + profile[key] + "</dd>");
//       }
//       html += '</dl>';
//       // console.log(html);
//       $('body').append(html);
//     });
//   });
// });
