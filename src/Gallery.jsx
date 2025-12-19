function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All Our Work');
  const [visibleImages, setVisibleImages] = React.useState({});

  // Updated categories
  const categories = ['All Our Work', 'Custom Bags', 'Corner Pads', 'Ring Covers', 'Rope Spacers', 'Rope Covers'];
  
  const filteredImages = selectedCategory === 'All Our Work' 
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  // Scroll to top on mount or category change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  // Intersection Observer for lazy loading
  const imageRefs = React.useRef([]);
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleImages(prev => ({ ...prev, [entry.target.dataset.index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px', threshold: 0.1 }
    );
    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [filteredImages]);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  React.useEffect(() => {
    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightboxOpen]);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>Our Product Gallery</h2>
        <p>Browse our custom boxing equipment and ring accessories</p>
      </div>

      {/* Category Filter */}
      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openLightbox(index)}
            ref={el => imageRefs.current[index] = el}
            data-index={index}
          >
            {visibleImages[index] ? (
              <img 
                src={image.thumb} 
                alt={image.title}
                loading="lazy"
              />
            ) : (
              <div style={{width:'100%',height:'250px',background:'#222',borderRadius:'12px'}}></div>
            )}
            <div className="gallery-overlay">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
              <span className="category-tag">{image.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <button className="lightbox-prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="lightbox-next" onClick={nextImage}>
              <FaChevronRight />
            </button>
            
            <div className="lightbox-content">
              <img 
                src={filteredImages[currentImage]?.src} 
                alt={filteredImages[currentImage]?.title}
              />
              <div className="lightbox-info">
                <h3>{filteredImages[currentImage]?.title}</h3>
                <p>{filteredImages[currentImage]?.description}</p>
                <span className="lightbox-counter">
                  {currentImage + 1} of {filteredImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Gallery;