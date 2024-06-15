class Portfolio {
  constructor({
    firstName,
    lastName,
    jobTitle,
    github,
    linkedin,
    cv,
    email,
    skills,
    projects,
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.github = github;
    this.linkedin = linkedin;
    this.cv = cv;
    this.email = email;
    this.skills = skills;
    this.projects = projects;
  }

  addNewProject(title, repository, description, skills) {
    const project = {
      title,
      repository,
      description,
      skillsApplied: [],
    };

    skills.forEach((skill) => {
      project.skillsApplied.push(skill);
    });

    this.projects.push(project);
  }
}

const portfolioKellieDixon = new Portfolio({
  firstName: 'Kellie',
  lastName: 'Dixon',
  jobTitle: 'Full Stack Developer',
  github: 'https://github.com/KDKahlo',
  linkedin: 'https://linkedin.com/in/kellie-dixon-fullstack-entwickler',
  cv: 'https://drive.google.com/file/d/13iCFiduKZgarg1XiceMYi43G1FM1WdtB/view?usp=sharing',
  email: 'kdkahlo@gmail.com',
  skills: [
    'AWS',
    'CSS',
    'Docker',
    'Express.js',
    'Git',
    'GitHub',
    'HTML',
    'JavaScript',
    'Linux',
    'MySQL',
    'Node.js',
    'React.js',
    'RESTful APIs',
    'Vue',
    'Webpack',
  ],
  projects: [
    {
      title: 'Homework Homies',
      repository: 'github.com/KDKahlo/homework_homie',
      livePreview:
        //insert Loom video link here
        '',
     
      description:
        'Fun <span class="highlight1">educational tool</span> for Grundschule students, <span class="highlight2">to learn how to organize homework and other task</span>. Developed with students and teachers in mind!',
      skillsApplied: [
        'JavaScript',
        'CSS',
        'HTML',
        'React.js',
        'React Big Calendar',
        'MySQL',
      ],
    },
   
    {
      title: 'My Portfolio',
      repository: 'github.com/KDKahlo/portfolio',
      livePreview:
        '',
      liveVersion: '',
      description:
        '<span class="highlight1">My own portfolio.</span> I thought that if I was going to showcase my work, what better way than to <span class="highlight2"> build it with Vue.</span>',
      skillsApplied: ['Vue.js', 'HTML', 'CSS'],
    },
   
    {
      title: 'AleYea CraftbeerMe! (MVP - Bootcamp)',
      repository: 'github.com/KDKahlo/Ale-Yea-MVP',
      livePreview:
        '',
      liveVersion: '',
      description:
        'This version contains the basic logic for a <span class="highlight1">filter of craftbeer by flavor </span> from the database I created in MySQL . The <span class="highlight2">database was built</span> with information on craftbeer breweries that can be found in Berlin as well as some breweries that have craftbeers guest spotting in Berlin.',
        
      skillsApplied: ['React', 'MySQL', 'Express', 'API'],
    },
    {
      title: 'Cozone',
      repository: 'github.com/KDKahlo/Cozone-MVP-Forked',
    
      
        livePreview:'https://www.loom.com/share/4d78cd4711eb4b8faf6b78f2c14a3db5',
     
      description:
      'A full-stack web app by Kecia Orleans. Built with React.js, Node.js, Express, and MySQL. I  <span class="highlight1">contributed </span>  to my classmates MVP by adding registration with<span class="highlight2"> authentication and authorization</span> for the user.<span class="highlight2">  Created React-Tinder Cards display</span> of player profiles as well as filter by rank. Also added Navbar.',
        
      skillsApplied: [
        'JavaScript',
        'CSS',
        'HTML',
        'React.js',
        'React-Tinder-Cards',
        'MySQL',
        'MUI Icons',
        'JSONWebtoken/bcrypt',
    
      ],
    },
    
    {
      title: 'Coding Challenges from Hacker Rank and Code Academy',
      repository: 'github.com/KDKahlo/Coding-Challenges-From-Hackerrank-CodeAcademy',
      livePreview:
      //add Loom video link below
        '',
      liveVersion: '',
      description:
        'This repository contains <span class="highlight1">my solutions</span> to various problems in <span class="highlight2">Hackerrank</span> and <span class="highlight2"> Code Academy</span>.',

      skillsApplied: ['Javascript'],
    },
  
   
   
  ],
});

export default portfolioKellieDixon;
