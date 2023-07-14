---
title: "Pretty OSCAR"
subtitle: "Chrome Extension for Amadeus (OSCAR) - a tool used by CRM agents to book flights, see flight history, etc."
date: "2023-05-18"
thumb: "/images/pretty-oscar/thumb.jpg"
tags: ["JavaScript", "HTML/CSS"]
openSource: true
---

```
Technologies used: JavaScript, Chrome Extensions, Regex, HTML, CSS
```

Amadeus is a leading global distribution system (GDS) used in the travel industry, providing a comprehensive platform for travel agencies to book flights, hotels, car rentals, and other travel-related services.

While extremely powerful, its UI is a bit dated and clunky. This is where Pretty OSCAR comes in.

## The Problem

* The current format of the information provided by Amadeus is difficult for new agents to read and interpret.
* The information is not clearly visible at first glance, which can make it challenging for agents to quickly identify important details about flights, airports, travel agencies, and other key information.
* As a result, the agents may spend more time searching for the information they need, which can impact their productivity and cause frustration. ​

Here's what you get once you try to see the flight history of a passenger:
![OSCAR UI](/images/pretty-oscar/oscar.jpg)

Put yourself in the shoes of an agent. You're trying to see the flight history, but the information is all over the place. It's a mess.

## The Solution

I've used the help of [highlight.js](https://highlightjs.org/) to parse a `<pre>` tag (the only HTML element that Amadeus gives you) and highlight the text based on a regex pattern.

At first, I was using a simple regex pattern to highlight the text, but I quickly realized that it was not enough. I needed to highlight the text based on the context of the text. The text, however, was not consistent. For example, the flight number could be in the format of `AC 123` or `AC123` or `AC 1234` or `AC1234`. I needed to account for all of these cases.

Additionally, I wanted to parse the dates, status codes, booking classes, IATA codes and more, all of which had different alternative patterns. I ended up with tens and tens of regex patterns.

The main obstacle was actually building the chrome extension and making it all work with the Amadeus tool. Remember, Amadeus gives me only one `<pre>` HTML tag and nothing else. While I had some knowledge with JavaScript, I've never built an extension before. I had to learn how to build a chrome extension from scratch.

Chrome Extensions are generally easy to build, but they do have some additional requirements that you need to be aware of. For example, you need to have a manifest.json file that contains all the information about your extension. You also need to have a background script that runs in the background and listens for events from the browser.

Lastly, I also had to build the extension window, which in itself is a smaller project. I had to build a UI that would allow me to change settings, themes and colors for the highlighted text and then save those to the local storage.


Amadeus with parsed and stylized text | Pretty OSCAR Chrome Extension UI
:------------------------------------------:|:-------------------------:
![](/images/pretty-oscar/pretty-oscar.jpg) | ![](/images/pretty-oscar/ext.jpg)

I've also added some nice features, which were pretty easy to implement, but very much appreciated by the users. For example, I've added hyperlinks to other tools that the agents use, I've also added translations for the status, IATA and booking classes codes.

## Repository

You can find the repository [here](https://github.com/hristokoev/pretty-oscar).

## Further Development

Currently, the extension is used by a couple of selected agents and it's been a great success. I've received a lot of positive feedback and I'm happy that I was able to help my colleagues. However, I'm not sure if I'll be able to continue working on this project, as I'll be no longer working for the company that uses Amadeus. Additionally, it's pretty hard to make changes to the internal workflow, as it's a big company with a lot of bureaucracy. 

In the end, this turned out to be a passion project for me, but while I was working on it, I've learned a lot about JavaScript, Chrome Extensions and Regex. I was also more productive at work, as I was able to quickly see the information I needed. So, it was a win-win in the end. 😁