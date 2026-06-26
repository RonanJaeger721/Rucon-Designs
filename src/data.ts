import { Service, PortfolioItem, Testimonial, ProcessStep } from './types';

// Let's import our generated image assets as string variables or use direct paths.
// Since we have the exact paths from the generator, we can write them directly.
export const IMAGES = {
  hero: '/src/assets/images/hero_signage_1782432723602.jpg',
  exhibition: '/src/assets/images/exhibition_stand_1782432739250.jpg',
  vehicle: '/src/assets/images/vehicle_branding_1782432751525.jpg',
  shopfront: '/src/assets/images/shopfront_branding_1782432762331.jpg',
  indoor: '/src/assets/images/indoor_signage_1782432775829.jpg'
};

export const SERVICES: Service[] = [
  {
    id: 'sign-writing',
    title: 'Sign Writing',
    iconName: 'PenTool',
    shortDescription: 'Traditional hand-painted and modern custom precision vinyl lettering for boards, walls, and structures.',
    longDescription: 'Our expert sign writing blends classical artistry with modern materials. Whether you require hand-painted signage for a rustic look or precision-applied modern computer-cut vinyl graphics on walls, vehicles, or menu boards, we ensure crisp borders, vibrant finishes, and perfect alignment.',
    materials: ['Professional Outdoor Enamels', 'High-Performance Cast Vinyl', 'Aluminium Composite Sheets', 'Timber Boards'],
    typicalProjects: ['Retail Facade Lettering', 'Corporate Wall Graphics', 'Traditional Menu Boards', 'Heritage Sign Restoration'],
    category: 'signage'
  },
  {
    id: 'exhibition-stands',
    title: 'Exhibition Stands',
    iconName: 'LayoutGrid',
    shortDescription: 'Custom modular and bespoke trade show stands engineered to elevate your brand presence.',
    longDescription: 'We design and build award-winning exhibition stands that attract visitors and showcase your corporate identity. From initial 3D design to transport, assembly, and dismantling at Harare Agricultural Show or Mine Entra, our team delivers high-impact, functional visual spaces.',
    materials: ['Modular Aluminium Extrusions', 'Custom MDF Panels', 'Tension Fabrics with Dye-Sublimation', 'LED Backlit Graphics'],
    typicalProjects: ['Mine Entra Corporate Booths', 'Harare Agricultural Show Pavilions', 'ZimTrade Showcase Stands', 'Indoor Product Launch Backdrops'],
    category: 'exhibition'
  },
  {
    id: 'vehicle-branding',
    title: 'Vehicle Branding',
    iconName: 'Truck',
    shortDescription: 'High-durability fleet wrapping, delivery van graphics, and utility vehicle corporate decals.',
    longDescription: 'Turn your corporate vehicles into moving billboards. We offer full premium wraps, partial wraps, and magnetic or permanent spot graphics. Our vehicle branding uses UV-laminated vinyl to withstand Zimbabwe’s high-sun exposure without bubbling or fading, keeping your fleet looking professional.',
    materials: ['Avery Dennison Cast Wrapping Film', '3M Gloss/Matte Laminates', 'Micro-perforated One-Way Vision Film', 'Reflective Safety Vinyl'],
    typicalProjects: ['Apex Logistics Fleet Wrap', 'Commercial Delivery Vans', 'Corporate SUV Spot Decals', 'Utility Vehicle Hazard Striping'],
    category: 'branding'
  },
  {
    id: 'shop-branding',
    title: 'Shop Branding',
    iconName: 'Store',
    shortDescription: 'Sleek storefront signs, glowing 3D letters, window manifestations, and complete retail styling.',
    longDescription: 'Capture foot traffic and make an unforgettable first impression. We specialize in comprehensive shopfront transformations including 3D fabricated lettering, lightboxes, architectural cladding, window frosting, and internal branding that creates a unified, upscale shopping experience.',
    materials: ['Fabricated Perspex/Acrylic', 'LED Module Backlighting', 'Aluminium Composite Panels (Alucobond)', 'Frosted Privacy Film'],
    typicalProjects: ['Shopping Mall Boutique Entrances', 'Supermarket Exterior Signs', 'High-Street Retail Fascias', 'Cafe Awning Signs'],
    category: 'branding'
  },
  {
    id: 'corporate-branding',
    title: 'Corporate Branding',
    iconName: 'Briefcase',
    shortDescription: 'Cohesive visual identity implementation across office facilities, badges, and directional directories.',
    longDescription: 'Build trust and credibility with uniform brand applications. We deploy your corporate identity across all offices, branches, and reception areas, ensuring your colors, fonts, and logos are rendered with flawless consistency across all physical substrates.',
    materials: ['Anodized Aluminium', 'Brushed Brass & Silver Panels', 'Acrylic Standoffs', 'Custom Cast Logos'],
    typicalProjects: ['Bank Branch Rebranding', 'Corporate HQ Main Pylons', 'Office Door Signage & Plaques', 'Reception Desk Logo Signs'],
    category: 'management'
  },
  {
    id: 'design-services',
    title: 'Design Services',
    iconName: 'Palette',
    shortDescription: 'Professional structural sign architecture, 3D mockups, and visual concept drawings.',
    longDescription: 'Every great sign starts with a great drawing. Our design department produces complete visual blueprints, 3D environment mockups, and structural sign layouts, ensuring you see exactly how the final sign looks in place before fabrication begins.',
    materials: ['High-Fidelity 3D Renderings', 'CAD Architectural Blueprints', 'Vector Logo Preparations', 'Wayfinding Layout Schemes'],
    typicalProjects: ['Architectural Sign Blueprints', 'Logo Modernization', 'Exhibition Stand 3D Walkthroughs', 'Complete Mall Wayfinding Audits'],
    category: 'management'
  },
  {
    id: 'painting',
    title: 'Painting & Sign Art',
    iconName: 'Paintbrush',
    shortDescription: 'Industrial paint coatings, architectural detailing, and large-scale corporate sign writing.',
    longDescription: 'We provide specialized painting services for signs, display structures, and commercial spaces. Our team applies high-durability epoxy coatings, polyurethane sign finishes, and custom sign painting designed to weather the elements and stay vibrant.',
    materials: ['Two-Pack Polyurethane Paint', 'Epoxy Primers & Anti-Rust Coatings', 'High-Gloss Marine Enamels', 'Custom Color Matching Tinting'],
    typicalProjects: ['Corporate Pylon Refurbishments', 'Industrial Sign Structural Painting', 'Custom Feature Wall Mural Accents', 'Steel Support Framework Coating'],
    category: 'signage'
  },
  {
    id: 'architectural-sign-management',
    title: 'Architectural Sign Management',
    iconName: 'Building2',
    shortDescription: 'End-to-end site analysis, zoning compliance, mounting engineering, and master wayfinding plans.',
    longDescription: 'For large estates, office parks, and multi-tenant complexes, sign management is critical. We survey your facilities, engineer heavy-duty wind-load structural mounts, design comprehensive navigational maps, and manage compliance from blueprint to installation.',
    materials: ['Reinforced Galvanized Steel', 'Concrete Base Engineering', 'Aluminium Substructures', 'Reflective Engineering Grade Sheeting'],
    typicalProjects: ['Government HQ Wayfinding Masterplan', 'Shopping Centre Directional Frameworks', 'University Campus Sign Systems', 'Medical Center Zoning Directory'],
    category: 'management'
  },
  {
    id: 'indoor-signage',
    title: 'Indoor Signage',
    iconName: 'Milestone',
    shortDescription: 'Reception 3D lettering, lobby signs, directories, and elegant custom safety panels.',
    longDescription: 'Upgrade your interior spaces. From the second clients walk into your lobby, our premium indoor signs communicate quality. We fabricate glass-effect acrylic panels, brushed silver standoff letters, directory boards, and compliance safety signs matching international standards.',
    materials: ['Polished Acrylic Panels', 'Stainless Steel Standoff Screws', 'LED Edge-lit Glass', 'Premium Matte Vinyl Decals'],
    typicalProjects: ['Lobby Backdrop Acrylic Signage', 'Floor-by-Floor Directory Boards', 'Corporate Boardroom Acrylic Accents', 'Wayfinding Door Labels'],
    category: 'signage'
  },
  {
    id: 'outdoor-signage',
    title: 'Outdoor Signage',
    iconName: 'Compass',
    shortDescription: 'Freestanding pylon signs, roadside billboards, and durable structural building signs.',
    longDescription: 'Stand tall with heavy-duty outdoor signage. We manufacture and install double-sided backlit pylons, direction indicators, and durable fascia signs. Designed with robust steel internal framing, our outdoor signs are built to resist heavy storms, dust, and long-term UV rays.',
    materials: ['Galvanized Framing Tubes', 'Illuminated Acrylic Paneling', 'Polycarbonate Sign Faces', 'Heavy Duty Base Anchorage'],
    typicalProjects: ['Highway Roadside Pylon Signs', 'Corporate Entrance Billboards', 'Commercial Center Totem Signs', 'Warehouse Identification Panels'],
    category: 'signage'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Premium Retail Storefront Cladding',
    category: 'Shop Branding',
    imageUrl: IMAGES.shopfront,
    description: 'Bespoke structural shopfront with illuminated 3D backlit lettering and premium composite panels.'
  },
  {
    id: 'p2',
    title: 'Corporate Fleet Logistics Decals',
    category: 'Vehicle Branding',
    imageUrl: IMAGES.vehicle,
    description: 'Precision wrapping with high-performance cast vinyl for commercial delivery vehicles.'
  },
  {
    id: 'p3',
    title: 'International Trade Pavilion Stand',
    category: 'Exhibition Stands',
    imageUrl: IMAGES.exhibition,
    description: 'Custom structural trade show booth utilizing modern timber accents and high-impact LED displays.'
  },
  {
    id: 'p4',
    title: 'Executive Reception 3D Plaque',
    category: 'Corporate Branding',
    imageUrl: IMAGES.indoor,
    description: 'Brushed metal lettering and glass-effect acrylic standoff panel in a modern corporate lobby.'
  },
  {
    id: 'p5',
    title: 'Commercial Highway Pylon Installation',
    category: 'Sign Writing',
    imageUrl: 'https://picsum.photos/seed/pylon/800/600',
    description: 'Hand-detailed traditional and vinyl lettering mounted on steel structural support.'
  },
  {
    id: 'p6',
    title: 'Corporate HQ Exterior Signage',
    category: 'Corporate Branding',
    imageUrl: IMAGES.hero,
    description: 'Premium exterior architectural sign management project for a multi-tenant corporate headquarters.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Tinashe Moyo',
    role: 'Director of Infrastructure',
    company: 'Zim-Build Construction (Pvt) Ltd',
    quote: 'Rucon Designs handled the complete wayfinding and sign management for our shopping mall project in Harare. Outstanding quality, built to international safety standards, and delivered exactly within schedule. They are our go-to partner for large corporate developments.',
    rating: 5,
    location: 'Harare, Zimbabwe'
  },
  {
    id: 't2',
    name: 'Sarah Chigudu',
    role: 'General Manager',
    company: 'The Boulevard Galleria',
    quote: 'The shopfront branding and custom illuminated 3D lettering they fabricated has completely transformed our retail spaces. Foot traffic has noticeably increased, and the materials have withstood our intense summer weather flawlessly.',
    rating: 5,
    location: 'Bulawayo, Zimbabwe'
  },
  {
    id: 't3',
    name: 'Farai Chingono',
    role: 'Exhibition Director',
    company: 'Zim-Trade Export Council',
    quote: 'We contracted Rucon Designs to build the national exhibition pavilion. Their craftsmanship and modern designs stood out among hundreds of exhibitors. Prompt service and an absolute pleasure to collaborate with.',
    rating: 5,
    location: 'Harare, Zimbabwe'
  },
  {
    id: 't4',
    name: 'Nesta Sibanda',
    role: 'Operations & Fleet Manager',
    company: 'Apex Logistics Services',
    quote: 'Branding a fleet of 25 logistics cargo trucks was a massive task, but Rucon completed it ahead of our deadline. The print quality is incredibly sharp, and the vinyl is exceptionally durable against gravel, dust, and heavy washing.',
    rating: 5,
    location: 'Mutare, Zimbabwe'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Consultation & Site Survey',
    description: 'We meet to discuss your visibility goals, perform deep site analysis, inspect substrate conditions, and take precise dimensions.',
    details: ['Visual requirement brief', 'Structural substrate audit', 'Zoning & clearance verification', 'Initial budget outline']
  },
  {
    step: 2,
    title: 'Creative Layout & Drafting',
    description: 'Our design department creates custom vector layouts, 3D scale environment renderings, and recommends appropriate structural materials.',
    details: ['3D scale mockups', 'Material specification charts', 'Typography & sizing checks', 'Signed engineering approval']
  },
  {
    step: 3,
    title: 'Precision Manufacturing',
    description: 'We fabricate your signage using cutting-edge CNC router technology, premium acrylic moulding, digital vinyl printing, and durable coatings.',
    details: ['Precision CNC material cutouts', 'High-definition latex printing', 'Rust-proof structural welds', 'Quality finish inspections']
  },
  {
    step: 4,
    title: 'Professional On-Site Installation',
    description: 'Our certified installation team safely mounts, anchors, and connects the electrics of your signage, conducting a final safety audit.',
    details: ['Heavy-duty structural anchoring', 'Weatherproof LED hookups', 'Safety & alignment checks', 'Official hand-off signoff']
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Professional Team',
    description: 'Highly trained designers, sign builders, and structural installers with decades of combined corporate experience.'
  },
  {
    title: 'Quality Materials',
    description: 'We import long-life composite panels, UV-stable acrylics, and premium outdoor vinyl built to resist intense tropical sun.'
  },
  {
    title: 'Fast Turnaround',
    description: 'Efficient local fabrication processes and streamlined supply chains enable us to meet tight corporate deadlines.'
  },
  {
    title: 'Affordable Pricing',
    description: 'Highly competitive pricing without compromising on premium quality, structural safety, or material standards.'
  },
  {
    title: 'Custom Designs',
    description: 'Every project is built from scratch. No cookie-cutter solutions; we custom-tailor everything to your brand guideline.'
  },
  {
    title: 'Reliable Service',
    description: 'Trusted by government departments, private schools, construction firms, and leading national retail groups.'
  }
];
