export interface ComponentItem {
  id: string;
  title: string;
  category: "Bento" | "SVGs" | "Motion" | "Headers";
  isPro: boolean;
  description: string;
  previewType: string;
}

export const COMPONENTS_DATA: ComponentItem[] = [
  {
    id: "spotlight-bento",
    title: "Radial Spotlight Bento Grid",
    category: "Bento",
    isPro: true,
    description: "Multi-card layout with mouse-tracking radial borders and staggered entrance motion.",
    previewType: "bento"
  },
  {
    id: "mesh-gradient-canvas",
    title: "Interactive Mesh Gradient SVG",
    category: "SVGs",
    isPro: true,
    description: "Dynamic fluid vector background canvas that responds to cursor coordinates.",
    previewType: "svg"
  },
  {
    id: "swiss-pill-nav",
    title: "Archival Pill Navigation",
    category: "Headers",
    isPro: false,
    description: "Clean editorial header with frosted backdrop blur and micro-transition states.",
    previewType: "nav"
  },
  {
    id: "spring-modal-wizard",
    title: "Multi-Step Motion Wizard",
    category: "Motion",
    isPro: true,
    description: "Complex state-managed onboarding wizard with physics spring damping transitions.",
    previewType: "wizard"
  },
  {
    id: "brutalist-button",
    title: "Invert-Snap Action Button",
    category: "Motion",
    isPro: false,
    description: "High-contrast geometric button featuring instantaneous color inversion on hover.",
    previewType: "button"
  },
  {
    id: "editorial-card",
    title: "Monochrome Spec Card",
    category: "Bento",
    isPro: false,
    description: "Architectural grid cell framed with razor-sharp 1px borders and tabular metadata.",
    previewType: "card"
  }
];
