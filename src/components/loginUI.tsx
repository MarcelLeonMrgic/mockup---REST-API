"use client"
import {useState} from "react";
import {useRouter} from "next/navigation";




let benutzer = {
    "admin":"passwort",
    "arbeitnehmer":"passwort",
    "betriebsrat" :"passwort",
    "arbeitgeber" : "passwort",
    "kanzleiXY" : "passwort"
}

export default function LoginUI() {
    const router = useRouter()
    const [benutzerInput,setBenutzerInput] = useState("")
    const [passwortInput,setPasswortInput] = useState("")
    const [displayFailedLogin,setDisplayFailedLogin] = useState("hidden")
    const [displayGrantedLogin,setDisplayGrantedLogin] = useState("hidden")

    function accessLogin(){
            if(benutzerInput in benutzer && benutzer[benutzerInput as keyof typeof benutzer] === passwortInput){
                setDisplayFailedLogin("hidden")
                setDisplayGrantedLogin("block text-l text-green-400 text-center")
                if(benutzerInput === "betriebsrat"){
                    setTimeout(()=>{router.push("/betriebsrat")},1200);
                }
                if(benutzerInput === "arbeitgeber"){
                    setTimeout(()=>{router.push("/arbeitgeber")},1200);
                }
                if(benutzerInput === "admin"){
                    setTimeout(()=>{router.push("/arbeitgeber")},1200);
                }
                if(benutzerInput === "arbeitnehmer"){
                    setTimeout(()=>{router.push("/arbeitgeber")},1200);
                }
                if(benutzerInput === "kanzleiXY"){
                    setTimeout(()=>{router.push("/arbeitgeber")},1200);
                }


            }
            else{
                setDisplayFailedLogin("block text-red-400 text-l text-center");
            }


    }
    function changeBenutzerInput(event:any){
        setBenutzerInput(event.target.value.trim());
    }
    function changePasswortInput(event:any){
        setPasswortInput(event.target.value.trim())
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
            <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-md rounded-lg ">
                <div className="flex justify-center ">
                  <h1 className="text-xl">brweb.app</h1>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">Benutzername</label>
                            <input id="username" name="username" onChange={changeBenutzerInput} type="text" autoComplete="username" required
                                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   placeholder="Benutzername"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Passwort</label>
                            <input id="password" name="password" type="password" onChange={changePasswortInput} autoComplete="current-password"
                                   required
                                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   placeholder="Passwort"/>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox"
                                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Angemeldet
                                bleiben</label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Passwort
                                vergessen?</a>
                        </div>
                    </div>

                    <div>
                        <p onClick={accessLogin}
                                className="group cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Login
                        </p>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Kein Konto? Registrieren
                    </a>
                </div>
                <p className={displayGrantedLogin}>Login erfolgreich</p>
                <p className={displayFailedLogin}>Benutzername oder Passwort ungültig</p>
            </div>
        </div>
    );
}
