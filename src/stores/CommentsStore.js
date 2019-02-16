import { observable, action } from "mobx";

class CommentsStore {
    @observable comments = [
        {
            message: 'This is a comment.',
            author: 'Marc Sirisak',
            date: '21/12/2018',
            event_id: '1',
            id: '1'
        },
        {
            message: 'This is another comment.',
            event_id: '2',
            author: 'Guillaume Meigniez',
            date: '02/12/2018',
            id: '2'
        },
        {
            message: 'Wow so many comments on this event!',
            author: 'Marc Sirisak',
            date: '21/12/2018',
            event_id: '2',
            id: '3'
        }
    ];

    @action
    getEventComments = (event_id) => {
        const comments = this.comments.filter((commentTmp) => {
            return commentTmp.event_id === event_id;
        });

        return comments;
    }

  }
  
const singleton = new CommentsStore();
export default singleton;