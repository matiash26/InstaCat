import React, { useContext, useState, useEffect } from 'react';
import './Home.css'

//Icones
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//image Stories
import user01 from '../../assets/stories/user01.png'
import user02 from '../../assets/stories/user02.png'
import user03 from '../../assets/stories/user03.png'
import user04 from '../../assets/stories/user04.png'
import user05 from '../../assets/stories/user05.png'
import user06 from '../../assets/stories/user06.png'
import user07 from '../../assets/stories/user07.png'

//Componentes
import { Stories } from '../../components/stories/Stories'
import { Post } from '../../components/Post/Post'

//Contexts
import { PublicationContext } from '../../components/contexts/PublicationContext'

export function Home() {
    const { imageContext } = useContext(PublicationContext)
    const [image, setImage] = useState([]);

    useEffect(() => {
        let storage = localStorage.getItem('posts') || '[]'
        setImage(JSON.parse(storage))
    }, [imageContext])
    
    return (
        <main>
            <section className='storiesContainer'>
                <button><ArrowBackIosIcon /></button>
                <div className="storiesContent">
                    <div className='stories'>
                        <Stories storiesImg={user01} username='Cremildo' />
                        <Stories storiesImg={user02} username='Donizete' />
                        <Stories storiesImg={user03} username='Amando' />
                        <Stories storiesImg={user04} username='Amandinha' />
                        <Stories storiesImg={user05} username='Roberta' />
                        <Stories storiesImg={user06} username='Romântico' />
                        <Stories storiesImg={user07} username='MeninoNey' />
                    </div>
                </div>
                <button><ArrowForwardIosIcon /></button>
            </section>
            {
                image.map((e, x) => <Post key={x} image={e} />)
            }
        </main>
    )
}