$(function(){
  function buildHTML(message){
    image = message.image ? `<img src="${message.image}">` : ""
    var html = `
    <div class='message'>
      <div class='upper-message'>
        <div class='upper-message__user-name'>
          ${message.user_name}
        </div>
        <div class='upper-message__date'>
        ${message.date}
        </div>
      </div>
      <div class='lower-message'>
        <p class='lower-message__content'>
        ${message.content}
        </p>
        <div class='lower-message'>
        ${image}
        </div>
        </div>
      </div>
    </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = (window.location.href);
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
      $('.messages').append(html);
      $('#message_content').val('');
      $('#new_message').get(0).reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
      $('.form__submit').prop('disabled', false);
    })
    .always(function(){
      $('.form__submit').prop('disabled', false);
    })
  })
});