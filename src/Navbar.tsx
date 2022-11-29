// export function Navbar() {
//     return (
//         <nav className="navbar bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand">Navbar</a>
//     <form className="d-flex" role="search">
//       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//       <button className="btn btn-outline-success" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
//     )
// }

export function Navbar() {
    return (
<nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='./'>Navbar</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
)

    // zad. 3.6
    // dodaj akcje toggle cart, która wyświetli lub schowa koszyk
    // użyj d-block oraz d-none
    // hint: funkcja toggle
    


}