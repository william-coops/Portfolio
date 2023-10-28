
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     const square = entry.target.querySelector('.square');

//     if (entry.isIntersecting) {
//       square.classList.add('square-animation');
// 	  return; // if we added the class, exit the function
//     }

//     // We're not intersecting, so remove the class!
//     square.classList.remove('square-animation');
//   });
// });

// observer.observe(document.querySelector('.square-wrapper'));

// const animatedText = document.getElementById('logo');
      // const triggerDiv = document.getElementById('trigger_logo');
      // const blankText = "";
      // const logotext = "William Cooper"
  
      // function isElementInViewport(element) {
      //     const rect = element.getBoundingClientRect();
      //     return (
      //         rect.top >= 0 &&
      //         rect.left >= 0 &&
      //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      //     );
      // }
  
      // function animateTextIfOutOfView() {
      //     if (!isElementInViewport(triggerDiv)) {
      //         // animatedText.style.animationPlayState = 'running';
      //         animatedText.style.animation = "textAnimation 0.5s"

      //         animatedText.textContent = logotext;
      //     } else {
      //         // animatedText.style.animationPlayState = 'running';
      //         // animatedText.textContent = logotext;
      //         animatedText.style.animation ="textAnimation_reverse 1s"
      //         animatedText.textContent = blankText;
      //     }
      // }
  
      // // Initial check and set the animation state
      // animateTextIfOutOfView();
  
      // // Listen for scroll events to check the div's visibility
      // window.addEventListener('scroll', animateTextIfOutOfView);


      // Function to toggle the dropdown menu
      function toggleDropdown(shouldShow) {
        if (shouldShow) {
            $(".dropbtn").show();
            $(".nav-sections").hide();
        } else {
            $(".dropbtn").hide();
            $(".nav-sections").show();
        }
    }

    // Listen for window resize events
    $(window).resize(function () {
        // Check the window width
        if ($(window).width() <= 768) {
            // If the window width is less than or equal to 768 pixels, show the dropdown
            toggleDropdown(true);
        } else {
            // If the window width is larger than 768 pixels, hide the dropdown and show the regular nav list
            toggleDropdown(false);
        }
    });

    // Initial check when the page loads
    $(document).ready(function () {
        if ($(window).width() <= 768) {
            toggleDropdown(true);
        } else {
            toggleDropdown(false);
        }
    });





      document.addEventListener("DOMContentLoaded", function () {
      const stickyText = document.querySelector(".trigger_logo");
      const bruh = document.querySelector(".bruh")
      const text_an = document.getElementsByClassName("trigger_logo")
      const triggerLogoPlaceholder = document.querySelector('.trigger_logo-placeholder');
      // const name_span = document.getElementById("name_span")
      
    
      window.addEventListener("scroll", function () {
        if (window.scrollY+70>= bruh.offsetTop) {
            // stickyText.classList.add('welcome-section.animation')
            // triggerLogoPlaceholder.style.visibility = 'visible';
            triggerLogoPlaceholder.style.display = 'block';
            triggerLogoPlaceholder.style.height = stickyText.offsetHeight + 'px';
            //triggerLogoPlaceholder.style.height = stickyText.offsetWidth + 'px';
            stickyText.style.position = "fixed";
            stickyText.style.top = "0";
            // text_an.classList.add('welcome-section.animation');
            stickyText.classList.add("h1_gradient")
        } else {
            triggerLogoPlaceholder.style.visibility = 'hidden';
            // triggerLogoPlaceholder.style.display = 'none';
            triggerLogoPlaceholder.style.height = '0';

            // stickyText.classList.remove('welcome-section.animation')
            stickyText.style.position = "sticky";
            stickyText.classList.remove("h1_gradient")
            // name_span.style.animation = "slide_1 1s 1 linear reverse both"
            // name_span.style.animation = "slide-up 2s normal reverse"

        }

        // if (window.scrollY >= originalPosition) {
        //     stickyText.style.top = window.scrollY - originalPosition + "px";
        // } else {
        //     stickyText.style.top = "0";
        // }
    });
});

// $(document).ready(function() {
//     const stickyText = $(".trigger_logo");
//     let isSticky = false;
    
//     $(window).scroll(function() {
//         if ($(window).scrollTop() >= stickyText.offset().top) {
//             if (!isSticky) {
//                 stickyText.css({
//                     position: "fixed",
//                     top: 0,
//                 });
//                 isSticky = true;
//             }
//         } else {
//             if (isSticky) {
//                 stickyText.css({
//                     position: "sticky",
//                     top: "auto",
//                 });
//                 isSticky = false;
//             }
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const stickyText = document.querySelector(".sticky-text");
//     let originalPosition = stickyText.getBoundingClientRect().top;

//     window.addEventListener("scroll", function () {
//         if (window.scrollY >= originalPosition) {
//             if (window.scrollY + stickyText.clientHeight >= originalPosition + stickyText.clientHeight) {
//                 stickyText.style.top = window.scrollY - originalPosition - stickyText.clientHeight + "px";
//             } else {
//                 stickyText.style.top = "0";
//             }
//         } else {
//             stickyText.style.top = "0";
//         }
//     });
// });