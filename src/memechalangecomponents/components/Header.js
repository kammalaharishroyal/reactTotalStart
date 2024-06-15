import trollface from '../Images/troll-face.png'

function header(){;
    function handleClick(){
        console.log("i am clicked")
    }
    return (
        <div className='main'>
        <header className="header1">
            <img src={trollface} className='trollfaceimg'/>
            <h2 className="header-tittle">MemeGenerator</h2>
            <h3 className="header-project">react-course-project3</h3>
        </header>
        <main className="main">
            <form className="form">
                <input type="text" className="form-input" placeholder="Top Text"/>
                <input type="text" className="form-input" placeholder="Bottom Text"/>
                <button type="button" className="form-button" onClick={handleClick}>Get a Meme image</button>
            </form>
        </main>
        </div>
        
    )
}
export default header;