import './Post.css'

//Icons
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

//Picture from user post
import Foto from '../../assets/stories/user01.png'

export function Post({image}) {
    
    return (
        <section className='post'>
            <div className='profilePost'>
                <div className='postBorderPicture'>
                    <img src={Foto} alt="post" />
                </div>
                <span><strong>Matheus</strong></span>
            </div>
            <div className='imagePost'>
                <img src={image} alt="picture from post" />
            </div>
            <div className='interactionsPost'>
                <FavoriteBorderOutlinedIcon />
                <MessageIcon />
                <SendIcon />
            </div>
            <div className='commentsPublic'>
                <SentimentSatisfiedAltIcon />
                <input type="text" name="comment" id="comment" placeholder='Adicione um comentário...' />
                <span>Publicar</span>
            </div>
        </section>
    )
}