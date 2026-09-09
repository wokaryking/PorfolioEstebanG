import { useState } from "react";
import { Play, Globe, Box, Newspaper } from "lucide-react";
import { ProjectModal, type Project } from "./ProjectModal";
import laCocinaImg from "../../imports/la_cosina_de_jeremy.png";
import pokemonImg from "../../imports/web-pokemon.png";
import radioImg from "../../imports/3d_radio.png";
import dragonImg from "../../imports/3d_dragon.png";
import simondiceImg from "../../imports/simondiceportada.png";
import gamezoneImg from "../../imports/gamezone.png";
import pitzzahutImg from "../../imports/pitzzahutportada.png"
import YciergImg from "../../imports/Yciergportda.png"
import AviciiImg from "../../imports/aviciiportada.png"
import microsoftImg from "../../imports/Microsoftportada.png"
import yamahaImg from "../../imports/Yamahaportada.png"


/* ── Project data ── */
const videoProjects: Project[] = [
  {
    id: "v1",
    title: "Ycierg",
    category: "Video Editing",
    type: "video",
    theme: "Fashion — Campaña de lanzamiento",
    shortDescription: "Anuncio publicitario 3D para @yciergoficial, desarrollado desde el animatic hasta el render final con modelado, animación y texturizado de un ring.",
    longDescription: "Creamos un anuncio publicitario para la marca @yciergoficial, desarrollando una pieza audiovisual 3D centrada en la presentación de un ring. El proyecto abarcó todo el proceso de producción: creación del animatic, modelado del producto, animación, texturizado y renderizado final.\n\nPara conseguir el acabado visual de la pieza utilizamos Autodesk Maya para el modelado, la animación y el renderizado, Substance Painter para el texturizado y Adobe Premiere Pro para la edición y el montaje final.\n\nComo parte de la entrega se prepararon el video renderizado, el animatic, una vista previa del proyecto y un video explicativo del proceso de trabajo.\n\n2025",
    technologies: ["Maya", "Substance Painter", "After Effects"],
    mediaKind: "video",
    mediaPoster: YciergImg,/*imagen que se presenta  */
    mediaUrl: "/videos/Ycierg.mp4", /*archivo local en public/videos*/
  },
  {
    id: "v2",
    title: "Avicii",
    category: "Video Editing",
    type: "video",
    theme: "Diseño 3D — Rediseño de empaque musical",
    shortDescription: "Rediseño 3D del empaque del álbum TIM de Avicii, realizado junto a @camilzpj desde el boceto y modelado hasta el render y la edición audiovisual.",
    longDescription: "Creación del rediseño de un nuevo empaque para el álbum TIM de Avicii, desarrollado en colaboración con @camilzpj. El proyecto explora una nueva propuesta visual para la presentación física del álbum, combinando diseño gráfico, modelado 3D, texturizado y producción audiovisual.\n\nProceso: Rediseño y boceto en Adobe Photoshop; modelado y UV en Autodesk Maya; texturizado en Adobe Substance Painter; animación y render en Maya; y edición de video en Adobe After Effects.",
    technologies: ["Maya", "Adobe Photoshop", "Substance Painter", "After Effects"],
    mediaKind: "video",
    mediaPoster: AviciiImg,
    mediaUrl: "/videos/Avicii.mp4",
  },
  {
    id: "v3",
    title: "Pitzza Hut",
    category: "Video Editing",
    type: "video",
    theme: "Publicidad — Contenido para redes sociales",
    shortDescription: "Anuncio publicitario para Pizza Hut, creado con composición gráfica en Photoshop y edición de video en After Effects.",
    longDescription: "Creación de un anuncio publicitario para Pizza Hut, desarrollado para comunicar la identidad de la marca de forma clara, dinámica y atractiva en redes sociales. La pieza combina composición gráfica, edición de video y motion graphics para construir una propuesta visual alineada con la comunicación de la marca.\n\nProceso: La composición visual fue realizada en Adobe Photoshop y la edición de video, animación y montaje final se desarrollaron en Adobe After Effects.\n\nMarca: Pizza Hut — @pizzahutrd\nHashtag: #pitzzahut\n\n2026",
    technologies: ["Adobe Photoshop", "Adobe After Effects"],
    mediaKind: "video",
    mediaPoster: pitzzahutImg,
    mediaUrl: "/videos/pitzzahut.mp4",
  },
  {
    id: "v4",
    title: "Microsoft",
    category: "Video Editing",
    type: "video",
    theme: "Corporativo — Video publicitario",
    shortDescription: "Video publicitario para Microsoft, creado para comunicar la identidad y propuesta de valor de la marca de forma clara, dinámica y profesional.",
    longDescription: "Creación de un video publicitario para Microsoft, diseñado para presentar la marca y conectar su mensaje con la audiencia a través de una narrativa audiovisual moderna. La pieza combina una edición dinámica, selección precisa de tomas, ritmo visual y una estructura pensada para reforzar la comunicación corporativa.\n\nEl proceso de edición y montaje fue realizado en Adobe Premiere Pro, cuidando la continuidad, la sincronización audiovisual y el acabado final de la pieza.",
    technologies: ["Premiere Pro"],
    mediaKind: "video",
    mediaPoster: microsoftImg,
    mediaUrl: "/videos/Microsoft.mp4",
  },
  {
    id: "v5",
    title: "Yamaha",
    category: "Video Editing",
    type: "video",
    theme: "Música indie — Dirección creativa",
    shortDescription: "Video musical creativo con transiciones sincronizadas, efectos visuales y color grading para artista independiente.",
    longDescription: "Dirección y edición completa de un video musical para artista indie. El trabajo incluyó selección de tomas, sincronización con la música, aplicación de efectos visuales creativos y color grading expresivo que refuerza la narrativa de la canción.",
    technologies: ["Premiere Pro", "After Effects"],
    mediaKind: "youtube",
    mediaPoster: yamahaImg,
    mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  /* {
    id: "v6",
    title: "Documentary Short",
    category: "Video Editing",
    type: "video",
    theme: "Documental — Comunidad local",
    shortDescription: "Cortometraje documental galardonado sobre un proyecto comunitario local, con narración y score original.",
    longDescription: "Documental corto de 8 minutos que retrata la historia de un proyecto comunitario de impacto social. Incluye entrevistas, imágenes de archivo, narración en off y un score musical original. Premiado en festival de cine documental regional.",
    technologies: ["Premiere Pro", "Audition", "DaVinci Resolve"],
    mediaKind: "youtube",
    mediaPoster: laCocinaImg,
    mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  }, */
];

const webProjects: Project[] = [
  {
    id: "w1",
    title: "La Cosina de Jeremy",
    category: "Web Design",
    type: "web",
    theme: "Gastronomía — Sitio web y marca",
    shortDescription: "Rediseño completo del sitio de un restaurante local con menú interactivo, reservas online y sistema de pedidos.",
    longDescription: "Diseño y desarrollo de sitio web para restaurante local. El proyecto incluyó diseño de la experiencia de usuario, diseño visual en Figma, desarrollo frontend con React y Tailwind, sistema de reservas integrado y menú digital interactivo.\n\nQué buscamos: Modernizar la presencia digital del restaurante y aumentar las reservas online.\n\nQué logramos: Incremento del 40% en reservas online en el primer mes post-lanzamiento.",
    technologies: ["HTML", "CSS"],
    mediaKind: "web-preview",
    mediaUrl: laCocinaImg,
    mediaPoster: laCocinaImg,
    websiteUrl: "https://la-cosina-de-jeremy.netlify.app/",
  },
  {
    id: "w2",
    title: "Mi Pokédex",
    category: "Web Design",
    type: "web",
    theme: "Gaming — Aplicación web interactiva",
    shortDescription: "Pokédex interactiva con datos en tiempo real de la PokéAPI, búsqueda, filtros por tipo y vista detallada de cada Pokémon.",
    longDescription: "Aplicación web que consume la PokéAPI para mostrar información completa de cada Pokémon. Incluye búsqueda en tiempo real, filtrado por tipo, vista de detalle con estadísticas, movimientos y evoluciones.\n\nQué buscamos: Demostrar consumo de APIs REST externas, manejo de estado y diseño de interfaces interactivas.\n\nQué logramos: Una app funcional, responsiva y con más de 1000 Pokémon disponibles para explorar.",
    technologies: ["HTML", "CSS"],
    mediaKind: "web-preview",
    mediaUrl: pokemonImg,
    mediaPoster: pokemonImg,
    websiteUrl: "https://mi-pokedex-pokemon.netlify.app/",
  },
  {
    id: "w3",
    title: "Simón Dice!",
    category: "Web Design",
    type: "web",
    theme: "Moda — Tienda online",
    shortDescription: "Diseño UX/UI completo para plataforma de e-commerce de moda con más de 200 pantallas y design system.",
    longDescription: "Proyecto de diseño de experiencia de usuario para e-commerce de moda premium. El trabajo incluyó investigación de usuarios, arquitectura de la información, diseño de flujos de compra, sistema de componentes y prototipo interactivo de alta fidelidad.",
    technologies: ["Html", "Css", "JavaScript"],
    mediaKind: "web-preview",
    mediaUrl: simondiceImg,
    mediaPoster: simondiceImg,
    websiteUrl: "https://sombrero-simon-dice.netlify.app/",
  },
  {
    id: "w4",
    title: "GameZone",
    category: "Web Design",
    type: "web",
    theme: "B2B — Plataforma analítica",
    shortDescription: "UI de dashboard complejo para producto SaaS B2B con gestión de analíticas, reportes y colaboración en equipo.",
    longDescription: "Diseño de interfaz para plataforma SaaS de analítica de negocio. Incluye múltiples tipos de gráficos, tablas de datos, panel de administración de usuarios, sistema de notificaciones y modo oscuro. Todo documentado en un design system completo.",
    technologies: ["Html", "Csss", "Js"],
    mediaKind: "web-preview",
    mediaUrl: gamezoneImg,
    mediaPoster: gamezoneImg,
    websiteUrl: "https://game-zone-player.netlify.app/",
  },
  {
    id: "w5",
    title: "Portfolio Template",
    category: "Web Design",
    type: "web",
    theme: "Diseño — Template comercial",
    shortDescription: "Template de portafolio premium con modo oscuro y claro, 6 variantes de homepage.",
    longDescription: "Template de portafolio vendido en marketplaces de diseño. Incluye 6 variantes de homepage, modo oscuro y claro, componentes reutilizables y documentación de uso. Más de 200 ventas en el primer mes.",
    technologies: ["Figma", "Webflow"],
    mediaKind: "web-preview",
    mediaUrl: "",
    websiteUrl: "#",
  },
  {
    id: "w6",
    title: "Landing Page Kit",
    category: "Web Design",
    type: "web",
    theme: "UI Kit — Componentes",
    shortDescription: "Kit de landing page con 40+ secciones totalmente responsive listas para usar en Figma.",
    longDescription: "Colección de más de 40 secciones de landing page diseñadas en Figma. Incluye heroes, features, pricing, testimonials, FAQs, CTAs y footers. Todo con auto layout, variables de color y tipografía, y modo oscuro/claro.",
    technologies: ["Figma"],
    mediaKind: "web-preview",
    mediaUrl: "",
    websiteUrl: "#",
  },
];

const threeDProjects: Project[] = [
  {
    id: "3d1",
    title: "RadioUv 3D Model",
    category: "3D Design",
    type: "3d",
    theme: "Radio — Visualización 3D interactiva",
    shortDescription: "Modelo 3D fotorrealista de una radio vintage para campaña digital, embebible en web vía Sketchfab.",
    longDescription: "Modelado y texturizado de una radio vintage de alta fidelidad para uso en campañas digitales interactivas. El modelo puede embeberse directamente en cualquier sitio web vía Sketchfab.\n\nQué buscamos: Crear un activo 3D reutilizable y fácilmente actualizable que funcionara tanto en renders estáticos como en visualización interactiva web.\n\nQué logramos: Un modelo con más de 4,000 polígonos, texturas PBR de 4K y tiempos de carga optimizados para web.",
    technologies: ["Cinema 4D", "Substance Painter", "Photoshop", "Sketchfab"],
    mediaKind: "sketchfab",
    mediaPoster: radioImg,
    mediaUrl: "https://sketchfab.com/models/41d373739fd84506bf7d1d6ec9416941/embed?autospin=1&autostart=1&preload=1",
  },
  {
    id: "3d2",
    title: "Product Visualization",
    category: "3D Design",
    type: "3d",
    theme: "Lujo — Relojería premium",
    shortDescription: "Render 3D fotorrealista de reloj de lujo para campaña print y digital.",
    longDescription: "Visualización de producto fotorrealista para marca de relojes de lujo. Incluye renders en múltiples ángulos, variantes de color y animación de cámara para uso en campañas digitales y material de print.\n\nQué buscamos: Reemplazar una sesión fotográfica costosa con renders 3D de calidad fotográfica.\n\nQué logramos: Set completo de 12 renders de alta resolución entregados en 5 días.",
    technologies: ["Cinema 4D", "Octane Render", "Photoshop"],
    mediaKind: "sketchfab",
    mediaUrl: "https://sketchfab.com/models/8cffcf6713eb4484bdc1e27b15c4980c/embed",
  },
  {
    id: "3d3",
    title: "Game of Thrones",
    category: "3D Design",
    type: "3d",
    theme: "Eventos — Escenografía digital",
    shortDescription: "Entorno 3D y diseño de escenario para festival de música, renderizado para redes sociales y print.",
    longDescription: "Diseño y rendering de escenografía 3D para festival de música. El ambiente incluyó iluminación dinámica, identidad de marca integrada y versiones adaptadas para distintos formatos de comunicación digital.",
    technologies: ["Cinema 4D", "Redshift"],
    mediaKind: "sketchfab",
    mediaUrl: "https://sketchfab.com/models/41d373739fd84506bf7d1d6ec9416941/embed?autospin=1&autostart=1&preload=1",
  },
  {
    id: "3d4",
    title: "Abstract Art Series",
    category: "3D Design",
    type: "3d",
    theme: "Arte — Colección NFT y galería",
    shortDescription: "Serie de arte abstracto 3D para exhibición en galería y colección NFT.",
    longDescription: "Colección de 10 piezas de arte abstracto 3D creadas para exhibición en galería física y lanzamiento como colección NFT. Cada pieza explora formas orgánicas, texturas procedurales y paletas de color curadas.",
    technologies: ["Cinema 4D", "Octane Render"],
    mediaKind: "sketchfab",
    mediaUrl: "https://sketchfab.com/models/41d373739fd84506bf7d1d6ec9416941/embed?autospin=1&autostart=1&preload=1",
  },
  {
    id: "3d5",
    title: "Dragon",
    category: "3D Design",
    type: "3d",
    theme: "Criatura — Modelado y texturizado",
    shortDescription: "Dragón de alta fidelidad modelado y texturizado con detalle fotorrealista para uso en animación y render.",
    longDescription: "Modelado completo de un dragón con anatomía detallada, escamas procedurales, alas membranosas y rig básico de animación. Texturizado con mapas PBR de 8K incluyendo color, roughness, metallic y normal maps.\n\nQué buscamos: Demostrar capacidad de modelado orgánico complejo y texturizado de alta fidelidad.\n\nQué logramos: Un modelo listo para renderizado cinematográfico y uso en portfolios de VFX.",
    technologies: ["Maya", "ZBrush", "Substance Painter", "Photoshop", "Blender"],
    mediaKind: "sketchfab",
    mediaPoster: dragonImg,
    // ── Reemplaza el src del iframe con tu embed de Sketchfab ──
    mediaUrl: "https://sketchfab.com/models/d0522be8d01a40cd9e0791bef04e07de/embed",
  },
];

/* ── News data ──────────────────────────────────────────────────────────────
   To add a new post, copy one block and replace: mediaPoster, title, theme
   (date), shortDescription, longDescription, websiteUrl.
   The newest post should always be first in the array.
────────────────────────────────────────────────────────────────────────── */
export interface NewsPost {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  longDescription: string;
  /** Cover image — always an <img> tag, never CSS background */
  cover?: string;
  /** External "Read More" URL — replace POST_URL with Facebook/IG/YT/etc. */
  externalUrl: string;
}

export const newsItems: NewsPost[] = [
  {
    id: "n1",
    title: "Nuevo proyecto de identidad visual completado",
    date: "18 Jul 2026",
    shortDescription: "Entrega de brand identity completo para startup de tecnología financiera en Santo Domingo.",
    longDescription: "Esta semana completamos el desarrollo de identidad visual para una fintech local. El proyecto incluyó logo, sistema tipográfico, paleta de color, papelería y guía de marca. Un trabajo que refleja confianza, modernidad y accesibilidad para el mercado latinoamericano.",
    externalUrl: "https://bsky.app/profile/estebancodeg.bsky.social/post/3lj6orouumk25",
  },
  {
    id: "n2",
    title: "Colaboración con estudio de animación 3D",
    date: "10 Jul 2026",
    shortDescription: "Iniciamos una colaboración con un estudio de animación para producir renders cinematográficos.",
    longDescription: "Emocionados de anunciar una nueva colaboración con un estudio de animación para proyectos 3D de gran formato. Trabajaremos en renders de producto, escenografías digitales y contenido para campañas publicitarias internacionales.",
    externalUrl: "POST_URL",
  },
  {
    id: "n3",
    title: "Curso de Cinema 4D — inscripciones abiertas",
    date: "1 Jul 2026",
    shortDescription: "Abro inscripciones para un taller intensivo de modelado y render en Cinema 4D.",
    longDescription: "Próximamente dicto un taller intensivo de Cinema 4D orientado a diseñadores gráficos que quieren integrar el 3D en su flujo de trabajo. 8 horas en vivo, material descargable y acceso a la comunidad. Plazas limitadas.",
    externalUrl: "POST_URL",
  },
];

/* ── Project thumbnail card ── */
function ProjectThumb({ project, onClick }: { project: Project; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1f1f1f" : "#161616",
        border: `1px solid ${hovered ? "rgba(244,179,33,0.25)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.4)" : "none",
        textAlign: "left",
        padding: 0,
        width: "100%",
      }}
    >
      {/* Thumbnail area — use <img> if mediaPoster exists */}
      <div style={{
        width: "100%",
        aspectRatio: "16/9",
        background: "#0d0d0d",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <img
          src={project.mediaPoster ?? ""}
          alt={project.title}
          className="project-image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: project.mediaPoster ? 1 : 0,
          }}
        />
        {/* Fallback icon when no poster */}
        {!project.mediaPoster && (
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: "22px", opacity: 0.2 }}>
              {project.type === "video" ? "▶" : project.type === "web" ? "🌐" : "🎲"}
            </span>
          </div>
        )}
        {/* Hover overlay */}
        {hovered && (
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{
              color: "#F4B321", fontSize: "10px",
              letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700,
              border: "1px solid rgba(244,179,33,0.5)",
              padding: "4px 10px", borderRadius: "100px",
            }}>
              Ver
            </span>
          </div>
        )}
      </div>

      <div style={{ padding: "9px 11px" }}>
        <p style={{ color: "#fff", fontSize: "11px", fontWeight: 500, marginBottom: "2px" }}>{project.title}</p>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px" }}>{project.category}</p>
      </div>
    </button>
  );
}

/* ── Category card ── */
interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  projects: Project[];
  onSelectProject: (project: Project, list: Project[], index: number) => void;
}

function CategoryCard({ title, icon, color, projects, onSelectProject }: CategoryCardProps) {
  const [expanded, setExpanded] = useState(false);

  /* Collapse: show 1 featured card. Explore: show all in grid */
  const visibleProjects = expanded ? projects : projects.slice(0, 1);

  return (
    <article
      style={{
        background: "#111",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        overflow: "hidden",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{
        padding: "24px 24px 20px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "40px", height: "40px",
            background: `${color}15`, borderRadius: "10px",
            display: "flex", alignItems: "center", justifyContent: "center",
            color,
          }}>
            {icon}
          </div>
          <div>
            <h3 style={{ color: "#fff", fontSize: "15px", fontWeight: 600 }}>{title}</h3>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>{projects.length} proyectos</p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="toggle-view"
          style={{
            background: expanded ? `${color}15` : "rgba(255,255,255,0.04)",
            border: `1px solid ${expanded ? `${color}30` : "rgba(255,255,255,0.08)"}`,
            borderRadius: "8px",
            color: expanded ? color : "rgba(255,255,255,0.5)",
            padding: "5px 14px", fontSize: "12px", fontWeight: 500,
            cursor: "pointer", transition: "all 0.2s",
          }}
        >
          {expanded ? "Collapse" : "Explore"}
        </button>
      </div>

      {/* Project grid */}
      <div style={{ padding: "18px 24px 24px", flex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: expanded ? "repeat(3, 1fr)" : "1fr",
          gap: "10px",
          transition: "all 0.3s ease",
        }}>
          {visibleProjects.map((project, index) => (
            <ProjectThumb
              key={project.id}
              project={project}
              onClick={() => onSelectProject(project, projects, expanded ? index : 0)}
            />
          ))}
        </div>

        {!expanded && projects.length > 1 && (
          <p style={{
            color: "rgba(255,255,255,0.2)", fontSize: "11px",
            marginTop: "12px", textAlign: "center",
          }}>
            + {projects.length - 1} proyecto{projects.length - 1 !== 1 ? "s" : ""} más · <button
              onClick={() => setExpanded(true)}
              style={{
                background: "none", border: "none",
                color: color, fontSize: "11px", cursor: "pointer", padding: 0,
              }}
            >Explorar todos</button>
          </p>
        )}
      </div>
    </article>
  );
}

/* ── News components ── */

function NewsThumb({ post, onClick }: { post: NewsPost; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1f1f1f" : "#161616",
        border: `1px solid ${hovered ? "rgba(244,179,33,0.25)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "10px", overflow: "hidden", cursor: "pointer",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        textAlign: "left", padding: 0, width: "100%",
      }}
    >
      {/* Cover — 16:9, always <img> */}
      <div style={{ width: "100%", aspectRatio: "16/9", background: "#0d0d0d", position: "relative", overflow: "hidden" }}>
        {post.cover ? (
          <img src={post.cover} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "22px", opacity: 0.2 }}>📰</span>
          </div>
        )}
        {hovered && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#F4B321", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, border: "1px solid rgba(244,179,33,0.5)", padding: "4px 10px", borderRadius: "100px" }}>
              Leer
            </span>
          </div>
        )}
      </div>
      <div style={{ padding: "10px 12px" }}>
        <p style={{ color: "#fff", fontSize: "11px", fontWeight: 500, marginBottom: "2px" }}>{post.title}</p>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px" }}>{post.date}</p>
      </div>
    </button>
  );
}

function NewsDetailModal({ post, onClose }: { post: NewsPost; onClose: () => void }) {
  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}
    >
      <div style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", width: "100%", maxWidth: "720px", maxHeight: "90vh", overflow: "hidden", display: "flex", flexDirection: "column", position: "relative" }}>
        {/* Close */}
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", width: "32px", height: "32px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "rgba(255,255,255,0.6)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
          ✕
        </button>

        {/* Cover image — always <img> */}
        <div style={{ width: "100%", aspectRatio: "16/9", background: "#0a0a0a", flexShrink: 0, overflow: "hidden" }}>
          {post.cover ? (
            <img src={post.cover} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "48px", opacity: 0.15 }}>📰</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: "28px 32px 32px", overflow: "auto" }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", marginBottom: "8px", letterSpacing: "0.06em" }}>{post.date}</p>
          <h3 style={{ color: "#fff", fontSize: "22px", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "20px", lineHeight: 1.2 }}>
            {post.title}
          </h3>

          {/* Scrollable article */}
          <div style={{ maxHeight: "220px", overflowY: "auto", paddingRight: "8px", marginBottom: "28px" }}>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.8 }}>{post.longDescription}</p>
          </div>

          {/* Read More — replace POST_URL with Facebook/IG/YT/X/LinkedIn link */}
          <a
            href={post.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F4B321", color: "#111", borderRadius: "8px", padding: "12px 24px", fontSize: "13px", fontWeight: 700, textDecoration: "none", transition: "background 0.2s" }}
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}

function NewsCategoryCard({ items }: { items: NewsPost[] }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedPost, setSelectedPost] = useState<NewsPost | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  // Auto-rotate featured post in collapse mode
  useState(() => {
    const timer = setInterval(() => {
      setFeaturedIndex((i) => (i + 1) % items.length);
    }, 3500);
    return () => clearInterval(timer);
  });

  const featured = items[featuredIndex];
  const newest = items[0];

  return (
    <>
      <article style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ padding: "24px 24px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "40px", background: "rgba(34,197,94,0.12)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#4ade80" }}>
              <Newspaper size={18} />
            </div>
            <div>{/* era blanco el color */}
              <h3 style={{ color: "#ffff", fontSize: "15px", fontWeight: 600 }}>News</h3>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>{items.length} posts</p>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            style={{ background: expanded ? "rgba(34,197,94,0.12)" : "rgba(255,255,255,0.04)", border: `1px solid ${expanded ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.08)"}`, borderRadius: "8px", color: expanded ? "#4ade80" : "rgba(255,255,255,0.5)", padding: "5px 14px", fontSize: "12px", fontWeight: 500, cursor: "pointer", transition: "all 0.2s" }}
          >
            {expanded ? "Collapse" : "Explore"}
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "18px 24px 24px", flex: 1 }}>
          {!expanded ? (
            /* Collapse: auto-rotating featured post */
            <button
              onClick={() => setSelectedPost(featured)}
              style={{ width: "100%", background: "#161616", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", overflow: "hidden", cursor: "pointer", padding: 0, textAlign: "left", transition: "border-color 0.2s" }}
            >
              <div style={{ width: "100%", aspectRatio: "16/9", background: "#0d0d0d", position: "relative", overflow: "hidden" }}>
                {featured.cover ? (
                  <img src={featured.cover} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                ) : (
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "28px", opacity: 0.15 }}>📰</span>
                  </div>
                )}
                {/* NEW badge on newest */}
                {featured.id === newest.id && (
                  <span style={{ position: "absolute", top: "8px", left: "8px", background: "#F4B321", color: "#111", fontSize: "9px", fontWeight: 800, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: "100px" }}>NEW</span>
                )}
              </div>
              <div style={{ padding: "10px 12px" }}>
                <p style={{ color: "#fff", fontSize: "11px", fontWeight: 500, marginBottom: "2px" }}>{featured.title}</p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px" }}>{featured.date}</p>
              </div>
            </button>
          ) : (
            /* Explore: full grid */
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
              {items.map((post) => (
                <div key={post.id} style={{ position: "relative" }}>
                  {post.id === newest.id && (
                    <span style={{ position: "absolute", top: "8px", left: "8px", zIndex: 1, background: "#F4B321", color: "#111", fontSize: "9px", fontWeight: 800, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: "100px" }}>NEW</span>
                  )}
                  <NewsThumb post={post} onClick={() => setSelectedPost(post)} />
                </div>
              ))}
            </div>
          )}
        </div>
      </article>

      {selectedPost && <NewsDetailModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </>
  );
}

/* ── Section ── */
export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeList, setActiveList] = useState<Project[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectProject = (project: Project, list: Project[], index: number) => {
    setSelectedProject(project);
    setActiveList(list);
    setActiveIndex(index);
  };

  const handleNavigate = (index: number) => {
    setActiveIndex(index);
    setSelectedProject(activeList[index]);
  };

  return (
    <section id="projects" style={{ minHeight: "100vh", padding: "100px 80px 100px 60px" }}>
      {/* Header */}
      <div style={{ marginBottom: "52px" }}>
        <p style={{ color: "#F4B321", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: "12px" }}>
          Mi trabajo
        </p>
        <h2 style={{ color: "#fff", fontSize: "52px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "14px" }}>
          Proyectos
        </h2>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "15px", maxWidth: "480px", lineHeight: 1.6 }}>
          Selección de trabajos en video, diseño web y visualización 3D.
          Haz click en <strong style={{ color: "rgba(255,255,255,0.6)" }}>Explore</strong> para ver todos los proyectos de cada categoría,
          luego click en un proyecto para verlo en detalle.
        </p>
      </div>

      {/* Category cards */}
      {/* <div style={{ display: "flex", gap: "20px" }}> */}
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  }}
>
        <NewsCategoryCard items={newsItems} />
        <CategoryCard
          title="Video Editing"
          icon={<Play size={18} />}
          color="#F4B321"
          projects={videoProjects}
          onSelectProject={handleSelectProject}
        />
        <CategoryCard
          title="Diseños Web"
          icon={<Globe size={18} />}
          color="#60a5fa"
          projects={webProjects}
          onSelectProject={handleSelectProject}
        />
        <CategoryCard
          title="Diseños 3D"
          icon={<Box size={18} />}
          color="#a78bfa"
          projects={threeDProjects}
          onSelectProject={handleSelectProject}
        />
       
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          projects={activeList}
          currentIndex={activeIndex}
          onClose={() => setSelectedProject(null)}
          onNavigate={handleNavigate}
        />
      )}
    </section>
  );
}