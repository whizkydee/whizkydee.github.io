const data = {
  home: {
    content: `
    <h1>Hi. I'm Olaolu,</h1>
    <p>A 17 year old creative front end developer and designer in <a href="https://www.google.com/maps/place/Lagos/@6.5483768,3.1438711,11z/data=!3m1!4b1!4m5!3m4!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057" target="_blank">Lagos, Nigeria</a>. I'm interested in the web, open source, artificial intelligence, photography, design and music. You can check out my work on <a href="https://github.com/whizkydee" rel="noopener" target="_blank">GitHub</a>.</p>
    <a href="/#about" onclick="aboutLink.click()">about</a>
    `,
    name: 'home'
  },
  about: {
    content: `
    <h1>about me</h1>
    <div>lover of - unicorns · purples · donuts</div>
    <p>I'm Olaolu Olawuyi, a 17 year old, and a student of the University of Lagos, Nigeria. I live a simple life, I love being optimistic about things and I smile a lot. I explore my funtography skils when I'm not busy or in front of my laptop. I'm an impostor, and yeah, I'm a July born - July 01.</p>
    <p>As a web developer, I've had 7+ years of experience building websites and applications ranging from simple to very complex ones. I focus on creating blazing fast and very elegant user experiences. I head tech operations at <a href="http://teenscancode.com.ng" rel="noopener" target="_blank">Teens Can Code Africa</a>, a non-profit organization helping to expand teens' access to technology through problem-solving and coding in Africa. I've worked with organizations like Pneuma media, MrShopperHQ and a bunch in the past to deliver services and solutions. I'm also the creator of the famous <a href="https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme" rel="noopener" target="_blank">Palenight theme</a> for VS Code which currently has 100K+ installs.</p>
    <p>I love to build applications in core <b>JavaScript</b>. I use frameworks like React, Vue, Node.js and a bunch. I'm currently open to ideas and very flexible remote or contract work.</p>
    <p>Love my work? A box of unicorn donuts would be nice 😊. Please <a href="https://bit.ly/payOlaolu" target="_blank" rel="noopener">donate</a>.</p>
    `,
    name: 'about'
  },
  contact: {
    content: `
    <h1>contact</h1>
    <form action="https://formspree.io/mrolaolu@gmail.com"
      method="POST">
      <input type="hidden" name="_subject" value="Message from olaolu.me!">
      <input type="text" name="name" placeholder="Your Name" required minlength="3">
      <input type="email" name="_replyto" placeholder="Email Address" required minlength="5">
      <textarea placeholder="Your Message" name="message" rows="7" required minlength="30"></textarea>
      <input type="submit" value="shoot!" id="submit">
      <span>or <a href="https://github.com/whizkydee/ama" target="_blank" rel="noopener">ask me anything</a> instead.</span>
    </form>
    `,
    name: 'contact'
  }
}
