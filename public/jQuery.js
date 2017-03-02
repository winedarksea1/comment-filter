function getLibtardComments () {
  var list = libtardComments.map(comment => $('<a href="#!" class="collection-item">' + comment + '</a>'));
  $('#comment-list').empty();
  $('#comment-list').append(list);
}

function getDumbassRacistComments () {
  var list = dumbassRacistComments.map(comment => $('<a href="#!" class="collection-item">' + comment + '</a>'));
  $('#comment-list').empty();
  $('#comment-list').append(list);
}

$('#libtard-button').on('click', getLibtardComments);
$('#dumbass-racist-button').on('click', getDumbassRacistComments);
