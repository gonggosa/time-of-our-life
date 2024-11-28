import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import choi from '../assets/member/choi.jpg'
import chae from '../assets/member/chae.jpg'
import kimVocal from '../assets/member/kim_vocal.jpg'
import lim from '../assets/member/lim.jpg'
import choDrum from '../assets/member/cho_drum.jpg'
import hyeong from '../assets/member/hyeong.jpg'
import lee from '../assets/member/lee.jpg'
import kimGuitar from '../assets/member/kim_guitar.jpg'
import instagramLogo from '../assets/logo/instagram.png'
import ggs from '../assets/img/main_3.png'

const Information = () => {
    const animatedItem = [useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0)];
    return (
        <div className="content information">
            <h2 {...animatedItem[0]} className="title">
                멤버 소개
            </h2>
            {/* <div {...animatedItem[1]}>
                <img src={photo} />
            </div> */}
            <div {...animatedItem[1]} className="info">
                <dl className="floor">
                    <dt><img src={ggs} /></dt>
                    <dd>
                        <div className='member'>공고사<span>#벌써3년 #한페이지가될수있게</span></div><a href='https://www.instagram.com/ggs_theperformers/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={kimVocal} /></dt>
                    <dd>
                        <div className='member'>김민주<span>#보컬 #피아노 #연구소막내탈출</span></div>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={kimGuitar} /></dt>
                    <dd>
                        <div className='member'>김하정<span>(asis) #클린이 #기린이</span><span>(tobe) #클태기 #기타 #파워코드전문</span></div>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={lee} /></dt>
                    <dd>
                        <div className='member'>이민수<span>#보컬 #직변 #boomboombass</span></div>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={lim} /></dt>
                    <dd>
                        <div className='member'>임우찬<span>#피아노 #힙찔이 #유잼을찾아서</span></div>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={hyeong} /></dt>
                    <dd>
                        <div className='member'>전형경<span>#드럼 #영상요정</span><span>#공고사최장신 #겨울이누나</span></div>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={choDrum} /></dt>
                    <dd>
                        <div className='member'>조용호<span>#드럼 #지금도막내 #앞으로도막내</span></div>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={chae} /></dt>
                    <dd>
                        <div className='member'>채수연<span>#보컬 #베이스 #장군이누나</span></div>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={choi} /></dt>
                    <dd>
                        <div className='member'>최서우<span>#클라이밍 #반70 #예비유부</span></div>
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default Information;
