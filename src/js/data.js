const data = {
  home: {
    content: `
    <h1>Hi. I'm Olaolu,</h1>
    <p>A 17-year old creative front end developer and designer in <a href="https://www.google.com/maps/place/Lagos/@6.5483768,3.1438711,11z/data=!3m1!4b1!4m5!3m4!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!8m2!3d6.5243793!4d3.3792057" target="_blank">Lagos, Nigeria</a>. I'm interested in the web, open source, artificial intelligence, tech, design and music. You can check out my work on <a href="https://github.com/whizkydee" target="_blank">GitHub</a>.</p>
    <a href="#0" data-navigator onclick="function(e) {e.preventDefault()}">about</a>
    `,
    style: null
  },
  about: {
    content: `
    <h1>about me</h1>
    <div>lover of - unicorns · purples · donuts</div>
    <p>I'm a 17-year old web developer and a student of the University of Lagos focused on creating blazing fast and functional applications.</p>
    <p>I've had 7+ years of experience building websites and applications ranging from simple to very complex ones. I've worked with organizations like Teens Can Code Africa, Pneuma Media and more to deliver well-crafted software solutions to specific problems at various points.</p>
    `,
    style: null
  },
  projects: {
    content: `
    <h1>projects</h1>
    `
  },
  contact: {
    content: `
    <h1>contact</h1>
    <form action="https://formspree.io/mrolaolu@gmail.com"
      method="POST">
      <input type="text" name="name" id="name" placeholder="Your Name">
      <input type="email" name="_replyto" id="email" placeholder="Email Addresss">
      <textarea id="contact_message" placeholder="Your Message" name="message" rows="10" cols="40"></textarea>
      <input type="submit" value="Shoot!" id="submit">
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
      background-color: rgba(132, 132, 183, .4);
      border-color: rgba(132, 132, 183, .4);
      border-style: solid;
      border-width: 2px;
      padding: 8px 10px;
      outline: 0 none;
      display: block;
      width: 50vw;
    }
    textarea:focus,
    input:not([type="submit"]):focus {
      border-color: #eeeeee;
    }
    `
  }
}
