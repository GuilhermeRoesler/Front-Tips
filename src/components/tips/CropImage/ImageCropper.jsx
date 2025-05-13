import React, { useState, useRef } from 'react'
import ReactCrop, { makeAspectCrop, centerCrop, convertToPixelCrop } from 'react-image-crop'
import setCanvasPreview from './setCanvasPreview'

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

const ImageCropper = () => {
    const [imgSrc, setImgSrc] = useState('')
    const [crop, setCrop] = useState()
    const [error, setError] = useState('')
    const imgRef = useRef(null)
    const previewCanvasRef = useRef(null)

    const handleChange = (e) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        console.log('o')
        reader.addEventListener("load", () => {
            const imageElement = new Image();
            const imageUrl = reader.result?.toString() || ''
            imageElement.src = imageUrl

            imageElement.onload = (e) => {
                if (error) setError('')
                const { naturalWidth, naturalHeight } = e.currentTarget
                if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
                    setError('Image must be at least 150x150px')
                    return setImgSrc('')

                }
            }

            setImgSrc(imageUrl)
        })
        reader.readAsDataURL(file)
    }

    const onImageLoad = (e) => {
        const { width, height } = e.currentTarget
        const cropWidthInPercent = (MIN_DIMENSION / width) * 100

        const crop = makeAspectCrop(
            {
                unit: '%',
                width: cropWidthInPercent,
            },
            ASPECT_RATIO,
            width,
            height
        );
        const centeredCrop = centerCrop(crop, width, height)
        setCrop(centeredCrop)
    }

    return (
        <>
            <label className='ImageCropper'>
                <span>Choose profile photo</span>
                <input type="file" accept='image/*' onChange={handleChange} />
            </label>
            {error && <p style={{ color: '#F87171' }}>{error}</p>}
            {imgSrc &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ReactCrop
                        crop={crop}
                        onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                        circularCrop
                        keepSelection
                        aspect={ASPECT_RATIO}
                        minWidth={MIN_DIMENSION}
                    >
                        <img ref={imgRef} src={imgSrc} alt="Crop Image" style={{ maxHeight: '70vh' }} onLoad={onImageLoad} />
                    </ReactCrop>
                    <button
                        onClick={() => setCanvasPreview(
                            imgRef.current,
                            previewCanvasRef.current,
                            convertToPixelCrop(crop, imgRef.current.width, imgRef.current.height))}
                        style={{ backgroundColor: '#0EA5E9', padding: '1rem' }}
                    >Crop Image</button>
                </div>
            }
            {crop &&
                <canvas ref={previewCanvasRef} style={{ border: '1px solid black', objectFit: 'contain', width: 150, height: 150 }} />
            }
        </>
    )
}

export default ImageCropper