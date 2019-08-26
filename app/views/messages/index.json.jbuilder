json.array! @new_messages do |message|
  json.name     message.user.name
  json.content  message.content
  json.image    message.image.url
  json.id       message.id
end