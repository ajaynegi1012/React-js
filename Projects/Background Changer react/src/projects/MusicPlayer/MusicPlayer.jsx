import React from 'react';
import '../../assets/style/MusicPlayer.css';
import headPhoneImg from '../../assets/images/headPhone.jpeg';
import playpause from '../../assets/images/play-button.png';

function MusicPlayer() {
    return (
        <div className="container">
            <div className="left-container">
                <div className="img-container">
                    <img className='img' src={headPhoneImg} alt="img" />
                </div>
                    {/* <span className='song-track'>Song track</span> */}
                    <hr className='song-track' />
                <div className="bottom-container">
                    <div className="controller-container">
                        <span>loop</span>
                        <div className="play-pause-container">
                            <button>
                                <img src={playpause} className='play-pause' />
                            </button>
                            <button>
                                <img src={playpause} className='play-pause' />
                            </button>
                            <button>
                                <img src={playpause} className='play-pause' />
                            </button>
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