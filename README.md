# Veggiemon-Grow

Veggiemon-Grow is an app that promotes kids to eat healthier and get them involved in outdoor activities. Kids can scan barcodes of healthy items in a store and potentially find a Veggiemon to battle! If they spend time at a local park or farmers market, they can earn more points to upgrade their Veggiemon. It was meant to be viewed on mobile devices.

You can check out the live version [here] (http://veggiemongrow2016.herokuapp.com/).

![signup] (https://github.com/erinc35/veggiemon/blob/dev/public/images/brocodile.png)

Broccodile.

![search] (https://github.com/erinc35/GuideMe/blob/development/app/assets/images/search.gif)

Searching cities and find the guide.

![chat] (https://github.com/erinc35/GuideMe/blob/development/app/assets/images/chat.gif)

Chat feature.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
ruby 2.3.1
bundler 1.12.5
rails 5.0.0
```

### Installing
From the command terminal, clone the repository to your local directory...
```
$ git clone https://github.com/kenikall/veggiemon
$ cd GuideMe
```

Then run bundle command to install all dependencies and run the server.

```
$ bundle install
$ rails server
```

## Deployment

You must have Heroku CLI installed and be logged in to Heroku in order to deploy live via Heroku servers
(Please see the [documentation](https://devcenter.heroku.com) to get set up with Heroku)

Then, after installation and login, via the command line...
```
$ heroku create
$ git push heroku master
$ heroku open
```
## Tech Used

* [Ruby on Rails](http://api.rubyonrails.org/) - Backend API framework used
* [jQuery](https://jquery.com/) - Write less, do more with jQuery
* [Ajax](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) -The use of the XMLHttpRequest object to communicate with server-side scripts.
* [Google Api](https://console.developers.google.com/?pli=1) - Google API Console lets you discover and use Google APIs, such as Google Maps and YouTube.
* [Yelp Api](https://www.yelp.com/developers/documentation/v2/overview) -Search for businesses by location, keyword and category
gmail-like-chat-application-in-ruby-on-rails
* [HTTParty](https://github.com/jnunemaker/httparty) - Library used for making HTTP requests

## Authors

* **Erinç Emer** - [Github](https://github.com/erinc35)
* **Johnny Choo** - [Github](https://github.com/jchoo157)
* **Mannah Kallon** - [Github](https://github.com/kenikall)
* **Chistopher Johnson** - [Github](https://github.com/Koala-t)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

