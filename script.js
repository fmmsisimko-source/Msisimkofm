// Msisimko Media - vanilla JS
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('site-nav');
navToggle?.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Now playing demo text (replace with real metadata fetch if available)
const tracks = ['Nimfahamishe - Episode 12', 'Morning Vibes - Live', 'Business Booster - Guest: Zawadi'];
const nowTrack = document.getElementById('nowTrack');
let idx = 0;
function rotateTrack(){
  if(nowTrack){
    nowTrack.textContent = tracks[idx % tracks.length];
    idx++;
  }
}
rotateTrack();
setInterval(rotateTrack, 6000);

// Simple audio player
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playPause');
const stopBtn = document.getElementById('stopBtn');
const vol = document.getElementById('volume');
const btnPlay = document.getElementById('btnPlay');

function updatePlayLabel(){
  if(!playBtn) return;
  playBtn.textContent = audio?.paused ? 'Play' : 'Pause';
}

playBtn?.addEventListener('click', () => {
  if(!audio) return;
  if(audio.paused){ audio.play().catch(console.warn); } else { audio.pause(); }
  updatePlayLabel();
});

btnPlay?.addEventListener('click', () => {
  document.getElementById('player')?.scrollIntoView({behavior:'smooth'});
  if(audio?.paused){ audio.play().catch(console.warn); updatePlayLabel(); }
});

stopBtn?.addEventListener('click', () => {
  if(!audio) return;
  audio.pause();
  audio.currentTime = 0;
  updatePlayLabel();
});

vol?.addEventListener('input', () => { if(audio) audio.volume = Number(vol.value); });

// Contact form (client-side demo)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const out = Object.fromEntries(data.entries());
  // Simulate success
  formMsg.textContent = 'Asante! Tutawasiliana nawe hivi karibuni.';
  form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
