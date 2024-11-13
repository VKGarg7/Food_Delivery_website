const [darkmodetoggle, setdarkmodetoggle] = useState(false);

return(
    <div className="header-container dark:tw-bg-[#832a2afa]">
        <div className="logo">
            <img src={darkmodetoggle? "https://i.postimg.cc/tR86fW24/yummy-high-resolution-logo-white-transparent.png":LOGO} alt="logo"/>
        </div>
        <div className="">
            <div className="nav-items"></div>
        </div>
    </div>
)