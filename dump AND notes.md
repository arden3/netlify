1. check spanish address
2. newspaper?
3. get actual fonts

# Notes:

- Need general testing of everything
- In particular, need more compatibility/responsiveness testing so use different browsers and screen sizes.

- check the spanish address on the homepage and the contact page.
- check the legal notice. I read it reasonably carefully and edited some parts. Important edits that make specific claims are in red. Let's discuss and revise if necessary.
- Do we really have a newspaper? (when pressed on "Get in touch" button below every page). I can replace it with a "Send comment" thing if we don't. If someone uses them, the comments and their name/email can be sent to a designated email address.
- removing residences from the toggle menu - on phones and tablets there's no way to access it now.
- homemakers in about?

111. consider changing hamburger into display & keyframes.

<!-- <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Arsenal:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet"
    /> -->

// ** NEWS SLIDER CODE **

// const newsLeftArrow = document.querySelector('.ne-arrow-left')
// const newsRightArrow = document.querySelector('.ne-arrow-right')

// const newsGallery = document.querySelectorAll('.ne-image')
// // const auto = false
// // const intervalTime = 5000
// // let slideInterval

// // Select tab
// function nextItem () {
// const current = document.querySelector('.current')
// // Remove show class
// current.classList.remove('current')
// // Check for next slide
// if (current.nextElementSibling.classList.contains('ne-image')) {
// // Add show to next sibling
// current.nextElementSibling.classList.add('current')
// } else {
// newsGallery[0].classList.add('current')
// }
// setTimeout(() => current.classList.remove('current'))
// }

// function prevItem () {
// const current = document.querySelector('.current')
// // Remove show class
// current.classList.remove('current')
// // Check for prev slide
// if (current.previousElementSibling) {
// // Add show to prev sibling
// current.previousElementSibling.classList.add('current')
// } else {
// newsGallery[newsGallery.length - 1].classList.add('current')
// }
// setTimeout(() => current.classList.remove('current'))
// }

// // Listen for click
// function arrowListener () {
// newsLeftArrow.addEventListener('click', prevItem)
// newsRightArrow.addEventListener('click', nextItem)
// }

// arrowListener()
