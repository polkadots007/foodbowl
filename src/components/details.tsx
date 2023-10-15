const Details = () => {
    return (
    <div className='h-[200px] pb-0 pt-4 bg-white flex flex-row justify-center'>
        <div className='max-w-[500px] flex flex-col items-center'>
            <div>
                <blockquote className="italic max-w-[300px] mx-auto text-center mt-2 mb-10">
                    <p> "A recipe has no soul. You, as the cook, must bring soul to the recipe.  "</p>
                    <cite>-- Thomas Keller</cite>
                </blockquote>
            </div>
            <div className="font-semibold pb-2">Know More About Us! Follow us via</div>
            <div className="flex grid-flow-row gap-4 pb-10">
                <a className="hover:text-cyan-500 hover:cursor-pointer no-underline text-black" href="https://facebook.com/freecodecamp" target="_blank"><i className="fab fa-facebook-square"></i> Facebook</a>
                {/* <a id="profile-link" className="hover:text-cyan-500 hover:cursor-pointer" href="https://github.com/freecodecamp" target="_blank"><i className="fab fa-github"></i>  Github</a> */}
                <a className="hover:text-cyan-500 hover:cursor-pointer no-underline text-black" href="https://twitter.com/freecodecamp" target="_blank"><i className="fab fa-twitter"></i>  Twitter</a>
                <a className="hover:text-cyan-500 hover:cursor-pointer no-underline text-black" href="mailto:example@example.com" target="_blank"><i className="fas fa-at"></i>  Send a mail</a>
                <a className="hover:text-cyan-500 hover:cursor-pointer no-underline text-black" href="tel:555-555-5555" target="_blank"><i className="fas fa-mobile-alt"></i> Call Us</a>
            </div>
        </div>
    </div>
    );
}

export default Details;