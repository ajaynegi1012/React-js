import React from 'react';
import '../../assets/style/MusicPlayer.css';
import headPhoneImg from '../../assets/images/headPhone.jpeg';
import previousIcon from '../../assets/images/previous.png';
import playIcon from '../../assets/images/play-button.png';
import nextIcon from '../../assets/images/next.png';
import pauseIcon from '../../assets/images/pauseBtn.png';
import loopIcon from '../../assets/images/loop.png';
import clockIcon from '../../assets/images/clock.png';

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
                        <span>
                            <img src={loopIcon} className='media-controls' />
                        </span>
                        <div className="play-pause-container">
                            <button>
                                <img src={previousIcon} id='previous-btn' className='media-controls' />
                            </button>
                            <button>
                                {
                                    ""
                                        ?
                                        <img src={playIcon} id='playIcon' className='media-controls' />
                                        :
                                        <img src={pauseIcon} id='pauseIcon' className='media-controls' />
                                }
                            </button>
                            <button>
                                <img src={nextIcon} className='media-controls' />
                            </button>
                        </div>
                        <span><img src={clockIcon} className='media-controls' /></span>
                    </div>
                </div>
            </div>
            {/* <div className="right-container">right</div> */}
        </div>
    )
}

export default MusicPlayer