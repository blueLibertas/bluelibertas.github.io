// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-phd-in-learning-sciences-at-georgia-state-university",
          title: 'Started PhD in Learning Sciences at Georgia State University',
          description: "",
          section: "News",},{id: "news-book-chapter-publication-does-the-international-baccalaureate-diploma-program-ibdp-contribute-to-whole-person-development-the-rise-of-the-ibdp-in-asia-and-its-implications-for-education-reform",
          title: 'Book chapter publication: “Does the International Baccalaureate Diploma Program (IBDP) contribute to Whole-Person...',
          description: "",
          section: "News",},{id: "news-presented-about-smart-implementations-and-its-analysis-techniques-at-the-ai-aloe-nsf-program-director-meeting-linkedin-news-1-news-2",
          title: 'Presented about SMART implementations and its analysis techniques at the AI-ALOE NSF Program...',
          description: "",
          section: "News",},{id: "news-presented-about-smart-implementations-at-the-ai-aloe-external-advisory-meeting-news",
          title: 'Presented about SMART implementations at the AI-ALOE External Advisory Meeting News',
          description: "",
          section: "News",},{id: "news-effects-of-a-cognitive-flexibility-hypertext-learning-environment-for-university-software-education-published-in-the-journal-of-korea-multimedia-society",
          title: '“Effects of a Cognitive Flexibility Hypertext Learning Environment for University Software Education” published...',
          description: "",
          section: "News",},{id: "news-presented-ai-enabled-automatic-evaluation-of-learning-cognitive-engagement-during-asynchronous-online-discussions-at-department-lunch-amp-amp-learn-news",
          title: 'Presented “AI-Enabled Automatic Evaluation of Learning Cognitive Engagement during Asynchronous Online Discussions” at...',
          description: "",
          section: "News",},{id: "news-received-the-outstanding-ph-d-student-in-learning-technologies-award-news",
          title: 'Received the Outstanding Ph.D. Student in Learning Technologies Award News',
          description: "",
          section: "News",},{id: "news-presented-using-machine-learning-for-cognitive-presence-detection-in-asynchronous-online-learning-at-aera-news",
          title: 'Presented “Using Machine Learning for Cognitive Presence Detection in Asynchronous Online Learning” at...',
          description: "",
          section: "News",},{id: "news-poster-presentation-on-an-investigation-of-knowledge-based-ai-vs-human-evaluation-in-the-context-of-academic-summary-evaluation-similarities-dissimilarities-and-being-toward-mutual-understandings-at-the-ai-aloe-external-advisory-meeting-news",
          title: 'Poster presentation on “An Investigation of Knowledge-Based AI vs. Human Evaluation in the...',
          description: "",
          section: "News",},{id: "news-presented-an-investigation-of-knowledge-based-ai-vs-human-evaluation-in-the-context-of-academic-summary-evaluation-similarities-dissimilarities-and-being-toward-mutual-understandings-at-isls-news",
          title: 'Presented “An Investigation of Knowledge-Based AI vs. Human Evaluation in the Context of...',
          description: "",
          section: "News",},{id: "news-presented-about-personalization-in-concept-learning-at-the-ai-aloe-annual-review-news",
          title: 'Presented about Personalization in Concept Learning at the AI-ALOE Annual Review News',
          description: "",
          section: "News",},{id: "news-featrued-in-the-ai-aloe-newsletter-amp-amp-ai-aloe-site-news",
          title: 'Featrued in the AI-ALOE Newsletter &amp;amp;amp; AI-ALOE Site News',
          description: "",
          section: "News",},{id: "news-presented-ai-augmented-summarization-impact-on-online-adult-learners-concept-learning-discussion-quality-and-achievement-leveraging-machine-learning-to-automatically-evaluate-cognitive-engagement-in-asynchronous-online-discussions-the-impact-of-an-ai-based-educational-tool-with-a-focus-on-technology-acceptance-and-metacognitive-awareness-of-adult-learner-a-comprehensive-model-of-ai-literacy-from-a-developmental-perspective-at-aect-news",
          title: 'Presented “AI-augmented summarization: Impact on online adult learners’ concept learning, discussion quality, and...',
          description: "",
          section: "News",},{id: "news-presented-about-the-summative-evaluation-of-the-three-year-of-the-smart-deployment-at-the-ai-aloe-retreat-news-1-news-2",
          title: 'Presented about the Summative Evaluation of the Three-Year of the SMART Deployment at...',
          description: "",
          section: "News",},{id: "news-presented-about-fostering-deeper-understanding-through-text-summarization-at-the-ai-aloe-external-advisory-meeting-news-1-news-2",
          title: 'Presented about Fostering Deeper Understanding through Text Summarization at the AI-ALOE External Advisory...',
          description: "",
          section: "News",},{id: "news-demoed-smart-at-the-isls-24-workshop-ai-augmented-learning-for-all-challenges-and-opportunities-a-view-from-the-five-national-ai-institutes-at-isls-news",
          title: 'Demoed SMART at the ISLS 24 Workshop “AI Augmented Learning for All: Challenges...',
          description: "",
          section: "News",},{id: "news-presented-a-study-on-ai-augmented-concept-learning-impact-on-learner-perceptions-and-outcomes-in-stem-education-investigating-the-influence-of-ai-augmented-summarization-on-concept-learning-summarization-skills-argumentative-essays-and-course-outcomes-in-online-adult-education-a-study-on-ai-augmented-concept-learning-impact-on-learner-perceptions-and-outcomes-in-stem-education-at-isls-news",
          title: 'Presented “A study on AI-augmented concept learning: Impact on learner perceptions and outcomes...',
          description: "",
          section: "News",},{id: "news-presented-about-fostering-understanding-and-knowledge-acquisition-at-the-ai-aloe-annual-review-news-1-news-2",
          title: 'Presented about Fostering Understanding and Knowledge Acquisition at the AI-ALOE Annual Review News...',
          description: "",
          section: "News",},{id: "news-exploring-the-multi-dimensional-human-mind-model-based-and-text-based-approaches-published-in-assessing-writing",
          title: '“Exploring the multi-dimensional human mind: Model-based and text-based approaches” published in Assessing Writing...',
          description: "",
          section: "News",},{id: "news-presented-on-ai-and-personalized-feedback-at-ai-aloe-s-ai-and-instructional-design-outreach-workshop-linkedin-news",
          title: 'Presented on “AI and personalized feedback” at AI-ALOE’s AI and Instructional Design Outreach...',
          description: "",
          section: "News",},{id: "news-presented-education-with-generative-ai-enhancing-simulation-based-nursing-education-at-department-lunch-amp-amp-learn-news",
          title: 'Presented “Education with Generative AI: Enhancing Simulation-based Nursing Education.” at Department Lunch &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-presented-about-designing-smart-at-the-ai-aloe-foundational-and-use-inspired-ai-meetings-news",
          title: 'Presented about Designing SMART at the AI-ALOE Foundational and Use-Inspired AI Meetings News...',
          description: "",
          section: "News",},{id: "news-presented-about-design-amp-amp-architecture-of-smart-at-the-ai-aloe-retreat-linkedin-news-1-news-2",
          title: 'Presented about Design &amp;amp;amp; Architecture of SMART at the AI-ALOE Retreat LinkedIn News...',
          description: "",
          section: "News",},{id: "news-poster-presentation-on-design-based-research-for-scenario-based-generative-ai-augmented-simulation-in-nursing-education-at-the-ls-gsa-grad-student-conference-at-georgia-state-university",
          title: 'Poster presentation on “Design-based research for scenario-based, generative AI-augmented simulation in nursing education”...',
          description: "",
          section: "News",},{id: "news-presented-about-contributions-to-theories-of-learning-and-of-ai-agents-design-heuristics-for-building-ai-agents-for-learning-and-education-amp-amp-poster-presentation-on-design-based-research-for-scenario-based-generative-ai-augmented-simulation-in-nursing-education-at-the-ai-aloe-external-advisory-meeting-linkedin-news-1-news-2",
          title: 'Presented about Contributions to Theories of Learning and of AI Agents, Design Heuristics...',
          description: "",
          section: "News",},{id: "news-presented-design-based-research-for-scenario-based-generative-ai-augmented-simulation-in-nursing-education-at-isls-news-1-news-2",
          title: 'Presented “Design-Based Research for Scenario-Based, Generative AI-Augmented Simulation in Nursing Education” at ISLS...',
          description: "",
          section: "News",},{id: "news-presented-about-contributions-to-theories-of-learning-a-theory-of-learning-at-the-ai-aloe-annual-review",
          title: 'Presented about Contributions to Theories of Learning - A Theory of Learning at...',
          description: "",
          section: "News",},{id: "news-present-on-education-with-generative-ai-at-kentech-news",
          title: 'Present on “Education with Generative AI” at KENTECH News',
          description: "",
          section: "News",},{id: "news-elected-as-secretary-to-the-2025-2026-board-of-the-international-learning-sciences-student-association-ilssa-news",
          title: 'Elected as Secretary to the 2025-2026 board of the International Learning Sciences Student...',
          description: "",
          section: "News",},{id: "news-presented-about-smart-research-at-the-ai-aloe-national-virtual-research-showcase-news-1-news-2",
          title: 'Presented about SMART research at the AI-ALOE National Virtual Research Showcase News 1...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6B%69%6D%34%38%35@%73%74%75%64%65%6E%74.%67%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jinhokim-sininen", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=T_p-Y5IAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
