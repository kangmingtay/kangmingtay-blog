---
title: Building a Real-Time Monitoring Application
date: "2020-05-15"
description: "My design considerations and problems faced"
---

> I will attempt to describe one of the projects I worked on at my recent internship company...

### Description of Problem

Life as a SRE was an eye-opener for me as I've always been working as a SWE in start ups. I learnt that there were six skills that a SRE needed to have (taken from the amazing Google's SRE handbook): Monitoring, Alerting, Logging, Tracking, Automation, CI/CD and Orchestration. 

For my internship project, I wanted to see how I could add value in one of these areas, maybe improve the productive-ness of the SRE on shift or come up with any amazing model for anomaly detection and alerting. After some consideration, I decided to build a monitoring application to improve the SRE team's visibility on key infrastructure pipelines and search domains. 

Since the company that I worked at was operating at a global scale, the pipelines and domains spanned across multiple regions. In AWS, there is this concept of availability zones: 
> "An AWS availability zone consists of one or more data centres in an AWS region. By making use of AWS availability zones, production applications and databases can be made more available, fault-tolerant and scalable as compared to being contained in a single data center." 

Thus, my application had to be able to monitoring the different domains and pipelines across every AWS availability zone used and it had to be in real-time.

### Software Design 

#### Using Flask as the backend framework of choice :) 
Since I was quite familiar with doing backend development in python from my previous internship, I decided to use the flask web framework. However,being single-threaded, flask would not be able to handle concurrent requests made and the requests would be made synchronously. 

In order to overcome this problem, I decided to use a message queue library (celery) and a message broker (redis) together with flask. This allowed me to create many asynchronous tasks that were capable of being scheduled (celery beat) periodically, I could then create celery workers to consume the scheduled tasks periodically. The benefit gained from doing this was the added flexibility in scaling the application as I just needed to increase the number of workers to handle an increase in load. 

The idea I had was for each task to be responsible for polling the different AWS availability zones for a specific search domain. By using celery to create multiple tasks, I would be able to achieve the objective of checking the statuses of multiple search domains periodically. 

However, one of the considerations I needed to make was that my application had to reduce the occurence of flapping statuses.
> A flapping status is defined when the status of a service changes frequently over a short period of time.

In order to prevent this from happening, I decided to implement a counter to keep track of the past few statuses and only update the database when the counter is greater than a threshold. The counter would also only increment if the new status is the same as the previous status. This counter was implemented using Redis, which is an in-memory database, for fast reads and writes. 

#### Making it Real-Time
In order to ensure that the application was as real-time as possible, I scheduled the polls every minute and used web sockets to maintain an open TCP connection between the server and client to send the latest information about the status updates. An added benefit of using Redis to implement my counter was that I could send events to the socket channel as soon as the counter exceeded the threshold set. 

The rest was pretty straightforward - I had standard CRUD endpoints for retrieving data from the database, and I used Flower to keep track and debug celery task-related issues. 

<i>Part 2 will be on build the frontend portion using React and Redux - stay tuned! :) <i>







