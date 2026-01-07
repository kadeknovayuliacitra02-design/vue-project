<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <header class="fixed-header">
        <div class=" d-flex justify-content-between">
            <img src="../../assets/images/logo1.png" class="logoheader">
            <i class="fa-brands fa-facebook marginFb"></i>
            <i class="fa-brands fa-square-instagram marginIg"></i>
            <i class="fa-brands fa-square-whatsapp topWa"></i>
        </div>
        <div class="header-line"></div>
        <div class="d-flex justify-content-between header">
            <RouterLink to="/" class="route-page">
                <h5>HOME</h5>
            </RouterLink>
            <RouterLink to="/about" class="route-page">
                <h5> ABOUT US</h5>
            </RouterLink>
            <div class="dropdown">
                <div class="d-flex">
                    <h5>WHAT WE DO?</h5>
                    <i class="fa-solid fa-angle-right icon-angle"></i>
                </div>
                <ul type="none" class="dropdown-content pt-3">
                    <li class="dropdown-text has-child">
                        Selection and Placement
                        <i class="fa-solid fa-angle-right"></i>

                        <ul class="menu-right">
                            <RouterLink class="route-page fs-6" to="/spesialist"><li >Specialist and Intermediate – Senior Level Selection and Placement</li></RouterLink>
                            <RouterLink class="route-page fs-6" to="/projectbase"><li class="fs-6">Project-Based / Mass Recruitment</li></RouterLink>
                        </ul>
                    </li>
                    <li class="dropdown-text has-child">
                        Consultancy Services
                        <i class="fa-solid fa-angle-right"></i>

                        <ul class="menu-right">
                            <RouterLink class="route-page" to="/assesment"><li>Assesment center studies</li></RouterLink>
                            <RouterLink class="route-page" to="/wageresearch"><li>Wage Research</li></RouterLink>
                            <RouterLink class="route-page" to="/competency"><li>Competency Modeling</li></RouterLink>
                        </ul>
                    </li>
                    <RouterLink to="/coaching" class="route-page">
                        <li class="dropdown-text ">Carrer Coaching</li>
                    </RouterLink>
                    <RouterLink to="/outplacement" class="route-page">
                        <li class="dropdown-text ">Outplacement</li>
                    </RouterLink>
                </ul>
            </div>
            <RouterLink to="/carrer" class="route-page">
                <h5>CARRER OPPORTUNITIES</h5>
            </RouterLink>
            <RouterLink to="/blog" class="route-page">
                <h5>BLOG</h5>
            </RouterLink>
            <RouterLink to="/contact" class="route-page">
                <h5>CONTACT NOW</h5>
            </RouterLink>
        </div>
    </header>


</template>

<style>
    /* MAIN DROPDOWN */
.dropdown {
  position: relative;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  min-width: 260px;
  display: none;
  z-index: 100;
}

/* SHOW MAIN DROPDOWN */
.dropdown:hover .dropdown-content {
  display: block;
}

/* DROPDOWN ITEM */
.dropdown-text {
  position: relative;
  padding: 12px 20px;
  cursor: pointer;
  white-space: nowrap;
}

.dropdown-text:hover {
  background: #f2f2f2;
}

/* RIGHT SUB MENU */
.menu-right {
  position: absolute;
  top: 0;
  left: 100%; /* push to the right */
  background: #fff;
  min-width: 300px;
  display: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
}

/* SHOW RIGHT MENU ON HOVER */
.has-child:hover .menu-right {
  display: block;
}

/* CHILD ITEMS */
.menu-right li {
  padding: 12px 16px;
  cursor: pointer;
}

.menu-right li:hover {
  background: #f5f5f5;
}

</style>