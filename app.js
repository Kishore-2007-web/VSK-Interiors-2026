/* VSK Interiors - Interactive Application Script */
document.addEventListener('DOMContentLoaded', () => {

  // --- Portfolio Data Store with Real Project List & Fallbacks ---
  const portfolioData = [
    // --- Unsplash Curated Highlights ---
    {
      id: 1,
      title: "Luxury Acrylic Modular Kitchen",
      category: "Modular Kitchen",
      year: "2024",
      location: "Ambattur OT, Chennai",
      img: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1200&q=80",
      fallback: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1200&q=80",
      desc: "Custom high-gloss acrylic finish modular kitchen featuring Hafele tandem boxes, quartz countertop, and integrated pantry unit."
    },
    {
      id: 2,
      title: "Contemporary Minimalist Living Room",
      category: "Living Room",
      year: "2024",
      location: "Anna Nagar, Chennai",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      fallback: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      desc: "Sleek wooden panelling TV unit with ambient cove lighting, marble floor accents, and custom plush sectional sofa seating."
    },
    {
      id: 3,
      title: "Elegant Hall Interior & Dining",
      category: "Living Room",
      year: "2023",
      location: "Padi, Chennai",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      fallback: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      desc: "Custom fluted glass crockery cabinet with golden metallic trim, stone-top 6 seater dining set, and pendant light chandelier."
    },
    {
      id: 4,
      title: "Compact WFH Executive Office",
      category: "Home Office",
      year: "2023",
      location: "Korattur, Chennai",
      img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
      fallback: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
      desc: "Ergonomic work desk setup with hidden cable channels, floating bookshelves, and acoustic slate wall backdrop."
    },
    {
      id: 5,
      title: "Contemporary Walk-In Closet",
      category: "Wardrobe",
      year: "2023",
      location: "Velachery, Chennai",
      img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80",
      fallback: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80",
      desc: "Open luxury wardrobe island with velvet ring trays, bronze glass doors, and soft close Blum draw sliders."
    },

    // --- Real VSK Client Project Photos (port-proj/) ---
    {
      id: 6,
      title: "Modular Kitchen",
      category: "Modular Kitchen",
      year: "2022",
      location: "Ambattur, Chennai",
      img: "port-proj/IMG-20251013-WA0001.jpg",
      fallback: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
      desc: "Bespoke modular kitchen with soft-close tandem boxes and durable BWR marine plywood structure."
    },
    {
      id: 7,
      title: "Luxury Hall",
      category: "Living Room",
      year: "2020",
      location: "Ambattur, Chennai",
      img: "port-proj/IMG-20251013-WA0002.jpg",
      fallback: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      desc: "Spacious living hall panelling with integrated ambient profile lighting."
    },
    {
      id: 8,
      title: "Modular Kitchen",
      category: "Modular Kitchen",
      year: "2020",
      location: "Ambattur, Chennai",
      img: "port-proj/IMG-20251013-WA0003.jpg",
      fallback: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      desc: "High-gloss laminated modular kitchen cabinets with quartz stone countertop."
    },
    {
      id: 9,
      title: "Modular Kitchen",
      category: "Modular Kitchen",
      year: "2020",
      location: "Anna Nagar, Chennai",
      img: "port-proj/IMG-20251013-WA0004.jpg",
      fallback: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
      desc: "Modern parallel kitchen layout featuring smart corner storage solutions."
    },
    {
      id: 10,
      title: "Modular Kitchen",
      category: "Modular Kitchen",
      year: "2020",
      location: "Mogappair, Chennai",
      img: "port-proj/IMG-20251013-WA0005.jpg",
      fallback: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      desc: "Compact modular kitchen designed for maximum efficiency and storage."
    },
    {
      id: 11,
      title: "Modular Kitchen",
      category: "Modular Kitchen",
      year: "2020",
      location: "Korattur, Chennai",
      img: "port-proj/IMG-20251013-WA0006.jpg",
      fallback: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
      desc: "L-shaped kitchen layout with premium soft-close hardware."
    },
    {
      id: 12,
      title: "Classy Wardrobe",
      category: "Wardrobe",
      year: "2020",
      location: "Ambattur OT, Chennai",
      img: "port-proj/IMG-20251013-WA0007.jpg",
      fallback: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      desc: "Floor-to-ceiling wardrobe with dedicated locker and drawer organization."
    },
    {
      id: 13,
      title: "Stylish Kitchen",
      category: "Modular Kitchen",
      year: "2020",
      location: "Padi, Chennai",
      img: "port-proj/IMG-20251013-WA0008.jpg",
      fallback: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
      desc: "Stylish two-tone laminate kitchen with anti-scratch surfaces."
    },
    {
      id: 14,
      title: "Modular Kitchen",
      category: "Modular Kitchen",
      year: "2020",
      location: "Avadi, Chennai",
      img: "port-proj/IMG-20251013-WA0009.jpg",
      fallback: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      desc: "Modern modular setup with integrated chimney cavity and pantry unit."
    },
    {
      id: 15,
      title: "Classy Kitchen",
      category: "Modular Kitchen",
      year: "2020",
      location: "Ambattur, Chennai",
      img: "port-proj/IMG-20251013-WA0010.jpg",
      fallback: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
      desc: "Classy acrylic finish kitchen cabinets with under-cabinet LED strips."
    },
    {
      id: 16,
      title: "Modular Kitchen",
      category: "Modular Kitchen",
      year: "2020",
      location: "Mogappair West, Chennai",
      img: "port-proj/IMG-20251013-WA0011.jpg",
      fallback: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
      desc: "Ergonomic work triangle kitchen layout."
    },
    {
      id: 17,
      title: "Modular Kitchen",
      category: "Modular Kitchen",
      year: "2020",
      location: "Velachery, Chennai",
      img: "port-proj/IMG-20251013-WA0012.jpg",
      fallback: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      desc: "Waterproof BWR marine plywood modular kitchen."
    },
    {
      id: 18,
      title: "Classy Kitchen",
      category: "Modular Kitchen",
      year: "2020",
      location: "Anna Nagar, Chennai",
      img: "port-proj/IMG-20251013-WA0013.jpg",
      fallback: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
      desc: "Custom high-gloss modular kitchen cabinetry."
    },
    {
      id: 19,
      title: "Modular Kitchen",
      category: "Modular Kitchen",
      year: "2020",
      location: "Ambattur Industrial Estate, Chennai",
      img: "port-proj/IMG-20251013-WA0014.jpg",
      fallback: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
      desc: "Smart modular kitchen with pull-out spice racks."
    },
    {
      id: 20,
      title: "Modular Kitchen",
      category: "Modular Kitchen",
      year: "2020",
      location: "Korattur, Chennai",
      img: "port-proj/IMG-20251013-WA0016.jpg",
      fallback: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      desc: "Durable marine plywood kitchen with soft-close tandem drawers."
    },
    {
      id: 21,
      title: "Stylish Bed",
      category: "Bedroom",
      year: "2022",
      location: "Ambattur, Chennai",
      img: "port-proj/IMG-20251013-WA0017.jpg",
      fallback: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      desc: "Custom upholstered bedframe with integrated side tables."
    },
    {
      id: 22,
      title: "Modern Bed",
      category: "Bedroom",
      year: "2022",
      location: "Padi, Chennai",
      img: "port-proj/IMG-20251013-WA0018.jpg",
      fallback: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      desc: "Hydraulic storage bedframe with wooden slat backwall."
    },
    {
      id: 23,
      title: "Stylish Bed",
      category: "Bedroom",
      year: "2022",
      location: "Mogappair, Chennai",
      img: "port-proj/IMG-20251013-WA0020.jpg",
      fallback: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      desc: "Contemporary bedroom backwall with warm accent lighting."
    },
    {
      id: 24,
      title: "Stylish Bed",
      category: "Bedroom",
      year: "2022",
      location: "Anna Nagar, Chennai",
      img: "port-proj/IMG-20251013-WA0021.jpg",
      fallback: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      desc: "Minimalist master bedroom suite with study table."
    },
    {
      id: 25,
      title: "Stylish Wardrobes",
      category: "Wardrobe",
      year: "2020",
      location: "Ambattur OT, Chennai",
      img: "port-proj/IMG-20251013-WA0022.jpg",
      fallback: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      desc: "Custom sliding wardrobe with mirror door panel."
    },
    {
      id: 26,
      title: "Stylish Wardrobes",
      category: "Wardrobe",
      year: "2021",
      location: "Avadi, Chennai",
      img: "port-proj/IMG-20251013-WA0023.jpg",
      fallback: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      desc: "Spacious dual wardrobe set with top loft storage."
    },
    {
      id: 27,
      title: "Stylish Bedroom",
      category: "Bedroom",
      year: "2021",
      location: "Korattur, Chennai",
      img: "port-proj/IMG-20251013-WA0024.jpg",
      fallback: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      desc: "Complete bedroom transformation with study nook and wardrobe."
    }
  ];

  // --- Services Specifications Store ---
  const serviceSpecs = {
    "Modular Kitchen": {
      title: "Modular Kitchen Solutions",
      materials: "100% Waterproof BWR Plywood / HDMR",
      hardware: "Hettich / Hafele Soft-Close Tandem Boxes",
      finishOptions: "High-Gloss Acrylic, Lacquered Glass, Textured Laminate",
      warranty: "10 Years Replacement Warranty",
      timeline: "25 - 35 Days",
      highlights: ["Ergonomic Work Triangle Layout", "Corner Carousel & Spice Pullouts", "Granite / Quartz Stone Countertops"]
    },
    "Wardrobes": {
      title: "Custom Built Wardrobes",
      materials: "BWR Grade Marine Plywood",
      hardware: "Ebco / Hettich Top-Line Sliding Systems",
      finishOptions: "Laminate, PU Paint, Tinted Glass with Aluminum Profile",
      warranty: "10 Years Structural Warranty",
      timeline: "20 - 30 Days",
      highlights: ["Floor-to-Ceiling Max Storage", "Integrated Concealed LED Strip Lights", "Dedicated Lockers & Shoe Racks"]
    },
    "Living Room": {
      title: "Living Room & Entertainment Units",
      materials: "Calibrated Plywood & Charcoal Panels",
      hardware: "Concealed Push-to-Open Latches & Heavy Duty Brackets",
      finishOptions: "Veneer, Italian Marble Panelling, Fluted Louvers",
      warranty: "10 Years Warranty",
      timeline: "20 - 25 Days",
      highlights: ["Custom TV Backdrop Walls", "False Ceiling & Profile Lighting", "Custom Shoe Racks & Partition Screens"]
    },
    "Bedroom": {
      title: "Bedroom Design & Furniture",
      materials: "Commercial Plywood & Solid Teak Elements",
      hardware: "Hydraulic Bed Lifts & Soft-Close Hinges",
      finishOptions: "Upholstered Velvet Cushioning, Matte Laminate",
      warranty: "10 Years Warranty",
      timeline: "25 - 30 Days",
      highlights: ["Hydraulic Storage Bedframes", "Study Nooks & Dressing Mirrors", "Acoustic Wall Panels"]
    },
    "Home Office": {
      title: "Ergonomic Home Workspaces",
      materials: "High-Density Fiber Board & Steel Frames",
      hardware: "Wire Managers, Grommets & Monitor Arms",
      finishOptions: "Anti-Scratch Laminate & Matte Epoxy Coating",
      warranty: "5 Years Warranty",
      timeline: "15 - 20 Days",
      highlights: ["Concealed Cable Routing", "Modular Wall Shelf Racks", "Ergonomic Desk Heights"]
    },
    "Full Home Interior": {
      title: "Turnkey Full Home Interior",
      materials: "100% Tested BWR Plywood, Teak Wood, Quartz",
      hardware: "Premium European Fittings (Blum / Hafele)",
      finishOptions: "Complete End-to-End Customized Theme",
      warranty: "10 Years Comprehensive Warranty",
      timeline: "45 Days On-Time Delivery Guarantee",
      highlights: ["3D Photorealistic Renderings", "Dedicated Site Project Manager", "Post-Handover Deep Cleaning"]
    }
  };

  // --- Mobile Drawer Menu ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }

  // --- Toast Notification Engine ---
  window.showToast = function(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    toast.innerHTML = `<span class="font-bold text-lg">${icon}</span> <span>${message}</span>`;
    
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  // --- Portfolio Carousel & Filter logic ---
  const portfolioCarousel = document.getElementById('portfolio-carousel');
  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (portfolioCarousel) {
    // Populate Portfolio Items
    function renderPortfolio(filter = 'All') {
      portfolioCarousel.innerHTML = '';
      const items = filter === 'All' ? portfolioData : portfolioData.filter(item => item.category === filter);

      if (items.length === 0) {
        portfolioCarousel.innerHTML = `<div class="p-8 text-center text-gray-500 w-full">No projects found for this category.</div>`;
        return;
      }

      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-card flex-shrink-0 w-80 cursor-pointer group';
        card.setAttribute('data-id', item.id);
        card.innerHTML = `
          <div class="relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <img src="${item.img}" alt="${item.title}" class="h-96 w-full object-cover transition duration-500 group-hover:scale-105" onerror="this.onerror=null; this.src='${item.fallback}';">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end">
              <div class="p-6 text-white w-full">
                <span class="inline-block px-3 py-1 bg-amber-600/80 backdrop-blur-md text-amber-100 text-xs font-semibold rounded-full mb-2">${item.category} • ${item.year}</span>
                <p class="font-bold text-xl heading-font group-hover:text-amber-400 transition">${item.title}</p>
                <p class="text-gray-300 text-xs mt-1 flex justify-between items-center">
                  <span>📍 ${item.location}</span>
                  <span class="text-amber-400 font-semibold">View Details →</span>
                </p>
              </div>
            </div>
          </div>
        `;
        
        card.addEventListener('click', () => openLightbox(item));
        portfolioCarousel.appendChild(card);
      });
    }

    renderPortfolio();

    // Scroll Controls
    if (scrollLeftBtn && scrollRightBtn) {
      scrollLeftBtn.addEventListener('click', () => {
        portfolioCarousel.scrollBy({ left: -340, behavior: 'smooth' });
      });
      scrollRightBtn.addEventListener('click', () => {
        portfolioCarousel.scrollBy({ left: 340, behavior: 'smooth' });
      });
    }

    // Filter Buttons
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-amber-600', 'text-white');
          b.classList.add('bg-slate-900', 'text-slate-300', 'border', 'border-slate-800');
        });
        btn.classList.remove('bg-slate-900', 'text-slate-300', 'border', 'border-slate-800');
        btn.classList.add('bg-amber-600', 'text-white');
        renderPortfolio(btn.getAttribute('data-filter'));
      });
    });
  }

  // --- Lightbox Modal ---
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxLocation = document.getElementById('lightbox-location');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxEnquireBtn = document.getElementById('lightbox-enquire-btn');

  function openLightbox(item) {
    if (!lightboxModal) return;
    lightboxImage.src = item.img;
    lightboxImage.onerror = () => { lightboxImage.src = item.fallback; };
    lightboxTitle.textContent = item.title;
    lightboxCategory.textContent = item.category;
    lightboxLocation.textContent = `📍 ${item.location} (${item.year})`;
    lightboxDesc.textContent = item.desc;
    
    lightboxEnquireBtn.href = `https://wa.me/918838635463?text=Hi%20VSK%20Interiors%2C%20I'm%20interested%20in%20a%20design%20similar%20to%20"${encodeURIComponent(item.title)}"`;

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // --- Service Specification Modals ---
  const serviceCards = document.querySelectorAll('.service-card-clickable');
  const serviceModal = document.getElementById('service-modal');
  const serviceModalTitle = document.getElementById('service-modal-title');
  const serviceModalMaterials = document.getElementById('service-modal-materials');
  const serviceModalHardware = document.getElementById('service-modal-hardware');
  const serviceModalFinishes = document.getElementById('service-modal-finishes');
  const serviceModalWarranty = document.getElementById('service-modal-warranty');
  const serviceModalTimeline = document.getElementById('service-modal-timeline');
  const serviceModalHighlights = document.getElementById('service-modal-highlights');
  const serviceModalClose = document.getElementById('service-modal-close');

  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.getAttribute('data-service-name');
      const specs = serviceSpecs[name];
      if (!specs || !serviceModal) return;

      serviceModalTitle.textContent = specs.title;
      serviceModalMaterials.textContent = specs.materials;
      serviceModalHardware.textContent = specs.hardware;
      serviceModalFinishes.textContent = specs.finishOptions;
      serviceModalWarranty.textContent = specs.warranty;
      serviceModalTimeline.textContent = specs.timeline;

      serviceModalHighlights.innerHTML = specs.highlights.map(h => `<li class="flex items-center text-slate-300"><span class="text-amber-400 mr-2 font-bold">✓</span> ${h}</li>`).join('');

      serviceModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (serviceModalClose) {
    serviceModalClose.addEventListener('click', () => {
      serviceModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) {
        serviceModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }


  // --- Interactive Before/After Slider ---
  const baContainer = document.getElementById('ba-container');
  const baOverlay = document.getElementById('ba-overlay');
  const baHandle = document.getElementById('ba-handle');

  if (baContainer && baOverlay && baHandle) {
    let isDragging = false;

    function moveSlider(x) {
      const rect = baContainer.getBoundingClientRect();
      let position = x - rect.left;
      if (position < 0) position = 0;
      if (position > rect.width) position = rect.width;

      const percentage = (position / rect.width) * 100;
      baOverlay.style.width = `${percentage}%`;
      baHandle.style.left = `${percentage}%`;
    }

    baHandle.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      moveSlider(e.clientX);
    });

    // Touch Support
    baHandle.addEventListener('touchstart', () => isDragging = true);
    window.addEventListener('touchend', () => isDragging = false);
    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      moveSlider(e.touches[0].clientX);
    });
  }

  // --- Contact Form Submission ---
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value.trim();

      if (!name || !phone || !email || !service) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      // Button Spinner State
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner"></span> Processing Request...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `✓ Enquiry Submitted!`;
        submitBtn.classList.remove('from-amber-500', 'to-amber-700');
        submitBtn.classList.add('bg-emerald-600');

        showToast(`Thank you ${name}! Your consultation request has been received. Our team will contact you at ${phone} within 24 hours.`, 'success');

        // Optional WhatsApp Notification Redirect Prompt
        const waText = `Hello VSK Interiors,%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(email)}%0A*Service:* ${encodeURIComponent(service)}%0A*Message:* ${encodeURIComponent(message)}`;
        
        setTimeout(() => {
          if (confirm("Would you also like to open WhatsApp to send your enquiry directly?")) {
            window.open(`https://wa.me/918838635463?text=${waText}`, '_blank');
          }
          contactForm.reset();
          submitBtn.innerHTML = `Submit Consultation Request`;
          submitBtn.classList.remove('bg-emerald-600');
          submitBtn.classList.add('from-amber-500', 'to-amber-700');
        }, 1500);

      }, 1200);
    });
  }

  // --- WhatsApp Quick Chat Floating Widget ---
  const whatsappFloat = document.getElementById('whatsapp-float');
  const whatsappTooltip = document.getElementById('whatsapp-tooltip');
  const whatsappClose = document.getElementById('whatsapp-close');
  const whatsappPopupCard = document.getElementById('whatsapp-popup-card');
  const whatsappCardClose = document.getElementById('whatsapp-card-close');

  if (whatsappFloat && whatsappTooltip) {
    // Show tooltip on load after 2 seconds
    setTimeout(() => {
      whatsappTooltip.style.display = 'block';
      if (whatsappClose) whatsappClose.style.display = 'flex';
    }, 2000);

    if (whatsappClose) {
      whatsappClose.addEventListener('click', (e) => {
        e.stopPropagation();
        whatsappTooltip.style.display = 'none';
        whatsappClose.style.display = 'none';
      });
    }

    whatsappFloat.addEventListener('click', () => {
      if (whatsappPopupCard) {
        whatsappPopupCard.classList.toggle('hidden');
      }
    });

    if (whatsappCardClose) {
      whatsappCardClose.addEventListener('click', () => {
        whatsappPopupCard.classList.add('hidden');
      });
    }
  }

  // Auto counter animation on scroll into view
  const counterElements = document.querySelectorAll('.counter-val');
  let animatedCounters = false;

  function checkCounters() {
    if (animatedCounters) return;
    const heroSection = document.getElementById('hero-stats');
    if (!heroSection) return;

    const rect = heroSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animatedCounters = true;
      counterElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        let current = 0;
        const increment = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current + suffix;
        }, 30);
      });
    }
  }

  window.addEventListener('scroll', checkCounters);
  checkCounters();
});
