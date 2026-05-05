import React from 'react';
import '../../assets/style/MusicPlayer.css';
import headPhoneImg from '../../assets/images/headPhone.jpeg'

function MusicPlayer() {
    return (
        <div className="container">
            <div className="left-container">
                <div className="img-container">
                    <img className='img' src={headPhoneImg} alt="img" />
                </div>
                <div className="bottom-container">
                    <span>Song track</span>
                    <div className="controller-container">
                        <span>loop</span>
                        <div className="play-pause-container">
                            <button>previous</button>
                            <button>play/pause</button>
                            <button>next</button>
                        </div>
                        <span>timer</span>
                    </div>
                </div>
            </div>
            {/* <div className="right-container">right</div> */}
        </div>
    )
}

export default MusicPlayer