---
title: "Email Templates Generator"
subtitle: "React app that helps with generating emails for CRM agents. AI powered"
date: "2023-07-01"
thumb: "/images/email-templates/thumb.jpg"
tags: ["React", "Firebase", "Tailwind CSS", "AI"]
category: "Web Development"
---

### Technologies used

* React, Vite
* Tailwind CSS
* Firebase, Firestore
* Craft.js

### Introduction

For 10 months I've been a CRM agent for a big airline company. I've been writing a lot of emails and I've noticed that I'm using the same templates over and over again. I've also noticed that my colleagues are doing the same. So I thought, why not make a tool that will help us with that?

### The Idea

So the idea is quite simple. Since we were writing the same type of emails, there are only a handful of fields that need to be changed for every email. That is, the name of the customer, the flight number, the date of the flight, etc. The rest 90% of the email is the same.

However, there are numerous types of emails that we need to send. For example, there are emails to apologize for a flight delay, to request for more information, to pay a compensation, etc.

### First Prototype

[<img src="/images/email-templates/first-version-thumb.jpg" alt="First version of the app" />](/images/email-templates/first-version.jpg)

This was a very nice project to learn React. For this, I've prepared a JSON file with all of the text lines that were needed to 'build' a template. The user first had to fill out all of the necessary information at the top, select the lines of text and click on 'generate' (which basically just gathered all of the selected lines into one text block).

By the way, I've used [Tailwind CSS](https://tailwindcss.com/) for the styling, but I didn't bother much to make it look nice or responsive. I just wanted to get the functionality right.

Small note: see that I've written CDG and AMS in the fields, but it converted it to Paris and Amsterdam. I was so proud of that 😅.

### Current Version

I found out that selecting lines like that is not a scalable solution. There had to be a better way. So I decided to go for a 'blog' type of functionality.

[<img src="/images/email-templates/1-thumb.jpg" alt="Second version of the app" className="inline-flex" />](/images/email-templates/1.jpg)

I divided the emails into categories. This meant that I had to start from scratch and:

* Use a database to store the emails
* Create a page for each email
* Create a page for each category
* Create a page for the home page
* Create authentication for the users, favoriting email templates, etc.
* Build a search functionality
* Create a builder for templates - this one was tough

Also, I really wanted to use AI, so that was part of the plan - to use GPT-3 for enhancing the email templates.

#### 1. Categories 

[<img src="/images/email-templates/2-thumb.jpg" alt="Categories" className="inline-flex" />](/images/email-templates/2.jpg)

In Firestore, I set up a collection for the categories and a collection for the emails. Each email has a category ID, which is used to query the emails for each category.

#### 2. Email Page

[<img src="/images/email-templates/3-thumb.jpg" alt="Email page" className="inline-flex" />](/images/email-templates/3.jpg)

The email page is pretty straightforward. It just displays the email and the user can copy it. However, I still left the functionality to update fields in the email. Upon selecting a field, the user gets to choose from a list of options or type in a custom value.

#### 3. Template Editor

[<img src="/images/email-templates/4-thumb.jpg" alt="Template editor" className="inline-flex" />](/images/email-templates/4.jpg)

And this was the toughest part of this whole project! Due to the fact that each email is not simply a text, but a combination of text and fields, I had to come up with a way to 'build' the email for the user. So I looked around for a few days and found Craft.js. It's a React library that allows you to build a page with drag and drop functionality.

This library then exported the page as a flat JSON file, so there were some fun and not so fun moments when I had to learn how to convert that to a hierarchy of objects that I could use to build the email.

All of the YouTube tutorials couldn't save me. 😅 But it was a great learning experience.

### Repository

Currently, the project is on hold due to lack of time.

I've decided to make it closed source for now, because I'd like to protect the data that I've gathered. Also, I don't feel confident with my Firebase/Firestore knowledge and will need to learn more on how to protect the data.

Speaking of Firebase...

### Challenges

A fun challenge for me was appeared after finding out that for 40 email templates, I was getting thousands of reads to Firestore! The daily limit is 50k, so I was getting close to that in my development. I had to find a way to reduce the reads. For now I've managed to actually make them count as one read per each load, but I would still like to reduce that. The email templates are static, so I don't need to query them every time. And I'm thinking of combining NextJS with a headless CMS, so that I can have a static website. More on that soon...

Another challenge I expect will be AI and how to integrate Chat GPT to improve the email templates and randomize them a bit.

### What I've learned

This project improved my skills in React and Tailwind CSS. Firebase was pretty new to me, but it was enjoyable and I quite like it. I will probably use it in future projects.