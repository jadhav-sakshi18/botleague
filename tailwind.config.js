/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        panel: "#181818",
        panelSoft: "#232323",
        line: "#3a3a3a",
        danger: "#ff4e57",
        gold: "#ffc400",
        electric: "#2117ff"
      },
      fontFamily: {
        display: ["Orbitron", "Rajdhani", "Arial", "sans-serif"],
        body: ["Rajdhani", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(255, 78, 87, 0.25)",
        blueGlow: "0 0 28px rgba(33, 23, 255, 0.65)"
      },
      backgroundImage: {
        arena:
          "linear-gradient(90deg, rgba(0,0,0,.95) 0%, rgba(0,0,0,.68) 34%, rgba(0,0,0,.08) 100%), url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80')"
      }
    }
  },
  plugins: []
};