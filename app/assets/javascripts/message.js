$(function(){
  function buildHTML(message){
    var html = `<p>
                  <strong>
                    <a href=/users/${message.user_id}>${message.user_name}</a>
                    ：
                  </strong>
                  ${message.text}
                </p>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/messages'
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html)
      $('.textbox').val('')
    })
    .fail(function(){
      alert('error');
    })
    .always(function(message){
      $('.submit-btn').prop('disabled', false);
    })
  })
  $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
});