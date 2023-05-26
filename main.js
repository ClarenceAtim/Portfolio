const menu = document.getElementById('nav-elements');
const menuOpenClose = document.getElementById('menu');
const logo = document.getElementById('logo');
const mobileNavList = document.querySelectorAll('.mobile-nav-list');

function togglerMenu() {
  menu.classList.toggle('active');
  menuOpenClose.classList.toggle('open');
  menuOpenClose.classList.toggle('close');
  logo.classList.toggle('hide');
  document.body.classList.toggle('mobile-nav-open');
}

mobileNavList.forEach((element) => {
  element.addEventListener('click', togglerMenu);
});

//  Work Projects Data

const projects = [
  {
    main: true,
    name: 'Multi-Post Stories',
    image: './images/img-placeholder-desktop.svg',
    image2: './images/ImgPlaceholder.png',
    image3: './images/Snapshoot Portfolio.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'Ruby'],
    demoLink: '',
  //   codeLink: '',
  },

  {
    main: false,
    name: 'Profesional Art Printing Data More',
    image: './images/Last-card.svg',
    image2: './images/ImgPlaceholder.png',
    image3: './images/Snapshoot Portfolio.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    main: false,
    name: 'Data Dashboard Healthcare',
    image: './images/Last-card.svg',
    image2: './images/ImgPlaceholder.png',
    image3: './images/Snapshoot Portfolio.png',

    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    main: false,
    name: 'Website Portfolio',
    image: './images/Last-card.svg',
    image2: './images/ImgPlaceholder.png',
    image3: './images/Snapshoot Portfolio.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    main: false,
    name: 'Profesional Art Printing Data More',
    image: './images/Last-card.svg',
    image2: './images/ImgPlaceholder.png',
    image3: './images/Snapshoot Portfolio.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    main: false,
    name: 'Multi Post Stories',
    image: './images/Last-card.svg',
    image2: './images/ImgPlaceholder.png',
    image3: './images/Snapshoot Portfolio.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
  {
    main: false,
    name: 'Website Portfolio',
    image: './images/Last-card.svg',
    image2: './images/ImgPlaceholder.png',
    image3: './images/Snapshoot Portfolio.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    demoLink: '',
    codeLink: '',
  },
];

const projectsContainer = document.querySelector('#main-grid');
const projectCardsContainer = document.querySelector('#card-holder');

projects.forEach((project, index) => {
  if (project.main) {
    const tagsList = project.tags.map((tag) => `<li class="tag-items">${tag}</li>`).join('');

    const projectDisplay = `
      <img class="placeholder-image" src="${project.image}" alt="${project.image2}" />
      <div class="work-title-post">
        <h2 class="post-heading">${project.name}</h2>
        <p class="post-description">
          ${project.description}
        </p>
        <ul class="tag-list">
          ${tagsList}
        </ul>
        <a class="project-button btn" data-index="${index}" >See Project</a>
      </div>
    `;

    projectsContainer.innerHTML = `
      <div class="work-project-display">
        ${projectDisplay}
      </div>
    `;
  } else {
    const tagsList = project.tags.map((tag) => `<li class="card-items">${tag}</li>`).join('');

    const projectCard = `
      <div class="info-holder">
        <h2 class="project-heading">
          ${project.name}
        </h2>
        <p class="card-description">
          ${project.description}
        </p>
        <ul class="tag-list">
          ${tagsList}
        </ul>
      </div>
      <div class="button-section">
        <a id="cardButton${index}" class="flex-center card-button btn" data-index="${index}">See Project</a>
      </div>
    `;

    const cardHolder = document.createElement('div');
    cardHolder.classList.add('work-card');
    cardHolder.style.backgroundImage = `url(${project.image})`;
    cardHolder.innerHTML = projectCard;

    // Add event listener to change background image on hover
    cardHolder.addEventListener('mouseenter', () => {
      cardHolder.style.backgroundImage = `url(${project.image2})`;
    });
    cardHolder.addEventListener('mouseleave', () => {
      cardHolder.style.backgroundImage = `url(${project.image})`;
    });

    projectCardsContainer.appendChild(cardHolder);
  }
});

//  Deatils Popup window

const popup = document.createElement('div');
function createPopup(project) {
  popup.innerHTML = `
  <div id="popup-container" class="popup-window">
  <div class="popup-holder">
    <div class="popup-close-btn-holder">
      <div class="title-xbtn">
        <h1 id="popup-header" class="project-heading-pop">${project.name}</h1>
      </div>
      <ul class="popup-tag-list">
        <li class="tag-items popup-feature">${project.tags[0]}</li>
        <li class=" tag-items  popup-feature">${project.tags[1]}</li>
        <li class=" tag-items  popup-feature">${project.tags[2]}</li>
      </ul>
    </div>
    <div class="popup-info">
      <img
        id="popup-image"
        class="popup-image"
        src="${project.image3}"
        alt="post image"
      />
      <div class="popup-info-holder">
        <p id="popup-description" class="popup-description">
        ${project.description}
        
        </p>
        <p id="popup-description1" class="popup-description desktop-des1">
    ${project.description}
  </p>
        <div class="popup-btn-holder">
          <a id="seeLivePopup" class="popup-btn btn" href="${project.demoLink}"
            >See live
          </a>
          <a id="seeSourcePopup" class="popup-btn btn" href="${project.codeLink}"
            >See source
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;
  document.body.appendChild(popup);
}

const buttons = document.querySelectorAll('.card-button, .project-button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const project = projects[index];
    createPopup(project);

    const xPopup = document.getElementById('x-popup');
    xPopup.addEventListener('click', () => {
      popup.remove();
    });
  });
});

// form validation
const form = document.querySelector('.contact-form');
const emailInput = form.querySelector('#email');
const errorMessage = form.querySelector('#error-message');

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.textContent = 'Please enter a lower case email address.';
  }
});
 
// preseve data
form.addEventListener('input', () => {
  const formData = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem('UserData', JSON.stringify(formData));
});

const savedFormData = JSON.parse(localStorage.getItem('UserData'));
if (savedFormData) {
  Object.entries(savedFormData).forEach(([name, value]) => {
    const input = form.elements[name];
    if (input) {
      input.value = value;
    }
  });
}
