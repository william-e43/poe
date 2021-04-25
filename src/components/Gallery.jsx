import React from 'react';
import styled from 'styled-components';
import GalleryItem from './GalleryItem.jsx'

let GalleryGrid = styled.div`
  display: flex;
`
let Gallery = (props) => {
  return (
    <div>
      <GalleryGrid>
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </GalleryGrid>
    </div>
  )
}

export default Gallery;