import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import RightButton from "./RightButton.js";
import LeftButton from "./LeftButton.js";
import { useParams } from "react-router-dom";
import ViewProducDetailstHook from "../../hook/product/view-product-details-hook.js";
const ProductGallery = () => {
  // par redux on peut acces au parametre de route dans tous les page /container dans route et redux
  const { id } = useParams();
  const [item, images] = ViewProducDetailstHook(id);

  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2"
    >
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
        additionalClass="imageStyle"
      />
    </div>
  );
};

export default ProductGallery;
