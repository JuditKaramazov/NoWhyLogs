const socialIcons = {
  CodePen: `<svg
    xmlns="http://www.w3.org/2000/svg" 
    class="icon-phosphor"
    stroke-linecap="round"
    stroke-linejoin="round" 
    viewBox="0 0 256 256">
    <line x1="232" y1="96" x2="232" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <line x1="24" y1="96" x2="24" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <line x1="128" y1="40" x2="128" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <line x1="128" y1="152" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <polygon points="24 160 128 104 232 160 128 216 24 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <polygon points="24 96 128 40 232 96 128 152 24 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  </svg>`,
  Github: `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    class="icon-phosphor"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 256 256">
    <path d="M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <path d="M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <path d="M104,208H72a32,32,0,0,1-32-32A32,32,0,0,0,8,144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  </svg>`,
  Instagram: `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    class="icon-phosphor"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 256 256">
    <circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="24"/>
    <rect x="32" y="32" width="192" height="192" rx="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <circle cx="180" cy="76" r="12"/>
  </svg>`,
  LinkedIn: `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    class="icon-phosphor"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 256 256">
    <rect x="32" y="32" width="192" height="192" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <circle cx="88" cy="84" r="12"/>
  </svg>`,
  Mail: `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    class="icon-phosphor"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 256 256">
    <line x1="96" y1="152" x2="56" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <polyline points="160 144 160 24 192 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <path d="M232,176V116a52,52,0,0,0-52-52H76a52,52,0,0,1,52,52v68h96A8,8,0,0,0,232,176Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <path d="M128,224V184H32a8,8,0,0,1-8-8V116A52,52,0,0,1,76,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  </svg>`,
  Mastodon: `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    class="icon-phosphor"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 256 256">
    <path d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <path d="M128,136V104a24,24,0,0,0-48,0v32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <path d="M176,136V104a24,24,0,0,0-48,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  </svg>`,
  Reddit: `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    class="icon-phosphor"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 256 256">
    <circle cx="184" cy="32" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <polyline points="128 72 136 24 168.29 28.97" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <path d="M59.41,89.88C77.72,78.75,101.72,72,128,72s50.28,6.75,68.59,17.88h0a24,24,0,1,1,31.62,34.79h0A51.6,51.6,0,0,1,232,144c0,39.76-46.56,72-104,72S24,183.76,24,144a51.6,51.6,0,0,1,3.79-19.33h0A24,24,0,1,1,59.41,89.88Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <circle cx="88" cy="128" r="16"/><circle cx="168" cy="128" r="16"/><path d="M160,176a68,68,0,0,1-64,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  </svg>`,
  Steam: `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    class="icon-phosphor"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 256 256">
    <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <circle cx="156" cy="108" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <circle cx="100" cy="164" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <line x1="84.57" y1="151.28" x2="134.39" y2="90.19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <line x1="112.72" y1="179.43" x2="173.81" y2="129.61" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <line x1="85.86" y1="149.86" x2="36.11" y2="100.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  </svg>`,
  Twitter: `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    class="icon-phosphor"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 256 256">
    <polygon points="48 40 96 40 208 216 160 216 48 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <line x1="113.88" y1="143.53" x2="48" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
    <line x1="208" y1="40" x2="142.12" y2="112.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  </svg>`,
};

export default socialIcons;
