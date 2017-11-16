Trillo
===============

Traingin web landing.

## Main Tools
+ [Sass](http://sass-lang.com)
+ [Pug](https://pugjs.org)
+ [Gulp](http://gulpjs.com/)

## First steps

#### Installing node
Get the latest version of node from the [official website](https://nodejs.org/) or using [nvm](https://github.com/creationix/nvm)
Nvm approach is preferred. Also, you may find this [tool](https://github.com/wbyoung/avn) useful to automate version changing between projects.

#### Getting the dev dependencies
Run `npm install` from rootpath of the project.

#### Gulp. The right way
During the project development you will probably use gulp every day, so let's use it in the right way.
A very popular way of getting these kind of packages is simply tell npm to install them globally using the `-g` flag.
That's needless as gulp is already included in this project dependencies. A big problem can have place if the version of the packages that were installed globally do not match the versions that each project require.
The right way to execute these tools is using the binaries in the node_modules folder, that is `node_modules/.bin/`.
To execute gulp just use the following in your terminal: `./node_modules/.bin/gulp`. The same applies for other dependencies that have command line tools.
Adding an alias in your .bashrc/.bash_profile for these tools is highly recommended:

```bash
alias gulp='node_modules/.bin/gulp'
```

In development, you can also use the new NPM feature [npx](https://github.com/zkat/npx) to use Gulp without install it
```bash
npx gulp
```

#### SCSS
When creating SCSS files you don't need to import other files inside yours to use properties from them. There's a specific file called `application.scss` where every SCSS file should be imported in the desired priority order. This works just like the stylesheet elements in the head of an html, when repeated rules are present the rule that was imported last will override the other.


## About

This project is maintained by [Emanuel Casco](https://github.com/emanuelcasco).

## License

**natours** is available under the MIT [license](LICENSE).

    Copyright (c) 2015 Emanuel Casco <emanuel.casco@wolox.com.ar>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
