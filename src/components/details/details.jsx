import detailsStyles from "./details.module.css";


export default function Details(props) {



    return (
        <>  

            <div className={detailsStyles.navbar}>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <form class="d-flex" role="search">
                            <p><b>Movie Details</b></p>
                            {/* <a class="navbar-brand" href="#">
                                <img src={home} alt="Bootstrap" width="30" height="24" className={listStyles.image}/>
                            </a> */}
                        </form>
                    </div>
                </nav>
            </div>

            <div className={detailsStyles.movieCard}>
                <div className={detailsStyles.image}>
                    <img src="" alt="Poster"></img>
                </div>
                <div className={detailsStyles.details}>
                    <div><p><h3>Movie Title (Rating)</h3></p></div>
                    <div>Year | Length | Director</div>
                    <div>Cast : Actor 1, Actor 2, ...</div>
                    <div>Description : Police officer Sedat raids a derelict apartment squatted by a young couple. The man is killed, the young woman, Ayşe, escapes. When her friends and relatives offer no help, Ayşe is forced to steal cash and a car from her father and flee town like an outlaw. The chase goes deeper into the wild. Along with three men he has recruited, Sedat is pursuing her, out to kill in the name of honour. Taking off from the suburbs of Anatolia, Av: The Hunt continues reaching breath-taking natural landscapes, and recounts how a young woman is pulled into spiral of violence while trying to escape the patriarchal society she lives in.</div>


                            
                </div>

            </div>

        </>
    )
}