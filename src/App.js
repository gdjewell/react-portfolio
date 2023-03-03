import { useState, useCallback } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/header/NavBar";
import { Footer } from "./components/Footer/footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./styles.css";

function App() {
  const [page, setPage] = useState("Home");

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <div>
        <Particles
          id="particleId"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: true,
            },

            particles: {
              number: {
                value: 150,
                limit: 200,
                density: {
                  enable: false,
                  value_area: 200,
                },
              },
              color: {
                value: "random",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "random",
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: true,
                  speed: 4,
                  opacity_min: 1,
                  sync: false,
                },
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: true,
                  speed: 5,
                  size_min: 1,
                  size_max: 2,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 4,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 350,
                  rotateY: 700,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  lineLinked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 10,
                  duration: 2,
                  opacity: 1,
                  speed: 4,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },

            retina_detect: true,
            fps_limit: 60,
          }}
        />
      </div>
      <header>
        <NavBar setPage={setPage} />
      </header>
      <main>
        {page === "Home" && <Home />}
        {page === "Projects" && <Projects />}
        {page === "Resume" && <Resume />}
        {page === "Contact" && <Contact />}
      </main>

      <Footer />
    </>
  );
}

export default App;
