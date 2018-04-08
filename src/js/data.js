const data = {
  home: {
    content: `
    <h1>Hi. I'm Olaolu,</h1>
    <p>A 17-year old creative front end developer and designer in <a href="https://www.google.com/maps/place/Lagos/@6.5483768,3.1438711,11z/data=!3m1!4b1!4m5!3m4!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057" target="_blank">Lagos, Nigeria</a>. I'm interested in the web, open source, artificial intelligence, tech, design and music. You can check out my work on <a href="https://github.com/whizkydee" target="_blank">GitHub</a>.</p>
    <a href="/#about" id="aboutBtn" onclick="aboutLink.click()">about</a>
    `,
    name: 'home'
  },
  about: {
    content: `
    <h1>about me</h1>
    <div>lover of - unicorns · purples · donuts</div>
    <p>I'm a 17-year old and a student of the University of Lagos, Nigeria. I live a simple life, I love being optimistic about everything and I smile a lot. I play piano or drums when I'm graced with the chance. I'm an Impostor! And yeah, I'm a July born - July 01.</p>
    <p>As a web developer, I've had 7+ years of experience building websites and applications ranging from simple to very complex ones. I focus on creating blazing fast and minimalistic user-friendly experiences. I've worked with organizations like Pneuma media, MrShopperHQ, Teens Can Code Africa and a bunch in the past to deliver solutions at various points.</p>
    <p>I love to build applications in core <b>JavaScript</b> as it's a very powerful language. I use frameworks like <b>React.js</b>, <b>Vue.js</b> and a bunch.</p>
    `,
    name: 'about'
  },
  contact: {
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
    name: 'contact'
  }
}
