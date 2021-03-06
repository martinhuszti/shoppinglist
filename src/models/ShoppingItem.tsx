import * as firebase from 'firebase/app';
import 'firebase/firestore'

export default class ShoppingItem {

    constructor(
        public id: string = "",
        public title: string = "",
        public description: string = "",
        public created_by_user_id: string = "",
        public quantity: number = 1,
        public quantity_measure: string = "db",
        public createdDate = firebase.firestore.Timestamp.now(),
        public groupId: string = "",
        public archived: boolean = false,
        public archived_at: firebase.firestore.Timestamp = new firebase.firestore.Timestamp(0, 0),
        public archived_by: string = "",
        public unarchived_at: firebase.firestore.Timestamp = new firebase.firestore.Timestamp(0, 0),
        public unarchived_by: string = "",
    ) { }
}
