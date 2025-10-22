---
title: "Typing in My Language: How I Contributed to Monkeytype"
date: 09-12-2024
draft: false
description: I added my mother language to monkeytype which is a speed typing platform.
tags:
  - personal
  - open-source
  - speed typing
  - development
---

Do you spend a lot of time improving your speed typing? Here is how I contributed to my favorite typing app.

I'm a big fan of typing on my keyboard which led me to discover [monkeytype](https://monkeytype.com) which is my favorite speed typing test platform.

I used to learn touch typing on [keybr](https://keybr.com) and [10fastfingers](https://10fastfingers.com). After mastering that skill on these platforms, I discovered Monkeytype, where I could make my little contribution.

After spending a lot of time on that website, I realized I could contribute by adding my language. I quickly tried to figure out how I could contribute to this project by checking their documentations on their github repository.

## Have you ever thought about adding your language which might not exist to Monkeytype?

Adding a new language is very simple - you just add a `JSON` file with a specific structure named as your language and include it in the `_list.json` file.

Before that, we need to fork the [monkeytype repository](https://github.com/monkeytypegame/monkeytype).

Then, create a new JSON file in `./frontend/static/languages/`, named as the language name and the number of words, e.g `kyrgyz_1k.json`. If there are less than 1000 words, simply add the language name, e.g `kyrgyz.json`.

`kyrgyz.json`

```json
{
	"name": "kyrgyz",
	"rightToLeft": false,
	"ligatures": false,
	"bcp47": "ky-KY",
	"words": [
		"word",
		...
	]
}
```

In addition to this, you have to add your language to the `_groups.json` and `_list.json` files in the same directory like so:

```json
{
  "name": "kyrgyz",
  "languages": ["kyrgyz", "kyrgyz_1k"]
}
```

The `languages` field is the list of files that you have created for your language (without the `.json` file extension). Make sure to add all your files if you have created multiple word lists of differing lengths in the same language.

Add your language lists to the `_list.json` file like so:

```json
,"spanish"
,"spanish_1k"
,"kyrgyz" // your language
```

Then I commit the changes and create a pull request to the official monkeytype repository and wait for an approval.

Just click the `contribute` button

![contribute](https://user-images.githubusercontent.com/83455454/149186637-66dae488-05ae-45c4-9217-65bc36c4927b.png)

After the pull request gets merged new language is available on the website.

Make sure your contribution follows the language guidelines - [Language Guidelines](https://github.com/monkeytypegame/monkeytype/blob/master/docs/CONTRIBUTING.md#language-guidelines)

More info on how to contribute - [Language Contribution](https://github.com/monkeytypegame/monkeytype/blob/master/docs/LANGUAGES.md)

Doing all of that is not a big deal, but I wanted my language to be on this platform where I spend time whenever I wait for something loading.

Here is my [profile](https://monkeytype.com/profile/akmatoff) on monkeytype if you're interested.