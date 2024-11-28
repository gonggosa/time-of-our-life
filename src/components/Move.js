import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import encore from '../assets/img/encore.png';
import camera from '../assets/img/camera.png';
import peaple from '../assets/img/people.png';
import one from '../assets/img/one.png';
import two from '../assets/img/two.png';
import freeTime from '../assets/img/free_time.png'

const Information = () => {
    const animatedItem = useScrollFadeIn('up', 1, 0);
    return (
        <div {...animatedItem} className="content move">
            <h2 className="title">시간별 안내</h2>
            <div className="info">
                <div className="boxWrap">
                    <div className="box start"></div>
                    <div className="box">
                        <img src={peaple}></img>
                        <div>
                            입장 완료
                        </div>
                    </div>
                    <div className="box">
                        <img src={one}></img>
                        <div>
                            1부 시작
                        </div>
                    </div>
                    <div className="box">
                        <img className="open" src={freeTime}></img>
                        <div>
                            쉬는 시간
                        </div>
                    </div>
                    <div className="box last"></div>
                </div>
                <div className="boxWrap grid">
                    <div className="box start"></div>
                    <div className="box">
                        <div className="top">
                            <div className="time">~18:00</div>
                        </div>
                        <div className="bottom"></div>
                    </div>
                    <div className="box">
                        <div className="time">18:00</div>
                        {/* <img src={groom}></img>
                        <div>
                            로비<span>(3층)</span>
                        </div> */}
                    </div>
                    <div className="box">
                        <div className="time">18:50</div>
                    </div>
                    <div className="box last"></div>
                </div>
                <div className="boxWrap">
                    <div className="box start"></div>
                    <div className="box">
                        <div className="time">20:30</div>
                        <img src={camera}></img>
                        <div>
                            사진 촬영
                        </div>
                    </div>
                    <div className="box">
                        <div className="time">20:00</div>
                        <img className="open" src={encore}></img>
                        <div>
                            앵콜~???
                        </div>
                    </div>
                    <div className="box">
                        <div className="time">19:00</div>
                        <img src={two}></img>
                        <div>
                            2부 시작
                        </div>
                    </div>
                    <div className="box last"></div>
                </div>
                <div className="ref" align="left" vertical-align="middle">
                    <div className="route">
                        <div>공연 시작 전에 착석 부탁드립니다.</div>
                    </div>
                    {/* <div className="route">
                        <div>식사 먼저 하시는 분들은 4층을 이용해주세요</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Information;
