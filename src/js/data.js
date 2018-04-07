const data = {
  home: {
    name: 'home',
    content: `
    <h1>Hi. I'm Olaolu,</h1>
    <p>A 17-year old creative front end developer and designer in <a href="https://www.google.com/maps/place/Lagos/@6.5483768,3.1438711,11z/data=!3m1!4b1!4m5!3m4!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057" target="_blank">Lagos, Nigeria</a>. I'm interested in the web, open source, artificial intelligence, tech, design and music. You can check out my work on <a href="https://github.com/whizkydee" target="_blank">GitHub</a>.</p>
    <a href="/#about" onclick="switchTabTo('about')">about</a>
    `,
    style: null
  },
  about: {
    name: 'about',
    content: `
    <h1>about me</h1>
    <div>lover of - unicorns · purples · donuts</div>
    <p>I'm a 17-year old and a student of the University of Lagos, Nigeria. I live a simple life, I love being optimistic about everything and I smile a lot. I play piano or drums when I'm graced with the chance. I'm an Impostor! And yeah, I'm a July born - July 01.</p>
    <p>As a web developer, I've had 7+ years of experience building websites and applications ranging from simple to very complex ones. I focus on creating blazing fast and minimalistic user-friendly experiences. I've worked with organizations like Pneuma media, MrShopperHQ, Teens Can Code Africa and a bunch in the past to deliver solutions at various points.</p>
    <p>I love to build applications in core <b>JavaScript</b> as it's a very powerful language. I use frameworks like <b>React.js</b>, <b>Vue.js</b> and a bunch.</p>
    `,
    style: null
  },
  projects: {
    name: 'projects',
    content: `
    <h1>projects</h1>
    `,
    style: null
  },
  contact: {
    name: 'contact',
    content: `
    <h1>contact</h1>
    <form action="https://formspree.io/mrolaolu@gmail.com"
      method="POST">
      <input type="text" name="name" id="name" placeholder="Your Name">
      <input type="email" name="_replyto" id="email" placeholder="Email Address">
      <textarea id="contact_message" placeholder="Your Message" name="message" rows="7"></textarea>
      <input type="submit" value="shoot!" id="submit">
    </form>
    `,
    style: `
    [placeholder] { color: var(--placeholder-color); }
    ::placeholder { color: var(--placeholder-color); }
    ::-webkit-input-placeholder { color: var(--placeholder-color); }
    ::-moz-placeholder { color: var(--placeholder-color); }
    :-moz-placeholder { color: var(--placeholder-color); }
    ::-ms-input-placeholder { color: var(--placeholder-color); }
    :-ms-input-placeholder { color: var(--placeholder-color); }
    form,
    form > * {
      margin-bottom: 15px;
      position: relative;
    }
    textarea { resize: none; }
    textarea,
    input:not([type="submit"]) {
      transition: border-color .2s ease;
      border-color: var(--form-base);
      background-color: transparent;
      border-width: 0 0 2px;
      border-style: solid;
      padding: 8px 0px;
      outline: 0 none;
      display: block;
      width: 50vw;
    }
    textarea:focus,
    input:not([type="submit"]):focus {
      border-color: #eeeeee;
    }
    input[type="submit"] {
      background-color: var(--form-base);
      outline: 2px solid transparent;
      border: 2px solid transparent;
      transition: all 1s ease;
      outline-offset: 1px;
      padding: 10px 20px;
      color: #eeffff;
    }
    input[type="submit"]:hover {
      outline-color: rgb(238, 255, 255, .1);
    }
    `
  }
}
