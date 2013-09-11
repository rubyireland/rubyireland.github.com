$(document).ready(function(){
  var url = 'http://www.rubyjobs.ie/jobs.json';


  $.getJSON('http://anyorigin.com/get?url='+url+'&callback=?', function (response) {
    var html = '<ul>';
    response = response.contents.slice(0,6)
    $.each(response, function(index, job){
      html = html + '<li><a href="' + job.how_to_apply + '">' +
                      job.title + '</a> at ' +
                      job.company +
                    '</li>';
    });
    html = html + '</ul>';
    $('#latest-jobs').html(html);
  }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('fail');
  });
});

