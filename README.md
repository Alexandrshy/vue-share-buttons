# vue-share-buttons

> Vue component for placing buttons in your project using which you can share anything. If vue-share-buttons doesn't have a social network for you, just make a Pull request or [create new issue](https://github.com/Alexandrshy/vue-share-buttons/issues/new) for me

## Menu

- [Installation](#installation)
  - [Install using npm](#install-using-npm)
  - [Install using Yarn](#install-using-yarn)
- [Icons](#icons)
- [Usage](#usage)
  - [Import component](#import-component)
  - [Add the button to your template](#add-the-button-to-your-template)
  - [And we get the button](#and-we-get-the-button)
- [Options](#options)
  - [Buttons with a counter](#buttons-with-a-counter)
  - [Buttons without a counter](#buttons-without-a-counter)
  - [Buttons for instant messengers](#buttons-for-instant-messengers)
  - [Send a message via email](#send-a-message-via-email)
  - [Full list of social networks](#full-list-of-social-networks)
  - [Not worked](#not-worked)
- [Example](#example)
- [Author](#author)
- [Link](#link)
- [Roadmap](#roadmap)
- [License](#license)

## Installation

#### Install using npm

```bash
npm i vue-share-buttons
```

[Link to NPM](https://www.npmjs.com/package/vue-share-buttons)

#### Install using Yarn

```bash
yarn add vue-share-buttons
```

[Link to Yarn](https://yarn.pm/vue-share-buttons)

## Icons

For icons, I use [simpleicons](https://simpleicons.org/)

## Usage

You need to import each social button separately. For example, you want to use the share button on Twitter. To do this you need:

#### Import component

```js
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";

const app = new Vue({
  el: "#app",
  components: {
    TwitterButton,
  },
});
```

#### Add the button to your template

```html
<div id="app">
  <twitter-button
    url="https://github.com/"
    description="GitHub is where people build software."
  />
</div>
```

#### And we get the button

<img width="118" alt="vue-share-buttons-twitter" src="https://user-images.githubusercontent.com/14329906/55573133-50549f00-571a-11e9-9dcb-6aa14e9a04e8.png">

## Options

Below are the options you can pass to create your own button.

### Buttons with a counter

> Facebook, LinkedIn

| **Option**    | **Type's** | **Default**                  | **Description**                                                                                                             |
|---------------|------------|------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| url           | String     | `document.location.href`     | URL-address you want to share                                                                                               |
| btnText       | String     | `Facebook`, `LinkedIn`, etc. | Text to be written on your button                                                                                           |
| hasIcon       | Boolean    | `true`                       | Presence of social network icon in the button                                                                               |
| isBlank       | Boolean    | `true`                       | Open the "share on social networks" frame in a new window                                                                   |
| modalWidth    | Number     | `500`                        | If the property "isBlank" is set to `false`, you can set the `width` of the modal window the "share on social networks"     |
| modalHeight   | Number     | `500`                        | If the property "isBlank" is set to `false`, you can set the `height` of the modal window the "share on social networks"    |
| hasCounter    | Boolean    | `false`                      | Presence of a counter with the number of share                                                                              |
| digitsCounter | Number     | `0`                          | The number of decimal places in the counter                                                                                 |
| keyCounter    | String     | `''`                         | Counter ID (note, it must be unique if you use several buttons with a counter for the same social network on the same page) |
| customIcon    | String     | `''`                         | Custom imag                                                                                                                 |

> Odnoklassniki

| **Option**    | **Type's** | **Default**              | **Description**                                                                                                          |
|---------------|------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------|
| url           | String     | `document.location.href` | URL-address you want to share                                                                                            |
| description   | String     | `document.title`         | Messages you want to share                                                                                               |
| btnText       | String     | `Odnoklassniki`          | Text to be written on your button                                                                                        |
| hasIcon       | Boolean    | `true`                   | Presence of social network icon in the button                                                                            |
| isBlank       | Boolean    | `true`                   | Open the "share on social networks" frame in a new window                                                                |
| modalWidth    | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `width` of the modal window the "share on social networks"  |
| modalHeight   | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `height` of the modal window the "share on social networks" |
| hasCounter    | Boolean    | `false`                  | Presence of a counter with the number of share                                                                           |
| digitsCounter | Number     | `0`                      | The number of decimal places in the counter                                                                              |
| customIcon    | String     | `''`                     | Custom image                                                                                                             |
| sharePic      | String     | `''`                     | Link to image instead of favicon                                                                                         |

> Tumblr

| **Option**    | **Type's** | **Default**              | **Description**                                                                                                             |
|---------------|------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| url           | String     | `document.location.href` | URL-address you want to share                                                                                               |
| description   | String     | `document.title`         | Messages you want to share                                                                                                  |
| title         | String     | `''`                     | Title you want to share                                                                                                     |
| btnText       | String     | `Tumblr`, `Vkontakte`    | Text to be written on your button                                                                                           |
| hasIcon       | Boolean    | `true`                   | Presence of social network icon in the button                                                                               |
| isBlank       | Boolean    | `true`                   | Open the "share on social networks" frame in a new window                                                                   |
| modalWidth    | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `width` of the modal window the "share on social networks"     |
| modalHeight   | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `height` of the modal window the "share on social networks"    |
| hasCounter    | Boolean    | `false`                  | Presence of a counter with the number of share                                                                              |
| digitsCounter | Number     | `0`                      | The number of decimal places in the counter                                                                                 |
| keyCounter    | String     | `''`                     | Counter ID (note, it must be unique if you use several buttons with a counter for the same social network on the same page) |
| customIcon    | String     | `''`                     | Custom image                                                                                                                |

> Vkontakte

| **Option**    | **Type's** | **Default**              | **Description**                                                                                                          |
|---------------|------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------|
| url           | String     | `document.location.href` | URL-address you want to share                                                                                            |
| description   | String     | `document.title`         | Messages you want to share                                                                                               |
| title         | String     | `''`                     | Title you want to share                                                                                                  |
| btnText       | String     | `Tumblr`, `Vkontakte`    | Text to be written on your button                                                                                        |
| hasIcon       | Boolean    | `true`                   | Presence of social network icon in the button                                                                            |
| isBlank       | Boolean    | `true`                   | Open the "share on social networks" frame in a new window                                                                |
| modalWidth    | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `width` of the modal window the "share on social networks"  |
| modalHeight   | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `height` of the modal window the "share on social networks" |
| hasCounter    | Boolean    | `false`                  | Presence of a counter with the number of share                                                                           |
| digitsCounter | Number     | `0`                      | The number of decimal places in the counter                                                                              |
| sharePic      | String     | `''`                     | Link to image instead of favicon                                                                                         |
| customIcon    | String     | `''`                     | Custom image                                                                                                             |

> Pinterest

| **Option**    | **Type's** | **Default**              | **Description**                                                                                                             |
|---------------|------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| url           | String     | `document.location.href` | URL-address you want to share                                                                                               |
| description   | String     | `document.title`         | Messages you want to share                                                                                                  |
| picture       | String     | `''`                     | Picture you want to share                                                                                                   |
| btnText       | String     | `Pinterest`              | Text to be written on your button                                                                                           |
| hasIcon       | Boolean    | `true`                   | Presence of social network icon in the button                                                                               |
| isBlank       | Boolean    | `true`                   | Open the "share on social networks" frame in a new window                                                                   |
| modalWidth    | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `width` of the modal window the "share on social networks"     |
| modalHeight   | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `height` of the modal window the "share on social networks"    |
| hasCounter    | Boolean    | `false`                  | Presence of a counter with the number of share                                                                              |
| digitsCounter | Number     | `0`                      | The number of decimal places in the counter                                                                                 |
| keyCounter    | String     | `''`                     | Counter ID (note, it must be unique if you use several buttons with a counter for the same social network on the same page) |
| customIcon    | String     | `''`                     | Custom image                                                                                                                |

### Buttons without a counter

> Twitter, Hatena, Instapaper, LiveJournal

| **Option**  | **Type's** | **Default**                                      | **Description**                                                                                                          |
|-------------|------------|--------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| url         | String     | `document.location.href`                         | URL-address you want to share                                                                                            |
| description | String     | `document.title`                                 | Messages you want to share                                                                                               |
| btnText     | String     | `Twitter`, `Hatena`, `Instapaper`, `LiveJournal` | Text to be written on your button                                                                                        |
| hasIcon     | Boolean    | `true`                                           | Presence of social network icon in the button                                                                            |
| isBlank     | Boolean    | `true`                                           | Open the "share on social networks" frame in a new window                                                                |
| modalWidth  | Number     | `500`                                            | If the property "isBlank" is set to `false`, you can set the `width` of the modal window the "share on social networks"  |
| modalHeight | Number     | `500`                                            | If the property "isBlank" is set to `false`, you can set the `height` of the modal window the "share on social networks" |
| customIcon  | String     | `''`                                             | Custom image                                                                                                             |

> Digg, Xing, Pocket

| **Option**  | **Type's** | **Default**              | **Description**                                                                                                          |
|-------------|------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------|
| url         | String     | `document.location.href` | URL-address you want to share                                                                                            |
| btnText     | String     | `Digg`, `Xing`, `Pocket` | Text to be written on your button                                                                                        |
| hasIcon     | Boolean    | `true`                   | Presence of social network icon in the button                                                                            |
| isBlank     | Boolean    | `true`                   | Open the "share on social networks" frame in a new window                                                                |
| modalWidth  | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `width` of the modal window the "share on social networks"  |
| modalHeight | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `height` of the modal window the "share on social networks" |
| customIcon  | String     | `''`                     | Custom image                                                                                                             |

> Blogger

| **Option**  | **Type's** | **Default**              | **Description**                                                                                                          |
|-------------|------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------|
| url         | String     | `document.location.href` | URL-address you want to share                                                                                            |
| description | String     | `document.title`         | Messages you want to share                                                                                               |
| title       | String     | `''`                     | Title you want to share                                                                                                  |
| btnText     | String     | `Blogger`                | Text to be written on your button                                                                                        |
| hasIcon     | Boolean    | `true`                   | Presence of social network icon in the button                                                                            |
| isBlank     | Boolean    | `true`                   | Open the "share on social networks" frame in a new window                                                                |
| modalWidth  | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `width` of the modal window the "share on social networks"  |
| modalHeight | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `height` of the modal window the "share on social networks" |
| customIcon  | String     | `''`                     | Custom image                                                                                                             |

> Reddit, Renren

| **Option**  | **Type's** | **Default**              | **Description**                                                                                                          |
|-------------|------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------|
| url         | String     | `document.location.href` | URL-address you want to share                                                                                            |
| title       | String     | `''`                     | Title you want to share                                                                                                  |
| btnText     | String     | `Reddit`, `Renren`       | Text to be written on your button                                                                                        |
| hasIcon     | Boolean    | `true`                   | Presence of social network icon in the button                                                                            |
| isBlank     | Boolean    | `true`                   | Open the "share on social networks" frame in a new window                                                                |
| modalWidth  | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `width` of the modal window the "share on social networks"  |
| modalHeight | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `height` of the modal window the "share on social networks" |
| customIcon  | String     | `''`                     | Custom image                                                                                                             |

> Weibo

| **Option**  | **Type's** | **Default**              | **Description**                                                                                                          |
|-------------|------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------|
| url         | String     | `document.location.href` | URL-address you want to share                                                                                            |
| description | String     | `document.title`         | Messages you want to share                                                                                               |
| picture     | String     | `''`                     | Picture you want to share                                                                                                |
| title       | String     | `''`                     | Title you want to share                                                                                                  |
| btnText     | String     | `Weibo`                  | Text to be written on your button                                                                                        |
| hasIcon     | Boolean    | `true`                   | Presence of social network icon in the button                                                                            |
| isBlank     | Boolean    | `true`                   | Open the "share on social networks" frame in a new window                                                                |
| modalWidth  | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `width` of the modal window the "share on social networks"  |
| modalHeight | Number     | `500`                    | If the property "isBlank" is set to `false`, you can set the `height` of the modal window the "share on social networks" |
| customIcon  | String     | `''`                     | Custom image                                                                                                             |

### Buttons for instant messengers

> Facebook Messenger

| **Option** | **Type's** | **Default**              | **Description**                               |
|------------|------------|--------------------------|-----------------------------------------------|
| appID      | String     | `''`                     | A unique identifier for the application       |
| url        | String     | `document.location.href` | URL-address you want to share                 |
| btnText    | String     | `Facebook`               | Text to be written on your button             |
| hasIcon    | Boolean    | `true`                   | Presence of social network icon in the button |
| customIcon | String     | `''`                     | Custom image                                  |

> Viber, WhatsApp

| **Option** | **Type's** | **Default**              | **Description**                               |
|------------|------------|--------------------------|-----------------------------------------------|
| url        | String     | `document.location.href` | URL-address you want to share                 |
| btnText    | String     | `Viber`, `WhatsApp`      | Text to be written on your button             |
| hasIcon    | Boolean    | `true`                   | Presence of social network icon in the button |
| customIcon | String     | `''`                     | Custom image                                  |

> Telegram

| **Option**  | **Type's** | **Default**              | **Description**                               |
|-------------|------------|--------------------------|-----------------------------------------------|
| url         | String     | `document.location.href` | URL-address you want to share                 |
| description | String     | `document.title`         | Messages you want to share                    |
| btnText     | String     | `Telegram`               | Text to be written on your button             |
| hasIcon     | Boolean    | `true`                   | Presence of social network icon in the button |
| customIcon  | String     | `''`                     | Custom image                                  |

### Send a message via email

> This isn't really a share button, this is a button that allows you to open the software to send an email message, but it may be useful for you 🙃

| **Option** | **Type's** | **Default**              | **Description**                               |
|------------|------------|--------------------------|-----------------------------------------------|
| url        | String     | `document.location.href` | URL-address you want to share                 |
| btnText    | String     | `Email`                  | Text to be written on your button             |
| hasIcon    | Boolean    | `true`                   | Presence of social network icon in the button |
| subject    | String     | `document.title`         | Email subject                                 |
| customIcon | String     | `''`                     | Custom image                                  |

### Full list of social networks

- Blogger
- Digg
- Email
- Facebook
- Facebook Messenger
- Hatena
- Instapaper
- LinkedIn
- LiveJournal
- Odnoklassniki
- Pinterest
- Pocket
- Reddit
- Renren
- Telegram
- Tumblr
- Twitter
- Viber
- Vkontakte
- Weibo
- WhatsApp
- Xing

### Not worked

- Facebook counter
- LinkedIn counter

## Example

```html
<twitter-button v-bind:isBlank="false" btnText />
```

<img width="38" alt="Twitter button with icon" src="https://user-images.githubusercontent.com/14329906/55610855-df9e9880-5794-11e9-8fe2-8c0fd86df43d.png">

[Live Demo](https://codesandbox.io/s/vvyjzw491l?fontsize=14)

```html
<twitter-button class="share-button--circle" v-bind:hasIcon="false" />
```

<img width="84" alt="Twitter circle button" src="https://user-images.githubusercontent.com/14329906/55610809-c564ba80-5794-11e9-9d85-1130f7ad0881.png">

[Live Demo](https://codesandbox.io/s/9149y00324?fontsize=14)

```html
<twitter-button v-bind:hasIcon="false" class="share-button--outline" />
```

<img width="85" alt="Twitter outline button without icon" src="https://user-images.githubusercontent.com/14329906/55610923-09f05600-5795-11e9-89c3-13a50ab397eb.png">

[Live Demo](https://codesandbox.io/s/9149y00-cu6tf?fontsize=14)

```html
<twitter-button class="share-button--circle share-button--outline" btnText />
```

<img width="45" alt="Twitter outline and circle button with icon" src="https://user-images.githubusercontent.com/14329906/55610998-44f28980-5795-11e9-8c73-6c29249b8a17.png">

[Live Demo](https://codesandbox.io/s/y01j0my311?fontsize=14)

```html
<facebook-button class="share-button--outline" hasCounter />
```

<img width="184" alt="Twitter outline button with icon and counter" src="https://user-images.githubusercontent.com/14329906/55611429-88012c80-5796-11e9-9c71-2bf20e52f95f.png">

[Live Demo](https://codesandbox.io/s/88yq86vzk2?fontsize=14)

```html
<facebook-button
  class="share-button--painted"
  url="https://github.com/"
  hasCounter
/>
```

<img width="74" alt="Twitter painted button with icon and counter" src="https://user-images.githubusercontent.com/14329906/55611270-1aed9700-5796-11e9-963f-182b572471b3.png">

[Live Demo](https://codesandbox.io/s/qkk7k6m0q?fontsize=14)

## Author

This component was developed by [Alexander Shulaev](https://github.com/Alexandrshy) for personal purposes and submitted to Open Source, if it will help someone I will be very happy about it😊

## Link

SVG-icon by [Simple Icons](https://simpleicons.org/)

## Roadmap

- Implement a workflow with automatic version update and automatic publication of changes in npm via GitHub action

## License

[The MIT License (MIT)](https://github.com/Alexandrshy/vue-share-buttons/blob/master/LICENSE.md)
