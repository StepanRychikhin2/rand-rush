import sty from "./Header.module.css"
const Header = (setData,data) => {
//     console.log(data)
//     console.log(setData)
// function change() {
//     setData(true)
// }

    return <div className={sty.headerbox}>
        <div>
        <h2 className={sty.title}>Rund Rush</h2>

        </div>
        <button className={sty.invetoryBtn}>
            <h3 id="invent" className={sty.invetoryTitle}>inventory</h3>
        </button>

    </div>
}

export default Header