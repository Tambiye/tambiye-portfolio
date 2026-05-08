import React, { useEffect } from "react";
import "../App.css";


export default function Portfolio() {

useEffect(() => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  reveals.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <div className="portfolio-container">

      <section id="about" className="about-section">
        
        <div className="about-image reveal reveal-left">
          <img
            src="/images/portfolio-removebg-preview.png"
            alt="Tambiye portrait"
          />
        </div>

        <div className="about-content reveal reveal-right">
          <h1 className="hero-title">
            Hi, I’m <span>Tambiye</span>
          </h1>

          <p className="hero-text">
            Frontend Developer & Content Writer crafting clean,
            responsive interfaces and writing that connects.
          </p>

          <ul className="hero-highlights">
            <li>Responsive UI</li>
            <li>Content writing</li>
            <li>Detail-focused</li>
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section reveal">

        <span className="services-label reveal delay-1">
          Services
        </span>

        <h2 className="services-title reveal delay-2">
          Tambiye's Services
        </h2>

        <div className="services-grid">

          <div
            className="service-card reveal delay-1"
            data-number="01"
          >
            <div>
              <h3>Frontend Development</h3>

              <p>
                I build responsive interfaces with clean structure,
                strong performance, and attention to user experience.
              </p>
            </div>
          </div>

          <div
            className="service-card reveal delay-2"
            data-number="02"
          >
            <div>
              <h3>Content Writing</h3>

              <p>
                I write clear, engaging content for digital products,
                websites, and brands that want stronger communication.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <h2 className="heading-title reveal">
        Tambiye's Projects
      </h2>

      <section className="projects">

        {/* Ribalta */}
        <article className="project reveal delay-1">
          <div className="project-title">01</div>

          <div className="project-meta">
            <h3>Ribalta</h3>

            <p>
              The Beginning ·{" "}
              <a
                href="https://github.com/Tambiye/RIbalta"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </p>
          </div>

          <div className="project-body">
            <p>
              My first real project built with HTML and CSS.
              Messy, but functional.
            </p>

            <p>
              It was the moment I realized I could build
              something from scratch.
            </p>
          </div>
        </article>

        {/* Mama Lucia */}
        <article className="project reveal delay-2">
          <div className="project-title">02</div>

          <div className="project-meta">
            <h3>Mama Lucia</h3>

            <p>
              Raising the Bar ·{" "}
              <a href="#" className="project-link">
                View Project
              </a>
            </p>
          </div>

          <div className="project-body">
            <p>
              A JavaScript math game that pushed me beyond
              static websites.
            </p>

            <p>
              This was where I started thinking more like
              a developer.
            </p>
          </div>
        </article>

        {/* VKU Services */}
        <article className="project reveal delay-3">
          <div className="project-title">03</div>

          <div className="project-meta">
            <h3>VKU Services</h3>

            <p>
              Collaboration ·{" "}
              <a
                href="https://github.com/richaadgigi/vku-services-ltd"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </p>
          </div>

          <div className="project-body">
            <p>
              My first experience working in a shared React
              codebase.
            </p>

            <p>
              I learned Git workflows, teamwork, and scalable
              structure.
            </p>
          </div>
        </article>

       {/* Bliz */}
<article className="project reveal delay-1">
  <div className="project-title">04</div>

  <div className="project-meta">
    <h3>Bliz</h3>

    <p>
      Creative Growth ·{" "}
      <a
        href="https://github.com/Tambiye/Bliz"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </p>
  </div>

  <div className="project-body">
    <p>
      A project that pushed my design confidence
      and experimentation.
    </p>

    <p>
      It taught me to move beyond safe layouts
      and predictable ideas.
    </p>
  </div>
</article>

{/* Ribalta Revisited */}
<article className="project reveal delay-2">
  <div className="project-title">05</div>

  <div className="project-meta">
    <h3>Ribalta Revisited</h3>

    <p>
      Growth in Motion ·{" "}
      <a
        href="https://github.com/Tambiye/Ribalta-main"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </p>
  </div>

  <div className="project-body">
    <p>
      I revisited an old project with stronger structure
      and better thinking.
    </p>

    <p>
      It reflected how much my approach to development
      had evolved.
    </p>
  </div>
</article>

{/* GiveBackNigeria */}
<article className="project reveal delay-3">
  <div className="project-title">06</div>

  <div className="project-meta">
    <h3>GiveBackNigeria</h3>

    <p>
      Becoming a Developer ·{" "}
      <a
        href="https://github.com/Xnyder-HQ/giveback-nigeria"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </p>
  </div>

  <div className="project-body">
    <p>
      This was where everything started feeling intentional.
    </p>

    <p>
      Working with structure and collaboration changed
      how I build products.
    </p>
  </div>
</article>

{/* Xnyder HQ */}
<article className="project reveal delay-1">
  <div className="project-title">07</div>

  <div className="project-meta">
    <h3>Xnyder HQ</h3>

    <p>
      Confidence in Execution ·{" "}
      <a
        href="https://github.com/Xnyder-HQ/xnyderhq-landing"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </p>
  </div>

  <div className="project-body">
    <p>
      A project focused on refinement,
      polish, and clean UI execution.
    </p>

    <p>
      It strengthened my confidence in layout,
      spacing, and visual rhythm.
    </p>
  </div>
</article>

{/* Amyra */}
<article className="project reveal delay-2">
  <div className="project-title">08</div>

  <div className="project-meta">
    <h3>Amyra</h3>

    <p>
      Learning Patience ·{" "}
      <a
        href="https://github.com/Tambiye/amyra"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </p>
  </div>

  <div className="project-body">
    <p>
      A project that taught me adaptability and patience.
    </p>

    <p>
      The direction changed often,
      but I learned how to stay flexible.
    </p>
  </div>
</article>

{/* AlphaProfit */}
<article className="project reveal delay-3">
  <div className="project-title">09</div>

  <div className="project-meta">
    <h3>AlphaProfit</h3>

    <p>
      Controlled Ambition ·{" "}
      <a href="#" className="project-link">
        View Project
      </a>
    </p>
  </div>

  <div className="project-body">
    <p>
      My first serious Next.js project
      with bolder design direction.
    </p>

    <p>
      It taught me how design choices affect
      clarity and usability.
    </p>
  </div>
</article>

{/* Asterix */}
<article className="project reveal delay-4">
  <div className="project-title">10</div>

  <div className="project-meta">
    <h3>Asterix</h3>

    <p>
      Full Ownership ·{" "}
      <a href="#" className="project-link">
        View Project
      </a>
    </p>
  </div>

  <div className="project-body">
    <p>
      My biggest and most complete project so far.
    </p>

    <p>
      It proved I could independently design
      and build at a higher level.
    </p>
  </div>
</article>
        
      </section>



      {/* FOOTER */}
      <footer className="footer reveal">
        © {new Date().getFullYear()} Sonia Jamabo.
        All rights reserved.
      </footer>

    </div>
  );
}