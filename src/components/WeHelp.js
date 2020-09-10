import React, {useState, useEffect} from 'react';
import decoration from '../assets/Decoration.svg'
import Pagination from "./Pagination";

export const API_URL = 'http://localhost:3000';


function WeHelp() {

    const [isFoundationsVisible, setFoundationsVisible] = useState(true)
    const [foundations, setFoundations] = useState([ ])

    const [isOrganizationsVisible, setOrganizationsVisible] = useState(false)
    const [organizations, setOrganizations] = useState([])

    const [isLocalsVisible, setLocalsVisible] = useState(false)
    const [locals, setLocals] = useState([])

    useEffect( () => {
        return (
            fetch(`${API_URL}/Organization`)
            .then(response => {
                if (response.ok === false) {throw new Error("błąd")} else {return response.json();}
            })
            .then(data => {
                setOrganizations([...data])
                return data;
            })
            .catch(err => console.log(err)),

        fetch(`${API_URL}/Fundation`)
            .then(response => {
                if (response.ok === false) {throw new Error("błąd")} else {return response.json();}
            })
            .then(data => {
                setFoundations([...data])
                return data;
            })
            .catch(err => console.log(err)),

        fetch(`${API_URL}/Locals`)
            .then(response => {
                if (response.ok === false) {throw new Error("błąd")} else {return response.json();}
            })
            .then(data => {
                setLocals([...data])
                return data;
            })
            .catch(err => console.log(err))
        )
    },[])
    //AXIOS.ALL

    //PAGINATION

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentFoundationsPosts = foundations.slice(indexOfFirstPost, indexOfLastPost);
    const numberOfPages =foundations.length/postsPerPage
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const [currentPageL, setCurrentPageL]= useState(1);
    const [postsPerPageL]= useState(3);
    const indexOfLastPostL = currentPageL * postsPerPageL;
    const indexOfFirstPostL = indexOfLastPostL - postsPerPageL;
    const currentLocalsPostsL = locals.slice(indexOfFirstPostL, indexOfLastPostL);
    const numberOfPagesL =locals.length/postsPerPageL
    const paginateL = (pageNumber)=> setCurrentPageL(pageNumber);


    const [currentPageO, setCurrentPageO]= useState(1);
    const [postsPerPageO]= useState(3);
    const indexOfLastPostO = currentPageO * postsPerPageO;
    const indexOfFirstPostO = indexOfLastPostO - postsPerPageO;
    const currentOrganizationPostsO = organizations.slice(indexOfFirstPostO, indexOfLastPostO);
    const numberOfPagesO =organizations.length/postsPerPageO
    const paginateO = (pageNumber)=> setCurrentPageO(pageNumber);

    //PAGINATION

    const handleFoundationVisible = () => {
        return (
                setFoundationsVisible(true),
                setOrganizationsVisible(false),
                setLocalsVisible(false)
        )
    }
    const handleOrganizationVisible = () => {
        return (
                setFoundationsVisible(false),
                setOrganizationsVisible(true),
                setLocalsVisible(false)
        )
    }
    const handleLocalsVisible = () => {
        return (
                setFoundationsVisible(false),
                setOrganizationsVisible(false),
                setLocalsVisible(true)
        )
    }
if (!locals){return ("....wczytywanie")}
    if (locals) {

    return (

        <section className={'help'} id={'help'}>
            <div className={'container'}>
                <h2 className={'help__title'}>Komu pomagamy?</h2>
                <img className={'decoration'} src={decoration} alt={'decoration'}/>
                <div className={'help__receiversGroups'}>
                    <button className={'btn btn-big btn-receivers'} onClick={handleFoundationVisible}>Fundacjom</button>
                    <button className={'btn btn-big btn-receivers'} onClick={handleOrganizationVisible}>Organizacjom pozarządowym</button>
                    <button className={'btn btn-big btn-receivers'} onClick={handleLocalsVisible}>Lokalnym zbiórkom</button>
                </div>

                <div className={isFoundationsVisible ? 'help__receiver' : 'help__receiver hidden'}>
                    <h3 className={'help__subtitle'}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                        współpracujemy. Możesz sprawdzić czym
                        się zajmują, komu pomagają i czego potrzebują.</h3>
                    <ul className={'help__list'}>
                        {currentFoundationsPosts.map((el, i) => {
                            return (
                                <div className={'help__box'} key={i}>
                                    <div className={'help__info'}>
                                        <p className={'help__name'}>Fundacja: "{el.name}"</p>
                                        <p className={'help__target'}>Cel i misja: {el.target}</p>
                                    </div>
                                    <p className={'help__range'}>{el.range}</p>
                                </div>
                            )
                        })
                        }
                    </ul>
                    <Pagination postPerPage={postsPerPage}
                                totalPosts={foundations.length}
                                paginate={paginate}
                                currentPage={currentPage}
                                numberOfPages={numberOfPages}/>
                </div>
                <div className={isOrganizationsVisible ? 'help__receiver' : 'help__receiver hidden'}>
                    <h3 className={'help__subtitle'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h3>
                    <ul className={'help__list'}>
                        {currentOrganizationPostsO.map((el, i) => {
                            return (
                                <div className={'help__box'} key={i}>
                                    <div className={'help__info'}>
                                        <p className={'help__name'}>Organizacja: "{el.name}"</p>
                                        <p className={'help__target'}>Cel i misja: {el.target}</p>
                                    </div>
                                    <p className={'help__range'}>{el.range}</p>
                                </div>
                            )
                        })
                        }
                    </ul>
                    <Pagination postPerPage={postsPerPageO}
                                totalPosts={organizations.length}
                                paginate={paginateO}
                                currentPage={currentPageO}
                                numberOfPages={numberOfPagesO}/>
                </div>
                <div className={isLocalsVisible ? 'help__receiver' : 'help__receiver hidden'}>
                    <h3 className={'help__subtitle'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h3>
                    <ul className={'help__list'}>
                        {currentLocalsPostsL.map((el, i) => {
                            return (
                                <div className={'help__box'} key={i}>
                                    <div className={'help__info'}>
                                        <p className={'help__name'}>Zbiórka: "{el.name}"</p>
                                        <p className={'help__target'}>Cel i misja: {el.target}</p>
                                    </div>
                                    <p className={'help__range'}>{el.range}</p>
                                </div>
                            )
                        })
                        }
                    </ul>
                    <Pagination postPerPage={postsPerPageL}
                                totalPosts={locals.length}
                                paginate={paginateL}
                                currentPage={currentPageL}
                                numberOfPages={numberOfPagesL}/>
                </div>

            </div>
        </section>
    );
}}


export default WeHelp;
