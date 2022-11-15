export function NavigationBar({page,setPage}){
    return(
        <header className="d-flex justify-content-between align-items-center">
            <p>Page: {page}</p>
            <button className="btn btn-primary btn-sm" onClick={()=>{
                const newPage = page+1
                console.log(newPage)
                setPage(newPage)
            }}>Page {page+1}</button>
        </header>
    )
}