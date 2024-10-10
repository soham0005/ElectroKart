import { useState, useEffect } from 'react';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top" style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex:'1000'
    }}>
      {isVisible && (
        <button onClick={scrollToTop} style={{
            backgroundColor:'#333',
            color:'#fff',
            padding:'10px 20px',
            fontSize:'16px',
            cursor:'pointer',
            height:'40px',
            width:'20px',
            borderRadius:'50%',
            border:'none'
        }}>
          <i className="fas fa-arrow-up" style={{
            position:'relative',
            right:'5px',
            bottom:'2px'
          }} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;