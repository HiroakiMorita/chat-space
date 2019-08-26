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




























  
// function addUser(userId,userName) {
//   var html = `<div id='chat-group-users'>
//                 <div class='chat-group-user clearfix js-chat-member' id='${userId}'>
//                   <input name='group[user_ids][]' type='hidden' value='${userId}'>
//                     <p class='chat-group-user__name'>${userName}</p>
//                     <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
//               </div>`;
//   member_list.append(html);
//     }




// $("#user-search-field").on("keyup", function() {
//   var input = $("#user-search-field").val();
//   $.ajax({
//     type: 'GET',
//     url: '/users',
//     data: { keyword: input },
//     dataType: 'json'
//   })
//   .done(function(users){
//     $("#user-search-result").empty();
//     if (users.length !== 0) {
//       users.forEach(function(user){
//         appendUser(user);
//       });
//     }
//     else {
//       appendNoUser("一致するユーザはいません");
//     }
//   })
//   .fail(function(){
//     alert('検索に失敗しました');
//   })
// });


// var search_list = $("#user-search-result");

// function appendUser(user_name){
//   var html = `<div class="chat-group-user clearfix">
//                 <p class="chat-group-user__name">
//                 ${message.user_name}
//                 </p>
//                 <a class="user-search-add chat-group-user__btn chat-group-user__btn--add js-add-btn" data-user-id=${id} data-user-name=${user_name}>追加</a>
//               </div>`;
//     search_list.append(html);
// }
