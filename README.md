# Working Moms, A Data Visualization

#### *How a woman's career is affected by motherhood*

December 16, 2018

Taylor Sokolowski

Metrics & Data Visualization I

**Final Project**, [link to assignment in syllabus](https://github.com/sva-dsi/2018-fall-course/blob/master/final-projects.md)

## Description

#### Project Background

The broad goal of my thesis is to increase opportunities for women to access leadership positions. Through my research, I have learned that a pivotal moment in a woman's career is when she has her first child. During this time, a woman is faced with difficult decisions affecting her as an employee and as a mother. When workplaces aren’t supportive of a new mom’s needs and goals, it may lead to her leaving her job, which ultimately limits her opportunities for leadership positions in the future. This is why I am focusing my thesis specifically on supporting new moms to have a successful transition back to work after having a child.

#### Project Goal

For my final project for this class, I wanted to create a simple visualization that explained my thesis problem through key statistics. Many people often don't understand the direct connection between targeting new moms returning to work after maternity leave and my larger goal of increasing opportunities for women to access leadership positions, so I wanted this to be a way of bringing that story to life.  

## Demo

Here is the link to my final visualization: https://tsokolowski.github.io/working_moms_data_viz/

And here's the link to view the code: https://editor.p5js.org/tsokolowski/sketches/Hy0-28mlN

## My Process

#### Data Collection and Processing

There are a lot of studies and statistics being thrown around on the topic of gender equality in the workplace, especially in the era of #metoo and #timesup. For my thesis, I created a spreadsheet of all the studies, key findings, and statistics related to my research as a central hub of information. Through doing this, I quickly realized how many different, and sometimes contradictory, statistics there are out there, and how many stereotypes and myths there are related to women, and especially moms, in the workplace. 

For this project, I parsed through all the various statistics and data points that helped to "debunk" the myths about working mothers and tell a compelling story of how a woman's career is affected by becoming a mom. I also focused on pulling data from trustworthy sources that displayed similar statistics. This included the report, Women in the Workplace, from McKinsey & Company and the report, The Slowly Narrowing Gender Wage Gap, from the Institute for Women's Policy Research. 

#### Visualization Selection

Once I pulled all of the statistics I wanted to include, I created a narrative that would weave them together and tell a story  about how a woman's career is affected when she becomes a mom. For the visualizations, I wanted to create something simple but impactful, where someone could visually see the differences between the key statistics at a quick glance. To do this I chose to represent each statistic with icons of women, where each icon would represent one woman. 

For the first statistic (20% of corporate CEO's are women), I choose to visualize it as "1 in 5" in order to make it very tangible and relatable. The visual shows 1 woman icon and 4 men icons to see how underrepresented women are at the c-suite level.

<img width="447" alt="screen shot 2018-12-16 at 8 04 23 pm" src="https://user-images.githubusercontent.com/43052425/50061483-e1edd000-016e-11e9-97f4-fb4d68a0e543.png">
      
For the second and third statistics (2% of women plan to leave the workforce for family reasons, but 43% of women scale back at work after having a child and 27% quit their job at some point to care for children), I wanted to show 100 women (equiavalent of 100%) for each visualization to be able to directly compare them and see the impact. Ultimately, I wanted to show how only 2 out of 100 women planned to change their careers to care for children, but 70 out of 100 ended up making changes. This was to debunk the myth that most women leave work or don't become senior leaders because they *choose* to, and emphaize that that may not have been their original plan or goal. 

<img width="444" alt="screen shot 2018-12-16 at 8 04 33 pm" src="https://user-images.githubusercontent.com/43052425/50061496-f8942700-016e-11e9-8db8-c81f49159d49.png"> <img width="448" alt="screen shot 2018-12-16 at 8 04 41 pm" src="https://user-images.githubusercontent.com/43052425/50061497-f8942700-016e-11e9-971e-ef7d253fda2d.png">

For the final statistic (women who took 1 year off from work earned 39% less than those that didn’t and those that took 4 or more years off earned 65% less), I chose to compare 3 representative women and create a simple bar graph of their difference in earnings. 

<img width="448" alt="screen shot 2018-12-16 at 8 04 49 pm" src="https://user-images.githubusercontent.com/43052425/50061498-f8942700-016e-11e9-8dd6-d5539bc8e688.png">

#### Building the Visualization

Once I knew what story I wanted to tell and what I wanted the visualizations to look like, building my visualization in p5.js was a whole other challenge. I started by building the basic structure of the site to include multiple visualizations throughout the page that would appear when you scroll. Initially, I placed images in each of those sections as placed holders. Here's a link to my first draft: https://editor.p5js.org/tsokolowski/sketches/Hk8BEMwkV (images that don't appear when you scroll) and second draft: https://editor.p5js.org/tsokolowski/sketches/S1r5dzDyN (added scrolling effect) and a screenshot below:

![draft 1](https://user-images.githubusercontent.com/43052425/50061683-8d4b5480-0170-11e9-9f6d-b0d189c2b130.jpg)

From there, I worked to build each animated visualization in a separate p5 sketch. Here are the links to those 4 visualizations:

Sketch one: https://editor.p5js.org/tsokolowski/sketches/SkPpUubeE

Sketch two: https://editor.p5js.org/tsokolowski/sketches/HkVG3n-xE

Sketch three: https://editor.p5js.org/tsokolowski/sketches/SJU5x-MlV

Sketch four: https://editor.p5js.org/tsokolowski/sketches/SkBfuyzlE

Once I had these built, I was able to bring them into my final project and replace the images with canvases for each sketch. Here I had to navigate necessary changes within the code so it would work in the overall structure of the page. 

Finally, I focused on editing the styling using html and css to update the fonts, colors, etc. from the style guide I had originally created. Here is the link to the final site (https://tsokolowski.github.io/working_moms_data_viz/) and a screenshot below:

![screencapture-tsokolowski-github-io-working_moms_data_viz-2018-12-16-20_30_07](https://user-images.githubusercontent.com/43052425/50061827-6a6d7000-0171-11e9-84c7-d100adf5bd49.png)

#### Reflection - challenges, learnings and next steps

One of my biggest challenges was animating the visuals of the icons of women to pop up on the screen. The animation I created for the first statistic with only 5 icons was fairly simple since I could move each one individually. However, for the visuals that had 100 icons, this wasn't going to be possible. With Joey's help, I was able to replicate the code he provided and apply it to multiple women appearing within the sketch, however I couldn't figure out how to make the icons display with equal spacing on the canvas, or how to change the color of certain icons to represent the statistic. Here was the code from Joey: https://editor.p5js.org/joeyklee/sketches/BkGRVRblE and then my attempt to replicate this with the women icons: https://editor.p5js.org/tsokolowski/sketches/HkQS22GxE. In the end, I chose to keep my animation of each row of women appearing on the screen instead of each individual woman filling in. This wasn't as visually pleasing, but still communicated what I needed.

Another challenge was trying to add additional scrolling effects to the page. I wanted to apply scrolling effects so that text would appaer on the screen as you scrolled down as well, but found this to be way more difficult than I expected. I found many sites with similar effects and tried to look into their code to replicate it, and even found some downloadable templates on github, but every time I tried these, I broke my visualization. For this project I chose to go with simplicity, especially since I was coding it in p5.js, but would've wanted a more pleasing visual aesthetic if I had been able to.

A key learning from this process was to be more critical of data sources and how people are using and visualizing data. I found many statistics within news articles related to my topic that were used out of context and once I dug into the data within the original study, I often found different or more nuanced information. This was an important reminder as I do my thesis research to not believe everything I read, and to really go into the data to see what else is going on. 

I also learned a lot more coding language than I realized and found myself feeling pretty confident to at least execute the basics of what I wanted to do. I think this will be extremely useful in the future when working with developers to understand the syntax and be able to create a rough prototype of what I want to communicate.

Finally, next steps for this project are to connect it to my thesis website so people can learn more about my work. I have already started sharing the site with a few stakeholders that are engaged with my research to get their feedback. Overall, they have reported that the explanation of the connection between motherhood and limited opportunities for career growth is very clear through my visualization and many said that they learned something they didn't know or didn't expect related to the statistics. I'm looking forward to using this as a tool for communicating about my thesis with others. 

Thanks so much Joey!
