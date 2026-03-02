const portfolioData = {
  personal: {
    name: "Priyansh Bansal",
    tagline: "Marketing & Communications | NGO | Global Programs",
    location: "Noida, India",
    email: "priyanshbansal483@gmail.com",
    phone: "7453001894",
    linkedin: "https://linkedin.com/in/priyansh-bansal-57ba55309",
    bio: "Third-year B.Tech Computer Science student with experience in social media marketing, NGO communications, sustainability projects, and international business programs. Skilled in content strategy, digital campaigns, and stakeholder communication. Built and grew digital communities from scratch and supported international collaborations.",
    photo: "photo.JPG" // Replace with your actual photo filename
  },

  experience: [
    {
      role: "Communication Lead",
      company: "Cormis Vietnam",
      subtitle: "Sustainability & Women Empowerment NGO",
      duration: "July 2024 – Present",
      description: "Built and managed the organization's Instagram presence from zero, growing it to 200+ followers within a few months through content strategy, reels, and consistent posting. Led communication and outreach for a social enterprise working with disabled women in upcycling and sewing projects. Managed external communications, coordinated with Japanese and international partners, and represented the organization's sustainability mission through digital storytelling.",
      tags: ["Social Media", "NGO", "Content Strategy", "International"]
    },
    {
      role: "Social Media Marketing Intern",
      company: "Lahol",
      subtitle: "",
      duration: "2024",
      description: "Supported social media marketing efforts as a volunteer, contributing to digital growth and engagement strategies.",
      tags: ["Social Media", "Marketing", "Volunteer"]
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Bennett University, Greater Noida",
      duration: "2023 – Present",
    },
    {
      degree: "Senior Secondary (PCM)",
      institution: "Renaissance School, Bulandshahr",
      duration: "Completed 2023",
    }
  ],

  globalPrograms: [
    {
      name: "Synapse Program – AI & Robotics Immersion",
      location: "India & France (SEPR Lyon, UN Geneva)",
      year: "2023",
      description: "Completed an international immersion program focused on artificial intelligence, robotics, and business applications. Participated in 11 days of in-person sessions in France, including workshops at SEPR Lyon and policy discussions at the United Nations in Geneva.",
      tags: ["AI", "Robotics", "France", "UN Geneva"]
    },
    {
      name: "Business & Entrepreneurship Program",
      location: "FPT University, Vietnam",
      year: "2024",
      description: "Completed a global business and innovation program focused on entrepreneurship, startup ecosystems, and technology-driven business models. Collaborated with students from multiple countries on case studies and innovation challenges.",
      tags: ["Entrepreneurship", "Vietnam", "Cross-Cultural", "Innovation"]
    }
  ],

  skills: [
    "Social Media Marketing", "Content Strategy", "Digital Campaign Management",
    "Brand Development and Positioning", "Audience Engagement and Growth",
    "Creative Content Planning", "Visual Content Design (Canva)",
    "Community and Relationship Management", "Professional Communication",
    "Public Relations and Outreach", "Stakeholder Coordination",
    "NGO and Social Impact Marketing", "Sustainability Communication",
    "Project Management", "Market Research and Analysis",
    "Presentation and Reporting", "Google Workspace", "Basic Data Analysis",
    "Microsoft Office"
  ],

  publications: [ 
      {
       title: "Forecasting the Cosmos: Time Series Methods in Modern Astronomy",
       publication: "Medium",
       year: "2025",
       link: "https://medium.com/@priyanshbansal483/forcasting-the-cosmos-time-series-methods-in-modern-astronomy-2596c7e72369",
       description: "An exploration of how time series analysis and forecasting methods — including ARIMA, SARIMA, Fourier analysis, and machine learning models like LSTM — are revolutionising modern astronomy by helping scientists predict solar activity, satellite orbits, and celestial anomalies."
      }
  ],

  achievements: [
    // ADD YOUR ACHIEVEMENTS HERE
    // Example:
    // {
    //   title: "Winner – National Marketing Competition",
    //   year: "2024",
    //   description: "Won 1st place among 200+ teams across India."
    // }
  ],

  // 📸 PHOTO GALLERY — Add your program/travel photos here!
  // Upload your photos to GitHub (same folder as index.html), then add them below.
  // Each album is one program/trip. Add as many photos as you want per album.
  gallery: [
    {
      album: "Synapse Program – France & Geneva",
      year: "2023",
      cover: "france1.jpg", // the main cover photo for this album
      photos: [
        { file: "france1.jpg", caption: "SEPR Lyon workshops" },
        { file: "france2.jpg", caption: "United Nations, Geneva" },
        { file: "france3.png", caption: "Team sessions in France" },
        // Add more photos like this:
        // { file: "france4.jpg", caption: "Your caption here" },
      ]
    },
    {
      album: "Business Program – Vietnam",
      year: "2024",
      cover: "vietnam4.JPG",
      photos: [
        { file: "vietnam1.jpeg", caption: "FPT University classes" },
        { file: "vietnam2.JPG", caption: "International team collaborations" },
        { file: "vietnam3.JPG", caption: "Innovation challenge presentations" },
        { file: "vietnam4.JPG", caption: "cormis visit" },
// Add more photos like this:
        // { file: "vietnam4.jpg", caption: "Your caption here" },
      ]
    },
    // ADD A NEW ALBUM LIKE THIS:
    // {
    //   album: "Album Name",
    //   year: "2024",
    //   cover: "photo1.jpg",
    //   photos: [
    //     { file: "photo1.jpg", caption: "Caption" },
    //     { file: "photo2.jpg", caption: "Caption" },
    //   ]
    // },
  ],

  // 📚 BOOK REVIEWS — Add books you've read here!
  // Just copy one block and fill in your details.
  books: [
    // Example (you can delete this once you add your own):
    {
      title: "Atomic Habits",
      author: "James Clear",
      rating: 4,
      genre: "Self-Development",
      review: "A game-changing book that breaks down how tiny 1% improvements compound into remarkable results. Clear's framework of identity-based habits completely changed how I approach personal growth.",
      color: "#f97316" // orange accent color for this card
    },
    {
      title: "Sophies's World",
      author: "Jostein Gaarder",
      rating: 5,
      genre: "Philosphy",
      review: "Reading Sophie's World was more than finishing a 400+ page novel — it was an intellectual shift for me. It introduced me to centuries of philosophy, but more importantly, it forced me to question my own assumptions. I found myself agreeing with some thinkers, strongly disagreeing with others, and learning how to argue from understanding rather than impulse. Philosophers like Epicurus, Nietzsche, and Sartre especially resonated with me. What impacted me most was realizing how many systems — moral, religious, and social — are human constructions. That realization was humbling. Finishing this book didn't just expand my knowledge — it helped me rediscover my love for questioning and thinking deeply",
      color: "#f97316"
    },
    {
      title: "Annihilation of Caste",
      author: "B.R. Ambedkar",
      rating: 5,
      genre: "Politics & Society",
      review: "A challenging and intense read. Ambedkar doesn't just criticize caste — he dismantles the religious, social, and philosophical foundations that protect it. His intellectual courage and refusal to engage in hero worship stood out to me the most. While I did not agree with every aspect of his framing, engaging with his arguments strengthened my critical thinking and pushed me to separate tradition from morality. A humbling experience that reshaped how I view power, social reform, and ethical responsibility.",
      color: "#6366f1"
    },
    {
      title: "Days at the Morisaki Bookshop",
      author: "Satoshi Yagisawa",
      rating: 5,
      genre: "Fiction",
      review: "Felt like a quiet comfort. Unlike the heavy philosophical texts I've read, this book offered stillness, healing, and reflection. Its simplicity is its strength. Through small moments and the love of books, the story explores loneliness, growth, and rediscovering oneself. It reminded me that not all transformation is dramatic — sometimes it happens slowly, in silence, between pages. A gentle yet deeply meaningful read.",
      color: "#f59e0b"
    }
  ]
};
