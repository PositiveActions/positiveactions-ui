import { observable, action } from "mobx";


class NavigationStore {
    @observable lastVisited = '';

    @action changePage = (previousPage) => {
        console.log('change pasge', previousPage);
    }
}

const singleton = new NavigationStore();
export default singleton;