const Facet = () => {

    const facets = [
        { fname: "Dairy", checked: false },
        { fname: "Caffeine", checked: false },
        { fname: "Vegan", checked: false },
        { fname: "Chocolate", checked: false },
        { fname: "Taro", checked: false },
        { fname: "Strawberry", checked: false },
      ]
    return(
        <ul>
            {facets.map((facets) => (
                <div key={facets.id}>
                    <input type="checkbox" id="curretcheckbox"/><label for="{facets.fname}">{facets.fname}</label>
                </div>
            ))}
        </ul>
    );
}

export default Facet;