# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|e-mail|string|null: false|
### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|text|text|null: false|
|image|integer|null: false|
|user_id|integer|null: false|
|group_id|integer|null: false|
### Association
- belomgs_to :user
- belomgs_to :group


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|title|text|null: false|
|user_id|integer|null: false|
### Association
- belomgs_to :user
- has_many :messages
- has_many :groups_users
- has_many :users, through: :groups_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user