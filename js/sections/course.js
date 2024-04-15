const tab = document.querySelectorAll('.tabEvent');
const cardContainer = document.querySelector('.course__tab-cards');
const listItems = document.querySelectorAll('.list__append');
let prevList = null;
let media = window.matchMedia('(min-width:1200px)');
const cardInformation = [
  {
    id: 'AI',
    title: 'Free course',
    heading: [
      'Intro to Generative AI',
      'Intro to ChatGPT',
      'Prompt Engineering for Marketing',
      'Debug Python Code with ChatGPT Case Study',
    ],
    description: [
      'Dive into the many forms of generative AI and learn how we can best use these new technologies!',
      'Learn about ChatGPT, one of the most advanced AI systems available today, and dive into the world of Generative AI.',
      'Leverage AI for marketing using prompt engineering with ChatGPT.',
      'Use ChatGPT to resolve Python code issues. ChatGPT can help you fix bugs, test and simulate code, optimize and improve performance, and much more.',
    ],
    lessons: [1, 1, 1, 0],
    certificate: [],
  },
  {
    id: 'Free',
    title: 'Free course',
    heading: [
      'Intro to ChatGPT',
      'Learn HTML',
      'Learn javascript',
      'Learn SQL',
    ],
    description: [
      'Learn about ChatGPT, one of the most advanced AI systems available today, and dive into the world of Generative AI.',
      'Start at the beginning by learning HTML basics — an important foundation for building and editing web pages.',
      'Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.',
      "In this SQL course, you'll learn how to manage large datasets and analyze real data using the standard data management language.",
    ],
    lessons: [7, 6, 11, 4],
    certificate: [],
  },
  {
    id: 'New to coding',
    title: 'Free course',
    heading: [
      'Choosing a Programming Language',
      'Choosing a Career in Tech',
      'Learn to Code with Blockly',
      'Welcome To Codecademy',
    ],
    description: [
      'This course will introduce learners to factors to consider when picking a first language as well as describe some popular options.',
      'Are you feeling confused about where to aim for with your career goals? Take this course to learn about different career options!',
      'Want to learn how to get started with programming in an interactive way? Try our drag and drop code lessons!',
      'First time on our site? Start here to learn how to use our platform and write some basic code with JavaScript.',
    ],
    lessons: [0, 0, 5, 1],
    certificate: [],
  },
  {
    id: 'Most popular',
    title: ['course', 'Free course', 'Free course', 'Free course'],
    heading: ['Learn Python 3', 'Learn JavaScript', 'Learn HTML', 'Learn C++'],
    description: [
      'Learn the basics of Python 3, one of the most powerful, versatile, and in-demand programming languages today.',
      'Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.',
      'Start at the beginning by learning HTML basics — an important foundation for building and editing web pages.',
      'Learn C++ — a versatile programming language that’s important for developing software, games, databases, and more.',
    ],
    lessons: [14, 11, 6, 13],
    certificate: ['Certificate', 0, 0, 0],
  },
  {
    id: 'Skill paths',
    title: 'Skill paths',
    heading: [
      'Build a Website with HTML, CSS, and GitHub Pages',
      'Analyze Data with SQL',
      'Data Science Foundations',
      'Create a Front-End App with React',
    ],
    description: [
      'Learn the basics of web development to build your own website.',
      'Learn to analyze data with SQL and prepare for technical interviews.',
      'Learn to clean, analyze, and visualize data with Python and SQL.',
      'Learn to build front-end web apps with JavaScript and React.',
    ],
    lessons: [18, 15, 49, 24],
    courses: [9, 8, 15, 9],
    certificate: [
      'Certificate',
      'Certificate',
      'Certificate',
      'Certificate',
      'Certificate',
    ],
    intermediate: 'Intermediate',
  },
  {
    id: 'Career paths',
    title: 'Career paths',
    heading: [
      'Front-End Engineer',
      'Full-Stack Engineer',
      'Computer Science',
      'Data Scientist: Machine Learning Specialist',
    ],
    description: [
      'Front-end engineers work closely with designers to make websites beautiful, functional, and fast...',
      'A full-stack engineer can get a project done from start to finish, back-end to front-end.',
      'Looking for an introduction to the theory behind programming? Master Python while learning data structures, algorithms, and more!',
      'Machine Learning Data Scientists solve problems at scale, make predictions, find patterns, and more! They use Python, SQL, and algorithms.',
    ],
    lessons: [124, 162, 82, 81],
    courses: [34, 51, 6, 27],
    certificate: [
      'Professional Certificate',
      'Professional Certificate',
      'Professional Certificate',
      'Professional Certificate',
      'Professional Certificate',
    ],
  },
];

function createTemplate() {
  const card = `  <div class="course__card">
                    <div class="course__card-title">
                      <p>Free course</p>
                    </div>

                    <div class="course__card-content flex-column">
                      <div>
                        <h3>Intro to Generative AI</h3>
                        <span class="course__card-desc">
                          Dive into the many forms of generative AI and learn
                          how we can best use these new technologies!</span
                        >
                      </div>

                      <div class="course__badges-container">
                        <div>
                          <svg
                            fill="currentColor"
                            role="img"
                            height="1px"
                            class="dotted"
                          >
                            <title>Checker Dense</title>
                            <pattern
                              id="CheckerDense-pattern-43"
                              x="0"
                              y="0"
                              width="4"
                              height="4"
                              patternUnits="userSpaceOnUse"
                            >
                              <rect
                                width="1"
                                height="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="2"
                                y="2"
                                width="1"
                                height="1"
                                fill="currentColor"
                              ></rect>
                            </pattern>
                            <rect
                              width="100%"
                              height="100%"
                              fill="url(#CheckerDense-pattern-43)"
                            ></rect>
                          </svg>
                          <div class="course__card-beginner">
                            <span>Includes<strong class="courseNumber">9</strong>Courses</span>
                          </div>
                        </div>
                        
                        <div>
                          <svg
                            fill="currentColor"
                            role="img"
                            height="1px"
                            class="dotted"
                          >
                            <title>Checker Dense</title>
                            <pattern
                              id="CheckerDense-pattern-43"
                              x="0"
                              y="0"
                              width="4"
                              height="4"
                              patternUnits="userSpaceOnUse"
                            >
                              <rect
                                width="1"
                                height="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="2"
                                y="2"
                                width="1"
                                height="1"
                                fill="currentColor"
                              ></rect>
                            </pattern>
                            <rect
                              width="100%"
                              height="100%"
                              fill="url(#CheckerDense-pattern-43)"
                            ></rect>
                          </svg>

                          <div class="course__card-beginner">
                            <div>
                              <img
                                src="./assets/images/Certificate.svg"
                                alt="Certificate icon"
                                width="16"
                                height="16"
                                role="img"
                              />
                              <span>With<strong class="certificate">Certificate</strong></span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <svg
                            fill="currentColor"
                            role="img"
                            height="1px"
                            class="dotted"
                          >
                            <title>Checker Dense</title>
                            <pattern
                              id="CheckerDense-pattern-43"
                              x="0"
                              y="0"
                              width="4"
                              height="4"
                              patternUnits="userSpaceOnUse"
                            >
                              <rect
                                width="1"
                                height="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="2"
                                y="2"
                                width="1"
                                height="1"
                                fill="currentColor"
                              ></rect>
                            </pattern>
                            <rect
                              width="100%"
                              height="100%"
                              fill="url(#CheckerDense-pattern-43)"
                            ></rect>
                          </svg>

                          <div class="course__card-beginner">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0.25 0.25 13.5 13.5"
                                fill="#fff"
                                role="img"
                                style="background-color: transparent"
                                width="16"
                                height="16"
                              >
                                <title>Level Icon</title>
                                <mask id="LevelIcon-mask-136">
                                  <path
                                    d="M4.975 7.45H1.15v5.4h3.825m4.05-8.1h-4.05v8.1h4.05m0-11.7h3.825v11.7H9.025z"
                                    stroke-width="0.9"
                                    fill="none"
                                    stroke="#fff"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </mask>
                                <g mask="url(#LevelIcon-mask-136)">
                                  <rect
                                    width="100%"
                                    height="100%"
                                    fill="currentColor"
                                  ></rect>
                                </g>
                              </svg>
                              <span><strong class="level">Beginner</strong>Friendly</span>
                            </div>

                            <div class="lessonTag">
                              <span><strong>1</strong>Lesson</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`;
  return card;
}

function prepareTemplate(num, className) {
  // removing card
  cardContainer.innerHTML = '';

  for (let i = 0; i < 4; i++) {
    let template = createTemplate(i);
    // appending card
    cardContainer.insertAdjacentHTML('beforeend', template);
    // selecting classes
    let cardTitle = document
      .querySelectorAll('.course__card-title')
      [i].getElementsByTagName('p');
    let cardContent = document.querySelectorAll('.course__card-content')[i];
    let courseBadges = document.querySelectorAll('.course__badges-container')[
      i
    ];
    let cardMain = document.querySelectorAll('.course__card')[i];
    let lessonTag = courseBadges.querySelector('.lessonTag');
    // title innerText
    if (Array.isArray(cardInformation[num].title)) {
      cardTitle[0].innerText = cardInformation[num].title[i];
    } else {
      cardTitle[0].innerText = cardInformation[num].title;
    }
    // heading & description innerText
    cardContent.getElementsByTagName('h3')[0].innerText =
      cardInformation[num].heading[i];
    cardContent.querySelector('.course__card-desc').innerText =
      cardInformation[num].description[i];

    // intermediate & lessonNumber innerText
    if (cardInformation[num].intermediate) {
      courseBadges.querySelector('.level').innerText =
        cardInformation[num].intermediate;
    }
    let lessonNumber = cardInformation[num].lessons[i];
    if (lessonNumber) {
      lessonTag.innerHTML = `<span><strong>${lessonNumber}</strong>${
        lessonNumber > 1 ? 'lessons' : 'lesson'
      }</span>`;
    } else {
      lessonTag.remove();
    }

    // certificate & courses innertext || removing
    if (cardInformation[num].certificate[i]) {
      courseBadges.querySelector('.certificate').innerText =
        cardInformation[num].certificate[i];
    } else {
      courseBadges.removeChild(courseBadges.children[1]);
    }
    if (cardInformation[num].courses) {
      courseBadges.querySelector('.courseNumber').innerText =
        cardInformation[num].courses[i];
    } else {
      courseBadges.removeChild(courseBadges.children[0]);
    }

    // adding class
    if (className) {
      cardMain.classList.remove(className);
      cardMain.classList.add(className);
    }
  }
  listItems[num].classList.add('active');
  if (prevList !== null) {
    prevList.classList.remove('active');
  }
  prevList = listItems[num];

  listItems[num].append(cardContainer);
  listItems[num].insertBefore(
    cardContainer,
    listItems[num].querySelector('.exploreBtn')
  );
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', (el) => {
    if (!el.currentTarget.classList.contains('active')) {
      switch (el.currentTarget.innerText) {
        case 'AI':
        case 'AI New':
          prepareTemplate(0);
          break;
        case 'Free':
          prepareTemplate(1);
          break;
        case 'New to coding':
          prepareTemplate(2);
          break;
        case 'Most popular':
          prepareTemplate(3);
          break;
        case 'Skill paths':
          prepareTemplate(4, '--light-blue');
          break;
        case 'Career paths':
          prepareTemplate(5, '--dark-blue');
          break;
      }

      let buttonTab;
      if (media.matches) {
        buttonTab = document
          .querySelector('.courses__button-container')
          .getElementsByTagName('button');
      } else {
        buttonTab = document.querySelectorAll('.tab-button ');
      }

      for (button of buttonTab) {
        if (button.classList.contains('active')) {
          button.classList.toggle('active');
          button.setAttribute('aria-hidden', true);
        }
      }
      el.currentTarget.classList.toggle('active');
      el.currentTarget.setAttribute('aria-hidden', false);
    }
  });
}

// Dom after loaded tab rendering for first tab section
document.addEventListener('DOMContentLoaded', () => {
  prepareTemplate(0);
});
