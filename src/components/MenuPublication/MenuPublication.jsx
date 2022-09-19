import React, { useEffect, useState, useContext } from 'react';
import './MenuPublication.css'

//Modal image
import picture from '../../assets/MenuPublication/picture.png'

//import Context
import { PublicationContext } from '../contexts/PublicationContext'

export function MenuPublication() {
    const { getImage } = useContext(PublicationContext);
    const [image, setImage] = useState()

    let storage = localStorage.getItem('posts') || '[]'
    storage = JSON.parse(storage)

    function menuPostCreateClose() {
        document.querySelector('.modal_Upload').style.display = 'none';
    }
    function openUploadFile() {
        document.querySelector('#fileUpload').click()
    }

    useEffect(() => {
        let reader = new FileReader();
        if (image) {
            reader.readAsDataURL(image);
            reader.onload = () => {
                storage.push(reader.result)
                const size = storage.reduce((accumulate, value) => {
                    return accumulate += value.length
                }, 0)
                if (size <= 5300000) {
                    console.log(size)
                    localStorage.setItem('posts', JSON.stringify(storage))
                    getImage(storage)
                } else {
                    alert('O navegador Atingiu o limite máximo de 5mb, delete o localstorage')
                }
            }
        }
    }, [image])

    return (
        <div className='modal_Upload' onDoubleClick={menuPostCreateClose}>
            <div className='MenuPublication'>
                <div className='titulo'><h3>Criar nova publicação</h3></div>
                <div className='upload'>
                    <img src={picture} alt='picture' />
                    <p>Arraste as fotos e os vídeos aqui </p>
                    <button type='file' name='uploadFile' id='uploadFile' onClick={openUploadFile}>Selecionar do computador</button>
                    <input type='file' name='file' id='fileUpload' onChange={(e) => setImage(e.target.files[0])} />
                </div>
            </div>
        </div>
    )
}