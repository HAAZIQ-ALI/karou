# 🌟 Karou.me - Personal Portfolio

[![Made with Tauri](https://img.shields.io/badge/Made%20with-Tauri-24C8DB?style=for-the-badge&logo=tauri)](https://tauri.app/)
[![Built with Tailwind CSS](https://img.shields.io/badge/Built%20with-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)](https://www.rust-lang.org/)

> A modern, responsive personal portfolio website that runs as both a web app and desktop application. Built with Tauri for cross-platform compatibility and featuring a beautiful dark theme inspired by the Catppuccin color palette.

## ✨ Features

- 🎨 **Beautiful Dark Theme** - Modern UI with carefully crafted color palette
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🖥️ **Cross-Platform** - Runs as a native desktop app or in web browsers
- ⚡ **Lightning Fast** - Built with Tauri for optimal performance
- 🌐 **Multilingual Navigation** - Dynamic name switching (Japanese/Arabic)
- 🎯 **Smooth Animations** - Elegant transitions and hover effects
- 📫 **Contact Integration** - Direct email contact functionality

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styles with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Modern JavaScript features
- **Tailwind CSS v4.1.12** - Utility-first CSS framework

### Backend & Desktop
- **Tauri v2** - Cross-platform app development
- **Rust** - High-performance backend
- **Cargo** - Rust package manager

### Fonts & Icons
- **Inter** - Clean, modern typography
- **Poppins** - Friendly, rounded font family
- **IBM Plex Mono** - Monospace for code elements

## 📸 Screenshots

### Home Page - Introduction
<img width="1366" height="768" alt="Karou.me Homepage featuring introduction section with multilingual name display" src="https://github.com/user-attachments/assets/84bdae76-8731-4d9e-8a57-0ef46b10590d" />

### About Section - Skills & Technologies
<img width="1366" height="768" alt="About section showcasing programming languages, frameworks, and development tools" src="https://github.com/user-attachments/assets/f3d444cf-4a46-4721-85a0-074397a66c2d" />

### Projects Showcase
<img width="1366" height="768" alt="Projects section displaying featured works including VS Code theme and music player" src="https://github.com/user-attachments/assets/3db33967-bf60-4098-a150-e78ff2b3d840" />

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Rust](https://rustup.rs/) (latest stable)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HAAZIQ-ALI/karou.git
   cd karou
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development mode**
   ```bash
   npx tauri dev
   ```

   This will start the development server and open the desktop application.

### Building for Production

#### Desktop Applications

```bash
# Build for all platforms
npx tauri build

# Build for specific platform (run on respective OS)
npx tauri build --target x86_64-pc-windows-msvc  # Windows
npx tauri build --target x86_64-apple-darwin     # macOS Intel
npx tauri build --target aarch64-apple-darwin    # macOS Apple Silicon
npx tauri build --target x86_64-unknown-linux-gnu # Linux
```

#### Web Deployment

The `src` directory contains all web assets and can be served by any web server:

```bash
# Using Python's built-in server
cd src
python -m http.server 8000

# Using Node.js serve
npx serve src

# Using any other static file server
```

## 📁 Project Structure

```
karou/
├── src/                    # Frontend source code
│   ├── index.html         # Main HTML file
│   ├── styles.css         # Custom CSS styles
│   ├── main.js           # JavaScript functionality
│   ├── assets/           # Images and icons
│   └── *.jpeg           # Project screenshots
├── src-tauri/            # Tauri backend
│   ├── src/             # Rust source code
│   ├── icons/           # App icons
│   ├── Cargo.toml       # Rust dependencies
│   └── tauri.conf.json  # Tauri configuration
├── package.json          # Node.js dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md           # This file
```

## 🎨 Customization

### Color Scheme
The project uses a custom dark theme based on Catppuccin colors:

```css
--color-primary: #CBA6F7;    /* Purple */
--color-secondary: #89B4FA;  /* Blue */
--color-accent: #F38BA8;     /* Pink */
--color-highlight: #A6E3A1;  /* Green */
--color-background: #1E1E2E; /* Dark background */
```

### Fonts
- **Headings**: Inter (professional, clean)
- **Body**: Poppins (friendly, rounded)
- **Code/Monospace**: IBM Plex Mono

## 🧪 Development

### Available Scripts

```bash
npm run tauri           # Run Tauri commands
npx tauri dev          # Development mode
npx tauri build        # Production build
npx tauri info         # Environment information
```

### Adding New Sections

1. Update `index.html` with your new section
2. Add corresponding styles in `styles.css`
3. Update navigation in `main.js` if needed
4. Test responsiveness across different screen sizes

## 👨‍💻 About the Developer

**Haaziq Ali** - 15-year-old passionate developer

- 🎯 **Focus**: Turning creative ideas into reality
- 💻 **Languages**: C, C++, Python, Rust, Go, JavaScript
- 🛠️ **Frameworks**: React.js, Tauri, Tailwind CSS
- 🔧 **Tools**: Git & GitHub, VS Code, NeoVim
- ♟️ **Hobbies**: Chess, cooking, anime, continuous learning

### Featured Projects
- **[KAROU Theme](https://github.com/HAAZIQ-ALI/KAROU-Theme)** - VS Code theme
- **[MUSY](https://github.com/HAAZIQ-ALI/musy)** - Beautiful web music player
- **[KAROU.ME](https://github.com/HAAZIQ-ALI/karou)** - This portfolio (Tauri & Web app)

## 📞 Contact

- **Email**: [haaziq@karou.me](mailto:haaziq@karou.me)
- **GitHub**: [@HAAZIQ-ALI](https://github.com/HAAZIQ-ALI)
- **Website**: [karou.me](https://karou.me)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Tauri Team** - For the amazing cross-platform framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Catppuccin** - For the beautiful color palette inspiration
- **Google Fonts** - For the typography

---

<div align="center">

**Made with ❤️ by [Haaziq Ali](https://github.com/HAAZIQ-ALI)**

*Handcrafted with `<div>`s and dreams*

</div>
