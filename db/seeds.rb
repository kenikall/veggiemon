# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Tom")

brocodile = {
  name_one: "Brocoli'l",
  name_two: "Brocolots",
  name_three: "Brocodile",
  image_one: "link to image1",
  image_two: "link to image2",
  image_three: "link to image3",
  level: 1,
  xp: 0
}

Monster.create(brocodile)

UserMonster.create({user_id: 1, monster_id: 1})