import { observable, action, computed } from "mobx";
// import config from '../config/config.json';

class EventDetailsStore {
    @observable comments = [];
    @observable participants = [];

    //  array of obects containing the comment being added for the event ex: {comment: 'blabla', event_id: '12345}
    @observable addCommentInputs = '';
    @observable commentInputValid = true;

    //  The current event is the event the user selected when he clicks on the "more details" button. The details page shows details about the current event.
    @observable currentEvent = {};
    @observable eventLoading = false;

    @action getEventComments = (event_id) => {
        fetch('https://api.positiveactions.co/events/' + event_id, {
            headers: { 'x-api-key': process.env.REACT_APP_AWS_APIKEY },
        }
        ).then(res => {
            return res.json();
        }).then(response => {
            this.comments = response.comments;
        });
    }


    @action getEvent = (event_id) => {
        this.eventLoading = true;
        fetch('https://api.positiveactions.co/events/' + event_id, {
            headers: { 'x-api-key': process.env.REACT_APP_AWS_APIKEY },
        }
        ).then(res => {
            return res.json();
        }).then(response => {
            this.currentEvent = response.info ? response.info : {};
            this.participants = response.participants;
            console.log('COMMENTS', response.comments)
            this.comments = response.comments;
            this.eventLoading = false;
        });
    }

    @action updateCommentInput = (event) => {
        this.addCommentInputs = event.target.value;
    }

    @action submitCommentInput = (userId) => {
        console.log(this.addCommentInputs, this.currentEvent.event_id)
        fetch('https://api.positiveactions.co/comments', {
            headers: { 'x-api-key': process.env.REACT_APP_AWS_APIKEY },
            method: 'POST',
            body: JSON.stringify({message: this.addCommentInputs, event_id: this.currentEvent.event_id, user_id: userId})
        },
        ).then(res => {
            return res.json();
        }).then(response => {
            this.addCommentInputs = '';
            this.comments.unshift(response);
            this.comments = JSON.parse(JSON.stringify(this.comments));
        });
    }

    @action submitParticipant = () => {
        fetch('https://api.positiveactions.co/participant', {
            headers: { 'x-api-key': process.env.REACT_APP_AWS_APIKEY },
            method: 'POST',
            body: JSON.stringify({event_id: this.currentEvent.event_id})
        },
        ).then(res => {
            return res.json();
        }).then(response => {
            this.participants.unshift(response);
        });
    }

    @computed get participantsCount() {
        return this.participants ? this.participants.length : 0;
    }

    @computed get commentLength() {
        return this.addCommentInputs.length;
    }

}

const singleton = new EventDetailsStore();
export default singleton;