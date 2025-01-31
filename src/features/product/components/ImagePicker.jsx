import PropTypes from 'prop-types'
import RegisteredImage from './RegisteredImage'
import MaterialIcon from '@/components/icons/MaterialIcon'
import { useEffect, useRef } from 'react'

function ImagePicker({ images, setImages }) {
  const inputRef = useRef(null)
  const deleteImage = src => {
    const newImages = images.filter(image => image !== src)
    setImages(newImages)
  }
  useEffect(() => {
    if (images.length > 10) {
      setImages(images.slice(0, 10))
    }
  }, [images, setImages])
  return (
    <div className='flex flex-row flex-wrap items-center gap-2 my-2'>
      {images.length < 10 && (
        <div
          onClick={() => inputRef.current.click()}
          className='w-[18%] aspect-square p-2
          flex flex-col items-center justify-around rounded-lg bg-white cursor-pointer
          border border-gray-300'
        >
          <MaterialIcon
            name='photo_camera'
            filled
            size={32}
            className={'text-gray-400'}
          />
          <span
            className={`text-xs whitespace-nowrap ${
              images.length == 10 ? 'text-ddred-500' : 'text-gray-600'
            }`}
          >
            {images.length}/ 10
          </span>
        </div>
      )}
      {images.map((src, index) => (
        <RegisteredImage
          key={index}
          src={src}
          alt='preview'
          deleteFunc={() => deleteImage(src)}
        />
      ))}

      <input
        ref={inputRef}
        className='hidden'
        type='file'
        accept='image/*'
        multiple
        onChange={e => {
          const files = e.target.files
          const newImages = Array.from(files).map(file =>
            URL.createObjectURL(file),
          )
          setImages([...images, ...newImages])
        }}
      />
    </div>
  )
}

ImagePicker.propTypes = {
  images: PropTypes.array,
  setImages: PropTypes.func,
}

export default ImagePicker
