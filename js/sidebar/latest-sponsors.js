$(document).ready(function(){
  var url = 'http://api.meetup.com/2/groups?radius=25.0&order=id&group_urlname=rubyireland&desc=false&offset=0&format=json&page=20&fields=sponsors&sig_id=46176082&sig=ae2b76f7df31f4e5472b54f100a180ebaad0648f';
  
  var sponsorToString = function(sponsor){
    return '<li>' +
              '<a href="' + sponsor.url + '">' +
                '<img src="' + sponsor.image_url + '"/>' +
              '</a>' +
              '<span>' + sponsor.info + '</span>'
            '</li>';
  };

  $.get(url).done(function(response){
    var html = '<ul>'
    $.each(response.results[0].sponsors, function(index, sponsor){
      html = html + sponsorToString(sponsor)
    });
    html = html + '</ul>';
    $('#latest-sponsors').html(html);
  });
});
