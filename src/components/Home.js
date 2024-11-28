import React from 'react';
import poster from '../assets/img/main_poster_3.png'
import balloons from '../assets/img/balloons.png';
import { motion, useAnimationControls } from 'framer-motion';

function Home() {
    const variants = {
        hidden: {
            rotate: 15
        },
        visible: {
            opacity: 1,
            rotate: -15,
            transition: {
                delay: 0.2,
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    };
    return (
        <div className="content home">
            {/* <div className="name">
                <div className="heart">
                    <div className="tag">
                        <p>공고사</p>
                    </div>
                    <div className="icon">
                        <motion.div initial="hidden" animate="visible" variants={variants} className="small">
                            <img src={balloons} style={{ width: '50px' }} />
                        </motion.div>
                    </div>
                    <div className="tag">
                        <p>한 페이지가 될 수 있게</p>
                    </div>
                </div>
            </div> */}
            <div className="title">
                <img src={poster} />
            </div>
            <div className="location">
                <p>
                    2024. 12. 14. 토요일 저녁 06:00 <br />
                    홍대 플렉스라운지
                </p>
            </div>
        </div>
    );
}

export default Home;
