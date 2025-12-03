import React, { useState } from "react";
import "./Slider.scss";

function Slider({ images = [] }) {
          const [currentImage, setCurrentImage] = useState(images[0]);

          return (
                    <div className="Slider">
                              <div className="BigImage">
                                        <img src={currentImage} alt="Main" />
                              </div>

                              <div className="SmallImages">
                                        {images.map((img, index) => (
                                                  <div
                                                            className="smallImage"
                                                            key={index}
                                                            onClick={() => setCurrentImage(img)}
                                                  >
                                                            <img src={img} alt={`Small ${index}`} />
                                                  </div>
                                        ))}
                              </div>
                    </div>
          );
}

export default Slider;
