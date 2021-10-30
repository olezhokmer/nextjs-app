import Link from 'next/link'

function logout(){
    if (typeof window !== "undefined") {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.reload();
    }
}
function hide(id: string) {
    let elem = document.getElementById(id);
    if(elem) elem.style.display='none';
}
function show(id:string){
    let elem = document.getElementById(id);
    if(elem) elem.style.display='block';
}
function Nav(props:any){
    if (typeof window !== "undefined") {
        props.email = localStorage.getItem('email');
    }
    let profileBlock = !props.email ? (
        <Link href="/login">
                    <a className="inline-block text-lg px-4 py-2 leading-none border rounded mt-4 lg:mt-0">Sign in</a>
        </Link>
    ) : (
        <div>
            {props.email}
            <button className="inline-block text-lg px-4 py-2 ml-2 leading-none border rounded mt-4 lg:mt-0" onClick={logout}>
                    Log out
            </button>
        </div>
    )
    return (
        <div>
          <nav className="flex items-center justify-between flex-wrap p-4 shadow-lg">
              <div className="flex items-center flex-shrink-0 mr-6 ">
                  <Link href="/"><img className="fill-current h-8 w-8 mr-2" width="154" height="154" src="./images/logo.png" /></Link>
                  <Link href="/"><a className="font-semibold text-xl tracking-tight hidden lg:block">Weather</a></Link>
              </div>
              <div className="block lg:hidden">
                  <button id="side-bar-open" className="flex items-center " onClick={() => show("side-bar")}>
                      <img  src="./images/menu.svg" />
                  </button>
              </div>
              <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
                  <div className="text-sm lg:flex-grow ">
                      <Link href="/"><a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">Home</a></Link>
                  </div>
              </div>
              <div className="hidden lg:block">
                  {profileBlock}
              </div>
          </nav>
          <div>
                <div id="side-bar" className="hidden">
                    <div className="flex absolute top-0 right-0 h-screen w-full object-right justify-end">
                        <div className="fixed h-screen w-72 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="flex justify-end" >
                                <a id="close-side-bar" onClick={() => hide("side-bar")}><img src="./images/close.svg" width="40px" height="40px" /></a>
                            </div>
                            
                            <div className="p-4 ">
                                <div className="items-center text-center">
                                    {profileBlock}
                                </div>
                                <div className="">
                                    <Link href="/"><a className="font-semibold text-xl tracking-tight">Weather</a></Link>
                                </div>
                                <div className="">
                                    <Link href="/"><a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">Home</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    );
}

export default Nav;