import { BrandData, BrandIdentity } from '../types';

const industryColors = {
  tech: { primary: '#3B82F6', secondary: '#1E40AF', accent: '#60A5FA', neutral: '#6B7280', dark: '#111827' },
  health: { primary: '#10B981', secondary: '#047857', accent: '#34D399', neutral: '#6B7280', dark: '#111827' },
  finance: { primary: '#1F2937', secondary: '#374151', accent: '#F59E0B', neutral: '#6B7280', dark: '#111827' },
  ai: { primary: '#8B5CF6', secondary: '#7C3AED', accent: '#A78BFA', neutral: '#6B7280', dark: '#111827' },
  fashion: { primary: '#EC4899', secondary: '#DB2777', accent: '#F9A8D4', neutral: '#6B7280', dark: '#111827' },
  food: { primary: '#F97316', secondary: '#EA580C', accent: '#FB923C', neutral: '#6B7280', dark: '#111827' },
  education: { primary: '#0EA5E9', secondary: '#0284C7', accent: '#38BDF8', neutral: '#6B7280', dark: '#111827' },
  retail: { primary: '#EF4444', secondary: '#DC2626', accent: '#F87171', neutral: '#6B7280', dark: '#111827' },
};

const toneAdjectives = {
  friendly: ['approachable', 'warm', 'welcoming', 'personable'],
  professional: ['reliable', 'trustworthy', 'expert', 'established'],
  bold: ['confident', 'innovative', 'dynamic', 'pioneering'],
  elegant: ['sophisticated', 'refined', 'premium', 'exclusive'],
};

const industryKeywords = {
  tech: {
    emotion: ['innovative', 'cutting-edge', 'revolutionary', 'smart'],
    industry: ['software', 'digital', 'technology', 'platform', 'solution'],
    action: ['develop', 'create', 'build', 'optimize', 'transform'],
  },
  health: {
    emotion: ['caring', 'trusted', 'healing', 'compassionate'],
    industry: ['wellness', 'medical', 'healthcare', 'treatment', 'recovery'],
    action: ['heal', 'support', 'improve', 'restore', 'enhance'],
  },
  finance: {
    emotion: ['secure', 'stable', 'reliable', 'confident'],
    industry: ['investment', 'banking', 'financial', 'wealth', 'portfolio'],
    action: ['invest', 'grow', 'protect', 'manage', 'secure'],
  },
  ai: {
    emotion: ['intelligent', 'futuristic', 'advanced', 'intuitive'],
    industry: ['artificial intelligence', 'machine learning', 'automation', 'neural', 'algorithm'],
    action: ['learn', 'predict', 'automate', 'analyze', 'optimize'],
  },
  fashion: {
    emotion: ['stylish', 'trendy', 'chic', 'elegant'],
    industry: ['apparel', 'design', 'style', 'fashion', 'clothing'],
    action: ['design', 'create', 'inspire', 'express', 'showcase'],
  },
  food: {
    emotion: ['delicious', 'fresh', 'authentic', 'satisfying'],
    industry: ['culinary', 'restaurant', 'gourmet', 'cuisine', 'dining'],
    action: ['serve', 'create', 'deliver', 'satisfy', 'nourish'],
  },
  education: {
    emotion: ['empowering', 'inspiring', 'knowledgeable', 'supportive'],
    industry: ['learning', 'academic', 'educational', 'training', 'development'],
    action: ['teach', 'educate', 'guide', 'develop', 'empower'],
  },
  retail: {
    emotion: ['convenient', 'quality', 'affordable', 'accessible'],
    industry: ['shopping', 'merchandise', 'retail', 'products', 'marketplace'],
    action: ['sell', 'provide', 'deliver', 'serve', 'offer'],
  },
};

export function generateBrandIdentity(brandData: BrandData): BrandIdentity {
  const { brandName, industry, keywords, tone } = brandData;
  const industryKey = industry.toLowerCase() as keyof typeof industryColors;
  
  // Generate slogans
  const slogans = generateSlogans(brandName, industry, tone);
  
  // Generate about us sections
  const aboutUs = generateAboutUs(brandName, industry, tone, keywords);
  
  // Generate personality
  const personality = generatePersonality(tone, industry);
  
  // Get color palette
  const colorPalette = industryColors[industryKey] || industryColors.tech;
  
  // Generate logo mockups
  const logoMockups = generateLogoMockups(brandName);
  
  // Generate brand keywords
  const brandKeywords = generateBrandKeywords(industry, keywords);
  
  // Generate use cases
  const useCases = generateUseCases(brandName, industry, tone);
  
  return {
    slogans,
    aboutUs,
    personality,
    colorPalette,
    logoMockups,
    brandKeywords,
    useCases,
  };
}

function generateSlogans(brandName: string, industry: string, tone: string): string[] {
  const templates = [
    `${brandName} - Where ${industry} meets innovation`,
    `Empowering your ${industry} journey`,
    `The future of ${industry} starts here`,
    `${brandName}: Redefining ${industry}`,
    `Your trusted ${industry} partner`,
    `Innovation. Quality. ${brandName}.`,
    `${brandName} - Beyond expectations`,
    `Transforming ${industry}, one client at a time`,
  ];
  
  return templates.slice(0, 3);
}

function generateAboutUs(brandName: string, industry: string, tone: string, keywords: string): { formal: string; friendly: string } {
  const keywordList = keywords.split(',').map(k => k.trim()).filter(k => k);
  const keywordText = keywordList.length > 0 ? keywordList.slice(0, 3).join(', ') : 'innovation, quality, excellence';
  
  const formal = `${brandName} is a leading ${industry} company dedicated to delivering exceptional value to our clients. Founded on the principles of ${keywordText}, we combine industry expertise with cutting-edge solutions to drive meaningful results. Our team of professionals is committed to maintaining the highest standards of service while fostering long-term partnerships with our clients. We believe in the power of ${industry} to transform businesses and create lasting impact in today's competitive marketplace.`;
  
  const friendly = `Hey there! Welcome to ${brandName} – we're absolutely passionate about ${industry} and everything it can do for you. Our journey started with a simple belief: that ${keywordText} should be at the heart of everything we do. We're not just another ${industry} company; we're your partners in success, your cheerleaders when things get tough, and your celebration crew when you achieve your goals. Our amazing team loves what we do, and we can't wait to share that enthusiasm with you!`;
  
  return { formal, friendly };
}

function generatePersonality(tone: string, industry: string): { traits: string[]; toneDescription: string } {
  const toneKey = tone.toLowerCase() as keyof typeof toneAdjectives;
  const baseTraits = toneAdjectives[toneKey] || toneAdjectives.professional;
  const traits = [...baseTraits, 'customer-focused'].slice(0, 4);
  
  const toneDescription = `${tone.charAt(0).toUpperCase() + tone.slice(1)} and engaging, with a focus on building meaningful connections while maintaining ${industry} expertise.`;
  
  return { traits, toneDescription };
}

function generateLogoMockups(brandName: string): { iconWithText: string; textLogo: string; monogram: string } {
  const initials = brandName.split(' ').map(word => word.charAt(0)).join('').slice(0, 2).toUpperCase();
  
  return {
    iconWithText: `Icon + ${brandName}`,
    textLogo: brandName,
    monogram: initials,
  };
}

function generateBrandKeywords(industry: string, userKeywords: string): { emotion: string[]; industry: string[]; action: string[] } {
  const industryKey = industry.toLowerCase() as keyof typeof industryKeywords;
  const baseKeywords = industryKeywords[industryKey] || industryKeywords.tech;
  
  const userKeywordList = userKeywords.split(',').map(k => k.trim()).filter(k => k);
  
  return {
    emotion: [...baseKeywords.emotion, ...userKeywordList.slice(0, 2)].slice(0, 4),
    industry: baseKeywords.industry,
    action: baseKeywords.action,
  };
}

function generateUseCases(brandName: string, industry: string, tone: string): { homepage: string; packaging: string; socialMedia: string } {
  return {
    homepage: `Welcome to ${brandName} – your premier destination for ${industry} excellence. We're here to transform your vision into reality.`,
    packaging: `${brandName}: Premium ${industry} solutions that deliver exceptional results every time.`,
    socialMedia: `🚀 ${brandName} | Leading the way in ${industry} | Innovation meets excellence ✨`,
  };
}