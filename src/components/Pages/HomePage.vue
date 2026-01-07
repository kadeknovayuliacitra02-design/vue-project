<template>
    <div>
        <div>
            <AutoSliderPage />
        </div>
        <div id="bgHome2" class="container-fluid section-who">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-9">
                        <h2 class="who-title">Who We Are</h2>
                        <p class="who-text">
                            HR Partners; It was established to provide effective, fast and reliable
                            solutions to our business partners with its expert and experienced staff
                            and serves as a private employment agency approved by İşkur.
                        </p>
                    </div>
                    <div class="col-md-3 text-end">
                        <button class="btn who-btn"
                            style="background-color: #0e6686;color: white;padding: 16px 35px;font-size: 18px;border-radius: 10px;border: none;transition: 0.3s;">
                            Services >
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class=" d-flex mt-2">
            <div data-aos="fade-right" class="ms-5">
                <img src="../../assets/images/home1.jpg" alt="office" class="home-img1">
                <h5 data-aos="fade-up">Consultancy Services</h5>
                <hr data-aos="fade-up" class="home-line1">
                <p data-aos="fade-up">In order to observe the competence and potential of the person by using more than
                    one evaluation
                    tool, accompanied by more than one observer, the current function, title...</p>
                <RouterLink to="/about" class="route-page"><button class="more-btn">
                    <span class="text">More</span>
                    <span class="divider"></span>
                    <span class="icon">›</span>
                </button> </RouterLink>

            </div>
            <div data-aos="fade-up">
                <img src="../../assets/images/home2.jpg" alt="office" class="home-img2">
                <h5 data-aos="fade-up">Selection and Placement</h5>
                <hr data-aos="fade-up" class="home-line2">
                <p data-aos="fade-up">We provide fast, high quality and result-oriented service to our business partners
                    by considering and
                    sharing the market dynamics and the sector, and supporting the process with assessment center tools.
                </p>
                <RouterLink to="/contact" class="route-page"><button class="more-btn">
                    <span class="text">More</span>
                    <span class="divider"></span>
                    <span class="icon">›</span>
                </button> </RouterLink>
            </div>
            <div data-aos="fade-left" id="bg-home" class="home3 p-5">
                <h5 data-aos="fade-up" class="mtop">Abaout ED Partners</h5>
                <h4 data-aos="fade-up">What are we doing?</h4>
                <h6 data-aos="fade-up">With our experienced and expert staff, we support our customers operating
                    globally and locally in
                    areas such as expert, middle and senior level selection and placement, talent management, career
                    counseling, wage research, and assessment center.</h6>
                <button data-aos="fade-up" type="button" class="btn3 btn-primary3 mt-3">Get Information</button>
            </div>
        </div>
        <div class="d-flex mt-5">
            <div class="bg4 pt-5">
                <h2 data-aos="fade-down" class="text-center">Job Opportunities</h2>
                <hr class="home-line2 mhome4">
                <p class="mhome4">You can visit career opportunities to be informed about all job opportunities, browse
                    active job postings, apply and view your applications.</p>
                <button type="button" class="btn3 btn-primary mt-3 mhome4">Carrer Opportunities</button>
                <hr class="hr4">
            </div>
            <div data-aos="fade-left">
                <img src="../../assets/images/home4.jpg" alt="office" class="img4">
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <div data-aos="fade-right" class="home-user">
                <i class="fa-regular fa-user font-home  "></i>
                <h5>Project-Based Recruitment</h5>
            </div>
            <div data-aos="fade-up" class="home-note">
                <i class="fa-regular fa-note-sticky font-home "></i>
                <h5>Assessment Center</h5>
            </div>
            <div data-aos="fade-down" class="home-puzle">
                <i class="fa-solid fa-puzzle-piece  font-home"></i>
                <h5>Competency Modeling</h5>
            </div>
            <div data-aos="fade-left" class="home-smile">
                <i class="fa-regular fa-face-smile font-home "></i>
                <h5>Outplacement</h5>
            </div>
        </div>
        <div class="d-flex justify-content-around mt-5">
            <div data-aos="fade-right">
                <div class="d-flex">
                    <i class="fa-solid fa-users f-size me-3"></i>
                    <h1>163</h1>
                </div>
                <h6>Happy Customer</h6>
            </div>
            <div data-aos="fade-right">
                <div class="d-flex">
                    <i class="fa-solid fa-check f-size me-3"></i>
                    <h1>423</h1>
                </div>
                <h6 class="text-center">Completed Recruitment</h6>
            </div>
            <div data-aos="fade-up">
                <div class="d-flex">
                    <i class="fa-solid fa-chart-column f-size me-3"></i>
                    <h1>654</h1>
                </div>
                <h6 class="text-center">Assessment</h6>
            </div>
            <div data-aos="fade-left">
                <div class="d-flex">
                    <i class="fa-regular fa-user f-size me-3"></i>
                    <h1>1225</h1>
                </div>
                <h6 class="text-center">Candidate</h6>
            </div>
        </div>
        <hr>
        </hr>
        <div>
            <h2 data-aos="fade-down" class="text-center m-service">Services</h2>
            <hr class="home-line1 hr3">
            </hr>
            <div class=" d-flex justify-content-center">
                <button type="button" class="btn3 btn-primary mt-3">Selection and Placement</button>
                <button type="button" class="btn3 btn-primary mt-3">Consultancy Services</button>
                <button type="button" class="btn3 btn-primary mt-3">Carrer Coaching</button>
                <button type="button" class="btn3 btn-primary mt-3">Outplacement</button>
            </div>
            <HomeOutplacement/>
        </div>
        <hr>
        </hr>
        <div>
            <div data-aos="fade-down" class="text-center m-service">
                <h5>Online Job Application</h5>
                <h1>Application Steps</h1>
                <hr class="home-line1 hr3">
                </hr>
            </div>
            <div data-aos="fade-up" class="d-flex justify-content-around mt-5">
                <div>
                    <div class="circle">
                        <i class="fa-solid fa-magnifying-glass f-size2"></i>
                    </div>
                    <h5 class="text-center mt-3 search-icon">Find the Career Opportunity</h5>
                </div>
                <div>
                    <div class="circle">
                        <i class="fa-solid fa-users f-size2"></i>
                    </div>
                    <h5 class="text-center mt-3">Apply</h5>
                </div>
                <div>
                    <div class="circle">
                        <i class="fa-solid fa-paperclip f-size2"></i>
                    </div>
                    <h5 class="text-center mt-3 ">Upload Your CV</h5>
                </div>
                <div>
                    <div class="circle">
                        <i class="fa-solid fa-arrow-up-right-from-square f-size2"></i>
                    </div>
                    <h5 class="text-center mt-3">Send</h5>
                </div>
            </div>
        </div>
        <hr class="mt-5">
        </hr>
        <div class="mt-5">
            <h1 data-aos="fade-down" class="text-center">Recent News</h1>
            <hr class="home-line1 hr3">
            </hr>
            <div data-aos="fade-up" class="d-flex justify-content-around m-5">
                <div>
                    <div id="bg-home-1" class="me-4">
                        <p class="box1">Human Resources,Spesial For Employers</p>
                    </div>
                    <p>July 31, 2018</p>
                    <h3>Carrer Coaching</h3>
                </div>
                <div>
                    <div id="bg-home-2" class="me-4">
                        <p class="box2">ED Partners, Industry News</p>
                    </div>
                    <p>July 31, 2018</p>
                    <h3>Competency Modeling</h3>
                </div>
                <div>
                    <div id="bg-home-3">
                        <p class="box3">ED Partners, Human Resources</p>
                    </div>
                    <p>July 31, 2018</p>
                    <h3>Hight-level Selection and Placement</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import AutoSliderPage from './AutoSliderPage.vue';
import HomeOutplacement from './HomeOutplacement.vue';
import EdPartnersPage from './EdPartnersPage.vue';
</script>