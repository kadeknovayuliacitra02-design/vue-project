import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BlogPage from '../components/Pages/BlogPage.vue';
import HomePage from '@/components/Pages/HomePage.vue';
import AboutUsPage from '@/components/Pages/AboutUsPage.vue';
import CarrerOportunitiesPage from '@/components/Pages/CarrerOportunitiesPage.vue';
import CarrerCoachingPage from '@/components/Pages/CarrerCoachingPage.vue';
import OutplacementPage from '@/components/Pages/OutplacementPage.vue';
import ContactNowPage from '@/components/Pages/ContactNowPage.vue';
import RecentPostCarrerCoachPage from '@/components/Pages/RecentPostCarrerCoachPage.vue';
import RecentPostModelingPage from '@/components/Pages/RecentPostModelingPage.vue';
import RecentPostHightLevelPage from '@/components/Pages/RecentPostHightLevelPage.vue';
import RecentPostAssesmentPage from '@/components/Pages/RecentPostAssesmentPage.vue';
import EdPartnersPage from '@/components/Pages/EdPartnersPage.vue';
import HumanPage from '@/components/Pages/HumanPage.vue';
import SpesialEmployePage from '@/components/Pages/SpesialEmployePage.vue';
import IndustryPage from '@/components/Pages/IndustryPage.vue';
import SpesialistPage from '@/components/Pages/SpesialistPage.vue';
import ProjectBasedPage from '@/components/Pages/ProjectBasedPage.vue';
import AssesmentPage from '@/components/Pages/AssesmentPage.vue';
import WageResearchPage from '@/components/Pages/WageResearchPage.vue';
import CompetencyPage from '@/components/Pages/CompetencyPage.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
     {
      path: '/blog',
      name: 'blog',
      component: BlogPage,
    },
    {
     path: '/about',
      name: 'about',
      component: AboutUsPage,
    },
   {
     path: '/carrer',
      name: 'carrer',
      component: CarrerOportunitiesPage,
    },
    {
     path: '/outplacement',
      name: 'outplacement',
      component: OutplacementPage,
    },
    {
     path: '/coaching',
      name: 'coaching',
      component: CarrerCoachingPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactNowPage,
    },
    {
      path: '/recentcarrer',
      name: 'recentcarrer',
      component: RecentPostCarrerCoachPage,
    },
    {
      path: '/recentmodeling',
      name: 'recentmodeling',
      component: RecentPostModelingPage,
    },
    {
      path:'/recenthightlevel',
      name: 'recenthightlevel',
      component: RecentPostHightLevelPage,
    },
    {
      path: '/recentassesment',
      name: 'recentassesment',
      component: RecentPostAssesmentPage,
    },
    {
      path: '/ed',
      name: 'edpartners',
      component: EdPartnersPage,
    },
    {
      path: '/human',
      name: 'human resource',
      component: HumanPage,
    },
    {
      path: '/spesialemploye',
      name: 'spesialemploye',
      component: SpesialEmployePage,
    },
    {
      path: '/industry',
      name: 'industry',
      component: IndustryPage,
    },
    {
      path: '/spesialist',
      name: 'spesialist',
      component: SpesialistPage,
    },
    {
      path: '/projectbase',
      name: 'projectbase',
      component: ProjectBasedPage,
    },
    {
      path: '/assesment',
      name: 'assesment',
      component: AssesmentPage,
    },
    {
      path: '/wageresearch',
      name:'wageresearch',
      component:WageResearchPage,
    },
    {
      path: '/competency',
      name: 'competency',
      component: CompetencyPage,
    }
  ],
})

export default router
