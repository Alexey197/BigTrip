import {createFilterTemplate} from "./components/filter";
import {createMenuTemplate} from "./components/menu";
import {createRouteCostTemplate} from "./components/routeCost";
import {createRouteInfoTemplate} from "./components/routeInfo";
import {createRoutePointTemplate} from "./components/routePoint";
import {createRoutePointEditTemplate} from "./components/routePointEdit";
import {createSortingTemplate} from "./components/sorting";

const ROUTE_POINTS_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);
render(tripMainElement, createRouteInfoTemplate(), `afterbegin`);

const tripInfo = tripMainElement.querySelector(`.trip-info__main`);
render(tripInfo, createRouteCostTemplate(), `afterend`);

const tripControls = tripMainElement.querySelector(`.trip-controls`);
const tripMenu = tripControls.querySelector(`h2`);
render(tripMenu, createMenuTemplate(), `afterend`);
render(tripControls, createFilterTemplate());

const tripEvents = document.querySelector(`.trip-events`);
const tripSorting = tripEvents.querySelector(`h2`);
render(tripSorting, createSortingTemplate(), `afterend`);

render(tripEvents, createRoutePointEditTemplate());

new Array(ROUTE_POINTS_COUNT)
  .fill(``)
  .forEach(
      () => render(tripEvents, createRoutePointTemplate())
  );
