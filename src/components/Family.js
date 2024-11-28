import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import youtubeLogo from '../assets/logo/youtube.png'
import instaLogo from '../assets/logo/instagram.png'

const Family = () => {
    const animatedItem = [
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        // useScrollFadeIn('up', 1, 0)
    ];
    return (
        <div className="content family">
            <div>
                <div>
                    <div {...animatedItem[0]} className="together">
                        초대 영상
                    </div>
                    <div>
                        <div {...animatedItem[1]}>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/dSVUHPFLvm4?si=BZnZ8zy_70UE7ZcB" title="공연이 고픈 사람들 3번째 이야기 Teaser" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div {...animatedItem[2]} className="love">
                            <a href="https://www.youtube.com/channel/UCtjraGBbxmEao9kWmcopVFg/featured">
                                <img alt="youtube-map" className="map-icon" id="youtube-logo" src={youtubeLogo} />
                            </a>
                            {/* <a href="https://www.instagram.com/ggs_theperformers?igsh=MWkxaDI3ZzE4ejZ2aA==">
                                <img alt="instagram-image" className="map-icon" id="instagram-logo" src={instaLogo} />
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Family;
