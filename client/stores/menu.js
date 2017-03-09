import { observable } from 'mobx';

export default class MatchesStore {
  @observable show;

  constructor() {
    this.show = false;
  }

  get() {
    return this.show;
  }

  toggle() {
    this.show = !this.show;
  }
}