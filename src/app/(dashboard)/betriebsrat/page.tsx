import Footer from "@/components/footer";
import MenuBetriebsrat from "@/components/menuBetriebsrat";
import NewsletterHeader from "@/components/newletter";

export default function BetriebsratDashboard(){
    return(

        <>
            <MenuBetriebsrat/>
            <div className="bg-gray-100">
                <NewsletterHeader/>


            </div>

        </>
    )
}