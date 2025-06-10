window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    let loaderFinished = false;
    let meowCount = 0;
    let meowSound, milestoneSound;
    let isMuted = false;
  
    const muteButton = document.createElement('button');
    muteButton.id = 'mute-button';
    muteButton.style.opacity = '0';

    muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    muteButton.title = 'Toggle Sound';
    muteButton.style.position = 'fixed';
    muteButton.style.bottom = '20px';
    muteButton.style.right = '20px';
    muteButton.style.zIndex = '1000';
    muteButton.style.background = 'rgba(255, 255, 255, 0.2)';
    muteButton.style.backdropFilter = 'blur(5px)';
    muteButton.style.border = '2px solidrgb(255, 0, 128)';
    muteButton.style.borderRadius = '50px';
    muteButton.style.width = '50px';
    muteButton.style.height = '50px';
    muteButton.style.display = 'flex';
    muteButton.style.alignItems = 'center';
    muteButton.style.justifyContent = 'center';
    muteButton.style.cursor = 'pointer';
    muteButton.style.transition = 'all 0.3s ease';
    muteButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(muteButton);
  
    muteButton.addEventListener('mouseenter', () => {
      muteButton.style.background = 'rgba(185, 185, 185, 0.4)';
      muteButton.style.transform = 'scale(1.1)';
    });
    muteButton.addEventListener('mouseleave', () => {
      muteButton.style.background = 'rgba(255, 255, 255, 0.2)';
      muteButton.style.transform = 'scale(1)';
    });
  
    const counter = document.createElement('div');
    counter.id = 'meow-counter';
    counter.textContent = `MEOW COUNTER: ${meowCount}`;
    counter.style.position = 'fixed';
    counter.style.bottom = '20px';
    counter.style.left = '20px';
    counter.style.fontSize = '18px';
    counter.style.fontWeight = 'bold';
    counter.style.color = '#ff69b4';
    counter.style.background = 'rgba(0, 0, 0, 0.2)';
    counter.style.backdropFilter = 'blur(5px)';
    counter.style.padding = '10px 15px';
    counter.style.borderRadius = '20px';
    counter.style.opacity = '0';
    counter.style.transition = 'opacity 0.5s';
    counter.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    counter.style.zIndex = '1000';
    document.body.appendChild(counter);
  
    muteButton.addEventListener('click', () => {
      isMuted = !isMuted;
      if (isMuted) {
        muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        muteButton.style.color = '#ff0000';
      } else {
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        muteButton.style.color = '#ff69b4';
      }
    });
  
    requestAnimationFrame(() => {
      const targetO = document.getElementById("target-o");
      const oRect = targetO.getBoundingClientRect();
      const loaderRect = loader.getBoundingClientRect();
  
      const centerX = oRect.left + oRect.width / 2;
      const centerY = oRect.top + oRect.height / 2;
  
      const originX = ((centerX - loaderRect.left) / loaderRect.width) * 100;
      const originY = ((centerY - loaderRect.top) / loaderRect.height) * 100;
  
      loader.style.transformOrigin = `${originX}% ${originY}%`;
  
      gsap.timeline({ delay: 0.5 })
        .to(loader, {
          scale: 800,
          duration: 1.5,
          ease: "power3.inOut"
        })
        .to(loader, {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
          onComplete: () => {
            loader.style.display = "none";
            loaderFinished = true;
          }
        });
    });
    meowSound = new Audio('assets/sounds/click.mp3');
    milestoneSound = new Audio('assets/sounds/milestone.wav');
    meowSound.volume = 0.3;
    milestoneSound.volume = 0.5;
    
    document.addEventListener('click', (e) => {
        if (!loaderFinished) return;
      
        meowCount++;
        counter.textContent = `MEOW COUNTER: ${meowCount}`;
        counter.style.opacity = '1';
        muteButton.style.opacity = '1';
      
        if (!isMuted) {
          meowSound.currentTime = 0;
          meowSound.play().catch(e => console.log("Sound error:", e));
          
          if (meowCount % 10 === 0) {
            milestoneSound.currentTime = 0;
            milestoneSound.play().catch(e => console.log("Milestone sound error:", e));
          }
        }
  
      const meow = document.createElement('div');
      meow.textContent = 'MEOW!';
      meow.style.position = 'absolute';
      meow.style.left = `${e.pageX}px`;
      meow.style.top = `${e.pageY}px`;
      meow.style.fontSize = '24px';
      meow.style.fontWeight = 'bold';
      meow.style.color = '#ff69b4';
      meow.style.pointerEvents = 'none';
      meow.style.transform = 'translate(-50%, -50%)';
      meow.style.transition = 'opacity 1s, transform 1s';
      meow.style.zIndex = '1000';
      meow.style.textShadow = '0 0 5px rgba(255,105,180,0.7)';
      meow.style.userSelect = 'none';
      document.body.appendChild(meow);
  
      setTimeout(() => {
        meow.style.opacity = '0';
        meow.style.transform = 'translate(-50%, -100px)';
      }, 10);
  
      setTimeout(() => meow.remove(), 1100);
    });
  });
document.addEventListener('DOMContentLoaded', function() {
    const projects = [
      {
        title: "Hub",
        description: "This Website.",
        image: "assets/img/hub.jpg",
        demoUrl: "https://github.com/Ryhox/ryhox.dev",
        links: [
          { url: "https://github.com/Ryhox/ryhox.dev", text: "Source Code", icon: "fa-code", class: "live-demo" }
        ],
        status: "finished"
      },
            {
        title: "Nexorhub",
        description: "! YOU WILL LEAVE MY WEBSITE - Made a Terminal with my babe for School.",
        image: "assets/img/nexor.jpg",
        demoUrl: "https://web.nexorhub.com/terminal",
        links: [
          { url: "https://web.nexorhub.com/terminal", text: "Live Demo", icon: "fa-external-link-alt", class: "live-demo" }
        ],
        status: "finished"
      },
      {
        title: "Flying Cat",
        description: "Throw arround a cat.",
        image: "assets/img/cat.jpg",
        demoUrl: "https://cat.ryhox.dev",
        links: [
          { url: "https://cat.ryhox.dev", text: "Live Demo", icon: "fa-external-link-alt", class: "live-demo" },
          { url: "https://github.com/Ryhox/catthrow", text: "Source Code", icon: "fa-code", class: "source-code" }
        ],
        status: "finished"
      },
      {
        title: "Weather Dashboard",
        description: "Cute Pink Weather Dashboard.",
        image: "assets/img/weather.jpg",
        demoUrl: "https://meteorology.ryhox.dev",
        links: [
          { url: "https://meteorology.ryhox.dev", text: "Live Demo", icon: "fa-external-link-alt", class: "live-demo" },
          { url: "https://github.com/Ryhox/weather.ryhox.dev", text: "Source Code", icon: "fa-code", class: "source-code" }

        ],
        status: "finished"
      },
      {
        title: "Minesweeper",
        description: "! YOU WILL LEAVE MY WEBSITE - Multiplayer and Solo Minesweeper.",
        image: "assets/img/minesweeper.jpg",
        demoUrl: "https://minesweeper.nexorhub.com",
        links: [
          { url: "https://minesweeper.nexorhub.com", text: "Live Demo", icon: "fa-external-link-alt", class: "live-demo" },
          { url: "https://github.com/Ryhox/minesweeper.ryhox.dev", text: "Source Code", icon: "fa-code", class: "source-code" }
        ],
        status: "wip"
      },
      {
        title: "Online Casino",
        description: "You should start Gambling, drink alcohol and take Drugs.",
        image: "assets/img/casino.jpg",
        demoUrl: "https://casino.ryhox.dev",
        links: [
          { url: "https://casino.ryhox.dev", text: "Live Demo", icon: "fa-external-link-alt", class: "live-demo" },
          { url: "https://github.com/Ryhox/casino.ryhox.dev", text: "Source Code", icon: "fa-code", class: "source-code" }
        ],
        status: "wip"
      }
    ];
  
    const container = document.getElementById('projects-container');
    const filterButtons = document.querySelectorAll('.sort-btn');
  
    function renderProjects(filter = 'all') {
      container.innerHTML = '';
  
      const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.status === filter);
  
      filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = `card ${project.status}`;
  
        const statusClass = project.status === 'wip' ? 'wip' : 'finished';
  
        card.innerHTML = `
          <img src="${project.image}" alt="${project.title}" class="card-image">
          <div class="card-content">
            <span class="status ${statusClass}">${project.status === 'wip' ? 'WIP' : 'Finished'}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="links">
              ${project.links.map(link => `
                <a href="${link.url}" target="_blank" class="${link.class || ''}">
                  <i class="fas ${link.icon}"></i> ${link.text}
                </a>
              `).join('')}
            </div>
          </div>
        `;
  
        if (project.demoUrl) {
          card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'A' && !e.target.closest('a')) {
              window.open(project.demoUrl, '_blank');
            }
          });
        }
  
        const sourceCodeLink = card.querySelector('a.source-code');
        const liveDemoLink = card.querySelector('a.live-demo');
  
        if (sourceCodeLink && liveDemoLink) {
          sourceCodeLink.addEventListener('mouseenter', () => {
            liveDemoLink.classList.add('inactive-hover');
          });
          sourceCodeLink.addEventListener('mouseleave', () => {
            liveDemoLink.classList.remove('inactive-hover');
          });
        }
  
        container.appendChild(card);
      });
    }
  
    renderProjects();
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderProjects(button.dataset.filter);
      });
    });
  
    const privacyLink = document.getElementById('privacy-link');
    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
        window.location.href = "/privacy-policy";
    });
  });
  



