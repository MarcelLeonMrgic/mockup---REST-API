import mongoose, {Schema} from "mongoose";

const antragSchema = new Schema({
    titel: String,
    beschreibung:String
},
    {
    timestamps: true}

)

const Antrag = mongoose.models.Antrag || mongoose.model("Antrag",antragSchema);

export default Antrag;