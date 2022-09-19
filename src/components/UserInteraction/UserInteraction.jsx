import './UserInteraction.css'

export function UserInteraction({ user, picture }) {
    return (
        <div className='userInteraction'>
            <div>
                <img className='follow' src={picture} alt="picture" />
            </div>
            <span><strong>{user}</strong></span>
            <span>começou a seguir você.</span>
            <button>Seguindo</button>
        </div>
    )
}