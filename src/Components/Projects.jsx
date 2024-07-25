import React from "react";
import "../styles/Projects.css";
import {Link} from 'react-scroll';
import {
    SiUnity,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAffinitydesigner,
    SiFmod,
    SiFigma,
    SiAbletonlive,
    SiBlender,
} from 'react-icons/si'
import imageIcon from "../images/image-icon.png";
import videoIcon from "../images/video-icon.png";
import iRollPreview from "../images/i-roll.mp4";
import LABPreview from "../images/lab.mp4";
import BoTPreview from "../images/bangontime.mp4";
import NostalgitrippenPreview from "../images/nostalgitrippen.mp4";
import IntoOrbitPreview from "../images/intoorbit.mp4";
import LandscapesPreview from "../images/landscapes.mp4";
import HoverVideoPlayer from 'react-hover-video-player';

import BoT from './BoT';
import IRoll from './IRoll';
import Nostalgitrippen from './Nostalgitrippen';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const handleMouseEnter = e => {
    e.currentTarget.play();
}
const handleMouseOut = e => {
    e.currentTarget.pause();
}
const Projects = () => {
    return (
        <div className="projects">
            <h2>This is my portfolio.</h2>
            <div>
                <div className="project">
                    <div className="preview">
                        <h3>Impact Unified</h3>
                        <div className="preview-background"/>
                        <div className="video_holder">
                            <HoverVideoPlayer
                                className="video_holder_video"
                                videoSrc={BoTPreview}
                                overlayTransitionDuration={250}
                                pausedOverlay={
                                    <div className="preview-overlay">
                                        <img src={videoIcon}/>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <h3>Bang On Time</h3>
                    <p>Place your cards in the correct order, in this fast-paced, competitive mobile game.</p>
                    <BoT/>
                    <div className="software">
                        <div>
                            <SiUnity/>
                            <p>Unity</p>
                        </div>
                        <div>
                            <SiAffinitydesigner/>
                            <p>Designer</p>
                        </div>
                        <div>
                            <SiFigma/>
                            <p>Figma</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="preview">
                        <h3>Tokoro</h3>
                        <div className="preview-background"/>
                        <div className="video_holder">
                            <a href="#">
                            <HoverVideoPlayer
                                className="video_holder_video"
                                videoSrc={iRollPreview}
                                overlayTransitionDuration={250}
                                pausedOverlay={
                                    <div className="preview-overlay">
                                        <img src={videoIcon}/>
                                    </div>
                                }
                            />
                            </a>
                        </div>
                    </div>
                    <Link href="#">
                        <h3><a>iRoll</a></h3>
                    </Link>
                    <p>Get to the goal by avoiding obstacles. Find the quickest route and beat your own record!</p>
                    <IRoll/>
                    <div className="software">
                        <div>
                            <SiUnity/>
                            <p>Unity</p>
                        </div>
                        <div>
                            <SiBlender/>
                            <p>Blender</p>
                        </div>
                        <div>
                            <SiAffinitydesigner/>
                            <p>Designer</p>
                        </div>
                        <div>
                            <SiAbletonlive/>
                            <p>Live</p>
                        </div>
                        <div>
                            <SiFmod/>
                            <p>FMOD</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="preview">
                        <h3>Nostalgitrippen AB</h3>
                        <div className="preview-background"/>
                        <div className="video_holder">
                            <HoverVideoPlayer
                                className="video_holder_video"
                                videoSrc={NostalgitrippenPreview}
                                overlayTransitionDuration={250}
                                pausedOverlay={
                                    <div className="preview-overlay">
                                        <img src={videoIcon}/>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <h3>Nostalgitrippen</h3>
                    <p>Ett ordspel och bokstavspussel för dig som älskar nostalgi! Med inslag av lite quiz och
                        trivia.</p>
                    <Nostalgitrippen/>
                    <div className="software">
                        <div>
                            <SiFigma/>
                            <p>Figma</p>
                        </div>
                        <div>
                            <SiBlender/>
                            <p>Blender</p>
                        </div>
                    </div>
                </div>
                {/*<div className="project">*/}
                {/*    <div className="preview">*/}
                {/*        <h3>Tokoro</h3>*/}
                {/*        <div className="preview-background"/>*/}
                {/*        <div className="video_holder">*/}
                {/*            <HoverVideoPlayer*/}
                {/*                className="video_holder_video"*/}
                {/*                videoSrc={LABPreview}*/}
                {/*                overlayTransitionDuration={250}*/}
                {/*                pausedOverlay={*/}
                {/*                    <div className="preview-overlay">*/}
                {/*                        <img src={videoIcon}/>*/}
                {/*                    </div>*/}
                {/*                }*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <h3>LAB</h3>*/}
                {/*    <p>Guide the ball home by strategically placing objects. Win, collect and craft cards!</p>*/}
                {/*    <div className="software">*/}
                {/*        <div>*/}
                {/*            <SiUnity/>*/}
                {/*            <p>Unity</p>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <SiBlender/>*/}
                {/*            <p>Blender</p>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <SiAdobephotoshop/>*/}
                {/*            <p>Photoshop</p>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <SiAdobeillustrator/>*/}
                {/*            <p>Illustrator</p>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <SiAbletonlive/>*/}
                {/*            <p>Live</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="project">
                    <div className="preview">
                        <h3>Collab</h3>
                        <div className="preview-background"/>
                        <div className="video_holder">
                            <HoverVideoPlayer
                                className="video_holder_video"
                                videoSrc={IntoOrbitPreview}
                                overlayTransitionDuration={250}
                                pausedOverlay={
                                    <div className="preview-overlay">
                                        <img src={videoIcon}/>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <h3>Into Orbit</h3>
                    <p>Carefully launch your rocket ship into the orbit of a nearby planet. How far can you go?</p>
                    <div className="software">
                        <div>
                            <SiUnity/>
                            <p>Unity</p>
                        </div>
                        <div>
                            <SiAdobephotoshop/>
                            <p>Photoshop</p>
                        </div>
                        <div>
                            <SiAdobeillustrator/>
                            <p>Illustrator</p>
                        </div>
                        <div>
                            <SiAbletonlive/>
                            <p>Live</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="preview">
                        <h3>Personal</h3>
                        <div className="preview-background"/>
                        <div className="video_holder">
                            <HoverVideoPlayer
                                className="video_holder_video"
                                videoSrc={LandscapesPreview}
                                overlayTransitionDuration={500}
                                pausedOverlay={
                                    <div className="preview-overlay">
                                        <img src={imageIcon}/>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <h3>Landscapes</h3>
                    <p>A collection of landscape concept art pieces for game environments.</p>
                    <div className="software">
                        <div>
                            <svg viewBox="0 0 128 124" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M120.505 24.8405C119.585 23.4531 118.665 22.1979 117.678 20.9426C116.692 19.6874 115.64 18.4322 114.457 17.3751C113.34 16.186 112.222 15.1289 110.907 14.0719C109.724 13.0148 108.409 12.0899 107.094 11.0989C105.122 9.71157 103.084 8.45633 100.98 7.26716C98.8762 6.07799 96.641 5.08701 94.4715 4.22816C92.2363 3.30325 89.9353 2.57654 87.6343 1.98195C85.3333 1.38737 82.9666 0.924908 80.5999 0.594582C79.4165 0.462452 78.1674 0.330328 77.0498 0.198197C75.8665 0.0660671 74.6831 0 73.4997 0C72.3164 0 71.0673 -6.04943e-06 69.8839 0.0660591C68.7006 0.132124 67.4515 0.198189 66.2681 0.396385C65.0848 0.528515 63.8356 0.726712 62.6523 0.924908C61.4689 1.1231 60.2856 1.38736 59.1022 1.71769C57.9189 2.04801 56.7355 2.37834 55.5521 2.70866C54.3688 3.03899 53.2512 3.50145 52.0678 3.96391L17.5532 18.1018C16.6328 18.4982 15.6466 18.9607 14.792 19.3571C13.8716 19.8195 13.0827 20.282 12.228 20.8766C11.3734 21.4051 10.5845 21.9997 9.86133 22.5943C9.13816 23.1889 8.415 23.7834 7.75758 24.5102C6.77145 25.5011 5.85105 26.4921 4.9964 27.6152C4.14176 28.7383 3.48434 29.8614 2.82692 31.0506C2.16949 32.2398 1.64355 33.495 1.2491 34.7502C0.854644 36.0055 0.59168 37.3268 0.328711 38.582C0.197227 39.2427 0.197225 39.9033 0.131482 40.564C-2.00825e-06 41.2246 0 41.9513 0 42.612C0 43.2727 0.0657402 43.9994 0.131482 44.66C0.197225 45.3207 0.262973 46.0474 0.394457 46.708C0.525941 47.3687 0.723166 48.0293 0.85465 48.69C1.05188 49.3506 1.2491 50.0774 1.51207 50.738C1.77504 51.3987 2.03801 52.1254 2.36672 52.72C2.69543 53.3806 3.02414 54.0413 3.35285 54.7019C3.81304 55.6268 4.40472 56.4196 4.9964 57.2124C5.58808 58.0052 6.17976 58.798 6.90293 59.5907C7.56035 60.3174 8.28351 61.0442 9.00668 61.7709C9.72984 62.4315 10.5187 63.0922 11.3077 63.7528C12.491 64.6777 13.8059 65.5366 15.1207 66.2633C16.4355 66.99 17.8819 67.7167 19.2625 68.2453C20.7088 68.8399 22.1551 69.3023 23.6672 69.6987C25.1793 70.0951 26.6913 70.3594 28.2691 70.6236C29.058 70.7557 29.8469 70.7557 30.6359 70.8218C31.4248 70.8879 32.2137 70.8879 33.0026 70.8879C33.7915 70.8879 34.5804 70.8218 35.3693 70.7557C36.1582 70.6897 36.9471 70.6236 37.736 70.4915C38.5249 70.3593 39.3138 70.2272 40.1027 70.0951C40.8916 69.963 41.6805 69.6987 42.4037 69.5005C43.1926 69.3023 43.9158 69.038 44.6389 68.7738C45.3621 68.5095 46.0853 68.1792 46.8742 67.8489L77.3785 54.3716C78.7591 53.777 79.8767 52.9182 80.7314 51.9932C81.586 51.0683 82.2435 49.9452 82.6379 48.69C83.0324 47.5008 83.0981 46.2456 82.9666 44.9903C82.8351 43.7351 82.3092 42.4799 81.586 41.2246C80.8629 40.0355 79.8767 38.9784 78.6934 38.1856C77.51 37.3268 76.2609 36.7322 74.8803 36.2697C73.4997 35.8734 72.1192 35.6752 70.6728 35.7412C69.2265 35.8073 67.8459 36.1376 66.4653 36.6661L36.2897 49.747C35.961 49.8792 35.698 49.9452 35.3693 50.0774C35.0406 50.2095 34.7776 50.2095 34.4489 50.3416C34.1202 50.4077 33.8572 50.4737 33.5285 50.4737C33.1998 50.5398 32.9368 50.5398 32.6081 50.5398C32.1479 50.5398 31.6877 50.5398 31.2275 50.4737C30.7673 50.4077 30.3071 50.3416 29.9127 50.2755C29.5182 50.1434 28.9923 50.0774 28.5978 49.8792C28.2034 49.747 27.7432 49.5488 27.4145 49.3506C27.2173 49.2185 27.02 49.1524 26.8228 49.0203C26.6256 48.8882 26.4284 48.8221 26.2311 48.6239C26.0996 48.4918 25.8367 48.3597 25.7052 48.2275C25.5737 48.0954 25.3765 47.9633 25.245 47.8311C25.1135 47.699 24.9163 47.5008 24.7848 47.3687C24.6533 47.2366 24.4561 47.0384 24.3903 46.9062C24.2589 46.7741 24.1274 46.5098 23.9959 46.3777C23.8644 46.2456 23.7329 45.9813 23.6014 45.7831C23.47 45.5189 23.3385 45.2546 23.207 44.9903C23.0755 44.7261 23.0098 44.4618 22.8783 44.1976C22.7468 43.9333 22.7468 43.669 22.681 43.4048C22.6153 43.1405 22.5496 42.8763 22.5496 42.612C22.4838 42.2156 22.4838 41.8192 22.5496 41.4228C22.6153 41.0264 22.681 40.63 22.7468 40.2337C22.8783 39.8373 22.944 39.5069 23.1412 39.1105C23.3385 38.7142 23.5357 38.4499 23.7329 38.0535C23.8644 37.9214 23.9301 37.7232 24.1274 37.591C24.2589 37.4589 24.3903 37.2607 24.5218 37.1286C24.6533 36.9965 24.7848 36.7983 24.9163 36.7322C25.0478 36.6001 25.245 36.4679 25.3765 36.3358C25.508 36.2037 25.7052 36.0715 25.8367 35.9394C25.9682 35.8073 26.2311 35.6752 26.3626 35.543C26.5598 35.4109 26.7571 35.3448 26.9543 35.2127C27.1515 35.0806 27.3487 35.0145 27.6117 34.9484L62.3236 20.3481C63.244 19.9517 64.0986 19.6874 65.019 19.4231C65.9394 19.1589 66.794 18.8946 67.7802 18.6964C68.7006 18.4982 69.621 18.3 70.5414 18.234C71.4617 18.1018 72.3821 18.1018 73.3025 18.0358C74.6831 17.9697 76.0637 18.0358 77.4443 18.1679C78.8249 18.3 80.2054 18.4982 81.586 18.8286C82.9666 19.1589 84.3472 19.4892 85.6621 19.9517C86.9769 20.4141 88.226 20.9426 89.4751 21.5372C90.1325 21.8675 90.6584 22.1979 91.3159 22.4621C91.9076 22.8585 92.4992 23.1228 93.0909 23.5852C93.6826 23.9816 94.2743 24.378 94.8002 24.7744C95.3261 25.1708 95.9178 25.6333 96.378 26.0957C96.904 26.5582 97.4299 27.0206 97.8901 27.5492C98.3503 28.0116 98.8105 28.5401 99.3364 29.0687C99.7966 29.5972 100.257 30.1257 100.651 30.7203C101.046 31.3149 101.506 31.9094 101.835 32.438C102.361 33.2307 102.755 34.0235 103.215 34.8824C103.61 35.6752 104.004 36.534 104.267 37.3268C104.596 38.1856 104.859 38.9784 105.056 39.8373C105.253 40.6961 105.45 41.4889 105.582 42.3477C105.779 43.603 105.845 44.8582 105.845 46.1135C105.845 47.3026 105.713 48.6239 105.45 49.8131C105.253 51.0023 104.925 52.2575 104.53 53.3806C104.136 54.5698 103.61 55.6929 102.952 56.7499C102.624 57.2785 102.295 57.873 101.966 58.3355C101.572 58.864 101.243 59.3925 100.783 59.855C100.388 60.3174 99.9281 60.846 99.5336 61.3084C99.1392 61.7709 98.6133 62.2333 98.0873 62.6958C97.6271 63.0922 97.1012 63.6207 96.5752 63.951C96.0493 64.3474 95.4576 64.7438 94.866 65.1402C94.2743 65.5366 93.6826 65.8669 93.0252 66.1972C92.3677 66.5276 91.7761 66.8579 91.0529 67.1222L41.812 89.4522L60.943 118.455C61.8634 119.776 62.9153 120.899 64.2301 121.758C65.4792 122.617 66.9255 123.211 68.3719 123.608C69.8182 124.004 71.396 124.07 72.9081 123.938C74.4201 123.806 75.9322 123.277 77.2471 122.551C78.5619 121.824 79.6795 120.833 80.5342 119.776C81.3888 118.719 81.9805 117.53 82.3092 116.209C82.6379 114.953 82.7037 113.566 82.5064 112.245C82.3092 110.923 81.849 109.536 81.0601 108.281C80.9944 108.215 80.9944 108.149 80.9286 108.149C80.8629 108.083 80.8629 108.016 80.7971 108.016C80.7971 107.95 80.7314 107.884 80.6656 107.884C80.5999 107.818 80.5999 107.752 80.5342 107.752L74.4201 98.6352L102.558 86.0828C104.136 85.3561 105.582 84.5633 107.094 83.7045C108.54 82.8457 109.855 81.9207 111.17 80.9298C112.485 79.9388 113.668 78.9478 114.852 77.8908C116.035 76.8337 117.087 75.7106 118.073 74.5875C119.519 72.8698 120.9 71.02 122.083 69.1702C123.267 67.2543 124.253 65.3384 125.042 63.2904C125.831 61.2424 126.488 59.1943 127.014 57.0803C127.474 54.9662 127.737 52.8521 127.934 50.6719C128 49.6149 128 48.4918 128 47.3687C127.934 46.2456 127.869 45.1885 127.803 44.0654C127.671 42.9423 127.474 41.8853 127.343 40.7622C127.145 39.6391 126.882 38.582 126.554 37.4589C126.225 36.4019 125.896 35.2788 125.502 34.2217C125.107 33.1647 124.647 32.0416 124.187 30.9845C123.727 29.9275 123.201 28.8704 122.609 27.8134C121.82 26.8885 121.163 25.8315 120.505 24.8405Z"/>
                            </svg>
                            <p>CS Paint</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-wrapper">
                <Link className='btn' activeClass="active" to="skills" spy={true} smooth={true} offset={0}
                      duration={500}>
                    <span>View Skillset</span>
                    <svg width="14" height="9" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0572316 3.16667L1.94285 0.833334L7.00002 4.92015L12.0572 0.833335L13.9428 3.16667L7.00002 8.77729L0.0572316 3.16667Z"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
