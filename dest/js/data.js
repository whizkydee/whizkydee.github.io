'use strict';

// INFO: see https://olaolu.me/src/js/data.js for the real sauce.
var data = {
  home: {
    content: '\n    <h1>Hi! I\'m Olaolu,</h1>\n    <p>A creative front end developer and designer in <a href="https://www.google.com/maps/place/Lagos/@6.5483768,3.1438711,11z/data=!3m1!4b1!4m5!3m4!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057" target="_blank" rel="noopener">Lagos, Nigeria</a>. I\'m interested in the web, open source, artificial intelligence, tech, design and music. You can check out my work on <a href="https://github.com/whizkydee" target="_blank" rel="noopener">GitHub</a>.</p>\n    <a href="/#about" onclick="aboutLink.click()">about</a>\n    ',
    tabId: 'home'
  },
  about: {
    content: '\n    <h1>about me</h1>\n    <p>lover of - unicorns \xB7 purples \xB7 donuts</p>\n    <p>I\'m Olaolu Olawuyi, a creative currently based in Lagos, Nigeria. I live a simple life being optimistic about things and smiling most of the time. I also like to explore my (what I call) "funtography" skills when I\'m not in front of my computer.</p>\n    <p>Over the past 7 years, I\'ve built applications and products ranging from basic to very complex ones with focus on creating blazing fast and elegant user experiences. I previously led the front-end engineering team at Conectar LLC where we\'re building one of the biggest React applications in the world and I\'m a Technical Talent Partner at <a href="http://teenscancode.com.ng" rel="noopener" target="_blank">Teens Can Code Africa</a>, a non-profit org helping to expand teens\' access to technology through problem-solving and coding in Africa, and I\'ve worked with several startups and organizations around the world to deliver quality stuff. I also created the <a href="https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme" rel="noopener" target="_blank">Palenight theme</a> for VS Code with hundreds of thousands of downloads.</p>\n    <p>I\'m passionate about web performance and JavaScript applications. Open for consultation, ideas and very flexible remote or contract work.</p>\n    <p>Love my work? A box of unicorn donuts would be nice \uD83D\uDE0A. Hey! You might want to <a href="https://bit.ly/payOlaolu" target="_blank" rel="noopener">donate</a>.</p>\n    ',
    tabId: 'about'
  },
  contact: {
    content: '\n    <h1>contact</h1>\n    <form action="https://formspree.io/mrolaolu@gmail.com"\n      method="POST">\n      <input type="hidden" name="_subject" value="Message from olaolu.me!">\n      <input title="Name should be at least three characters long, not exceed 70 characters and contain only letters."\n        type="text" name="name" placeholder="Your Name" required pattern="[A-Za-z]{3,70}">\n      <input type="email" name="_replyto" placeholder="Email Address" required minlength="5" maxlength="254">\n      <textarea placeholder="Your Message" name="message" rows="7" required minlength="30"></textarea>\n      <input type="submit" value="shoot!" id="submit">\n      <span>or <a href="https://github.com/whizkydee/ama" target="_blank" rel="noopener">ask me anything</a> instead.</span>\n    </form>\n    ',
    tabId: 'contact'
  }
};
//# sourceMappingURL=data.js.map
