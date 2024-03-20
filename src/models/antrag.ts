import mongoose, {Schema} from "mongoose";

const antragSchema = new Schema({
    titel: String,
    aUE:String,
    zweckbestimmung:String,
    kostenNutzenSchaetzung:String,
    verzeichnisHardSoftware:String,
    konzeptZugriffsberechtigung:String,
    schnittstellenITSysteme:String,
    organisatorischeUndZeitlicheProjektabwicklung:String,
    alternativen:String,
    listePersBezDaten:String,
    zweckPErsBezDaten:String,
    artDatenerfassung:String,
    sicherungVerwaltungLoeschungPersBezDaten:String,
    genehmigt:Boolean
},
    {
    timestamps: true}

)

const Antrag = mongoose.models.Antrag || mongoose.model("Antrag",antragSchema);

export default Antrag;