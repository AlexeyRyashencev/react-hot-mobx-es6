import { observable, computed, action, autorun } from 'mobx';

class MenuStore {
  @observable show;

  constructor() {
    this.show = false;
  }

  @computed get isOpenLeftPanel() {
    return this.show;
  }

  @action('toggle left panel')
  toggleLeftPanel() {
    this.show = !this.show;
  }

  @action('show left panel')
  openLeftPanel() {
    this.show = true;
  }

  @action('hide left panel')
  closeLeftPanel() {
    this.show = false;
  }
}

const menuStore = new MenuStore();

autorun(() => {
  console.log(menuStore.show);
});

export default menuStore;
export { MenuStore };
