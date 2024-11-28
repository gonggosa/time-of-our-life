import '../PlayList.css';
import React, { useState } from 'react';

import useScrollFadeIn from '..//hooks/useScrollFadeIn';


const PlayList = () => {
    const SECTION1 = [{ title: 'Classic', singer: '선우정아', song: 'classic' }, { title: 'Fly away', singer: '권진아', song: 'flyAway' }, { title: 'Rewrite The Stars', singer: 'Zac Efron & Zendaya', song: 'rewrite' }, { title: '만남은 쉽고 이별은 어려워', singer: '베이식', song: 'meet' }, { title: 'Destiny', singer: 'SURL(설)', song: 'destiny' }, { title: '맹그로브', singer: '윤하', song: 'mangrove' }, { title: 'Sherlock', singer: '터치드', song: 'sherlock' }, { title: 'Winter Wonderland', singer: '제이레빗', song: 'winter' }]
    const SECTION2 = [{ title: 'Renegades', singer: 'ONE OK ROCK', song: 'renegades' }, { title: '얼음요새', singer: '터치드', song: 'alive' }, { title: 'Drowning', singer: 'WOODZ', song: 'drowning' }, { title: 'Rising Sun', singer: '카디(KARDI)', song: 'rising' }, { title: '호우주의', singer: '조광일', song: 'rain' }, { title: 'Stand Up!', singer: '터치드', song: 'standup' }, { title: '한 페이지가 될 수 있게', singer: 'DAY6', song: 'time' }]


    const animatedItem = [useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0)];

    const [section, secSection] = useState(1);

    function playList() {
        window.location.href = section === 1 ? 'https://youtube.com/playlist?list=PLUum4CXJb9mBP0cwbQfEVgTjTR-w2WhK2&si=XZktu_rutveNlphA' : "https://youtube.com/playlist?list=PLUum4CXJb9mD1cwngBRwB4bQu-wcEuwE_&si=heOc4xI9D8UmrF8K";
    }

    return (
        <div className='content playList'><h2 {...animatedItem[0]} className="title">공연 곡 리스트</h2>
            <div {...animatedItem[1]} className="box__outside">
                <div className="container__status-bar margin">
                    <h1>{section}부 Playlist</h1>
                    <div className="empty"></div>
                </div>
                <div className="container__album margin">
                    <div className="container__album-photo">
                    </div>
                    <div className="container__album-name">
                        <h1>한 페이지가 될 수 있게</h1>
                        <h5>by 공연이 고픈 사람들</h5>
                    </div>
                </div>
                <div className="container__functions margin">
                    <div className="btn__play" onClick={playList}>
                        <i className="fas fa-play"></i>
                        <h2>Play</h2>
                    </div>
                    <div className={'btn__heart ' + (section === 1 ? 'active' : '')} onClick={() => secSection(1)}>
                        <h2>1부</h2>
                    </div>
                    <div className={"btn__plus " + (section === 2 ? 'active' : '')} onClick={() => secSection(2)}>
                        <h2>2부</h2>
                    </div>
                </div>
                <div className="container__list margin">
                    {(section === 1 ? SECTION1 : SECTION2).map((music, idx) => {
                        console.log()
                        return (<div className="container__music-box" key={idx}>
                            <div className={`box__color ${music.song}`}></div>
                            <div className="container__detail">
                                <h2>{music.title}</h2>
                                <span>{music.singer}</span>
                            </div>
                        </div>)
                    })}
                    {/* <div className="container__music-box">
                        <div className="box__color"></div>
                        <div className="container__detail">
                            <h2>Falling Slowly</h2>
                            <span>Glen Hansard ⋅ Once</span>
                        </div>
                    </div>
                    <div className="container__music-box">
                        <div className="box__color"></div>
                        <div className="container__detail">
                            <h2>I Feel Love</h2>
                            <span>Sam Smith</span>
                        </div>
                    </div>
                    <div className="container__music-box">
                        <div className="box__color"></div>
                        <div className="container__detail">
                            <h2>Smalltown Boy</h2>
                            <span>Bronski Beat ⋅ 120 BPM</span>
                        </div>
                    </div>
                    <div className="container__music-box">
                        <div className="box__color"></div>
                        <div className="container__detail">
                            <h2>I'm so tired...</h2>
                            <span>Lauv & Troye Sivan</span>
                        </div>
                    </div> */}
                </div>
            </div></div>)
}

export default PlayList;