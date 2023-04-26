function Footer() {
    return (
        <>
        <div className="footer text-white flex flex-col bg-slate-900 pt-3">
            {/* <h2 className="pl-3"></h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                {/* <Subscribe />
                <Social />
                <KeyObligations /> */}
            </div>
            <div className="flex flex-row-reverse items-center justify-center">
                <p className="p-5 text-center">Copyright &copy; 2023 - <span className="text-sky-900 text-2xl">Tech Motisha</span></p>
            </div>
        </div>
        </>
    );
}

export default Footer;