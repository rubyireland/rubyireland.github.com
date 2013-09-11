$(document).ready(function(){
  $.getJSON('http://rubyjobs.ie/jobs.json').done(function(response){
    var html = '<ul>';
    response = response.slice(0,6)
    $.each(response, function(index, job){
      html = html + '<li><a href="' + job.how_to_apply + '">' +
                      job.title + '</a> at ' +
                      job.company +
                    '</li>';
    });
    html = html + '</ul>';
    $('#latest-jobs').html(html);
  });
});