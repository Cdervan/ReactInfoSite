/** const h1 = document.createElement("h1")
    h1.textContent = "This is an imperative way to program"
    h1.className = "header"
    document.getElementById("root").append(h1) **/

function HomeList() {
    return (
        <ul>
            <li>Dog water</li>
            <li>Goat malk</li>
            <li>Bird flu</li>
            <li>Penguin juice</li>
        </ul>
    )
}
//ReactDOM.render( <HomeList />, document.getElementById('root'))

//const element = <h1 className="header"><HomeList /></h1>

const page = (
    <div>
        <h1 className="header">JFK was assassinated by the CLintons</h1>
        <p>This is a paragraph</p>
    </div>
)

//ReactDOM.render(element, document.getElementById("root"))

ReactDOM.render(
    page,
    document.getElementById("root")
)
console.log(page)

