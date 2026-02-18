    import { useState, useEffect, useRef, type RefObject, type ReactNode } from "react";
    import girl from "../assets/girl.png";
    import bunny from "../assets/bunny.png";
    import lessons from "../assets/lessons.png";
    import nics from "../assets/nics.png";
    import ostricth from "../assets/ostricth.png";
    import pos from "../assets/pos.png";
    import gradpic from "../assets/gradpic.png"
import { TypeAnimation } from "react-type-animation";
import { Search } from "lucide-react";
import { toast } from "react-hot-toast";


    const webProjects = [
    {
        title: "Dating App",
        emoji: "💑",
        bg: "#1a1a2e",
        img: girl,
        link: 'https://drive.google.com/file/d/1OUdA6n98sYmXTMRKUt3t9YEUWTRhJrao/view',
        desc: (
        <>
            This Tinder-inspired dating app lets users swipe, match, and chat. It's built with{" "}
            <strong className="font-semibold">Vue.js</strong>,{" "}
            <strong className="font-semibold">GraphQL</strong>, and{" "}
            <strong className="font-semibold">Ruby on Rails</strong>, supporting real-time messaging
            and a smooth, interactive experience across devices.
        </>
        ),
        tags: ["Vue.js", "GraphQL", "Ruby on Rails", "Real-time Messaging"],
    },
    {
        title: "POS System",
        emoji: "🧾",
        bg: "#e8f4f8",
        img: pos,
        link: 'https://drive.google.com/file/d/1WKNIuKn-KrvPwLdmm91rq3POMO3x6p5b/view?usp=drive_link',
        desc: (
        <>
            This POS system is built with{" "}
            <strong className="font-semibold">Ruby on Rails (MVC)</strong> and{" "}
            <strong className="font-semibold">PostgreSQL</strong>, featuring role-based access for
            admins and customers. Admins can manage products and view reports, while customers can
            browse and place orders — each with a tailored interface.
        </>
        ),
        tags: ["Ruby on Rails", "PostgreSQL", "MVC", "Role-based Access"],
    },
    {
        title: "BeauTech: E-Commerce Gateway",
        emoji: "🛍️",
        bg: "#fff0f5",
        img: nics,
        link: 'https://drive.google.com/file/d/1C_GzQEYDWo9Lo7aIVDgf_ma0H2-l7H8I/view?usp=drive_link',
        desc: (
        <>
            This e-commerce system for the brand <em>Beautella</em> is built with{" "}
            <strong className="font-semibold">Node.js</strong> and a{" "}
            <strong className="font-semibold">MySQL cloud database</strong>, featuring role-based
            access. It uses <strong className="font-semibold">Fabric.js</strong> for product
            customization and <strong className="font-semibold">local storage</strong> to enhance user
            experience.
        </>
        ),
        tags: ["Node.js", "MySQL", "Fabric.js", "E-Commerce"],
    },
    ];

    const gameProjects = [
    {
        title: "Senyas: FSL Learning Game",
        emoji: "🤟",
        bg: "#4a7c59",
        img: lessons,
        link: 'https://drive.google.com/file/d/1BU5J8RBnQs_7evoUBoVLHw864MnyEfZN/view?usp=drive_link',
        desc: (
        <>
            This Filipino Sign Language learning game is built with{" "}
            <strong className="font-semibold">Unity (C#)</strong> and integrates a real-time gesture
            recognition system. It uses{" "}
            <strong className="font-semibold">Google's MediaPipe</strong> for hand landmark extraction,{" "}
            <strong className="font-semibold">Intel's OpenCV</strong> for webcam input, and{" "}
            <strong className="font-semibold">TensorFlow</strong> to train neural networks in{" "}
            <strong className="font-semibold">Python</strong>, enabling accurate sign recognition during
            gameplay.
        </>
        ),
        tags: ["Unity", "C#", "MediaPipe", "TensorFlow", "OpenCV", "Python"],
    },
    {
        title: "Ostrich Odyssey",
        emoji: "🐦",
        bg: "#87ceeb",
        img: ostricth,
        link: 'https://drive.google.com/file/d/1lrlmrnZxwm58ElulsOSIyXdPTY-13Lxa/view?usp=drive_link',
        desc: (
        <>
            This 2D platformer was built in <strong className="font-semibold">Unity (C#)</strong> with
            smooth controls and interactive levels. All assets were{" "}
            <strong className="font-semibold">custom-made</strong> in pixel art, giving it a distinct
            visual style.
        </>
        ),
        tags: ["Unity", "C#", "Pixel Art", "2D Platformer"],
    },
    {
        title: "HopScape Adventures",
        emoji: "🐇",
        bg: "#2d4a7a",
        img: bunny,
        link: 'https://drive.google.com/file/d/11y6a9B7bpUTs8rEzFroMrB1uBBWI4nze/view',
        desc: (
        <>
            This is a small open-world 3D game developed in{" "}
            <strong className="font-semibold">Unity (C#)</strong>, featuring free exploration and
            interactive elements. All 3D assets were custom-made in{" "}
            <strong className="font-semibold">Blender</strong>, giving the game a unique and cohesive
            visual style.
        </>
        ),
        tags: ["Unity", "C#", "Blender", "3D", "Open World"],
    },
    ];

    type Project = {
    title: string;
    emoji: string;
    bg: string;
    desc: ReactNode;
    tags: string[];
    img: string
    link: string
    };

    function useIntersection(ref: RefObject<Element | null>) {
    const [visible, setVisible] = useState<boolean>(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
        ([e]) => {
            if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            }
        },
        { threshold: 0.15 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return visible;
    }

    function AnimatedSection({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const visible = useIntersection(ref as RefObject<Element | null>);
    return (
        <div
        ref={ref}
        style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        }}
        >
        {children}
        </div>
    );
    }

    function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const visible = useIntersection(ref as RefObject<Element | null>);

    return (
        <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center cursor-pointer"
        style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        }}
        onClick={() => {
            window.open(project.link, "_blank", "noopener,noreferrer")
        }}
        >
        {/* Thumbnail */}
        <div
            className="rounded-2xl overflow-hidden shadow-lg aspect-video flex items-center justify-center text-6xl group"
            
        >
            <span className="transition-transform duration-300 group-hover:scale-110">
                <img src={project.img}/>
            </span>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4">
            <h3
            className="text-2xl font-bold text-stone-800"
            style={{
                fontFamily: "'Playfair Display', serif",
                textDecoration: "underline",
                textDecorationColor: "#b5835a",
                textUnderlineOffset: "5px",
            }}
            >
            {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-stone-600">{project.desc}</p>
            <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
                <span
                key={tag}
                className="bg-white border border-stone-200 text-stone-500 text-xs font-medium px-3 py-1 rounded-md"
                >
                {tag}
                </span>
            ))}
            </div>
        </div>
        </div>
    );
    }

    function SectionTitle({ children }: { children: ReactNode }) {
    return (
        <AnimatedSection>
        <div className="text-center mb-16">
            <h2
            className="text-5xl md:text-6xl font-normal tracking-widest uppercase text-stone-800"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
            {children}
            </h2>
            <div
            className="mt-5 mx-auto h-px w-56 opacity-40"
            style={{ background: "linear-gradient(90deg, transparent, #b5835a, transparent)" }}
            />
        </div>
        </AnimatedSection>
    );
    }

    export default function PortfolioMain(): JSX.Element {
    const [scrolled, setScrolled] = useState<boolean>(false);

    const copyToClipboard = async (text) => {
        await navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard ✓");
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#f0ebe3", fontFamily: "'DM Sans', sans-serif", color: "#2c2c2c" }}>

        {/* Google Fonts */}
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

            @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
            }
            .fade-1 { animation: fadeUp 0.8s 0.0s ease both; }
            .fade-2 { animation: fadeUp 0.8s 0.15s ease both; }
            .fade-3 { animation: fadeUp 0.8s 0.30s ease both; }
            .fade-4 { animation: fadeUp 0.8s 0.45s ease both; }
            .fade-5 { animation: fadeUp 0.8s 0.60s ease both; }

            .blob {
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            }
            .nav-btn {
            position: relative;
            padding-bottom: 2px;
            }
            .nav-btn::after {
            content: '';
            position: absolute;
            bottom: -2px; left: 0; right: 0;
            height: 1.5px;
            background: #b5835a;
            transform: scaleX(0);
            transition: transform 0.3s ease;
            transform-origin: left;
            }
            .nav-btn:hover { color: #b5835a; }
            .nav-btn:hover::after { transform: scaleX(1); }

            .pill-link:hover {
            border-color: #b5835a !important;
            transform: translateY(-1px);
            }
        `}</style>

        {/* ── NAVBAR ── */}
        <nav
            className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
            style={{ backgroundColor: "rgba(240,235,227,0.92)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
        >
            {/* Brand pill */}
            <div className="w-[315px] hidden md:flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2 text-sm">
                <Search className="w-4 h-4" />
                <TypeAnimation
                    sequence={[
                        'Web Developer',
                        1500,
                        '',
                        500,
                        'Game Developer',
                        1500,
                        'Web Developer | Game Developer',
                        500,
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={70}
                    className="text-stone-700 font-medium"
                    />
            </div>

            {/* Nav links */}
            <div className="flex gap-8 ml-auto">
            {[
                ["about", "About"],
                ["web", "Web Projects"],
                ["games", "Game Projects"],
            ].map(([id, label]) => (
                <button
                key={id}
                onClick={() => scrollTo(id)}
                className="nav-btn text-sm font-medium text-stone-800 bg-transparent border-0 cursor-pointer transition-colors duration-200"
                >
                {label}
                </button>
            ))}
            </div>
        </nav>

        {/* ── HERO ── */}
        <section
            id="about"
            className="min-h-screen max-w-5xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-32 pb-20"
        >
            {/* Left column */}
            <div className="flex flex-col gap-7 items-center md:items-start text-center md:text-left">
            {/* Name */}
            <div className="leading-none">
                <span
                className="fade-1 block"
                style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(60px, 8vw, 96px)",
                    color: "#b5835a",
                }}
                >
                Diane
                </span>
                <span
                className="fade-2 block"
                style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "clamp(68px, 9vw, 108px)",
                    color: "#1a1a1a",
                }}
                >
                Erika
                </span>
            </div>

            {/* Bio */}
            <p className="fade-3 text-sm leading-loose text-stone-600 max-w-xs">
                Hi, I'm Diane Erika Kong —<br />
                a passionate and versatile developer with hands-on experience in{" "}
                <strong className="font-semibold text-stone-800">Full-Stack Web Development</strong> and{" "}
                <strong className="font-semibold text-stone-800">2D/3D game development in Unity.</strong>
            </p>

            {/* CTA */}
            <a
                href="https://www.linkedin.com/in/diane-erika-kong-6b3bb3345/"
                target="_blank"
                rel="noreferrer"
                className="fade-4 text-sm font-medium text-white px-7 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 no-underline"
                style={{ backgroundColor: "#b5835a" }}
            >
                View LinkedIn
            </a>
            </div>

            {/* Right column */}
            <div className="fade-5 flex flex-col items-center gap-7">
            {/* Avatar blob */}
            <div className="relative">
                <div
                className="absolute blob opacity-10 pointer-events-none"
                style={{
                    inset: "-10px",
                    background: "linear-gradient(135deg, #b5835a 0%, transparent 60%)",
                }}
                />
                {/* <div
                className="blob w-56 h-72 flex items-center justify-center shadow-2xl relative z-10"
                style={{ background: "linear-gradient(135deg, #d4b896, #b5835a)" }}
                > */}
                {/* <span
                    className="text-white"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "64px" }}
                >
                    DE
                </span> */}
                <img src={gradpic} className="rounded-full w-1020 h-100" />
                {/* </div> */}
            </div>

            {/* Contact pills */}
            <div className="flex flex-col gap-3 items-center">
                <button
                    onClick={() => copyToClipboard("+63 908 197 9745")}
                    className="flex items-center gap-2 bg-white border border-stone-200 rounded-full px-5 py-2 text-sm text-stone-700 transition-all duration-200 hover:bg-stone-50 active:scale-95"
                    >
                    <span>📞</span>
                    <span>+63 908 197 9745</span>
                    </button>

                    <button
                    onClick={() =>
                        copyToClipboard("kong.dianeerika@gmail.com")
                    }
                    className="flex items-center gap-2 bg-white border border-stone-200 rounded-full px-5 py-2 text-sm text-stone-700 transition-all duration-200 hover:bg-stone-50 active:scale-95"
                    >
                    <span>✉️</span>
                    <span>kong.dianeerika@gmail.com</span>
                    </button>
            </div>
            </div>
        </section>

        {/* ── WEB PROJECTS ── */}
        <div id="web" style={{ backgroundColor: "rgba(255,255,255,0.35)" }}>
            <section className="max-w-5xl mx-auto px-6 md:px-16 py-24">
            <SectionTitle>Web Projects</SectionTitle>
            <div className="flex flex-col gap-20">
                {webProjects.map((p, i) => (
                <ProjectCard key={p.title} project={p} delay={i * 120} />
                ))}
            </div>
            </section>
        </div>

        {/* ── GAME PROJECTS ── */}
        <section id="games" className="max-w-5xl mx-auto px-6 md:px-16 py-24">
            <SectionTitle>Game Projects</SectionTitle>
            <div className="flex flex-col gap-20">
            {gameProjects.map((p, i) => (
                <ProjectCard key={p.title} project={p} delay={i * 120} />
            ))}
            </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
            className="py-10 text-center text-sm tracking-widest"
            style={{ backgroundColor: "#1a1a1a", color: "#999" }}
        >
            © 2024{" "}
            <span style={{ color: "#b5835a" }}>Diane Erika Kong</span>{" "}
            · Software & Game Developer
        </footer>
        </div>
    );
    }