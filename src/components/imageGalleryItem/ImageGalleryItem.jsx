// import React from 'react';
// import styles from './ImageGalleryItem.module.css';

// export const ImageGalleryItem = ({ url, tags, id, setOpenModal }) => {
//   const handleOpenModal = () => {
//     setOpenModal(url);
//   };

//   return (
//     <li key={id} className={styles.ImageGalleryItem} onClick={handleOpenModal}>
//       <img className={styles.ImageGalleryItemImage} src={url} alt={tags} />
//     </li>
//   );
// };



// ImageGalleryItem.js
import React from 'react';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ url, tags, id, handleOpenModal }) => {
  const handleClick = () => {
    handleOpenModal(url);
  };

  return (
    <li key={id} className={styles.ImageGalleryItem} onClick={handleClick}>
      <img className={styles.ImageGalleryItemImage} src={url} alt={tags} />
    </li>
  );
};
