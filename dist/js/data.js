'use strict';

var data = {
  home: {
    name: 'home',
    content: '\n    <h1>Hi. I\'m Olaolu,</h1>\n    <p>A 17-year old creative front end developer and designer in <a href="https://www.google.com/maps/place/Lagos/@6.5483768,3.1438711,11z/data=!3m1!4b1!4m5!3m4!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057" target="_blank">Lagos, Nigeria</a>. I\'m interested in the web, open source, artificial intelligence, tech, design and music. You can check out my work on <a href="https://github.com/whizkydee" target="_blank">GitHub</a>.</p>\n    <a href="/#about" onclick="switchTabTo(\'about\')">about</a>\n    ',
    style: null
  },
  about: {
    name: 'about',
    content: '\n    <h1>about me</h1>\n    <div>lover of - unicorns \xB7 purples \xB7 donuts</div>\n    <p>I\'m a 17-year old and a student of the University of Lagos, Nigeria. I live a simple life, I love being optimistic about everything and smile a lot. I play piano or drums when I\'m graced with the chance. I\'m an Impostor! And yeah, I\'m a July born - July 01.</p>\n    <p>As a web developer, I\'ve had 7+ years of experience building websites and applications ranging from simple to very complex ones. I focus on creating blazing fast and minimalistic user-friendly experiences. I\'ve worked with organizations like Pneuma media, MrShopperHQ, Teens Can Code Africa and a bunch in the past to deliver solutions at various points.</p>\n    <p>I love to build applications in core <b>JavaScript</b> as it\'s a very powerful language. I use frameworks like <b>React.js</b>, <b>Vue.js</b> and a bunch.</p>\n    ',
    style: null
  },
  projects: {
    name: 'projects',
    content: '\n    <h1>projects</h1>\n    '
  },
  contact: {
    name: 'contact',
    content: '\n    <h1>contact</h1>\n    <form action="https://formspree.io/mrolaolu@gmail.com"\n      method="POST">\n      <input type="text" name="name" id="name" placeholder="Your Name">\n      <input type="email" name="_replyto" id="email" placeholder="Email Address">\n      <textarea id="contact_message" placeholder="Your Message" name="message" rows="7"></textarea>\n      <input type="submit" value="shoot!" id="submit">\n    </form>\n    ',
    style: '\n    [placeholder] { color: var(--placeholder-color); }\n    ::placeholder { color: var(--placeholder-color); }\n    ::-webkit-input-placeholder { color: var(--placeholder-color); }\n    ::-moz-placeholder { color: var(--placeholder-color); }\n    :-moz-placeholder { color: var(--placeholder-color); }\n    ::-ms-input-placeholder { color: var(--placeholder-color); }\n    :-ms-input-placeholder { color: var(--placeholder-color); }\n    form,\n    form > * {\n      margin-bottom: 15px;\n      position: relative;\n    }\n    textarea { resize: none; }\n    textarea,\n    input:not([type="submit"]) {\n      transition: border-color .2s ease;\n      border-color: rgba(132, 132, 183, .4);\n      background-color: transparent;\n      border-width: 0 0 2px;\n      border-style: solid;\n      padding: 8px 0px;\n      outline: 0 none;\n      display: block;\n      width: 50vw;\n    }\n    textarea:focus,\n    input:not([type="submit"]):focus {\n      border-color: #eeeeee;\n    }\n    input[type="submit"] {\n      background-color: rgba(132, 132, 183, .4);\n      outline: 2px solid transparent;\n      border: 2px solid transparent;\n      transition: all 1s ease;\n      outline-offset: 1px;\n      padding: 10px 20px;\n      color: #eeffff;\n    }\n    input[type="submit"]:hover {\n      outline-color: rgb(238, 255, 255, .1);\n    }\n    '
  }
};
//# sourceMappingURL=data.js.map
