# Guía de Sticky Sections con GSAP

Esta guía explica cómo usar los componentes de sticky sections implementados con GSAP ScrollTrigger en este proyecto.

## Componentes Disponibles

### 1. `StickySection` y `StickySectionsContainer`

Componentes básicos para crear secciones que se "pegan" al hacer scroll.

**Uso básico:**

```tsx
import { StickySection, StickySectionsContainer } from '@/components/StickySections';

export default function MyPage() {
  return (
    <StickySectionsContainer>
      <StickySection 
        backgroundColor="#667eea"
        withScale={true}
        withFade={false}
      >
        <h1>Sección 1</h1>
      </StickySection>
      
      <StickySection backgroundColor="#f093fb">
        <h1>Sección 2</h1>
      </StickySection>
    </StickySectionsContainer>
  );
}
```

**Props de `StickySection`:**

- `children`: ReactNode - Contenido de la sección
- `className`: string - Clases CSS adicionales
- `backgroundColor`: string - Color de fondo (hex, rgb, gradient)
- `withScale`: boolean - Aplica efecto de escala al hacer scroll (default: true)
- `withFade`: boolean - Aplica efecto de fade al hacer scroll (default: false)

### 2. `StickyShowcase`

Componente más avanzado con múltiples variantes de animación.

**Uso:**

```tsx
import { StickyShowcase } from '@/components/StickyShowcase';

export default function MyPage() {
  const sections = [
    {
      id: 'section-1',
      title: 'Título',
      description: 'Descripción',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      content: <div>Tu contenido aquí</div>
    },
    // ... más secciones
  ];

  return (
    <StickyShowcase 
      sections={sections} 
      variant="default" // o "stacking" o "reveal"
    />
  );
}
```

**Variantes disponibles:**

- `default`: Secciones se pegan con efecto de escala y fade
- `stacking`: Efecto de apilamiento con movimiento vertical
- `reveal`: Efecto de revelación con fade in desde abajo

### 3. Hook `useGSAP`

Hook personalizado para manejar animaciones GSAP con limpieza automática.

**Uso:**

```tsx
import { useGSAP } from '@/hooks/useGSAP';

function MyComponent() {
  const elementRef = useRef(null);

  useGSAP(({ gsap, ScrollTrigger }) => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    });

    // Retorna función de limpieza (opcional)
    return () => {
      // Limpieza personalizada
    };
  }, []); // Dependencias

  return <div ref={elementRef}>Contenido</div>;
}
```

## Páginas de Demostración

### `/sticky-demo`
Demostración simple con 5 secciones de colores con gradientes.

### `/sticky-showcase`
Demostración avanzada con contenido real, botones e iconos.

## Ejemplos de Integración

### Integrar con componentes existentes:

```tsx
import { StickySection, StickySectionsContainer } from '@/components/StickySections';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

export default function Home() {
  return (
    <StickySectionsContainer>
      <StickySection withScale={true}>
        <Hero />
      </StickySection>
      
      <StickySection withScale={true}>
        <Features />
      </StickySection>
    </StickySectionsContainer>
  );
}
```

### Crear secciones personalizadas:

```tsx
<StickySection 
  className="custom-section"
  backgroundColor="transparent"
  withScale={true}
  withFade={false}
>
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900" />
  <div className="relative z-10 max-w-4xl mx-auto px-6">
    <h1 className="text-6xl font-bold mb-4">Tu Título</h1>
    <p className="text-xl">Tu contenido</p>
  </div>
</StickySection>
```

## Configuración Avanzada

### Personalizar ScrollTrigger:

```tsx
useGSAP(({ gsap, ScrollTrigger }) => {
  ScrollTrigger.create({
    trigger: element,
    start: 'top top',      // Cuando el top del trigger toca el top del viewport
    end: 'bottom top',     // Cuando el bottom del trigger toca el top del viewport
    pin: true,             // Pega el elemento
    pinSpacing: false,     // No añade espacio extra
    scrub: true,           // Vincula la animación al scroll
    markers: true,         // Muestra marcadores de debug (remover en producción)
    anticipatePin: 1,      // Mejora el rendimiento del pinning
  });
}, []);
```

### Animaciones personalizadas:

```tsx
useGSAP(({ gsap, ScrollTrigger }) => {
  gsap.to(element, {
    scale: 0.9,
    rotation: 5,
    opacity: 0.7,
    y: -50,
    scrollTrigger: {
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,  // Suaviza la animación (0-1)
    }
  });
}, []);
```

## Tips y Mejores Prácticas

1. **Rendimiento**: Usa `pinSpacing: false` para evitar saltos en el scroll
2. **Última sección**: No apliques pin a la última sección para evitar problemas
3. **Mobile**: Considera desactivar el efecto en móviles si es necesario
4. **Altura**: Asegúrate de que cada sección tenga `minHeight: 100vh` o similar
5. **Z-index**: Para efectos de stacking, maneja el z-index correctamente
6. **Limpieza**: El hook `useGSAP` limpia automáticamente los ScrollTriggers

## Solución de Problemas

**Las secciones no se pegan:**
- Verifica que GSAP esté instalado: `npm list gsap`
- Asegúrate de que el componente sea 'use client'
- Revisa que las secciones tengan altura suficiente

**Animaciones entrecortadas:**
- Usa `scrub: true` o un valor entre 0-1 para suavizar
- Reduce la complejidad de las animaciones
- Considera usar `will-change: transform` en CSS

**Problemas en producción:**
- Remueve `markers: true` de ScrollTrigger
- Verifica que gsap/ScrollTrigger esté en dependencies, no devDependencies

## Recursos

- [GSAP ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Forum](https://greensock.com/forums/)
- Ejemplos en: `/sticky-demo` y `/sticky-showcase`
