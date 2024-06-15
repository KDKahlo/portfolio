<template>
  <div class="about-me">
    <p class="first-line">Hello! My name is</p>
    <h2 class="second-line" @click="incrementCounter">
      {{ firstName }} {{ lastName }}
    </h2>
    <h1 class="third-line">
      I am a <span class="job-title">{{ jobTitle }}</span>
    </h1>
    <p class="about-me-text">
      Full Stack Developer 🚀 | Multilingual US Citizen living and eligible to work in Germany 🇪🇺 | Blending
      Education and Teach into Education Insights with Tech Solutions 📚 | Embracing New Possiblities of Remote
      or Hybrid Collaboration Worldwide 🌎
    </p>
    <p class="about-me-text">
      Hi there! I'm a former soldier, billing supervisor, teacher, and now a full-stack developer in Berlin.
       My diverse background has shaped me into a versatile team player who thrives on problem-solving. 
       <span class="white-highlight">Teaching abroad</span> fueled my passion for tech, leading me to develop apps like 
       <span class="aqua-highlight">AleYea CraftbeerMe!</span> and 
       <span class="aqua-highlight">Homework Homies</span>.
       <br><br>
       I'll be starting AWS Cloud training in July and am excited about joining a team where I can grow and contribute as a full-stack developer.
    </p>

    <p class="projects-intro">
      <span class="aqua-highlight">Do you want to see my projects? </span>

      <span class="white-highlight"
        >You're already checking out one with this portfolio!</span
      >

      But there's more to explore - keep scrolling down to discover what else
      I've been working on.
    </p>

    <div class="download-cv-button">
      <a :href="cv" target="_blank">
        <p>Download <span class="cv">CV</span></p>
      </a>
    </div>
  </div>
</template>

<script>
import '../assets/main-styles.css';
import '../assets/about-me.css';

import portfolioKellieDixon from '../portfolio-info';

export default {
  data() {
    return {
      firstName: portfolioKellieDixon.firstName,
      lastName:  portfolioKellieDixon.lastName,
      jobTitle:  portfolioKellieDixon.jobTitle,
      cv:  portfolioKellieDixon.cv,
      clickCounter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.clickCounter++;
      if (this.clickCounter === 3) {
        this.$emit('show-admin-access');
      }
    },
  },
};
</script>
