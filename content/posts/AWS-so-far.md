---
title: AWS So Far
date: 2020-08-23
published: true
tags: ["AWS", "Cloud"]
series: false
canonical_url: false
description: "I have recently been working on moving my personal site to a VPS instance, it has been a great learning experience. It is a lot more involved than it initially seems, so I figured documenting a brief overview of each step would be helpful for me to determine my level of understanding and also a great tool in highlighting any gaps in my understanding."
---

I have recently been working on moving my personal site to a VPS instance, it has been a great learning experience. It is a lot more involved than it initially seems, so I figured documenting a brief overview of each step would be helpful for me to determine my level of understanding and also a great tool in highlighting any gaps in my understanding.

## Registering a domain

First up I guess is registering a domain, which is easy enough, there are many providers and once you have your domain they all have some type of dashboard where you can modify various things. Further on in the process we will need to come back to this dashboard and update DNS settings.

## Creating a ec2 instance

Next up is creating an AWS ec2 instance, for now I am just using an Ubuntu server on the free tier, as this is all just for my learning right now rather than a permanent solution. When creating the instance you must create a key/value pair, which will essentially be your key to access the VPS.

## Modifying the security group

I knew my web server would be serving any content I configure on port 80, so I needed to make sure port 80 was open on the VPS, eventually we want to use https for the site, so I also opened port 443 ready for this.

## Moving my site to the instance

Locally I ran a `gatsby-build`, which generates a folder with all the static content from my website, I then used SCP to transfer this folder to my VPS.

## Web Server

Next up is setting up a web server, which will eventually serve my site. I prefer to use Nginx, so I installed it and got the basic nginx landing page displaying from the vps. Next I moved my previously transferred build folder into the correct directory and repointed the nginx root to serve my site instead.

## HTTPS

Currently my site was being served via the nginx web server, but only on port 80, which is http, I wanted https, so I used let’s encrypt and their certbot program to generate a certificate and update the nginx configuration to use port 443 and serve my site over vps

## DNS

Up until this point my site was being served at <VPS IP> and not my domain, to get this working I would need to setup AWS Route 53 and update my domains name servers to use AWS’s from route 53.

Creating a hosted public zone for my domain generated the name servers, so from there I just needed to update these in my domain dashboard, however to get things working properly I needed to add an A record that would redirect my domain to my VPS IP, two A records in fact, one for [asamshan.dev](https://asamshan.dev) and one for [www.asamshan.dev](https://www.asamshan.dev) .

This means that when anyone visits my site they DNS then routes traffic to my VPS IP or more specifically my Nginx web server on the VPS which then serves the site.

## Going forward

Right now I am still having difficulties managing subdomains and my current solution is multiple certificates for each, but a better way of handling things would be to create an alias and just use one certificate for everything.

Right now every time I update my site I need to go through the process of running a Gatsby build, transferring build folder to vps and then restarting my server, this is not super difficult but would clearly be better if this was all automated somehow.

So that is the next step, automating the process so that whenever I make any changes all of the setup is just triggered and fires off. I am not 100% sure of that process just yet, but that’s the plan!
