let nav;
let count = 0;
let emojiCount = 0;
let names = ["ハージク・アリ","حاذق علي"];
let emojis = ["🏴‍☠️","🗿","🌚","👀","🧠","💀","😼","🎀","♟","🦥","🗣"]
let karouThemes = ["./assets/karouTheme1.png", "./assets/karouTheme2.png", "./assets/karouTheme3.png"];
let hazyshareScreenshots = ["./assets/karouTheme1.png"]; // Add hazyshare screenshots if available
let musyScreenshots = ["./assets/karouTheme1.png"]; // Add musy screenshots if available
let he = document.getElementById('emoji');

function Emo(){
  if (he) {
    he.textContent = emojis[emojiCount];
    emojiCount++;

    // reset count if it exceeds the array length
    if (emojiCount >= emojis.length) {
      emojiCount = 0;
    }

    // call again after 1 second
    setTimeout(Emo, 1000);
  }
}

function nameFunc() {
  if (nav) {
    nav.textContent = names[count];
    count++;

    // reset count if it exceeds the array length
    if (count >= names.length) {
      count = 0;
    }

    // call again after 5 seconds
    setTimeout(nameFunc, 5000);
  } else {
    console.log('nav element not found');
  }
}

// Toggle navigation menu
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('hidden');
}

// Close menu when clicking a link
function closeMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.add('hidden');
}

// Wait for DOM to load before starting
document.addEventListener("DOMContentLoaded", function() {
  nav = document.getElementById("nav-bar");
  he = document.getElementById('emoji');
  console.log('DOM loaded, nav element:', nav);
  console.log('Emoji element:', he);
  if (nav) {
    nameFunc();
  }
  if (he) {
    Emo();
  }

  // Add event listener to menu button
  const menuBtn = document.getElementById('menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }

  // Add event listener to close button
  const closeBtn = document.getElementById('close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Add event listeners to nav links to close menu
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Screenshots Modal Functionality
  let currentScreenshotIndex = 0;
  let currentProjectScreenshots = karouThemes;
  const screenshotsModal = document.getElementById('screenshots-modal');
  const screenshotsCloseBtn = document.getElementById('screenshots-close-btn');
  const screenshotDisplay = document.getElementById('screenshot-display');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const screenshotDots = document.querySelectorAll('.screenshot-dot');

  // Handle all screenshot buttons
  const screenshotButtons = document.querySelectorAll('[id^="screenshots-btn-"]');
  screenshotButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const project = btn.getAttribute('data-project');
      
      // Select appropriate screenshot array based on project
      switch(project) {
        case 'karou':
          currentProjectScreenshots = karouThemes;
          break;
        case 'hazyshare':
          currentProjectScreenshots = hazyshareScreenshots;
          break;
        case 'musy':
          currentProjectScreenshots = musyScreenshots;
          break;
        default:
          currentProjectScreenshots = karouThemes;
      }
      
      screenshotsModal.classList.remove('hidden');
      currentScreenshotIndex = 0;
      updateScreenshot();
    });
  });

  if (screenshotsCloseBtn) {
    screenshotsCloseBtn.addEventListener('click', () => {
      screenshotsModal.classList.add('hidden');
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentScreenshotIndex = (currentScreenshotIndex - 1 + currentProjectScreenshots.length) % currentProjectScreenshots.length;
      updateScreenshot();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentScreenshotIndex = (currentScreenshotIndex + 1) % currentProjectScreenshots.length;
      updateScreenshot();
    });
  }

  screenshotDots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentScreenshotIndex = parseInt(dot.getAttribute('data-index'));
      updateScreenshot();
    });
  });

  function updateScreenshot() {
    if (screenshotDisplay && currentProjectScreenshots[currentScreenshotIndex]) {
      screenshotDisplay.src = currentProjectScreenshots[currentScreenshotIndex];
      screenshotDots.forEach((dot, index) => {
        if (index === currentScreenshotIndex) {
          dot.classList.add('bg-highlight');
          dot.classList.remove('bg-muted');
        } else {
          dot.classList.remove('bg-highlight');
          dot.classList.add('bg-muted');
        }
      });
    }
  }

  // Close modal when clicking outside
  screenshotsModal.addEventListener('click', (e) => {
    if (e.target === screenshotsModal) {
      screenshotsModal.classList.add('hidden');
    }
  });

  // Music Button Functionality
  const bgMusic = document.getElementById('bg-music');
  const musicBtn = document.querySelector('.music-btn');
  let playing = false;

  if (musicBtn && bgMusic) {
    // Set volume to 30% (0.3)
    bgMusic.volume = 0.3;
    
    musicBtn.style.position = "fixed";
    musicBtn.style.right = "20px";
    musicBtn.style.bottom = "20px";
    musicBtn.style.zIndex = "10000";

    musicBtn.addEventListener('click', () => {
      if (!playing) {
        bgMusic.play();
        musicBtn.textContent = "⏸";
      } else {
        bgMusic.pause();
        musicBtn.textContent = "▶";
      }
      playing = !playing;
    });
  }
});
















document.addEventListener("DOMContentLoaded", () => {

  // Video Background Setup
  const desktopVideo = document.getElementById("bg-desktop");
  const poster = document.getElementById("video-poster");
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

  let bgElement = poster;

  if (!isMobile && desktopVideo) {
    // Try to load video on desktop
    if (desktopVideo.readyState >= 3) {
      poster.style.display = "none";
      desktopVideo.style.display = "block";
      desktopVideo.play().catch(() => {});
      bgElement = desktopVideo;
    } else {
      // Wait for video readiness
      desktopVideo.addEventListener("canplaythrough", () => {
        poster.style.display = "none";
        desktopVideo.style.display = "block";
        desktopVideo.play().catch(() => {});
        bgElement = desktopVideo;
      }, { once: true });

      // Timeout fallback to poster if video doesn't load
      setTimeout(() => {
        if (desktopVideo.readyState < 3) {
          poster.style.display = "block";
          bgElement = poster;
        }
      }, 3000);
    }
  }

  // Parallax effect for video/poster
  if (bgElement) {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener("mousemove", (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 20;
      targetY = (e.clientY / window.innerHeight - 0.5) * 20;
    });

    const animateParallax = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      bgElement.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.08)`;
      requestAnimationFrame(animateParallax);
    };
    animateParallax();
  }

});