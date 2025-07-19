export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  detailedDescription: string
  features: string[]
  process: string[]
  benefits: string[]
  price: string
  duration: string
  image: string
  gallery: string[]
  equipment: string[]
  beforeAfter: {
    before: string
    after: string
  }
  testimonials: {
    name: string
    rating: number
    comment: string
    location: string
  }[]
}

export const services: Service[] = [
  {
    id: "office-cleaning",
    title: "Professional Office Cleaning",
    subtitle: "Maintain a pristine work environment that boosts productivity",
    description:
      "Comprehensive office cleaning services designed to create a healthy, productive workspace for your team and impressive environment for your clients.",
    detailedDescription:
      "Our professional office cleaning service goes beyond basic maintenance to create an environment that reflects your company's commitment to excellence. We understand that a clean office is not just about appearance – it's about creating a healthy workspace that enhances productivity, reduces sick days, and leaves a lasting impression on clients and visitors. Our trained professionals use commercial-grade equipment and eco-friendly products to ensure thorough cleaning while maintaining the highest safety standards.",
    features: [
      "Daily, weekly, or monthly cleaning schedules tailored to your business needs",
      "Complete workstation sanitization including desks, keyboards, and phones",
      "Professional floor cleaning, vacuuming, and maintenance for all surface types",
      "Comprehensive restroom cleaning and restocking with premium supplies",
      "Kitchen and break room deep cleaning including appliances and surfaces",
      "Trash removal, recycling management, and waste disposal services",
      "Window cleaning for interior glass surfaces and partitions",
      "Conference room and meeting space preparation and maintenance",
      "Reception area and lobby cleaning to create impressive first impressions",
      "Specialized cleaning for high-touch surfaces and common areas",
    ],
    process: [
      "Initial consultation and workspace assessment to understand specific needs",
      "Development of customized cleaning plan and schedule",
      "Professional team assignment with background-checked staff",
      "Implementation of systematic cleaning protocols",
      "Quality control inspections and client feedback integration",
      "Ongoing service optimization and schedule adjustments",
    ],
    benefits: [
      "Improved employee health and reduced sick days",
      "Enhanced professional image for clients and visitors",
      "Increased productivity in clean, organized environment",
      "Extended lifespan of office furniture and equipment",
      "Compliance with health and safety regulations",
      "Cost-effective solution compared to in-house cleaning",
    ],
    price: "Starting from $150 per visit",
    duration: "2-4 hours depending on office size",
    image: "/ea979bce7b0cadc07ed798dbe31060cf.jpg",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Office+Reception+Cleaning",
      "/placeholder.svg?height=400&width=600&text=Workstation+Sanitization",
      "/placeholder.svg?height=400&width=600&text=Conference+Room+Cleaning",
      "/placeholder.svg?height=400&width=600&text=Office+Kitchen+Cleaning",
    ],
    equipment: [
      "Commercial-grade vacuum cleaners with HEPA filtration",
      "Professional floor cleaning machines and buffers",
      "Eco-friendly cleaning solutions and disinfectants",
      "Microfiber cloths and specialized cleaning tools",
      "Window cleaning equipment and squeegees",
      "Industrial-strength sanitization equipment",
    ],
    beforeAfter: {
      before: "/placeholder.svg?height=300&width=400&text=Office+Before+Cleaning",
      after: "/placeholder.svg?height=300&width=400&text=Office+After+Cleaning",
    },
    testimonials: [
      {
        name: "Sarah Johnson",
        rating: 5,
        comment:
          "HyperLend has transformed our office environment. The team is professional, thorough, and always exceeds our expectations.",
        location: "Downtown Business District",
      },
      {
        name: "Michael Chen",
        rating: 5,
        comment:
          "Excellent service! Our employees have noticed the difference, and client feedback has been overwhelmingly positive.",
        location: "Tech Hub Office Complex",
      },
    ],
  },
  {
    id: "post-renovation",
    title: "Post-Renovation Deep Cleaning",
    subtitle: "Transform construction chaos into pristine perfection",
    description:
      "Specialized deep cleaning service to remove all construction debris, dust, and residue after renovation or construction work, preparing your space for immediate occupancy.",
    detailedDescription:
      "Post-renovation cleaning requires specialized knowledge, equipment, and techniques that go far beyond regular cleaning services. Construction and renovation projects leave behind fine dust, paint splatters, adhesive residues, and debris that can be challenging to remove without proper expertise. Our post-renovation cleaning service is designed to handle these unique challenges, transforming your newly renovated space from a construction zone into a pristine, move-in ready environment. We understand the urgency of post-construction cleanup and work efficiently to meet your project deadlines while maintaining the highest quality standards.",
    features: [
      "Complete construction dust removal from all surfaces and hidden areas",
      "Paint splatter and adhesive residue removal using specialized techniques",
      "Comprehensive window and glass surface cleaning inside and out",
      "Deep floor cleaning, polishing, and protective coating application",
      "Fixture, appliance, and cabinet cleaning with detail finishing",
      "HVAC system cleaning and air vent debris removal",
      "Light fixture and ceiling fan cleaning and installation finishing",
      "Bathroom and kitchen deep sanitization and fixture polishing",
      "Baseboard, trim, and molding detailed cleaning",
      "Final walkthrough and touch-up cleaning services",
    ],
    process: [
      "Pre-cleaning site inspection and safety assessment",
      "Debris removal and initial surface preparation",
      "Systematic room-by-room deep cleaning approach",
      "Specialized equipment deployment for stubborn residues",
      "Quality inspection and client walkthrough",
      "Final detailing and move-in preparation",
    ],
    benefits: [
      "Safe, immediate occupancy of renovated spaces",
      "Protection of new finishes and installations",
      "Removal of potentially harmful construction particles",
      "Professional presentation of completed renovation",
      "Time savings allowing focus on other project aspects",
      "Warranty protection for new installations and finishes",
    ],
    price: "Starting from $300 per project",
    duration: "4-8 hours depending on project scope",
    image: "/accf1319480dbf1ac5c5097a3ecaef4b.jpg",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Construction+Dust+Removal",
      "/placeholder.svg?height=400&width=600&text=Paint+Splatter+Cleaning",
      "/placeholder.svg?height=400&width=600&text=Window+Deep+Cleaning",
      "/placeholder.svg?height=400&width=600&text=Floor+Restoration+Cleaning",
    ],
    equipment: [
      "Industrial vacuum systems with fine particle filtration",
      "Specialized paint and adhesive removal tools",
      "Professional floor cleaning and polishing machines",
      "High-pressure cleaning equipment for stubborn residues",
      "Safety equipment and protective gear",
      "Specialized solvents and cleaning compounds",
    ],
    beforeAfter: {
      before: "/placeholder.svg?height=300&width=400&text=Post+Construction+Mess",
      after: "/placeholder.svg?height=300&width=400&text=Clean+Finished+Space",
    },
    testimonials: [
      {
        name: "David Rodriguez",
        rating: 5,
        comment:
          "Amazing transformation! They turned our construction disaster into a beautiful, clean space ready for our grand opening.",
        location: "Retail Space Renovation",
      },
      {
        name: "Lisa Thompson",
        rating: 5,
        comment:
          "Professional, efficient, and thorough. They handled our home renovation cleanup perfectly and on schedule.",
        location: "Residential Renovation",
      },
    ],
  },
  {
    id: "house-cleaning",
    title: "Comprehensive House Cleaning",
    subtitle: "Complete home care for the modern family lifestyle",
    description:
      "Full-service house cleaning designed for busy families who want to maintain a beautiful, healthy home environment without the time commitment.",
    detailedDescription:
      "Your home is your sanctuary, and it deserves the highest level of care and attention. Our comprehensive house cleaning service is designed to handle every aspect of home maintenance, from daily upkeep to deep cleaning projects. We understand that every home is unique, with different layouts, materials, and family needs. Our experienced team adapts our proven cleaning methods to work with your home's specific requirements, ensuring that every room receives the appropriate level of attention. Whether you need regular maintenance cleaning or a one-time deep clean, we provide consistent, reliable service that allows you to focus on what matters most – spending quality time with your family.",
    features: [
      "Complete room-by-room cleaning including bedrooms, living areas, and studies",
      "Kitchen deep cleaning with appliance interior and exterior maintenance",
      "Bathroom sanitization with tile, grout, and fixture restoration",
      "Staircase, hallway, and entryway cleaning with attention to high-traffic areas",
      "Laundry room organization and cleaning including washer and dryer maintenance",
      "Garage and basement cleaning with storage area organization",
      "Outdoor patio and deck cleaning for extended living spaces",
      "Seasonal cleaning services including holiday preparation",
      "Pet-friendly cleaning solutions for homes with animals",
      "Child-safe cleaning products and methods for family homes",
    ],
    process: [
      "Home assessment and family lifestyle consultation",
      "Customized cleaning plan development based on home layout",
      "Flexible scheduling to accommodate family routines",
      "Systematic cleaning approach with quality checkpoints",
      "Regular communication and service adjustments",
      "Seasonal deep cleaning and maintenance planning",
    ],
    benefits: [
      "More quality time with family and friends",
      "Consistently clean and organized living environment",
      "Improved indoor air quality and family health",
      "Reduced stress from household maintenance burden",
      "Professional care extending home furnishing lifespan",
      "Flexible service adapting to changing family needs",
    ],
    price: "Starting from $200 per visit",
    duration: "3-6 hours depending on home size",
    image: "/d9aae552def25694b4f3baa1acf10f2e.jpg",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Living+Room+Deep+Clean",
      "/placeholder.svg?height=400&width=600&text=Kitchen+Professional+Clean",
      "/placeholder.svg?height=400&width=600&text=Bedroom+Detailed+Cleaning",
      "/placeholder.svg?height=400&width=600&text=Bathroom+Sanitization",
    ],
    equipment: [
      "Residential-grade cleaning equipment designed for home use",
      "Family-safe, eco-friendly cleaning products",
      "Specialized tools for different home surfaces and materials",
      "Pet-safe cleaning solutions and equipment",
      "Microfiber cleaning systems for dust-free results",
      "Professional-grade vacuum cleaners with allergen filtration",
    ],
    beforeAfter: {
      before: "/placeholder.svg?height=300&width=400&text=Busy+Family+Home+Before",
      after: "/placeholder.svg?height=300&width=400&text=Pristine+Family+Home+After",
    },
    testimonials: [
      {
        name: "Jennifer Martinez",
        rating: 5,
        comment:
          "Life-changing service! I finally have time to enjoy my home instead of constantly cleaning it. The team is trustworthy and thorough.",
        location: "Suburban Family Home",
      },
      {
        name: "Robert Wilson",
        rating: 5,
        comment:
          "Exceptional attention to detail. They treat our home like their own and always exceed our expectations.",
        location: "Two-Story Family Residence",
      },
    ],
  },
  {
    id: "apartment-cleaning",
    title: "Urban Apartment Cleaning",
    subtitle: "Efficient cleaning solutions for modern city living",
    description:
      "Specialized apartment cleaning services designed for urban professionals and city dwellers who demand efficiency and quality in compact living spaces.",
    detailedDescription:
      "Urban apartment living presents unique cleaning challenges that require specialized approaches and efficient solutions. Limited space, shared building amenities, and busy city lifestyles demand cleaning services that are both thorough and time-efficient. Our apartment cleaning service is specifically designed for the modern urban dweller, whether you're a busy professional, student, or anyone who values a clean living space but lacks the time to maintain it. We understand the nuances of apartment living, from noise considerations to building regulations, and we work within these parameters to provide exceptional cleaning services that fit seamlessly into your urban lifestyle.",
    features: [
      "Efficient living room and bedroom cleaning optimized for compact spaces",
      "Galley and compact kitchen deep cleaning with space-maximizing organization",
      "Small bathroom sanitization with focus on moisture control and ventilation",
      "Balcony and terrace cleaning for outdoor urban living spaces",
      "Appliance cleaning including in-unit washers, dryers, and dishwashers",
      "Move-in and move-out cleaning services for lease transitions",
      "Studio apartment specialized cleaning for multi-functional spaces",
      "High-rise building considerations and elevator etiquette",
      "Noise-conscious cleaning schedules respecting neighbor considerations",
      "Storage optimization and organization services",
    ],
    process: [
      "Apartment layout assessment and access coordination",
      "Building management communication and compliance",
      "Efficient cleaning schedule development for urban lifestyles",
      "Compact space optimization and organization",
      "Regular maintenance planning for apartment living",
      "Lease-end cleaning preparation and coordination",
    ],
    benefits: [
      "Maximized living space through efficient organization",
      "Improved air quality in compact urban environments",
      "Stress reduction from urban living pressures",
      "Professional cleaning fitting busy city schedules",
      "Lease compliance and deposit protection",
      "Enhanced comfort in limited living space",
    ],
    price: "Starting from $120 per visit",
    duration: "2-4 hours depending on apartment size",
    image: "/595247a04200d9fdf9044bbff6881bdb.jpg",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Studio+Apartment+Cleaning",
      "/placeholder.svg?height=400&width=600&text=Compact+Kitchen+Deep+Clean",
      "/placeholder.svg?height=400&width=600&text=Urban+Balcony+Cleaning",
      "/placeholder.svg?height=400&width=600&text=High+Rise+Apartment+Service",
    ],
    equipment: [
      "Compact, efficient cleaning equipment for small spaces",
      "Quiet operation tools for apartment building consideration",
      "Multi-surface cleaning solutions for diverse apartment materials",
      "Space-saving storage and organization tools",
      "Apartment-appropriate vacuum systems",
      "Eco-friendly products safe for close-quarters living",
    ],
    beforeAfter: {
      before: "/placeholder.svg?height=300&width=400&text=Cluttered+Urban+Apartment",
      after: "/placeholder.svg?height=300&width=400&text=Organized+Clean+Apartment",
    },
    testimonials: [
      {
        name: "Amanda Foster",
        rating: 5,
        comment:
          "Perfect for my busy lifestyle! They understand apartment living and work around my schedule seamlessly.",
        location: "Downtown High-Rise",
      },
      {
        name: "James Park",
        rating: 5,
        comment: "Excellent move-out cleaning service. Got my full deposit back thanks to their thorough work.",
        location: "Midtown Apartment Complex",
      },
    ],
  },
  {
    id: "furniture-cleaning",
    title: "Professional Furniture Care",
    subtitle: "Specialized restoration and maintenance for all furniture types",
    description:
      "Expert furniture cleaning and restoration services to preserve, protect, and extend the life of your valuable furniture investments.",
    detailedDescription:
      "Furniture represents a significant investment in your home's comfort and aesthetic appeal, and proper care is essential to maintain its beauty and functionality over time. Our professional furniture cleaning service combines traditional craftsmanship with modern cleaning technology to provide comprehensive care for all types of furniture. From delicate antiques to modern upholstery, leather goods to wooden pieces, our trained specialists understand the unique requirements of different materials and construction methods. We don't just clean your furniture – we restore it, protect it, and help you maintain it for years of continued enjoyment.",
    features: [
      "Deep upholstery cleaning with fabric-specific treatment methods",
      "Professional leather furniture conditioning and restoration services",
      "Wood furniture polishing, repair, and protective treatment application",
      "Stain removal using advanced techniques and specialized products",
      "Fabric protection treatment to prevent future staining and wear",
      "Antique furniture restoration with museum-quality care standards",
      "Odor elimination and sanitization for pet and smoke affected furniture",
      "Structural repair coordination for damaged furniture pieces",
      "Seasonal furniture maintenance and protection programs",
      "Custom care plans for high-value and heirloom pieces",
    ],
    process: [
      "Detailed furniture assessment and material identification",
      "Customized treatment plan development for each piece",
      "Pre-treatment testing in inconspicuous areas",
      "Professional cleaning and restoration implementation",
      "Quality inspection and client approval process",
      "Maintenance recommendations and scheduling",
    ],
    benefits: [
      "Extended furniture lifespan and maintained value",
      "Restored appearance and improved comfort",
      "Protection against future damage and wear",
      "Healthier indoor environment through deep sanitization",
      "Professional expertise preventing damage from improper care",
      "Cost savings compared to furniture replacement",
    ],
    price: "Starting from $80 per piece",
    duration: "1-3 hours depending on furniture type and condition",
    image: "/cb297feda729bb7f9c9645a76c4761f8.jpg",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Leather+Sofa+Restoration",
      "/placeholder.svg?height=400&width=600&text=Antique+Wood+Polishing",
      "/placeholder.svg?height=400&width=600&text=Upholstery+Deep+Cleaning",
      "/placeholder.svg?height=400&width=600&text=Fabric+Protection+Treatment",
    ],
    equipment: [
      "Professional upholstery cleaning machines",
      "Specialized leather care products and tools",
      "Wood restoration and polishing equipment",
      "Stain removal and treatment solutions",
      "Fabric protection application systems",
      "Antique-safe cleaning and restoration tools",
    ],
    beforeAfter: {
      before: "/placeholder.svg?height=300&width=400&text=Worn+Furniture+Before",
      after: "/placeholder.svg?height=300&width=400&text=Restored+Furniture+After",
    },
    testimonials: [
      {
        name: "Margaret Stevens",
        rating: 5,
        comment:
          "They brought my grandmother's antique sofa back to life! The attention to detail and care was exceptional.",
        location: "Historic Home District",
      },
      {
        name: "Thomas Anderson",
        rating: 5,
        comment:
          "Professional leather cleaning service that exceeded expectations. My furniture looks brand new again.",
        location: "Executive Home",
      },
    ],
  },
]

export interface CompanyAdvantage {
  title: string
  description: string
  detailedDescription: string
  benefits: string[]
  image: string
}

export const advantages: CompanyAdvantage[] = [
  {
    title: "Expert Professional Team",
    description: "Highly trained and certified cleaning professionals with years of experience",
    detailedDescription:
      "Our team consists of carefully selected, thoroughly trained professionals who undergo continuous education in the latest cleaning techniques and safety protocols. Each team member is background-checked, insured, and committed to delivering exceptional results.",
    benefits: [
      "Certified and trained cleaning specialists",
      "Background-checked and insured staff",
      "Ongoing professional development and training",
      "Consistent team assignments for familiarity",
      "Multilingual staff for diverse client needs",
    ],
    image: "/f059a54af3822040222713d995d77ab4.jpg",
  },
  {
    title: "Eco-Friendly Solutions",
    description: "Safe, non-toxic cleaning products that protect your family and the environment",
    detailedDescription:
      "We prioritize the health of your family and our planet by using only environmentally responsible cleaning products. Our eco-friendly approach doesn't compromise on effectiveness – we achieve superior results while maintaining the highest safety standards.",
    benefits: [
      "Non-toxic, biodegradable cleaning products",
      "Safe for children, pets, and sensitive individuals",
      "Reduced environmental impact and carbon footprint",
      "HEPA filtration systems for improved air quality",
      "Green certification and sustainable practices",
    ],
    image: "/6eb2e664b866162441da1c5911bb96da.jpg",
  },
  {
    title: "Flexible Scheduling",
    description: "Convenient scheduling options that adapt to your busy lifestyle",
    detailedDescription:
      "We understand that your time is valuable, which is why we offer flexible scheduling options designed to fit seamlessly into your routine. From early morning to evening appointments, we work around your schedule to provide convenient service.",
    benefits: [
      "Same-day and emergency cleaning services",
      "Flexible appointment times including evenings and weekends",
      "Recurring service schedules tailored to your needs",
      "Easy online booking and schedule management",
      "Advance notice for any schedule changes",
    ],
    image: "/d285a7414903e9333d0d81ee7f97658d.jpg",
  },
  {
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee with comprehensive quality assurance",
    detailedDescription:
      "We stand behind our work with an unconditional satisfaction guarantee. If you're not completely satisfied with our service, we'll return to make it right at no additional cost. Your satisfaction is our top priority.",
    benefits: [
      "100% satisfaction guarantee on all services",
      "Quality control inspections after each service",
      "Free return visits if standards aren't met",
      "Comprehensive insurance coverage for peace of mind",
      "Written service agreements and clear expectations",
    ],
    image: "/0f7d002387042bb0d0dfa5df2b676d68.jpg",
  },
  {
    title: "Fully Insured & Bonded",
    description: "Complete protection and peace of mind with comprehensive insurance coverage",
    detailedDescription:
      "Your property and belongings are fully protected with our comprehensive insurance and bonding coverage. We maintain the highest levels of liability insurance and worker's compensation to ensure complete peace of mind.",
    benefits: [
      "Comprehensive liability insurance coverage",
      "Bonded staff for additional security",
      "Worker's compensation for all employees",
      "Property damage protection",
      "Professional indemnity insurance",
    ],
    image: "/2687cf738e089790b0b1358eecd117e0.jpg",
  },
  {
    title: "Transparent Pricing",
    description: "Fair, competitive pricing with no hidden fees or surprise charges",
    detailedDescription:
      "We believe in honest, transparent pricing that allows you to make informed decisions. Our detailed estimates include all costs upfront, with no hidden fees or surprise charges. You'll know exactly what to expect before we begin.",
    benefits: [
      "Detailed written estimates with no hidden costs",
      "Competitive pricing for all service levels",
      "Flexible payment options and billing schedules",
      "Volume discounts for regular service clients",
      "Price matching for comparable services",
    ],
    image: "/d7c5aaa76d3f59d2a3e9d4242cc425cd.jpg",
  },
]

export interface CleaningStep {
  step: number
  title: string
  description: string
  detailedProcess: string
  timeframe: string
  tools: string[]
}

export const cleaningMethodology: CleaningStep[] = [
  {
    step: 1,
    title: "Comprehensive Assessment",
    description: "Thorough evaluation of your space to understand specific cleaning requirements and challenges",
    detailedProcess:
      "Our certified professionals conduct a detailed walkthrough of your space, identifying specific cleaning needs, problem areas, and any special requirements. We assess surface types, furniture materials, traffic patterns, and environmental factors to develop the most effective cleaning strategy.",
    timeframe: "15-30 minutes",
    tools: ["Assessment checklist", "Digital documentation", "Material identification tools", "Measurement equipment"],
  },
  {
    step: 2,
    title: "Strategic Planning",
    description: "Development of customized cleaning plan tailored to your specific needs and preferences",
    detailedProcess:
      "Based on our assessment, we create a detailed cleaning plan that addresses your specific requirements, timeline, and budget. This includes selecting appropriate cleaning methods, products, and equipment while considering any special instructions or preferences you may have.",
    timeframe: "10-20 minutes",
    tools: ["Planning software", "Product selection guide", "Equipment checklist", "Timeline development"],
  },
  {
    step: 3,
    title: "Preparation & Setup",
    description: "Careful preparation of the area and organization of professional equipment and supplies",
    detailedProcess:
      "We prepare your space by protecting furniture and belongings, setting up our professional equipment, and organizing cleaning supplies for maximum efficiency. This includes laying protective coverings, arranging tools systematically, and ensuring proper ventilation.",
    timeframe: "20-40 minutes",
    tools: ["Protective coverings", "Professional equipment", "Eco-friendly supplies", "Safety gear"],
  },
  {
    step: 4,
    title: "Systematic Deep Cleaning",
    description: "Implementation of proven cleaning techniques using professional-grade equipment and products",
    detailedProcess:
      "Our team executes the cleaning plan using systematic, room-by-room approach. We follow established protocols that ensure thorough cleaning of all surfaces, from top to bottom, using appropriate techniques for different materials and areas. Special attention is given to high-touch surfaces and problem areas.",
    timeframe: "60-80% of total service time",
    tools: ["Professional cleaning equipment", "Specialized tools", "Eco-friendly products", "Sanitization systems"],
  },
  {
    step: 5,
    title: "Quality Inspection",
    description: "Thorough quality control inspection to ensure all areas meet our high standards",
    detailedProcess:
      "After completing the cleaning process, our team conducts a comprehensive quality inspection using our detailed checklist. We examine all cleaned areas, verify that our standards have been met, and address any areas that require additional attention.",
    timeframe: "15-25 minutes",
    tools: ["Quality checklist", "Inspection lighting", "Documentation system", "Client feedback forms"],
  },
  {
    step: 6,
    title: "Final Presentation",
    description: "Client walkthrough, final touches, and service documentation for complete satisfaction",
    detailedProcess:
      "We conduct a final walkthrough with you to ensure complete satisfaction, provide maintenance recommendations, and document the completed service. Any final touches or adjustments are made, and we provide you with care instructions and scheduling for future services.",
    timeframe: "10-15 minutes",
    tools: ["Documentation system", "Maintenance guides", "Scheduling tools", "Feedback collection"],
  },
]

export interface FurnitureTip {
  title: string
  description: string
  detailedInstructions: string
  category: string
  frequency: string
  materials: string[]
  warnings: string[]
}

export const furnitureTips: FurnitureTip[] = [
  {
    title: "Regular Dusting Techniques",
    description: "Proper dusting methods to maintain furniture appearance and prevent damage",
    detailedInstructions:
      "Use high-quality microfiber cloths to dust furniture weekly, working from top to bottom. For wood furniture, use slightly damp cloths followed by dry ones. Avoid feather dusters which can scratch surfaces. Pay special attention to carved details and crevices where dust accumulates.",
    category: "General Maintenance",
    frequency: "Weekly",
    materials: ["Microfiber cloths", "Wood polish", "Soft brushes"],
    warnings: ["Never use wet cloths on wood", "Avoid harsh chemicals", "Test products in hidden areas first"],
  },
  {
    title: "Leather Care & Conditioning",
    description: "Professional leather maintenance to preserve suppleness and prevent cracking",
    detailedInstructions:
      "Clean leather furniture monthly with specialized leather cleaner, working in small sections. Apply leather conditioner every 3-6 months to maintain suppleness. Use circular motions and allow proper drying time. Address spills immediately to prevent staining.",
    category: "Leather Care",
    frequency: "Monthly cleaning, quarterly conditioning",
    materials: ["Leather cleaner", "Leather conditioner", "Soft cloths", "Leather protection cream"],
    warnings: ["Never use water-based cleaners", "Avoid direct sunlight during treatment", "Test all products first"],
  },
  {
    title: "Wood Protection Strategies",
    description: "Comprehensive wood furniture care to prevent damage and maintain beauty",
    detailedInstructions:
      "Protect wood surfaces with coasters, placemats, and table pads. Clean spills immediately and maintain consistent humidity levels. Apply quality wood polish monthly, following grain direction. Use furniture pads under decorative items to prevent scratches.",
    category: "Wood Care",
    frequency: "Daily protection, monthly polishing",
    materials: ["Quality wood polish", "Coasters", "Table pads", "Furniture pads"],
    warnings: ["Avoid silicone-based polishes", "Don't over-polish", "Maintain stable humidity"],
  },
  {
    title: "Upholstery Maintenance",
    description: "Proper fabric care techniques to extend upholstery life and appearance",
    detailedInstructions:
      "Vacuum upholstered furniture weekly using appropriate attachments. Rotate cushions regularly for even wear. Address stains immediately with appropriate cleaning methods. Professional cleaning every 12-18 months maintains appearance and hygiene.",
    category: "Upholstery Care",
    frequency: "Weekly vacuuming, immediate stain treatment",
    materials: ["Vacuum with upholstery attachment", "Stain removal products", "Fabric protector"],
    warnings: ["Check cleaning codes before treatment", "Avoid over-wetting fabric", "Test cleaners in hidden areas"],
  },
  {
    title: "UV Protection Methods",
    description: "Protecting furniture from sun damage and fading",
    detailedInstructions:
      "Position furniture away from direct sunlight or use UV-filtering window treatments. Rotate furniture periodically to ensure even exposure. Consider UV protection sprays for fabrics and use furniture covers during peak sun hours.",
    category: "Protection",
    frequency: "Ongoing positioning, seasonal rotation",
    materials: ["UV-filtering window film", "Furniture covers", "UV protection sprays"],
    warnings: [
      "UV damage is cumulative and irreversible",
      "Some materials are more susceptible",
      "Professional assessment recommended",
    ],
  },
  {
    title: "Professional Deep Cleaning",
    description: "When and why to schedule professional furniture cleaning services",
    detailedInstructions:
      "Schedule professional cleaning annually for regular-use furniture, or every 6 months for high-traffic pieces. Professional services can address deep-set stains, odors, and wear that home care cannot handle. Combine with protective treatments for optimal results.",
    category: "Professional Service",
    frequency: "Annually or bi-annually",
    materials: ["Professional assessment", "Specialized equipment", "Commercial-grade products"],
    warnings: ["Choose certified professionals", "Verify insurance coverage", "Discuss specific concerns beforehand"],
  },
]

export interface Testimonial {
  name: string
  location: string
  service: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    location: "Downtown Business District",
    service: "Office Cleaning",
    rating: 5,
    comment:
      "HyperLend has completely transformed our office environment. The team is incredibly professional, thorough, and consistently exceeds our expectations. Our employees have noticed the difference, and client feedback has been overwhelmingly positive.",
    date: "2024-01-15",
    verified: true,
  },
  {
    name: "Michael Chen",
    location: "Tech Hub Office Complex",
    service: "Office Cleaning",
    rating: 5,
    comment:
      "Outstanding service quality! The attention to detail is remarkable, and they work seamlessly around our busy schedule. The eco-friendly products they use align perfectly with our company's sustainability values.",
    date: "2024-01-10",
    verified: true,
  },
  {
    name: "Jennifer Martinez",
    location: "Suburban Family Home",
    service: "House Cleaning",
    rating: 5,
    comment:
      "This service has been life-changing for our family! I finally have time to enjoy my home instead of constantly cleaning it. The team is trustworthy, reliable, and treats our home with the utmost care and respect.",
    date: "2024-01-08",
    verified: true,
  },
  {
    name: "David Rodriguez",
    location: "Retail Space Renovation",
    service: "Post-Renovation Cleaning",
    rating: 5,
    comment:
      "Absolutely amazing transformation! They turned our post-construction disaster into a beautiful, pristine space ready for our grand opening. The level of detail and professionalism was exceptional.",
    date: "2024-01-05",
    verified: true,
  },
  {
    name: "Amanda Foster",
    location: "Downtown High-Rise",
    service: "Apartment Cleaning",
    rating: 5,
    comment:
      "Perfect solution for my busy urban lifestyle! They understand the unique challenges of apartment living and work seamlessly around my schedule. The results are consistently excellent.",
    date: "2024-01-03",
    verified: true,
  },
  {
    name: "Margaret Stevens",
    location: "Historic Home District",
    service: "Furniture Cleaning",
    rating: 5,
    comment:
      "They brought my grandmother's antique furniture back to life! The expertise and care they showed with delicate pieces was truly exceptional. I couldn't be happier with the results.",
    date: "2023-12-28",
    verified: true,
  },
]

export interface FAQ {
  question: string
  answer: string
  category: string
}

export const faqs: FAQ[] = [
  {
    question: "What cleaning products do you use?",
    answer:
      "We use only eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. Our products are biodegradable and free from harsh chemicals while still providing superior cleaning results.",
    category: "Products & Safety",
  },
  {
    question: "Are your staff insured and bonded?",
    answer:
      "Yes, all our staff members are fully insured and bonded. We carry comprehensive liability insurance, worker's compensation, and bonding to ensure complete protection for our clients and their property.",
    category: "Insurance & Safety",
  },
  {
    question: "How do you ensure consistent quality?",
    answer:
      "We maintain quality through systematic training, detailed checklists, regular inspections, and client feedback integration. Each service includes a quality control inspection to ensure our high standards are met.",
    category: "Quality Assurance",
  },
  {
    question: "Can I customize my cleaning service?",
    answer:
      "We create customized cleaning plans based on your specific needs, preferences, and schedule. Whether you need specific areas focused on or have special requirements, we adapt our service accordingly.",
    category: "Service Customization",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "We offer a 100% satisfaction guarantee. If you're not completely satisfied with our service, we'll return within 24 hours to address any concerns at no additional cost.",
    category: "Satisfaction Guarantee",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 48 hours in advance for regular services. However, we also offer same-day and emergency cleaning services based on availability.",
    category: "Booking & Scheduling",
  },
]
