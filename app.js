

const navSlide = () => {
    const hamburger = document.getElementById('hamburger')
                nav = document.querySelector('nav')
                close = document.getElementById('close')
                navLinks = document.querySelectorAll('nav a');
                navLinkContent = document.querySelectorAll('nav a li');


          hamburger.addEventListener('click', () => {
              navLinkContent.forEach((link, index) => {
                link.style.animation = `navLinkFade 0.35s ease forwards ${index / 8 + 0.25}s`;
            })
            nav.classList.add('mobile-menu');

            
            
          })

          close.addEventListener('click', () => {
              nav.classList.remove('mobile-menu');
              navLinkContent.forEach(link => {
                  link.style.animation = '';
              })
          })

          navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    nav.classList.remove('mobile-menu');
                    navLinkContent.forEach(link => {
                        link.style.animation = '';
                    })
                })
          });

          window.addEventListener('click', (e) => {
                if(nav.classList.contains('mobile-menu') && e.target != nav && e.target != hamburger){
                    nav.classList.remove('mobile-menu');
                    navLinkContent.forEach(link => {
                        link.style.animation = '';
                    })
                }
          });



          $(document).ready(function(){
            var view = $('#view')
                projects = $('#projects')
                skills = $('#skills')
                experience = $('#experience')
                contact = $('#contact');
    

            view.click(function(e){
                console.log(1);
                e.preventDefault();
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top -45
                }, 1000)
            })
            projects.click(function(e){
                e.preventDefault();
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top -45
                }, 1000)
            })
            skills.click(function(e){
                e.preventDefault();
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top -45
                }, 1000)
            })
            experience.click(function(e){
                e.preventDefault();
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top -45
                }, 1000)
            })
            contact.click(function(e){
                e.preventDefault();
                $('body,html').animate({
                    scrollTop: $(this.hash).offset().top -45
                }, 1000)
            })
          })
          
}

navSlide();