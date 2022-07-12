<template>
    <section class="side-menu">
        <div class="side-img-box">
            <div class="borders-box"></div>
            <img class='side-img' src="/images/profile.jpg" alt="myself">
        </div>
        <div class="side-nav-box">
            <ul class="side-nav-list">
                <RouterLink  to="/" class='router-link'>
                    <li class="router-list">Home</li>
                </RouterLink>
                 <RouterLink to="about" class="router-link">
                    <li >About</li>
                </RouterLink> 
                <RouterLink to="skill" class="router-link">
                    <li >My skill</li>
                </RouterLink>
                <RouterLink to="contact" class="router-link">
                    <li>Contact</li>
                </RouterLink>
            </ul>
        </div>
        <div class="side-icon-box">
              <div class="side-icon-img">
                    <a href="https://www.linkedin.com/in/marcellopascolini" target="_blank">
                        <img class='icon-img' src="/images/linkedin.png" alt="linkedin"/>
                    </a>
              </div>
              <div class="side-icon-img">
                    <a href="https://github.com/marcello-pascolini" target="_blank">
                        <img class='icon-img' src="/images/github.png" alt="github"/>
                    </a>
              </div>
              <div class="side-icon-img">
                    <a download="MarcelloPascoliniCV.pdf" href="/documents/">
                        <img class='icon-img' src="/images/cv.png" alt="curriculum"/>
                    </a>    
              </div>
        </div> 
    </section>
</template>


