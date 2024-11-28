import React, { useRef, useEffect } from 'react';
import maker from '../assets/img/marker.png';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';

const options = {
    center: window.kakao ? new window.kakao.maps.LatLng(37.5525665, 126.9190216) : null, //지도의 중심좌표.
    level: 6
};

function Place() {
    const animatedItem = [
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0),
        useScrollFadeIn('up', 1, 0)
    ];
    const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

    useEffect(() => {
        if (!window.kakao) return () => { };
        const map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
        var markerPosition = new window.kakao.maps.LatLng(37.5525665, 126.9190216);

        const markerImage = new window.kakao.maps.MarkerImage(maker, new window.kakao.maps.Size(44, 47), {
            offset: new window.kakao.maps.Point(22, 47)
        });

        var marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
        });
        marker.setMap(map);
        map.setDraggable(true);
        map.setZoomable(false);
        // map.addControl(new window.kakao.maps.ZoomControl(), window.kakao.maps.ControlPosition.RIGHT);

        var content =
            '<div class="customoverlay">' +
            '  <a href="https://naver.me/GbcndjiS" target="_blank">' +
            '    <span class="tag">플렉스라운지</span>' +
            '  </a>' +
            '</div>';

        var position = new window.kakao.maps.LatLng(37.5525665, 126.9190216);

        new window.kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: content,
            yAnchor: 1
        });
        return () => { };
    }, []);

    return (
        <div className="content place">
            <h2 {...animatedItem[0]} className="title">
                오시는 길
            </h2>
            <div {...animatedItem[1]} className="address">
                <span>플렉스라운지</span>
                <span>서울특별시 마포구 서교동 372-5</span>
                <a href={'tel:010-2207-0100 '}>010-2207-0100</a>
            </div>
            <div {...animatedItem[2]}>
                <div className="map" ref={container}></div>
            </div>
            <div {...animatedItem[3]} className="transportation">
                <div className="transBox">
                    <div className="means">지하철</div>
                    <div className="desc">
                        합정역(2, 6호선) 3번 출구, 홍대입구역(2호선) 9번 출구
                        <br /> - 도보로 약 5분 소요
                    </div>
                </div>
                {/* <div className="transBox">
                    <div className="means">버스</div>
                    <div className="desc">강남한양수자인APT정류장(도보 10분) 3426, 402</div>
                </div>
                <div className="transBox">
                    <div className="means">자차</div>
                    <div className="desc">
                        빨간모자 쓴 주차 안내 직원을 찾아주세요
                        <br /> - 공영주차장(100대)
                        <br /> - 공터주차장(70대)
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Place;
