import { KeyIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const SignIn = () => {

    const [isSaas, setIsSaas] = useState(true)

    return (
        <div className={`flex w-full max-w-[400px] md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4`}>
            <div className={`bg-white flex flex-col rounded-xl w-full border`}>
                <div className={`border-b flex flex-col p-5 w-full gap-4`}>
                    <div className={`flex items-center justify-center gap-4`}>
                        <img src={'/svg/logo.svg'} alt={'logo'}/>
                        <span className={`font-light`}>CodeAnt AI</span>
                    </div>
                    <div className={`flex justify-center text-2xl font-semibold mt-2`}>
                        Welcome to CodeAnt AI
                    </div>
                    <div>
                        <div className={`bg-gray-100/70 border rounded-xl`}>
                            <button className={`p-3 rounded-xl w-1/2 hover:bg-slate-600 ${isSaas ? 'bg-[#1570EF] hover:bg-gray-900 text-white' : ''}`} onClick={()=>{setIsSaas(true)}}>SAAS</button>
                            <button className={`p-3 rounded-xl w-1/2 hover:bg-slate-600 ${isSaas ? '' : 'bg-[#1570EF] hover:bg-gray-900 text-white'}`} onClick={()=>{setIsSaas(false)}}>Self Hosted</button>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col p-5`}>
                    <div className={`flex items-center justify-center w-full`}>
                        {
                            isSaas ? (
                                <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                                    <a href={'/dashboard'} className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center hover:border-t-orange-400 hover:border-r-orange-400">
                                       <img src={'/svg/github.svg'} alt={'github'} className={`w-5`}/>
                                        Sign in with Github
                                    </a>
                                    <a href={'/dashboard'}
                                       className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center hover:border-t-orange-400 hover:border-r-orange-400">
                                        <img src={'/svg/bitbucket.svg'} alt={'bitbucket'} className={`w-5`}/>
                                        Sign in with Bitbucket
                                    </a>
                                    <a href={'/dashboard'}
                                       className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center hover:border-t-orange-400 hover:border-r-orange-400">
                                        <img src={'/svg/azure-devops.svg'} alt={'azure-devops'} className={`w-5`}/>
                                        Sign in with Azure Devops
                                    </a>
                                    <a href={'/dashboard'}
                                       className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center hover:border-t-orange-400 hover:border-r-orange-400">
                                        <img src={'/svg/gitlab.svg'} alt={'gitlab'} className={`w-5`}/>
                                        Sign in with GitLab
                                    </a>
                                </div>
                            ) : (
                                <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                                    <a href={'/dashboard'}
                                       className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center hover:border-t-orange-400 hover:border-r-orange-400">
                                        <img src={'/svg/gitlab.svg'} alt={'gitlab'} className={`w-5`}/>
                                        Sign in with GitLab
                                    </a>
                                    <a href={'/dashboard'}
                                       className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center hover:border-t-orange-400 hover:border-r-orange-400">
                                        <KeyIcon className={`w-5`}/>
                                        Sign in with SSO
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div>
                <span>By signing up you agree to the <a href="https://www.codeant.ai/privacy-policy" target="blank"><b>Privacy Policy.</b></a></span>
            </div>
            <div className="text-right"><span>@made with efforts by <a href="https://github.com/Radarshi"><b>rm</b></a></span></div>
        </div>
    );
};

export default SignIn;