import LinkExpand from "./LinkExpand"

export default function ProjectLayout (  {children,
}: {
  children: React.ReactNode
}){
    
    return (
        <div className="flex flex-col bg-green-500 max-h-screen h-screen min-h-screen overflow-auto w-full">
            <div className="bg-black h-12"></div>
            <div className="flex w-full min-h-[calc(100vh-3rem)] h-[calc(100vh-3rem)] max-h-[calc(100vh-3rem)] items-center justify-center bg-black" >
                <nav className="min-w-[15rem] w-[15rem] max-w-[15rem] flex flex-col h-full bg-white">
                    <div data-type='Head' className="flex bg-slate-300"> 
                        Title
                        <br/>
                        Title
                        <br/>
                        Title
                    </div>
                    <LinkExpand label="DataType" expandNameParam="data-type-expand"/>
                    <div data-type='Footer' className=" bg-slate-900">Footer</div>
                </nav>
                {children}
            </div>
        </div>
    )
}