


const Company = ({companyInfo}) => {

    return <div>
        <div><h1>{companyInfo.name}</h1></div>
        <p>
            Founder: <i>{companyInfo.founder}</i>
        </p>
        <p>
            Employees: <i>{companyInfo.employees}</i>
        </p>
        <div>
            {Object.keys(companyInfo.headquarters).map(key => <div key={key}> {key}: {companyInfo.headquarters[key]}</div>)}

        <div>
            <h4>Links:</h4>
            {Object.keys(companyInfo.links).map(key => (
            <div key={key}>
                <a href={companyInfo.links[key]}>{companyInfo.links[key]} </a>
                </div>                
            ))}
        </div>
        </div>


        {/* <h2>Name: {companyInfo.name}</h2>
        <h2>Founder: {companyInfo.founder}</h2>
        <h2>Number of Employees: {companyInfo.employees}</h2>
        <h2>Headquarters: {companyInfo.headquarters.address}, {companyInfo.headquarters.city}, {companyInfo.headquarters.state}</h2>
        <h2>Links: {companyInfo.links.website}</h2> */}
    </div>
}

export default Company;