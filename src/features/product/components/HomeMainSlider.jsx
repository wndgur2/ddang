import { useState } from 'react'
import ImageSlider from './ImageSlider'

function HomeMainSlider() {
  const [images, setImages] = useState([
    'https://github.com/user-attachments/assets/78a01d76-34a8-4f5b-9ee7-cfb628ae8f95',
    'https://github.com/user-attachments/assets/53a09f28-e496-452d-9994-0f8bc77cb9b7',
    'https://github.com/user-attachments/assets/a0c34970-a588-40d2-80f9-b982ddf82154',
    'https://github.com/user-attachments/assets/691e7028-4070-4bfc-a81f-8f696980d004',
    'https://github.com/user-attachments/assets/18e9ad66-c978-47d2-a041-b7cf55118efe',
    'https://github.com/user-attachments/assets/9a64d40a-d19b-47d7-89d6-8b71c6fea61e',
  ])
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  )
}

export default HomeMainSlider
