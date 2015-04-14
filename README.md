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
