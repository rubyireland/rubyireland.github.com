$(document).ready(function(){
  var url = 'http://www.rubyjobs.ie/jobs.js';


  $.ajax({
            url: url,
            dataType: 'jsonp',
            success: function (response) {
              var html = '<ul>';
              response = response.slice(0,6)
              $.each(response, function(index, job){
                html = html + '<li><a target="_blank" href="http://www.rubyjobs.ie/jobs/' + job.id + '">' +
                                job.title + '</a> at ' +
                                job.company +
                              '</li>';
              });
              html = html + '</ul>';
              $('#latest-jobs').html(html);
            }
  }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
      var html = '<ul><li>Failed to load jobs</li></ul>';
      $('#latest-jobs').html(html);
  });
});

