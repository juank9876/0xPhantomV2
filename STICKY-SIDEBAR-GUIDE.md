# Guía de Sticky Sidebar Layout con GSAP

Esta guía explica cómo usar el componente de sticky sidebar implementado con GSAP ScrollTrigger.

## ¿Qué es el Sticky Sidebar Layout?

El **Sticky Sidebar Layout** es un patrón de diseño donde una columna lateral (sidebar) permanece fija en la pantalla mientras el contenido principal se desplaza. Este efecto es muy común en:

- Blogs con tabla de contenidos
- Documentación con navegación lateral
- E-commerce con filtros
- Dashboards con controles persistentes

## Componente Principal: `StickySidebarLayout`

### Uso Básico

```tsx
import { StickySidebarLayout } from '@/components/StickySidebarLayout';

export default function MyPage() {
  return (
    <StickySidebarLayout
      sidebar={
        <div>
          <h3>Sidebar Content</h3>
          <nav>Navigation here</nav>
        </div>
      }
    >
      <div>
        <h1>Main Content</h1>
        <p>Your scrollable content here...</p>
      </div>
    </StickySidebarLayout>
  );
}
```

### Props Disponibles

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `sidebar` | ReactNode | - | Contenido del sidebar (requerido) |
| `children` | ReactNode | - | Contenido principal (requerido) |
| `sidebarPosition` | 'left' \| 'right' | 'left' | Posición del sidebar |
| `sidebarWidth` | string | '400px' | Ancho del sidebar |
| `gap` | string | '2rem' | Espacio entre sidebar y contenido |
| `className` | string | '' | Clases CSS para el contenedor |
| `sidebarClassName` | string | '' | Clases CSS para el sidebar |
| `contentClassName` | string | '' | Clases CSS para el contenido |
| `enableParallax` | boolean | false | Habilitar efecto parallax |
| `parallaxSpeed` | number | 0.5 | Velocidad del parallax (0-1) |

## Ejemplos de Uso

### 1. Blog con Tabla de Contenidos (Sidebar Derecho)

```tsx
import { StickySidebarLayout } from '@/components/StickySidebarLayout';

export default function BlogPost() {
  return (
    <StickySidebarLayout
      sidebarPosition="right"
      sidebarWidth="280px"
      gap="4rem"
      sidebar={
        <div className="sticky top-8">
          <div className="p-6 bg-card rounded-xl border">
            <h3 className="font-bold mb-4">Table of Contents</h3>
            <nav>
              <ul className="space-y-2">
                <li><a href="#intro">Introduction</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#conclusion">Conclusion</a></li>
              </ul>
            </nav>
          </div>
        </div>
      }
    >
      <article>
        <section id="intro">
          <h1>Introduction</h1>
          <p>Content here...</p>
        </section>
        <section id="features">
          <h2>Features</h2>
          <p>More content...</p>
        </section>
      </article>
    </StickySidebarLayout>
  );
}
```

### 2. Dashboard con Navegación Lateral (Sidebar Izquierdo)

```tsx
<StickySidebarLayout
  sidebarPosition="left"
  sidebarWidth="300px"
  sidebar={
    <nav className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-2">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#analytics">Analytics</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </nav>
  }
>
  <main>
    <h1>Dashboard Content</h1>
    <div>Your main content here...</div>
  </main>
</StickySidebarLayout>
```

### 3. Con Efecto Parallax

```tsx
import { StickySidebarLayout, ParallaxSection } from '@/components/StickySidebarLayout';

<StickySidebarLayout
  enableParallax={true}
  parallaxSpeed={0.3}
  sidebar={<YourSidebar />}
>
  <ParallaxSection>
    <section>First section with parallax</section>
  </ParallaxSection>
  
  <ParallaxSection>
    <section>Second section with parallax</section>
  </ParallaxSection>
</StickySidebarLayout>
```

## Componente `ParallaxSection`

Envuelve secciones de contenido para aplicar efecto parallax (solo funciona si `enableParallax={true}`).

```tsx
import { ParallaxSection } from '@/components/StickySidebarLayout';

<ParallaxSection className="py-12">
  <h2>Section Title</h2>
  <p>Content with parallax effect</p>
</ParallaxSection>
```

## Páginas de Demostración

### `/sticky-sidebar-demo`
Demostración completa con sidebar izquierdo, navegación, y múltiples secciones con parallax.

### `/blog-demo`
Ejemplo de blog post con tabla de contenidos en sidebar derecho (el uso más común).

## Cómo Funciona Internamente

El componente utiliza GSAP ScrollTrigger para "pinear" el sidebar:

```javascript
ScrollTrigger.create({
  trigger: container,      // El contenedor completo
  start: 'top top',        // Cuando el top toca el viewport
  end: 'bottom bottom',    // Hasta que termine el contenido
  pin: sidebar,            // Elemento a pinear
  pinSpacing: false,       // No añadir espacio extra
  anticipatePin: 1,        // Mejora el rendimiento
});
```

## Responsive Design

Para móviles, considera cambiar el layout:

```tsx
'use client';

import { useState, useEffect } from 'react';
import { StickySidebarLayout } from '@/components/StickySidebarLayout';

export default function ResponsivePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div>
        <aside>Sidebar content</aside>
        <main>Main content</main>
      </div>
    );
  }

  return (
    <StickySidebarLayout sidebar={<aside>Sidebar</aside>}>
      <main>Content</main>
    </StickySidebarLayout>
  );
}
```

## Mejores Prácticas

### 1. Altura del Contenido
El contenido principal debe ser más largo que el sidebar para que el efecto sea visible:

```tsx
// ✅ Bueno - contenido largo
<StickySidebarLayout sidebar={<ShortSidebar />}>
  <LongArticle />
</StickySidebarLayout>

// ❌ Malo - contenido muy corto
<StickySidebarLayout sidebar={<TallSidebar />}>
  <ShortParagraph />
</StickySidebarLayout>
```

### 2. Sticky Interno
Usa `position: sticky` dentro del sidebar para mejor control:

```tsx
sidebar={
  <div className="sticky top-8">
    {/* Contenido del sidebar */}
  </div>
}
```

### 3. Limpieza Automática
El componente limpia automáticamente los ScrollTriggers al desmontarse, no necesitas preocuparte por memory leaks.

### 4. Performance
- Usa `pinSpacing: false` (ya incluido por defecto)
- Evita animaciones complejas en el sidebar
- Considera desactivar parallax en dispositivos de bajo rendimiento

## Personalización Avanzada

### Cambiar el Punto de Inicio del Pin

Modifica el componente para cambiar cuándo se activa el sticky:

```tsx
// En StickySidebarLayout.tsx, cambia:
start: 'top top',  // Empieza cuando toca el top
// a:
start: 'top center',  // Empieza cuando está en el centro
```

### Añadir Transiciones

```tsx
<div className="sticky top-8 transition-all duration-300">
  {/* Sidebar con transiciones suaves */}
</div>
```

### Integrar con Scroll Spy

```tsx
'use client';

import { useState, useEffect } from 'react';

export default function BlogWithScrollSpy() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <StickySidebarLayout
      sidebar={
        <nav>
          <a 
            href="#intro" 
            className={activeSection === 'intro' ? 'active' : ''}
          >
            Introduction
          </a>
        </nav>
      }
    >
      <section id="intro">Content</section>
    </StickySidebarLayout>
  );
}
```

## Solución de Problemas

**El sidebar no se queda fijo:**
- Verifica que el contenido principal sea más largo que el sidebar
- Asegúrate de que GSAP esté instalado correctamente
- Revisa que el componente tenga `'use client'` en Next.js

**Saltos o glitches al hacer scroll:**
- Usa `pinSpacing: false` (ya incluido)
- Evita cambios de altura dinámicos en el sidebar
- Considera usar `will-change: transform` en CSS

**Problemas en móviles:**
- Implementa un layout diferente para pantallas pequeñas
- Desactiva el sticky en móviles si es necesario
- Usa media queries para ajustar el diseño

## Recursos

- [GSAP ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Ejemplo original en Prismic](https://prismic.io/blog/css-scroll-effects#14-gsap-stacked-cards)
- Demos en el proyecto: `/sticky-sidebar-demo` y `/blog-demo`
