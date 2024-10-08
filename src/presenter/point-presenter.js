import RoutePointView from '../view/route-point-view.js';
import EditFormView from '../view/edit-form-view.js';
import { remove, render, replace } from '../framework/render.js';
import { Mode } from '../const.js';

export default class PointPresenter {
  #boardComponent = null;
  #point = null;
  #pointComponent = null;
  #editFormComponent = null;
  #offersModel = [];
  #destinationsModel = [];
  #handleDataChange = null;
  #handleModeChange = null;
  #mode = Mode.DEFAULT;

  constructor({ boardComponent, destinationsModel, offersModel, onPointChange, onModeChange }) {
    this.#boardComponent = boardComponent;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#handleDataChange = onPointChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;
    const prevPointComponent = this.#pointComponent;
    const prevFormEditComponent = this.#editFormComponent;

    this.#pointComponent = new RoutePointView({
      point: this.#point,
      offers: this.#offersModel.getOffersByType(point.type) ,
      destinations: this.#destinationsModel.getDestinationsById(point.destination),
      onEditFormButtonClick: this.#onEditFormButtonClick,
      favoriteClickHandler: this.#favoriteClickHandler
    });


    this.#editFormComponent = new EditFormView({
      point: this.#point,
      offers: this.#offersModel.getOffersByType(point.type),
      allOffers: this.#offersModel.offers,
      destinations: this.#destinationsModel.getDestinationsById(point.destination),
      allDestinations: this.#destinationsModel.destinations,
      onFormSubmit: this.#onFormSubmit,
      onToggleButtonClick: this.#onToggleButtonClick
    });

    if (!prevPointComponent || !prevFormEditComponent) {
      render(this.#pointComponent, this.#boardComponent.element);
      return;
    }

    if (this.#boardComponent.element.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#boardComponent.element.contains(prevFormEditComponent.element)) {
      replace(this.#editFormComponent, prevFormEditComponent);
    }

    remove(prevPointComponent);
    remove(prevFormEditComponent);

  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#editFormComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceEditFormToRoutePoint();
    }
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceEditFormToRoutePoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #onEditFormButtonClick = () => {
    this.#replaceRoutePointToEditForm();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #onToggleButtonClick = () => {
    this.#replaceEditFormToRoutePoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #onFormSubmit = () => {
    this.#onToggleButtonClick();
    this.#handleDataChange(this.#point);
  };

  #replaceRoutePointToEditForm() {
    replace(this.#editFormComponent, this.#pointComponent);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceEditFormToRoutePoint() {
    replace(this.#pointComponent, this.#editFormComponent);
    this.#mode = Mode.DEFAULT;
  }

  #favoriteClickHandler = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };


}
