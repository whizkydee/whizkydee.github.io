"use strict";

var data = {
  home: {
    content: "\n    <h1>Hi. I'm Olaolu,</h1>\n    <p>A 17-year old creative front end developer and designer in <a href=\"https://www.google.com/maps/place/Lagos/@6.5483768,3.1438711,11z/data=!3m1!4b1!4m5!3m4!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057\" target=\"_blank\">Lagos, Nigeria</a>. I'm interested in the web, open source, artificial intelligence, tech, design and music. You can check out my work on <a href=\"https://github.com/whizkydee\" target=\"_blank\">GitHub</a>.</p>\n    <a href=\"#0\" data-navigator onclick=\"function(e) {e.preventDefault()}\">about</a>\n    ",
    style: null
  },
  about: {
    content: "\n    <h1>about me</h1>\n    <div>lover of - unicorns \xB7 purples \xB7 donuts</div>\n    <p>I'm a 17-year old web developer and a student of the University of Lagos focused on creating blazing fast and functional applications.</p>\n    <p>I've had 7+ years of experience building websites and applications ranging from simple to very complex ones. I've worked with organizations like Teens Can Code Africa, Pneuma Media and more to deliver well-crafted software solutions to specific problems at various points.</p>\n    ",
    style: null
  },
  projects: {
    content: "\n    <h1>projects</h1>\n    "
  },
  contact: {
    content: "\n    <h1>contact</h1>\n    <form action=\"https://formspree.io/mrolaolu@gmail.com\"\n      method=\"POST\">\n      <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Your Name\">\n      <input type=\"email\" name=\"_replyto\" id=\"email\" placeholder=\"Email Addresss\">\n      <textarea id=\"contact_message\" placeholder=\"Your Message\" name=\"message\" rows=\"10\" cols=\"40\"></textarea>\n      <input type=\"submit\" value=\"Shoot!\" id=\"submit\">\n    </form>\n    ",
    style: "\n    [placeholder] { color: var(--placeholder-color); }\n    ::placeholder { color: var(--placeholder-color); }\n    ::-webkit-input-placeholder { color: var(--placeholder-color); }\n    ::-moz-placeholder { color: var(--placeholder-color); }\n    :-moz-placeholder { color: var(--placeholder-color); }\n    ::-ms-input-placeholder { color: var(--placeholder-color); }\n    :-ms-input-placeholder { color: var(--placeholder-color); }\n    form,\n    form > * {\n      margin-bottom: 15px;\n      position: relative;\n    }\n    textarea { resize: none; }\n    textarea,\n    input:not([type=\"submit\"]) {\n      transition: border-color .2s ease;\n      background-color: rgba(132, 132, 183, .4);\n      border-color: rgba(132, 132, 183, .4);\n      border-style: solid;\n      border-width: 2px;\n      padding: 8px 10px;\n      outline: 0 none;\n      display: block;\n      width: 50vw;\n    }\n    textarea:focus,\n    input:not([type=\"submit\"]):focus {\n      border-color: #eeeeee;\n    }\n    "
  }
};
//# sourceMappingURL=data.js.map
