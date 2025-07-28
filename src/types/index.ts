export interface BrandData {
  brandName: string;
  industry: string;
  keywords: string;
  tone: string;
  timestamp: number;
}

export interface BrandIdentity {
  slogans: string[];
  aboutUs: {
    formal: string;
    friendly: string;
  };
  personality: {
    traits: string[];
    toneDescription: string;
  };
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    dark: string;
  };
  logoMockups: {
    iconWithText: string;
    textLogo: string;
    monogram: string;
  };
  brandKeywords: {
    emotion: string[];
    industry: string[];
    action: string[];
  };
  useCases: {
    homepage: string;
    packaging: string;
    socialMedia: string;
  };
}