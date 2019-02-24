// INFO: see https://olaolu.me/src/js/data.js for the real sauce.
const data = {
  home: {
    content: `
    <h1>Hi<span>.</span> I'm Olaolu<span>,</span></h1>
    <p>A creative front end developer and designer in <a href="https://www.google.com/maps/place/Lagos/@6.5483768,3.1438711,11z/data=!3m1!4b1!4m5!3m4!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057" target="_blank" rel="noopener">Lagos, Nigeria</a>. I'm interested in the web, open source, artificial intelligence, tech, design and music. You can check out my work on <a href="https://github.com/whizkydee" target="_blank" rel="noopener">GitHub</a>.</p>
    <a href="/#about" onclick="aboutLink.click()">about</a>
    `,
    tabId: 'home'
  },
  about: {
    content: `
    <h1>about me</h1>
    <p>lover of - unicorns · purples · donuts</p>
    <p>I like to call myself a User Experience Strategist and front end developer. I'm currently based in the city of Lagos in Nigeria... living a simple life being optimistic about things and smiling a lot. When I'm not in front of my computer, I like to just relax and listen to some music or play with my iPhone camera.</p>
    <p>Over the past 8 years, I've built products for businesses globally ranging from basic websites to very complex applications with focus on creating blazing fast, elegant and accessible user experiences. I previously led the front-end engineering team at Conectar LLC where we're building one of the biggest React applications in the world. I deliver quality stuff while doing freelance and consulting for a bunch of organizations around the world. I also created the popular <a href="https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme" rel="noopener" target="_blank">Palenight theme</a> for VS Code with hundreds of thousands of downloads.</p>
    <p>I'm passionate about web performance, great user experiences and JavaScript applications, also open for consultation, and remote or contract work. Leave a message!</p>
    `,
    tabId: 'about'
  },
  contact: {
    content: `
    <h1>contact</h1>
    <form action="https://formspree.io/mrolaolu@gmail.com"
      method="POST">
      <input type="hidden" name="_subject" value="Message from olaolu.me!">
      <input title="Name should be at least three characters long, not exceed 70 characters and contain only letters."
        type="text" name="name" placeholder="Your Name" required pattern="[A-Za-z]{3,70}">
      <input type="email" name="_replyto" placeholder="Email Address" required minlength="5" maxlength="254">
      <textarea placeholder="Your Message" name="message" rows="7" required minlength="30"></textarea>
      <input type="submit" value="shoot!" id="submit">
      <span>or <a href="https://github.com/whizkydee/ama" target="_blank" rel="noopener">ask me anything</a> instead.</span>
    </form>
    `,
    tabId: 'contact'
  }
};
