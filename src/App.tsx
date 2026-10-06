import { useEffect, useState } from 'react';
import './animations.css';

function App() {
  const [showHearts, setShowHearts] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHearts(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scene-container">
      {/* Sky Background */}
      <div className="sky">
        <div className="sun"></div>
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      {/* Mountains */}
      <div className="mountains">
        <div className="mountain mountain-1"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
      </div>

      {/* Trees */}
      <div className="trees">
        <div className="tree tree-1">
          <div className="tree-top"></div>
          <div className="tree-trunk"></div>
        </div>
        <div className="tree tree-2">
          <div className="tree-top"></div>
          <div className="tree-trunk"></div>
        </div>
        <div className="tree tree-3">
          <div className="tree-top"></div>
          <div className="tree-trunk"></div>
        </div>
        <div className="tree tree-4">
          <div className="tree-top"></div>
          <div className="tree-trunk"></div>
        </div>
      </div>

      {/* Ground / Grass */}
      <div className="ground">
        <div className="grass-blade grass-1"></div>
        <div className="grass-blade grass-2"></div>
        <div className="grass-blade grass-3"></div>
        <div className="grass-blade grass-4"></div>
        <div className="grass-blade grass-5"></div>
        <div className="grass-blade grass-6"></div>
        <div className="grass-blade grass-7"></div>
        <div className="grass-blade grass-8"></div>
      </div>

      {/* Flowers */}
      <div className="flowers">
        <div className="flower flower-1">
          <div className="flower-stem"></div>
          <div className="flower-head">
            <div className="petal p1"></div>
            <div className="petal p2"></div>
            <div className="petal p3"></div>
            <div className="petal p4"></div>
            <div className="petal-center"></div>
          </div>
        </div>
        <div className="flower flower-2">
          <div className="flower-stem"></div>
          <div className="flower-head">
            <div className="petal p1"></div>
            <div className="petal p2"></div>
            <div className="petal p3"></div>
            <div className="petal p4"></div>
            <div className="petal-center"></div>
          </div>
        </div>
        <div className="flower flower-3">
          <div className="flower-stem"></div>
          <div className="flower-head">
            <div className="petal p1"></div>
            <div className="petal p2"></div>
            <div className="petal p3"></div>
            <div className="petal p4"></div>
            <div className="petal-center"></div>
          </div>
        </div>
        <div className="flower flower-4">
          <div className="flower-stem"></div>
          <div className="flower-head">
            <div className="petal p1"></div>
            <div className="petal p2"></div>
            <div className="petal p3"></div>
            <div className="petal p4"></div>
            <div className="petal-center"></div>
          </div>
        </div>
        <div className="flower flower-5">
          <div className="flower-stem"></div>
          <div className="flower-head">
            <div className="petal p1"></div>
            <div className="petal p2"></div>
            <div className="petal p3"></div>
            <div className="petal p4"></div>
            <div className="petal-center"></div>
          </div>
        </div>
      </div>

      {/* Butterflies */}
      <div className="butterfly butterfly-1">
        <div className="wing wing-left"></div>
        <div className="wing wing-right"></div>
      </div>
      <div className="butterfly butterfly-2">
        <div className="wing wing-left"></div>
        <div className="wing wing-right"></div>
      </div>
      <div className="butterfly butterfly-3">
        <div className="wing wing-left"></div>
        <div className="wing wing-right"></div>
      </div>

      {/* Falling petals */}
      <div className="petals-container">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`falling-petal petal-${i + 1}`}></div>
        ))}
      </div>

      {/* Center - Girl character */}
      <div className="girl-container">
        <div className="girl">
          {/* Hair */}
          <div className="girl-hair">
            <div className="hair-back"></div>
            <div className="hair-side-left"></div>
            <div className="hair-side-right"></div>
          </div>
          {/* Head */}
          <div className="girl-head">
            <div className="girl-face">
              <div className="eye eye-left"></div>
              <div className="eye eye-right"></div>
              <div className="blush blush-left"></div>
              <div className="blush blush-right"></div>
              <div className="mouth"></div>
            </div>
            <div className="hair-front"></div>
            <div className="hair-bangs"></div>
          </div>
          {/* Body */}
          <div className="girl-body">
            <div className="dress"></div>
            <div className="arm arm-left"></div>
            <div className="arm arm-right girl-arm-animate"></div>
          </div>
          {/* Book she's reading */}
          <div className="book">
            <div className="book-page"></div>
          </div>
        </div>
      </div>

      {/* Orbiting Guy */}
      <div className="orbit-container">
        <div className="orbit-path"></div>
        <div className="guy-orbiting">
          <div className="guy">
            {/* Hair */}
            <div className="guy-hair"></div>
            {/* Head */}
            <div className="guy-head">
              <div className="guy-face">
                <div className="guy-eye guy-eye-left"></div>
                <div className="guy-eye guy-eye-right"></div>
                <div className="guy-smile"></div>
              </div>
            </div>
            {/* Body */}
            <div className="guy-body">
              <div className="guy-shirt"></div>
              <div className="guy-arm guy-arm-left"></div>
              <div className="guy-arm guy-arm-right"></div>
            </div>
            {/* Hearts coming from guy */}
            {showHearts && (
              <>
                <div className="love-heart heart-1">♥</div>
                <div className="love-heart heart-2">♥</div>
                <div className="love-heart heart-3">♥</div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Sparkles */}
      <div className="sparkles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`sparkle sparkle-${i + 1}`}>✦</div>
        ))}
      </div>

      {/* Text overlay */}
      <div className="text-overlay">
        <h1 className="title-text">Adoring You</h1>
        <p className="subtitle-text">You're in your own world... and I'm just orbiting around you ✨</p>
      </div>

      {/* Fireflies */}
      <div className="fireflies">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`firefly firefly-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
