import { useEffect, useState } from "react";

export function useImageLoaded(initImageUrl: string) {
  const [currentImage, setCurrentImage] = useState(initImageUrl);
  const defaultImage = "https://demofree.sirv.com/nope-not-here.jpg";

  useEffect(() => {
    function testImage() {
      const imageDom = new Image(); // create new image object
      imageDom.onerror = () => {
        // if error - execute.
        setCurrentImage(defaultImage);
      };
      imageDom.src = currentImage; // loading image...
    }
    
    testImage();
  }, []);

  return [currentImage];
}
