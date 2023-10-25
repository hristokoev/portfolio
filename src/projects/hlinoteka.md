---
title: "Hlinoteka"
subtitle: "A NextJS admin/front-end project for a client that sells clay products."
date: "2023-09-20"
thumb: "/images/hlinoteka/thumb.jpg"
tags: ["Next.js", "Tailwind CSS", "MongoDB", "AWS"]
category: "Web Development"
visible: true
---

### Technologies used

* NextJS (React) with TypeScript
* Tailwind CSS
* MongoDB for database
* AWS (S3) for image storage
* DigitalOcean for deployment - Linux, Nginx, PM2

### Introduction

![](/images/hlinoteka/thumb.jpg)

[Hlinoteka.CZ](https://hlinoteka.cz/) is a website for a client that sells clay products and does workshops. They needed a website that would allow them to add/edit/delete products, product categories and events, as well as a front-end for the customers to browse the products and make orders. Orders are made with a sort of a contact form, so thankfully (for me), there was no need for a full-blown e-commerce website. The language of the website is Czech.

### Development

After receiving the design, my job was to convert the Figma prototype to a funcitoning front-end website. I decided to use NextJS for the front-end and the admin panel, which I had to implement the design for. Thankfully, [cruip](https://cruip.com/) helped bootstrap the much needed admin UI.

Soon enough I've realized that this will be a bigger project, as I had to work work with a database, make API calls and use the SSR capabilities of NextJS. As always, I've used Tailwind CSS for the styling. For the database, I've used MongoDB. The images are stored in AWS S3. All of those external services I haven't used before, so it was a great learning experience.

#### 1. Admin panel

The admin panel is password protected and it's only accessible by the client. For the authentication, I've used NextAuth.js. It was a bit tricky to set up, but it works great.

After logging in, the client can manage the products, categories and events. They can add, edit and delete them.

[<img src="/images/hlinoteka/admin-events-thumb.jpg" alt="Events" className="inline-flex" />](/images/hlinoteka/admin-events.jpg)

I've also included dark mode (here you'll notice my love for dark mode 😅):

[<img src="/images/hlinoteka/admin-products-thumb.jpg" alt="Products" className="inline-flex" />](/images/hlinoteka/admin-products.jpg)
[<img src="/images/hlinoteka/admin-products-edit-thumb.jpg" alt="Products" className="inline-flex" />](/images/hlinoteka/admin-products-edit.jpg)

As you can see, pretty simple admin UI that helps the client to manage the website.

#### 2. The (mobile responsive) front-end

The front-end was designed in Figma and my job was only to convert it to code. This was a change for me, as previously my workflow was quite messy and I didn't follow many guidelines (since my projects were small and I was the only developer). This time, I had to follow a ready-made design and I had to make sure that the code is clean and maintainable.

There were some challenges here of course, like doing the image sliders, lazy loading and contact form, but overall, it was a pretty straightforward project.

### Deployment

If someone only told me how much time I would spend on deployment and moving to production... My time at 42 definitely helped, as I had to set up a Linux server, install Nginx, PM2 and configure everything, so both of the apps (admin and front-end) run 24/7 with SSL. I've used DigitalOcean for the server (called a droplet).

### Conclusion

This was a great project and I'm happy with the result. I've learned a tiny bit more about the whole development process and I believe my next journey will include Docker, because I felt my workflow to be quite messy, figuring stuff out throughout the whole process and doing everything manually. Anyway, I'm happy to say that the client is happy with the result and I'm looking forward to my next project.