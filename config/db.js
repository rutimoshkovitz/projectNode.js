import { connect } from "mongoose";

export function connectToDb() {
    connect("mongodb+srv://ruti32659:Ruti4624@cluster0.7hmuc.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0")
        .then(con => console.log("mogo Db connected"))
        .catch(err => {
            console.log("cannot connect mongo db", err);
            process.exit(1)
        })
}
