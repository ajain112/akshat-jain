import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "./css/HeroSequence.css";

gsap.registerPlugin(ScrollTrigger);

const frameModules = import.meta.glob(
  "../assets/hero-scroll/*.{jpg,JPG,jpeg,JPEG,png,PNG}",
  {
   
    query: "?url",
    import: "default",
  }
);

const frameUrls = Object.keys(frameModules).sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true })
);

const frameCount = frameUrls.length;
const scrollLength = 3600;

const storyBeats = [
  {
    progress: 0,
    eyebrow: "Product Designer · Software Developer · AI Builder",
    title: "I build work I’m proud to put my name on",
    description:
      "Every project is a chance to turn intention, taste, and execution into something real.",
  },
  {
    progress: 0.24,
    eyebrow: "01 · From Ambiguity",
    title: "I turn messy ideas into clear product direction",
    description:
      "I break down complex problems, define the user need, and shape the foundation before pixels or code.",
  },
  {
    progress: 0.5,
    eyebrow: "02 · Into Systems",
    title: "I design interfaces with structure, motion, and purpose",
    description:
      "I combine UX strategy, visual systems, and interaction design to make products feel clear, useful, and intentional.",
  },
  {
    progress: 0.74,
    eyebrow: "03 · Shipped Through Code",
    title: "I bring the experience to life in production",
    description:
      "With front-end engineering and AI-assisted workflows, I move ideas from concept to polished, working product.",
  },
];

export default function HeroSequence() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const contentRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const imagesRef = useRef([]);
  const rafRef = useRef(null);
  const activeBeatRef = useRef(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const canvas = canvasRef.current;
      const content = contentRef.current;
      const eyebrow = eyebrowRef.current;
      const title = titleRef.current;
      const description = descriptionRef.current;

      if (!section || !canvas || !content || !eyebrow || !title || !description) return;
      if (frameCount === 0) return;

      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const setCanvasSize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };

      const drawImageCover = (image) => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const canvasRatio = width / height;
        const imageRatio = image.width / image.height;

        let drawWidth;
        let drawHeight;
        let offsetX;
        let offsetY;

        if (imageRatio > canvasRatio) {
          drawHeight = height;
          drawWidth = image.width * (height / image.height);
          offsetX = (width - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = width;
          drawHeight = image.height * (width / image.width);
          offsetX = 0;
          offsetY = (height - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
      };

      const renderFrame = (progress) => {
        const frameIndex = Math.min(
          frameCount - 1,
          Math.max(0, Math.round(progress * (frameCount - 1)))
        );

        const image = imagesRef.current[frameIndex];

        if (!image || !image.complete) return;

        drawImageCover(image);
      };

      const requestFrameRender = (progress) => {
        if (rafRef.current) return;

        rafRef.current = requestAnimationFrame(() => {
          renderFrame(progress);
          rafRef.current = null;
        });
      };

      const setStoryText = (beatIndex, animate = true) => {
        if (beatIndex === activeBeatRef.current && animate) return;

        activeBeatRef.current = beatIndex;
        const beat = storyBeats[beatIndex];

        const textElements = [eyebrow, title, description];

        if (!animate) {
          eyebrow.textContent = beat.eyebrow;
          title.textContent = beat.title;
          description.textContent = beat.description;

          gsap.set(textElements, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          });

          return;
        }

        gsap.killTweensOf(textElements);

        gsap
          .timeline()
          .to(textElements, {
            opacity: 0,
            y: -28,
            filter: "blur(10px)",
            duration: 0.18,
            stagger: 0.025,
            ease: "power2.in",
          })
          .call(() => {
            eyebrow.textContent = beat.eyebrow;
            title.textContent = beat.title;
            description.textContent = beat.description;
          })
          .fromTo(
            textElements,
            {
              opacity: 0,
              y: 34,
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.42,
              stagger: 0.06,
              ease: "power3.out",
            }
          );
      };

      const getBeatIndex = (progress) => {
        let beatIndex = 0;

        for (let i = 0; i < storyBeats.length; i += 1) {
          if (progress >= storyBeats[i].progress) {
            beatIndex = i;
          }
        }

        return beatIndex;
      };

      const preloadFrames = () => {
  frameUrls.forEach(async (key, index) => {
    try {
      const src = await frameModules[key]();

      const image = new Image();
      image.src = src;
      image.decoding = "async";

      image.onload = () => {
        if (index === 0) {
          renderFrame(0);
        }
      };

      image.onerror = () => {
        console.warn(`Missing or broken hero frame: ${src}`);
      };

      imagesRef.current[index] = image;
    } catch (error) {
      console.warn(`Could not load hero frame: ${key}`, error);
    }
  });
};

      setCanvasSize();
      preloadFrames();
      setStoryText(0, false);

      gsap.set(content, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      });

      gsap.set(canvas, {
        scale: 1.035,
        xPercent: -1,
      });

      const mainTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${scrollLength}`,
        pin: true,
        scrub: 0.75,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onUpdate: (self) => {
          const progress = self.progress;

          requestFrameRender(progress);

          const nextBeat = getBeatIndex(progress);
          setStoryText(nextBeat, true);

          gsap.set(canvas, {
            scale: gsap.utils.interpolate(1.035, 1.075, progress),
            xPercent: gsap.utils.interpolate(-1, 1, progress),
          });

          const exitProgress = gsap.utils.clamp(
            0,
            1,
            (progress - 0.86) / 0.14
          );

            gsap.set(content, {
            opacity: 1,
            y: gsap.utils.interpolate(0, -24, progress),
            scale: gsap.utils.interpolate(1, 0.985, progress),
            filter: "blur(0px)",
            });
        },
      });

      const handleResize = () => {
        setCanvasSize();
        renderFrame(mainTrigger.progress);
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);

        mainTrigger.kill();
        gsap.killTweensOf([eyebrow, title, description, content, canvas]);

        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="hero-sequence">
      <canvas ref={canvasRef} className="hero-sequence__canvas" />

      <div ref={contentRef} className="hero-sequence__content">
        <p ref={eyebrowRef} className="hero-sequence__eyebrow">
          Product Designer · Software Developer · AI Builder
        </p>

        <h1 ref={titleRef} className="hero-sequence__title">
          I build work I’m proud to put my name on
        </h1>

        <p ref={descriptionRef} className="hero-sequence__description">
          Every project is a chance to turn intention, taste, and execution into
          something real.
        </p>
      </div>
    </section>
  );
}