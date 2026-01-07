<script setup lang="ts">
import { routerViewLocationKey } from 'vue-router';

</script>

<template>
    <div>
        <div>
            <div id="bg-blog">
                <p class="blog-text">BLOG</p>
            </div>
            <h6 class="ms-5 mt-3">ED Parther <span class="span-us">> Blog</span></h6>
        </div>
        <hr>
        </hr>
        <div class="d-flex mt-5">
            <div>
                <div class="m-about">
                    <div id="bg-home-1">
                        <p class="box1">Human Resources,Spesial For Employers</p>
                    </div>
                    <div class="d-flex">
                    <p>July 31, 2018</p>
                    <i class="fa-solid fa-message icon-message"></i>
                    <p class="ms-2">0</p>
                    </div>
                    <h3>Carrer Coaching</h3>
                    <p>When you want to take your career in a new direction, we support you to achieve your goals
                        effectively. Creating your resume in this field, measuring your strengths and weaknesses with
                        tests
                        based on scientific data</p>
                    <button class="more-btn mt-5">
                        <span class="text">More</span>

                    </button>
                </div>
                <div class="m-about">
                    <div id="bg-home-3">
                        <p class="box1">ED Partners, Human Resources</p>
                    </div>
                    <div class="d-flex">
                    <p>July 31, 2018</p>
                    <i class="fa-solid fa-message icon-message"></i>
                    <p class="ms-2">0</p>
                    </div>
                    <h3>High-Level Selection And Placement</h3>
                    <p>In addition to classical recruitment methods in our selection and placement process, we provide
                        fast, quality quality to our business partners by considering and sharing market dynamics and
                        the sector, supporting the process with assessment center tools.</p>
                    <button class="more-btn ">
                        <span class="text">More</span>

                    </button>
                </div>
            </div>
            <div>
                <div class="m-about ms-5 ">
                    <div id="bg-home-2">
                        <p class="box2">ED Partners, Industry News</p>
                    </div>
                    <div class="d-flex">
                    <p>July 31, 2018</p>
                    <i class="fa-solid fa-message icon-message"></i>
                    <p class="ms-2">0</p>
                    </div>
                    <h3>Competency Modeling</h3>
                    <p>Competencies are observable and measurable behavioral characteristics that cover the distinctive
                        attitudes of employees for the success of organizations.
                        In addition to providing added value to institutions, raising awareness among employees, strong
                        and
                    </p>
                    <button class="more-btn">
                        <span class="text">More</span>
                    </button>
                </div>
                <div class="m-about ms-5 mt-5">
                    <div id="bg-home-4">
                        <p class="box2">ED Partners, Spesial For Employers</p>
                    </div>
                    <div class="d-flex">
                    <p>July 31, 2018</p>
                    <i class="fa-solid fa-message icon-message"></i>
                    <p class="ms-2">0</p>
                    </div>
                    <h3>Assessment Center Studies</h3>
                    <p>Within the scope of recruitment and career counseling, in order to observe the competence and
                        potential of the person by using more than one evaluation tool, accompanied by more than one
                        observer, the current function with tools containing simulation
                    </p>
                    <button class="more-btn">
                        <span class="text">More</span>
                    </button>
                </div>
            </div>
            <div class="m-about">
                <h5>Categories</h5>
                <RouterLink class="route-page" to="/ed"><p>ED Partners <span class="color-blog">(3)</span></p></RouterLink>
                <RouterLink class="route-page" to="/human"><p>Human Resources<span class="color-blog">(2)</span></p></RouterLink>
                <RouterLink class="route-page"  to="/spesialemploye"><p>Spesial For Employers <span class="color-blog">(2)</span></p></RouterLink>
                <RouterLink class="route-page" to="/Industry"><p>Industry News <span class="color-blog">(1)</span></p></RouterLink>
                <div>
                    <h5 class="mt-recent">Recent Post</h5>
                    <RouterLink class="route-page" to="/recentcarrer"><img src="../../assets/images/carrer.jpg" alt="office" class="img-blog">
                    <p>Carrer Coaching</p>
                    </RouterLink>
                    <p>31 july, 2018</p>
                    
                </div>
                <hr>
                </hr>
                <div>
                    <RouterLink class="route-page" to="/recentmodeling"><img src="../../assets/images/compas.avif" alt="office" class="img-compas">
                    <p>Competency Modeling</p></RouterLink>
                    <p>31 july, 2018</p>
                </div>
               <hr />
                <div>
                    <RouterLink class="route-page" to="recenthightlevel"><img src="../../assets/images/parther.jpg" alt="office" class="img-blog">
                    <p>High-Level Selection And Placement</p></RouterLink>
                    <p>31 july, 2018</p>
                </div>
                <hr />
                <div>
                    <RouterLink class="route-page" to="recentassesment"><img src="../../assets/images/assesment.jpg" alt="office" class="img-blog">
                    <p>Assessment Center Studies</p></RouterLink>
                    <p>31 july, 2018</p>
                </div>
            </div>
        </div>
    </div>
</template>