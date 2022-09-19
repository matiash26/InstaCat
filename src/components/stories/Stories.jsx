import './Stories.css'
export function Stories({storiesImg, username}) {
    return (
        <div className="storiesUser">
            <div className='borderStories'>
                <img src={storiesImg} alt="stories" />
            </div>
            <p>{username}</p>
        </div>
    )
}