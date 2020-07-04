---
title: Problems and Decisions
date: "2020-05-20"
description: "Collection of thoughts on some tradeoffs when developing, don't hate but appreciate!!"
---

### Refactoring unnecessarily 
When I first started writing the code for Project X, I was very concerned with ensuring that my code followed the best design practices and recommendations. After a couple of weeks, I realised that I was way behind on my milestones set and it was becoming very painful to continue developing. It got to the point where I was just reading various tech blogs and books on best coding and design principles instead of actually coding. When it hit me, I decided that I should focus on getting a working prototype out first and come up with a regular schedule on for refactoring code. From this experience, I also learnt that too much unnecessary refactoring is actually detrimental to the software development life cycle as it does not seek to improve the efficiency of the code but only serves as a means to procrastinate on developing more important features. 

### Message queue libraries (python-rq vs celery)
When I first decided to use message queues for one of my projects, I had to consider the pros and cons of using celery as compared to python-rq. Initially, I decided to go with python-rq because the community said that it was much simpler to implement compared to a heavyweight like celery. However, python-rq did not come with a native scheduler and I needed to work with other third party scheduling libraries. The open-source community for python-rq was also not as strong as celery. This experience has taught me to be more critical when evaluating the libraries or other pieces of software that I want to use to build things. However, it is worth noting that it does not hurt to try out a library for a reasonable amount of time to have a greater understanding of what it’s capable of.

<i>Also, note to self, I should check out rabbit-mq someday, the documentation looks pretty solid.<i>
