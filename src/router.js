import { createRouter, createWebHistory } from "vue-router";

import ReservoirList from "./components/pages/ReservoirList.vue";
import TripsList from "./components/pages/TripsList.vue";
import TripDetail from "./components/pages/TripDetail.vue";
import NotFound from "./components/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/reservoirs" },
    { path: "/reservoirs", component: ReservoirList, props: true },
    {
      path: "/reservoirs/:reservoir",
      component: TripsList,
      props: true,
      children: [{ path: "reservoir/trips/:id", component: TripDetail, props: true }],
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
