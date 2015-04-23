[![Build Status](https://travis-ci.org/grubr/grubr.svg)](https://travis-ci.org/grubr/grubr)
# grubr

Web app to allow people to find the food truck they want.


## Environmental Configuration

### PostgreSQL: Installation

If you do not have PostgreSQL installed on your machine you can see the
[PostgreSQL](http://www.postgresql.org/docs/) docs for up-to-date installation
instructions.

If you are on a Mac with Homebrew you can run:
```
$ brew update
$ brew doctor
$ brew install postgresql
```

Be sure to make a 'db' folder at the project root as it is in the .gitignore
file and each user must create their own.

Initialize a local database:
```
$ createdb grubr
```

To access / exit the postres shell interface:
```
$ psql grubr
$ /q
```


---
### Gulp: Installation

If you do not already have gulp installed globally run:
```
$ npm install -g gulp
```

---
### npm
To install the dependencies listed in package.json run:
```
$ npm install
```


##Build Procedure

Build client js and html to build folder to serve.
```
gulp build
```


##Contributers

* Ian McCunn
* Rory Sterley
* Sean Golob
* Jake Barnett
* Nick Klunder


##License

[MIT](LICENSE)
